// Doba a lidé: jméno člověka s vlastní stránkou je odkaz na ni (adresaOsoby), lidé bez stránky a osoby,
// o kterých stránka je, zůstávají prostým textem. Větev doba-odkazy (O1).
import { test, expect, type Page } from '@playwright/test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const PROFILY = readdirSync(join(import.meta.dirname, '../../src/content/osobnosti'))
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => `/osobnost/${f.replace(/\.mdx$/, '')}/`);
// Medailonky (medailonek: true v lide.yaml, větev medailonky) jsou stránky stejně jako profily.
const MEDAILONKY = (parse(readFileSync(join(import.meta.dirname, '../../src/data/lide.yaml'), 'utf8')) as { id: string; medailonek?: true }[])
  .filter((o) => o.medailonek)
  .map((o) => `/osobnost/${o.id}/`);
const STRANKY = [...PROFILY, ...MEDAILONKY];

const jmeno = (page: Page, text: string) => page.locator('.doba__vztahy .lide__jmeno').filter({ hasText: new RegExp(`^${text}$`) });
const vRetezu = (page: Page, text: string) => page.locator('.navazovali li > *').filter({ hasText: new RegExp(`^${text}$`) });

test('Diogenés: Kratés vede na společný profil, Antisthenés na medailonek', async ({ page }) => {
  await page.goto('/osobnost/diogenes/');
  await expect(jmeno(page, 'Kratés').locator('a')).toHaveAttribute('href', '/osobnost/krates-a-hipparchia/');
  await expect(jmeno(page, 'Antisthenés')).toHaveCount(1);
  // Medailonek (P9, M1): odkaz přibyl sám, jakmile Antisthenés dostal v datech medailonek: true.
  await expect(jmeno(page, 'Antisthenés').locator('a')).toHaveAttribute('href', '/osobnost/antisthenes/');
  // Řetěz Kdo navazoval: Kratés je odkaz, Diogenés zůstává zvýrazněný bez odkazu.
  await expect(page.locator('.navazovali a', { hasText: /^Kratés$/ }).first()).toHaveAttribute('href', '/osobnost/krates-a-hipparchia/');
  await expect(vRetezu(page, 'Diogenés').first()).toHaveClass(/\bja\b/);
  await expect(page.locator('.navazovali a', { hasText: /^Diogenés$/ })).toHaveCount(0);
});

test('společný profil: Diogenés vede na svou stránku, Zénón z Kitia a Chrýsippos na medailonky', async ({ page }) => {
  await page.goto('/osobnost/krates-a-hipparchia/');
  await expect(jmeno(page, 'Diogenés').locator('a')).toHaveAttribute('href', '/osobnost/diogenes/');
  // Medailonek (P9): odkaz přibyl sám, jakmile Zénón dostal v datech medailonek: true.
  await expect(jmeno(page, 'Zénón z Kitia').locator('a')).toHaveAttribute('href', '/osobnost/zenon-z-kitia/');
  // Řetěz Kdo navazoval: Kratés zůstává zvýrazněný bez odkazu, Zénón z Kitia a Kleanthés vedou na medailonky.
  await expect(vRetezu(page, 'Kratés').first()).toHaveClass(/\bja\b/);
  await expect(page.locator('.navazovali a', { hasText: /^Kratés$/ })).toHaveCount(0);
  await expect(page.locator('.navazovali a', { hasText: /^Kleanthés$/ }).first()).toHaveAttribute('href', '/osobnost/kleanthes/');
  await expect(page.locator('.navazovali a', { hasText: /^Chrýsippos$/ }).first()).toHaveAttribute('href', '/osobnost/chrysippos/');
});

// Odkaz je právě u lidí, kteří stránku mají; kdo ji nemá (a dostane ji v další vlně medailonků), zůstává prostým textem.
test('Sókratés: odkaz mají jen lidé se stránkou', async ({ page }) => {
  const lide = parse(readFileSync(join(import.meta.dirname, '../../src/data/lide.yaml'), 'utf8')) as { id: string; jmeno: string }[];
  await page.goto('/osobnost/sokrates/');
  const jmena = await page.locator('.doba__vztahy .lide__jmeno').evaluateAll((el) => el.map((x) => ({ text: (x.textContent ?? '').trim(), odkaz: x.querySelector('a')?.getAttribute('href') ?? null })));
  expect(jmena.length).toBeGreaterThan(5);
  for (const j of jmena) {
    const osoba = lide.find((o) => o.jmeno === j.text);
    expect(osoba, j.text).toBeTruthy();
    expect(j.odkaz !== null, j.text).toBe(STRANKY.includes(`/osobnost/${osoba!.id}/`));
  }
});

test('Sókratés: Platón vede na /osobnost/platon/', async ({ page }) => {
  await page.goto('/osobnost/sokrates/');
  await expect(jmeno(page, 'Platón').locator('a')).toHaveAttribute('href', '/osobnost/platon/');
});

test('žádný odkaz v Době a lidech nevede na stránku, na které je, a každý vede na profil nebo medailonek', async ({ page }) => {
  for (const profil of STRANKY) {
    await page.goto(profil);
    const hrefs = await page.locator('.doba a.jmeno-odkaz').evaluateAll((a) => a.map((x) => x.getAttribute('href')));
    expect(hrefs.length, profil).toBeGreaterThan(0);
    for (const h of hrefs) {
      expect(STRANKY, `${profil} → ${h}`).toContain(h);
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
