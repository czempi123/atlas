// Mini mapa osoby: výřez podle míst a strana popisků (src/lib/mapa.ts).
import { describe, expect, it } from 'vitest';
import { projekce, stranyPopisku, vyrezMiniMapy, VYREZY_OBDOBI_1, type MistoMiniMapy } from '../../src/lib/mapa';

const misto = (nazev: string, souradnice: [number, number], radky: string[] = ['působení']): MistoMiniMapy => ({ nazev, souradnice, radky });
const athenes = misto('Athény', [23.727, 37.984]);
const korinth = misto('Korinth', [22.88, 37.906], ['pobyt', 'smrt 323 př. n. l.']);
const sinope = misto('Sinópé', [35.15, 42.02], ['narození']);
const thurioi = misto('Thurioi', [16.49, 39.72], ['působení 444 př. n. l.']);
const abdera = misto('Abdéra', [24.98, 40.95], ['narození']);
const potidaia = misto('Potidaia', [23.33, 40.19], ['válečné tažení 432 př. n. l.']);

const naVyrezu = (mista: MistoMiniMapy[]) => {
  const v = vyrezMiniMapy(mista);
  const p = projekce(v, 1e6);
  return { v, xy: mista.map((m) => p(m.souradnice) as [number, number]) };
};

describe('výřez mini mapy', () => {
  it('bez míst a s místy kolem Egejského moře zůstává výchozí', () => {
    expect(vyrezMiniMapy([])).toBe(VYREZY_OBDOBI_1.mini);
    expect(vyrezMiniMapy([athenes, potidaia])).toBe(VYREZY_OBDOBI_1.mini);
  });

  it('místo mimo výchozí výřez mapu oddálí, až jsou vidět všechna', () => {
    for (const mista of [[sinope, athenes, korinth], [abdera, athenes, thurioi]]) {
      const { v, xy } = naVyrezu(mista);
      expect(v.meritko).toBeLessThan(VYREZY_OBDOBI_1.mini.meritko);
      expect(v.sirka).toBe(VYREZY_OBDOBI_1.mini.sirka);
      for (const [x, y] of xy) {
        expect(x).toBeGreaterThan(8);
        expect(x).toBeLessThan(v.sirka - 8);
        expect(y).toBeGreaterThan(20);
        expect(y).toBeLessThan(v.vyska - 20);
      }
    }
  });

  it('nechá pod bodem místo na řádky popisku', () => {
    const { v, xy } = naVyrezu([sinope, athenes, korinth]);
    const korinthY = xy[2][1];
    expect(korinthY + korinth.radky.length * 22).toBeLessThan(v.vyska);
  });
});

describe('strana popisku', () => {
  it('u pravého okraje vlevo, jinak vpravo', () => {
    expect(stranyPopisku([[100, 100], [400, 300]], 520)).toEqual(['vpravo', 'vlevo']);
  });

  it('bod, který má těsně vpravo souseda ve stejné výšce, dostane popisek vlevo', () => {
    expect(stranyPopisku([[178, 250], [200, 248]], 520)).toEqual(['vlevo', 'vpravo']);
  });

  it('soused nad nebo pod bodem stranu nemění', () => {
    expect(stranyPopisku([[180, 250], [190, 300]], 520)).toEqual(['vpravo', 'vpravo']);
  });
});
