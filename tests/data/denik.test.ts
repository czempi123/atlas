// Deník: zápisy a stav bloků se ukládají do localStorage, vydrží „obnovení“ (nové načtení)
// a bez úložiště fungují aspoň v paměti.
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { nacti, ulozZapis, najdiZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku, _zapomenPamet } from '../../src/lib/denik';

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
