// Kresba „Kde je střed?“ (cesta 4, krok 6): střed se posouvá podle člověka a situace, značka v půli stojí.
import { describe, expect, it } from 'vitest';
import { KRAJE, LIDE_NA_BREHU, PULKA, STAVY_STREDU, VODY, VYCHOZI_STRED, popisStredu, stred } from '../../src/lib/stred';

describe('kde je střed', () => {
  it('začíná dobrým plavcem u klidné vody a nabízí tři lidi a dvojí vodu', () => {
    expect(VYCHOZI_STRED).toEqual({ kdo: 'plavec', voda: 'klidna' });
    expect(LIDE_NA_BREHU.map((c) => c.nazev)).toEqual(['plavčík', 'dobrý plavec', 'neplavec']);
    expect(VODY.map((v) => v.nazev)).toEqual(['klidná', 'rozvodněná']);
    expect(STAVY_STREDU).toHaveLength(6);
    expect(KRAJE).toEqual({ malo: 'nic neudělat', mnoho: 'skočit za každou cenu', pulka: 'půlka' });
  });

  it('střed neleží nikdy v půli ani na kraji a pro každý stav je jinde', () => {
    const mista = STAVY_STREDU.map((s) => stred(s).misto);
    expect(new Set(mista).size).toBe(6);
    for (const m of mista) {
      expect(Math.abs(m - PULKA)).toBeGreaterThanOrEqual(0.07);
      expect(m).toBeGreaterThanOrEqual(0.2);
      expect(m).toBeLessThanOrEqual(0.9);
    }
  });

  it('střed není pro každého stejný: kdo umí víc, má ho blíž ke skoku, a rozvodněná řeka ho posune každému', () => {
    for (const voda of VODY.map((v) => v.id)) {
      expect(stred({ kdo: 'plavcik', voda }).misto).toBeGreaterThan(stred({ kdo: 'plavec', voda }).misto);
      expect(stred({ kdo: 'plavec', voda }).misto).toBeGreaterThan(stred({ kdo: 'neplavec', voda }).misto);
    }
    for (const kdo of LIDE_NA_BREHU.map((c) => c.id)) {
      expect(stred({ kdo, voda: 'klidna' }).misto).toBeGreaterThan(stred({ kdo, voda: 'rozvodnena' }).misto);
    }
  });

  it('co kdo udělá: neplavec neskáče nikdy, nikdo nezůstane u „nic neudělat“', () => {
    expect(stred({ kdo: 'plavcik', voda: 'klidna' })).toMatchObject({ cin: 'skok', popisek: 'skočit hned' });
    expect(stred({ kdo: 'plavcik', voda: 'rozvodnena' })).toMatchObject({ cin: 'skok-na-lane', popisek: 'skočit na laně' });
    expect(stred({ kdo: 'plavec', voda: 'klidna' })).toMatchObject({ cin: 'skok', popisek: 'skočit' });
    expect(stred({ kdo: 'plavec', voda: 'rozvodnena' })).toMatchObject({ cin: 'lano', popisek: 'hodit lano' });
    expect(stred({ kdo: 'neplavec', voda: 'klidna' })).toMatchObject({ cin: 'lano', popisek: 'hodit lano' });
    expect(stred({ kdo: 'neplavec', voda: 'rozvodnena' })).toMatchObject({ cin: 'volani', popisek: 'volat o pomoc' });
    for (const s of STAVY_STREDU) expect(stred(s).popisek).not.toMatch(/nic|čekat/);
  });

  it('každý stav má vlastní text; říká, kdo stojí na břehu, jaká je voda a že půlka stojí', () => {
    const texty = STAVY_STREDU.map(popisStredu);
    expect(new Set(texty).size).toBe(6);
    for (const [i, text] of texty.entries()) {
      const s = STAVY_STREDU[i];
      expect(text).toMatch(/^Na břehu stojí /);
      expect(text).toContain(s.voda === 'klidna' ? 'voda je klidná' : 'řeka je rozvodněná');
      expect(text).toMatch(stred(s).misto > PULKA ? /vpravo od půlky čáry\./ : /vlevo od půlky čáry\./);
      expect(text).toMatch(/Půlka se nehnula\.$/);
    }
    expect(popisStredu({ kdo: 'neplavec', voda: 'klidna' })).toContain('Skočit by pro něj nebyla odvaha, ale hazard');
    expect(popisStredu({ kdo: 'neplavec', voda: 'rozvodnena' })).toContain('Ani to není totéž co nic neudělat.');
  });

  it('texty drží pravidla: věty do 25 slov, žádná čísla, žádné „správně“ a žádný rod studenta', () => {
    for (const text of STAVY_STREDU.map(popisStredu)) {
      for (const veta of text.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      expect(text).not.toMatch(/\d|správn|špatn|musí|měl by|zbaběl/);
      expect(text).not.toMatch(/\bjsi\b|\bbys\b/);
    }
  });
});
