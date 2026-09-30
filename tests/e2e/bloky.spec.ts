// Knihovna bloků na stránce /dilna/bloky/: každý blok na šířce 390 a 1440 px ve světlém i tmavém režimu.
// Hlavní scénář studenta jen klávesnicí → axe (WCAG 2 AA) → snímek → obnovení stránky zachová, co má.
// Navíc: ovládání dotykem, zápisy v deníku, odkaz do Mapy a času, noindex dílny a Sókratův profil.
import { test, expect, type Page, type Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const STRANKA = '/dilna/bloky/';
const SIRKY = [
  { sirka: 390, vyska: 844 },
  { sirka: 1440, vyska: 900 },
];
const REZIMY = ['light', 'dark'] as const;

/** Počká na písma a hydrataci ostrovu v bloku (client:visible se hydratuje až po posunu k němu). */
async function pripravBlok(page: Page, id: string, ostrov?: string): Promise<Locator> {
  await page.evaluate(() => document.fonts.ready);
  const blok = page.locator(`[id="${id}"]`);
  await blok.scrollIntoViewIfNeeded();
  if (ostrov) {
    const obal = page.locator(`astro-island[component-url*="${ostrov}"]`).filter({ has: blok });
    await expect(obal).not.toHaveAttribute('ssr', /.*/);
  }
  return blok;
}

async function axe(page: Page, vyber: string) {
  const v = await new AxeBuilder({ page }).include(vyber).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  const popis = v.violations.map((x) => `${x.id}: ${x.help}\n  ${x.nodes.slice(0, 5).map((n) => `${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`).join('\n  ')}`);
  expect(popis, popis.join('\n')).toEqual([]);
}

async function bezPresahu(page: Page) {
  const presah = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(presah).toBeLessThanOrEqual(0);
}

async function snimek(page: Page, blok: Locator, nazev: string, sirka: number, rezim: string) {
  // Pevná hlavička by na snímku prvku mohla překrýt jeho horní okraj.
  await page.addStyleTag({ content: 'header.hlavicka, nav.lista { visibility: hidden !important; }' });
  await blok.screenshot({ path: `test-results/snimky/blok-${nazev}-${sirka}-${rezim === 'light' ? 'svetly' : 'tmavy'}.png`, animations: 'disabled' });
}

async function obnov(page: Page) {
  await page.reload();
}

/** Scénáře bloků: `hraj` projde blok jen klávesnicí, `poObnoveni` ověří stav po reloadu. */
const BLOKY: {
  nazev: string;
  id: string;
  ostrov?: string;
  hraj: (page: Page, blok: Locator) => Promise<void>;
  poObnoveni: (page: Page, blok: Locator) => Promise<void>;
}[] = [
  {
    nazev: 'pribeh',
    id: 'delfy-pribeh',
    hraj: async (_page, blok) => {
      await expect(blok.locator('h3')).toHaveText('Nikdo není moudřejší.');
      await expect(blok.locator('h3 em')).toHaveText('moudřejší.');
      await expect(blok.locator('figcaption')).toContainText('Chairefón');
      await expect(blok.locator('.mince')).toHaveAttribute('aria-label', 'Sókratés · kalich');
      // Bez interakce: nic, na co by šlo tabulátorem.
      await expect(blok.locator('a, button, input, textarea')).toHaveCount(0);
    },
    poObnoveni: async (_page, blok) => {
      await expect(blok.locator('.pribeh__scena p').first()).toContainText('Chairefón');
    },
  },
  {
    nazev: 'volba',
    id: 'cesta1-jak-zjistit',
    ostrov: 'Volba',
    hraj: async (page, blok) => {
      await expect(blok.getByRole('button', { name: 'Tohle je můj tah' })).toBeDisabled();
      await expect(blok.getByRole('region', { name: 'Zpětná vazba' })).toHaveCount(0);
      await blok.getByRole('radio').first().focus();
      await page.keyboard.press('Space');
      await page.keyboard.press('ArrowDown');
      await expect(blok.getByRole('radio', { name: /Najdu lidi/ })).toBeChecked();
      await page.keyboard.press('Tab');
      await expect(blok.getByLabel(/Proč právě tohle/)).toBeFocused();
      await page.keyboard.type('Jeden protipříklad stačí');
      await page.keyboard.press('Tab');
      await expect(blok.getByRole('button', { name: 'Tohle je můj tah' })).toBeFocused();
      await page.keyboard.press('Enter');
      const zpetna = blok.getByRole('region', { name: 'Zpětná vazba' });
      await expect(zpetna).toBeFocused();
      await expect(zpetna).toContainText('Tvůj tah: hledat protipříklad.');
      await expect(zpetna.getByRole('heading', { name: 'Co udělal Sókratés' })).toBeVisible();
      await expect(zpetna).toContainText('Šel stejnou cestou jako ty.');
      // Ostatní tahy jdou rozbalit klávesnicí.
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(blok.locator('details.ostatni')).toHaveAttribute('open', '');
      await expect(blok.locator('details.ostatni')).toContainText('Tah: věřit autoritě.');
    },
    poObnoveni: async (_page, blok) => {
      await expect(blok.getByRole('radio', { name: /Najdu lidi/ })).toBeChecked();
      await expect(blok.getByRole('region', { name: 'Zpětná vazba' })).toContainText('Tvůj tah: hledat protipříklad.');
      await expect(blok.locator('.tvuj-duvod')).toContainText('Jeden protipříklad stačí');
    },
  },
  {
    nazev: 'odkryj',
    id: 'dilna-kdo-je-moudry',
    ostrov: 'Odkryj',
    hraj: async (page, blok) => {
      await expect(blok.getByRole('region', { name: 'Srovnání' })).toHaveCount(0);
      await blok.locator('textarea').focus();
      await page.keyboard.type('Kdo ví, kde jeho vědění končí.');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const srovnani = blok.getByRole('region', { name: 'Srovnání' });
      await expect(srovnani).toBeFocused();
      await expect(srovnani).toContainText('kde jeho vědění končí');
      await expect(srovnani.getByRole('heading', { name: 'Jak se dá odpovědět' })).toBeVisible();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');
      await expect(blok.getByRole('checkbox').first()).toBeChecked();
      await expect(blok.getByText('Tvoje odpověď je uložená v deníku.')).toBeVisible();
    },
    poObnoveni: async (_page, blok) => {
      await expect(blok.locator('textarea')).toHaveValue('Kdo ví, kde jeho vědění končí.');
      await expect(blok.getByRole('region', { name: 'Srovnání' })).toBeVisible();
      await expect(blok.getByRole('checkbox').first()).toBeChecked();
      await expect(blok.getByRole('checkbox').nth(1)).not.toBeChecked();
    },
  },
  {
    nazev: 'zmen-jednu-vec',
    id: 'utek-z-vezeni',
    ostrov: 'ZmenJednuVec',
    hraj: async (page, blok) => {
      await blok.getByRole('radio', { name: 'Uteču.' }).focus();
      await page.keyboard.press('Space');
      await page.keyboard.press('Tab');
      await expect(blok.getByRole('button', { name: 'Rozhodnuto' })).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(blok.locator('.rozhodnuti')).toContainText('Uteču.');
      // Fokus přešel na přepínač podmínek.
      await expect(blok.getByRole('radio', { name: 'Rozsudek je spravedlivý' })).toBeFocused();
      await page.keyboard.press('Space');
      await expect(blok.locator('.zmenena')).toContainText('soud byl poctivý');
      await page.keyboard.press('Tab');
      await page.keyboard.press('ArrowRight');
      await expect(blok.locator('.zmenena').getByRole('radio', { name: 'Zůstanu.' })).toBeChecked();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const posun = blok.getByRole('region', { name: 'Posun odpovědi' });
      await expect(posun).toBeFocused();
      await expect(posun).toContainText('Tvoje odpověď se posunula.');
      await expect(posun.locator('.posun')).toContainText('Předtím Uteču.');
      await expect(posun.locator('.posun')).toContainText('Teď Zůstanu.');
      await expect(blok.getByRole('heading', { name: 'Co udělal Sókratés' })).toBeVisible();
      // Druhá podmínka: stejná odpověď jako na začátku.
      await blok.getByRole('radio', { name: 'Nikdo se to nedozví' }).focus();
      await page.keyboard.press('Space');
      await page.keyboard.press('Tab');
      await expect(blok.locator('.zmenena').getByRole('radio', { name: 'Uteču.' })).toBeFocused();
      await page.keyboard.press('Space');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(blok.getByRole('region', { name: 'Posun odpovědi' })).toContainText('Tvoje odpověď zůstala stejná.');
    },
    poObnoveni: async (_page, blok) => {
      await expect(blok.locator('.rozhodnuti')).toContainText('Uteču.');
      await expect(blok.getByRole('radio', { name: 'Nikdo se to nedozví' })).toBeChecked();
      await expect(blok.getByRole('region', { name: 'Posun odpovědi' })).toContainText('zůstala stejná');
      await blok.getByText('Rozsudek je spravedlivý').click();
      await expect(blok.getByRole('region', { name: 'Posun odpovědi' })).toContainText('se posunula');
    },
  },
  {
    nazev: 'spor',
    id: 'platon-diogenes-skutecnost',
    ostrov: 'Spor',
    hraj: async (page, blok) => {
      await expect(blok.getByRole('radio')).toHaveCount(5);
      await blok.getByRole('radio').first().focus();
      await page.keyboard.press('ArrowRight');
      await expect(blok.getByRole('radio', { name: 'spíš Platón' })).toBeChecked();
      await expect(blok.locator('.skala__stav')).toHaveText('Stojíš: spíš Platón');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const argumenty = blok.getByRole('region', { name: 'Argumenty obou stran' });
      await expect(argumenty).toBeFocused();
      await expect(argumenty).toContainText('neměnné ideje');
      await expect(argumenty.getByRole('heading', { name: 'Diogenés' })).toBeVisible();
      // Druhá škála začíná na první poloze; posun o krok doprava.
      await page.keyboard.press('Tab');
      await expect(blok.getByRole('radio', { name: 'spíš Platón (tady jsi začal)' })).toBeFocused();
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('Tab');
      await page.keyboard.type('obě strany mají něco');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const posun = blok.getByRole('region', { name: 'Tvůj posun' });
      await expect(posun).toBeFocused();
      await expect(posun).toContainText('Začal jsi: spíš Platón. Teď: uprostřed.');
      await expect(posun).toContainText('ke straně, kterou hájí Diogenés');
      await expect(posun).not.toContainText(/správn|špatn/i);
    },
    poObnoveni: async (_page, blok) => {
      await expect(blok.getByRole('region', { name: 'Tvůj posun' })).toContainText('Začal jsi: spíš Platón. Teď: uprostřed.');
      await expect(blok.getByRole('radio', { name: /^uprostřed/ })).toBeChecked();
    },
  },
  {
    nazev: 'kdo-zil-driv',
    id: 'kdo-sokrates-diogenes-poradi',
    ostrov: 'KdoZilDriv',
    hraj: async (page, blok) => {
      await expect(blok.getByRole('button', { name: 'Odhalit' })).toBeDisabled();
      await blok.getByRole('radio').first().focus();
      await page.keyboard.press('Space');
      await expect(blok.getByRole('radio', { name: 'Sókratés' })).toBeChecked();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      const odhaleni = blok.getByRole('region', { name: 'Odhalení' });
      await expect(odhaleni).toBeFocused();
      await expect(odhaleni).toContainText('Žili současně asi 13 let.');
      await expect(odhaleni).toContainText('Sókratés se opravdu narodil dřív. Jejich životy se ale překrývají.');
      await expect(odhaleni).toContainText('Když Sókratés zemřel (399 př. n. l.), žil Diogenés na světě asi 13 let.');
      await expect(blok.getByRole('link', { name: 'Ukázat na mapě v roce 399 př. n. l.' })).toHaveAttribute(
        'href', '/mapa/?rok=-399&osoba=sokrates&srovnat=diogenes',
      );
      // Vzdálenost: posuvník klávesnicí.
      const druhy = await pripravBlok(page, 'kdo-platon-diogenes-vzdalenost', 'KdoZilDriv');
      await druhy.getByRole('radio', { name: 'Žili současně' }).focus();
      await page.keyboard.press('Space');
      await page.keyboard.press('Tab');
      await expect(druhy.getByRole('slider')).toBeFocused();
      for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowLeft');
      await expect(druhy.locator('output')).toHaveText('30 let');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await expect(druhy.getByRole('region', { name: 'Odhalení' })).toContainText('Tipoval jsi, že žili současně 30 let. Ve skutečnosti je to o 35 let víc.');
      await blok.scrollIntoViewIfNeeded();
    },
    poObnoveni: async (page, blok) => {
      await expect(blok.getByRole('region', { name: 'Odhalení' })).toContainText('Žili současně asi 13 let.');
      const druhy = await pripravBlok(page, 'kdo-platon-diogenes-vzdalenost', 'KdoZilDriv');
      await expect(druhy.locator('output')).toHaveText('30 let');
      await expect(druhy.getByRole('region', { name: 'Odhalení' })).toContainText('asi 65 let');
    },
  },
];

for (const b of BLOKY) {
  for (const { sirka, vyska } of SIRKY) {
    for (const rezim of REZIMY) {
      test(`blok ${b.nazev} · ${sirka} px · ${rezim === 'light' ? 'světlý' : 'tmavý'}`, async ({ page }) => {
        await page.setViewportSize({ width: sirka, height: vyska });
        await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
        await page.goto(STRANKA);
        let blok = await pripravBlok(page, b.id, b.ostrov);
        await axe(page, `[id="${b.id}"]`);
        await b.hraj(page, blok);
        await bezPresahu(page);
        await axe(page, `[id="${b.id}"]`);
        await snimek(page, blok, b.nazev, sirka, rezim);

        await obnov(page);
        blok = await pripravBlok(page, b.id, b.ostrov);
        await b.poObnoveni(page, blok);
      });
    }
  }
}

test('dílna: noindex, mimo hledání a navigaci; celá stránka projde axe', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(STRANKA);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.locator('main')).not.toHaveAttribute('data-pagefind-body', /.*/);
  await expect(page.locator('header a[href^="/dilna"], nav a[href^="/dilna"]')).toHaveCount(0);
  await axe(page, 'main');
});

test('dotyk: volba a spor jdou ovládat klepnutím (telefon)', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.goto(STRANKA);
  const volba = await pripravBlok(page, 'cesta1-jak-zjistit', 'Volba');
  await volba.getByText('Uvěřím. Věštírna mluví za boha a bůh nelže.').tap();
  await volba.getByRole('button', { name: 'Tohle je můj tah' }).tap();
  await expect(volba.getByRole('region', { name: 'Zpětná vazba' })).toContainText('Tvůj tah: věřit autoritě.');
  await expect(volba.getByRole('region', { name: 'Zpětná vazba' })).toContainText('Šel jinou cestou');
  const spor = await pripravBlok(page, 'platon-diogenes-skutecnost', 'Spor');
  const body = spor.locator('.stop');
  const velikost = await body.first().boundingBox();
  expect(velikost!.width).toBeGreaterThanOrEqual(44);
  expect(velikost!.height).toBeGreaterThanOrEqual(44);
  await body.nth(4).tap();
  await spor.getByRole('button', { name: 'Tady stojím' }).tap();
  await spor.locator('.stop').nth(4).tap();
  await spor.getByRole('button', { name: 'Zapsat konečnou polohu' }).tap();
  await expect(spor.getByRole('region', { name: 'Tvůj posun' })).toContainText('Zůstal jsi tam, kde jsi začal.');
  // Dotykové cíle v blocích mají aspoň 44 px.
  const male = await page.evaluate(() =>
    [...document.querySelectorAll('.blok button, .blok label, .blok summary, .blok a')]
      .filter((e) => {
        const r = e.getBoundingClientRect();
        return r.width > 1 && r.height > 1 && r.height < 44 && !e.classList.contains('blok__popis') && !e.classList.contains('vizualne-skryte');
      })
      .map((e) => `${e.tagName} ${e.textContent?.trim().slice(0, 30)}`),
  );
  expect(male).toEqual([]);
  await ctx.close();
});

test('deník: zápisy z bloků jsou v Mém deníku, Kdo žil dřív? tam není; Začít znovu zápis smaže', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(STRANKA);
  const volba = await pripravBlok(page, 'cesta1-jak-zjistit', 'Volba');
  await volba.getByText('Zeptám se přátel').click();
  await volba.getByRole('button', { name: 'Tohle je můj tah' }).click();
  const spor = await pripravBlok(page, 'platon-diogenes-skutecnost', 'Spor');
  await spor.getByRole('radio', { name: 'Diogenés', exact: true }).check({ force: true });
  await spor.getByRole('button', { name: 'Tady stojím' }).click();
  await spor.getByRole('radio', { name: /^spíš Platón/ }).check({ force: true });
  await spor.getByRole('button', { name: 'Zapsat konečnou polohu' }).click();
  const kdo = await pripravBlok(page, 'kdo-sokrates-diogenes-poradi', 'KdoZilDriv');
  await kdo.getByText('Diogenés', { exact: true }).click();
  await kdo.getByRole('button', { name: 'Odhalit' }).click();
  await expect(kdo.getByRole('region', { name: 'Odhalení' })).toContainText('Je to naopak: dřív se narodil Sókratés.');

  await page.goto('/denik/');
  await expect(page.getByText('D · Zeptám se přátel, co si o mně myslí.')).toBeVisible();
  await expect(page.getByText('Na začátku: Diogenés. Po argumentech: spíš Platón.')).toBeVisible();
  await expect(page.locator('.seznam li')).toHaveCount(2);
  await expect(page.locator('.seznam a').first()).toHaveAttribute('href', /^\/dilna\/bloky\/#/);

  await page.goto(STRANKA);
  const znovu = await pripravBlok(page, 'cesta1-jak-zjistit', 'Volba');
  await znovu.getByRole('button', { name: 'Začít znovu' }).click();
  await expect(znovu.getByRole('radio').first()).toBeFocused();
  await expect(znovu.getByRole('button', { name: 'Tohle je můj tah' })).toBeDisabled();
  await page.goto('/denik/');
  await expect(page.locator('.seznam li')).toHaveCount(1);
});

test('Kdo žil dřív?: odkaz otevře mapu ve správném roce se srovnáním', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(STRANKA);
  const kdo = await pripravBlok(page, 'kdo-sokrates-diogenes-poradi', 'KdoZilDriv');
  await kdo.getByText('Žili ve stejné době').click();
  await kdo.getByRole('button', { name: 'Odhalit' }).click();
  await kdo.getByRole('link', { name: /Ukázat na mapě/ }).click();
  await expect(page).toHaveURL(/\/mapa\/\?rok=-399&osoba=sokrates&srovnat=diogenes/);
  await page.waitForSelector('astro-island[component-url*="MapaACas"]:not([ssr])', { state: 'attached' });
  await expect(page.locator('#karta-jmeno')).toHaveText('Sókratés');
  await expect(page.getByRole('slider', { name: 'Rok' })).toHaveAttribute('aria-valuenow', '-399');
});

test('Sókratův profil: Nejdřív sám beze změny textu a odpověď vydrží obnovení', async ({ page }) => {
  await page.goto('/osobnost/sokrates/');
  const blok = await pripravBlok(page, 'sokrates-kdo-je-moudry', 'NejdrivSam');
  await expect(blok.getByRole('button', { name: 'Porovnat se Sókratem' })).toBeVisible();
  await blok.locator('textarea').fill('Kdo umí říct: nevím.');
  await blok.getByRole('button', { name: 'Porovnat se Sókratem' }).click();
  await expect(blok.getByRole('region', { name: 'Srovnání' })).toContainText('Napsal jsi znak, podle kterého moudrost poznáš');
  await page.reload();
  const znovu = await pripravBlok(page, 'sokrates-kdo-je-moudry', 'NejdrivSam');
  await expect(znovu.locator('textarea')).toHaveValue('Kdo umí říct: nevím.');
  await expect(znovu.getByRole('region', { name: 'Srovnání' })).toBeVisible();
});
