// Ukázková cesta 1: přehled, šest kroků, soustředěná hlavička a lišta Předchozí / Další,
// Kam dál z bloků, Pokračuj na Domů a v deníku. Každý krok na 390 a 1440 px ve světlém
// i tmavém režimu s axe, bez vodorovného posouvání a se snímky.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const CESTA = '/cesta/kdy-mam-dobry-duvod-verit/';
const KROKY = ['Odpověď z Delf', 'Jak bys to zjišťoval ty?', 'Politik, básníci, řemeslníci', 'Podle čeho to poznáš?', 'Zpráva ve skupině', 'Tvoje pravidlo'];

async function pripravit(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await expect(page.locator('astro-island[ssr]')).toHaveCount(0);
}

async function axe(page: Page) {
  const v = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  const popis = v.violations.map((x) => `${x.id}: ${x.help}\n  ${x.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
  expect(popis, popis.join('\n')).toEqual([]);
}

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    test(`cesta · přehled a kroky · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const r = rezim === 'light' ? 'svetly' : 'tmavy';
      await page.goto(CESTA);
      await pripravit(page);
      await expect(page.locator('h1')).toHaveText('Kdy mám dobrý důvod věřit?');
      await axe(page);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
      await page.addStyleTag({ content: 'nav.lista { position: static !important; }' });
      await page.screenshot({ path: `test-results/snimky/cesta-prehled-${sirka}-${r}.png`, fullPage: true });
      for (let n = 1; n <= KROKY.length; n++) {
        await page.goto(`${CESTA}${n}/`);
        await pripravit(page);
        await expect(page.locator('h1')).toHaveText(KROKY[n - 1]);
        await expect(page.getByRole('link', { name: `Krok ${n}: ${KROKY[n - 1]}` })).toHaveAttribute('aria-current', 'step');
        await axe(page);
        expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
        await page.addStyleTag({ content: '.cesta-lista, .cesta-hlavicka { position: static !important; }' });
        await page.screenshot({ path: `test-results/snimky/cesta-krok${n}-${sirka}-${r}.png`, fullPage: true });
      }
    });
  }
}

test('cesta: průchod, Kam dál z bloku, lišta Další, Pokračuj na Domů a v deníku', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  // Vstup z Domů.
  await page.goto('/');
  await page.getByRole('link', { name: /Kdy mám dobrý důvod věřit\?/ }).first().click();
  await expect(page).toHaveURL(CESTA);
  await pripravit(page);
  await page.getByRole('link', { name: 'Začít cestu' }).click();
  await expect(page).toHaveURL(`${CESTA}1/`);
  await expect(page.locator('.postup-text')).toHaveText('Krok 1 z 6');
  // Lišta: Další krok.
  await page.getByRole('link', { name: /Další krok/ }).click();
  await expect(page).toHaveURL(`${CESTA}2/`);
  await pripravit(page);
  const volba = page.locator('#cesta1-jak-zjistit');
  await volba.getByText('Najdu lidi').click();
  await volba.getByRole('button', { name: 'Tohle je můj tah' }).click();
  // Kam dál z bloku vede na další krok.
  const dal = volba.getByRole('navigation', { name: 'Kam dál' }).getByRole('link', { name: 'Další krok: Politik, básníci, řemeslníci' });
  await expect(dal).toHaveAttribute('href', `${CESTA}3/`);
  await dal.click();
  await expect(page).toHaveURL(`${CESTA}3/`);
  await expect(page.locator('.citat, blockquote').first()).toContainText('Já nevím, ale ani si nemyslím, že vím.');

  // Domů nabídne pokračování v cestě.
  await page.goto('/');
  const pokracuj = page.getByRole('navigation', { name: 'Pokračuj, kde jsi skončil' });
  await expect(pokracuj.getByRole('link').first()).toContainText('Kdy mám dobrý důvod věřit?');
  await expect(pokracuj.getByRole('link').first()).toContainText('Krok 3 z 6');
  await expect(pokracuj.getByRole('link').first()).toHaveAttribute('href', `${CESTA}3/`);

  // Přehled cesty ukáže prošlé kroky a nabídne pokračovat.
  await page.goto(CESTA);
  await pripravit(page);
  await expect(page.getByRole('link', { name: 'Pokračovat: krok 3' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Jak bys to zjišťoval ty\? \(prošel jsi\)/ })).toBeVisible();

  // Deník: rozpracovaná cesta a zápis z Volby.
  await page.goto('/denik/');
  await expect(page.locator('.seznam--rozpracovane')).toContainText('Kdy mám dobrý důvod věřit?');
  await expect(page.locator('.seznam--rozpracovane')).toContainText('krok 3 z 6');
  await expect(page.locator('.seznam--zapisy')).toContainText('B · Najdu lidi, kteří mají pověst moudrých, a vyzkouším je.');

  // Projít zbytek a dokončit.
  for (const n of [4, 5, 6]) {
    await page.goto(`${CESTA}${n}/`);
    await pripravit(page);
  }
  await page.getByRole('link', { name: 'Dokončit cestu' }).click();
  await expect(page).toHaveURL(`${CESTA}#hotovo`);
  await expect(page.getByRole('status')).toContainText('Cestu jsi prošel celou.');
});

test('cesta: klávesnice v hlavičce a liště; rozpracovaná otázka v Pokračuj', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${CESTA}5/`);
  await pripravit(page);
  await page.keyboard.press('Tab'); // Přeskočit na obsah
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: /Zpět na přehled cesty/ })).toBeFocused();
  // Změň jednu věc: jen první rozhodnutí, bez změny podmínky = rozpracovaná otázka.
  const z = page.locator('#cesta1-zprava-ve-skupine');
  await z.getByRole('radio', { name: 'Nejdřív si to ověřím.' }).focus();
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await expect(z.getByRole('radio', { name: 'Potvrdí to deset lidí' })).toBeFocused();
  await page.goto('/');
  const pokracuj = page.getByRole('navigation', { name: 'Pokračuj, kde jsi skončil' });
  await expect(pokracuj).toContainText('Přijdeš zítra později?');
  await expect(pokracuj.getByRole('link', { name: /Přijdeš zítra později\?/ })).toHaveAttribute('href', `${CESTA}5/#cesta1-zprava-ve-skupine`);
});
