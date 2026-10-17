// Adresa stránky osoby. Osoba má stránku, když je hlavní osobou profilu (`osoba`) nebo stojí v jeho poli `dalsi`
// (společný profil: Hipparchia má stránku /osobnost/krates-a-hipparchia/, ne /osobnost/hipparchia/).
// Čistá funkce nad záznamy kolekce `osobnosti`; používají ji Lidé a směry, přehled cesty, stránka otázky a Mapa a čas.
// Použití: const adresa = adresaOsoby(await getCollection('osobnosti')); adresa('hipparchia') → '/osobnost/krates-a-hipparchia/'

export interface StrankaOsobnosti {
  /** id stránky (název souboru bez přípony) */
  id: string;
  data: { osoba: string; dalsi?: string[] };
}

/** Vrátí funkci, která osobě přiřadí adresu její stránky, nebo `undefined`, když stránku nemá. */
export function adresaOsoby(stranky: StrankaOsobnosti[]): (osoba: string) => string | undefined {
  const adresy = new Map<string, string>();
  for (const s of stranky) {
    for (const o of [s.data.osoba, ...(s.data.dalsi ?? [])]) {
      const jinde = adresy.get(o);
      if (jinde) throw new Error(`Osoba „${o}“ má dvě stránky: ${jinde} a /osobnost/${s.id}/`);
      adresy.set(o, `/osobnost/${s.id}/`);
    }
  }
  return (osoba) => adresy.get(osoba);
}
