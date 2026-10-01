// Logika interaktivních bloků: vyhodnocení, posun odpovědi, texty do deníku a stav po obnovení.
// Čisté funkce bez DOM a Astra; běží při sestavení i v prohlížeči a mají testy v tests/data/bloky.test.ts.
// Zpětná vazba nikdy nehodnotí souhlas s filozofem a nic se neboduje.
import type { TBlokVolba, TBlokZmena } from './bloky-schema';
import { let_, vekVRoce, vzdalenost, zivotOsoby, naAstro, zAstro, type OsobaMapy, type Vzdalenost } from './cas-mapy';
import { rok as rokText } from './casy';

const NBSP = ' ';
const PISMENA = ['A', 'B', 'C', 'D'] as const;

// ─── Text ─────────────────────────────────────────────────────────────────────

function escapuj(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Jeden řádek textu do HTML: escapuje a *kurzívu* převede na <em>. */
export function radek(text: string): string {
  return escapuj(text.trim()).replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
}

/** Text s odstavci (prázdný řádek) do seznamu HTML odstavců bez obalu <p>. */
export function odstavce(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((o) => o.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean)
    .map(radek);
}

/** Ukončí větu tečkou, pokud už nekončí interpunkcí. */
export function veta(s: string): string {
  const t = s.trim();
  return /[.!?…“]$/.test(t) ? t : `${t}.`;
}

export function pismeno(i: number): string {
  return PISMENA[i] ?? String(i + 1);
}

function kroku(n: number): string {
  if (n === 1) return `1${NBSP}krok`;
  if (n >= 2 && n <= 4) return `${n}${NBSP}kroky`;
  return `${n}${NBSP}kroků`;
}

const tvar = (o: { zena?: boolean }, muz: string, zena: string) => (o.zena ? zena : muz);

// ─── Volba s důvodem ──────────────────────────────────────────────────────────

export interface ZpetnaVolby {
  titulek: string;
  text: string;
  coUdelal?: { nadpis: string; text: string; stejne: boolean };
}

/** Zpětná vazba k vybrané možnosti; jméno filozofa v 1. pádě z dat („Co udělal Sókratés“). */
export function zpetnaVolby(blok: Pick<TBlokVolba, 'moznosti' | 'coUdelal'>, i: number, filozof?: { jmeno: string; zena?: boolean }): ZpetnaVolby {
  const m = blok.moznosti[i];
  if (!m) throw new Error(`Volba nemá možnost ${i}`);
  const z: ZpetnaVolby = { titulek: `Tvůj tah: ${veta(m.tah)}`, text: m.zpetna };
  if (blok.coUdelal && filozof) {
    z.coUdelal = {
      nadpis: `Co ${tvar(filozof, 'udělal', 'udělala')} ${filozof.jmeno}`,
      text: m.jeho ? blok.coUdelal.stejne : blok.coUdelal.jinak,
      stejne: m.jeho,
    };
  }
  return z;
}

/** Text zápisu do deníku: „B · Najdu lidi… Proč: …“ */
export function zapisVolby(blok: Pick<TBlokVolba, 'moznosti'>, i: number, proc = ''): string {
  const m = blok.moznosti[i];
  const zaklad = `${pismeno(i)} · ${veta(m.text)}`;
  return proc.trim() ? `${zaklad} Proč: ${veta(proc)}` : zaklad;
}

export interface StavVolby {
  vyber: number;
  proc: string;
  potvrzeno: boolean;
}

/** Přečte uložený stav a zahodí ho, když neodpovídá bloku (např. autor ubral možnost). */
export function platnyStavVolby(s: unknown, pocet: number): StavVolby | null {
  if (!s || typeof s !== 'object') return null;
  const x = s as Partial<StavVolby>;
  if (typeof x.vyber !== 'number' || !Number.isInteger(x.vyber) || x.vyber < 0 || x.vyber >= pocet) return null;
  return { vyber: x.vyber, proc: typeof x.proc === 'string' ? x.proc : '', potvrzeno: x.potvrzeno === true };
}

// ─── Odkryj ───────────────────────────────────────────────────────────────────

export interface StavOdkryj {
  odpoved: string;
  odkryto: boolean;
  kontrola: boolean[];
}

export function platnyStavOdkryj(s: unknown, pocetKontrol: number): StavOdkryj | null {
  if (!s || typeof s !== 'object') return null;
  const x = s as Partial<StavOdkryj>;
  const kontrola = Array.from({ length: pocetKontrol }, (_, i) => Array.isArray(x.kontrola) && x.kontrola[i] === true);
  return { odpoved: typeof x.odpoved === 'string' ? x.odpoved : '', odkryto: x.odkryto === true, kontrola };
}

// ─── Změň jednu věc ───────────────────────────────────────────────────────────

/** Posunula se odpověď oproti základní podmínce? */
export function posunZmeny(zaklad: string, ted: string): 'posun' | 'stejne' {
  return zaklad === ted ? 'stejne' : 'posun';
}

export interface StavZmeny {
  /** id možnosti v základní scéně */
  zaklad: string | null;
  /** odpovědi v podmínkách: id podmínky → id možnosti */
  podminky: Record<string, string>;
  /** právě zapnutá podmínka */
  aktivni: string | null;
}

export function platnyStavZmeny(s: unknown, blok: Pick<TBlokZmena, 'moznosti' | 'podminky'>): StavZmeny | null {
  if (!s || typeof s !== 'object') return null;
  const x = s as Partial<StavZmeny>;
  const moznosti = new Set(blok.moznosti.map((m) => m.id));
  const podminky = new Set(blok.podminky.map((p) => p.id));
  if (typeof x.zaklad !== 'string' || !moznosti.has(x.zaklad)) return null;
  const odpovedi: Record<string, string> = {};
  for (const [p, m] of Object.entries(x.podminky ?? {})) if (podminky.has(p) && typeof m === 'string' && moznosti.has(m)) odpovedi[p] = m;
  return { zaklad: x.zaklad, podminky: odpovedi, aktivni: typeof x.aktivni === 'string' && podminky.has(x.aktivni) ? x.aktivni : null };
}

/** Text do deníku: „Na začátku: Uteču. Když je rozsudek spravedlivý: Zůstanu.“ */
export function zapisZmeny(blok: Pick<TBlokZmena, 'moznosti' | 'podminky'>, stav: Pick<StavZmeny, 'zaklad' | 'podminky'>): string {
  const text = (id: string | null) => blok.moznosti.find((m) => m.id === id)?.text ?? '';
  const casti = [`Na začátku: ${veta(text(stav.zaklad))}`];
  for (const p of blok.podminky) {
    const o = stav.podminky[p.id];
    if (!o) continue;
    const posun = posunZmeny(stav.zaklad ?? '', o) === 'posun' ? ' (posun)' : '';
    casti.push(`${p.prepinac}: ${veta(text(o))}${posun}`);
  }
  return casti.join(' ');
}

// ─── Spor ─────────────────────────────────────────────────────────────────────

/** Škála má pět poloh: 0 = úplně u první strany, 2 = uprostřed, 4 = úplně u druhé. */
export const POLOHY = 5;
export const STRED = 2;

/** „Platón“, „spíš Platón“, „uprostřed“, „spíš Diogenés“, „Diogenés“. */
export function popisPolohy(i: number, a: string, b: string): string {
  return [a, `spíš ${a}`, 'uprostřed', `spíš ${b}`, b][i] ?? '';
}

export function platnaPoloha(x: unknown): number | null {
  return typeof x === 'number' && Number.isInteger(x) && x >= 0 && x < POLOHY ? x : null;
}

/**
 * Zpětná vazba k posunu na škále. Hodnotí pohyb a ptá se na důvod; nikdy neříká,
 * která strana má pravdu.
 */
export function zpetnaSporu(prvni: number, konecna: number, a: string, b: string): string {
  if (prvni === konecna) {
    if (konecna === STRED) return 'Zůstal jsi uprostřed. Co by se muselo stát, aby ses přiklonil k jedné straně?';
    return 'Zůstal jsi tam, kde jsi začal. Který argument druhé strany šel nejhůř odbýt? Zkus říct, proč tě nepřesvědčil.';
  }
  const k = konecna - prvni;
  const kdo = k > 0 ? b : a;
  const zaklad = `Posunul ses o ${kroku(Math.abs(k))} ke straně, kterou hájí ${kdo}.`;
  const presel = (prvni < STRED && konecna > STRED) || (prvni > STRED && konecna < STRED);
  if (presel) return `${zaklad} Přešel jsi na druhou stranu. Který argument to udělal? Řekni ho vlastními slovy.`;
  if (konecna === STRED) return `${zaklad} Teď stojíš uprostřed: obě strany pro tebe mají váhu. Který argument tě posunul?`;
  return `${zaklad} Který argument tě posunul? Řekni ho vlastními slovy.`;
}

/** Text do deníku: „Na začátku: spíš Platón. Po argumentech: uprostřed. Co mě posunulo: …“ */
export function zapisSporu(prvni: number, konecna: number, a: string, b: string, duvod = ''): string {
  const zaklad = `Na začátku: ${popisPolohy(prvni, a, b)}. Po argumentech: ${popisPolohy(konecna, a, b)}.`;
  if (!duvod.trim()) return zaklad;
  return `${zaklad} ${prvni === konecna ? 'Co mě udrželo' : 'Co mě posunulo'}: ${veta(duvod)}`;
}

export interface StavSporu {
  prvni: number | null;
  konecna: number | null;
  duvod: string;
}

export function platnyStavSporu(s: unknown): StavSporu | null {
  if (!s || typeof s !== 'object') return null;
  const x = s as Partial<StavSporu>;
  const prvni = platnaPoloha(x.prvni);
  if (prvni === null) return null;
  return { prvni, konecna: platnaPoloha(x.konecna), duvod: typeof x.duvod === 'string' ? x.duvod : '' };
}

// ─── Kdo žil dřív? ────────────────────────────────────────────────────────────

export interface FaktaDvojice {
  vzdalenost: Vzdalenost;
  /** kdo se narodil (nebo začal působit) dřív */
  starsi: 'a' | 'b';
  /** věta o věku v roce úmrtí toho, kdo zemřel dřív (jen u současníků) */
  vetaOVeku: string | null;
  /** rok pro Mapu a čas: u současníků poslední společný rok, jinak rok úmrtí staršího */
  rokMapy: number;
  odkazMapy: string;
}

/** Fakta o dvojici lidí z dat, nebo null, když některému chybí roky. */
export function faktaDvojice(a: OsobaMapy, b: OsobaMapy): FaktaDvojice | null {
  const za = zivotOsoby(a);
  const zb = zivotOsoby(b);
  const v = vzdalenost(a, b);
  if (!za || !zb || !v) return null;
  const starsi: 'a' | 'b' = naAstro(zb.od) < naAstro(za.od) ? 'b' : 'a';
  let vetaOVeku: string | null = null;
  let rokMapy: number;
  let osoba: OsobaMapy;
  let srovnat: OsobaMapy;
  if (v.druh === 'soucasne') {
    // Kdo zemřel dřív, a kolik let v tu chvíli žil ten druhý.
    const [prvni, druhy] = za.do <= zb.do ? [a, b] : [b, a];
    rokMapy = Math.min(za.do, zb.do);
    osoba = a;
    srovnat = b;
    const vek = vekVRoce(druhy, rokMapy);
    const zp = zivotOsoby(prvni)!;
    if (vek !== null && zp.konec === 'umrti') {
      const asi = druhy.narozen?.priblizne || zp.doPriblizne ? `asi${NBSP}` : '';
      vetaOVeku =
        vek === 0
          ? `Když ${prvni.jmeno} ${tvar(prvni, 'zemřel', 'zemřela')} (${rokText(rokMapy)}), ${druhy.jmeno} se právě ${tvar(druhy, 'narodil', 'narodila')}.`
          : `Když ${prvni.jmeno} ${tvar(prvni, 'zemřel', 'zemřela')} (${rokText(rokMapy)}), ${tvar(druhy, 'žil', 'žila')} ${druhy.jmeno} na světě ${asi}${let_(vek)}.`;
    }
  } else {
    const [driv, pozdeji] = starsi === 'a' ? [a, b] : [b, a];
    rokMapy = zivotOsoby(driv)!.do;
    osoba = driv;
    srovnat = pozdeji;
  }
  return {
    vzdalenost: v,
    starsi,
    vetaOVeku,
    rokMapy,
    odkazMapy: `/mapa/?rok=${rokMapy}&osoba=${osoba.id}&srovnat=${srovnat.id}`,
  };
}

export type OdhadPoradi = 'a' | 'b' | 'soucasne';

/** Popíše odhad pořadí vedle skutečnosti. Fakt se potvrdí nebo opraví, vždy s důvodem z dat. */
export function hodnotPoradi(odhad: OdhadPoradi, f: FaktaDvojice, a: OsobaMapy, b: OsobaMapy): string {
  const S = f.starsi === 'a' ? a : b;
  const narodil = tvar(S, 'narodil', 'narodila');
  const zil = tvar(S, 'žil', 'žila');
  const t = f.vzdalenost.text;
  if (f.vzdalenost.druh === 'soucasne') {
    if (odhad === 'soucasne') return `Sedí to: jejich životy se překrývají. ${t}`;
    if (odhad === f.starsi) return `${S.jmeno} se opravdu ${narodil} dřív. Jejich životy se ale překrývají. ${t}`;
    return `Je to naopak: dřív se ${narodil} ${S.jmeno}. A jejich životy se překrývají. ${t}`;
  }
  if (odhad === 'soucasne') return `Nepotkali se: ${S.jmeno} ${zil} dřív. ${t}`;
  if (odhad === f.starsi) return `Sedí to: ${S.jmeno} ${zil} dřív. ${t}`;
  return `Je to naopak: dřív ${zil} ${S.jmeno}. ${t}`;
}

export interface OdhadVzdalenosti {
  /** tipuje, že se jejich životy překrývají */
  potkali: boolean;
  let: number;
}

/** Porovná odhad vzdálenosti se skutečností; popisuje, neznámkuje. */
export function hodnotVzdalenost(odhad: OdhadVzdalenosti, f: FaktaDvojice): string {
  const skut = f.vzdalenost;
  const potkali = skut.druh === 'soucasne';
  const tip = odhad.potkali ? `Tipoval jsi, že žili současně ${let_(odhad.let)}.` : `Tipoval jsi, že je dělí ${let_(odhad.let)}.`;
  if (odhad.potkali !== potkali) {
    return `${tip} ${skut.text} ${potkali ? 'Jejich životy se ve skutečnosti překrývají.' : 'Ve skutečnosti se nepotkali.'}`;
  }
  const rozdil = odhad.let - skut.let;
  const tolerance = Math.max(5, Math.round(skut.let * 0.15));
  const srovnani =
    Math.abs(rozdil) <= tolerance
      ? 'To je velmi blízko.'
      : rozdil < 0
        ? `Ve skutečnosti je to o ${let_(-rozdil)} víc.`
        : `Ve skutečnosti je to o ${let_(rozdil)} méně.`;
  return `${tip} ${skut.text} ${srovnani}`;
}

export interface StavKdoZil {
  /** pořadí: 'a' | 'b' | 'soucasne'; vzdálenost: kde student položil začátek života B (astronomický rok) */
  odhad: OdhadPoradi | { start: number };
  odkryto: boolean;
}

export function platnyStavKdoZil(s: unknown, druh: 'poradi' | 'vzdalenost', osa?: OsaOdhadu): StavKdoZil | null {
  if (!s || typeof s !== 'object') return null;
  const x = s as Partial<StavKdoZil>;
  if (druh === 'poradi') {
    if (x.odhad !== 'a' && x.odhad !== 'b' && x.odhad !== 'soucasne') return null;
    return { odhad: x.odhad, odkryto: x.odkryto === true };
  }
  const o = x.odhad as { start?: unknown } | undefined;
  if (!o || typeof o !== 'object' || typeof o.start !== 'number' || !Number.isFinite(o.start)) return null;
  const start = osa ? Math.min(osa.maxStart, Math.max(osa.minStart, Math.round(o.start))) : Math.round(o.start);
  return { odhad: { start }, odkryto: x.odkryto === true };
}

// ─── Odhad vzdálenosti tažením na ose ─────────────────────────────────────────

/** Osa pro odhad: život A pevně, život B (jeho skutečná délka) student posouvá. Roky jsou astronomické. */
export interface OsaOdhadu {
  od: number;
  do: number;
  /** život A */
  a: { od: number; do: number };
  /** délka života B v letech */
  delkaB: number;
  /** skutečný začátek B */
  startB: number;
  /** kde B začíná, než student sáhne */
  vychozi: number;
  minStart: number;
  maxStart: number;
  /** krok posunu v letech */
  krok: number;
}

/**
 * Osa souměrná kolem života A, aby rozsah neprozradil, na kterou stranu B patří.
 * Výchozí poloha B: začíná 50 let po konci A.
 */
export function osaOdhadu(a: OsobaMapy, b: OsobaMapy): OsaOdhadu | null {
  const za = zivotOsoby(a);
  const zb = zivotOsoby(b);
  if (!za || !zb) return null;
  const A = { od: naAstro(za.od), do: naAstro(za.do) };
  const delkaB = naAstro(zb.do) - naAstro(zb.od);
  const startB = naAstro(zb.od);
  const stred = (A.od + A.do) / 2;
  const potreba = Math.max(Math.abs(startB - stred), Math.abs(startB + delkaB - stred)) + 60;
  const pul = Math.ceil(Math.max(220, potreba, (A.do - A.od) / 2 + delkaB + 60) / 50) * 50;
  const od = Math.floor((stred - pul) / 50) * 50;
  const do_ = Math.ceil((stred + pul) / 50) * 50;
  const krok = 5;
  const minStart = od;
  const maxStart = do_ - delkaB;
  const vychozi = Math.min(maxStart, Math.round((A.do + 50) / krok) * krok);
  return { od, do: do_, a: A, delkaB, startB, vychozi, minStart, maxStart, krok };
}

/** Co student odhadl, když B začíná v roce `start`: překryv, nebo mezera mezi životy. */
export function odhadZPolohy(osa: Pick<OsaOdhadu, 'a' | 'delkaB'>, start: number): OdhadVzdalenosti {
  const konec = start + osa.delkaB;
  const prekryv = Math.min(osa.a.do, konec) - Math.max(osa.a.od, start);
  return prekryv >= 0 ? { potkali: true, let: prekryv } : { potkali: false, let: -prekryv };
}

/** Krátký popis odhadu pro čtečky a pod osu: „žili by současně 30 let“, „dělila by je 120 let“. */
export function popisOdhadu(o: OdhadVzdalenosti): string {
  if (o.potkali) return o.let === 0 ? 'jeden by zemřel v roce, kdy se druhý narodil' : `žili by současně ${let_(o.let)}`;
  const n = o.let;
  const dela = n === 1 ? 'dělil by je' : n >= 2 && n <= 4 ? 'dělily by je' : 'dělilo by je';
  return `${dela} ${let_(n)}`;
}

/** Poloha v procentech osy (pro pruhy a značky). */
export function naProcenta(osa: Pick<OsaOdhadu, 'od' | 'do'>, rokAstro: number): number {
  return ((rokAstro - osa.od) / (osa.do - osa.od)) * 100;
}

/** Značky osy na kulatých letopočtech (po 50, 100 nebo 200 letech), vrací astronomické roky pro polohu. */
export function znackyOsy(osa: Pick<OsaOdhadu, 'od' | 'do'>): number[] {
  const rozsah = osa.do - osa.od;
  const krok = rozsah > 900 ? 200 : rozsah > 500 ? 100 : 50;
  const z: number[] = [];
  for (let r = Math.ceil(zAstro(osa.od) / krok) * krok; naAstro(r) < osa.do; r += krok) {
    if (r === 0) continue;
    const a = naAstro(r);
    if (a > osa.od) z.push(a);
  }
  return z;
}

export interface PruhOsy {
  /** začátek a šířka v procentech osy */
  zacatek: number;
  sirka: number;
}

/** Geometrie malé osy se dvěma životy: rozsah s okrajem a dva pruhy v procentech. */
export function osaDvou(a: OsobaMapy, b: OsobaMapy): { od: number; do: number; a: PruhOsy; b: PruhOsy } | null {
  const za = zivotOsoby(a);
  const zb = zivotOsoby(b);
  if (!za || !zb) return null;
  const min = Math.min(naAstro(za.od), naAstro(zb.od));
  const max = Math.max(naAstro(za.do), naAstro(zb.do));
  const okraj = Math.max(10, Math.round((max - min) * 0.08));
  const od = min - okraj;
  const do_ = max + okraj;
  const pruh = (z: { od: number; do: number }): PruhOsy => ({
    zacatek: ((naAstro(z.od) - od) / (do_ - od)) * 100,
    sirka: ((naAstro(z.do) - naAstro(z.od)) / (do_ - od)) * 100,
  });
  return { od, do: do_, a: pruh(za), b: pruh(zb) };
}

// ─── Kontrola obsahu bloků proti datům ────────────────────────────────────────

/** Odkazy bloku z YAML na data: osoby v lide.yaml a prameny v zdroje.yaml. Vrací seznam chyb. */
export function chybyBloku(
  id: string,
  blok: { druh: string; zdroje: string[]; coUdelal?: { osoba: string }; strany?: { osoba: string }[] },
  osoby: Set<string>,
  prameny: Set<string>,
): string[] {
  const chyby: string[] = [];
  const osobyBloku = [blok.coUdelal?.osoba, ...(blok.strany ?? []).map((s) => s.osoba)].filter(Boolean) as string[];
  for (const o of osobyBloku) if (!osoby.has(o)) chyby.push(`Blok „${id}“: osoba „${o}“ není v lide.yaml.`);
  for (const z of blok.zdroje) if (!prameny.has(z)) chyby.push(`Blok „${id}“: pramen „${z}“ není v zdroje.yaml.`);
  return chyby;
}
