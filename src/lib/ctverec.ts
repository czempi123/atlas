// Zdvoj čtverec (portrét Platóna, kapitola 02): kresba ke chlapci z Menóna. Sókratés nakreslil čtverec o straně
// dvě stopy (obsah čtyři) a ptal se, jak dlouhá je strana čtverce s obsahem osm. Chlapec zkusil čtyři stopy
// (obsah šestnáct, 83b–c), pak tři (obsah devět, 83d–e), potřetí řekl, že neví (84a–c). Pak Sókratés nakreslil
// čtyři čtverce vedle sebe, v každém úhlopříčku, a čtverec z úhlopříček má obsah osm (84d–85b).
// Kresba ukazuje tři pokusy na mřížce stopa na stopu. Souřadnice jsou ve stopách; velký čtverec má čtyři stopy,
// původní čtverec je jeho čtvrtina (levý horní roh). Podklad: docs/podklady/celek-4-co-je-skutecne.md (řádek 34),
// Menón 82b–85b ověřen 4. 10. 2026 v anglickém překladu PerseusDL.

export type PokusId = 'ctyri' | 'tri' | 'uhlopricka';
export type Bod = [number, number];

/** Strana velkého čtverce z Menóna: čtyři čtverce o straně dvě stopy. */
export const VELKY = 4;
/** Strana původního čtverce. */
export const PUVODNI = 2;
/** Hledaný obsah: dvojnásobek původního. */
export const HLEDANY = 8;

export interface Pokus {
  id: PokusId;
  /** název v přepínači */
  nazev: string;
  /** vrcholy čtverce ve stopách */
  body: Bod[];
  /** obsah ve čtverečních stopách */
  obsah: number;
  /** štítek vpravo: dvě řádky o straně */
  strana: [string, string];
  /** text pod kresbou, dokud student nespočítal */
  scena: string;
  /** text pod kresbou po spočítání */
  spocitano: string;
}

export const POKUSY: Pokus[] = [
  {
    id: 'ctyri',
    nazev: 'Strana čtyři',
    body: [[0, 0], [VELKY, 0], [VELKY, VELKY], [0, VELKY]],
    obsah: 16,
    strana: ['strana', 'čtyři stopy'],
    scena: 'Chlapec řekl: dvojnásobnou stranu. Čtverec o straně čtyři stopy je na mřížce. Původní čtverec je ve vlastním rohu.',
    spocitano: 'Čtverec o straně čtyři stopy má šestnáct čtverečků. Původní čtverec se do něj vejde čtyřikrát, ne dvakrát.',
  },
  {
    id: 'tri',
    nazev: 'Strana tři',
    body: [[0, 0], [3, 0], [3, 3], [0, 3]],
    obsah: 9,
    strana: ['strana', 'tři stopy'],
    scena: 'Pak chlapec zkusil tři stopy. Je to víc než dvě a míň než čtyři. Čtverec o straně tři je na mřížce.',
    spocitano: 'Čtverec o straně tři stopy má devět čtverečků. Hledáme osm, devět je o jeden víc.',
  },
  {
    id: 'uhlopricka',
    nazev: 'Na úhlopříčce',
    body: [[2, 0], [4, 2], [2, 4], [0, 2]],
    obsah: HLEDANY,
    strana: ['strana', 'úhlopříčka'],
    scena: 'Sókratés nakreslil v každém ze čtyř čtverců úhlopříčku. Čtyři úhlopříčky tvoří nový čtverec.',
    spocitano: 'Nový čtverec tvoří čtyři celé čtverečky a osm půlek, dohromady osm. Jeho stranou je úhlopříčka.',
  },
];

export const NADPIS_HLEDAME = 'hledáme';
export const TLACITKO_SPOCITAT = 'Spočítat čtverečky';
export const TLACITKO_SKRYT = 'Skrýt počet';

export function pokus(id: string): Pokus {
  return POKUSY.find((p) => p.id === id) ?? POKUSY[0];
}

/** Obsah mnohoúhelníku (vzorec o obsahu podle souřadnic vrcholů). */
export function obsahMnohouhelniku(body: Bod[]): number {
  let s = 0;
  for (let i = 0; i < body.length; i++) {
    const [x1, y1] = body[i];
    const [x2, y2] = body[(i + 1) % body.length];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}

export interface Ctverecek { x: number; y: number }

/** Kolik čtverečků mřížky leží ve čtverci celých a kolik půlených. Střed čtverečku rozhodne: uvnitř = celý, na hraně = půlený. */
export function rozdelCtverecky(body: Bod[]): { cele: Ctverecek[]; pulky: Ctverecek[] } {
  const cele: Ctverecek[] = [];
  const pulky: Ctverecek[] = [];
  for (let y = 0; y < VELKY; y++) {
    for (let x = 0; x < VELKY; x++) {
      const stred: Bod = [x + 0.5, y + 0.5];
      const rohy: Bod[] = [[x, y], [x + 1, y], [x + 1, y + 1], [x, y + 1]];
      const uvnitr = rohy.filter((r) => jeUvnitr(body, r)).length;
      if (uvnitr === 4) cele.push({ x, y });
      else if (jeUvnitr(body, stred)) pulky.push({ x, y });
    }
  }
  return { cele, pulky };
}

/** Leží bod uvnitř čtverce nebo na jeho hraně (konvexní mnohoúhelník, vrcholy po obvodu). */
function jeUvnitr(body: Bod[], [px, py]: Bod): boolean {
  let znamenko = 0;
  for (let i = 0; i < body.length; i++) {
    const [x1, y1] = body[i];
    const [x2, y2] = body[(i + 1) % body.length];
    const v = (x2 - x1) * (py - y1) - (y2 - y1) * (px - x1);
    if (Math.abs(v) < 1e-9) continue;
    const z = Math.sign(v);
    if (znamenko === 0) znamenko = z;
    else if (z !== znamenko) return false;
  }
  return true;
}

/** Počet čtverečků, jak ho student spočítá: celé a půlky. */
export function pocet(p: Pokus): { cele: number; pulky: number; soucet: number } {
  const { cele, pulky } = rozdelCtverecky(p.body);
  return { cele: cele.length, pulky: pulky.length, soucet: cele.length + pulky.length / 2 };
}

export function popisPokusu(p: Pokus, spocitano: boolean): string {
  return spocitano ? `${p.scena} ${p.spocitano}` : p.scena;
}

/** Souřadnice ve stopách na plátno: jedna stopa je JEDNOTKA jednotek plátna, mřížka začíná v bodě (X0, Y0). */
export const JEDNOTKA = 48;
export const X0 = 24;
export const Y0 = 24;
export const naPlatno = ([x, y]: Bod): Bod => [X0 + x * JEDNOTKA, Y0 + y * JEDNOTKA];
export const bodyNaPlatno = (body: Bod[]): string => body.map((b) => naPlatno(b).join(',')).join(' ');
