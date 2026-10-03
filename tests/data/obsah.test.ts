// Obsah stránky osobnosti: oddíly ze sestavené stránky, právě čtený oddíl a návrat ke čtení.
import { describe, it, expect } from 'vitest';
import { oddilyZeStranky, ctenyOddil, kamPokracovat } from '../../src/lib/obsah';

describe('oddilyZeStranky', () => {
  const html = `
    <div class="uvod">Úvod bez oddílu</div>
    <section class="kapitola" id="delfy" aria-labelledby="delfy-titulek" data-oddil="Věštba z Delf" data-oddil-cislo="01" data-astro-cid-x><h2 id="delfy-titulek">…</h2></section>
    <section class="kapitola" data-astro-cid-x data-oddil-cislo="02" data-oddil="Muž z agory" id="muz-z-agory"></section>
    <section class="doba obdobi-1" aria-labelledby="doba-a-lide" data-oddil="Doba a lidé" data-oddil-kotva="doba-a-lide"><h2 id="doba-a-lide">S kým Sókratés žil</h2></section>
    <section class="myslenky" data-oddil="Dvě velké myšlenky" data-oddil-kotva="myslenky"></section>
    <details class="prameny" id="prameny" data-oddil="Prameny"><summary>Prameny</summary></details>`;

  it('vrátí oddíly v pořadí stránky s kotvou, názvem a číslem kapitoly', () => {
    expect(oddilyZeStranky(html)).toEqual([
      { kotva: 'delfy', nazev: 'Věštba z Delf', cislo: '01' },
      { kotva: 'muz-z-agory', nazev: 'Muž z agory', cislo: '02' },
      { kotva: 'doba-a-lide', nazev: 'Doba a lidé' },
      { kotva: 'myslenky', nazev: 'Dvě velké myšlenky' },
      { kotva: 'prameny', nazev: 'Prameny' },
    ]);
  });
  it('oddíl, který na stránce není, v obsahu není; stránka bez oddílů má prázdný obsah', () => {
    expect(oddilyZeStranky(html).map((o) => o.kotva)).not.toContain('zkus-to-zit');
    expect(oddilyZeStranky('<p>Jen text</p>')).toEqual([]);
    expect(oddilyZeStranky('')).toEqual([]);
  });
  it('kotva z data-oddil-kotva má přednost před id; prvek bez kotvy nebo bez názvu se přeskočí', () => {
    expect(oddilyZeStranky('<nav id="x" data-oddil="Kam dál" data-oddil-kotva="kam-dal"></nav>')).toEqual([{ kotva: 'kam-dal', nazev: 'Kam dál' }]);
    expect(oddilyZeStranky('<section data-oddil="Bez kotvy"></section><section id="a" data-oddil=""></section>')).toEqual([]);
  });
  it('aria-labelledby ani data-oddil-kotva se nepletou s id a s názvem', () => {
    expect(oddilyZeStranky('<section aria-labelledby="jine" data-oddil-kotva="k" data-oddil="Název"></section>')).toEqual([{ kotva: 'k', nazev: 'Název' }]);
  });
  it('název s uvozovkami a ampersandem se odkóduje, stejná kotva se nebere dvakrát', () => {
    const h = '<section id="a" data-oddil="Spor &amp; &quot;smír&quot;"></section><section id="a" data-oddil="Podruhé"></section>';
    expect(oddilyZeStranky(h)).toEqual([{ kotva: 'a', nazev: 'Spor & "smír"' }]);
  });
});

describe('ctenyOddil', () => {
  const hrany = (posun: number) => [
    { kotva: 'a', nahore: 400 - posun },
    { kotva: 'b', nahore: 1400 - posun },
    { kotva: 'c', nahore: 2400 - posun },
    { kotva: 'prameny', nahore: 3000 - posun },
  ];
  it('nad prvním oddílem není čtený žádný', () => {
    expect(ctenyOddil(hrany(0), 300)).toBeNull();
    expect(ctenyOddil([], 300)).toBeNull();
  });
  it('čtený je poslední oddíl, jehož horní hrana přešla čáru čtení (i přesně na čáře)', () => {
    expect(ctenyOddil(hrany(100), 300)).toBe('a');
    expect(ctenyOddil(hrany(1099), 300)).toBe('a');
    expect(ctenyOddil(hrany(1100), 300)).toBe('b');
    expect(ctenyOddil(hrany(2500), 300)).toBe('c');
  });
  it('na konci stránky platí poslední oddíl, který je v okně vidět', () => {
    // Stránka končí dřív, než Prameny dojedou k čáře.
    expect(ctenyOddil(hrany(2300), 300)).toBe('c');
    expect(ctenyOddil(hrany(2300), 300, { naKonci: true, vyskaOkna: 800 })).toBe('prameny');
    expect(ctenyOddil(hrany(2300), 300, { naKonci: false, vyskaOkna: 800 })).toBe('c');
    // Krátká stránka: konec je zároveň začátek, vidět je jen první oddíl.
    expect(ctenyOddil(hrany(0), 300, { naKonci: true, vyskaOkna: 800 })).toBe('a');
  });
});

describe('kamPokracovat', () => {
  const oddily = [{ kotva: 'delfy', nazev: 'Věštba z Delf', cislo: '01' }, { kotva: 'soud', nazev: 'Soud', cislo: '04' }, { kotva: 'prameny', nazev: 'Prameny' }];
  it('nabídne uložený oddíl, když není první', () => {
    expect(kamPokracovat(oddily, 'soud')).toEqual({ kotva: 'soud', nazev: 'Soud', cislo: '04' });
    expect(kamPokracovat(oddily, 'prameny')?.nazev).toBe('Prameny');
  });
  it('první oddíl, neznámá kotva ani rozbitý záznam nic nenabídnou', () => {
    expect(kamPokracovat(oddily, 'delfy')).toBeNull();
    expect(kamPokracovat(oddily, 'zrusena-kapitola')).toBeNull();
    for (const x of [undefined, null, 3, {}, '']) expect(kamPokracovat(oddily, x)).toBeNull();
    expect(kamPokracovat([], 'soud')).toBeNull();
  });
  it('je soběstačná: její text jde spustit bez okolního modulu (skript před vykreslením na profilu)', () => {
    const samostatna = new Function(`return (${kamPokracovat.toString()})`)() as typeof kamPokracovat;
    for (const k of ['soud', 'delfy', 'nic', undefined]) expect(samostatna(oddily, k)).toEqual(kamPokracovat(oddily, k));
  });
});
