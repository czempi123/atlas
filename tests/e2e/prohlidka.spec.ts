// Průchod klíčovými stránkami na šířce 390 a 1440 px ve světlém i tmavém režimu:
// kontrast a přístupnost (axe, WCAG 2 AA), žádné vodorovné posouvání, navigace a snímky obrazovky.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const STRANKY = [
  { cesta: '/', nazev: 'domu', nadpis: /Velké otázky mají/ },
  { cesta: '/lide/', nazev: 'lide', nadpis: /Lidé a směry/ },
  { cesta: '/osobnost/sokrates/', nazev: 'sokrates', nadpis: /Sókratés/ },
  { cesta: '/mapa/', nazev: 'mapa', nadpis: /Mapa a čas/ },
];
const SIRKY = [
  { sirka: 390, vyska: 844 },
  { sirka: 1440, vyska: 900 },
];
const REZIMY = ['light', 'dark'] as const;

async function pripravit(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForSelector('astro-island[component-url*="Hledani"]:not([ssr])', { state: 'attached' });
  // Líně hydratované ostrovy a obrázky: projeď stránku, ať je vše vykreslené.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });
}

for (const s of STRANKY) {
  for (const { sirka, vyska } of SIRKY) {
    for (const rezim of REZIMY) {
      test(`${s.nazev} · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
        await page.setViewportSize({ width: sirka, height: vyska });
        await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
        await page.goto(s.cesta);
        await pripravit(page);

        await expect(page.locator('h1')).toContainText(s.nadpis);
        // Režim odpovídá nastavení systému.
        const pozadi = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
        expect(pozadi).toBe(rezim === 'light' ? 'rgb(244, 239, 230)' : 'rgb(23, 20, 15)');
        // Žádné vodorovné posouvání stránky.
        const presah = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(presah).toBeLessThanOrEqual(0);
        // Navigace: na telefonu spodní lišta, na notebooku vstupy v hlavičce.
        if (sirka < 900) {
          await expect(page.locator('nav.lista')).toBeVisible();
          await expect(page.locator('nav.vstupy')).toBeHidden();
        } else {
          await expect(page.locator('nav.vstupy')).toBeVisible();
          await expect(page.locator('nav.lista')).toBeHidden();
        }
        // Kontrast a přístupnost podle WCAG 2 AA.
        const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        const popis = axe.violations.map((v) => `${v.id}: ${v.help}\n  ${v.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
        expect(popis, popis.join('\n')).toEqual([]);

        // Na celostránkovém snímku by pevná spodní lišta visela uprostřed; ukážeme ji na konci stránky.
        await page.addStyleTag({ content: 'nav.lista { position: static !important; } .paticka { padding-bottom: 24px !important; }' });
        await page.screenshot({ path: `test-results/snimky/${s.nazev}-${sirka}-${rezim === 'light' ? 'svetly' : 'tmavy'}.png`, fullPage: true });
      });
    }
  }
}

test('ruční přepínač režimu přebije systém a zapamatuje si volbu', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.locator('[data-prepinac-rezimu]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => localStorage.getItem('atlas-rezim'))).toBe('dark');
  await page.goto('/lide/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(23, 20, 15)');
  await page.locator('[data-prepinac-rezimu]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('klávesnice: odkaz Přeskočit na obsah a hledání klávesou /', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/osobnost/sokrates/');
  await page.waitForSelector('astro-island[component-url*="Hledani"]:not([ssr])', { state: 'attached' });
  await page.keyboard.press('Tab');
  await expect(page.locator('.preskocit')).toBeFocused();
  await page.keyboard.press('/');
  const dialog = page.getByRole('dialog', { name: 'Hledání v atlasu' });
  await expect(dialog).toBeVisible();
  await dialog.locator('input').fill('Chairefón');
  await expect(dialog.locator('.pagefind-ui__result').first()).toBeVisible({ timeout: 15_000 });
  await expect(dialog.locator('.pagefind-ui__result-link').first()).toContainText('Sókratés');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('Nejdřív sám: odpověď se odkryje až po pokusu a uloží do deníku', async ({ page }) => {
  await page.goto('/osobnost/sokrates/');
  const blok = page.locator('section.karta').first();
  await expect(blok.getByRole('region', { name: 'Srovnání' })).toHaveCount(0);
  await blok.locator('textarea').fill('Moudrý je ten, kdo umí přiznat chybu.');
  await blok.getByRole('button', { name: 'Porovnat se Sókratem' }).click();
  await expect(blok.getByRole('region', { name: 'Srovnání' })).toContainText('kde jeho vědění končí');
  await page.goto('/denik/');
  await expect(page.getByText('Moudrý je ten, kdo umí přiznat chybu.')).toBeVisible();
});
