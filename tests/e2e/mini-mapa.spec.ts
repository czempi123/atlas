// Mini mapa v oddílu Doba a lidé: popisky míst se nesmějí překrývat ani vyjet z mapy,
// na telefonu (větší písmo) ani na notebooku.
import { test, expect } from '@playwright/test';

const PROFILY = ['sokrates', 'protagoras', 'epikuros', 'diogenes', 'epiktetos', 'marcus-aurelius'];

for (const sirka of [390, 1440]) {
  test(`mini mapa: popisky míst se nepřekrývají · ${sirka} px`, async ({ page }) => {
    await page.setViewportSize({ width: sirka, height: 900 });
    for (const id of PROFILY) {
      await page.goto(`/osobnost/${id}/`);
      await page.evaluate(() => document.fonts.ready);
      const mapa = page.locator('.minimapa svg');
      await mapa.scrollIntoViewIfNeeded();
      const nalezy = await mapa.evaluate((svg) => {
        const ramec = svg.getBoundingClientRect();
        const mista = [...svg.querySelectorAll('g.popisek')].map((g) => ({
          nazev: g.querySelector('.nazev')!.textContent ?? '',
          radky: [...g.querySelectorAll('.nazev, .role tspan')].map((t) => t.getBoundingClientRect()),
        }));
        const out: string[] = [];
        // Řádek písma má nad a pod znaky volné místo; počítá se překryv větší než 2 px.
        const prekryv = (a: DOMRect, b: DOMRect) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 4;
        for (let i = 0; i < mista.length; i++) {
          for (const r of mista[i].radky) if (r.left < ramec.left - 1 || r.right > ramec.right + 1 || r.top < ramec.top - 1 || r.bottom > ramec.bottom + 1) out.push(`${mista[i].nazev}: popisek mimo mapu`);
          for (let j = i + 1; j < mista.length; j++) {
            if (mista[i].radky.some((a) => mista[j].radky.some((b) => prekryv(a, b)))) out.push(`${mista[i].nazev} × ${mista[j].nazev}`);
          }
        }
        return out;
      });
      expect(nalezy, `${id} · ${sirka} px`).toEqual([]);
    }
  });
}

test('mini mapa Epikúra: popisek Kolofónu stojí nad bodem, ostatní vedle něj', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/osobnost/epikuros/');
  const mapa = page.locator('.minimapa svg');
  await expect(mapa.locator('g.popisek--nahoru')).toHaveCount(1);
  await expect(mapa.locator('g.popisek--nahoru .nazev')).toHaveText('Kolofón');
  // Čtečka dál slyší všechna místa i s rolemi.
  await expect(mapa).toHaveAttribute('aria-label', /Kolofón \(pobyt 321/);
});

test('mini mapa: přibližný rok z dat má „asi“, přesný ne', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/osobnost/epiktetos/');
  const epiktetos = page.locator('.minimapa svg');
  await expect(epiktetos.locator('g.popisek', { hasText: 'Níkopolis' })).toContainText('působení asi 93');
  await page.goto('/osobnost/marcus-aurelius/');
  const marcus = page.locator('.minimapa svg');
  await expect(marcus.locator('g.popisek', { hasText: 'Carnuntum' })).toContainText('válečné tažení asi 172');
  await expect(marcus.locator('g.popisek', { hasText: 'Řím' })).toContainText('narození 121');
  await expect(marcus.locator('g.popisek', { hasText: 'Řím' })).not.toContainText('asi');
});

// Mini osa přes přelom letopočtu (Seneca u Epiktéta): značky vlevo od přelomu nesou „př. n. l.“,
// jinak by na ose stálo dvakrát „50“. Značky se na telefonu nesmějí překrývat.
test('mini osa: roky před přelomem letopočtu mají „př. n. l.“ a značky se nepřekrývají', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/osobnost/epiktetos/');
  await page.evaluate(() => document.fonts.ready);
  const znacky = page.locator('.doba__osa .osa__znacka');
  await expect(znacky.first()).toHaveText('50 př. n. l.');
  await expect(znacky.nth(2)).toHaveText('50');
  const okraje = await znacky.evaluateAll((z) => z.filter((e) => e.textContent).map((e) => e.getBoundingClientRect()).map((r) => [r.left, r.right]));
  for (let i = 1; i < okraje.length; i++) expect(okraje[i][0], `značka ${i}`).toBeGreaterThan(okraje[i - 1][1]);
  // Osa jen z roků před naším letopočtem zůstává bez přípony; říká to popisek pod ní.
  await page.goto('/osobnost/epikuros/');
  await expect(page.locator('.doba__osa .osa__znacka').first()).toHaveText('450');
  await expect(page.locator('.doba__osa figcaption')).toContainText('Letopočty před naším letopočtem');
});
