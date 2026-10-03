// Mapa a čas: roky 399, 360 a 323 př. n. l. a 121 n. l. na šířce 390 a 1440 px ve světlém i tmavém režimu
// (žijící lidé, bez posouvání stránky, přístupnost podle WCAG 2 AA, snímky), dále adresa a tlačítko Zpět,
// zpráva o smrti vybraného člověka, ovládání klávesnicí a rozvržení 1280 × 800.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ROKY = [
  { rok: -399, osoba: 'sokrates', zije: ['Sókratés', 'Platón', 'Démokritos'], nezije: ['Aristotelés'] },
  { rok: -360, osoba: 'platon', zije: ['Platón', 'Diogenés', 'Aristotelés'], nezije: ['Sókratés', 'Démokritos', 'Epikúros', 'Zénón z Kitia'] },
  { rok: -323, osoba: 'diogenes', zije: ['Diogenés', 'Aristotelés', 'Epikúros'], nezije: ['Platón'] },
  { rok: 121, osoba: 'marcus-aurelius', zije: ['Epiktétos', 'Marcus Aurelius'], nezije: ['Seneca', 'Plótínos'] },
];
const SIRKY = [
  { sirka: 390, vyska: 844 },
  { sirka: 1440, vyska: 900 },
];
const REZIMY = ['light', 'dark'] as const;

async function pripravit(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForSelector('astro-island[component-url*="MapaACas"]:not([ssr])', { state: 'attached' });
  await page.waitForSelector('.mapa svg.podklad path.sit', { state: 'attached' });
  await page.waitForTimeout(250);
}

/** Jména žijících ze seznamu (textová alternativa řeky). */
async function zijici(page: Page, telefon: boolean): Promise<string[]> {
  if (telefon) await page.getByRole('tab', { name: 'Řeka životů' }).click();
  await page.locator('.reka').getByRole('button', { name: 'Seznam' }).click();
  const jmena = await page.locator('.reka__seznam .seznam__jmeno').allInnerTexts();
  await page.locator('.reka').getByRole('button', { name: 'Řeka' }).click();
  if (telefon) await page.getByRole('tab', { name: /Člověk/ }).click();
  return jmena;
}

for (const r of ROKY) {
  for (const { sirka, vyska } of SIRKY) {
    for (const rezim of REZIMY) {
      test(`mapa · rok ${r.rok} · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
        await page.setViewportSize({ width: sirka, height: vyska });
        await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
        await page.goto(`/mapa/?rok=${r.rok}&osoba=${r.osoba}`);
        await pripravit(page);

        const posuvnik = page.getByRole('slider', { name: 'Rok' });
        await expect(posuvnik).toHaveAttribute('aria-valuenow', String(r.rok));
        await expect(page.locator('#karta-jmeno')).toBeVisible();

        const jmena = await zijici(page, sirka < 900);
        for (const j of r.zije) expect(jmena, `${j} v roce ${r.rok} žije`).toContain(j);
        for (const j of r.nezije) expect(jmena, `${j} v roce ${r.rok} nežije`).not.toContain(j);

        // Bez posouvání stránky do stran i dolů: mapa, posuvník, řeka i karta jsou vidět najednou.
        const presah = await page.evaluate(() => ({ x: document.documentElement.scrollWidth - innerWidth, y: document.documentElement.scrollHeight - innerHeight }));
        expect(presah.x).toBeLessThanOrEqual(0);
        expect(presah.y).toBeLessThanOrEqual(0);
        for (const sel of ['.mac__mapa', '.mac__posuvnik', sirka < 900 ? '.mac__karta' : '.mac__reka', '.mac__karta']) {
          const b = (await page.locator(sel).boundingBox())!;
          expect(b.y + Math.min(b.height, 40), `${sel} je v okně`).toBeLessThanOrEqual(vyska);
        }

        const axe = await new AxeBuilder({ page }).include('.mac').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        const popis = axe.violations.map((v) => `${v.id}: ${v.help}\n  ${v.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
        expect(popis, popis.join('\n')).toEqual([]);

        await page.screenshot({ path: `test-results/snimky/mapa-${r.rok}-${sirka}-${rezim === 'light' ? 'svetly' : 'tmavy'}.png` });
      });
    }
  }
}

test('mapa · 1280 × 800: vše najednou bez posouvání', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-360&osoba=platon');
  await pripravit(page);
  expect(await page.evaluate(() => document.documentElement.scrollHeight - innerHeight)).toBeLessThanOrEqual(0);
  for (const sel of ['.mac__mapa', '.mac__posuvnik', '.mac__reka', '.mac__karta']) {
    const b = (await page.locator(sel).boundingBox())!;
    expect(b.height).toBeGreaterThan(60);
    expect(b.y + b.height).toBeLessThanOrEqual(801);
  }
  await page.screenshot({ path: 'test-results/snimky/mapa--360-1280-svetly.png' });
});

test('mapa · adresa nese stav, Zpět ho vrátí a vybraný člověk zemře se zprávou', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-348&osoba=platon');
  await pripravit(page);
  await expect(page.locator('#karta-jmeno')).toHaveText('Platón');
  await expect(page.locator('.box__vek')).toContainText('je mu asi 79 let');

  const posuvnik = page.getByRole('slider', { name: 'Rok' });
  await posuvnik.focus();
  await page.keyboard.press('ArrowRight');
  await expect(posuvnik).toHaveAttribute('aria-valuenow', '-347');
  await expect(page.locator('#karta-jmeno')).toHaveText('Platón');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.zprava')).toHaveText('Platón zemřel roku 347 př. n. l.');
  await expect(page.locator('#karta-jmeno')).toHaveCount(0);
  await expect(page).toHaveURL(/rok=-346$/);

  await page.goBack();
  await expect(page).toHaveURL(/rok=-348&osoba=platon/);
  await expect(page.locator('#karta-jmeno')).toHaveText('Platón');

  // Tlačítko o 10 let vpřed založí nový záznam historie.
  await page.getByRole('button', { name: 'O 10 let zpět' }).click();
  await expect(page).toHaveURL(/rok=-358&osoba=platon/);
  await page.goBack();
  await expect(page).toHaveURL(/rok=-348/);
});

test('mapa · shluk se rozbalí, klik vybere člověka a Změř vzdálenost počítá přes rok nula', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  const shluk = page.locator('[data-shluk="athenes"]');
  await shluk.click();
  await expect(shluk).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('group', { name: 'Lidé v místě Athény' }).getByRole('button', { name: /Platón/ }).click();
  await expect(page.locator('#karta-jmeno')).toHaveText('Platón');
  await expect(page).toHaveURL(/osoba=platon/);
  await expect(page.locator('.vztahy')).toContainText('zemřel před 39 lety');

  await page.goto('/mapa/?rok=-399&osoba=sokrates');
  await pripravit(page);
  await page.locator('.zmer select').selectOption('epiktetos');
  await expect(page.locator('.zmer__vysledek')).toHaveText('Dělí je asi 453 let. To je asi šest lidských životů.');
  await expect(page).toHaveURL(/srovnat=epiktetos/);
});

test('mapa · klávesnice: posuvník, řeka a přepnutí období', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  const posuvnik = page.getByRole('slider', { name: 'Rok' });
  await posuvnik.focus();
  await page.keyboard.press('PageUp');
  await expect(posuvnik).toHaveAttribute('aria-valuenow', '-350');
  await page.keyboard.press('Shift+ArrowLeft');
  await expect(posuvnik).toHaveAttribute('aria-valuenow', '-360');

  // Řeka: jedna zastávka tabulátoru, šipky mezi řádky, Enter vybere.
  const pruhy = page.locator('.reka .pruh');
  await pruhy.and(page.locator('[tabindex="0"]')).focus();
  const prvni = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'));
  await page.keyboard.press('ArrowDown');
  const druhy = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'));
  expect(druhy).not.toBe(prvni);
  await page.keyboard.press('Enter');
  await expect(page.locator('#karta-jmeno')).toHaveText(druhy!.split(',')[0]);

  // Přes rok nula: ze 2 př. n. l. o dva roky dál je 1 n. l.
  await page.goto('/mapa/?rok=-2');
  await pripravit(page);
  await posuvnik.focus();
  await page.keyboard.press('ArrowRight');
  await expect(posuvnik).toHaveAttribute('aria-valuetext', /^1 př\./);
  await page.keyboard.press('ArrowRight');
  await expect(posuvnik).toHaveAttribute('aria-valuenow', '1');

  // Přepnutí období: klik na segment 1 v pásu období.
  await page.locator('.mseg').first().click();
  await expect(page).toHaveURL(/rok=-/);
  await expect(page.locator('.mseg--aktivni')).toContainText('1');
});

// ── Srozumitelnější ovládání (větev rozhrani-v2): vysvětlení stínu, legenda čar, připravovaná období ──────────

const VYSVETLENI = 'Kdo zemřel, z mapy zmizí. Se stínem odkazu tam vybledle zůstane, dokud žije někdo, kdo ho znal, četl, učil se u něj nebo se s ním přel.';
const LEGENDA = ['učitel a žák', 'osobně se znali', 'vliv přes texty', 'polemika', 'slabší čára: vypráví se'];
const prekryv = (a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) =>
  a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

test('mapa · stín odkazu: vysvětlení jen klávesnicí, Esc ho zavře a přepínač zůstává vidět a ovladatelný', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  const otazka = page.getByRole('button', { name: 'Co je stín odkazu?' });
  const prepinac = page.getByRole('checkbox', { name: 'Stín odkazu' });
  const text = page.locator('#stin-vysvetleni');
  await expect(otazka).toHaveAttribute('aria-expanded', 'false');
  await expect(text).toHaveText('');

  // Tabulátorem z přepínače na otazník, Enter otevře.
  await prepinac.focus();
  await page.keyboard.press('Tab');
  await expect(otazka).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(otazka).toHaveAttribute('aria-expanded', 'true');
  await expect(text).toHaveText(VYSVETLENI);
  // Jedna až dvě věty a zazní i ve čtečce.
  expect(VYSVETLENI.split(/(?<=\.)\s/).length).toBeLessThanOrEqual(2);
  await expect(text).toHaveAttribute('role', 'status');
  // Vysvětlení nezakrývá přepínač ani otazník a vejde se do mapy.
  const [b, p, o, mapa] = await Promise.all([text.locator('p').boundingBox(), page.locator('.prepinac-stinu').boundingBox(), otazka.boundingBox(), page.locator('.mapa').boundingBox()]);
  expect(prekryv(b!, p!)).toBe(false);
  expect(prekryv(b!, o!)).toBe(false);
  expect(b!.y).toBeGreaterThanOrEqual(p!.y + p!.height);
  expect(b!.x + b!.width).toBeLessThanOrEqual(mapa!.x + mapa!.width);
  expect(b!.y + b!.height).toBeLessThanOrEqual(mapa!.y + mapa!.height);
  expect(await page.evaluate(() => document.documentElement.scrollHeight - innerHeight)).toBeLessThanOrEqual(0);

  // S otevřeným vysvětlením jde stín zapnout: zesnulý Sókratés se ukáže vybledle.
  await page.keyboard.press('Shift+Tab');
  await expect(prepinac).toBeFocused();
  await page.keyboard.press('Space');
  await expect(prepinac).toBeChecked();
  await expect(page.locator('.stin[aria-label^="Sókratés"]')).toBeVisible();
  await expect(text).toHaveText(VYSVETLENI);
  const axe = await new AxeBuilder({ page }).include('.mac').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
  await page.screenshot({ path: 'test-results/snimky/mapa-stin-vysvetleni-1440-svetly.png' });

  // Esc zavře a vrátí fokus na otazník; druhé Esc už nic nerozbije.
  await page.keyboard.press('Escape');
  await expect(text).toHaveText('');
  await expect(otazka).toHaveAttribute('aria-expanded', 'false');
  await expect(otazka).toBeFocused();
  await expect(prepinac).toBeChecked();
  // Mezerník otevře znovu, druhé stisknutí zavře.
  await page.keyboard.press('Space');
  await expect(text).toHaveText(VYSVETLENI);
  await page.keyboard.press('Space');
  await expect(text).toHaveText('');
});

for (const rezim of REZIMY) {
  test(`mapa · telefon · ${rezim === 'light' ? 'světlý' : 'tmavý'}: vysvětlení stínu klepnutím, legenda v řece a připravovaná období`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
    await page.goto('/mapa/?rok=-360&osoba=platon');
    await pripravit(page);
    const r = rezim === 'light' ? 'svetly' : 'tmavy';

    // Vysvětlení stínu: klepnutí otevře, nezakryje přepínač, klepnutí vedle zavře.
    const otazka = page.getByRole('button', { name: 'Co je stín odkazu?' });
    const text = page.locator('#stin-vysvetleni');
    await otazka.click();
    await expect(text).toHaveText(VYSVETLENI);
    const [b, p, mapa] = await Promise.all([text.locator('p').boundingBox(), page.locator('.prepinac-stinu').boundingBox(), page.locator('.mapa').boundingBox()]);
    expect(prekryv(b!, p!)).toBe(false);
    expect(b!.x).toBeGreaterThanOrEqual(0);
    expect(b!.x + b!.width).toBeLessThanOrEqual(390);
    expect(b!.y + b!.height).toBeLessThanOrEqual(mapa!.y + mapa!.height);
    // Dotykový cíl otazníku je aspoň 44 px: klepnutí těsně vedle kroužku pořád patří jemu.
    const o = (await otazka.boundingBox())!;
    expect(await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest('button')?.getAttribute('aria-label'), [o.x + o.width / 2, o.y + o.height + 4])).toBe('Co je stín odkazu?');
    await page.screenshot({ path: `test-results/snimky/mapa-stin-vysvetleni-390-${r}.png` });
    await page.locator('.mac__posuvnik .letopocet').click();
    await expect(text).toHaveText('');

    // Pás období: připravované období se pozná bez najetí myší a nejen z barvy (šrafování a čárkovaný rámeček).
    const segmenty = page.locator('.mseg');
    await expect(segmenty).toHaveCount(8);
    const vzhled = await segmenty.evaluateAll((s) => s.map((e) => ({
      pripravuje: e.getAttribute('aria-disabled') === 'true',
      sraf: getComputedStyle(e).backgroundImage.includes('repeating-linear-gradient'),
      ramecek: getComputedStyle(e, '::before').borderTopStyle === 'dashed' && getComputedStyle(e, '::before').content !== 'none',
    })));
    expect(vzhled.filter((v) => v.pripravuje).length).toBeGreaterThan(0);
    expect(vzhled.filter((v) => !v.pripravuje).length).toBeGreaterThan(0);
    for (const v of vzhled) expect({ sraf: v.sraf, ramecek: v.ramecek }).toEqual({ sraf: v.pripravuje, ramecek: v.pripravuje });
    // Čtečka to slyší v názvu a klepnutí odpoví zprávou.
    const pripravovane = page.locator('.mseg[aria-disabled="true"]').first();
    await expect(pripravovane).toHaveAccessibleName(/připravujeme$/);
    await expect(page.locator('.mseg:not([aria-disabled])').first()).not.toHaveAccessibleName(/připravujeme/);
    const nazev = (await pripravovane.getAttribute('title'))!.split(' · ')[0];
    // Tlačítko má aria-disabled (období nejde otevřít), ale na klepnutí odpoví; Playwright by na „povolení“ čekal.
    await pripravovane.click({ force: true });
    await expect(page.locator('.zprava')).toHaveText(`${nazev}: připravujeme.`);
    await expect(page).toHaveURL(/rok=-360/);
    await page.screenshot({ path: `test-results/snimky/mapa-pas-obdobi-390-${r}.png` });

    // Legenda čar v záložce Řeka životů: tlačítko vedle Seznamu, vzorek čáry a text.
    await page.getByRole('tab', { name: 'Řeka životů' }).click();
    const tl = page.locator('.reka').getByRole('button', { name: 'Legenda' });
    await expect(tl).toHaveAttribute('aria-expanded', 'false');
    await tl.click();
    const legenda = page.getByRole('list', { name: 'Čáry mezi životy' });
    await expect(legenda.getByRole('listitem')).toHaveText(LEGENDA);
    await expect(legenda.locator('li svg.cara')).toHaveCount(5);
    const l = (await page.locator('.legenda-panel').boundingBox())!;
    expect(l.x).toBeGreaterThanOrEqual(0);
    expect(l.x + l.width).toBeLessThanOrEqual(390);
    expect(l.y + l.height).toBeLessThanOrEqual((await page.locator('nav.lista').boundingBox())!.y);
    expect(prekryv(l, (await tl.boundingBox())!)).toBe(false);
    const axe = await new AxeBuilder({ page }).include('.mac').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
    await page.screenshot({ path: `test-results/snimky/mapa-legenda-390-${r}.png` });
    // Klepnutí vedle zavře; klávesnicí: Enter otevře, Esc zavře a vrátí fokus.
    await page.locator('.mac__posuvnik .letopocet').click();
    await expect(legenda).toHaveCount(0);
    await tl.focus();
    await page.keyboard.press('Enter');
    await expect(legenda).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(legenda).toHaveCount(0);
    await expect(tl).toBeFocused();
    // Dotykový cíl nízkého tlačítka je rozšířený na 44 px.
    const t = (await tl.boundingBox())!;
    expect(await page.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest('button')?.textContent?.trim(), [t.x + t.width / 2, t.y - 4])).toBe('Legenda');
    expect(t.height + 12).toBeGreaterThanOrEqual(44);

    // Drobné popisky: nic pod tokenem popisek (12 px na telefonu); verzálkové nadtitulky smí mít token nadtitulek (11 px).
    for (const zalozka of ['Řeka životů', /Člověk/] as const) {
      await page.getByRole('tab', { name: zalozka }).click();
      const male = await page.evaluate(() => {
        const out: string[] = [];
        const w = document.createTreeWalker(document.querySelector('.mac')!, NodeFilter.SHOW_TEXT);
        for (let n = w.nextNode(); n; n = w.nextNode()) {
          const el = n.parentElement!;
          if (!n.textContent!.trim() || el.closest('svg') || !el.checkVisibility({ visibilityProperty: true })) continue;
          const s = getComputedStyle(el);
          const mez = s.textTransform === 'uppercase' ? 11 : 12;
          if (parseFloat(s.fontSize) < mez) out.push(`${el.className || el.tagName} ${s.fontSize}: ${n.textContent!.trim().slice(0, 30)}`);
        }
        return [...new Set(out)];
      });
      expect(male, male.join('\n')).toEqual([]);
    }
    expect(await page.evaluate(() => ({ x: document.documentElement.scrollWidth - innerWidth, y: document.documentElement.scrollHeight - innerHeight }))).toEqual({ x: 0, y: 0 });
  });
}

test('mapa · legenda čar na notebooku: stále viditelná pod řekou, čtyři typy z dat a tradovaný vztah, bez posouvání stránky', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const { sirka, vyska } of [{ sirka: 1440, vyska: 900 }, { sirka: 1280, vyska: 800 }]) {
    await page.setViewportSize({ width: sirka, height: vyska });
    await page.goto('/mapa/?rok=-360&osoba=platon');
    await pripravit(page);
    const legenda = page.getByRole('list', { name: 'Čáry mezi životy' });
    await expect(legenda).toBeVisible();
    await expect(legenda.getByRole('listitem')).toHaveText(LEGENDA);
    // Vzorek čáry u každé položky a čtyři typy se liší kresbou, ne barvou.
    const vzorky = await legenda.locator('li svg.cara path').evaluateAll((c) => c.map((p) => `${p.getAttribute('d')} | ${getComputedStyle(p).strokeDasharray} | ${getComputedStyle(p).stroke}`));
    expect(vzorky).toHaveLength(5);
    expect(new Set(vzorky.slice(0, 4).map((v) => v.split(' | ').slice(0, 2).join('|'))).size).toBe(4);
    expect(new Set(vzorky.map((v) => v.split(' | ')[2])).size).toBe(1);
    expect(Number(await legenda.locator('.cara--slaba').evaluate((e) => getComputedStyle(e).opacity))).toBeLessThan(1);
    // Rozvržení z docs/design.md drží: mapa, posuvník, řeka i legenda v okně, stránka se neposouvá.
    expect(await page.evaluate(() => document.documentElement.scrollHeight - innerHeight)).toBeLessThanOrEqual(0);
    const l = (await page.locator('.reka__legenda').boundingBox())!;
    expect(l.y + l.height).toBeLessThanOrEqual(vyska);
    expect(l.height).toBeLessThanOrEqual(26);
    expect((await page.locator('.reka__telo').boundingBox())!.height).toBeGreaterThanOrEqual(140);
    expect((await page.locator('.mac__mapa').boundingBox())!.height).toBeGreaterThanOrEqual(240);
    // Pojmenování sedí s kartou člověka: tradovaný vztah je i tam „vypráví se“.
    await page.goto('/mapa/?rok=-430&osoba=sokrates');
    await pripravit(page);
    await expect(page.locator('.vztahy')).toContainText('znali se · vypráví se');
    // V seznamu žijících čáry nejsou, legenda tedy také ne.
    await page.locator('.reka').getByRole('button', { name: 'Seznam' }).click();
    await expect(legenda).toHaveCount(0);
    await page.locator('.reka').getByRole('button', { name: 'Řeka' }).click();
    await expect(legenda).toBeVisible();
    if (sirka === 1280) await page.screenshot({ path: 'test-results/snimky/mapa-legenda-1280-svetly.png' });
  }
});

test('mapa · výběr člověka zvýrazní jeho vztahy v řece a ostatní potlačí', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const oblouky = async () => {
    // Při omezeném pohybu trvá každý přechod 0,01 ms: hodnoty čteme, až doběhne.
    await page.waitForFunction(() => document.getAnimations().length === 0);
    return page.locator('.reka .oblouk').evaluateAll((c) => c.map((p) => {
      const s = getComputedStyle(p);
      return { popis: p.querySelector('title')!.textContent!, vybrany: p.classList.contains('oblouk--vybrany'), pruhlednost: Number(s.opacity), tloustka: parseFloat(s.strokeWidth) };
    }));
  };
  // Bez výběru jsou všechny čáry stejně tlumené.
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  const bez = await oblouky();
  expect(bez.length).toBeGreaterThan(5);
  expect(bez.filter((o) => o.vybrany)).toEqual([]);
  for (const o of bez) expect(o.pruhlednost).toBeLessThanOrEqual(0.4);

  // Výběr Platóna: jeho čáry plně a silněji, ostatní zůstávají tlumené.
  await page.locator('.reka').getByRole('button', { name: /^Platón,/ }).click();
  await expect(page.locator('#karta-jmeno')).toHaveText('Platón');
  const s = await oblouky();
  const jeho = s.filter((o) => o.vybrany);
  const ostatni = s.filter((o) => !o.vybrany);
  expect(jeho.length).toBeGreaterThanOrEqual(3);
  expect(ostatni.length).toBeGreaterThan(0);
  for (const o of jeho) {
    expect(o.popis).toContain('Platón');
    expect(o.pruhlednost).toBe(1);
  }
  for (const o of ostatni) {
    expect(o.popis).not.toContain('Platón');
    expect(o.pruhlednost).toBeLessThanOrEqual(0.4);
    expect(o.tloustka).toBeLessThan(jeho[0].tloustka);
  }
  expect(jeho.map((o) => o.popis)).toEqual(expect.arrayContaining(['Sókratés → Platón: učitel a žák', 'Platón → Aristotelés: učitel a žák']));
  // Jiný výběr zvýraznění přesune.
  await page.locator('.reka').getByRole('button', { name: /^Diogenés,/ }).click();
  const d = await oblouky();
  expect(d.filter((o) => o.vybrany).length).toBeGreaterThan(0);
  for (const o of d.filter((x) => x.vybrany)) expect(o.popis).toContain('Diogenés');
  // Zavření karty zvýraznění zruší.
  await page.getByRole('button', { name: 'Zavřít kartu' }).click();
  expect((await oblouky()).filter((o) => o.vybrany)).toEqual([]);
});

test('mapa · posuvník: událost, které se nevešel název, má jen krátkou čárku v pásu událostí a název ukáže při fokusu', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  const proces = page.locator('.kotvy button[title^="Sókratův proces"]');
  const valka = page.locator('.kotvy button[title^="Peloponéská válka"]');
  // Název Peloponéské války stojí hned vedle: Sókratův proces se nevejde a nesmí zbýt vysoká čára, která vypadá jako překlep.
  await expect(valka.locator('.kotva__text')).toBeVisible();
  await expect(proces.locator('.kotva__text')).toBeHidden();
  const carka = (await proces.locator('.kotva__znak').boundingBox())!;
  const pruh = (await valka.locator('.kotva__znak').boundingBox())!;
  const nazev = (await valka.locator('.kotva__text').boundingBox())!;
  expect(carka.height).toBeLessThanOrEqual(10);
  // Čárka leží ve výšce pruhů delších událostí, pod řádkem s názvy.
  expect(carka.y).toBeGreaterThanOrEqual(nazev.y + nazev.height - 2);
  expect(carka.y).toBeLessThanOrEqual(pruh.y);
  expect(carka.y + carka.height).toBeGreaterThanOrEqual(pruh.y + pruh.height);
  // Cíl pro myš není široký jen jako čárka.
  expect((await proces.boundingBox())!.width).toBeGreaterThanOrEqual(12);
  // Název se ukáže při fokusu z klávesnice a Enter skočí na rok události.
  await proces.focus();
  await expect(proces.locator('.kotva__text')).toBeVisible();
  await expect(proces.locator('.kotva__text')).toHaveText('Sókratův proces');
  await page.screenshot({ path: 'test-results/snimky/mapa-udalost-bez-nazvu-1440-svetly.png', clip: { x: 0, y: 520, width: 1032, height: 90 } });
  await page.keyboard.press('Enter');
  await expect(page.getByRole('slider', { name: 'Rok' })).toHaveAttribute('aria-valuenow', '-399');

  // Kde se název vejde (1280 px), stojí u něj dál vysoká svislá značka.
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/mapa/?rok=-360');
  await pripravit(page);
  await expect(proces.locator('.kotva__text')).toBeVisible();
  expect((await proces.locator('.kotva__znak').boundingBox())!.height).toBeGreaterThanOrEqual(20);
});
