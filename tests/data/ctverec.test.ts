// Zdvoj čtverec: geometrie tří pokusů z Menóna a texty pod kresbou.
import { describe, expect, it } from 'vitest';
import { HLEDANY, POKUSY, PUVODNI, VELKY, obsahMnohouhelniku, pocet, pokus, popisPokusu, rozdelCtverecky } from '../../src/lib/ctverec';

describe('ctverec: obsahy pokusů', () => {
  it('původní čtverec má obsah čtyři a hledaný osm', () => {
    expect(PUVODNI * PUVODNI).toBe(4);
    expect(HLEDANY).toBe(2 * PUVODNI * PUVODNI);
  });

  it('obsah z vrcholů sedí na obsah v datech: 16, 9 a 8', () => {
    expect(POKUSY.map((p) => obsahMnohouhelniku(p.body))).toEqual([16, 9, 8]);
    expect(POKUSY.map((p) => p.obsah)).toEqual([16, 9, 8]);
  });

  it('chlapcovy pokusy netrefí osm, úhlopříčka ano', () => {
    expect(POKUSY.filter((p) => p.obsah === HLEDANY).map((p) => p.id)).toEqual(['uhlopricka']);
  });

  it('čtverec na úhlopříčce spojuje středy stran velkého čtverce', () => {
    expect(pokus('uhlopricka').body).toEqual([[VELKY / 2, 0], [VELKY, VELKY / 2], [VELKY / 2, VELKY], [0, VELKY / 2]]);
  });

  it('neznámé id vrátí první pokus', () => {
    expect(pokus('nic').id).toBe('ctyri');
  });
});

describe('ctverec: počítání čtverečků', () => {
  it('strana čtyři: šestnáct celých, strana tři: devět celých', () => {
    expect(pocet(pokus('ctyri'))).toEqual({ cele: 16, pulky: 0, soucet: 16 });
    expect(pocet(pokus('tri'))).toEqual({ cele: 9, pulky: 0, soucet: 9 });
  });

  it('úhlopříčka: čtyři celé a osm půlek, dohromady osm', () => {
    expect(pocet(pokus('uhlopricka'))).toEqual({ cele: 4, pulky: 8, soucet: 8 });
  });

  it('celé čtverečky úhlopříčky tvoří střed 2 × 2', () => {
    const { cele } = rozdelCtverecky(pokus('uhlopricka').body);
    expect(cele).toEqual([{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }]);
  });

  it('součet vždy souhlasí s obsahem', () => {
    for (const p of POKUSY) expect(pocet(p).soucet).toBe(p.obsah);
  });
});

describe('ctverec: texty', () => {
  it('věty pod kresbou mají nejvýš 25 slov', () => {
    for (const p of POKUSY) {
      for (const veta of [...p.scena.split(/(?<=\.)\s/), ...p.spocitano.split(/(?<=\.)\s/)]) {
        expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      }
    }
  });

  it('před spočítáním text výsledek neříká, po spočítání ano', () => {
    for (const p of POKUSY) {
      expect(popisPokusu(p, false)).toBe(p.scena);
      expect(popisPokusu(p, true)).toBe(`${p.scena} ${p.spocitano}`);
    }
    expect(popisPokusu(pokus('ctyri'), false)).not.toMatch(/šestnáct/);
    expect(popisPokusu(pokus('tri'), false)).not.toMatch(/devět/);
    expect(popisPokusu(pokus('uhlopricka'), false)).not.toMatch(/osm/);
  });
});
