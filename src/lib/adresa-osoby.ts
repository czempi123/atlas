// Adresa stránky osoby. Osoba má stránku, když je hlavní osobou profilu (`osoba`) nebo stojí v jeho poli `dalsi`
// (společný profil: Hipparchia má stránku /osobnost/krates-a-hipparchia/, ne /osobnost/hipparchia/),
// nebo když má v datech `medailonek: true` (stránka medailonku /osobnost/<id>/, generovaná z dat).
// Čistá funkce nad záznamy kolekce `osobnosti`; používají ji Lidé a směry, přehled cesty, stránka otázky, Doba a lidé
// a Mapa a čas. Ve stránkách ji volej přes adresaStranekOsob() (src/lib/stranky-osob.ts), která medailonky doplní sama.
// Použití: const adresa = adresaOsoby(await getCollection('osobnosti'), ['kleanthes']); adresa('hipparchia') → '/osobnost/krates-a-hipparchia/'

export interface StrankaOsobnosti {
  /** id stránky (název souboru bez přípony) */
  id: string;
  data: { osoba: string; dalsi?: string[] };
}

/** Vrátí funkci, která osobě přiřadí adresu její stránky, nebo `undefined`, když stránku nemá. */
export function adresaOsoby(stranky: StrankaOsobnosti[], medailonky: string[] = []): (osoba: string) => string | undefined {
  const adresy = new Map<string, string>();
  for (const s of stranky) {
    for (const o of [s.data.osoba, ...(s.data.dalsi ?? [])]) {
      const jinde = adresy.get(o);
      if (jinde) throw new Error(`Osoba „${o}“ má dvě stránky: ${jinde} a /osobnost/${s.id}/`);
      adresy.set(o, `/osobnost/${s.id}/`);
    }
  }
  const profily = new Set(stranky.map((s) => s.id));
  for (const o of medailonky) {
    const jinde = adresy.get(o);
    if (jinde) throw new Error(`Osoba „${o}“ má profil ${jinde} i příznak medailonek: true; příznak v lide.yaml smaž`);
    if (profily.has(o)) throw new Error(`Medailonek „${o}“ by měl stejnou adresu jako profil /osobnost/${o}/`);
    adresy.set(o, `/osobnost/${o}/`);
  }
  return (osoba) => adresy.get(osoba);
}
