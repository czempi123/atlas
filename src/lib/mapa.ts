// Podkladová mapa podle schváleného návrhu (docs/design/mapa-podklad.mjs), počítaná při sestavení.
// Natural Earth (balíček world-atlas), projekce geoConicConformal, vodní linky podél pobřeží a jemná
// síť poledníků. Barvy nese CSS (tokeny --map-*), takže jedna geometrie slouží světlému i tmavému režimu.
// Do prohlížeče jde jen hotová geometrie v pixelech výřezu; d3-geo zůstává na straně sestavení.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoArea, geoBounds, geoConicConformal, geoDistance, geoGraticule, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { MultiPolygon, Polygon, Position } from 'geojson';
import type { TKrajina, TMisto, TObdobi } from './schema';

export interface Vyrez {
  sirka: number;
  vyska: number;
  stred: [number, number];
  meritko: number;
  rovnobezky: [number, number];
}

/** Výřezy období 1 ze schváleného návrhu P1. */
export const VYREZY_OBDOBI_1 = {
  notebook: { sirka: 1032, vyska: 456, stred: [21.6, 38.2], meritko: 3050, rovnobezky: [35, 41] },
  telefon: { sirka: 390, vyska: 330, stred: [24.2, 38.6], meritko: 2350, rovnobezky: [35, 41] },
  mini: { sirka: 520, vyska: 400, stred: [23.6, 39.4], meritko: 6300, rovnobezky: [35, 41] },
} satisfies Record<string, Vyrez>;

export type DruhVyrezu = 'notebook' | 'telefon';

/** Výřez období pro notebook (z obdobi.yaml) a telefon (u období 1 schválený, jinak odvozený). */
export function vyrezObdobi(o: Pick<TObdobi, 'id' | 'mapa'>, druh: DruhVyrezu): Vyrez {
  if (o.id === 1) return VYREZY_OBDOBI_1[druh];
  const notebook: Vyrez = { sirka: 1032, vyska: 456, stred: o.mapa.stred, meritko: o.mapa.meritko, rovnobezky: o.mapa.rovnobezky };
  if (druh === 'notebook') return notebook;
  // Telefon: stejný střed, měřítko ve stejném poměru jako u schváleného výřezu období 1.
  const pomer = VYREZY_OBDOBI_1.telefon.meritko / VYREZY_OBDOBI_1.notebook.meritko;
  return { sirka: 390, vyska: 330, stred: o.mapa.stred, meritko: Math.round(o.mapa.meritko * pomer), rovnobezky: o.mapa.rovnobezky };
}

const cache = new Map<string, Polygon['coordinates'][]>();

function nactiPevninu(rozliseni: '10m' | '50m'): Polygon['coordinates'][] {
  const hotova = cache.get(rozliseni);
  if (hotova) return hotova;
  const require = createRequire(import.meta.url);
  const soubor = require.resolve(`world-atlas/land-${rozliseni}.json`);
  const svet = JSON.parse(readFileSync(soubor, 'utf8'));
  const land = feature(svet, svet.objects.land) as unknown as { features?: { geometry: MultiPolygon | Polygon }[]; geometry?: MultiPolygon };
  const geometrie = land.features ? land.features.map((f) => f.geometry) : [land.geometry!];
  const polygony = geometrie.flatMap((g) => (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]));
  cache.set(rozliseni, polygony);
  return polygony;
}

/** Rezerva kolem výřezu (podíl šířky a výšky), aby kamera při přechodu a jiný poměr stran neukázaly prázdno. */
const REZERVA = 0.35;

export function projekce(v: Vyrez, rezerva = 20) {
  const rx = typeof rezerva === 'number' && rezerva < 1 ? v.sirka * rezerva : rezerva;
  const ry = typeof rezerva === 'number' && rezerva < 1 ? v.vyska * rezerva : rezerva;
  return geoConicConformal()
    .parallels(v.rovnobezky)
    .rotate([-v.stred[0], 0])
    .center([0, v.stred[1]])
    .scale(v.meritko)
    .translate([v.sirka / 2, v.vyska / 2])
    .clipExtent([[-rx, -ry], [v.sirka + rx, v.vyska + ry]]);
}

/** Místo na mini mapě osoby: souřadnice, název a řádky pod ním („působení 306 př. n. l.“). */
export interface MistoMiniMapy {
  souradnice: [number, number];
  nazev: string;
  radky: string[];
}

export type StranaPopisku = 'vpravo' | 'vlevo';

/**
 * Na kterou stranu od bodu patří popisek: vlevo u pravého okraje výřezu, nebo když těsně vpravo
 * ve stejné výšce leží jiný bod (Korinth vedle Athén), aby se popisky nepřekryly.
 */
export function stranyPopisku(xy: [number, number][], sirka: number): StranaPopisku[] {
  return xy.map(([x, y], i) => {
    if (x > sirka * 0.6) return 'vlevo';
    const soused = xy.some(([x2, y2], j) => j !== i && x2 > x && x2 - x < 170 && Math.abs(y2 - y) < 30);
    return soused ? 'vlevo' : 'vpravo';
  });
}

// Rozměry popisku v jednotkách výřezu. Počítáme s většími písmy na telefonu (MiniMapa.astro), ať se vejde všude.
const sirkaPopisku = (m: MistoMiniMapy) => 13 + Math.max(m.nazev.length * 11.5, ...m.radky.map((r) => r.length * 9.2));
const VYSKA_NAZVU = 24;
const VYSKA_RADKU = 22;

/** Obdélník, který zabírají body s popisky (v pixelech výřezu). */
function obalPopisku(v: Vyrez, mista: MistoMiniMapy[]) {
  const proj = projekce(v, 1e6);
  const xy = mista.map((m) => proj(m.souradnice) as [number, number]);
  const strany = stranyPopisku(xy, v.sirka);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  xy.forEach(([x, y], i) => {
    const s = sirkaPopisku(mista[i]);
    x0 = Math.min(x0, strany[i] === 'vpravo' ? x - 8 : x - s);
    x1 = Math.max(x1, strany[i] === 'vpravo' ? x + s : x + 8);
    y0 = Math.min(y0, y - VYSKA_NAZVU);
    y1 = Math.max(y1, y + mista[i].radky.length * VYSKA_RADKU + 6);
  });
  return { x0, y0, x1, y1 };
}

/**
 * Výřez mini mapy osoby. Dokud jsou všechna její místa vidět ve výchozím egejském výřezu, zůstává ten.
 * Jinak se střed a měřítko spočítají tak, aby se vešla všechna místa i s popisky (Sinópé, Thurioi).
 */
export function vyrezMiniMapy(mista: MistoMiniMapy[], vychozi: Vyrez = VYREZY_OBDOBI_1.mini): Vyrez {
  if (!mista.length) return vychozi;
  const p0 = projekce(vychozi, 1e6);
  const vsechnaVidet = mista.every((m) => {
    const [x, y] = p0(m.souradnice) as [number, number];
    return x > 0 && x < vychozi.sirka && y > 0 && y < vychozi.vyska;
  });
  if (vsechnaVidet) return vychozi;

  const delky = mista.map((m) => m.souradnice[0]);
  const sirky = mista.map((m) => m.souradnice[1]);
  const stred: [number, number] = [(Math.min(...delky) + Math.max(...delky)) / 2, (Math.min(...sirky) + Math.max(...sirky)) / 2];
  const OKRAJ = 8;
  let v: Vyrez = { ...vychozi, stred };
  for (let meritko = vychozi.meritko; meritko >= 250; meritko = Math.floor(meritko * 0.94)) {
    v = { ...vychozi, stred, meritko };
    // Popisky visí pod bodem a do strany: střed výřezu dorovnáme na střed bodů i s popisky.
    for (let k = 0; k < 3; k++) {
      const o = obalPopisku(v, mista);
      const novy = projekce(v, 1e6).invert!([(o.x0 + o.x1) / 2, (o.y0 + o.y1) / 2]) as [number, number];
      v = { ...v, stred: [Math.round(novy[0] * 100) / 100, Math.round(novy[1] * 100) / 100] };
    }
    const o = obalPopisku(v, mista);
    if (o.x0 >= OKRAJ && o.x1 <= v.sirka - OKRAJ && o.y0 >= OKRAJ && o.y1 <= v.vyska - OKRAJ) return v;
  }
  return v;
}

export interface Podklad {
  pevnina: string;
  sit: string;
  /** měřítko: délka úsečky v px a počet km */
  meritko: { px: number; km: number };
  bod: (lonLat: [number, number]) => [number, number];
}

/** Hranice výřezu (s rezervou) ve stupních. */
function hranice(v: Vyrez, rezerva: number) {
  const proj = projekce(v, 0);
  const rx = v.sirka * rezerva + 40;
  const ry = v.vyska * rezerva + 40;
  const body: [number, number][] = [];
  for (let i = 0; i <= 8; i++) {
    const x = -rx + ((v.sirka + 2 * rx) * i) / 8;
    const y = -ry + ((v.vyska + 2 * ry) * i) / 8;
    body.push(proj.invert!([x, -ry]) as [number, number], proj.invert!([x, v.vyska + ry]) as [number, number]);
    body.push(proj.invert!([-rx, y]) as [number, number], proj.invert!([v.sirka + rx, y]) as [number, number]);
  }
  return {
    zapad: Math.min(...body.map((r) => r[0])),
    vychod: Math.max(...body.map((r) => r[0])),
    jih: Math.min(...body.map((r) => r[1])),
    sever: Math.max(...body.map((r) => r[1])),
  };
}

/** Krok sítě poledníků podle měřítka: 2° pro Egejské moře, víc pro větší výřezy. */
function krokSite(meritko: number): number {
  if (meritko >= 2000) return 2;
  if (meritko >= 900) return 5;
  if (meritko >= 400) return 10;
  return 15;
}

/**
 * Obal projekce, který v pixelech vynechá body bližší než `tolerance` k poslednímu zachovanému bodu.
 * Pobřeží 10m má tisíce bodů na pixel; tohle je zmenší zhruba desetkrát bez viditelného rozdílu.
 */
function zjednodusena(proj: ReturnType<typeof projekce>, tolerance: number) {
  return {
    stream(vystup: any) {
      let px = NaN;
      let py = NaN;
      let poslx = NaN;
      let posly = NaN;
      let vynechan = false;
      const filtr = {
        point(x: number, y: number) {
          if (Number.isNaN(px) || Math.abs(x - px) + Math.abs(y - py) >= tolerance) {
            vystup.point(x, y);
            px = x;
            py = y;
            vynechan = false;
          } else {
            poslx = x;
            posly = y;
            vynechan = true;
          }
        },
        lineStart() {
          px = py = NaN;
          vynechan = false;
          vystup.lineStart();
        },
        lineEnd() {
          if (vynechan) vystup.point(poslx, posly);
          vystup.lineEnd();
        },
        polygonStart() { vystup.polygonStart(); },
        polygonEnd() { vystup.polygonEnd(); },
        sphere() { vystup.sphere?.(); },
      };
      return proj.stream(filtr as any);
    },
  };
}

/** Spočítá cesty SVG pro výřez. Polygony mimo výřez se vynechají (jako v referenčním generátoru). */
export function podklad(v: Vyrez, rezerva = 0): Podklad {
  const proj = projekce(v, rezerva || 20);
  const cesta = geoPath(zjednodusena(proj, 0.9) as any).digits(1);
  const h = hranice(v, rezerva);
  // 10m u detailních výřezů (Egejské moře), 50m u velkých, kde by jemnější pobřeží splynulo.
  const rozliseni = v.meritko >= 1500 ? '10m' : '50m';
  const vybrane = nactiPevninu(rozliseni).filter((p) => {
    const [[x0, y0], [x1, y1]] = geoBounds({ type: 'Polygon', coordinates: p });
    if (geoArea({ type: 'Polygon', coordinates: p }) > 2 * Math.PI) return false;
    if (y1 < h.jih || y0 > h.sever) return false;
    if (x0 < x1 && (x1 < h.zapad || x0 > h.vychod)) return false;
    // Drobné ostrůvky menší než půl pixelu se vynechají.
    const [[a, b], [c, d]] = [proj([x0, y0]) ?? [0, 0], proj([x1, y1]) ?? [0, 0]];
    return Math.abs(c - a) + Math.abs(d - b) > 1.2;
  });
  const land: MultiPolygon = { type: 'MultiPolygon', coordinates: vybrane as Position[][][] };
  // Měřítko: kolik km odpovídá 120 px ve středu výřezu, zaokrouhleno na pěkné číslo.
  const a = proj.invert!([v.sirka / 2 - 60, v.vyska / 2]) as [number, number];
  const b = proj.invert!([v.sirka / 2 + 60, v.vyska / 2]) as [number, number];
  const kmNa120 = geoDistance(a, b) * 6371;
  const pekne = [10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000].reduce((x, y) => (Math.abs(y - kmNa120) < Math.abs(x - kmNa120) ? y : x));
  const krok = krokSite(v.meritko);
  return {
    pevnina: cesta(land) ?? '',
    sit: cesta(geoGraticule().step([krok, krok]).extent([[-180, -80], [180, 80]])()) ?? '',
    meritko: { km: pekne, px: Math.round((pekne / kmNa120) * 120) },
    bod: (ll) => {
      const p = proj(ll) ?? projekce(v, 1e6)(ll)!;
      return [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
    },
  };
}

/** Podobnostní převod mezi pixely dvou výřezů: x' = s·x + tx, y' = s·y + ty. */
export type Prevod = [number, number, number];

/** Najde převod z výřezu a do výřezu b metodou nejmenších čtverců na mřížce bodů výřezu a. */
export function prevod(a: Vyrez, b: Vyrez): Prevod {
  const pa = projekce(a, 1e6);
  const pb = projekce(b, 1e6);
  const X: [number, number][] = [];
  const Y: [number, number][] = [];
  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 6; j++) {
      const p: [number, number] = [(a.sirka * i) / 6, (a.vyska * j) / 6];
      const ll = pa.invert!(p);
      if (!ll) continue;
      const q = pb(ll as [number, number]);
      if (!q || !Number.isFinite(q[0])) continue;
      X.push(p);
      Y.push(q as [number, number]);
    }
  }
  const n = X.length;
  const mx = X.reduce((s, p) => s + p[0], 0) / n;
  const my = X.reduce((s, p) => s + p[1], 0) / n;
  const nx = Y.reduce((s, p) => s + p[0], 0) / n;
  const ny = Y.reduce((s, p) => s + p[1], 0) / n;
  let cit = 0;
  let jm = 0;
  for (let i = 0; i < n; i++) {
    cit += (X[i][0] - mx) * (Y[i][0] - nx) + (X[i][1] - my) * (Y[i][1] - ny);
    jm += (X[i][0] - mx) ** 2 + (X[i][1] - my) ** 2;
  }
  const s = cit / jm;
  const r = (x: number) => Math.round(x * 1000) / 1000;
  return [r(s), r(nx - s * mx), r(ny - s * my)];
}

export interface PodkladObdobi {
  obdobi: number;
  druh: DruhVyrezu;
  sirka: number;
  vyska: number;
  pevnina: string;
  sit: string;
  meritko: { px: number; km: number };
  /** pozice míst v pixelech výřezu (i mimo výřez, kvůli štítkům u okraje) */
  mista: Record<string, [number, number]>;
  krajiny: { id: string; nazev: string; dnes?: string; druh: 'more' | 'krajina'; xy: [number, number] }[];
  /** převody do ostatních období, pro plynulý přesun kamery */
  prevody: Record<string, Prevod>;
  popis: string;
}

/** Úplný podklad jednoho období pro ostrov Mapa a čas. */
export function podkladObdobi(
  o: TObdobi,
  druh: DruhVyrezu,
  vsechna: TObdobi[],
  mista: TMisto[],
  krajiny: TKrajina[],
): PodkladObdobi {
  const v = vyrezObdobi(o, druh);
  const p = podklad(v, REZERVA);
  const prevody: Record<string, Prevod> = {};
  for (const jine of vsechna) if (jine.id !== o.id) prevody[jine.id] = prevod(v, vyrezObdobi(jine, druh));
  return {
    obdobi: o.id,
    druh,
    sirka: v.sirka,
    vyska: v.vyska,
    pevnina: p.pevnina,
    sit: p.sit,
    meritko: p.meritko,
    mista: Object.fromEntries(mista.map((m) => [m.id, p.bod(m.souradnice)])),
    krajiny: krajiny
      .filter((k) => k.obdobi.includes(o.id))
      .map((k) => ({ id: k.id, nazev: k.nazev, dnes: k.dnes, druh: k.druh, xy: p.bod(k.souradnice) })),
    prevody,
    popis: o.mapa.popis,
  };
}
