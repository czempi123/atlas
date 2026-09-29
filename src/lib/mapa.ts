// Podkladová mapa podle schváleného návrhu (docs/design/mapa-podklad.mjs), počítaná při sestavení.
// Natural Earth land-10m (balíček world-atlas), projekce geoConicConformal, vodní linky podél pobřeží
// a síť poledníků po 2°. Barvy nese CSS (tokeny --map-*), takže jedna mapa slouží světlému i tmavému režimu.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoArea, geoBounds, geoConicConformal, geoDistance, geoGraticule, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { MultiPolygon, Polygon, Position } from 'geojson';

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

let pevnina: Polygon['coordinates'][] | null = null;

function nactiPevninu(): Polygon['coordinates'][] {
  if (pevnina) return pevnina;
  const require = createRequire(import.meta.url);
  const soubor = require.resolve('world-atlas/land-10m.json');
  const svet = JSON.parse(readFileSync(soubor, 'utf8'));
  const land = feature(svet, svet.objects.land) as unknown as { features?: { geometry: MultiPolygon | Polygon }[]; geometry?: MultiPolygon };
  const geometrie = land.features ? land.features.map((f) => f.geometry) : [land.geometry!];
  pevnina = geometrie.flatMap((g) => (g.type === 'MultiPolygon' ? g.coordinates : [g.coordinates]));
  return pevnina;
}

export function projekce(v: Vyrez) {
  return geoConicConformal()
    .parallels(v.rovnobezky)
    .rotate([-v.stred[0], 0])
    .center([0, v.stred[1]])
    .scale(v.meritko)
    .translate([v.sirka / 2, v.vyska / 2])
    .clipExtent([[-20, -20], [v.sirka + 20, v.vyska + 20]]);
}

export interface Podklad {
  pevnina: string;
  sit: string;
  /** měřítko: délka úsečky v px a počet km */
  meritko: { px: number; km: number };
  bod: (lonLat: [number, number]) => [number, number];
}

/** Spočítá cesty SVG pro výřez. Polygony mimo výřez se vynechají (jako v referenčním generátoru). */
export function podklad(v: Vyrez): Podklad {
  const proj = projekce(v);
  const cesta = geoPath(proj).digits(1);
  // Hranice výřezu ve stupních, s rezervou, pro výběr polygonů.
  const roh = (x: number, y: number) => proj.invert!([x, y]) as [number, number];
  const rohy = [roh(-40, -40), roh(v.sirka + 40, -40), roh(-40, v.vyska + 40), roh(v.sirka + 40, v.vyska + 40)];
  const zapad = Math.min(...rohy.map((r) => r[0]));
  const vychod = Math.max(...rohy.map((r) => r[0]));
  const jih = Math.min(...rohy.map((r) => r[1]));
  const sever = Math.max(...rohy.map((r) => r[1]));
  const vybrane = nactiPevninu().filter((p) => {
    const [[x0, y0], [x1, y1]] = geoBounds({ type: 'Polygon', coordinates: p });
    if (geoArea({ type: 'Polygon', coordinates: p }) > 2 * Math.PI) return false;
    if (y1 < jih || y0 > sever) return false;
    if (x0 < x1 && (x1 < zapad || x0 > vychod)) return false;
    return true;
  });
  const land: MultiPolygon = { type: 'MultiPolygon', coordinates: vybrane as Position[][][] };
  // Měřítko: kolik km odpovídá 120 px ve středu výřezu, zaokrouhleno na pěkné číslo.
  const a = proj.invert!([v.sirka / 2 - 60, v.vyska / 2]) as [number, number];
  const b = proj.invert!([v.sirka / 2 + 60, v.vyska / 2]) as [number, number];
  const kmNa120 = geoDistance(a, b) * 6371;
  const pekne = [10, 20, 25, 50, 100, 200, 250, 500, 1000].reduce((x, y) => (Math.abs(y - kmNa120) < Math.abs(x - kmNa120) ? y : x));
  return {
    pevnina: cesta(land) ?? '',
    sit: cesta(geoGraticule().step([2, 2])()) ?? '',
    meritko: { km: pekne, px: Math.round((pekne / kmNa120) * 120) },
    bod: (ll) => {
      const p = proj(ll)!;
      return [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
    },
  };
}
