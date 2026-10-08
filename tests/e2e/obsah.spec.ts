// Obsah stránky osobnosti: úplný seznam oddílů ze stránky, lišta po ruce při čtení (notebook i telefon),
// zvýrazněný právě čtený oddíl, „Pokračovat ve čtení“ po návratu a žádný samovolný posun stránky.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PROFILY = ['sokrates', 'platon', 'aristoteles', 'protagoras', 'epikuros', 'diogenes', 'epiktetos', 'marcus-aurelius'];
const SOKRATES = '/osobnost/sokrates/';
const OBSAH_SOKRATA = ['01 Věštba z Delf', '02 Muž z agory', '03 Ústup od Délia', '04 Soud', '05 Poslední den', 'Doba a lidé', 'Dvě velké myšlenky', 'Zkus to žít', 'Kam dál', 'Prameny'];

async function pripravit(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForSelector('astro-island[component-url*="Hledani"]:not([ssr])', { state: 'attached' });
}
/** Posune stránku tak, aby oddíl začínal kousek pod lištou, a počká, až ho obsah označí jako čtený. */
async function docti(page: Page, kotva: string) {
  await page.evaluate((k) => {
    const el = document.querySelector<HTMLElement>(`[data-oddil][id="${k}"], [data-oddil-kotva="${k}"]`)!;
    window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 140);
  }, kotva);
  await expect(page.locator(`[data-obsah-panel] a[href="#${kotva}"]`)).toHaveAttribute('aria-current', 'location');
}
const cteni = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('atlas-denik') ?? '{}').cteni ?? null);
const lista = (page: Page) => page.getByRole('navigation', { name: 'Obsah při čtení' });
const radek = (page: Page) => page.getByRole('navigation', { name: 'Obsah stránky' });
const tlacitko = (page: Page) => page.locator('[data-obsah-tlacitko]');
const hrana = (page: Page, s: string) => page.locator(s).first().evaluate((e) => { const b = e.getBoundingClientRect(); return { nahore: b.top, dole: b.bottom, vlevo: b.left, sirka: b.width }; });

for (const id of PROFILY) {
  test(`obsah · ${id}: vypisuje právě oddíly, které na stránce jsou, s jejich názvy; každá kotva existuje`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/osobnost/${id}/`);
    const naStrance = await page.evaluate(() => [...document.querySelectorAll<HTMLElement>('[data-oddil]')].map((e) => ({ kotva: e.dataset.oddilKotva || e.id, text: [e.dataset.oddilCislo, e.dataset.oddil].filter(Boolean).join(' ') })));
    expect(naStrance.length).toBeGreaterThanOrEqual(6);
    for (const seznam of [radek(page), page.locator('[data-obsah-panel]')]) {
      const odkazy = await seznam.locator('a').evaluateAll((a) => a.map((x) => ({ kotva: x.getAttribute('href')!.slice(1), text: x.textContent!.replace(/\s+/g, ' ').trim() })));
      expect(odkazy).toEqual(naStrance);
    }
    for (const o of naStrance) await expect(page.locator(`[id="${o.kotva}"]`), o.kotva).toHaveCount(1);
    // Kapitoly, pak další oddíly; Prameny mají kotvu a jsou poslední.
    expect(naStrance.at(-1)).toEqual({ kotva: 'prameny', text: 'Prameny' });
    expect(naStrance.map((o) => o.text)).toEqual(expect.arrayContaining(['Doba a lidé', 'Dvě velké myšlenky', 'Zkus to žít', 'Kam dál']));
    // Názvy nejsou ze seznamu v kódu: stojí na stránce u svého oddílu.
    await expect(page.locator('.doba > .t-nadtitulek')).toHaveText('Doba a lidé');
    await expect(page.locator('#myslenky')).toHaveText('Dvě velké myšlenky');
    await expect(page.locator('.zkus > .t-nadtitulek')).toContainText('Zkus to žít');
    await expect(page.locator('#kam-dal')).toHaveText('Kam dál');
    await expect(page.locator('#prameny > summary')).toHaveText('Prameny');
  });
}

test('obsah · notebook: řádek odkazů v klidu, při čtení lišta; čtenářský sloupec se nehne a právě čtený oddíl je zvýrazněný', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(SOKRATES);
  await pripravit(page);
  // V klidu: řádek odkazů pod hlavičkou profilu, lišta není vidět a nejde na ni tabulátorem.
  await expect(radek(page).getByRole('link')).toHaveText(OBSAH_SOKRATA);
  await expect(tlacitko(page)).toBeHidden();
  await expect(page.locator('[data-obsah-panel] [aria-current], [data-obsah-profilu] [aria-current]')).toHaveCount(0);
  const sloupecPred = await hrana(page, '#muz-z-agory .ctenarsky');
  const sirokyPred = await hrana(page, '.doba');
  const vyskaPred = await page.evaluate(() => document.documentElement.scrollHeight);

  await docti(page, 'muz-z-agory');
  await expect(tlacitko(page)).toBeVisible();
  await expect(tlacitko(page)).toHaveText(/Obsah\s*právě čteš\s*02\s*Muž z agory/);
  // Lišta je tenký pruh hned pod hlavičkou webu.
  const pruh = await hrana(page, '.obsah-lista__pruh');
  const hlavicka = await hrana(page, '.hlavicka');
  expect(Math.abs(pruh.nahore - hlavicka.dole)).toBeLessThanOrEqual(1);
  expect(pruh.dole - pruh.nahore).toBe(44);
  // Čtenářský sloupec má dál 680 px, stojí na stejném místě a stránka se lištou neprodloužila.
  const sloupecPo = await hrana(page, '#muz-z-agory .ctenarsky');
  expect(sloupecPo.sirka).toBe(680);
  expect(sloupecPo.sirka).toBe(sloupecPred.sirka);
  expect(sloupecPo.vlevo).toBe(sloupecPred.vlevo);
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(vyskaPred);
  // Právě čtený oddíl: aria-current v obou seznamech, tučně a s linkou (ne jen barvou).
  for (const s of ['[data-obsah-profilu]', '[data-obsah-panel]']) {
    await expect(page.locator(`${s} [aria-current]`)).toHaveCount(1);
    const vzhled = await page.locator(`${s} [aria-current]`).evaluate((a) => ({ rez: Number(getComputedStyle(a).fontWeight), linka: getComputedStyle(a).boxShadow }));
    expect(vzhled.rez).toBeGreaterThanOrEqual(700);
    expect(vzhled.linka).not.toBe('none');
  }
  expect(await page.locator('[data-obsah-panel] a:not([aria-current])').first().evaluate((a) => Number(getComputedStyle(a).fontWeight))).toBeLessThan(700);

  // Široký oddíl: lišta zůstává pruhem nahoře, oddíl má celou šířku a nic do něj z boku nezasahuje.
  await docti(page, 'doba-a-lide');
  await expect(tlacitko(page)).toHaveText(/Doba a lidé/);
  const sirokyPo = await hrana(page, '.doba');
  expect(sirokyPo.sirka).toBe(sirokyPred.sirka);
  expect(sirokyPo.vlevo).toBe(sirokyPred.vlevo);
  const pruh2 = await hrana(page, '.obsah-lista__pruh');
  expect(pruh2.dole - pruh2.nahore).toBe(44);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
  // Zpátky nahoru: lišta zmizí a nic není označené.
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(tlacitko(page)).toBeHidden();
  await expect(page.locator('[data-obsah-panel] [aria-current]')).toHaveCount(0);
});

test('obsah · notebook jen klávesnicí: otevřít, vybrat oddíl, Esc vrátí fokus; skok neskončí pod lištou', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(SOKRATES);
  await pripravit(page);
  await docti(page, 'muz-z-agory');
  await expect(tlacitko(page)).toBeVisible();
  await tlacitko(page).focus();
  await expect(tlacitko(page)).toBeFocused();
  await expect(tlacitko(page)).toHaveAttribute('aria-expanded', 'false');
  await page.keyboard.press('Enter');
  await expect(tlacitko(page)).toHaveAttribute('aria-expanded', 'true');
  await expect(lista(page).getByRole('link')).toHaveText(OBSAH_SOKRATA);
  // Esc zavře a vrátí fokus na tlačítko.
  await page.keyboard.press('Tab');
  await expect(lista(page).getByRole('link').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(lista(page).getByRole('link').first()).toBeHidden();
  await expect(tlacitko(page)).toBeFocused();
  // Znovu otevřít mezerníkem, dojít tabulátorem na „Soud“ a skočit.
  await page.keyboard.press('Space');
  for (let i = 0; i < 4; i++) await page.keyboard.press('Tab');
  await expect(lista(page).getByRole('link', { name: '04 Soud' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(`${SOKRATES}#soud`);
  await expect(tlacitko(page)).toHaveAttribute('aria-expanded', 'false');
  await expect(tlacitko(page)).toHaveText(/04\s*Soud/);
  const pruh = await hrana(page, '.obsah-lista__pruh');
  expect((await hrana(page, '#soud')).nahore).toBeGreaterThanOrEqual(pruh.dole);
  // Odchod fokusu mimo obsah seznam zavře, aby nezůstal viset přes text.
  await tlacitko(page).focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Shift+Tab');
  await expect(tlacitko(page)).toHaveAttribute('aria-expanded', 'false');
  // Prameny jsou rozbalovací: skok z obsahu je otevře.
  await docti(page, 'posledni-den');
  await expect(tlacitko(page)).toBeVisible();
  await tlacitko(page).focus();
  await page.keyboard.press('Enter');
  await lista(page).getByRole('link', { name: 'Prameny' }).focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(`${SOKRATES}#prameny`);
  await expect(page.locator('#prameny')).toHaveAttribute('open', '');
  await expect(tlacitko(page)).toHaveText(/Prameny/);
});

test('obsah · telefon: kompaktní lišta od začátku; seznam nezakryje spodní lištu, tlačítko ani cíl skoku', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(SOKRATES);
  await pripravit(page);
  // Řádek odkazů je na telefonu nahrazen lištou; ta stojí v toku stránky pod hlavičkou profilu.
  await expect(radek(page)).toBeHidden();
  await tlacitko(page).scrollIntoViewIfNeeded();
  await expect(tlacitko(page)).toBeVisible();
  await expect(tlacitko(page)).toHaveText('Obsah', { useInnerText: true });
  expect((await tlacitko(page).boundingBox())!.height).toBeGreaterThanOrEqual(44);

  await docti(page, 'ustup-od-delia');
  const hlavicka = await hrana(page, '.hlavicka');
  const pruh = await hrana(page, '.obsah-lista__pruh');
  expect(Math.abs(pruh.nahore - hlavicka.dole)).toBeLessThanOrEqual(1);
  await expect(tlacitko(page)).toHaveText(/03\s*Ústup od Délia/);
  // Zavřená lišta zabírá jen svůj pruh: text pod ní začíná hned za ním.
  expect(await page.evaluate(() => document.elementFromPoint(195, 56 + 44 + 30)!.closest('[data-obsah-lista]'))).toBeNull();

  await tlacitko(page).click();
  const panel = page.locator('[data-obsah-panel]');
  await expect(panel).toBeVisible();
  const p = (await panel.boundingBox())!;
  const spodni = (await page.locator('nav.lista').boundingBox())!;
  const t = (await tlacitko(page).boundingBox())!;
  expect(p.y).toBeGreaterThanOrEqual(t.y + t.height - 1);
  expect(p.y + p.height).toBeLessThanOrEqual(spodni.y);
  for (const a of await panel.getByRole('link').all()) expect((await a.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  // Klepnutí vedle seznam zavře.
  await page.locator('footer.paticka').dispatchEvent('pointerdown');
  await expect(panel).toBeHidden();
  // Skok na oddíl: nadpis není pod lištou ani pod spodní lištou.
  await tlacitko(page).click();
  await panel.getByRole('link', { name: 'Zkus to žít' }).click();
  await expect(panel).toBeHidden();
  await expect(tlacitko(page)).toHaveText(/Zkus to žít/);
  const cil = await hrana(page, '#zkus-to-zit');
  expect(cil.nahore).toBeGreaterThanOrEqual((await hrana(page, '.obsah-lista__pruh')).dole);
  expect(cil.nahore).toBeLessThan(spodni.y);
  // Prvek s fokusem nezajede pod lištu: pole nad viditelnou částí se po fokusu ukáže celé pod ní.
  await page.locator('#sokrates-kdo-je-moudry textarea').focus();
  const pole = await hrana(page, '#sokrates-kdo-je-moudry textarea');
  expect(pole.nahore).toBeGreaterThanOrEqual((await hrana(page, '.obsah-lista__pruh')).dole);
  expect(pole.dole).toBeLessThanOrEqual(spodni.y);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
});

test('obsah · telefon: lišta nízko na obrazovce otevře seznam nahoru, ne přes spodní lištu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(SOKRATES);
  await pripravit(page);
  // Lišta ještě nedrží pod hlavičkou: stojí v toku stránky těsně nad spodní lištou.
  await page.evaluate(() => {
    const l = document.querySelector<HTMLElement>('[data-obsah-lista]')!;
    window.scrollTo(0, l.getBoundingClientRect().top + scrollY - 700);
  });
  await tlacitko(page).click();
  const panel = page.locator('[data-obsah-panel]');
  await expect(panel).toBeVisible();
  const p = (await panel.boundingBox())!;
  const t = (await tlacitko(page).boundingBox())!;
  const hlavicka = await hrana(page, '.hlavicka');
  expect(p.y + p.height).toBeLessThanOrEqual(t.y + 1);
  expect(p.y).toBeGreaterThanOrEqual(hlavicka.dole);
});

test('Pokračovat ve čtení: ukládá se jen kotva při změně oddílu, odkaz se nabídne po návratu a stránka se sama neposune', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  // Počítadlo zápisů do úložiště, ať je vidět, že se neukládá při každém posunu.
  await page.addInitScript(() => {
    const puvodni = Storage.prototype.setItem;
    (window as unknown as { zapisu: number }).zapisu = 0;
    Storage.prototype.setItem = function (k: string, v: string) {
      if (k === 'atlas-denik' && /"cteni"/.test(v)) (window as unknown as { zapisu: number }).zapisu++;
      return puvodni.call(this, k, v);
    };
  });
  const zapisu = () => page.evaluate(() => (window as unknown as { zapisu: number }).zapisu);
  const odkaz = page.locator('[data-cteni]');

  await page.goto(SOKRATES);
  await pripravit(page);
  // První návštěva: žádný odkaz, nic uloženého, stránka nahoře.
  await expect(odkaz).toBeHidden();
  expect(await cteni(page)).toBeNull();

  await docti(page, 'muz-z-agory');
  expect(await cteni(page)).toEqual({ [SOKRATES]: 'muz-z-agory' });
  // Posun uvnitř téhož oddílu nic dalšího neuloží.
  const pred = await zapisu();
  for (let i = 0; i < 6; i++) {
    await page.mouse.wheel(0, 60);
    await page.waitForTimeout(40);
  }
  await expect(page.locator('[data-obsah-panel] a[href="#muz-z-agory"]')).toHaveAttribute('aria-current', 'location');
  expect(await zapisu()).toBe(pred);
  // Změna oddílu uloží jednou.
  await docti(page, 'ustup-od-delia');
  expect(await cteni(page)).toEqual({ [SOKRATES]: 'ustup-od-delia' });
  expect((await zapisu()) - pred).toBe(1);
  // Deník zůstává verze 1.
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('atlas-denik')!).verze)).toBe(1);

  // Návrat (nové otevření stránky): odkaz nahoře v hlavičce profilu, stránka zůstala nahoře.
  await page.goto('/lide/');
  await page.goto(SOKRATES);
  await pripravit(page);
  await expect(odkaz).toBeVisible();
  await expect(odkaz.getByRole('link')).toHaveText('Pokračovat ve čtení: Ústup od Délia');
  await expect(odkaz.getByRole('link')).toHaveAttribute('href', '#ustup-od-delia');
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  expect((await odkaz.boundingBox())!.y).toBeLessThan(900);
  // Po obnovení stránky nabídka drží.
  await page.reload();
  await expect(odkaz.getByRole('link')).toHaveAttribute('href', '#ustup-od-delia');
  // Odkaz je dost velký na prst a vede na oddíl pod lištou.
  await page.evaluate(() => window.scrollTo(0, 0));
  expect((await odkaz.getByRole('link').boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await odkaz.getByRole('link').click();
  await expect(page).toHaveURL(`${SOKRATES}#ustup-od-delia`);
  await expect(tlacitko(page)).toHaveText(/03\s*Ústup od Délia/);
  expect((await hrana(page, '#ustup-od-delia')).nahore).toBeGreaterThanOrEqual((await hrana(page, '.obsah-lista__pruh')).dole);

  // Kdo naposledy četl první oddíl, odkaz nedostane.
  await docti(page, 'delfy');
  expect(await cteni(page)).toEqual({ [SOKRATES]: 'delfy' });
  await page.goto('/lide/');
  await page.goto(SOKRATES);
  await pripravit(page);
  await expect(odkaz).toBeHidden();
  expect(await page.evaluate(() => scrollY)).toBe(0);
  // Jiný profil má vlastní záznam.
  await page.goto('/osobnost/epikuros/');
  await expect(page.locator('[data-cteni]')).toBeHidden();
});

test('Pokračovat ve čtení: na telefonu je vidět bez posouvání a naposledy čtený oddíl je v exportu deníku', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/denik/');
  await page.evaluate(() => localStorage.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], bloky: {}, aktivita: [], cesty: {}, cteni: { '/osobnost/diogenes/': 'pes', '/osobnost/sokrates/': 'zrusena-kapitola' } })));
  await page.goto('/osobnost/diogenes/');
  const odkaz = page.locator('[data-cteni]');
  await expect(odkaz.getByRole('link')).toHaveText('Pokračovat ve čtení: Pes');
  const o = (await odkaz.boundingBox())!;
  expect(o.y + o.height).toBeLessThan((await page.locator('nav.lista').boundingBox())!.y);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  // Kotva, která už na stránce není, nic nenabídne.
  await page.goto(SOKRATES);
  await expect(page.locator('[data-cteni]')).toBeHidden();
  // Export deníku pole obsahuje.
  await page.goto('/denik/');
  await page.waitForSelector('astro-island[component-url*="Denik"]:not([ssr])', { state: 'attached' });
  const [stazeni] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Stáhnout deník do souboru' }).click()]);
  const obsah = JSON.parse(await (await import('node:fs/promises')).readFile((await stazeni.path())!, 'utf8'));
  expect(obsah.verze).toBe(1);
  expect(obsah.cteni['/osobnost/diogenes/']).toBe('pes');
});

test('obsah · bez JavaScriptu: obyčejný seznam odkazů na všechny oddíly, žádná lišta ani nabídka návratu', async ({ browser }) => {
  for (const sirka of [390, 1440]) {
    const kontext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: sirka, height: 900 } });
    const page = await kontext.newPage();
    await page.goto(SOKRATES);
    await expect(radek(page).getByRole('link')).toHaveText(OBSAH_SOKRATA);
    await expect(radek(page).getByRole('link', { name: 'Prameny' })).toHaveAttribute('href', '#prameny');
    await expect(page.locator('[data-obsah-lista]')).toBeHidden();
    await expect(page.locator('[data-cteni]')).toBeHidden();
    for (const a of await radek(page).getByRole('link').all()) expect((await a.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    await kontext.close();
  }
});

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    test(`obsah · otevřený seznam · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}: axe a snímek`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      await page.goto('/denik/');
      await page.evaluate(() => localStorage.setItem('atlas-denik', JSON.stringify({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], bloky: {}, aktivita: [], cesty: {}, cteni: { '/osobnost/sokrates/': 'soud' } })));
      await page.goto(SOKRATES);
      await pripravit(page);
      const r = rezim === 'light' ? 'svetly' : 'tmavy';
      await expect(page.locator('[data-cteni]')).toBeVisible();
      await page.screenshot({ path: `test-results/snimky/obsah-navrat-${sirka}-${r}.png` });
      await docti(page, 'muz-z-agory');
      await tlacitko(page).click();
      await expect(page.locator('[data-obsah-panel]')).toBeVisible();
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const popis = axe.violations.map((v) => `${v.id}: ${v.help}\n  ${v.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
      expect(popis, popis.join('\n')).toEqual([]);
      await page.screenshot({ path: `test-results/snimky/obsah-otevreny-${sirka}-${r}.png` });
      await page.keyboard.press('Escape');
      await page.screenshot({ path: `test-results/snimky/obsah-lista-${sirka}-${r}.png` });
    });
  }
}
