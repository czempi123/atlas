// Prvek, na který přijde fokus z klávesnice, nesmí zůstat pod pevnou spodní lištou.
// Prohlížeč stránku sám neposune, když prvek leží ve viditelné části okna, byť pod lištou:
// na notebooku 1440 × 900 tak zůstávala spodní polovina pole v kroku 4 cesty 3 zakrytá (revize celku 4).
import { test, expect, type Page } from '@playwright/test';

async function tabNa(page: Page, selektor: string) {
  for (let i = 0; i < 60; i++) {
    await page.keyboard.press('Tab');
    if (await page.evaluate((s) => document.activeElement === document.querySelector(s), selektor)) return;
  }
  throw new Error(`Tabulátor nedošel na ${selektor}`);
}

async function mezera(page: Page, selektor: string, lista: string) {
  await page.waitForTimeout(150);
  return page.evaluate(
    ([s, l]) => document.querySelector(l)!.getBoundingClientRect().top - document.querySelector(s)!.getBoundingClientRect().bottom,
    [selektor, lista],
  );
}

for (const vyska of [900, 920]) {
  test(`fokus z klávesnice nezůstane pod lištou kroku · 1440 × ${vyska}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: vyska });
    await page.goto('/cesta/je-to-co-vidim-cela-skutecnost/4/');
    await page.evaluate(() => document.fonts.ready);
    await tabNa(page, '#cesta3-ctverec-sam-pole');
    expect(await mezera(page, '#cesta3-ctverec-sam-pole', '.cesta-lista')).toBeGreaterThanOrEqual(0);
  });
}

test('fokus z klávesnice nezůstane pod spodní navigací na telefonu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  // Plynulé posouvání by měření zastihlo v půli cesty.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/osobnost/platon/');
  await page.evaluate(() => document.fonts.ready);
  // Projde prvních čtyřicet ovladatelných prvků stránky; žádný nesmí skončit pod navigací.
  for (let i = 0; i < 40; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    const pod = await page.evaluate(() => {
      const e = document.activeElement as HTMLElement | null;
      const lista = document.querySelector('nav.lista')!;
      if (!e || e === document.body || lista.contains(e)) return 0;
      return e.getBoundingClientRect().bottom - lista.getBoundingClientRect().top;
    });
    expect(pod, `prvek ${i + 1} v pořadí tabulátoru`).toBeLessThanOrEqual(0);
  }
});

test('klepnutí myší stránku neposune', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/cesta/je-to-co-vidim-cela-skutecnost/4/');
  await page.evaluate(() => document.fonts.ready);
  const pole = page.locator('#cesta3-ctverec-sam-pole');
  const pred = await page.evaluate(() => scrollY);
  const box = (await pole.boundingBox())!;
  // Klepne do horní části pole, která je vidět nad lištou.
  await page.mouse.click(box.x + 40, box.y + 10);
  await expect(pole).toBeFocused();
  await page.waitForTimeout(150);
  expect(await page.evaluate(() => scrollY)).toBe(pred);
});
