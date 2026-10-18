// Revize větve hodiny-v1 (krok R): průchody očima učitele a studenta na sestaveném webu.
// node scripts/revize-hodiny.mjs <faze>   faze: ucitel | platno | cisto | telefony | student
// Předpoklad: npx astro preview --port 4323 (ZAKLAD). Výstup: Claude outputs/hodiny/revize/ (snímky, zaznam-<faze>.json).
// Fáze ucitel uloží odkazy obou hodin do odkazy.json; ostatní fáze je odtud čtou.
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';

const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';
const VEN = 'Claude outputs/hodiny/revize';
mkdirSync(VEN, { recursive: true });
const faze = process.argv[2] ?? 'ucitel';
const zaznam = [];
const log = (...a) => { const t = a.map((x) => (typeof x === 'string' ? x : JSON.stringify(x))).join(' '); zaznam.push(t); console.log(t); };

/** Dvě hodiny: celek 1 a celek 6. Každé zastavení: [hledání, přesný název tlačítka, podoba v selectu nebo null, poznámka]. */
const HODINY = {
  delfy: {
    nazev: 'Delfy: kdy mám dobrý důvod věřit',
    poznamka: 'TAJNE-UCITEL-A Začít hlasováním rukou.',
    zastaveni: [
      ['odpoved z delf', 'Odpověď z Delf', null, 'TAJNE-A1 přečíst nahlas'],
      ['co udelas abys zjistil', 'Co uděláš, abys zjistil, jestli má věštírna pravdu?', 'Otevřená otázka', 'TAJNE-A2 ruce nahoru'],
      ['ustup od delia', 'Ústup od Délia', null, ''],
      ['podle ceho to poznas', 'Jak poznáš, že něčemu opravdu rozumíš, a ne jen myslíš, že rozumíš?', 'Jen otázka a odkrytí', ''],
      ['je pravda to co se ti jevi', 'Je pravda to, co se ti jeví?', 'Jen otázka a možnosti', 'TAJNE-A5 rozdělit třídu'],
      ['kdo zil driv protagoras', 'Kdo žil dřív: Prótagorás, nebo Sókratés?', 'Otevřená otázka', ''],
      ['stejne saty', 'Stejné šaty, jiné světlo', 'Jen kresba', ''],
      ['protagoras', 'Prótagorás', null, ''], // hlas na stránce otázky 7 (vybírá se podle pořadí níž)
    ],
  },
  smrt: {
    nazev: 'Proč se bát smrti',
    poznamka: 'TAJNE-UCITEL-B Pozor na Kubu, letos mu zemřel děda.',
    zastaveni: [
      ['stastny den', 'Šťastný den.', null, ''],
      ['na co ten kdo to rika', 'Na co ten, kdo to říká, myslí?', 'Jen otázka a možnosti', 'TAJNE-B2 karty na tabuli'],
      ['zrcadlo casu', 'Zrcadlo času', 'Jen kresba', ''],
      ['skala', 'Skála', null, ''],
      ['je duvod bat se toho', 'Je důvod bát se toho, že nebudeme?', 'Otevřená otázka', ''],
      ['sokrates a seneca', 'Jak daleko od sebe žili Sókratés a Seneca?', 'Jen otázka a možnosti', ''],
      ['seneca', 'Seneca', null, ''], // hlas na otázce 3
      ['tri otazky vecer', 'Zkus to žít: Tři otázky večer', null, 'TAJNE-B8 domácí úkol'],
    ],
  },
};
// Hlasy mají stejný název jako profil; vybírám podle skupiny Velké otázky (stránka otázky).
const HLAS = { delfy: 'Jak poznám, co je pravda?', smrt: 'Má život smysl?' };

async function cekej(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.querySelectorAll('astro-island[ssr]')].every((x) => !x.getClientRects().length || !x.hasAttribute('ssr')), null, { timeout: 8000 }).catch(() => {});
}

async function slozit(page, klic) {
  const h = HODINY[klic];
  await page.goto(ZAKLAD + '/hodina/nova/');
  await cekej(page);
  const hledat = page.locator('#vyber-hledat');
  for (const [dotaz, nazev, , ] of h.zastaveni) {
    await hledat.fill(dotaz);
    await page.waitForTimeout(150);
    let tl = page.locator(`button[aria-label="Přidat do hodiny: ${nazev}"]`);
    if (nazev === 'Prótagorás' || nazev === 'Seneca') {
      const sk = page.locator('details.skupina').filter({ has: page.locator('.skupina__nazev', { hasText: HLAS[klic] }) });
      await sk.evaluate((d) => { d.open = true; });
      tl = sk.locator(`button[aria-label="Přidat do hodiny: ${nazev}"]`);
    }
    const n = await tl.count();
    if (!n) { log(`[${klic}] NENALEZENO: „${dotaz}“ → ${nazev}; výsledek:`, await page.locator('.vysledek').textContent()); continue; }
    if (n > 1) log(`[${klic}] víc tlačítek (${n}) pro ${nazev}`);
    await tl.first().click();
  }
  await hledat.fill('');
  await page.locator('#hodina-nazev').fill(h.nazev);
  await page.locator('#hodina-poznamka').fill(h.poznamka);
  const li = page.locator('.zvolena > li');
  log(`[${klic}] zastavení v hodině: ${await li.count()}`);
  for (let i = 0; i < h.zastaveni.length; i++) {
    const [, , podoba, pozn] = h.zastaveni[i];
    if (pozn) await li.nth(i).locator('textarea, input[type="text"]').first().fill(pozn);
    if (podoba) {
      const sel = li.nth(i).locator('select');
      if (!(await sel.count())) { log(`[${klic}] zastavení ${i + 1} nemá výběr podoby`); continue; }
      const moznosti = await sel.locator('option').allTextContents();
      log(`[${klic}] ${i + 1} podoby:`, moznosti);
      await sel.selectOption({ label: podoba });
      log(`[${klic}] stav po výběru:`, (await page.getByRole('status').allTextContents()).join(' | '));
    }
  }
  // Štítek a „kde stojí“ u každého zastavení.
  log(`[${klic}] hodina:`, await li.evaluateAll((els) => els.map((e) => e.innerText.replace(/\s+/g, ' ').slice(0, 160))));
  await page.getByRole('button', { name: 'Uložit', exact: true }).click();
  await page.waitForTimeout(300);
  log(`[${klic}] po uložení:`, (await page.getByRole('status').allTextContents()).join(' | '), page.url());
  const odkaz = await page.locator('#hodina-odkaz').inputValue();
  log(`[${klic}] odkaz:`, odkaz);
  // Stáhnout soubor.
  const [stazeni] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Stáhnout soubor' }).click()]);
  const soubor = `${VEN}/${stazeni.suggestedFilename()}`;
  await stazeni.saveAs(soubor);
  log(`[${klic}] soubor: ${stazeni.suggestedFilename()}`, readFileSync(soubor, 'utf8').slice(0, 400));
  return { odkaz, soubor };
}

const browser = await chromium.launch();

if (faze === 'ucitel') {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(ZAKLAD + '/hodina/nova/');
  await cekej(page);
  await page.screenshot({ path: `${VEN}/u-skladatel-prazdny-1440.png` });
  const vysledek = {};
  for (const k of Object.keys(HODINY)) vysledek[k] = await slozit(page, k);
  await page.screenshot({ path: `${VEN}/u-skladatel-smrt-1440.png` });
  await page.locator('.zvolena').screenshot({ path: `${VEN}/u-skladatel-smrt-hodina.png` });
  // Nahrát soubor do prázdného skladatele.
  const p2 = await ctx.newPage();
  await p2.goto(ZAKLAD + '/hodina/nova/');
  await cekej(p2);
  await p2.locator('input[type="file"]').setInputFiles(vysledek.delfy.soubor);
  await p2.waitForTimeout(400);
  log('[nahrát] stav:', (await p2.getByRole('status').allTextContents()).join(' | '), '| název:', await p2.locator('#hodina-nazev').inputValue(),
    '| zastavení:', await p2.locator('.zvolena > li').count(), '| podoby:', await p2.locator('.zvolena select').evaluateAll((s) => s.map((x) => x.value)));
  await p2.screenshot({ path: `${VEN}/u-nahrany-1440.png`, fullPage: false });
  // Moje hodiny v deníku.
  await p2.goto(ZAKLAD + '/denik/');
  await cekej(p2);
  const mh = p2.locator('section, div').filter({ hasText: 'Moje hodiny' }).last();
  log('[deník] Moje hodiny:', (await p2.locator('main').innerText()).match(/Moje hodiny[\s\S]{0,500}/)?.[0]);
  // Tisk ve světlém i tmavém režimu.
  for (const rezim of ['light', 'dark']) {
    const p3 = await browser.newPage({ viewport: { width: 900, height: 1200 }, colorScheme: rezim });
    await p3.goto(ZAKLAD + '/');
    await p3.evaluate((x) => localStorage.setItem('atlas-hodiny', x), await page.evaluate(() => localStorage.getItem('atlas-hodiny')));
    const id = new URL(page.url()).searchParams.get('hodina');
    await p3.goto(ZAKLAD + '/hodina/nova/?hodina=' + id);
    await cekej(p3);
    await p3.emulateMedia({ media: 'print', colorScheme: rezim });
    await p3.screenshot({ path: `${VEN}/u-tisk-${rezim}.png`, fullPage: true });
    log(`[tisk ${rezim}]`, (await p3.locator('body').innerText()).slice(0, 1600));
    await p3.pdf({ path: `${VEN}/u-tisk-${rezim}.pdf` }).catch((e) => log('pdf', e.message));
    await p3.close();
  }
  writeFileSync(`${VEN}/odkazy.json`, JSON.stringify({ delfy: vysledek.delfy.odkaz, smrt: vysledek.smrt.odkaz, ulozeno: await page.evaluate(() => localStorage.getItem('atlas-hodiny')) }, null, 1));
  // 390: skladatel s hodinou.
  const tel = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await tel.goto(ZAKLAD + '/');
  await tel.evaluate((x) => localStorage.setItem('atlas-hodiny', x), await page.evaluate(() => localStorage.getItem('atlas-hodiny')));
  await tel.goto(page.url());
  await cekej(tel);
  await tel.screenshot({ path: `${VEN}/u-skladatel-390-nahore.png` });
  await tel.locator('#hodina').scrollIntoViewIfNeeded();
  await tel.screenshot({ path: `${VEN}/u-skladatel-390-hodina.png` });
}

const odkazy = existsSync(`${VEN}/odkazy.json`) ? JSON.parse(readFileSync(`${VEN}/odkazy.json`, 'utf8')) : null;

/** Stav promítání pro záznam. */
const stav = (page) => page.evaluate(() => ({
  url: location.pathname + location.hash, y: Math.round(scrollY), vyska: innerHeight, max: document.documentElement.scrollHeight - innerHeight,
  pocet: document.querySelector('[data-hl-pocet]')?.textContent?.replace(/\u00a0/g, ' '),
  podoba: document.querySelector('[data-podoba]')?.getAttribute('data-podoba') ?? null,
  lista: Math.round(document.querySelector('[data-hodina-lista]')?.getBoundingClientRect().bottom ?? 0),
}));

async function promitejKlavesami(page, nazev, w, h) {
  // Vpřed: šipka vpravo, PageDown a mezerník na střídačku; zapisuje překryv mezi obrazovkami téže stránky.
  const klavesy = ['ArrowRight', 'PageDown', ' '];
  let pred = await stav(page);
  log(`[${nazev} ${w}] start`, pred);
  await page.screenshot({ path: `${VEN}/p-${nazev}-${w}-00.jpg`, quality: 55 });
  for (let i = 1; i < 60; i++) {
    const k = klavesy[i % 3];
    await page.keyboard.press(k);
    await page.waitForTimeout(450);
    await page.waitForLoadState('load');
    await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno')).catch(() => {});
    await page.waitForTimeout(250);
    const ted = await stav(page);
    if (JSON.stringify(ted) === JSON.stringify(pred)) { log(`[${nazev} ${w}] konec vpřed po ${i - 1} stiscích`, ted); break; }
    if (ted.url.split('#')[0] === pred.url.split('#')[0] && ted.pocet === pred.pocet) {
      const prekryv = pred.y + pred.vyska - (ted.y + ted.lista);
      log(`[${nazev} ${w}] ${k === ' ' ? 'mezerník' : k} posun ${pred.y}→${ted.y} překryv ${prekryv}px ${prekryv < 20 ? 'MÁLO' : ''}`);
    } else log(`[${nazev} ${w}] ${k === ' ' ? 'mezerník' : k} → ${ted.pocet} ${ted.url} y=${ted.y}/${ted.max} podoba=${ted.podoba}`);
    await page.screenshot({ path: `${VEN}/p-${nazev}-${w}-${String(i).padStart(2, '0')}.jpg`, quality: 55 });
    pred = ted;
  }
  // Zpět: šipka vlevo a PageUp až na začátek.
  for (let i = 1; i < 60; i++) {
    await page.keyboard.press(i % 2 ? 'ArrowLeft' : 'PageUp');
    await page.waitForTimeout(450);
    await page.waitForLoadState('load');
    await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno')).catch(() => {});
    await page.waitForTimeout(250);
    const ted = await stav(page);
    if (JSON.stringify(ted) === JSON.stringify(pred)) { log(`[${nazev} ${w}] konec vzad po ${i - 1} stiscích`, ted); break; }
    if (ted.pocet !== pred.pocet) log(`[${nazev} ${w}] zpět → ${ted.pocet} ${ted.url} y=${ted.y}/${ted.max}`);
    pred = ted;
  }
}

if (faze === 'platno') {
  for (const [w, h] of [[1280, 720], [1920, 1080]]) {
    for (const k of ['delfy', 'smrt']) {
      const page = await browser.newPage({ viewport: { width: w, height: h } });
      await page.goto(odkazy[k]);
      await cekej(page);
      if (w === 1280) await page.screenshot({ path: `${VEN}/s-hodina-${k}-1280.png`, fullPage: true });
      await page.keyboard.press('Tab');
      await page.getByRole('button', { name: 'Promítat hodinu' }).focus();
      await page.keyboard.press('Enter');
      await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno'));
      await cekej(page);
      await page.keyboard.press('f');
      await page.waitForTimeout(300);
      log(`[${k} ${w}] celá obrazovka po F:`, await page.evaluate(() => !!document.fullscreenElement), await page.locator('[data-hl-obrazovka]').getAttribute('aria-pressed'));
      // Písmo na plátně.
      log(`[${k} ${w}] písmo:`, await page.evaluate(() => {
        const vel = (s) => { const e = document.querySelector(s); return e ? getComputedStyle(e).fontSize : null; };
        return { p: vel('main p'), h1: vel('main h1'), h2: vel('main h2'), lista: vel('.hodina-lista__titulek'), btn: vel('.hl-tl') };
      }));
      await promitejKlavesami(page, k, w, h);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(800);
      log(`[${k} ${w}] po Esc:`, await stav(page), 'promítání:', await page.evaluate(() => document.documentElement.classList.contains('promitani')), 'fokus:', await page.evaluate(() => document.activeElement?.textContent?.trim()));
      await page.close();
    }
  }
}

if (faze === 'cisto') {
  // Plný deník: Volba s důvodem, Odkryj odkryté, Tvůj první názor na otázce 7, Roztřiď v cestě 8.
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.goto(ZAKLAD + '/cesta/kdy-mam-dobry-duvod-verit/2/');
  await cekej(page);
  const volba = page.locator('#cesta1-jak-zjistit');
  await volba.scrollIntoViewIfNeeded(); await cekej(page);
  await volba.locator('[role="radio"], input[type="radio"]').first().click({ force: true });
  await volba.locator('textarea').first().fill('STUDENT-DUVOD-1');
  await volba.getByRole('button', { name: /můj tah/i }).click();
  await page.goto(ZAKLAD + '/cesta/kdy-mam-dobry-duvod-verit/4/');
  await cekej(page);
  const odk = page.locator('#cesta1-podle-ceho-poznas');
  await odk.scrollIntoViewIfNeeded(); await cekej(page);
  await odk.locator('textarea').first().fill('STUDENT-ODKRYJ-2');
  await odk.getByRole('button', { name: /Porovnat|Odkr/ }).first().click();
  await page.goto(ZAKLAD + '/otazka/jak-poznam-pravdu/');
  await cekej(page);
  const nazor = page.locator('textarea').first();
  await nazor.fill('STUDENT-NAZOR-3');
  await page.getByRole('button', { name: /Uložit|Pokračovat|Ukázat/ }).first().click().catch((e) => log('první názor', e.message));
  const pred = await page.evaluate(() => localStorage.getItem('atlas-denik'));
  log('[čisto] deník před:', pred.length, 'znaků', ['STUDENT-DUVOD-1', 'STUDENT-ODKRYJ-2', 'STUDENT-NAZOR-3'].map((m) => pred.includes(m)));
  // Promítat celou hodinu z odkazu a hledat stopy deníku na plátně.
  await page.goto(odkazy.delfy);
  await cekej(page);
  const predStrankou = pred;
  await page.getByRole('button', { name: 'Promítat hodinu' }).click();
  await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno'));
  for (let n = 0; n < 8; n++) {
    await cekej(page);
    await page.waitForTimeout(300);
    const text = await page.locator('body').innerText();
    const stopy = ['STUDENT-DUVOD-1', 'STUDENT-ODKRYJ-2', 'STUDENT-NAZOR-3', 'Tvůj tah', 'uložený v deníku'].filter((m) => text.includes(m));
    const s = await stav(page);
    log(`[čisto] ${s.pocet} ${s.url} stopy:`, stopy);
    if (n === 1) {
      // Volba třídy na otevřené otázce: ukázat možnosti, zvolit kartu B a potvrdit.
      await page.keyboard.press('m');
      await page.waitForTimeout(200);
      const v = page.locator('#cesta1-jak-zjistit');
      await v.locator('[role="radio"], input[type="radio"]').nth(1).click({ force: true });
      await v.getByRole('button', { name: /můj tah/i }).click().catch((e) => log('tah', e.message));
      await page.screenshot({ path: `${VEN}/c-volba-tridy.jpg`, quality: 60 });
    }
    // Další zastavení přes tlačítko Další v liště.
    const dalsi = page.locator('[data-hl-dalsi]');
    if ((await dalsi.getAttribute('aria-disabled')) === 'true') break;
    await dalsi.click();
    await page.waitForLoadState('load');
    await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno')).catch(() => {});
  }
  // Zpět na Volbu: drží volbu třídy?
  for (let i = 0; i < 7; i++) {
    const s = await stav(page);
    if (s.pocet?.startsWith('2 ')) break;
    await page.locator('[data-hl-predchozi]').click();
    await page.waitForLoadState('load');
    await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno')).catch(() => {});
  }
  await cekej(page);
  await page.keyboard.press('m');
  await page.waitForTimeout(300);
  log('[čisto] po návratu na Volbu:', await stav(page), 'vybraná karta:', await page.locator('#cesta1-jak-zjistit [aria-checked="true"], #cesta1-jak-zjistit input:checked').count(),
    'tah vidět:', (await page.locator('#cesta1-jak-zjistit').innerText()).includes('Tvůj tah'), 'možnosti tlačítko:', await page.locator('[data-hl-moznosti]').getAttribute('aria-pressed'));
  await page.screenshot({ path: `${VEN}/c-volba-po-navratu.jpg`, quality: 60 });
  await page.keyboard.press('Escape');
  await page.waitForLoadState('load'); await page.waitForTimeout(800);
  const po = await page.evaluate(() => localStorage.getItem('atlas-denik'));
  const rozdil = (a, b) => { const A = JSON.parse(a), B = JSON.parse(b); return Object.keys({ ...A, ...B }).filter((k) => JSON.stringify(A[k]) !== JSON.stringify(B[k])).map((k) => [k, JSON.stringify(A[k])?.slice(0, 200), JSON.stringify(B[k])?.slice(0, 300)]); };
  log('[čisto] po Esc rozdíl deníku:', rozdil(predStrankou, po));
  log('[čisto] po Esc na stránce:', await stav(page), 'Volba studenta zpět:', (await page.locator('body').innerText()).includes('STUDENT-DUVOD-1'));
  // Druhé promítání ze skladatele, konec tlačítkem Ukončit promítání.
  const pred2 = po;
  await page.evaluate((x) => localStorage.setItem('atlas-hodiny', x), odkazy.ulozeno);
  const id = JSON.parse(odkazy.ulozeno).hodiny.find((h) => h.nazev.startsWith('Delfy')).id;
  await page.goto(ZAKLAD + '/hodina/nova/?hodina=' + id);
  await cekej(page);
  await page.getByRole('button', { name: 'Promítat hodinu' }).click();
  await page.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno'));
  await page.locator('[data-hl-dalsi]').click();
  await page.waitForLoadState('load'); await page.waitForTimeout(500); await cekej(page);
  await page.keyboard.press('m'); await page.waitForTimeout(200);
  log('[čisto] 2. promítání, Volba čistá:', !(await page.locator('#cesta1-jak-zjistit').innerText()).includes('Tvůj tah'));
  await page.locator('[data-hl-ukoncit]').click();
  await page.waitForLoadState('load'); await page.waitForTimeout(800);
  log('[čisto] po Ukončit rozdíl:', rozdil(pred2, await page.evaluate(() => localStorage.getItem('atlas-denik'))), 'fokus:', await page.evaluate(() => document.activeElement?.textContent?.trim()));
}

if (faze === 'telefony') {
  const ucitel = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await ucitel.goto(odkazy.delfy);
  await cekej(ucitel);
  await ucitel.getByRole('button', { name: 'Promítat hodinu' }).click();
  await ucitel.waitForFunction(() => document.documentElement.classList.contains('promitani-pripraveno'));
  await ucitel.locator('[data-hl-dalsi]').click();
  await ucitel.waitForLoadState('load'); await ucitel.waitForTimeout(600);
  await ucitel.screenshot({ path: `${VEN}/t-platno-otevrena.jpg`, quality: 60 });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const tel = await ctx.newPage();
  await tel.goto(odkazy.delfy);
  await cekej(tel);
  await tel.screenshot({ path: `${VEN}/t-telefon-hodina.png`, fullPage: true });
  await tel.getByRole('link', { name: /Co uděláš/ }).first().click();
  await tel.waitForLoadState('load'); await tel.waitForTimeout(600); await cekej(tel);
  await tel.screenshot({ path: `${VEN}/t-telefon-volba.png` });
  log('[telefon] stav:', await stav(tel), 'karet vidět:', await tel.locator('#cesta1-jak-zjistit [data-cast="moznosti"]').isVisible());
}

if (faze === 'student') {
  for (const [w, h] of [[390, 844], [1440, 900]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500 });
    const page = await ctx.newPage();
    for (const k of ['delfy', 'smrt']) {
      await page.goto(odkazy[k]);
      await cekej(page);
      await page.screenshot({ path: `${VEN}/st-${k}-${w}-hodina.png`, fullPage: true });
      const text = await page.locator('main').innerText();
      log(`[student ${w} ${k}] stránka hodiny:\n` + text);
      await page.getByRole('link', { name: 'Začít hodinu' }).or(page.getByRole('button', { name: 'Začít hodinu' })).first().click();
      for (let i = 0; i < 9; i++) {
        await page.waitForLoadState('load'); await page.waitForTimeout(400); await cekej(page);
        const s = await stav(page);
        await page.screenshot({ path: `${VEN}/st-${k}-${w}-${i + 1}.jpg`, quality: 55 });
        const t = await page.locator('body').innerText();
        if (/TAJNE/.test(t)) log(`[student] POZNÁMKA UČITELE NA STRÁNCE ${s.url}`);
        log(`[student ${w} ${k}] ${s.pocet} ${s.url} y=${s.y} lišta dole ${s.lista}`);
        const dalsi = page.locator('[data-hl-dalsi]');
        if ((await dalsi.getAttribute('aria-disabled')) === 'true') break;
        await dalsi.click();
      }
    }
    // Deník a export.
    await page.goto(ZAKLAD + '/denik/');
    await cekej(page);
    const dt = await page.locator('main').innerText();
    log(`[student ${w}] deník Hodiny:`, dt.match(/Hodiny[\s\S]{0,300}/)?.[0], 'TAJNE:', /TAJNE/.test(dt));
    const ls = await page.evaluate(() => JSON.stringify({ ...localStorage }) + JSON.stringify({ ...sessionStorage }));
    log(`[student ${w}] TAJNE v úložišti:`, /TAJNE/.test(ls));
    await page.screenshot({ path: `${VEN}/st-denik-${w}.png`, fullPage: true });
    await ctx.close();
  }
}

writeFileSync(`${VEN}/zaznam-${faze}.txt`, zaznam.join('\n'));
await browser.close();
