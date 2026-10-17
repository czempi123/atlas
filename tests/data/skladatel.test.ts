// Skladatel hodiny: strom katalogu po stránkách, hledání bez diakritiky, filtry období a druhu, štítky a přeřazení.
import { describe, it, expect } from 'vitest';
import type { Zastaveni } from '../../src/lib/hodiny';
import { stromKatalogu, filtrujKatalog, prazdnyFiltr, proHledani, stitekDruhu, kdeStoji, druhStranky, posun, pocetZastaveni } from '../../src/lib/skladatel';

const z = (p: Partial<Zastaveni> & Pick<Zastaveni, 'id' | 'druh' | 'nazev'>): Zastaveni => ({
  kde: '', stranka: '/', kotva: null, adresa: '/', obdobi: 1, rodic: null, poradi: 0, ...p,
});
const C = 'kdy-mam-dobry-duvod-verit';
const katalog: Zastaveni[] = [
  z({ id: `k:${C}`, druh: 'cesta', nazev: 'Kdy mám dobrý důvod věřit?', kde: 'Kdy mám dobrý důvod věřit?', cesta: C }),
  z({ id: `k:${C}/2`, druh: 'krok', nazev: 'Jak bys to zjišťoval ty?', kde: 'Kdy mám dobrý důvod věřit?', krok: 2, rodic: `k:${C}`, cesta: C }),
  z({ id: `k:${C}/1`, druh: 'krok', nazev: 'Odpověď z Delf', kde: 'Kdy mám dobrý důvod věřit?', krok: 1, rodic: `k:${C}`, cesta: C }),
  z({ id: 'p:odpoved-z-delf', druh: 'pribeh', nazev: 'Nikdo není moudřejší.', kde: 'Kdy mám dobrý důvod věřit?', krok: 1, rodic: `k:${C}/1`, poradi: 1, cesta: C }),
  z({ id: 'b:cesta1-jak-zjistit', druh: 'blok', typ: 'Volba', nazev: 'Jak bys to zjišťoval?', kde: 'Kdy mám dobrý důvod věřit?', krok: 2, rodic: `k:${C}/2`, poradi: 1, cesta: C }),
  z({ id: 'o:epiktetos', druh: 'profil', nazev: 'Epiktétos', kde: 'Epiktétos', obdobi: 2 }),
  z({ id: 'o:epiktetos/zkus-to-zit', druh: 'oddil', nazev: 'Zkus to žít', kde: 'Epiktétos', obdobi: 2, rodic: 'o:epiktetos', poradi: 3 }),
  z({ id: 'o:epiktetos/otrok', druh: 'kapitola', cislo: '01', nazev: 'Otrok z Hierapole', kde: 'Epiktétos', obdobi: 2, rodic: 'o:epiktetos', poradi: 1 }),
  z({ id: 'b:lod-po-prknech', druh: 'blok', typ: 'Lod', nazev: 'Loď po prknech', kde: 'Epiktétos', obdobi: 2, rodic: 'o:epiktetos/otrok', poradi: 2 }),
  z({ id: 'h:jak-zit', druh: 'otazka', nazev: 'Jak mám žít?', kde: 'Jak mám žít?', obdobi: null, otazka: 'jak-zit' }),
  z({ id: 'h:jak-zit/epikuros', druh: 'hlas', nazev: 'Epikúros', kde: 'Jak mám žít?', obdobi: 2, rodic: 'h:jak-zit', poradi: 1, otazka: 'jak-zit' }),
];

describe('strom katalogu', () => {
  it('skupiny jsou stránky v pořadí katalogu, kroky podle čísla, části podle pořadí na stránce', () => {
    const s = stromKatalogu(katalog);
    expect(s.map((g) => g.koren.id)).toEqual([`k:${C}`, 'o:epiktetos', 'h:jak-zit']);
    expect(s[0].deti.map((u) => u.z.id)).toEqual([`k:${C}/1`, `k:${C}/2`]);
    expect(s[0].deti[0].deti.map((u) => u.z.id)).toEqual(['p:odpoved-z-delf']);
    expect(s[1].deti.map((u) => u.z.id)).toEqual(['o:epiktetos/otrok', 'o:epiktetos/zkus-to-zit']);
    expect(s[1].deti[0].deti.map((u) => u.z.id)).toEqual(['b:lod-po-prknech']);
  });
  it('prázdný katalog dá žádnou skupinu', () => {
    expect(stromKatalogu([])).toEqual([]);
  });
});

describe('hledání a filtry', () => {
  const f = (p: Partial<Parameters<typeof filtrujKatalog>[1]>) => filtrujKatalog(katalog, { hledat: '', obdobi: null, druh: null, ...p });
  it('hledá bez diakritiky a velikosti písmen; předci shody jsou vidět jako souvislost', () => {
    expect(proHledani('  Odpověď  z DELF ')).toBe('odpoved z delf');
    const v = f({ hledat: 'moudrejsi' });
    expect([...v.shoda]).toEqual(['p:odpoved-z-delf']);
    expect([...v.viditelne].sort()).toEqual([`k:${C}`, `k:${C}/1`, 'p:odpoved-z-delf'].sort());
  });
  it('víc slov musí sedět všechna; počítá se i název stránky, kroku a kapitoly, do které zastavení patří', () => {
    expect([...f({ hledat: 'delf odpoved' }).shoda]).toEqual([`k:${C}/1`, 'p:odpoved-z-delf']);
    expect(f({ hledat: 'delf zlo' }).shoda.size).toBe(0);
    expect([...f({ hledat: 'epiktetos' }).shoda]).toEqual(['o:epiktetos', 'o:epiktetos/zkus-to-zit', 'o:epiktetos/otrok', 'b:lod-po-prknech']);
    expect([...f({ hledat: 'epiktetos lod' }).shoda]).toEqual(['b:lod-po-prknech']);
    expect([...f({ hledat: 'epiktetos', druh: 'kapitola' }).shoda]).toEqual(['o:epiktetos/otrok']);
  });
  it('filtr období: stránka otázky se ukáže jen přes hlas z toho období', () => {
    const v = f({ obdobi: 2 });
    expect(v.shoda.has('h:jak-zit')).toBe(false);
    expect(v.shoda.has('h:jak-zit/epikuros')).toBe(true);
    expect(v.viditelne.has('h:jak-zit')).toBe(true);
    expect(v.shoda.has(`k:${C}`)).toBe(false);
  });
  it('filtr druhu: celé stránky, bloky (i kresby)', () => {
    expect([...f({ druh: 'stranky' }).shoda]).toEqual([`k:${C}`, 'o:epiktetos', 'h:jak-zit']);
    expect([...f({ druh: 'blok' }).shoda]).toEqual(['b:cesta1-jak-zjistit', 'b:lod-po-prknech']);
    expect([...f({ druh: 'blok', obdobi: 1 }).shoda]).toEqual(['b:cesta1-jak-zjistit']);
  });
  it('prázdný filtr', () => {
    expect(prazdnyFiltr({ hledat: '  ', obdobi: null, druh: null })).toBe(true);
    expect(prazdnyFiltr({ hledat: '', obdobi: 1, druh: null })).toBe(false);
  });
});

describe('popisky', () => {
  const najdi = (id: string) => katalog.find((x) => x.id === id)!;
  it('štítek druhu', () => {
    expect(stitekDruhu(najdi(`k:${C}/2`))).toBe('Krok 2');
    expect(stitekDruhu(najdi('b:cesta1-jak-zjistit'))).toBe('Volba s důvodem');
    expect(stitekDruhu(najdi('b:lod-po-prknech'))).toBe('Kresba');
    expect(stitekDruhu(najdi('o:epiktetos/otrok'))).toBe('Kapitola 01');
    expect(stitekDruhu(najdi('h:jak-zit/epikuros'))).toBe('Hlas');
    expect(stitekDruhu(najdi(`k:${C}`))).toBe('Přehled cesty');
  });
  it('kde zastavení stojí', () => {
    expect(kdeStoji(najdi('b:cesta1-jak-zjistit'))).toBe('Kdy mám dobrý důvod věřit? · krok 2');
    expect(kdeStoji(najdi(`k:${C}/2`))).toBe('Kdy mám dobrý důvod věřit?');
    expect(kdeStoji(najdi('h:jak-zit/epikuros'))).toBe('Jak mám žít?');
    expect(druhStranky(najdi('o:epiktetos'))).toBe('Profil');
    expect(druhStranky(najdi('h:jak-zit'))).toBe('Velká otázka');
  });
  it('počet zastavení', () => {
    expect(pocetZastaveni(0)).toBe('žádné zastavení');
    expect(pocetZastaveni(5)).toBe('5\u00a0zastavení');
  });
});

describe('přeřazení', () => {
  it('posun nahoru a dolů, na kraji beze změny', () => {
    expect(posun(['a', 'b', 'c'], 1, -1)).toEqual(['b', 'a', 'c']);
    expect(posun(['a', 'b', 'c'], 1, 1)).toEqual(['a', 'c', 'b']);
    const s = ['a', 'b'];
    expect(posun(s, 0, -1)).toBe(s);
    expect(posun(s, 1, 1)).toBe(s);
    expect(posun(s, 5, 1)).toBe(s);
  });
});
