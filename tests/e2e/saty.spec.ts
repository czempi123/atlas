// Kresba „Stejné šaty, jiné světlo“ v kroku 6 cesty 1: posuvník mění jen okolí, barvy šatů zůstávají.
// Obě šířky ve světlém i tmavém režimu s axe, bez vodorovného posouvání, klávesnice a snímky stupňů.
import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const KROK = '/cesta/kdy-mam-dobry-duvod-verit/6/';
const MODRA = 'rgb(143, 155, 208)';
const HNEDA = 'rgb(116, 99, 63)';

async function priprav(page: Page) {
  await page.goto(KROK);
  await page.evaluate(() => document.fonts.ready);
  const kresba = page.locator('#saty-svetlo');
  await kresba.scrollIntoViewIfNeeded();
  // Ostrov kresby se hydratuje, až je vidět; blok nad ní na řadu přijít nemusí.
  await page.waitForFunction(() => {
    const ostrov = document.getElementById('saty-svetlo')?.closest('astro-island');
    return !!ostrov && !ostrov.hasAttribute('ssr');
  });
  return kresba;
}

const vypln = (kde: Locator) => kde.first().evaluate((e) => getComputedStyle(e).fill);
const pruhlednost = (kde: Locator) => kde.evaluate((e) => getComputedStyle(e).opacity);

async function barvySatu(kresba: Locator) {
  expect(await vypln(kresba.locator('.saty-modra'))).toBe(MODRA);
  for (const pruh of await kresba.locator('.saty-hneda').all()) expect(await vypln(pruh)).toBe(HNEDA);
}

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    test(`kresba šatů · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      const r = rezim === 'light' ? 'svetly' : 'tmavy';
      await page.addStyleTag({ content: '.cesta-lista, .cesta-hlavicka, header.hlavicka { visibility: hidden !important; }' });

      // Jeden pohled: žádný přepínač. Nic neběží samo: žádné tlačítko pohybu.
      await expect(kresba.getByRole('img', { name: 'Stejné šaty, jiné světlo' })).toBeVisible();
      await expect(kresba.getByRole('radiogroup')).toHaveCount(0);
      await expect(kresba.getByRole('button')).toHaveCount(0);

      // Začíná uprostřed: šedé okolí a barvy samé. Vzorky pod posuvníkem mají barvy šatů.
      const posuvnik = kresba.getByRole('slider', { name: 'Posuň: mění se jen světlo kolem' });
      await expect(posuvnik).toHaveValue('2');
      await expect(kresba.locator('output')).toHaveText('3 z 5 · šedé okolí');
      await expect(kresba.locator('.kresba__popis')).toContainText('dvě barvy, modrou a hnědou');
      expect(await vypln(kresba.locator('.stena'))).toBe('rgb(189, 189, 189)');
      await barvySatu(kresba);
      expect(await kresba.locator('.vzorek').evaluateAll((v) => v.map((e) => getComputedStyle(e).backgroundColor))).toEqual([MODRA, HNEDA]);
      await kresba.screenshot({ path: `test-results/snimky/saty-sede-${sirka}-${r}.png` });

      // Chladné denní světlo: okno, modré okolí. Šaty se nezměnily.
      await posuvnik.fill('0');
      await expect(kresba.locator('output')).toHaveText('1 z 5 · chladné denní světlo');
      await expect.poll(() => vypln(kresba.locator('.stena'))).toBe('rgb(93, 112, 171)');
      await expect.poll(() => pruhlednost(kresba.locator('.okno'))).toBe('1');
      expect(await pruhlednost(kresba.locator('.lampa'))).toBe('0');
      await expect(kresba.locator('.kresba__popis')).toContainText('vidí šaty bílé a zlaté');
      await barvySatu(kresba);
      await kresba.screenshot({ path: `test-results/snimky/saty-chladne-${sirka}-${r}.png` });

      // Teplé umělé světlo: lampa, žluté okolí. Šaty se nezměnily.
      await posuvnik.fill('4');
      await expect(kresba.locator('output')).toHaveText('5 z 5 · teplé umělé světlo');
      await expect.poll(() => vypln(kresba.locator('.stena'))).toBe('rgb(246, 220, 138)');
      await expect.poll(() => pruhlednost(kresba.locator('.lampa'))).toBe('1');
      expect(await pruhlednost(kresba.locator('.okno'))).toBe('0');
      await expect(kresba.locator('.kresba__popis')).toContainText('vidí šaty modré a černé');
      await barvySatu(kresba);
      await kresba.screenshot({ path: `test-results/snimky/saty-teple-${sirka}-${r}.png` });

      const axe = await new AxeBuilder({ page }).include('#saty-svetlo').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    });
  }
}

test('kresba šatů: posuvník jen klávesnicí, text pod blokem nevyzradí odpověď', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);

  // Ani tam, kde se kresby smějí hýbat, nemá tahle tlačítko pohybu: hýbe jí jen student.
  await expect(kresba.getByRole('button')).toHaveCount(0);

  const posuvnik = kresba.getByRole('slider');
  await posuvnik.focus();
  await page.keyboard.press('ArrowLeft');
  await expect(kresba.locator('output')).toHaveText('2 z 5 · trochu chladné světlo');
  await expect(posuvnik).toHaveAttribute('aria-valuetext', 'trochu chladné světlo');
  await page.keyboard.press('Home');
  await expect(kresba.locator('output')).toHaveText('1 z 5 · chladné denní světlo');
  await page.keyboard.press('End');
  await expect(kresba.locator('output')).toHaveText('5 z 5 · teplé umělé světlo');
  await page.keyboard.press('ArrowLeft');
  await expect(kresba.locator('output')).toHaveText('4 z 5 · trochu teplé světlo');
  await barvySatu(kresba);
  // Posuvník s fokusem nezůstane pod pevnou lištou.
  const dole = await posuvnik.evaluate((e) => e.getBoundingClientRect().bottom);
  const lista = await page.locator('.cesta-lista').evaluate((e) => e.getBoundingClientRect().top);
  expect(dole).toBeLessThanOrEqual(lista);

  // Text pod blokem vysvětluje, proč lidé vidí různé barvy; kdo vidí správně, nechává podmínkám v bloku.
  const text = page.locator('.krok__obsah');
  await expect(text.getByRole('heading', { name: 'Proč je každý vidí jinak' })).toBeVisible();
  await expect(text.locator('.ctenarsky').last()).toContainText('lidé na ní přesto viděli různé barvy');
  await expect(text.locator('.ctenarsky').last()).not.toContainText(/modročerné|ve skutečnosti/);
  await expect(text).toContainText('mozek domýšlí, v jakém světle šaty jsou');
});
