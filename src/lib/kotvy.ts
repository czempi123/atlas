// Dějinné události nad posuvníkem roku: které názvy se vejdou a kde stojí.
// Názvy mají vlastní řádek nad značkami (pruh pro období, tečka pro jeden rok), takže se značka cizího názvu nikdy nedotkne.
// Čisté funkce bez DOM; šířky názvů měří komponenta (Posuvnik.svelte).

export interface KotvaNaOse {
  id: string;
  /** začátek události v px od levého okraje stopy (může ležet před oknem, tedy záporně) */
  x1: number;
  /** konec události v px; null = událost jednoho roku */
  x2: number | null;
  /** šířka názvu v px */
  sirka: number;
}

/** průměr tečky pro událost jednoho roku */
export const TECKA = 7;
/** nejmenší mezera mezi dvěma názvy vedle sebe */
export const MEZERA_NAZVU = 9;
/** o kolik smí název přesáhnout pravý okraj stopy (vpravo od ní je volný okraj panelu) */
export const PRESAH_VPRAVO = 12;

/** Viditelné okraje značky na stopě: pruh oříznutý oknem, u jednoho roku tečka kolem svého roku. */
export function okrajeZnacky(k: KotvaNaOse, sirkaStopy: number): [number, number] {
  if (k.x2 === null) return [Math.max(0, k.x1 - TECKA / 2), k.x1 + TECKA / 2];
  return [Math.max(0, k.x1), Math.min(sirkaStopy, k.x2)];
}

/**
 * Levý okraj názvu (px od levého okraje stopy) pro každou událost, které se název vejde.
 * Událost, která v mapě chybí, název nemá: zůstane jen značka a název se ukáže po najetí nebo při fokusu.
 * Období mají přednost před událostmi jednoho roku a období celé v okně před obdobím, které okno ořezává;
 * jinak rozhoduje čas.
 * Název stojí nad začátkem své značky; když tam místo není, zarovná se k jejímu konci.
 * Události jednoho roku těsně za obdobím (Sókratův proces po Peloponéské válce) uvolní místo název období:
 * ustoupí ke konci svého pruhu, pokud je delší než pruh.
 */
export function rozmistiNazvy(kotvy: KotvaNaOse[], sirkaStopy: number): Map<string, number> {
  const orezane = (k: KotvaNaOse) => k.x2 !== null && (k.x1 < 0 || k.x2 > sirkaStopy);
  const poradi = [...kotvy].sort((a, b) => Number(a.x2 === null) - Number(b.x2 === null) || Number(orezane(a)) - Number(orezane(b)) || a.x1 - b.x1);
  const hotove: { k: KotvaNaOse; l: number }[] = [];
  const blizko = (l: number, w: number, h: { k: KotvaNaOse; l: number }) => l < h.l + h.k.sirka + MEZERA_NAZVU && h.l < l + w + MEZERA_NAZVU;
  const veStope = (l: number, w: number) => l >= 0 && l + w <= sirkaStopy + PRESAH_VPRAVO;
  const vejdeSe = (l: number, w: number, krome?: object) => veStope(l, w) && !hotove.some((h) => h !== krome && blizko(l, w, h));

  for (const k of poradi) {
    const [zac, kon] = okrajeZnacky(k, sirkaStopy);
    // Značka celá mimo stopu název nedostane.
    if (kon <= 0 || zac >= sirkaStopy) continue;
    if (vejdeSe(zac, k.sirka)) {
      hotove.push({ k, l: zac });
      continue;
    }
    if (k.x2 === null && veStope(zac, k.sirka)) {
      const prekazi = hotove.filter((h) => blizko(zac, k.sirka, h));
      const soused = prekazi[0];
      if (prekazi.length === 1 && soused.k.x2 !== null) {
        const ustup = okrajeZnacky(soused.k, sirkaStopy)[1] - soused.k.sirka;
        if (ustup < soused.l && ustup + soused.k.sirka + MEZERA_NAZVU <= zac && vejdeSe(ustup, soused.k.sirka, soused)) {
          soused.l = ustup;
          hotove.push({ k, l: zac });
          continue;
        }
      }
    }
    const uKonce = kon - k.sirka;
    if (vejdeSe(uKonce, k.sirka)) hotove.push({ k, l: uKonce });
  }
  return new Map(hotove.map((h) => [h.k.id, h.l]));
}

/** Kde stojí štítek s názvem, který se ukáže po najetí nebo při fokusu: u značky, ale celý uvnitř stopy. */
export function mistoStitku(k: KotvaNaOse, sirkaStopy: number, okraj = 14): number {
  const [zac] = okrajeZnacky(k, sirkaStopy);
  return Math.max(0, Math.min(zac, sirkaStopy + PRESAH_VPRAVO - k.sirka - okraj));
}
