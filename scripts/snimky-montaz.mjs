// Složí několik snímků (třeba bloků z test-results/snimky/) vedle sebe do jednoho JPEG.
// node scripts/snimky-montaz.mjs <vystup.jpg> <meritko> <soubor…>
import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
const [ven, meritkoS, ...soubory] = process.argv.slice(2);
const m = Number(meritkoS);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const obr = soubory.map((s) => `<img src="data:image/${s.endsWith('.png') ? 'png' : 'jpeg'};base64,${readFileSync(s).toString('base64')}" style="zoom:${m};display:block">`).join('');
await page.setContent(`<body style="margin:0;background:#888;display:flex;gap:8px;align-items:flex-start;width:max-content">${obr}</body>`);
await page.waitForTimeout(300);
// Rozměr skládanky, ne okna: úzká skládanka by jinak měla vpravo a dole šedý okraj.
const b = await page.evaluate(() => { const r = [...document.images].map((i) => i.getBoundingClientRect()); return { w: Math.ceil(Math.max(...r.map((x) => x.right))), h: Math.ceil(Math.max(...r.map((x) => x.bottom))) }; });
await page.setViewportSize({ width: Math.min(b.w, 4000), height: Math.min(b.h, 4000) });
writeFileSync(ven, await page.screenshot({ type: 'jpeg', quality: 62 }));
console.log(ven, b.w, b.h);
await browser.close();
