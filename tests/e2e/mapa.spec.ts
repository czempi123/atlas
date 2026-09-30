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
