// Revize hodiny-v1: kde student přistane na zastavení s kotvou, když jde lištou Další (telefon i notebook).
// node scripts/revize-hodiny-kotva.mjs <sirka> <vyska> <mobil 0|1> <hodina delfy|smrt> <cisla zastaveni, třeba 3,6>
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
const [w, h, mob, klic, cislaS] = process.argv.slice(2);
const VEN = 'Claude outputs/hodiny/revize';
const odkazy = JSON.parse(readFileSync(`${VEN}/odkazy.json`, 'utf8'));
const cisla = cislaS.split(',').map(Number);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, isMobile: mob === '1', hasTouch: mob === '1' });
const page = await ctx.newPage();
await page.goto(odkazy[klic]);
await page.getByRole('link', { name: 'Začít hodinu' }).click();
const mer = () => page.evaluate(() => {
  const id = decodeURIComponent(location.hash.slice(1));
  const el = id ? document.getElementById(id) : null;
  const lista = document.querySelector('[data-hodina-lista]')?.getBoundingClientRect().bottom ?? 0;
  const obsah = document.querySelector('.obsah-lista');
  const obsahDole = obsah && getComputedStyle(obsah).display !== 'none' ? obsah.getBoundingClientRect().bottom : null;
  return { url: location.pathname + location.hash, y: Math.round(scrollY), kotvaTop: el ? Math.round(el.getBoundingClientRect().top) : null, lista: Math.round(lista), obsahDole: obsahDole && Math.round(obsahDole), cteny: document.querySelector('.obsah-lista [aria-current], [data-obsah-tlacitko]')?.textContent?.trim().slice(0, 60) };
});
for (let n = 1; n <= 8; n++) {
  await page.waitForLoadState('load');
  if (cisla.includes(n)) {
    for (const t of [300, 1500, 4000]) {
      await page.waitForTimeout(t === 300 ? 300 : t - 300);
      console.log(n, `po ${t} ms`, JSON.stringify(await mer()));
    }
    await page.screenshot({ path: `${VEN}/k-${klic}-${w}-${n}.png` });
  }
  const d = page.locator('[data-hl-dalsi]');
  if ((await d.getAttribute('aria-disabled')) === 'true') break;
  await d.click();
}
await browser.close();
