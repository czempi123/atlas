// Kresba „Zrcadlo času“ (cesta 8, krok 4): po přiložení zrcadla se čas po smrti kryje s časem před narozením;
// v pohledu Námitka se život prodlouží jen doprava, doleva se nehne a vlevo se objeví někdo jiný.
// Vpravo od života není žádný letopočet. Obě šířky ve světlém i tmavém režimu s axe, všechny stavy se snímky,
// klávesnice a pohyb. Logiku hlídá tests/data/zrcadlo.test.ts.
import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LETOPOCTY, OSA, PLATNO, PO, POPISY_NAMITKY, POPISY_ZRCADLA, POSUNY, PRED, VYCHOZI_POSUN, ZIVOT, useckyNamitky } from '../../src/lib/zrcadlo';

const KROK = '/cesta/proc-se-bat-smrti/4/';
const ID = 'zrcadlo-casu';
const LISTY = 'header.hlavicka, nav.lista, .cesta-lista, .cesta-hlavicka, .obsah-lista { visibility: hidden !important; }';

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
    const videt = (t: Element) => { for (let e: Element | null = t; e && e !== svg; e = e.parentElement) if (getComputedStyle(e).opacity === '0') return false; return true; };
    const r = [...svg.querySelectorAll('text')].filter((t) => t.textContent && videt(t)).map((t) => ({ t: t.textContent, b: t.getBoundingClientRect() }));
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

/** Levý a pravý okraj prvku na plátně v jednotkách kresby (0–340). */
const okraje = (kresba: Locator, selektor: string) => kresba.locator('svg.kresba__platno').evaluate((svg, [sel, sirka]) => {
  const p = svg.getBoundingClientRect();
  const b = svg.querySelector(sel as string)!.getBoundingClientRect();
  const k = (sirka as number) / p.width;
  return { leva: (b.left - p.left) * k, prava: (b.right - p.left) * k };
}, [selektor, PLATNO.sirka] as const);

const pruhlednost = (kresba: Locator, selektor: string) => kresba.locator(selektor).first().evaluate((e) => Number(getComputedStyle(e).opacity));

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    const r = rezim === 'light' ? 'svetly' : 'tmavy';
    test(`zrcadlo času · ${sirka} px · ${r}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      await page.addStyleTag({ content: LISTY });
      const popis = kresba.locator('.kresba__popis');
      const pohledy = kresba.getByRole('radiogroup', { name: 'Zrcadlo času' });

      // Dva pohledy, výchozí je Zrcadlo. Nic neběží samo: tlačítko pohybu chybí, jediné tlačítko přikládá zrcadlo.
      await expect(pohledy.getByRole('radio')).toHaveCount(2);
      await expect(pohledy.getByRole('radio', { name: 'Zrcadlo', exact: true })).toBeChecked();
      await expect(kresba.getByRole('button')).toHaveText(['Přiložit zrcadlo']);
      for (const v of await kresba.locator('.k-prepinac span').evaluateAll((s) => s.map((x) => x.getBoundingClientRect().height))) expect(v).toBeGreaterThanOrEqual(44);
      expect((await kresba.getByRole('button').boundingBox())!.height).toBeGreaterThanOrEqual(44);
      await expect(popis).toHaveText(POPISY_ZRCADLA.pred);
      // Letopočty jsou jen vlevo od života; vpravo není žádné číslo.
      const cisla = await kresba.locator('svg.kresba__platno text').evaluateAll((t) => t.filter((x) => /\d/.test(x.textContent ?? '')).map((x) => x.textContent));
      expect(cisla).toEqual(LETOPOCTY.map((l) => String(l.rok)));
      for (const l of LETOPOCTY) expect(l.x).toBeLessThan(ZIVOT.x);
      const zivot = await okraje(kresba, '.zivot');
      expect(zivot.leva).toBeCloseTo(ZIVOT.x, 0);
      expect(zivot.prava).toBeCloseTo(ZIVOT.x + ZIVOT.sirka, 0);
      expect(await pruhlednost(kresba, '.odraz')).toBe(0);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/zrcadlo-pred-${sirka}-${r}.png` });

      // Zrcadlo: odraz času po smrti se překlopí a kryje se s časem před narozením.
      await kresba.getByRole('button', { name: 'Přiložit zrcadlo' }).click();
      await expect(popis).toHaveText(POPISY_ZRCADLA.po);
      await expect(kresba.getByRole('button')).toHaveText(['Odložit zrcadlo']);
      await expect.poll(() => pruhlednost(kresba, '.odraz')).toBe(1);
      await expect.poll(async () => Math.round((await okraje(kresba, '.odraz__plocha')).leva)).toBeLessThanOrEqual(PRED.x + 1);
      const odraz = await okraje(kresba, '.odraz__plocha');
      expect(Math.abs(odraz.prava - (PRED.x + PRED.sirka))).toBeLessThan(2);
      await expect(kresba.locator('.zrc text').first()).toHaveText('zrcadlo');
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/zrcadlo-po-${sirka}-${r}.png` });

      // Námitka: posuvník. Život se nehne nikdy; doprava roste tentýž život, vlevo je někdo jiný.
      await pohledy.getByRole('radio', { name: 'Námitka' }).check({ force: true });
      const posuvnik = kresba.getByRole('slider', { name: 'Posuň: zkus životu přidat čas' });
      await expect(posuvnik).toHaveValue(String(VYCHOZI_POSUN));
      await expect(kresba.getByRole('button')).toHaveCount(0);
      for (let i = 0; i < POSUNY.length; i++) {
        await posuvnik.fill(String(i));
        await expect(popis).toHaveText(POPISY_NAMITKY[i]);
        await expect(posuvnik).toHaveAttribute('aria-valuetext', POSUNY[i].nazev);
        await expect(kresba.locator('.k-posuvnik output')).toHaveText(POSUNY[i].nazev);
        const u = useckyNamitky(i);
        const z = await okraje(kresba, '.zivot');
        expect(z.leva).toBeCloseTo(ZIVOT.x, 0);
        expect(z.prava).toBeCloseTo(ZIVOT.x + ZIVOT.sirka, 0);
        await expect.poll(async () => { const n = await okraje(kresba, '.navic'); return Math.round(n.prava - n.leva); }).toBe(u.navic);
        await expect.poll(() => pruhlednost(kresba, '.cizi')).toBe(u.cizi ? 1 : 0);
        if (u.cizi) {
          const x = u.cizi.x;
          await expect.poll(async () => Math.abs((await okraje(kresba, '.cizi__usecka')).leva - x) < 1.5).toBe(true);
          expect((await okraje(kresba, '.cizi__usecka')).prava).toBeLessThan(ZIVOT.x);
          await expect(kresba.locator('.cizi text')).toHaveText('někdo jiný');
        }
        // Prodloužený život nevyjede z plátna a nedostane číslo.
        expect(PO.x + u.navic).toBeLessThan(PLATNO.sirka);
        expect(await kresba.locator('svg.kresba__platno text').evaluateAll((t) => t.filter((x) => /\d/.test(x.textContent ?? '')).length)).toBe(LETOPOCTY.length);
        await popiskyVolne(kresba);
        await kresba.screenshot({ path: `test-results/snimky/zrcadlo-namitka-${i}-${sirka}-${r}.png` });
      }
      expect(OSA.stred).toBe(PLATNO.sirka / 2);

      const axe = await new AxeBuilder({ page }).include(`#${ID}`).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    });
  }
}

test('zrcadlo času: celé jen klávesnicí; s povoleným pohybem se odraz překlopí a nic neběží samo', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);
  const popis = kresba.locator('.kresba__popis');
  const pohledy = kresba.getByRole('radiogroup', { name: 'Zrcadlo času' });

  // Pohyb je povolený, ale nic neběží samo: žádné tlačítko Zastavit pohyb a žádná animace ve smyčce.
  await expect(kresba).toHaveClass(/kresba--pohyb/);
  await expect(kresba.getByRole('button', { name: /pohyb/ })).toHaveCount(0);
  expect(await kresba.locator('svg.kresba__platno *').evaluateAll((p) => p.filter((e) => getComputedStyle(e).animationName !== 'none').length)).toBe(0);

  await pohledy.getByRole('radio', { name: 'Zrcadlo', exact: true }).focus();
  await page.keyboard.press('Tab');
  const prilozit = kresba.getByRole('button', { name: 'Přiložit zrcadlo' });
  await expect(prilozit).toBeFocused();
  // Prvek s fokusem neleží pod pevnou lištou kroku.
  await expect.poll(() => prilozit.evaluate((e) => { const b = e.getBoundingClientRect(); return e.contains(document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2)); })).toBe(true);
  await page.keyboard.press('Enter');
  await expect(popis).toHaveText(POPISY_ZRCADLA.po);
  await expect(kresba.getByRole('button', { name: 'Odložit zrcadlo' })).toBeFocused();
  // Přechod doběhne: odraz skončí vlevo od života.
  await expect.poll(async () => Math.round((await okraje(kresba, '.odraz__plocha')).prava), { timeout: 4000 }).toBeLessThanOrEqual(ZIVOT.x + 2);
  await page.keyboard.press('Space');
  await expect(popis).toHaveText(POPISY_ZRCADLA.pred);

  // Přepínač pohledů je jedna zastávka tabulátoru, uvnitř se chodí šipkami; posuvník jde šipkami.
  await page.keyboard.press('Shift+Tab');
  await expect(pohledy.getByRole('radio', { name: 'Zrcadlo', exact: true })).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(pohledy.getByRole('radio', { name: 'Námitka' })).toBeChecked();
  await expect(popis).toHaveText(POPISY_NAMITKY[VYCHOZI_POSUN]);
  await page.keyboard.press('Tab');
  const posuvnik = kresba.getByRole('slider');
  await expect(posuvnik).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect(popis).toHaveText(POPISY_NAMITKY[VYCHOZI_POSUN + 1]);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('ArrowLeft');
  await expect(popis).toHaveText(POPISY_NAMITKY[VYCHOZI_POSUN - 1]);
  await expect(posuvnik).toHaveAttribute('aria-valuetext', 'o něco dřív');

  // Kresba není blok: nic neukládá a nenabízí Kam dál. Stojí za obrazem zrcadla a lampy a před námitkou.
  await expect(kresba).not.toHaveClass(/\bblok\b/);
  await expect(kresba.getByRole('navigation')).toHaveCount(0);
  const text = page.locator('.krok__obsah > .ctenarsky');
  expect(await text.evaluate((t) => {
    const pred = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('Lucretiovo zrcadlo si můžeš přiložit sám'))!;
    const po = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('Proti zrcadlu stojí námitka'))!;
    const k = t.querySelector('#zrcadlo-casu')!;
    return !!(pred.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING) && !!(k.compareDocumentPosition(po) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBe(true);
  // Text kroku říká totéž co oba pohledy kresby, i pro toho, kdo ji přeskočí.
  await expect(text).toContainText('V něm nám příroda nastavuje zrcadlo času, který přijde po naší smrti.');
  await expect(text).toContainText('Žít o deset let déle by mohl tentýž člověk. Narodit se o sto let dřív by musel někdo jiný.');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('atlas-denik') ?? '{"zapisy":[]}').zapisy.length)).toBe(0);
});
