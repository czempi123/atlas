// Uložené hodiny učitele: seznam v localStorage pod vlastním klíčem, uložení s novým id a posunem data změny,
// smazání, jméno a obsah souboru, poškozené úložiště a hodiny bez úložiště (jen do zavření stránky).
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { nactiHodiny, nactiHodinu, ulozHodinu, smazHodinu, noveIdHodiny, jmenoSouboru, souborHodiny, _zapomenPamet } from '../../src/lib/hodiny-uloziste';
import { KLIC_HODIN, hodinaZeSouboru } from '../../src/lib/hodiny';

class Uloziste {
  data = new Map<string, string>();
  getItem(k: string) { return this.data.get(k) ?? null; }
  setItem(k: string, v: string) { this.data.set(k, v); }
  removeItem(k: string) { this.data.delete(k); }
}
const g = globalThis as unknown as { localStorage?: unknown };
const obsah = {
  nazev: 'Delfy',
  poznamka: 'Začít otázkou na věštírnu.',
  zastaveni: [{ id: 'k:kdy-mam-dobry-duvod-verit/1', poznamka: 'Přečíst nahlas' }, { id: 'h:jak-poznam-pravdu/protagoras', poznamka: '' }],
};

describe('hodiny s localStorage', () => {
  let u: Uloziste;
  beforeEach(() => { u = new Uloziste(); g.localStorage = u; _zapomenPamet(); });
  afterEach(() => { delete g.localStorage; });

  it('nová hodina dostane id, uloží se pod vlastním klíčem a vydrží obnovení', () => {
    const h = ulozHodinu(obsah, new Date('2026-10-17T10:00:00Z'));
    expect(h.id).toMatch(/^hodina-[a-z0-9]+-[a-z0-9]{6}$/);
    expect(h.verze).toBe(1);
    expect(h.zmeneno).toBe('2026-10-17T10:00:00.000Z');
    expect(u.getItem('atlas-denik')).toBeNull();
    expect(JSON.parse(u.getItem(KLIC_HODIN)!).hodiny).toHaveLength(1);
    _zapomenPamet();
    expect(nactiHodinu(h.id)).toEqual(h);
  });
  it('uložení se stejným id přepíše hodinu a posune datum změny, i ve stejné milisekundě', () => {
    const t = new Date('2026-10-17T10:00:00Z');
    const h = ulozHodinu(obsah, t);
    const h2 = ulozHodinu({ ...obsah, id: h.id, nazev: 'Delfy a sofisté' }, t);
    expect(nactiHodiny()).toHaveLength(1);
    expect(h2.nazev).toBe('Delfy a sofisté');
    expect(Date.parse(h2.zmeneno)).toBeGreaterThan(Date.parse(h.zmeneno));
  });
  it('seznam je seřazený od naposledy změněné; smazání odebere jen jednu', () => {
    const a = ulozHodinu({ ...obsah, nazev: 'A' }, new Date('2026-10-01T10:00:00Z'));
    const b = ulozHodinu({ ...obsah, nazev: 'B' }, new Date('2026-10-02T10:00:00Z'));
    ulozHodinu({ ...obsah, id: a.id, nazev: 'A2' }, new Date('2026-10-03T10:00:00Z'));
    expect(nactiHodiny().map((h) => h.nazev)).toEqual(['A2', 'B']);
    smazHodinu(a.id);
    expect(nactiHodiny().map((h) => h.id)).toEqual([b.id]);
  });
  it('hodina s cizím id (nahraná ze souboru) se přidá, ne zahodí', () => {
    const h = ulozHodinu({ ...obsah, id: 'hodina-od-kolegy' });
    expect(h.id).toBe('hodina-od-kolegy');
    expect(nactiHodinu('hodina-od-kolegy')?.nazev).toBe('Delfy');
  });
  it('zastavení se pročistí jako v souboru: neplatné id a opakování pryč', () => {
    const h = ulozHodinu({ ...obsah, zastaveni: [{ id: 'k:a/1', poznamka: 'x' }, { id: 'zlo<script>', poznamka: '' }, { id: 'k:a/1', poznamka: 'y' }] });
    expect(h.zastaveni).toEqual([{ id: 'k:a/1', poznamka: 'x' }]);
  });
  it('poškozené úložiště a cizí verze dají prázdný seznam', () => {
    u.setItem(KLIC_HODIN, '{nesmysl');
    expect(nactiHodiny()).toEqual([]);
    u.setItem(KLIC_HODIN, JSON.stringify({ verze: 2, hodiny: [] }));
    expect(nactiHodiny()).toEqual([]);
    u.setItem(KLIC_HODIN, JSON.stringify({ verze: 1, hodiny: [{ id: 5 }, { verze: 1, id: 'h1', nazev: 'X', zastaveni: [] }] }));
    expect(nactiHodiny().map((h) => h.id)).toEqual(['h1']);
  });
});

describe('hodiny bez úložiště', () => {
  beforeEach(() => { delete g.localStorage; _zapomenPamet(); });
  it('hodina vydrží v paměti do zavření stránky', () => {
    const h = ulozHodinu(obsah);
    expect(nactiHodinu(h.id)?.nazev).toBe('Delfy');
    smazHodinu(h.id);
    expect(nactiHodiny()).toEqual([]);
  });
  it('úložiště, které při zápisu hodí chybu, nechá hodinu v paměti', () => {
    g.localStorage = { getItem: () => null, setItem: () => { throw new Error('plno'); } };
    const h = ulozHodinu(obsah);
    expect(nactiHodinu(h.id)?.id).toBe(h.id);
    delete g.localStorage;
  });
});

describe('soubor hodiny', () => {
  it('jméno souboru bez diakritiky, s datem; bez názvu jen datum', () => {
    const t = new Date('2026-10-17T10:00:00Z');
    expect(jmenoSouboru({ nazev: 'Delfy: Sókratés a věštírna' }, t)).toBe('hodina-delfy-sokrates-a-vestirna-2026-10-17.json');
    expect(jmenoSouboru({ nazev: '' }, t)).toBe('hodina-2026-10-17.json');
  });
  it('soubor nese poznámky a jde zase nahrát beze ztráty', () => {
    const _ = new Uloziste();
    g.localStorage = _;
    const h = ulozHodinu(obsah);
    expect(hodinaZeSouboru(souborHodiny(h))).toEqual(h);
    expect(souborHodiny(h)).toContain('Přečíst nahlas');
    delete g.localStorage;
  });
  it('dvě nová id se liší', () => {
    const t = Date.now();
    expect(noveIdHodiny(t)).not.toBe(noveIdHodiny(t));
  });
});
