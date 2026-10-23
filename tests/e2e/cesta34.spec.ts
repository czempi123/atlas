// Cesta 34 „Kam mi mizí čas?“ a kresba „Přesýpací hodiny“ (krok 3). Přehled má osm kroků a filozofy Seneku
// a Marca Aurelia; kroky se otevřou a poslední má Závěr cesty. Kresba: při omezeném pohybu leží všech 24 zrnek
// dole a horní baňka je prázdná; posuvníky nepustí víc než 24 hodin a text pod kresbou říká totéž co ona.
// S pohybem jde zastavit a zastavená ukáže výsledek kola i hned po načtení. Obě šířky ve světlém i tmavém režimu s axe. Logiku hlídá tests/data/presypaci.test.ts.
import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { HODIN, VYCHOZI_DEN, popisDne } from '../../src/lib/presypaci';

const CESTA = '/cesta/kam-mi-mizi-cas/';
const KROK = `${CESTA}3/`;
const ID = 'presypaci-hodiny';
const NAZVY_KROKU = ['Chléb pro celé město', 'Plot kolem pozemku', 'Spočítej si den', 'Pohřeb za živa', 'Kdo rozhodl?', 'Odejít, nebo ustoupit do sebe?', 'Bez volna', 'Kdo je na tvé straně'];

async function priprav(page: Page) {
  await page.goto(KROK);
  await page.evaluate(() => document.fonts.ready);
  const kresba = page.locator(`#${ID}`);
  await kresba.scrollIntoViewIfNeeded();
  await page.waitForFunction((id) => {
    const ostrov = document.getElementById(id)?.closest('astro-island');
    return !!ostrov && !ostrov.hasAttribute('ssr');
  }, ID);
  return kresba;
}

/** Viditelné popisky v kresbě se nepřekrývají a leží celé v plátně. */
async function popiskyVolne(kresba: Locator) {
  const chyby = await kresba.locator('svg.kresba__platno').evaluate((svg) => {
    const platno = svg.getBoundingClientRect();
    const r = [...svg.querySelectorAll('text')].map((t) => ({ t: t.textContent, b: t.getBoundingClientRect() }));
    const ven: string[] = [];
    r.forEach((a, i) => {
      if (a.b.left < platno.left || a.b.right > platno.right || a.b.top < platno.top || a.b.bottom > platno.bottom) ven.push(`mimo plátno: ${a.t}`);
      for (const b of r.slice(i + 1)) {
        if (a.b.left < b.b.right && b.b.left < a.b.right && a.b.top < b.b.bottom && b.b.top < a.b.bottom) ven.push(`${a.t} × ${b.t}`);
      }
    });
    return ven;
  });
  expect(chyby).toEqual([]);
}

test('přehled cesty 34: osm kroků, Seneca a Marcus, kroky se otevřou a poslední má závěr', async ({ page }) => {
  await page.goto(CESTA);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Kam mi mizí čas?');
  for (const nazev of NAZVY_KROKU) await expect(page.getByText(nazev, { exact: true }).first()).toBeVisible();
  for (const [i, nazev] of NAZVY_KROKU.entries()) {
    await page.goto(`${CESTA}${i + 1}/`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(nazev);
  }
  await expect(page.locator('#cesta34-moje-pravidlo')).toHaveCount(1);
});

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    const r = rezim === 'light' ? 'svetly' : 'tmavy';
    test(`přesýpací hodiny · ${sirka} px · ${r}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      const popis = kresba.locator('.kresba__popis');

      // Bez pohybu: zrnka leží dole, horní baňka je prázdná a tlačítko pohybu chybí.
      await expect(kresba.locator('.pad')).toHaveCount(HODIN);
      await expect(kresba.locator('.horni')).toHaveCount(HODIN);
      expect(await kresba.locator('.horni').evaluateAll((z) => z.every((e) => getComputedStyle(e).opacity === '0'))).toBe(true);
      await expect(kresba.getByRole('button', { name: 'Zastavit pohyb' })).toHaveCount(0);
      await expect(popis).toHaveText(popisDne(VYCHOZI_DEN));
      await popiskyVolne(kresba);

      // Posuvníky: víc než 24 hodin nejde; zbytek se přepočítá a text pod kresbou ho řekne.
      const ja = kresba.getByRole('slider', { name: 'Tvoje volba' });
      await expect(ja).toHaveValue('3');
      await expect(ja).toHaveAttribute('aria-valuetext', '3 hodiny');
      await ja.fill('12');
      await expect(ja).toHaveValue('6');
      await expect(kresba.locator('.den__zbytek')).toContainText('0 h');
      await expect(popis).toContainText('Neproteklo nic');
      await expect(kresba.locator('.z--protekla')).toHaveCount(1); // jen v legendě
      for (const v of await kresba.locator('input[type="range"]').evaluateAll((s) => s.map((x) => x.getBoundingClientRect().height))) expect(v).toBeGreaterThanOrEqual(44);

      const axe = await new AxeBuilder({ page }).include(`#${ID}`).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    });
  }
}

test('přesýpací hodiny: pohyb běží a jde zastavit; zastavené ukážou výsledek kola', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);
  const jmeno = () => kresba.locator('.pad').first().evaluate((e) => getComputedStyle(e).animationName);
  await expect(kresba.getByRole('button', { name: 'Zastavit pohyb' })).toBeVisible();
  expect(await jmeno()).toContain('presypani-pad');
  expect(await kresba.locator('.pad').first().evaluate((e) => getComputedStyle(e).animationPlayState)).toBe('running');

  // Zastaveno hned po načtení: písek leží dole po vrstvách a horní baňka je prázdná (docs/design.md › Přesýpací hodiny).
  await kresba.getByRole('button', { name: 'Zastavit pohyb' }).click();
  await expect(kresba.getByRole('button', { name: 'Pustit pohyb' })).toBeVisible();
  expect(await jmeno()).toBe('none');
  expect(await kresba.locator('.pad').evaluateAll((z) => z.every((e) => getComputedStyle(e).opacity === '1' && getComputedStyle(e).transform === 'none'))).toBe(true);
  expect(await kresba.locator('.horni').evaluateAll((z) => z.every((e) => getComputedStyle(e).opacity === '0'))).toBe(true);

  // Posuvník mění vrstvy v zastavené baňce, ne jen čísla v legendě.
  const vrstvy = () => kresba.locator('.pad').evaluateAll((z) => z.map((e) => e.firstElementChild?.getAttribute('class') ?? ''));
  const pred = await vrstvy();
  await kresba.getByRole('slider', { name: 'Tvoje volba' }).fill('6');
  await expect.poll(vrstvy).not.toEqual(pred);
  expect(await kresba.locator('.pad').evaluateAll((z) => z.every((e) => getComputedStyle(e).opacity === '1'))).toBe(true);

  // Pustit pohyb začne nové kolo.
  await kresba.getByRole('button', { name: 'Pustit pohyb' }).click();
  expect(await jmeno()).toContain('presypani-pad');
});
