// Snímky Mapy a času s vybranou osobou (karta, kamera, místa) pro revizi medailonků.
// node scripts/revize-mapa.mjs "rok:osoba" … ; náhled: npx astro preview --port 4323
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';
const VEN = process.env.VEN ?? 'Claude outputs/medailonky/revize';
mkdirSync(VEN, { recursive: true });
const browser = await chromium.launch();
for (const arg of process.argv.slice(2)) {
  const [rok, osoba] = arg.split(':');
  for (const sirka of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width: sirka, height: sirka < 700 ? 844 : 900 }, reducedMotion: 'reduce' });
    const chyby = [];
    page.on('pageerror', (e) => chyby.push(String(e)));
    page.on('console', (m) => m.type() === 'error' && chyby.push(m.text()));
    await page.goto(`${ZAKLAD}/mapa/?rok=${rok}&osoba=${osoba}`);
    await page.waitForTimeout(1500);
    const tlacitko = await page.locator('a.tlacitko--hlavni').first().textContent().catch(() => '—');
    await page.screenshot({ path: `${VEN}/mapa-${osoba}-${sirka}.png` });
    console.log(`${osoba} ${rok} ${sirka}: tlačítko „${tlacitko?.trim()}“${chyby.length ? ' · chyby: ' + chyby.join('; ') : ''}`);
    await page.close();
  }
}
await browser.close();
