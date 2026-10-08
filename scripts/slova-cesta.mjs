// Čas cesty na štítku (`minut` v přehledu cesty): spočítá slova, která student opravdu přečte, a přidá ovládání.
// Projde kroky 1…n, v každém bloku odpoví (jako scripts/snimky-cesta.mjs) a sečte slova viditelného textu kroku:
// text, citáty, scény a možnosti bloků, zpětnou vazbu k jedné odpovědi, text pod kresbou. Zavřené „Co kdybys zvolil jinak?“
// se nepočítá. Čtení 150 slov za minutu; ovládání: 40 s na blok s odpovědí, 60 s na kresbu, 90 s na závěrečné pravidlo.
// node scripts/slova-cesta.mjs <slug>      (ZAKLAD: běžící web, výchozí náhled sestaveného webu na portu 4323)
import { chromium } from '@playwright/test';

const [slug] = process.argv.slice(2);
const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';

async function projed(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => !document.querySelector('astro-island[ssr]'));
}

async function odpovez(blok) {
  const tl = (nazev) => blok.getByRole('button', { name: nazev });
  if (await tl('Tohle je můj tah').count()) {
    await blok.locator('.karta').nth(1).click();
    await tl('Tohle je můj tah').click();
  } else if (await tl('Mám roztříděno').count()) {
    const sem = blok.getByRole('button', { name: /^Dát sem kartu/ });
    for (let i = 0; (await sem.count()) > 0 && i < 20; i++) await sem.nth(i % 3).click({ force: true });
    await tl('Mám roztříděno').click();
  } else if (await tl('Tady stojím').count()) {
    await blok.getByRole('radio').nth(1).check({ force: true });
    await tl('Tady stojím').click();
    await blok.locator('.skala').getByRole('radio').nth(3).check({ force: true });
    await tl('Zapsat konečnou polohu').click();
  } else if (await tl('Rozhodnuto').count()) {
    await blok.getByRole('radio').first().check({ force: true });
    await tl('Rozhodnuto').click();
    await blok.locator('.cip').first().click();
    await blok.locator('.zmenena').getByRole('radio').nth(1).check({ force: true });
    await blok.locator('.zmenena .blok__tl--hlavni').click();
  } else {
    await blok.getByRole('textbox').first().fill('Zkouším to po svém.');
    await blok.locator('.blok__tl--hlavni').first().click();
  }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' });
let slov = 0, bloku = 0, kreseb = 0, kroku = 0;
for (let n = 1; n < 20; n++) {
  const odp = await page.goto(`${ZAKLAD}/cesta/${slug}/${n}/`);
  if (!odp || odp.status() !== 200) break;
  kroku = n;
  await projed(page);
  // Poslední krok má místo bloků závěrečné pravidlo (jeho čas je v ovládání).
  const pravidlo = page.getByRole('textbox', { name: /Napiš svoje pravidlo/ });
  const bloky = page.locator('.krok__obsah section.blok');
  const b = (await pravidlo.count()) ? 0 : await bloky.count();
  if (await pravidlo.count()) await pravidlo.fill('Moje pravidlo po cestě.');
  for (let i = 0; i < b; i++) await odpovez(bloky.nth(i));
  await page.waitForTimeout(300);
  const k = await page.locator('.krok__obsah figure.kresba').count();
  const text = await page.locator('main').innerText();
  const s = text.split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;
  console.log(`krok ${n}: ${s} slov, bloků ${b}, kreseb ${k}`);
  slov += s; bloku += b; kreseb += k;
}
await browser.close();
const cteni = slov / 150;
const ovladani = (bloku * 40 + kreseb * 60 + 90) / 60;
console.log(`${slug}: ${kroku} kroků, ${slov} slov = ${cteni.toFixed(1)} min čtení + ${ovladani.toFixed(1)} min ovládání = ${(cteni + ovladani).toFixed(1)} min`);
