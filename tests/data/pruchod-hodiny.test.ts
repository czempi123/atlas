// Průchod hodinou: aktivní hodina v kartě, výběr aktuálního zastavení lišty, sousední zastavení,
// pořadí česky, krok promítání (posun o obrazovku, přechod na další a předchozí zastavení) a klávesy v polích.
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { Zastaveni } from '../../src/lib/hodiny';
import {
  aktivniHodina, platnaAktivni, nactiAktivni, ulozAktivni, _zapomenPamet, cestaStranky, zastaveniNaStrance, aktualniZastaveni,
  sousedniZastaveni, poradiZastaveni, krokPromitani, polohaPrichodu, prekryv, klavesaPatriPrvku, KLIC_AKTIVNI, ZBYTEK_USEKU, type Plocha,
} from '../../src/lib/pruchod-hodiny';

const zast = (id: string, stranka: string, kotva: string | null, druh: Zastaveni['druh']): Zastaveni => ({
  id, druh, nazev: id, kde: '', stranka, kotva, adresa: kotva ? `${stranka}#${kotva}` : stranka, obdobi: 1, rodic: null, poradi: 0,
});
const KATALOG = [
  zast('k:c/1', '/cesta/c/1/', null, 'krok'),
  zast('k:c/2', '/cesta/c/2/', null, 'krok'),
  zast('b:volba', '/cesta/c/2/', 'volba', 'blok'),
  zast('o:sokrates/soud', '/osobnost/sokrates/', 'soud', 'kapitola'),
  zast('h:jak-zit/epikuros', '/otazka/jak-zit/', 'hlas-epikuros', 'hlas'),
];
const hodina = aktivniHodina(
  { nazev: 'Delfy', zastaveni: ['k:c/1', 'k:zrusena/2', 'k:c/2', 'b:volba', 'o:sokrates/soud', 'h:jak-zit/epikuros'] },
  KATALOG,
  '/hodina/?v=1&n=Delfy&z=…',
);
const P = hodina.polozky;

describe('aktivní hodina', () => {
  it('nese adresy zastavení z katalogu; neznámé zastavení nemá adresu', () => {
    expect(P.map((p) => p.adresa)).toEqual(['/cesta/c/1/', null, '/cesta/c/2/', '/cesta/c/2/#volba', '/osobnost/sokrates/#soud', '/otazka/jak-zit/#hlas-epikuros']);
    expect(P[1]).toMatchObject({ id: 'k:zrusena/2', stranka: null, druh: null, nazev: 'Tohle místo už v atlasu není' });
    expect(hodina).toMatchObject({ verze: 1, nazev: 'Delfy', posledni: null, prichod: 'zacatek', promitani: false, zavreno: false });
  });
  it('z úložiště: poškozená nebo jiná verze je null, chybějící příznaky dostanou výchozí hodnotu', () => {
    expect(platnaAktivni(null)).toBeNull();
    expect(platnaAktivni({ ...hodina, verze: 2 })).toBeNull();
    expect(platnaAktivni({ ...hodina, polozky: [{ id: 1 }] })).toBeNull();
    const { promitani: _p, zavreno: _z, ...bez } = hodina;
    expect(platnaAktivni({ ...bez, posledni: 99 })).toMatchObject({ promitani: false, zavreno: false, posledni: null });
  });
  describe('sessionStorage', () => {
    const data = new Map<string, string>();
    const g = globalThis as unknown as { sessionStorage?: unknown };
    beforeEach(() => {
      data.clear();
      g.sessionStorage = { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => data.set(k, v), removeItem: (k: string) => data.delete(k) };
      _zapomenPamet();
    });
    afterEach(() => { delete g.sessionStorage; });
    it('uloží, přečte a smaže', () => {
      ulozAktivni({ ...hodina, promitani: true });
      _zapomenPamet();
      expect(nactiAktivni()?.promitani).toBe(true);
      expect(JSON.parse(data.get(KLIC_AKTIVNI)!).nazev).toBe('Delfy');
      ulozAktivni(null);
      expect(nactiAktivni()).toBeNull();
    });
    it('bez úložiště drží hodinu v paměti stránky', () => {
      delete g.sessionStorage;
      ulozAktivni(hodina);
      expect(nactiAktivni()?.nazev).toBe('Delfy');
    });
  });
});

describe('lišta: aktuální zastavení', () => {
  it('adresa stránky s lomítkem a bez kotvy', () => {
    expect(cestaStranky('/cesta/c/2')).toBe('/cesta/c/2/');
    expect(cestaStranky('/osobnost/sokrates/#soud')).toBe('/osobnost/sokrates/');
    expect(cestaStranky('/hodina/?v=1')).toBe('/hodina/');
  });
  it('zastavení na stránce v pořadí hodiny', () => {
    expect(zastaveniNaStrance(P, '/cesta/c/2/')).toEqual([2, 3]);
    expect(zastaveniNaStrance(P, '/lide/')).toEqual([]);
  });
  it('víc zastavení na stránce: z lišty, pak podle kotvy, jinak první', () => {
    expect(aktualniZastaveni(P, '/cesta/c/2/', '', null)).toBe(2);
    expect(aktualniZastaveni(P, '/cesta/c/2/', '#volba', null)).toBe(3);
    expect(aktualniZastaveni(P, '/cesta/c/2/', '#volba', 2)).toBe(2);
    expect(aktualniZastaveni(P, '/cesta/c/2/', '', 3)).toBe(3);
    // Zastavení z lišty, které na stránce nestojí, neplatí.
    expect(aktualniZastaveni(P, '/cesta/c/2/', '#jinde', 0)).toBe(2);
    expect(aktualniZastaveni(P, '/osobnost/sokrates/', '#delfy', null)).toBe(4);
  });
  it('stránka bez zastavení hodiny nemá lištu', () => {
    expect(aktualniZastaveni(P, '/mapa/', '', 0)).toBeNull();
  });
  it('další a předchozí přeskočí zastavení, které v atlasu není; na kraji nic', () => {
    expect(sousedniZastaveni(P, 0, 1)).toBe(2);
    expect(sousedniZastaveni(P, 2, -1)).toBe(0);
    expect(sousedniZastaveni(P, 0, -1)).toBeNull();
    expect(sousedniZastaveni(P, 5, 1)).toBeNull();
  });
  it('pořadí česky s předložkou podle čísla', () => {
    expect(poradiZastaveni(3, 7)).toBe('3\u00a0ze\u00a07');
    expect(poradiZastaveni(1, 5)).toBe('1\u00a0z\u00a05');
    expect(poradiZastaveni(2, 2)).toBe('2\u00a0ze\u00a02');
    expect(poradiZastaveni(1, 1)).toBe('1\u00a0z\u00a01');
    expect(poradiZastaveni(4, 12)).toBe('4\u00a0ze\u00a012');
    expect(poradiZastaveni(4, 18)).toBe('4\u00a0z\u00a018');
    expect(poradiZastaveni(4, 23)).toBe('4\u00a0ze\u00a023');
    expect(poradiZastaveni(4, 55)).toBe('4\u00a0z\u00a055');
  });
});

describe('promítání: krok', () => {
  // Okno 720 px, lišta 48 px: volná plocha 672 px; úsek od 1000 do 2500.
  const plocha = (poloha: number, o: Partial<Plocha> = {}): Plocha => ({ poloha, vyska: 672, horni: 1000, dolni: 2500, nejvys: 9000, ...o });
  const krok = 672 - prekryv(672);

  it('kousek předchozí obrazovky zůstane vidět', () => {
    expect(prekryv(672)).toBe(81);
    expect(prekryv(300)).toBe(64);
  });
  it('vpřed se posune o obrazovku, nejvýš na konec úseku, a na konci přejde na další zastavení', () => {
    expect(krokPromitani(plocha(1000), 1)).toEqual({ poloha: 1000 + krok });
    expect(krokPromitani(plocha(1700), 1)).toEqual({ poloha: 2500 - 672 });
    expect(krokPromitani(plocha(2500 - 672), 1)).toEqual({ prejdi: 'dalsi' });
  });
  it('zpět se posune o obrazovku, nejvýš na začátek úseku, a na začátku přejde na předchozí zastavení', () => {
    expect(krokPromitani(plocha(1828), -1)).toEqual({ poloha: 1828 - krok });
    expect(krokPromitani(plocha(1200), -1)).toEqual({ poloha: 1000 });
    expect(krokPromitani(plocha(1000), -1)).toEqual({ prejdi: 'predchozi' });
  });
  it('úsek kratší než obrazovka: jedna klávesa přejde rovnou dál', () => {
    const kratky = { horni: 1000, dolni: 1300 };
    expect(krokPromitani(plocha(1000, kratky), 1)).toEqual({ prejdi: 'dalsi' });
    expect(krokPromitani(plocha(1000, kratky), -1)).toEqual({ prejdi: 'predchozi' });
  });
  it('zbytek úseku pod jeden řádek je konec úseku: žádný mrtvý stisk (Zrcadlo času o 4 px vyšší než plocha)', () => {
    expect(ZBYTEK_USEKU).toBe(32);
    const vyssi = { horni: 1000, dolni: 1000 + 672 + 4 };
    expect(krokPromitani(plocha(1000, vyssi), 1)).toEqual({ prejdi: 'dalsi' });
    // Při couvání se přijde na konec úseku (1004) a další stisk jde rovnou na předchozí zastavení.
    expect(polohaPrichodu(plocha(0, vyssi), 'konec')).toBe(1004);
    expect(krokPromitani(plocha(1004, vyssi), -1)).toEqual({ prejdi: 'predchozi' });
    // Krok, po kterém by zbylo 20 px, dojede na konec; zpátky stejně na začátek.
    const zbude20 = { horni: 1000, dolni: 1000 + krok + 20 + 672 };
    expect(krokPromitani(plocha(1000, zbude20), 1)).toEqual({ poloha: 1000 + krok + 20 });
    expect(krokPromitani(plocha(1000 + krok + 20, zbude20), 1)).toEqual({ prejdi: 'dalsi' });
    expect(krokPromitani(plocha(1000 + krok + 20, zbude20), -1)).toEqual({ poloha: 1000 });
    // Zbytek přesně jeden řádek se ještě ukáže zvlášť.
    const radek = { horni: 1000, dolni: 1000 + krok + 32 + 672 };
    expect(krokPromitani(plocha(1000, radek), 1)).toEqual({ poloha: 1000 + krok });
    expect(krokPromitani(plocha(1000 + krok, radek), 1)).toEqual({ poloha: 1000 + krok + 32 });
  });
  it('úsek na konci stránky: konec je tam, kam se stránka ještě posune', () => {
    expect(krokPromitani(plocha(1600, { nejvys: 1600 }), 1)).toEqual({ prejdi: 'dalsi' });
  });
  it('příchod na zastavení: zepředu na začátek, při couvání na konec', () => {
    expect(polohaPrichodu(plocha(0), 'zacatek')).toBe(1000);
    expect(polohaPrichodu(plocha(0), 'konec')).toBe(2500 - 672);
    expect(polohaPrichodu(plocha(0, { horni: 1000, dolni: 1300 }), 'konec')).toBe(1000);
    expect(polohaPrichodu(plocha(0, { horni: -20 }), 'zacatek')).toBe(0);
  });
  it('tam i zpět stejný počet obrazovek, od začátku úseku na konec a zpátky', () => {
    const tam: number[] = [];
    let p = 1000;
    for (let r = krokPromitani(plocha(p), 1); 'poloha' in r; r = krokPromitani(plocha(p), 1)) tam.push((p = r.poloha));
    const zpet: number[] = [];
    for (let r = krokPromitani(plocha(p), -1); 'poloha' in r; r = krokPromitani(plocha(p), -1)) zpet.push((p = r.poloha));
    expect(tam.at(-1)).toBe(1828);
    expect(zpet.at(-1)).toBe(1000);
    expect(tam.length).toBe(zpet.length);
  });
});

describe('promítání: klávesy v polích a přepínačích', () => {
  const prvek = (znacka: string, o: Partial<{ typ: string; editovatelny: boolean; role: string[] }> = {}) => ({ znacka, editovatelny: false, role: [], ...o });
  it('pole, posuvník a přepínač bloku si šipky a mezerník nechají', () => {
    for (const k of ['ArrowRight', 'ArrowLeft', ' ', 'PageDown']) {
      expect(klavesaPatriPrvku(prvek('textarea'), k)).toBe(true);
      expect(klavesaPatriPrvku(prvek('input', { typ: 'text' }), k)).toBe(true);
      expect(klavesaPatriPrvku(prvek('input', { typ: 'radio' }), k)).toBe(true);
      expect(klavesaPatriPrvku(prvek('div', { role: ['slider'] }), k)).toBe(true);
      expect(klavesaPatriPrvku(prvek('button', { role: ['radio', 'radiogroup', 'region'] }), k)).toBe(true);
      expect(klavesaPatriPrvku(prvek('div', { editovatelny: true }), k)).toBe(true);
    }
  });
  it('tlačítko a odkaz si nechají mezerník a Enter, šipky ne', () => {
    expect(klavesaPatriPrvku(prvek('button'), ' ')).toBe(true);
    expect(klavesaPatriPrvku(prvek('a'), 'Enter')).toBe(true);
    expect(klavesaPatriPrvku(prvek('button'), 'ArrowRight')).toBe(false);
    expect(klavesaPatriPrvku(prvek('a'), 'PageDown')).toBe(false);
  });
  it('stránka bez fokusu v ovládacím prvku patří promítání', () => {
    for (const k of ['ArrowRight', ' ', 'PageUp']) expect(klavesaPatriPrvku(prvek('body'), k)).toBe(false);
    expect(klavesaPatriPrvku(prvek('main', { role: ['main'] }), ' ')).toBe(false);
  });
});
