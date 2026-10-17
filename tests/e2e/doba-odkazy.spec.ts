// Doba a lidé: jméno člověka s vlastní stránkou je odkaz na ni (adresaOsoby), lidé bez stránky a osoby,
// o kterých stránka je, zůstávají prostým textem. Větev doba-odkazy (O1).
import { test, expect, type Page } from '@playwright/test';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const PROFILY = readdirSync(join(import.meta.dirname, '../../src/content/osobnosti'))
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => `/osobnost/${f.replace(/\.mdx$/, '')}/`);

const jmeno = (page: Page, text: string) => page.locator('.doba__vztahy .lide__jmeno').filter({ hasText: new RegExp(`^${text}$`) });
const vRetezu = (page: Page, text: string) => page.locator('.navazovali li > *').filter({ hasText: new RegExp(`^${text}$`) });

test('Diogenés: Kratés vede na společný profil, Antisthenés odkaz nemá', async ({ page }) => {
  await page.goto('/osobnost/diogenes/');
  await expect(jmeno(page, 'Kratés').locator('a')).toHaveAttribute('href', '/osobnost/krates-a-hipparchia/');
  await expect(jmeno(page, 'Antisthenés')).toHaveCount(1);
  await expect(jmeno(page, 'Antisthenés').locator('a')).toHaveCount(0);
  // Řetěz Kdo navazoval: Kratés je odkaz, Diogenés zůstává zvýrazněný bez odkazu.
  await expect(page.locator('.navazovali a', { hasText: /^Kratés$/ }).first()).toHaveAttribute('href', '/osobnost/krates-a-hipparchia/');
  await expect(vRetezu(page, 'Diogenés').first()).toHaveClass(/\bja\b/);
  await expect(page.locator('.navazovali a', { hasText: /^Diogenés$/ })).toHaveCount(0);
});

test('společný profil: Diogenés vede na svou stránku, Zénón z Kitia odkaz nemá', async ({ page }) => {
  await page.goto('/osobnost/krates-a-hipparchia/');
  await expect(jmeno(page, 'Diogenés').locator('a')).toHaveAttribute('href', '/osobnost/diogenes/');
  await expect(jmeno(page, 'Zénón z Kitia')).toHaveCount(1);
  await expect(jmeno(page, 'Zénón z Kitia').locator('a')).toHaveCount(0);
  // Řetěz Kdo navazoval: Kratés zůstává zvýrazněný bez odkazu, Zénón z Kitia bez odkazu.
  await expect(vRetezu(page, 'Kratés').first()).toHaveClass(/\bja\b/);
  await expect(page.locator('.navazovali a', { hasText: /^(Kratés|Zénón z Kitia)$/ })).toHaveCount(0);
});

test('Sókratés: Platón vede na /osobnost/platon/', async ({ page }) => {
  await page.goto('/osobnost/sokrates/');
  await expect(jmeno(page, 'Platón').locator('a')).toHaveAttribute('href', '/osobnost/platon/');
});

test('žádný odkaz v Době a lidech nevede na stránku, na které je, a každý vede na profil', async ({ page }) => {
  for (const profil of PROFILY) {
    await page.goto(profil);
    const hrefs = await page.locator('.doba a.jmeno-odkaz').evaluateAll((a) => a.map((x) => x.getAttribute('href')));
    expect(hrefs.length, profil).toBeGreaterThan(0);
    for (const h of hrefs) {
      expect(PROFILY, `${profil} → ${h}`).toContain(h);
      expect(h, profil).not.toBe(profil);
    }
  }
});

test('odkaz má cíl dotyku aspoň 24 px a nic nepřetéká na 390 px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const profil of ['/osobnost/diogenes/', '/osobnost/krates-a-hipparchia/', '/osobnost/platon/']) {
    await page.goto(profil);
    const vysky = await page.locator('.doba a.jmeno-odkaz').evaluateAll((a) => a.map((x) => x.getBoundingClientRect().height));
    for (const v of vysky) expect(v, profil).toBeGreaterThanOrEqual(24);
    const pretek = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(pretek, profil).toBeLessThanOrEqual(0);
  }
});
