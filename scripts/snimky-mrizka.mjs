// Složí snímky do mřížky (po řádcích) do jednoho JPEG, s popiskem názvu souboru.
// node scripts/snimky-mrizka.mjs <vystup.jpg> <sloupcu> <sirka-bunky> <soubor…>
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
const [ven, sloupcuS, sirkaS, ...soubory] = process.argv.slice(2);
const sloupcu = Number(sloupcuS), sirka = Number(sirkaS);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: sloupcu * (sirka + 8), height: 800 } });
const obr = soubory.map((s) => `<figure style="margin:0;width:${sirka}px"><img src="data:image/${s.endsWith('.png') ? 'png' : 'jpeg'};base64,${readFileSync(s).toString('base64')}" style="width:100%;display:block"><figcaption style="font:12px sans-serif;color:#fff">${basename(s)}</figcaption></figure>`).join('');
await page.setContent(`<body style="margin:0;background:#555;display:grid;grid-template-columns:repeat(${sloupcu},${sirka}px);gap:8px;width:max-content">${obr}</body>`);
await page.waitForTimeout(300);
await page.screenshot({ path: ven, fullPage: true, type: 'jpeg', quality: 70 });
await browser.close();
