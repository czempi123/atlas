// Kresba Platónovy jeskyně v kroku 1 cesty 3: dva pohledy, pohyb stínů, klávesnice a omezený pohyb.
// Obě šířky ve světlém i tmavém režimu s axe, bez vodorovného posouvání a se snímky obou pohledů.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const KROK = '/cesta/je-to-co-vidim-cela-skutecnost/1/';

async function priprav(page: Page) {
  await page.goto(KROK);
  await page.evaluate(() => document.fonts.ready);
  const kresba = page.locator('#jeskyne-pohledy');
  await kresba.scrollIntoViewIfNeeded();
  await page.waitForSelector('astro-island[component-url*="Jeskyne"]:not([ssr])', { state: 'attached' });
  return kresba;
}

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    test(`kresba jeskyně · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      const r = rezim === 'light' ? 'svetly' : 'tmavy';
      // Pevné lišty by na snímku ležely přes kresbu.
      await page.addStyleTag({ content: '.cesta-lista, .cesta-hlavicka, header.hlavicka { visibility: hidden !important; }' });

      // Výchozí je pohled vězňů: student sedí mezi nimi. Text pod kresbou říká totéž slovy.
      await expect(kresba.getByRole('radio', { name: 'Pohled vězňů' })).toBeChecked();
      await expect(kresba.locator('.popis')).toContainText('Sedíš mezi vězni a vidíš to, co oni');
      await expect(kresba.locator('svg .pohled-vezni')).toHaveCount(1);
      await expect(kresba.getByRole('img', { name: 'Pohled vězňů' })).toBeVisible();
      await kresba.screenshot({ path: `test-results/snimky/jeskyne-vezni-${sirka}-${r}.png` });

      await kresba.getByRole('radio', { name: 'Pohled z boku' }).check({ force: true });
      await expect(kresba.locator('.popis')).toContainText('Tenhle pohled žádný z nich nemá.');
      await expect(kresba.locator('svg .pohled-bok')).toHaveCount(1);
      await expect(kresba.locator('svg .pohled-vezni')).toHaveCount(0);
      await expect(kresba.locator('svg text.popisek')).toHaveText(['oheň', 'nosiči za zídkou', 'vězni', 'stěna']);
      // Popisky v kresbě se nepřekrývají a nevyčnívají z ní.
      const ram = (await kresba.locator('svg').boundingBox())!;
      const popisky = await kresba.locator('svg text.popisek').evaluateAll((t) => t.map((x) => { const b = x.getBoundingClientRect(); return { l: b.left, p: b.right }; }));
      for (let i = 0; i < popisky.length; i++) {
        expect(popisky[i].l).toBeGreaterThanOrEqual(ram.x);
        expect(popisky[i].p).toBeLessThanOrEqual(ram.x + ram.width);
        if (i) expect(popisky[i].l, `popisek ${i}`).toBeGreaterThan(popisky[i - 1].p + 2);
      }
      await kresba.screenshot({ path: `test-results/snimky/jeskyne-bok-${sirka}-${r}.png` });

      // Přepínač má dotykové cíle aspoň 44 px; při omezeném pohybu kresba stojí a tlačítko pohybu chybí.
      for (const b of await kresba.locator('.prepinac span').evaluateAll((s) => s.map((x) => x.getBoundingClientRect().height))) expect(b).toBeGreaterThanOrEqual(44);
      await expect(kresba).not.toHaveClass(/pohyb/);
      await expect(kresba.getByRole('button')).toHaveCount(0);

      const axe = await new AxeBuilder({ page }).include('#jeskyne-pohledy').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
    });
  }
}

test('kresba jeskyně: stíny se hýbou, pohyb jde zastavit a pustit; ovládání jen klávesnicí', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);
  const stav = (selektor: string) => kresba.locator(selektor).first().evaluate((e) => getComputedStyle(e).animationPlayState);
  const posun = () => kresba.locator('.pruvod').evaluate((e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41);

  // Po načtení se průvod stínů hýbe.
  await expect(kresba).toHaveClass(/pohyb/);
  const tlacitko = kresba.getByRole('button', { name: 'Zastavit pohyb' });
  await expect(tlacitko).toBeVisible();
  expect(await stav('.pruvod')).toBe('running');
  const a = await posun();
  await page.waitForTimeout(700);
  expect(await posun()).toBeLessThan(a);

  // Zastavit: stíny zůstanou stát tam, kde byly; tlačítko se změní.
  await tlacitko.focus();
  await page.keyboard.press('Enter');
  await expect(kresba.getByRole('button', { name: 'Pustit pohyb' })).toBeFocused();
  expect(await stav('.pruvod')).toBe('paused');
  const b = await posun();
  await page.waitForTimeout(400);
  expect(await posun()).toBe(b);
  expect(b).toBeLessThan(0);

  // Druhý pohled šipkou: přepínač je jedna zastávka tabulátoru. Oheň stojí, dokud je pohyb zastavený.
  await kresba.getByRole('radio', { name: 'Pohled vězňů' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(kresba.getByRole('radio', { name: 'Pohled z boku' })).toBeChecked();
  await expect(kresba.getByRole('img', { name: 'Pohled z boku' })).toBeVisible();
  expect(await stav('.plamen')).toBe('paused');
  await page.keyboard.press('Tab');
  await expect(kresba.getByRole('button', { name: 'Pustit pohyb' })).toBeFocused();
  // Prvek s fokusem nezůstane pod pevnou spodní lištou kroku.
  const dole = await kresba.getByRole('button').evaluate((e) => e.getBoundingClientRect().bottom);
  const lista = await page.locator('.cesta-lista').evaluate((e) => e.getBoundingClientRect().top);
  expect(dole).toBeLessThanOrEqual(lista);
  await page.keyboard.press('Space');
  await expect(kresba.getByRole('button', { name: 'Zastavit pohyb' })).toBeVisible();
  expect(await stav('.plamen')).toBe('running');
});
