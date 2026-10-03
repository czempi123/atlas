// Závěr cesty: rozklad uloženého zápisu počáteční odpovědi pro panel „Na začátku“.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { castiZacatku } from '../../src/lib/zaver';
import { zapisVolby, zapisRoztrid } from '../../src/lib/bloky';
import { BlokVolba, BlokRoztrid } from '../../src/lib/bloky-schema';

const blok = (id: string) => parse(readFileSync(new URL(`../../src/content/bloky/${id}.yaml`, import.meta.url), 'utf8'));

describe('Na začátku: zápis z Volby', () => {
  const volba = BlokVolba.parse(blok('cesta1-jak-zjistit'));
  it('zvolená možnost bez písmene; důvod zvlášť', () => {
    expect(castiZacatku(zapisVolby(volba, 1), 'volba')).toEqual([{ radky: ['Najdu lidi, kteří mají pověst moudrých, a vyzkouším je.'] }]);
    expect(castiZacatku(zapisVolby(volba, 3, 'znají mě nejdéle'), 'volba')).toEqual([
      { radky: ['Zeptám se přátel, co si o mně myslí.'] },
      { nadpis: 'Proč', radky: ['znají mě nejdéle.'] },
    ]);
  });
  it('zápis v jiném tvaru se ukáže tak, jak je uložený', () => {
    expect(castiZacatku('Prostě bych šel do Delf.', 'volba')).toEqual([{ radky: ['Prostě bych šel do Delf.'] }]);
  });
});

describe('Na začátku: zápis z Roztřiď', () => {
  for (const id of ['cesta6-tri-kose', 'cesta5-tri-kose']) {
    it(`${id}: koše s kartami po řádcích, i s vlastními kartami`, () => {
      const b = BlokRoztrid.parse(blok(id));
      const kose = b.kose.map((k) => k.nazev);
      const vlastni = [{ id: 'vlastni-1', text: 'Nový míč; a taky boty' }];
      const umisteni: Record<string, string> = { 'vlastni-1': b.kose[1].id };
      b.karty.forEach((k, i) => (umisteni[k.id] = b.kose[i % b.kose.length].id));
      const casti = castiZacatku(zapisRoztrid(b, { umisteni, vlastni }), 'roztrid', kose);
      expect(casti.map((c) => c.nadpis)).toEqual(kose);
      // Každá karta bloku je v panelu právě jednou, ve svém koši a bez tečky navíc.
      b.kose.forEach((_, i) => {
        const ocekavane = b.karty.filter((_, j) => j % b.kose.length === i).map((x) => x.text);
        expect(casti[i].radky.slice(0, ocekavane.length)).toEqual(ocekavane);
      });
      // Středník ve vlastní kartě ji rozdělí na dva řádky; text se neztratí.
      expect(casti[1].radky.slice(-2)).toEqual(['Nový míč', 'a taky boty']);
    });
  }
  it('prázdný koš v zápisu není, a v panelu tedy taky ne', () => {
    const casti = castiZacatku('Mám v rukou: Kolik času se na ni učím. Nemám v rukou: Jestli mi odepíše; Jestli mi někdo ukradne kolo.', 'roztrid', ['Mám v rukou', 'Zčásti', 'Nemám v rukou']);
    expect(casti).toEqual([
      { nadpis: 'Mám v rukou', radky: ['Kolik času se na ni učím'] },
      { nadpis: 'Nemám v rukou', radky: ['Jestli mi odepíše', 'Jestli mi někdo ukradne kolo'] },
    ]);
  });
  it('název koše uvnitř jiného názvu se nesplete; karta končící otazníkem zůstane celá', () => {
    const casti = castiZacatku('Nemám v rukou: Co bude zítra? Mám v rukou: Dnešek.', 'roztrid', ['Mám v rukou', 'Nemám v rukou']);
    expect(casti).toEqual([
      { nadpis: 'Nemám v rukou', radky: ['Co bude zítra?'] },
      { nadpis: 'Mám v rukou', radky: ['Dnešek'] },
    ]);
  });
  it('když autor koše přejmenoval, zůstane zápis vcelku', () => {
    const text = 'Potřebuju: spánek. Těší mě: pizza.';
    expect(castiZacatku(text, 'roztrid', ['Nutné', 'Příjemné'])).toEqual([{ radky: [text] }]);
    expect(castiZacatku(text, 'roztrid')).toEqual([{ radky: [text] }]);
  });
});

describe('Na začátku: ostatní bloky a prázdný zápis', () => {
  it('vlastní text po odstavcích', () => {
    expect(castiZacatku('První řádek.\n\nDruhý řádek.', 'jiny')).toEqual([{ radky: ['První řádek.', 'Druhý řádek.'] }]);
  });
  it('bez zápisu není co ukázat', () => {
    for (const d of ['volba', 'roztrid', 'jiny'] as const) {
      expect(castiZacatku('', d)).toEqual([]);
      expect(castiZacatku('  \n ', d)).toEqual([]);
    }
  });
});
