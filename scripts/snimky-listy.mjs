// Snímky celé stránky pro kontrolu a pro autora: stránku rozloží do sloupců na pár „listů“ (JPEG),
// takže se dá přečíst po obrazovkách v několika obrázcích. Dlouhé stránky fotí po částech.
// node scripts/snimky-listy.mjs <cesta> <nazev> <sirka> <light|dark> [sloupcu] [vyskaSloupce] [meritko]
//   telefon:  node scripts/snimky-listy.mjs /osobnost/platon/ platon 390 light 4 2000 1
//   notebook: node scripts/snimky-listy.mjs /osobnost/platon/ platon 1440 dark 2 3200 0.55
// Proměnné: ZAKLAD (běžící web; výchozí náhled sestaveného webu: npx astro preview --port 4323),
// OD (od které výšky stránky), VEN (složka pro výstup; výchozí „Claude outputs/snimky“, mimo git).
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';

const [cesta, nazev, sirkaS, rezim, sloupcuS = '4', vyskaS = '1500', meritkoS = '1'] = process.argv.slice(2);
const sirka = Number(sirkaS), sloupcu = Number(sloupcuS), vyska = Number(vyskaS), meritko = Number(meritkoS);
const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';
const VEN = process.env.VEN ?? 'Claude outputs/snimky';
mkdirSync(VEN, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: sirka, height: 900 }, colorScheme: rezim, reducedMotion: 'reduce' });
await page.goto(ZAKLAD + cesta);
await page.evaluate(() => document.fonts.ready);
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(400);
// Pevné lišty by na výřezech visely uprostřed stránky.
await page.addStyleTag({ content: 'nav.lista { position: static !important; } header.hlavicka { position: static !important; } .obsah-lista { display: none !important; }' });
const celkem = await page.evaluate(() => document.documentElement.scrollHeight);
const naList = sloupcu * vyska;
const od = Number(process.env.OD ?? 0);
const listu = Math.ceil((celkem - od) / naList);
const p2 = await browser.newPage({ viewport: { width: Math.round(sloupcu * sirka * meritko) + (sloupcu - 1) * 8, height: Math.round(vyska * meritko) } });
for (let l = 0; l < listu; l++) {
  const sl = [];
  for (let i = 0; i < sloupcu; i++) {
    const y = od + l * naList + i * vyska;
    if (y >= celkem) { sl.push(`<div style="width:${sirka * meritko}px;flex:none"></div>`); continue; }
    const h = Math.min(vyska, celkem - y);
    const png = await page.screenshot({ fullPage: true, clip: { x: 0, y, width: sirka, height: h } });
    sl.push(`<div style="width:${sirka * meritko}px;height:${vyska * meritko}px;overflow:hidden;flex:none"><img src="data:image/png;base64,${png.toString('base64')}" style="display:block;width:${sirka * meritko}px"></div>`);
  }
  await p2.setContent(`<body style="margin:0;background:#888;display:flex;gap:8px">${sl.join('')}</body>`);
  await p2.waitForTimeout(150);
  writeFileSync(`${VEN}/${nazev}-${sirka}-${rezim}-${l + 1}.jpg`, await p2.screenshot({ type: 'jpeg', quality: 62 }));
}
console.log(`${nazev} ${sirka} ${rezim}: výška ${celkem} px, listů ${listu}`);
await browser.close();
