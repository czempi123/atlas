// Oddíly stránky profilu mimo kapitoly: název (nadpis a položka obsahu stránky) a pevná kotva.
// Používají je komponenty oddílů (DobaALide, Myslenky, ZkusToZitKarta, KamDal) i katalog hodin (src/lib/hodiny.ts),
// aby název a kotva zastavení v hodině byly vždy stejné jako na stránce.
export const ODDILY = {
  doba: { nazev: 'Doba a lidé', kotva: 'doba-a-lide' },
  /** výchozí titulek; profil ho smí změnit (`<Myslenky titulek="Tři velké myšlenky">`) */
  myslenky: { nazev: 'Dvě velké myšlenky', kotva: 'myslenky' },
  zkus: { nazev: 'Zkus to žít', kotva: 'zkus-to-zit' },
  kamDal: { nazev: 'Kam dál', kotva: 'kam-dal' },
} as const;
