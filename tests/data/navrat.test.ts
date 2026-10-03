// Návrat: kdy a co deník nabídne (čas je parametr), stav, zápis a obsah tří případů v src/content/bloky.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';
import {
  DEN, NAVRAT_PO_DNECH, ODKLAD_DNI, ODPOVEDI_NAVRATU,
  casDokonceni, nabidkaNavratu, platnyStavNavratu, zapisNavratu, otazkaZapisuNavratu, chybyNavratu,
} from '../../src/lib/navrat';
import { BlokNavrat } from '../../src/lib/bloky-schema';
import type { Denik, Zapis } from '../../src/lib/denik';

const TED = Date.parse('2026-10-10T12:00:00.000Z');
const pred = (dni: number) => new Date(TED - dni * DEN).toISOString();
const N1 = { id: 'cesta1-navrat', cesta: 'c1', pravidlo: 'c1-pravidlo' };
const N6 = { id: 'cesta6-navrat', cesta: 'c6', pravidlo: 'c6-pravidlo' };
const zapis = (id: string, odpoved = 'Moje pravidlo.'): Zapis => ({ id, otazka: '?', odpoved, odkaz: '/', kdy: pred(5) });
const cesta = (dokonceno: string | undefined, navstivene = [1, 2, 3], kdy = pred(0)) => ({ nazev: 'Cesta', pocet: 3, krok: 3, navstivene, kdy, ...(dokonceno ? { dokonceno } : {}) });
const denik = (d: Partial<Pick<Denik, 'cesty' | 'zapisy' | 'bloky'>>) => ({ cesty: {}, zapisy: [], bloky: {}, ...d });

describe('Návrat: kdy se nabídne', () => {
  it('před třemi dny nic, po třech dnech nabídka', () => {
    const d = (dni: number) => denik({ cesty: { c1: cesta(pred(dni)) }, zapisy: [zapis('c1-pravidlo')] });
    expect(NAVRAT_PO_DNECH).toBe(3);
    expect(nabidkaNavratu(d(0), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(d(2.99), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(d(3), [N1], TED)).toBe(N1);
    expect(nabidkaNavratu(d(40), [N1], TED)).toBe(N1);
    // Čas dokončení v budoucnosti (přenastavené hodiny) nabídku nespustí.
    expect(nabidkaNavratu(d(-1), [N1], TED)).toBeNull();
  });
  it('pozdější otevření kroku čas dokončení neposouvá', () => {
    // Dokončeno před pěti dny, krok naposledy otevřený dnes.
    const d = denik({ cesty: { c1: cesta(pred(5), [1, 2, 3], pred(0)) }, zapisy: [zapis('c1-pravidlo')] });
    expect(casDokonceni(d.cesty.c1)).toBe(pred(5));
    expect(nabidkaNavratu(d, [N1], TED)).toBe(N1);
  });
  it('jen tomu, kdo cestu dokončil a má uložené závěrečné pravidlo', () => {
    const hotova = { c1: cesta(pred(5)) };
    expect(nabidkaNavratu(denik({ cesty: hotova }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(denik({ cesty: hotova, zapisy: [zapis('c1-pravidlo', '  ')] }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(denik({ cesty: hotova, zapisy: [zapis('jine-pravidlo')] }), [N1], TED)).toBeNull();
    // Pravidlo bez dokončené cesty (student skočil rovnou na poslední krok) nestačí.
    expect(nabidkaNavratu(denik({ cesty: { c1: cesta(undefined, [3], pred(5)) }, zapisy: [zapis('c1-pravidlo')] }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(denik({ zapisy: [zapis('c1-pravidlo')] }), [N1], TED)).toBeNull();
    // Cesta bez návratu je v pořádku: není co nabídnout.
    expect(nabidkaNavratu(denik({ cesty: hotova, zapisy: [zapis('c1-pravidlo')] }), [], TED)).toBeNull();
  });
  it('starý deník bez času dokončení: bere se čas naposledy otevřeného kroku', () => {
    const stary = (dni: number, navstivene = [1, 2, 3]) => denik({ cesty: { c1: cesta(undefined, navstivene, pred(dni)) }, zapisy: [zapis('c1-pravidlo')] });
    expect(casDokonceni(stary(4).cesty.c1)).toBe(pred(4));
    expect(nabidkaNavratu(stary(4), [N1], TED)).toBe(N1);
    expect(nabidkaNavratu(stary(1), [N1], TED)).toBeNull();
    expect(casDokonceni(stary(4, [1, 2]).cesty.c1)).toBeNull();
    expect(casDokonceni(undefined)).toBeNull();
    expect(casDokonceni({})).toBeNull();
    // Poškozený údaj nic nerozbije.
    expect(nabidkaNavratu(denik({ cesty: { c1: { ...cesta('nesmysl') } }, zapisy: [zapis('c1-pravidlo')] }), [N1], TED)).toBeNull();
  });
  it('odložit: vrátí se po třech dnech; skrýt: už se nenabídne', () => {
    const d = (stav: unknown) => denik({ cesty: { c1: cesta(pred(10)) }, zapisy: [zapis('c1-pravidlo')], bloky: { 'cesta1-navrat': stav } });
    expect(ODKLAD_DNI).toBe(3);
    expect(nabidkaNavratu(d({ odlozeno: pred(0) }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(d({ odlozeno: pred(2.9) }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(d({ odlozeno: pred(3) }), [N1], TED)).toBe(N1);
    expect(nabidkaNavratu(d({ skryto: true }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(d({ skryto: true, odlozeno: pred(30) }), [N1], TED)).toBeNull();
    // Rozepsaná, ale nezapsaná odpověď nabídku neruší.
    expect(nabidkaNavratu(d({ odpoved: 'ano', duvod: 'x' }), [N1], TED)).toBe(N1);
  });
  it('zodpovězený návrat se nenabízí znovu', () => {
    const zaklad = { cesty: { c1: cesta(pred(10)) } };
    expect(nabidkaNavratu(denik({ ...zaklad, zapisy: [zapis('c1-pravidlo'), zapis('cesta1-navrat', 'Ano.')] }), [N1], TED)).toBeNull();
    expect(nabidkaNavratu(denik({ ...zaklad, zapisy: [zapis('c1-pravidlo')], bloky: { 'cesta1-navrat': { odpoved: 'nevim', zapsano: true } } }), [N1], TED)).toBeNull();
  });
  it('nejvýš jedna nabídka: cesta dokončená nejdéle', () => {
    const d = denik({ cesty: { c1: cesta(pred(4)), c6: cesta(pred(9)) }, zapisy: [zapis('c1-pravidlo'), zapis('c6-pravidlo')] });
    expect(nabidkaNavratu(d, [N1, N6], TED)).toBe(N6);
    // Odložený ustoupí dalšímu.
    expect(nabidkaNavratu({ ...d, bloky: { 'cesta6-navrat': { odlozeno: pred(1) } } }, [N1, N6], TED)).toBe(N1);
  });
});

describe('Návrat: stav a zápis', () => {
  it('uložený stav: nesmysl nahradí výchozím', () => {
    const prazdny = { odpoved: null, duvod: '', zapsano: false, odlozeno: null, skryto: false };
    for (const s of [undefined, null, 'x', 7, {}, { odpoved: 'mozna' }]) expect(platnyStavNavratu(s)).toEqual(prazdny);
    expect(platnyStavNavratu({ odpoved: 'upravim', duvod: 'chybí zdroj', zapsano: true, odlozeno: pred(1), skryto: true })).toEqual({
      odpoved: 'upravim', duvod: 'chybí zdroj', zapsano: true, odlozeno: pred(1), skryto: true,
    });
    // Zapsáno bez odpovědi být nemůže; neplatné datum odložení se zahodí.
    expect(platnyStavNavratu({ zapsano: true, odlozeno: 'včera' })).toEqual(prazdny);
  });
  it('zápis do deníku: odpověď a nepovinný důvod', () => {
    expect(ODPOVEDI_NAVRATU.map((o) => o.text)).toEqual(['Ano', 'Upravím ho', 'Nevím']);
    expect(zapisNavratu('ano')).toBe('Ano.');
    expect(zapisNavratu('upravim', 'neřeší, co dělat večer')).toBe('Upravím ho. Proč: neřeší, co dělat večer.');
    expect(zapisNavratu('nevim', '  ')).toBe('Nevím.');
    expect(otazkaZapisuNavratu('Nový telefon')).toBe('Návrat · Nový telefon: platí moje pravidlo i tady?');
  });
});

describe('Návrat: kontrola proti cestám', () => {
  const kroky = [
    { cesta: 'c1', krok: 1, nazev: 'Scéna', body: '<Pribeh id="s" />' },
    { cesta: 'c1', krok: 2, nazev: 'Pravidlo', body: 'Text.\n\n<ZaverCesty id="c1-pravidlo" otazka="Kdy?" />' },
    { cesta: 'c6', krok: 1, nazev: 'Pravidlo', body: '<ZaverCesty id="c6-pravidlo" otazka="Kolik?" />' },
  ];
  const cesty = new Set(['c1', 'c6', 'c9']);
  it('v pořádku: pravidlo stojí v posledním kroku cesty; cesta bez návratu nevadí', () => {
    expect(chybyNavratu([N1, N6], cesty, kroky)).toEqual([]);
    expect(chybyNavratu([], cesty, kroky)).toEqual([]);
  });
  it('neznámá cesta, druhý návrat téže cesty a pravidlo, které není závěrem', () => {
    expect(chybyNavratu([{ ...N1, cesta: 'neni' }], cesty, kroky)).toEqual([expect.stringMatching(/cesta „neni“ není/)]);
    expect(chybyNavratu([N1, { ...N1, id: 'druhy' }], cesty, kroky)).toEqual([expect.stringMatching(/už návrat má \(„cesta1-navrat“\)/)]);
    expect(chybyNavratu([{ ...N1, pravidlo: 'c6-pravidlo' }], cesty, kroky)).toEqual([expect.stringMatching(/není závěrem cesty „c1“/)]);
    expect(chybyNavratu([{ ...N1, pravidlo: 's' }], cesty, kroky)).toHaveLength(1);
    expect(chybyNavratu([{ id: 'n9', cesta: 'c9', pravidlo: 'x' }], cesty, kroky)).toHaveLength(1);
  });
});

// Obsah návratů v src/content/bloky proti skutečným cestám.
const slozka = new URL('../../src/content/bloky/', import.meta.url);
const slozkaCest = new URL('../../src/content/cesty/', import.meta.url);
const frontmatter = (text: string) => parse(text.split('---')[1]);
const navraty = readdirSync(slozka)
  .filter((s) => s.endsWith('.yaml'))
  .map((s) => ({ id: s.replace('.yaml', ''), ...parse(readFileSync(new URL(s, slozka), 'utf8')) }))
  .filter((b) => b.druh === 'navrat')
  .map(({ id, ...b }) => ({ id: id as string, ...BlokNavrat.parse(b) }));
const slugy = readdirSync(slozkaCest).filter((s) => /^[a-z0-9-]+\.mdx$/.test(s)).map((s) => s.replace('.mdx', ''));
const kroky = slugy.flatMap((c) =>
  readdirSync(new URL(`${c}/`, slozkaCest)).filter((s) => /^\d+.*\.mdx$/.test(s)).map((s) => {
    const text = readFileSync(new URL(`${c}/${s}`, slozkaCest), 'utf8');
    return { ...frontmatter(text), body: text.split('---').slice(2).join('---') } as { cesta: string; krok: number; nazev: string; body: string };
  }),
);

describe('obsah návratů (src/content/bloky)', () => {
  it('každá hotová cesta má svůj návrat a ten sedí k jejímu závěrečnému pravidlu', () => {
    expect(chybyNavratu(navraty, new Set(slugy), kroky)).toEqual([]);
    expect(navraty.map((n) => n.cesta).sort()).toEqual([...slugy].sort());
  });
  for (const n of navraty) {
    it(`${n.id}: vymyšlený případ a po každé odpovědi jedna věta, která se ptá dál`, () => {
      expect(n.scena).toMatch(/^Představ si/);
      expect(n.kOvereni).toEqual([]);
      expect(n.zdroje).toEqual([]);
      // Věty do 25 slov, odstavce do 4 vět.
      for (const odstavec of n.scena.split(/\n\s*\n/)) {
        const vety = odstavec.split(/(?<=[.!?])\s+/).filter(Boolean);
        expect(vety.length, odstavec).toBeLessThanOrEqual(4);
        for (const v of vety) expect(v.split(/\s+/).length, v).toBeLessThanOrEqual(25);
      }
      for (const o of ODPOVEDI_NAVRATU) {
        const veta = n.po[o.id];
        expect(veta, veta).toMatch(/\?$/);
        expect(veta.match(/[.!?](\s|$)/g), veta).toHaveLength(1);
        expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
        // Ptá se, nehodnotí; a žádné lomené tvary.
        expect(veta).not.toMatch(/správn|špatn|výborn|skvěl|\w\/\w/i);
      }
    });
  }
});
