// Logika interaktivních bloků: vyhodnocení, posun odpovědi, texty do deníku, stav po obnovení
// a obsah bloků v src/content/bloky/*.yaml proti datům.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';
import {
  radek, odstavce, veta, pismeno,
  zpetnaVolby, zapisVolby, platnyStavVolby,
  platnyStavOdkryj,
  posunZmeny, zapisZmeny, platnyStavZmeny,
  popisPolohy, zpetnaSporu, zapisSporu, platnyStavSporu,
  faktaDvojice, hodnotPoradi, hodnotVzdalenost, platnyStavKdoZil, osaDvou,
  chybyBloku,
} from '../../src/lib/bloky';
import { Blok, BlokVolba, BlokZmena, BlokSpor } from '../../src/lib/bloky-schema';
import type { OsobaMapy } from '../../src/lib/cas-mapy';

const N = ' ';
const osoba = (id: string, jmeno: string, n: number, z: number, o: Partial<OsobaMapy> = {}): OsobaMapy => ({
  id, jmeno, narozen: { rok: n }, zemrel: { rok: z }, mista: [], ...o,
});
const sokrates = osoba('sokrates', 'Sókratés', -469, -399, { jmeno2: 'Sókrata' });
const platon = osoba('platon', 'Platón', -427, -347, { narozen: { rok: -427, priblizne: true } });
const diogenes = osoba('diogenes', 'Diogenés', -412, -323, { narozen: { rok: -412, priblizne: true } });
const marcus = osoba('marcus', 'Marcus Aurelius', 121, 180);
const hypatia = osoba('hypatia', 'Hypatia', 370, 415, { zena: true, narozen: { rok: 370, priblizne: true } });

describe('text', () => {
  it('kurzíva a escapování', () => {
    expect(radek('Jak bys to zjišťoval *ty?*')).toBe('Jak bys to zjišťoval <em>ty?</em>');
    expect(radek('<b>a</b> & "b"')).toBe('&lt;b&gt;a&lt;/b&gt; &amp; &quot;b&quot;');
  });
  it('odstavce dělí prázdný řádek, zalomení uvnitř odstavce je mezera', () => {
    expect(odstavce('První\nřádek.\n\n  Druhý.  \n')).toEqual(['První řádek.', 'Druhý.']);
    expect(odstavce('')).toEqual([]);
  });
  it('věta končí tečkou jen jednou', () => {
    expect(veta('zeptat se znovu')).toBe('zeptat se znovu.');
    expect(veta('Utečeš?')).toBe('Utečeš?');
    expect(veta('399 př. n. l.')).toBe('399 př. n. l.');
  });
  it('písmena možností', () => {
    expect([0, 1, 2, 3].map(pismeno)).toEqual(['A', 'B', 'C', 'D']);
  });
});

const volba = BlokVolba.parse({
  druh: 'volba',
  obdobi: 1,
  otazka: 'Co uděláš?',
  moznosti: [
    { text: 'Zeptám se znovu.', tah: 'zeptat se znovu', zpetna: 'Dostaneš jen další odpověď ze stejného zdroje.' },
    { text: 'Najdu protipříklad.', tah: 'hledat protipříklad', zpetna: 'Vyvrátit to může jediný člověk.', jeho: true },
  ],
  coUdelal: { osoba: 'sokrates', stejne: 'Šel stejnou cestou jako ty.', jinak: 'Šel jinou cestou.' },
});

describe('Volba s důvodem', () => {
  it('zpětná vazba patří k volbě a oddíl Co udělal se řídí shodou', () => {
    const a = zpetnaVolby(volba, 0, sokrates);
    expect(a.titulek).toBe('Tvůj tah: zeptat se znovu.');
    expect(a.text).toContain('stejného zdroje');
    expect(a.coUdelal).toEqual({ nadpis: 'Co udělal Sókratés', text: 'Šel jinou cestou.', stejne: false });
    expect(zpetnaVolby(volba, 1, sokrates).coUdelal?.stejne).toBe(true);
    expect(zpetnaVolby(volba, 1, { jmeno: 'Hipparchia', zena: true }).coUdelal?.nadpis).toBe('Co udělala Hipparchia');
    expect(zpetnaVolby({ moznosti: volba.moznosti }, 0).coUdelal).toBeUndefined();
    expect(() => zpetnaVolby(volba, 5)).toThrow();
  });
  it('zápis do deníku nese písmeno, text a nepovinný důvod', () => {
    expect(zapisVolby(volba, 1)).toBe('B · Najdu protipříklad.');
    expect(zapisVolby(volba, 1, '  jeden člověk stačí ')).toBe('B · Najdu protipříklad. Proč: jeden člověk stačí.');
  });
  it('uložený stav: platný projde, cizí nebo mimo rozsah se zahodí', () => {
    expect(platnyStavVolby({ vyber: 1, proc: 'x', potvrzeno: true }, 2)).toEqual({ vyber: 1, proc: 'x', potvrzeno: true });
    expect(platnyStavVolby({ vyber: 3, potvrzeno: true }, 2)).toBeNull();
    expect(platnyStavVolby({ vyber: 0 }, 2)).toEqual({ vyber: 0, proc: '', potvrzeno: false });
    expect(platnyStavVolby(null, 2)).toBeNull();
    expect(platnyStavVolby('b', 2)).toBeNull();
  });
  it('schéma: coUdelal potřebuje právě jednu možnost jeho a naopak', () => {
    const bez = { ...volba, moznosti: volba.moznosti.map((m) => ({ ...m, jeho: false })) };
    expect(BlokVolba.safeParse(bez).success).toBe(false);
    const { coUdelal: _c, ...bezOddilu } = volba;
    expect(BlokVolba.safeParse(bezOddilu).success).toBe(false);
    expect(BlokVolba.safeParse({ ...bezOddilu, moznosti: bez.moznosti }).success).toBe(true);
    expect(BlokVolba.safeParse({ ...volba, moznosti: volba.moznosti.slice(0, 1) }).success).toBe(false);
  });
});

describe('Odkryj', () => {
  it('stav po obnovení doplní chybějící sebekontrolu', () => {
    expect(platnyStavOdkryj({ odpoved: 'x', odkryto: true, kontrola: [true] }, 3)).toEqual({ odpoved: 'x', odkryto: true, kontrola: [true, false, false] });
    expect(platnyStavOdkryj({ odkryto: 'ano' }, 0)).toEqual({ odpoved: '', odkryto: false, kontrola: [] });
    expect(platnyStavOdkryj(undefined, 2)).toBeNull();
  });
});

const zmena = BlokZmena.parse({
  druh: 'zmena',
  obdobi: 1,
  otazka: 'Utečeš?',
  moznosti: [{ id: 'uteku', text: 'Uteču.' }, { id: 'zustanu', text: 'Zůstanu.' }],
  podminky: [
    { id: 'spravedlivy', prepinac: 'Rozsudek je spravedlivý', zmena: 'Teď si představ…', posun: 'P', stejne: 'S' },
    { id: 'nikdo', prepinac: 'Nikdo se to nedozví', zmena: 'Teď si představ…', posun: 'P2', stejne: 'S2' },
  ],
});

describe('Změň jednu věc', () => {
  it('posun proti základní odpovědi', () => {
    expect(posunZmeny('uteku', 'zustanu')).toBe('posun');
    expect(posunZmeny('uteku', 'uteku')).toBe('stejne');
  });
  it('zápis do deníku ukáže začátek a každou zodpovězenou podmínku s posunem', () => {
    expect(zapisZmeny(zmena, { zaklad: 'uteku', podminky: { spravedlivy: 'zustanu' } })).toBe(
      'Na začátku: Uteču. Rozsudek je spravedlivý: Zůstanu. (posun)',
    );
    expect(zapisZmeny(zmena, { zaklad: 'uteku', podminky: { nikdo: 'uteku', spravedlivy: 'uteku' } })).toBe(
      'Na začátku: Uteču. Rozsudek je spravedlivý: Uteču. Nikdo se to nedozví: Uteču.',
    );
  });
  it('uložený stav zahodí neznámé podmínky a možnosti', () => {
    expect(platnyStavZmeny({ zaklad: 'uteku', podminky: { spravedlivy: 'zustanu', cizi: 'uteku', nikdo: 'nevim' }, aktivni: 'nikdo' }, zmena)).toEqual({
      zaklad: 'uteku', podminky: { spravedlivy: 'zustanu' }, aktivni: 'nikdo',
    });
    expect(platnyStavZmeny({ zaklad: 'nevim', podminky: {} }, zmena)).toBeNull();
    expect(platnyStavZmeny({ zaklad: 'uteku', aktivni: 'x' }, zmena)).toEqual({ zaklad: 'uteku', podminky: {}, aktivni: null });
  });
  it('schéma odmítne opakované id', () => {
    expect(BlokZmena.safeParse({ ...zmena, moznosti: [zmena.moznosti[0], zmena.moznosti[0]] }).success).toBe(false);
  });
});

describe('Spor', () => {
  it('popisy pěti poloh', () => {
    expect([0, 1, 2, 3, 4].map((i) => popisPolohy(i, 'Platón', 'Diogenés'))).toEqual([
      'Platón', 'spíš Platón', 'uprostřed', 'spíš Diogenés', 'Diogenés',
    ]);
  });
  it('zpětná vazba: zůstal, posunul se, přešel, došel doprostřed', () => {
    expect(zpetnaSporu(1, 1, 'Platón', 'Diogenés')).toMatch(/^Zůstal jsi tam, kde jsi začal\./);
    expect(zpetnaSporu(2, 2, 'Platón', 'Diogenés')).toMatch(/^Zůstal jsi uprostřed\./);
    expect(zpetnaSporu(0, 1, 'Platón', 'Diogenés')).toBe(`Posunul ses o 1${N}krok ke straně, kterou hájí Diogenés. Který argument tě posunul? Řekni ho vlastními slovy.`);
    expect(zpetnaSporu(4, 2, 'Platón', 'Diogenés')).toMatch(`Posunul ses o 2${N}kroky ke straně, kterou hájí Platón. Teď stojíš uprostřed`);
    expect(zpetnaSporu(0, 4, 'Platón', 'Diogenés')).toMatch(`o 4${N}kroky ke straně, kterou hájí Diogenés. Přešel jsi na druhou stranu.`);
    // Nikdy nehodnotí, kdo má pravdu.
    for (const [a, b] of [[0, 0], [0, 4], [3, 1], [2, 2]]) expect(zpetnaSporu(a, b, 'A', 'B')).not.toMatch(/správn|špatn|pravdu/i);
  });
  it('zápis do deníku: první a konečná poloha a nepovinný důvod', () => {
    expect(zapisSporu(1, 2, 'Platón', 'Diogenés')).toBe('Na začátku: spíš Platón. Po argumentech: uprostřed.');
    expect(zapisSporu(1, 2, 'Platón', 'Diogenés', 'stůl vidím')).toBe('Na začátku: spíš Platón. Po argumentech: uprostřed. Co mě posunulo: stůl vidím.');
    expect(zapisSporu(3, 3, 'Platón', 'Diogenés', 'jeskyně')).toContain('Co mě udrželo: jeskyně.');
  });
  it('uložený stav', () => {
    expect(platnyStavSporu({ prvni: 1, konecna: 3, duvod: 'x' })).toEqual({ prvni: 1, konecna: 3, duvod: 'x' });
    expect(platnyStavSporu({ prvni: 1 })).toEqual({ prvni: 1, konecna: null, duvod: '' });
    expect(platnyStavSporu({ prvni: 7 })).toBeNull();
    expect(platnyStavSporu({ prvni: 1, konecna: 1.5 })).toEqual({ prvni: 1, konecna: null, duvod: '' });
  });
  it('schéma: dvě různé osoby', () => {
    const strana = { osoba: 'platon', postoj: 'x', argumenty: ['a'] };
    expect(BlokSpor.safeParse({ druh: 'spor', obdobi: 1, otazka: '?', strany: [strana, strana] }).success).toBe(false);
    expect(BlokSpor.safeParse({ druh: 'spor', obdobi: 1, otazka: '?', strany: [strana, { ...strana, osoba: 'diogenes' }] }).success).toBe(true);
  });
});

describe('Kdo žil dřív?', () => {
  it('Sókratés a Diogenés žili současně asi 13 let; mapa na rok Sókratovy smrti', () => {
    const f = faktaDvojice(sokrates, diogenes)!;
    expect(f.vzdalenost.text).toBe(`Žili současně asi${N}13${N}let.`);
    expect(f.starsi).toBe('a');
    expect(f.rokMapy).toBe(-399);
    expect(f.odkazMapy).toBe('/mapa/?rok=-399&osoba=sokrates&srovnat=diogenes');
    expect(f.vetaOVeku).toBe(`Když Sókratés zemřel (399${N}př.${N}n.${N}l.), žil Diogenés na světě asi${N}13${N}let.`);
  });
  it('Platón a Diogenés: asi 65 let současně', () => {
    const f = faktaDvojice(diogenes, platon)!;
    expect(f.vzdalenost.text).toBe(`Žili současně asi${N}65${N}let.`);
    expect(f.starsi).toBe('b');
    expect(f.vetaOVeku).toBe(`Když Platón zemřel (347${N}př.${N}n.${N}l.), žil Diogenés na světě asi${N}65${N}let.`);
  });
  it('přes přelom letopočtu: Platón a Marcus Aurelius dělí 467 let; mapa na rok Platónovy smrti', () => {
    const f = faktaDvojice(marcus, platon)!;
    expect(f.vzdalenost.druh).toBe('deli');
    expect(f.vzdalenost.let).toBe(467);
    expect(f.vetaOVeku).toBeNull();
    expect(f.odkazMapy).toBe('/mapa/?rok=-347&osoba=platon&srovnat=marcus');
  });
  it('žena v souvětí', () => {
    const cyril = osoba('x', 'Synesios', 370, 413);
    expect(faktaDvojice(cyril, hypatia)!.vetaOVeku).toBe(`Když Synesios zemřel (413${N}n.${N}l.), žila Hypatia na světě asi${N}43${N}let.`);
  });
  it('bez let není co porovnat', () => {
    expect(faktaDvojice(sokrates, { id: 'x', jmeno: 'X', mista: [] })).toBeNull();
    expect(osaDvou(sokrates, { id: 'x', jmeno: 'X', mista: [] })).toBeNull();
  });
  it('pořadí: potvrdí, opraví, nebo doplní překryv', () => {
    const f = faktaDvojice(sokrates, diogenes)!;
    expect(hodnotPoradi('soucasne', f, sokrates, diogenes)).toMatch(/^Sedí to: jejich životy se překrývají\./);
    expect(hodnotPoradi('a', f, sokrates, diogenes)).toMatch(/^Sókratés se opravdu narodil dřív\. Jejich životy se ale překrývají\./);
    expect(hodnotPoradi('b', f, sokrates, diogenes)).toMatch(/^Je to naopak: dřív se narodil Sókratés\./);
    const g = faktaDvojice(platon, marcus)!;
    expect(hodnotPoradi('a', g, platon, marcus)).toMatch(/^Sedí to: Platón žil dřív\. Dělí je/);
    expect(hodnotPoradi('b', g, platon, marcus)).toMatch(/^Je to naopak: dřív žil Platón\./);
    expect(hodnotPoradi('soucasne', g, platon, marcus)).toMatch(/^Nepotkali se: Platón žil dřív\./);
  });
  it('vzdálenost: blízko, víc, méně, jiný druh', () => {
    const f = faktaDvojice(platon, diogenes)!; // 65 let současně
    expect(hodnotVzdalenost({ potkali: true, let: 60 }, f)).toMatch(/To je velmi blízko\.$/);
    expect(hodnotVzdalenost({ potkali: true, let: 20 }, f)).toMatch(`Ve skutečnosti je to o 45${N}let víc.`);
    expect(hodnotVzdalenost({ potkali: true, let: 100 }, f)).toMatch(`Ve skutečnosti je to o 35${N}let méně.`);
    expect(hodnotVzdalenost({ potkali: false, let: 100 }, f)).toMatch(/^Tipoval jsi, že je dělí 100.let\. Žili současně .* Jejich životy se ve skutečnosti překrývají\.$/);
    const g = faktaDvojice(platon, marcus)!;
    expect(hodnotVzdalenost({ potkali: true, let: 10 }, g)).toMatch(/Ve skutečnosti se nepotkali\.$/);
    expect(hodnotVzdalenost({ potkali: false, let: 1 }, g)).toMatch(`o 466${N}let víc.`);
  });
  it('uložený stav pro oba druhy', () => {
    expect(platnyStavKdoZil({ odhad: 'a', odkryto: true }, 'poradi')).toEqual({ odhad: 'a', odkryto: true });
    expect(platnyStavKdoZil({ odhad: 'c' }, 'poradi')).toBeNull();
    expect(platnyStavKdoZil({ odhad: { potkali: true, let: 64.6 } }, 'vzdalenost')).toEqual({ odhad: { potkali: true, let: 65 }, odkryto: false });
    expect(platnyStavKdoZil({ odhad: { let: -3 } }, 'vzdalenost')).toBeNull();
    expect(platnyStavKdoZil({ odhad: 'a' }, 'vzdalenost')).toBeNull();
  });
  it('osa: pruhy leží uvnitř a respektují chybějící rok nula', () => {
    const o = osaDvou(platon, marcus)!;
    for (const p of [o.a, o.b]) {
      expect(p.zacatek).toBeGreaterThan(0);
      expect(p.zacatek + p.sirka).toBeLessThan(100);
    }
    expect(o.a.zacatek).toBeLessThan(o.b.zacatek);
  });
});

// ─── Obsah bloků v YAML ──────────────────────────────────────────────────────

const slozka = new URL('../../src/content/bloky/', import.meta.url);
const soubory = readdirSync(slozka).filter((s) => s.endsWith('.yaml'));
const lide = parse(readFileSync(new URL('../../src/data/lide.yaml', import.meta.url), 'utf8')) as { id: string }[];
const zdroje = parse(readFileSync(new URL('../../src/data/zdroje.yaml', import.meta.url), 'utf8')) as { prameny: { id: string }[] };
const osoby = new Set(lide.map((o) => o.id));
const prameny = new Set(zdroje.prameny.map((p) => p.id));

describe('obsah bloků (src/content/bloky)', () => {
  it('složka má aspoň ukázky tří druhů', () => {
    const druhy = new Set(soubory.map((s) => parse(readFileSync(new URL(s, slozka), 'utf8')).druh));
    expect([...druhy].sort()).toEqual(['spor', 'volba', 'zmena']);
  });
  for (const s of soubory) {
    it(`${s}: schéma a odkazy na data`, () => {
      const blok = Blok.parse(parse(readFileSync(new URL(s, slozka), 'utf8')));
      expect(chybyBloku(s, blok, osoby, prameny)).toEqual([]);
    });
  }
  it('kontrola odhalí neznámou osobu i pramen', () => {
    const chyby = chybyBloku('x', { druh: 'spor', zdroje: ['neni'], strany: [{ osoba: 'platon' }, { osoba: 'nikdo' }] }, osoby, prameny);
    expect(chyby).toHaveLength(2);
  });
});
