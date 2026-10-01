// Stránka velké otázky 7: první názor → hlasy na časové ose → cesty → Změnil se?
// Klávesnicí, po obnovení, s přeskočením a bez JavaScriptu; snímky na 390 a 1440 px ve světlém i tmavém režimu.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ADRESA = '/otazka/jak-poznam-pravdu/';
const PO = '#jak-poznam-pravdu-po';

async function hydratovano(page: Page, jmeno: string) {
  await page.waitForSelector(`astro-island[component-url*="${jmeno}"]:not([ssr])`, { state: 'attached' });
}

async function axe(page: Page) {
  const v = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  const popis = v.violations.map((x) => `${x.id}: ${x.help}\n  ${x.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
  expect(popis, popis.join('\n')).toEqual([]);
}

test('otázka: první názor klávesnicí, hlasy v pořadí, návrat na konci a deník', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(ADRESA);
  await hydratovano(page, 'PrvniNazor');
  await expect(page.locator('h1')).toHaveText('Jak poznám, co je pravda?');
  // Filozofové jsou skrytí, dokud student neodpoví.
  await expect(page.locator(PO)).toBeHidden();
  const ulozit = page.getByRole('button', { name: 'Uložit a ukázat filozofy' });
  await expect(ulozit).toBeDisabled();

  await page.locator('#jak-poznam-pravdu-prvni-pole').focus();
  await page.keyboard.type('Když si to můžu ověřit sám.');
  await page.keyboard.press('Tab');
  await expect(ulozit).toBeFocused();
  await page.keyboard.press('Enter');

  await expect(page.locator(PO)).toBeVisible();
  await expect(page.locator('#jak-poznam-pravdu-hlasy-nadpis')).toBeFocused();
  await expect(page.locator('#jak-poznam-pravdu-hlasy-nadpis')).toHaveText('Komu věřit?');
  // Nejdřív odpovědi všech na tentýž případ, pak rozvinutí na časové ose.
  await expect(page.locator('.odpoved__jmeno')).toHaveText(['Parmenidés', 'Prótagorás', 'Sókratés', 'Aristotelés']);
  await expect(page.locator('.odpoved').first()).toContainText('Ani babičce, ani učitelce.');
  await page.keyboard.press('Tab');
  await expect(page.locator('.odpoved__odkaz').first()).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#hlas-parmenides$/);
  await expect(page.locator('#hlas-parmenides')).toBeInViewport();
  await expect(page.locator('.hlas__jmeno')).toHaveText(['Parmenidés', 'Prótagorás', 'Sókratés', 'Aristotelés']);
  await expect(page.locator('#hlas-protagoras')).toContainText('jako lékař');
  // Odkaz na profil jen tam, kde profil je.
  await expect(page.locator('.hlas__jmeno a')).toHaveText(['Prótagorás', 'Sókratés']);
  await expect(page.locator('.hlas .citat')).toHaveCount(4);
  await expect(page.locator('.cesta-karta')).toHaveAttribute('href', '/cesta/kdy-mam-dobry-duvod-verit/');

  // Změnil se?
  const zmenil = page.locator('#zmenil-se');
  await zmenil.scrollIntoViewIfNeeded();
  await hydratovano(page, 'ZmenilSe');
  await expect(zmenil).toContainText('Když si to můžu ověřit sám.');
  await zmenil.locator('textarea').fill('Když tvrzení obstojí, i když se na něj ptám dál.');
  await zmenil.getByRole('button', { name: 'Uložit do deníku' }).click();
  const srovnani = zmenil.getByRole('region', { name: 'Na začátku a teď' });
  await expect(srovnani).toBeFocused();
  await expect(srovnani).toContainText('Na začátku');
  await expect(srovnani).toContainText('obstojí');

  // Po obnovení je vše otevřené a uložené.
  await page.reload();
  await hydratovano(page, 'PrvniNazor');
  await expect(page.locator(PO)).toBeVisible();
  await expect(page.locator('#jak-poznam-pravdu-prvni-pole')).toHaveValue('Když si to můžu ověřit sám.');
  await expect(page.locator('#jak-poznam-pravdu-prvni-pole')).toBeDisabled();

  await page.goto('/denik/');
  await expect(page.getByText('Když si to můžu ověřit sám.')).toBeVisible();
  await expect(page.getByText('Když tvrzení obstojí, i když se na něj ptám dál.')).toBeVisible();
});

test('otázka: Přeskočit ukáže filozofy bez zápisu a návrat se zeptá bez první odpovědi', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(ADRESA);
  await hydratovano(page, 'PrvniNazor');
  await page.getByRole('button', { name: 'Přeskočit' }).click();
  await expect(page.locator(PO)).toBeVisible();
  await page.locator('#zmenil-se').scrollIntoViewIfNeeded();
  await hydratovano(page, 'ZmenilSe');
  await expect(page.locator('#zmenil-se')).toContainText('Na začátku jsi neodpověděl.');
  // První názor jde dopsat i potom; tlačítko už jen ukládá.
  await page.locator('#jak-poznam-pravdu-prvni-pole').fill('Pozdě, ale přece.');
  await page.getByRole('button', { name: 'Uložit do deníku' }).first().click();
  await expect(page.locator('#zmenil-se')).toContainText('Pozdě, ale přece.');
});

test('otázka: bez JavaScriptu jsou hlasy vidět hned', async ({ browser }) => {
  const kontext = await browser.newContext({ javaScriptEnabled: false });
  const page = await kontext.newPage();
  await page.goto(ADRESA);
  await expect(page.locator(PO)).toBeVisible();
  await expect(page.locator('.hlas')).toHaveCount(4);
  await kontext.close();
});

test('přehled otázek vede na stránku otázky 7, ostatní zůstávají v přehledu', async ({ page }) => {
  await page.goto('/otazky/');
  await page.getByRole('link', { name: 'Jak poznám, co je pravda?' }).click();
  await expect(page).toHaveURL(ADRESA);
  await page.goto('/otazky/');
  await expect(page.locator('#jak-zit a')).toHaveCount(0);
});

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    test(`otázka · vyplněná · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      await page.addInitScript(() => {
        const kdy = new Date().toISOString();
        const odkaz = '/otazka/jak-poznam-pravdu/';
        localStorage.setItem('atlas-denik', JSON.stringify({
          verze: 1, vyzvy: [], navstivene: [], bloky: {}, aktivita: [], cesty: {},
          zapisy: [
            { id: 'otazka-jak-poznam-pravdu-prvni', otazka: 'Jak poznám, co je pravda? Můj první názor', odpoved: 'Když to vidím na vlastní oči.', odkaz, kdy, druh: 'stanovisko' },
            { id: 'otazka-jak-poznam-pravdu-ted', otazka: 'Jak poznám, co je pravda? Po setkání s filozofy', odpoved: 'Oči se můžou splést. Pravda je, co obstojí, když se ptám dál.', odkaz, kdy, druh: 'stanovisko' },
          ],
        }));
      });
      await page.goto(ADRESA);
      await page.evaluate(() => document.fonts.ready);
      await page.locator('#zmenil-se').scrollIntoViewIfNeeded();
      await hydratovano(page, 'ZmenilSe');
      await page.evaluate(() => window.scrollTo(0, 0));
      await expect(page.locator('#zmenil-se')).toContainText('Oči se můžou splést.');
      await axe(page);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
      await page.addStyleTag({ content: 'nav.lista { position: static !important; } .paticka { padding-bottom: 24px !important; }' });
      await page.screenshot({ path: `test-results/snimky/otazka-7-vyplnena-${sirka}-${rezim === 'light' ? 'svetly' : 'tmavy'}.png`, fullPage: true });
    });
  }
}
