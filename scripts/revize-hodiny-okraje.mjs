// Revize hodiny-v1: okrajové průchody studenta (Kam dál z bloku, zavřená lišta, nová karta, návrat z deníku,
// zastavení, které v atlasu není, kotva uvnitř stránky). node scripts/revize-hodiny-okraje.mjs <sirka> <vyska>
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
const [w = '390', h = '844'] = process.argv.slice(2);
const VEN = 'Claude outputs/hodiny/revize';
const odkazy = JSON.parse(readFileSync(`${VEN}/odkazy.json`, 'utf8'));
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, reducedMotion: 'reduce' });
const page = await ctx.newPage();
const lista = () => page.evaluate(() => {
  const l = document.querySelector('[data-hodina-lista]');
  const vid = l && getComputedStyle(l).display !== 'none' && l.getBoundingClientRect().height > 0;
  return vid ? `${document.querySelector('[data-hl-nazev]')?.textContent} · ${document.querySelector('[data-hl-pocet]')?.textContent?.replace(/\u00a0/g, ' ')} | další→${document.querySelector('[data-hl-dalsi]')?.getAttribute('href')} | předchozí→${document.querySelector('[data-hl-predchozi]')?.getAttribute('href')}` : 'bez lišty';
});
const ok = async (popis) => { await page.waitForLoadState('load'); await page.waitForTimeout(700); console.log(popis, '|', page.url().replace(/^https?:\/\/[^/]+/, ''), '|', await lista()); };

// 1. Kam dál z bloku na zastavení 2.
await page.goto(odkazy.delfy);
await page.getByRole('link', { name: 'Začít hodinu' }).click();
await ok('zastavení 1');
await page.locator('[data-hl-dalsi]').click();
await ok('zastavení 2');
const v = page.locator('#cesta1-jak-zjistit');
await v.locator('input[type="radio"], [role="radio"]').first().click({ force: true });
await v.getByRole('button', { name: /můj tah/i }).click();
await page.waitForTimeout(300);
const dal = v.locator('[data-cast="dal"] a').first();
console.log('Kam dál:', await dal.textContent(), await dal.getAttribute('href'));
await dal.click();
await ok('po Kam dál');
// Lišta kroku cesty (Další krok) z odbočky dál, pak zpět prohlížečem.
await page.goBack();
await ok('zpět prohlížečem');
await page.goBack();
await ok('ještě zpět');
await page.goto(page.url().split('#')[0].replace(/\/\d\/$/, '/2/') + '#cesta1-jak-zjistit');
await ok('zastavení 2 znovu');
await page.locator('[data-hl-dalsi]').click();
await ok('Další z odbočky');
await page.locator('[data-hl-predchozi]').click();
await ok('Předchozí');
// 2. Nová karta s adresou zastavení.
const p2 = await ctx.newPage();
await p2.goto(page.url());
await p2.waitForTimeout(600);
console.log('nová karta |', await p2.evaluate(() => { const l = document.querySelector('[data-hodina-lista]'); return l && l.getBoundingClientRect().height > 0 ? 'lišta' : 'bez lišty'; }));
await p2.close();
// 3. Zavřít lištu, jít dál po atlasu, vrátit se přes deník.
await page.locator('[data-hl-zavrit]').click();
await ok('po Zavřít');
await page.goto(page.url().split('#')[0].replace(/\/2\/$/, '/4/'));
await ok('jiné zastavení po zavření');
await page.goto(page.url().replace(/^(https?:\/\/[^/]+).*/, '$1/denik/'));
await page.waitForTimeout(600);
await page.getByRole('link', { name: /Delfy: kdy mám/ }).first().click();
await ok('z deníku');
await page.getByRole('link', { name: 'Začít hodinu' }).click();
await ok('znovu Začít');
// 4. Zastavení, které v atlasu není, uprostřed hodiny.
const s = new URL(odkazy.delfy);
s.searchParams.set('z', s.searchParams.get('z').replace(',o:sokrates', ',k:zrusena-cesta/2,o:sokrates'));
await page.goto(s.toString());
await page.waitForTimeout(600);
console.log('stránka s neznámým:', (await page.locator('main').innerText()).match(/3[\s\S]{0,80}Tohle místo[^\n]*/)?.[0]?.replace(/\n/g, ' / '));
await page.getByRole('link', { name: 'Začít hodinu' }).click();
await ok('neznámé: 1');
await page.locator('[data-hl-dalsi]').click(); await ok('neznámé: 2');
await page.locator('[data-hl-dalsi]').click(); await ok('neznámé: další po 2');
await page.screenshot({ path: `${VEN}/o-nezname-${w}.png` });
await browser.close();
