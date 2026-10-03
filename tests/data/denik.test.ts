// Deník: zápisy a stav bloků se ukládají do localStorage, vydrží „obnovení“ (nové načtení)
// a bez úložiště fungují aspoň v paměti.
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { nacti, ulozZapis, najdiZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku, zaznamenejKrok, dokonceniCesty, ulozCteni, cteniStranky, _zapomenPamet } from '../../src/lib/denik';

class Uloziste {
  data = new Map<string, string>();
  getItem(k: string) { return this.data.get(k) ?? null; }
  setItem(k: string, v: string) { this.data.set(k, v); }
  removeItem(k: string) { this.data.delete(k); }
}
const g = globalThis as unknown as { localStorage?: unknown };

describe('deník s localStorage', () => {
  let u: Uloziste;
  beforeEach(() => { u = new Uloziste(); g.localStorage = u; _zapomenPamet(); });
  afterEach(() => { delete g.localStorage; });

  it('zápis s druhem se uloží a přečte znovu z úložiště', () => {
    ulozZapis({ id: 'v1', otazka: 'Co uděláš?', odpoved: 'B · Najdu protipříklad.', odkaz: '/x/#v1', druh: 'volba' });
    _zapomenPamet();
    const z = najdiZapis('v1')!;
    expect(z.druh).toBe('volba');
    expect(z.kdy).toMatch(/^\d{4}-/);
    expect(JSON.parse(u.getItem('atlas-denik')!).zapisy).toHaveLength(1);
  });
  it('nový zápis se stejným id přepíše starý, smazání ho odstraní', () => {
    ulozZapis({ id: 'v1', otazka: '?', odpoved: 'A', odkaz: '/' });
    ulozZapis({ id: 'v1', otazka: '?', odpoved: 'B', odkaz: '/' });
    expect(nacti().zapisy.map((z) => z.odpoved)).toEqual(['B']);
    smazZapis('v1');
    expect(najdiZapis('v1')).toBeUndefined();
  });
  it('stav bloků: uložení, přečtení po obnovení, smazání', () => {
    ulozStavBloku('spor-1', { prvni: 1, konecna: null });
    ulozStavBloku('kdo-1', { odhad: 'a', odkryto: true });
    _zapomenPamet();
    expect(stavBloku('spor-1')).toEqual({ prvni: 1, konecna: null });
    smazStavBloku('spor-1');
    expect(stavBloku('spor-1')).toBeUndefined();
    expect(stavBloku('kdo-1')).toEqual({ odhad: 'a', odkryto: true });
  });
  it('starší deník bez části bloky se načte a doplní', () => {
    u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [] }));
    expect(nacti().bloky).toEqual({});
    u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], bloky: [1] }));
    expect(nacti().bloky).toEqual({});
  });
  it('čas dokončení cesty se zapíše jednou a pozdější otevření kroku ho neposune', async () => {
    zaznamenejKrok('c', 1, 'Cesta', 3);
    zaznamenejKrok('c', 2, 'Cesta', 3);
    expect(nacti().cesty.c.dokonceno).toBeUndefined();
    zaznamenejKrok('c', 3, 'Cesta', 3);
    const dokonceno = nacti().cesty.c.dokonceno!;
    expect(dokonceno).toBe(nacti().cesty.c.kdy);
    await new Promise((r) => setTimeout(r, 5));
    zaznamenejKrok('c', 1, 'Cesta', 3);
    zaznamenejKrok('c', 3, 'Cesta', 3);
    _zapomenPamet();
    const c = nacti().cesty.c;
    expect(c.dokonceno).toBe(dokonceno);
    expect(c.kdy > dokonceno).toBe(true);
    expect(c.krok).toBe(3);
  });
  it('starý deník: cesta prošlá celá bez času dokončení dostane čas naposledy otevřeného kroku', () => {
    const kdy = '2026-09-20T10:00:00.000Z';
    u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], cesty: { c: { nazev: 'Cesta', pocet: 3, krok: 3, navstivene: [1, 2, 3], kdy } } }));
    expect(nacti().cesty.c.dokonceno).toBeUndefined();
    zaznamenejKrok('c', 2, 'Cesta', 3);
    expect(nacti().cesty.c.dokonceno).toBe(kdy);
    expect(nacti().cesty.c.kdy).not.toBe(kdy);
    // Rozpracovaná cesta ze starého deníku se dokončí až teď.
    expect(dokonceniCesty({ pocet: 3, navstivene: [1, 2], kdy }, [1, 2, 3], 3, 'TED')).toBe('TED');
    expect(dokonceniCesty({ pocet: 3, navstivene: [1, 2], kdy }, [1, 2], 3, 'TED')).toBeUndefined();
    expect(dokonceniCesty(undefined, [1], 1, 'TED')).toBe('TED');
    expect(dokonceniCesty({ dokonceno: 'DRIV', pocet: 3, navstivene: [1, 2, 3], kdy }, [1, 2, 3], 3, 'TED')).toBe('DRIV');
  });
  it('poškozený záznam nerozbije deník', () => {
    u.setItem('atlas-denik', '{nejde');
    expect(nacti().zapisy).toEqual([]);
  });
});

describe('deník bez localStorage', () => {
  beforeEach(() => { delete g.localStorage; _zapomenPamet(); });
  it('funguje v paměti do zavření stránky', () => {
    ulozStavBloku('b', { x: 1 });
    ulozZapis({ id: 'z', otazka: '?', odpoved: 'ano', odkaz: '/' });
    expect(stavBloku('b')).toEqual({ x: 1 });
    expect(najdiZapis('z')?.odpoved).toBe('ano');
  });
});

describe('deník: aktivita a cesty', () => {
  beforeEach(() => { (globalThis as unknown as { localStorage?: unknown }).localStorage = new Uloziste(); _zapomenPamet(); });
  afterEach(() => { delete (globalThis as unknown as { localStorage?: unknown }).localStorage; });

  it('stav s meta zapíše aktivitu, novější nahoře, smazání ji odstraní', () => {
    ulozStavBloku('a', { x: 1 }, { odkaz: '/x/#a', otazka: 'A?', druh: 'volba', hotovo: false });
    ulozStavBloku('b', { x: 2 }, { odkaz: '/x/#b', otazka: 'B?', druh: 'spor', hotovo: true });
    ulozStavBloku('a', { x: 3 }, { odkaz: '/x/#a', otazka: 'A?', druh: 'volba', hotovo: true });
    expect(nacti().aktivita.map((x) => [x.id, x.hotovo])).toEqual([['a', true], ['b', true]]);
    smazStavBloku('a');
    expect(nacti().aktivita.map((x) => x.id)).toEqual(['b']);
  });
  it('postup cesty: naposledy otevřený krok a navštívené kroky', () => {
    zaznamenejKrok('c', 1, 'Cesta', 6);
    zaznamenejKrok('c', 3, 'Cesta', 6);
    zaznamenejKrok('c', 2, 'Cesta', 6);
    _zapomenPamet();
    expect(nacti().cesty.c).toMatchObject({ krok: 2, navstivene: [1, 2, 3], pocet: 6, nazev: 'Cesta' });
  });
  it('starší deník bez aktivity a cest se doplní', () => {
    (globalThis as unknown as { localStorage: Uloziste }).localStorage.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [] }));
    expect(nacti().aktivita).toEqual([]);
    expect(nacti().cesty).toEqual({});
  });
});

describe('deník: naposledy čtený oddíl profilu', () => {
  let u: Uloziste;
  beforeEach(() => { u = new Uloziste(); g.localStorage = u; _zapomenPamet(); });
  afterEach(() => { delete g.localStorage; });
  const ulozeno = () => JSON.parse(u.getItem('atlas-denik')!);

  it('ukládá jen kotvu u adresy stránky, deník zůstává verze 1 a pole je v uložených datech (tedy i v exportu)', () => {
    ulozCteni('/osobnost/sokrates/', 'soud');
    _zapomenPamet();
    expect(cteniStranky('/osobnost/sokrates/')).toBe('soud');
    expect(ulozeno().verze).toBe(1);
    expect(ulozeno().cteni).toEqual({ '/osobnost/sokrates/': 'soud' });
  });
  it('nový oddíl přepíše starý; stejný oddíl se podruhé nezapisuje', () => {
    ulozCteni('/osobnost/sokrates/', 'soud');
    ulozCteni('/osobnost/sokrates/', 'posledni-den');
    expect(cteniStranky('/osobnost/sokrates/')).toBe('posledni-den');
    let zapisu = 0;
    const puvodni = u.setItem.bind(u);
    u.setItem = (k: string, v: string) => { zapisu++; puvodni(k, v); };
    ulozCteni('/osobnost/sokrates/', 'posledni-den');
    expect(zapisu).toBe(0);
    ulozCteni('/osobnost/sokrates/', 'soud');
    expect(zapisu).toBe(1);
  });
  it('starší deník bez pole se načte beze změny a jiné části zůstanou', () => {
    u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [{ id: 'z', otazka: '?', odpoved: 'ano', odkaz: '/', kdy: '2026-10-01T10:00:00Z' }], vyzvy: [], navstivene: [] }));
    expect(nacti().cteni).toBeUndefined();
    expect(cteniStranky('/osobnost/sokrates/')).toBeUndefined();
    ulozCteni('/osobnost/sokrates/', 'soud');
    expect(nacti().zapisy).toHaveLength(1);
    expect(nacti().cteni).toEqual({ '/osobnost/sokrates/': 'soud' });
  });
  it('rozbité pole deník nerozbije', () => {
    for (const spatne of ['text', [1, 2], 5, null]) {
      u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], cteni: spatne }));
      expect(cteniStranky('/osobnost/sokrates/')).toBeUndefined();
      ulozCteni('/osobnost/sokrates/', 'soud');
      expect(cteniStranky('/osobnost/sokrates/')).toBe('soud');
    }
    u.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], cteni: { '/a/': 7, '/b/': 'kotva' } }));
    expect(cteniStranky('/a/')).toBeUndefined();
    ulozCteni('/c/', 'x');
    expect(nacti().cteni).toEqual({ '/b/': 'kotva', '/c/': 'x' });
  });
  it('pamatuje si nejvýš třicet stránek, naposledy čtená zůstává', () => {
    for (let i = 0; i < 35; i++) ulozCteni(`/osobnost/o${i}/`, 'k');
    ulozCteni('/osobnost/o10/', 'znovu');
    const klice = Object.keys(nacti().cteni!);
    expect(klice).toHaveLength(30);
    expect(klice).not.toContain('/osobnost/o4/');
    expect(klice[0]).toBe('/osobnost/o5/');
    expect(klice.at(-1)).toBe('/osobnost/o10/');
  });
  it('bez localStorage drží do zavření stránky', () => {
    delete g.localStorage;
    _zapomenPamet();
    ulozCteni('/osobnost/sokrates/', 'soud');
    expect(cteniStranky('/osobnost/sokrates/')).toBe('soud');
  });
});
