// Stránky velkých otázek 7 a 1: první názor → hlasy na časové ose → cesty → Změnil se?
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
  await expect(page.locator('.odpoved__jmeno')).toHaveText(['Parmenidés', 'Prótagorás', 'Sókratés', 'Aristotelés', 'Epikúros']);
  await expect(page.locator('.oddil__nad').first()).toHaveText('Tentýž případ, pět odpovědí');
  await expect(page.locator('.odpoved').first()).toContainText('Ani babičce, ani učitelce.');
  // Epikúros přibyl s profilem: rozhodují smysly, ne rozum ani zvyk.
  await expect(page.locator('.odpoved').last()).toContainText('O pravdě rozhodují smysly');
  await page.keyboard.press('Tab');
  await expect(page.locator('.odpoved__odkaz').first()).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#hlas-parmenides$/);
  await expect(page.locator('#hlas-parmenides')).toBeInViewport();
  await expect(page.locator('.hlas__jmeno')).toHaveText(['Parmenidés', 'Prótagorás', 'Sókratés', 'Aristotelés', 'Epikúros']);
  await expect(page.locator('#hlas-protagoras')).toContainText('jako lékař');
  await expect(page.locator('#hlas-epikuros')).toContainText('Rozum podle něj žádný vjem vyvrátit nemůže, protože sám na vjemech závisí.');
  // Odkaz na profil jen tam, kde profil je.
  await expect(page.locator('.hlas__jmeno a')).toHaveText(['Prótagorás', 'Sókratés', 'Epikúros']);
  // Epikúrova věta je výklad bez citátu.
  await expect(page.locator('.hlas .citat')).toHaveCount(4);
  await expect(page.locator('#hlas-epikuros .citat')).toHaveCount(0);
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
  await expect(page.locator('.hlas')).toHaveCount(5);
  await kontext.close();
});

test('přehled otázek vede na stránky otázek 7 a 1, ostatní zůstávají v přehledu', async ({ page }) => {
  await page.goto('/otazky/');
  await page.getByRole('link', { name: 'Jak poznám, co je pravda?' }).click();
  await expect(page).toHaveURL(ADRESA);
  await page.goto('/otazky/');
  await page.getByRole('link', { name: 'Jak mám žít?' }).click();
  await expect(page).toHaveURL('/otazka/jak-zit/');
  await page.goto('/otazky/');
  await expect(page.locator('#co-je-spravne a')).toHaveCount(0);
});

test('otázka 1: úvodní případ, čtyři hlasy, které se poznají, a cesta 6', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/otazka/jak-zit/');
  await hydratovano(page, 'PrvniNazor');
  await expect(page.locator('h1')).toHaveText('Jak mám žít?');
  // Úvod je vymyšlená situace bez historických osob a končí otázkami.
  const uvod = page.locator('.uvod');
  await expect(uvod).toContainText('Představ si, že máš na léto dvě nabídky.');
  await expect(uvod).not.toContainText(/Epikúr|Diogen|Senec|Aristotel/);
  await expect(uvod.locator('p').last()).toContainText('?');
  // Nejdřív student: hlasy se ukážou až po prvním názoru.
  await expect(page.locator('#jak-zit-po')).toBeHidden();
  await page.locator('#jak-zit-prvni-pole').focus();
  await page.keyboard.type('Vzal bych tábor, peníze počkají.');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await expect(page.locator('#jak-zit-hlasy-nadpis')).toBeFocused();
  await expect(page.locator('#jak-zit-hlasy-nadpis')).toHaveText('Sklad, nebo tábor?');
  await expect(page.locator('.oddil__nad').first()).toHaveText('Tentýž případ, čtyři odpovědi');
  // Pořadí podle narození.
  await expect(page.locator('.odpoved__jmeno')).toHaveText(['Diogenés', 'Aristotelés', 'Epikúros', 'Seneca']);
  const odpovedi = page.locator('.odpoved');
  // Každý hlas se pozná: zpochybněná volba, činnost a nástroje, klid a přátelé, kdo komu slouží.
  await expect(odpovedi.nth(0)).toContainText('Ptáš se špatně');
  await expect(odpovedi.nth(1)).toContainText('štěstí je činnost, ne pocit');
  await expect(odpovedi.nth(1)).toContainText('jen jako nástroj');
  await expect(odpovedi.nth(2)).toContainText('Zbytek léta stráv s přáteli');
  await expect(odpovedi.nth(3)).toContainText('kdo komu slouží');
  for (let i = 0; i < 4; i++) {
    const vet = (await odpovedi.nth(i).locator('.odpoved__text').innerText()).split(/(?<=[.?!])\s+/).length;
    expect(vet).toBeLessThanOrEqual(2);
  }
  await expect(page.locator('.hlas__jmeno')).toHaveText(['Diogenés', 'Aristotelés', 'Epikúros', 'Seneca']);
  // Odkaz na profil jen tam, kde profil je.
  await expect(page.locator('.hlas__jmeno a')).toHaveText(['Diogenés', 'Epikúros']);
  await expect(page.locator('.hlas .citat')).toHaveCount(4);
  await expect(page.locator('#hlas-aristoteles .citat')).toContainText('Jedna vlaštovka jaro nedělá');
  await expect(page.locator('#hlas-diogenes .citat')).toContainText('medové koláčky');
  await expect(page.locator('#hlas-epikuros .citat')).toContainText('rozumně, čestně a spravedlivě');
  await expect(page.locator('#hlas-seneca .citat')).toContainText('U moudrého slouží bohatství jemu');
  // U Seneky jedna věta o jeho bohatství; scéna s Neronem zůstává portrétu.
  await expect(page.locator('#hlas-seneca')).toContainText('Seneca sám byl velmi bohatý');
  await expect(page.locator('#hlas-seneca')).not.toContainText(/Nero|sesterci/);
  // Diogenés bez scén z profilu, citáty z profilů se neopakují.
  await expect(page.locator('#jak-zit-po')).not.toContainText(/pohárek|lucern|lamp|kohout|občan světa|Ječná placka|Tělo volá/i);
  await expect(page.locator('.cesta-karta')).toHaveAttribute('href', '/cesta/kolik-je-dost/');
  await axe(page);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
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

test('profily Epikúra a Diogena vedou na cestu 6 a na stránku otázky 1; karta cesty stojí za kapitolou Pověst', async ({ page }) => {
  for (const id of ['epikuros', 'diogenes']) {
    await page.goto(`/osobnost/${id}/`);
    const kamDal = page.getByRole('navigation', { name: 'Kam dál' });
    await expect(kamDal.getByRole('link', { name: /Cesta 6\s*Kolik je dost\?/ })).toHaveAttribute('href', '/cesta/kolik-je-dost/');
    await expect(kamDal.getByRole('link', { name: /Velká otázka 1\s*Jak mám žít\?/ })).toHaveAttribute('href', '/otazka/jak-zit/');
    await expect(page.locator('a[href="/otazky/#jak-zit"]')).toHaveCount(0);
  }
  await page.goto('/osobnost/epikuros/');
  const karta = page.locator('#povest .cesta-karta');
  await expect(karta).toHaveAttribute('href', '/cesta/kolik-je-dost/');
  await expect(karta).toContainText('Pokračuj cestou');
  await expect(page.locator('.cesta-karta')).toHaveCount(1);
  // Diogenův profil kartu nemá: jeho cesta 7 teprve vznikne.
  await page.goto('/osobnost/diogenes/');
  await expect(page.locator('.cesta-karta')).toHaveCount(0);
});

test('vstupy: cesta a otázky jsou v hlavičce profilu, cesty u otázek v přehledu a na kartách v Lidech', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  // Hlavička profilu: cesta jako první a nejvýraznější vstup, nad kapitolami; otázka její cesty před ostatními.
  await page.goto('/osobnost/epikuros/');
  const vstupy = page.getByRole('navigation', { name: 'Cesty a otázky, kde potkáš Epikúra' });
  await expect(vstupy.getByRole('link')).toHaveText([/Cesta 6 · 7 kroků · asi 20 minut\s*Kolik je dost\?/, /Velká otázka 1\s*Jak mám žít\?/, /Velká otázka 7\s*Jak poznám, co je pravda\?/]);
  await expect(vstupy.getByRole('link').first()).toHaveAttribute('href', '/cesta/kolik-je-dost/');
  const cesta = (await vstupy.getByRole('link').first().boundingBox())!;
  const kapitoly = (await page.getByRole('navigation', { name: 'Kapitoly' }).boundingBox())!;
  expect(cesta.y).toBeLessThan(kapitoly.y);
  // Na telefonu je cesta vidět bez posouvání a je dost velká na prst.
  expect(cesta.y + cesta.height).toBeLessThan(844);
  expect(cesta.height).toBeGreaterThanOrEqual(56);
  for (const o of await vstupy.getByRole('link').all()) expect((await o.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await vstupy.getByRole('link').first().click();
  await expect(page).toHaveURL('/cesta/kolik-je-dost/');

  await page.goto('/osobnost/diogenes/');
  await expect(page.locator('.vstupy-osoby a')).toHaveText([/Cesta 6[\s\S]*Kolik je dost\?/, /Velká otázka 1\s*Jak mám žít\?/]);
  await page.goto('/osobnost/sokrates/');
  await expect(page.locator('.vstupy-osoby a')).toHaveText([/Cesta 1[\s\S]*Kdy mám dobrý důvod věřit\?/, /Velká otázka 7\s*Jak poznám, co je pravda\?/]);

  // Přehled otázek: u otázky stojí cesty, které k ní vedou, i když otázka ještě nemá vlastní stránku.
  await page.goto('/otazky/');
  await expect(page.locator('#jak-zit .cesta')).toHaveText(/Cesta 6\s*Kolik je dost\?/);
  await expect(page.locator('#jak-zit .cesta')).toHaveAttribute('href', '/cesta/kolik-je-dost/');
  await expect(page.locator('#jak-poznam-pravdu .cesta')).toHaveAttribute('href', '/cesta/kdy-mam-dobry-duvod-verit/');
  await expect(page.locator('#co-je-spravne .cesta')).toHaveCount(0);
  expect((await page.locator('#jak-zit .cesta').boundingBox())!.height).toBeGreaterThanOrEqual(44);

  // Lidé: karta člověka s profilem říká, která cesta k němu patří.
  await page.goto('/lide/');
  await expect(page.locator('#epikuros .karta__cesta')).toHaveText('Cesta 6: Kolik je dost?');
  await expect(page.locator('#diogenes .karta__cesta')).toHaveText('Cesta 6: Kolik je dost?');
  await expect(page.locator('#sokrates .karta__cesta')).toHaveText('Cesta 1: Kdy mám dobrý důvod věřit?');
  await expect(page.locator('#seneca .karta__cesta')).toHaveCount(0);
});

test('vstupy v hlavičce profilu: tlačítka otázek jsou na telefonu stejně vysoká', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/osobnost/epikuros/');
  await page.evaluate(() => document.fonts.ready);
  // Kratší otázka zůstávala na jednom řádku s nadtitulkem, delší se zalomila: dvě tlačítka pod sebou vypadala každé jinak.
  const vysky = await page.locator('.vstup--otazka').evaluateAll((e) => e.map((x) => Math.round(x.getBoundingClientRect().height)));
  expect(vysky).toHaveLength(2);
  expect(vysky[0]).toBe(vysky[1]);
});
