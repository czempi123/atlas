// Názvy kreseb (blok Kresba): nadpis nad kresbou i název zastavení v katalogu hodin (src/lib/hodiny.ts).
// Klíč je jméno komponenty bloku, jak se píše v MDX (<Lod id="…" />).
export const NAZVY_KRESEB = {
  DvePulky: 'Roztrhni kartu',
  Jeskyne: 'Dva pohledy do jeskyně',
  JeskyneVen: 'Cesta ven',
  KdeJeStred: 'Kde je střed?',
  KolikJeDost: 'Kdy je dost?',
  Lod: 'Loď po prknech',
  Saty: 'Stejné šaty, jiné světlo',
  StejnyVitr: 'Stejný vítr',
  TretiCara: 'Třetí čára',
  ZdvojCtverec: 'Zdvoj čtverec',
  Zrcadlo: 'Zrcadlo času',
} as const;

export type Kresba = keyof typeof NAZVY_KRESEB;
