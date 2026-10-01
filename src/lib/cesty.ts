// Cesty: pořadí kroků a navazující odkazy. Čisté funkce; data dodává Astro z kolekcí cesty a kroky.

export interface KrokInfo {
  cesta: string;
  krok: number;
  nazev: string;
}

/** Kroky jedné cesty seřazené; zastaví sestavení, když číslování není 1…n bez mezer. */
export function krokyCesty<T extends KrokInfo>(vse: T[], slug: string): T[] {
  const k = vse.filter((x) => x.cesta === slug).sort((a, b) => a.krok - b.krok);
  k.forEach((x, i) => {
    if (x.krok !== i + 1) throw new Error(`Cesta „${slug}“: kroky musí být číslované 1…${k.length} bez mezer (chybí ${i + 1}).`);
  });
  return k;
}

export const adresaKroku = (slug: string, n: number) => `/cesta/${slug}/${n}/`;
export const adresaCesty = (slug: string) => `/cesta/${slug}/`;

/** Rozpozná stránku kroku z adresy: /cesta/<slug>/<n>/ → { slug, n }. */
export function krokZAdresy(cesta: string): { slug: string; n: number } | null {
  const m = cesta.match(/^\/cesta\/([a-z0-9-]+)\/(\d+)\/?$/);
  return m ? { slug: m[1], n: Number(m[2]) } : null;
}

/** „Kam dál“ z kroku: další krok, nebo na konci dokončení cesty. */
export function dalsiKrok(kroky: KrokInfo[], slug: string, n: number): { href: string; text: string } | null {
  const k = kroky.filter((x) => x.cesta === slug);
  if (!k.length) return null;
  const dalsi = k.find((x) => x.krok === n + 1);
  if (dalsi) return { href: adresaKroku(slug, dalsi.krok), text: `Další krok: ${dalsi.nazev}` };
  return { href: `${adresaCesty(slug)}#hotovo`, text: 'Dokončit cestu' };
}
