// Revize celku 9 (P10): zastavení cesty 34 na plátně v podobách z hodiny-v1 (krok, otevřená otázka, jen otázka
// a možnosti, jen kresba). Promítne hodinu z odkazu, projde zastavení šipkou a každé vyfotí (1440 × 900, světlý).
// Předpoklad: npx astro preview --port 4323. node scripts/revize-celek9-platno.mjs
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';
const VEN = 'Claude outputs/celek9-revize/platno';
mkdirSync(VEN, { recursive: true });
const Z = [
  'k:kam-mi-mizi-cas/3',
  'b:cesta34-dost-casu~o',
  'b:cesta34-kdo-ji-vzal~m',
  'b:presypaci-hodiny~k',
  'b:cesta34-pohreb~m',
  'b:cesta34-cija-hodina~m',
  'b:cesta34-odejit-spor~o',
  'b:cesta34-sourozenci~o',
];
const adresa = `/hodina/?v=1&n=${encodeURIComponent('Kam mi mizí čas')}&z=${Z.join(',')}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const chyby = [];
page.on('console', (m) => m.type() === 'error' && chyby.push(m.text()));
const pocet = async () => ((await page.locator('[data-hl-pocet]').textContent()) ?? '').replace(/\u00a0/g, ' ');
const pripraveno = () => page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno'));
const hydratovano = () =>
  page.waitForFunction(() => [...document.querySelectorAll('astro-island')].every((x) => !x.hasAttribute('ssr') || !x.getClientRects().length));

await page.goto(ZAKLAD + adresa);
await page.evaluate(() => document.fonts.ready);
await page.getByRole('button', { name: 'Promítat hodinu' }).click();
await pripraveno();
for (let n = 1; n <= Z.length; n++) {
  // Šipkou vpřed, dokud lišta neukáže n-té zastavení (každý krok je nová stránka).
  for (let i = 0; i < 6 && !(await pocet().catch(() => '')).startsWith(`${n} z`); i++) {
    await page.evaluate(() => document.activeElement?.blur()).catch(() => {});
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1200);
    await page.waitForLoadState('load');
    await pripraveno();
  }
  await page.evaluate(() => document.fonts.ready);
  await hydratovano();
  await page.waitForTimeout(300);
  const p = await pocet();
  await page.screenshot({ path: `${VEN}/${String(n).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 70 });
  const viditelne = await page.evaluate(() => {
    const vys = [];
    for (const el of document.querySelectorAll('[data-cast]')) {
      const r = el.getBoundingClientRect();
      vys.push(`${el.getAttribute('data-cast')}:${r.width > 1 && r.height > 1 && getComputedStyle(el).visibility !== 'hidden' ? 'ano' : 'ne'}`);
    }
    return vys.join(' ');
  });
  console.log(`${n} (${p}) ${Z[n - 1]} → ${viditelne}`);
}
console.log('Chyby v konzoli:', chyby.length ? chyby : 'žádné');
await browser.close();
