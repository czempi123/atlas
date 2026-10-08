// Kresba „Kde je střed?“ (cesta 4, krok 6): značka v půli čáry stojí, bod „střed“ se posouvá podle člověka a vody
// a v půli neleží nikdy. Obě šířky ve světlém i tmavém režimu s axe, všech šest stavů se snímky, klávesnice,
// pohyb vln a jeho zastavení. Logiku hlídá tests/data/stred.test.ts.
import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { STAVY_STREDU, LIDE_NA_BREHU, VODY, popisStredu, stred } from '../../src/lib/stred';

const KROK = '/cesta/staci-vedet-co-je-spravne/6/';
const ID = 'kde-je-stred';
const LISTY = 'header.hlavicka, nav.lista, .cesta-lista, .cesta-hlavicka, .obsah-lista { visibility: hidden !important; }';

async function priprav(page: Page) {
  await page.goto(KROK);
  await page.evaluate(() => document.fonts.ready);
  const kresba = page.locator(`#${ID}`);
  await kresba.scrollIntoViewIfNeeded();
  await page.waitForFunction((id) => {
    const ostrov = document.getElementById(id)?.closest('astro-island');
    return !!ostrov && !ostrov.hasAttribute('ssr');
  }, ID);
  return kresba;
}

/** Viditelné popisky v kresbě se nepřekrývají a leží celé v plátně. */
async function popiskyVolne(kresba: Locator) {
  const chyby = await kresba.locator('svg.kresba__platno').evaluate((svg) => {
    const platno = svg.getBoundingClientRect();
    const videt = (t: Element) => { for (let e: Element | null = t; e && e !== svg; e = e.parentElement) if (getComputedStyle(e).opacity === '0') return false; return true; };
    const r = [...svg.querySelectorAll('text')].filter((t) => t.textContent && videt(t)).map((t) => ({ t: t.textContent, b: t.getBoundingClientRect() }));
    const ven: string[] = [];
    r.forEach((a, i) => {
      if (a.b.left < platno.left || a.b.right > platno.right || a.b.top < platno.top || a.b.bottom > platno.bottom) ven.push(`mimo plátno: ${a.t}`);
      for (const b of r.slice(i + 1)) {
        if (a.b.left < b.b.right && b.b.left < a.b.right && a.b.top < b.b.bottom && b.b.top < a.b.bottom) ven.push(`${a.t} × ${b.t}`);
      }
    });
    return ven;
  });
  expect(chyby).toEqual([]);
}

/** Střed kruhu nebo čárky na plátně v jednotkách kresby (0–340). */
const naPlatne = (kresba: Locator, selektor: string) => kresba.locator('svg.kresba__platno').evaluate((svg, sel) => {
  const p = svg.getBoundingClientRect();
  const b = svg.querySelector(sel)!.getBoundingClientRect();
  return ((b.left + b.width / 2 - p.left) / p.width) * 340;
}, selektor);

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    const r = rezim === 'light' ? 'svetly' : 'tmavy';
    test(`kde je střed · ${sirka} px · ${r}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      await page.addStyleTag({ content: LISTY });
      const popis = kresba.locator('.kresba__popis');
      const kdo = kresba.getByRole('radiogroup', { name: 'Kdo stojí na břehu' });
      const voda = kresba.getByRole('radiogroup', { name: 'Jaká je voda' });

      // Jeden pohled: rám přepínač nemá. Při omezeném pohybu vlny stojí a tlačítko pohybu chybí.
      await expect(kresba.getByRole('img', { name: 'Kde je střed?' })).toBeVisible();
      await expect(kresba).not.toHaveClass(/kresba--pohyb/);
      await expect(kresba.getByRole('button')).toHaveCount(0);
      await expect(kresba.getByRole('radiogroup')).toHaveCount(2);
      for (const v of await kresba.locator('.k-prepinac span').evaluateAll((s) => s.map((x) => x.getBoundingClientRect().height))) expect(v).toBeGreaterThanOrEqual(44);
      await expect(kdo.getByRole('radio', { name: 'dobrý plavec' })).toBeChecked();
      await expect(voda.getByRole('radio', { name: 'klidná' })).toBeChecked();
      // Kresba nemá čísla: není to měřák.
      expect(await kresba.locator('svg.kresba__platno').textContent()).not.toMatch(/\d/);

      const pulka = await naPlatne(kresba, '.pulka');
      expect(Math.abs(pulka - 170)).toBeLessThan(1);
      const videne = new Set<number>();
      for (const s of STAVY_STREDU) {
        await kdo.getByRole('radio', { name: LIDE_NA_BREHU.find((c) => c.id === s.kdo)!.nazev, exact: true }).check({ force: true });
        await voda.getByRole('radio', { name: VODY.find((v) => v.id === s.voda)!.nazev, exact: true }).check({ force: true });
        await expect(popis).toHaveText(popisStredu(s));
        await expect(kresba.locator('.bod text')).toHaveText(`střed: ${stred(s).popisek}`);
        // Bod leží tam, kde má, a nikdy v půli; značka půlky se nehnula.
        const ocekavane = 34 + stred(s).misto * 272;
        await expect.poll(() => naPlatne(kresba, '.bod__kruh')).toBeCloseTo(ocekavane, 0);
        expect(Math.abs(ocekavane - pulka)).toBeGreaterThan(15);
        expect(Math.abs((await naPlatne(kresba, '.pulka')) - pulka)).toBeLessThan(0.5);
        videne.add(Math.round(ocekavane));
        // Vidět je jedna voda a póza, která k činu patří.
        await expect.poll(() => kresba.locator('.voda.je').count()).toBe(1);
        await popiskyVolne(kresba);
        await kresba.screenshot({ path: `test-results/snimky/stred-${s.kdo}-${s.voda}-${sirka}-${r}.png` });
      }
      expect(videne.size).toBe(6);

      const axe = await new AxeBuilder({ page }).include(`#${ID}`).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    });
  }
}

test('kde je střed: celé jen klávesnicí; vlny běží, jdou zastavit a zůstanou stát', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);
  const stav = (selektor: string) => kresba.locator(selektor).first().evaluate((e) => getComputedStyle(e).animationPlayState);
  const posun = () => kresba.locator('.vlna--klidna').first().evaluate((e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41);
  const popis = kresba.locator('.kresba__popis');

  await expect(kresba).toHaveClass(/kresba--pohyb/);
  expect(await stav('.vlna--klidna')).toBe('running');
  expect(await stav('.ruka')).toBe('running');

  // Každá skupina přepínačů je jedna zastávka tabulátoru, uvnitř se chodí šipkami.
  await kresba.getByRole('radiogroup', { name: 'Kdo stojí na břehu' }).getByRole('radio', { name: 'dobrý plavec' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(popis).toHaveText(popisStredu({ kdo: 'neplavec', voda: 'klidna' }));
  await page.keyboard.press('Tab');
  await expect(kresba.getByRole('radiogroup', { name: 'Jaká je voda' }).getByRole('radio', { name: 'klidná' })).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(popis).toHaveText(popisStredu({ kdo: 'neplavec', voda: 'rozvodnena' }));
  await expect(kresba.locator('.bod text')).toHaveText('střed: volat o pomoc');
  await page.keyboard.press('Tab');
  const tlacitko = kresba.getByRole('button', { name: 'Zastavit pohyb' });
  await expect(tlacitko).toBeFocused();
  // Prvek s fokusem neleží pod pevnou lištou kroku.
  await expect.poll(() => tlacitko.evaluate((e) => { const b = e.getBoundingClientRect(); return e.contains(document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2)); })).toBe(true);

  await page.keyboard.press('Enter');
  await expect(kresba.getByRole('button', { name: 'Pustit pohyb' })).toBeFocused();
  expect(await stav('.vlna--klidna')).toBe('paused');
  expect(await stav('.vlna--divoka')).toBe('paused');
  expect(await stav('.ruka')).toBe('paused');
  await page.waitForTimeout(150);
  const b = await posun();
  await page.waitForTimeout(400);
  expect(await posun()).toBe(b);
  await page.keyboard.press('Space');
  expect(await stav('.vlna--klidna')).toBe('running');

  // Kresba není blok: nic neukládá a nenabízí Kam dál. Stojí za odstavcem, který zobrazuje, a před přiznáním.
  await expect(kresba).not.toHaveClass(/\bblok\b/);
  await expect(kresba.getByRole('navigation')).toHaveCount(0);
  const text = page.locator('.krok__obsah > .ctenarsky');
  expect(await text.evaluate((t) => {
    const pred = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('Představ si řeku'))!;
    const po = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('Kresba má jednu čáru'))!;
    const k = t.querySelector('#kde-je-stred')!;
    return !!(pred.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING) && !!(k.compareDocumentPosition(po) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBe(true);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('atlas-denik') ?? '{"zapisy":[]}').zapisy.length)).toBe(0);
});
