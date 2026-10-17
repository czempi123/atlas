// Medailonky (větev medailonky, P9): stránka /osobnost/<id>/ generovaná z dat pro osobu s `medailonek: true`.
// Hlavička se jménem, roky a dvěma větami z dat, Doba a lidé, Kam dál s funkčními odkazy, Prameny;
// odkazy na medailonek přibudou samy v Době a lidech, v Lidech a směrech i v kartě Mapy a času.
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

type Osoba = { id: string; jmeno: string; kdo: string; proc: string; medailonek?: true; atribut?: { nazev: string } };
const lide = parse(readFileSync(join(import.meta.dirname, '../../src/data/lide.yaml'), 'utf8')) as Osoba[];
const MEDAILONKY = lide.filter((o) => o.medailonek);
const bezNbsp = (s: string) => s.replace(/\u00a0/g, ' ');

test('aspoň dva medailonky jsou v datech', () => expect(MEDAILONKY.length).toBeGreaterThanOrEqual(2));

for (const o of MEDAILONKY) {
  test(`medailonek ${o.jmeno}: hlavička, kdo a proč, Doba a lidé, Kam dál, Prameny`, async ({ page }) => {
    await page.goto(`/osobnost/${o.id}/`);
    await expect(page.locator('h1')).toHaveText(o.jmeno);
    const jadro = page.locator('.jadro');
    expect(bezNbsp(await jadro.locator('.jadro__kdo').innerText())).toBe(o.kdo);
    expect(bezNbsp(await jadro.locator('.jadro__proc').innerText())).toBe(o.proc);
    if (o.atribut) await expect(page.locator('.medailonek__deska')).toContainText(`Proč ${o.atribut.nazev}?`);
    await expect(page.locator('#doba-a-lide')).toBeVisible();
    await expect(page.locator('.doba .lide li').first()).toBeVisible();
    // Bez ručního úvodu nezůstane v Době a lidech prázdný odstavec.
    await expect(page.locator('.doba__uvod')).toHaveCount(0);
    await expect(page.locator('#prameny')).toHaveCount(1);
    // Kam dál: každá položka vede na existující stránku; Mapa a čas otevře tohoto člověka.
    const hrefs = await page.locator('.kamdal a').evaluateAll((a) => a.map((x) => x.getAttribute('href')!));
    expect(hrefs.length).toBeGreaterThanOrEqual(2);
    expect(hrefs.some((h) => h.startsWith('/mapa/') && h.includes(`osoba=${o.id}`))).toBe(true);
    for (const h of hrefs) {
      const odpoved = await page.request.get(h.split('#')[0]);
      expect(odpoved.status(), h).toBe(200);
    }
  });
}

test('medailonek na 390 px nepřetéká a kdo a proč jsou na první obrazovce', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const o of MEDAILONKY) {
    await page.goto(`/osobnost/${o.id}/`);
    const pretek = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(pretek, o.id).toBeLessThanOrEqual(0);
    const dole = await page.locator('.jadro__proc').evaluate((e) => e.getBoundingClientRect().bottom);
    expect(dole, o.id).toBeLessThanOrEqual(844);
  }
});

test('Lidé a směry vedou na medailonek', async ({ page }) => {
  await page.goto('/lide/');
  for (const o of MEDAILONKY) await expect(page.locator(`li#${o.id} a`)).toHaveAttribute('href', `/osobnost/${o.id}/`);
});

test('Mapa a čas: karta člověka s medailonkem otevře jeho stránku', async ({ page }) => {
  // Kleanthés žije v roce -280 (331 až 232 př. n. l.); první medailonek v datech být nemusí (Démokritos tehdy už nežil).
  await page.goto('/mapa/?rok=-280&osoba=kleanthes');
  await expect(page.getByRole('link', { name: 'Otevřít portrét' })).toHaveAttribute('href', '/osobnost/kleanthes/');
});
