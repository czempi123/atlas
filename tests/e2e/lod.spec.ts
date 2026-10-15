// Kresba „Loď po prknech“ (cesta 2, krok 4): posuvník vyměňuje prkna lodi v přístavu, stará jdou na břeh;
// pohled Druhá loď z nich skládá loď na břehu. Text pod kresbou říká, co vypráví Plútarchos, co je náš krok
// a co přidal Hobbes, a nikde neříká, která loď je „pravá“. Obě šířky ve světlém i tmavém režimu s axe,
// stavy se snímky, klávesnice a pohyb (vlny jdou zastavit, při omezeném pohybu stojí). Logiku hlídá tests/data/lod.test.ts.
import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { BREH, PLATNO, POCET, POPISKY_LODI, POPISY_LODI, SIRKA_TRUPU, TRUP_A, TRUP_B, stavPosuvniku } from '../../src/lib/lod';

const KROK = '/cesta/jsem-porad-tentyz-kdyz-se-menim/4/';
const ID = 'lod-po-prknech';
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

/** Levé a pravé okraje všech prvků na plátně v jednotkách kresby (0–340). */
const okraje = (kresba: Locator, selektor: string) => kresba.locator('svg.kresba__platno').evaluate((svg, [sel, sirka]) => {
  const p = svg.getBoundingClientRect();
  const k = (sirka as number) / p.width;
  return [...svg.querySelectorAll(sel as string)].map((e) => { const b = e.getBoundingClientRect(); return { leva: (b.left - p.left) * k, prava: (b.right - p.left) * k, horni: (b.top - p.top) * k, dolni: (b.bottom - p.top) * k }; });
}, [selektor, PLATNO.sirka] as const);

const pruhlednost = (kresba: Locator, selektor: string) => kresba.locator(selektor).first().evaluate((e) => Number(getComputedStyle(e).opacity));
const viditelnePopisky = (kresba: Locator) => kresba.locator('svg.kresba__platno').evaluate((svg) => {
  const videt = (t: Element) => { for (let e: Element | null = t; e && e !== svg; e = e.parentElement) if (getComputedStyle(e).opacity === '0') return false; return true; };
  return [...svg.querySelectorAll('text')].filter(videt).map((t) => t.textContent);
});

for (const { sirka, vyska } of [{ sirka: 390, vyska: 844 }, { sirka: 1440, vyska: 900 }]) {
  for (const rezim of ['light', 'dark'] as const) {
    const r = rezim === 'light' ? 'svetly' : 'tmavy';
    test(`loď po prknech · ${sirka} px · ${r}`, async ({ page }) => {
      await page.setViewportSize({ width: sirka, height: vyska });
      await page.emulateMedia({ colorScheme: rezim, reducedMotion: 'reduce' });
      const kresba = await priprav(page);
      await page.addStyleTag({ content: LISTY });
      const popis = kresba.locator('.kresba__popis');
      const pohledy = kresba.getByRole('radiogroup', { name: 'Loď po prknech' });
      const posuvnik = kresba.getByRole('slider', { name: 'Posuň: vyměň prkna' });

      // Dva pohledy, výchozí je Výměna prken. Při omezeném pohybu kresba stojí a tlačítko pohybu chybí.
      await expect(pohledy.getByRole('radio')).toHaveCount(2);
      await expect(pohledy.getByRole('radio', { name: 'Výměna prken' })).toBeChecked();
      await expect(kresba.getByRole('button')).toHaveCount(0);
      await expect(kresba).not.toHaveClass(/kresba--pohyb/);
      for (const v of await kresba.locator('.k-prepinac span').evaluateAll((s) => s.map((x) => x.getBoundingClientRect().height))) expect(v).toBeGreaterThanOrEqual(44);
      expect((await posuvnik.boundingBox())!.height).toBeGreaterThanOrEqual(44);

      // Na začátku je všech čtyřiadvacet prken původních a na břehu nic neleží.
      await expect(posuvnik).toHaveValue('0');
      await expect(posuvnik).toHaveAttribute('aria-valuetext', stavPosuvniku(0));
      await expect(kresba.locator('.k-posuvnik output')).toHaveText(stavPosuvniku(0));
      await expect(popis).toHaveText(POPISY_LODI.vymena.nic);
      await expect(kresba.locator('.stare')).toHaveCount(POCET);
      await expect(kresba.locator('.stare.venku')).toHaveCount(0);
      await expect(kresba.locator('.nove.je')).toHaveCount(0);
      for (const p of await okraje(kresba, '.stare__tvar')) expect(p.leva).toBeGreaterThan(BREH);
      expect(await viditelnePopisky(kresba)).toEqual([POPISKY_LODI.hromada, POPISKY_LODI.pristav]);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/lod-0-${sirka}-${r}.png` });

      // Devět výměn: devět starých prken leží na břehu, devět nových je v lodi. Tolik vypráví Plútarchos.
      await posuvnik.fill('9');
      await expect(popis).toHaveText(POPISY_LODI.vymena.cast);
      await expect(posuvnik).toHaveAttribute('aria-valuetext', stavPosuvniku(9));
      await expect(kresba.locator('.k-posuvnik output')).toHaveText('Vyměněná prkna: 9 z 24 · původní: 15 z 24');
      await expect(kresba.locator('.stare.venku')).toHaveCount(9);
      await expect(kresba.locator('.nove.je')).toHaveCount(9);
      await expect.poll(async () => (await okraje(kresba, '.stare.venku .stare__tvar')).every((p) => p.prava < BREH)).toBe(true);
      for (const p of await okraje(kresba, '.stare:not(.venku) .stare__tvar')) expect(p.leva).toBeGreaterThan(BREH);
      expect(await pruhlednost(kresba, '.druha')).toBe(0);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/lod-9-${sirka}-${r}.png` });

      // Druhá loď: táž prkna stojí na břehu na místech, která měla v trupu. Text říká, že ji přidal Hobbes.
      await pohledy.getByRole('radio', { name: 'Druhá loď' }).check({ force: true });
      await expect(popis).toHaveText(POPISY_LODI.druha.cast);
      await expect.poll(() => pruhlednost(kresba, '.druha')).toBe(1);
      await expect.poll(async () => (await okraje(kresba, '.stare.venku .stare__tvar')).every((p) => p.leva >= TRUP_B.x - 10 && p.prava <= TRUP_B.x + SIRKA_TRUPU + 8)).toBe(true);
      // Prkno je ve druhé lodi stejně vysoko jako jeho místo v lodi v přístavu.
      const vTrupu = await okraje(kresba, '.nove.je');
      const naBrehu = await okraje(kresba, '.stare.venku .stare__tvar');
      expect(naBrehu.map((p) => Math.round(p.horni)).sort()).toEqual(vTrupu.map((p) => Math.round(p.horni)).sort());
      expect(await viditelnePopisky(kresba)).toEqual([POPISKY_LODI.druha, POPISKY_LODI.pristav]);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/lod-druha-9-${sirka}-${r}.png` });

      // Všechna prkna: v přístavu stojí loď z nových, na břehu loď ze starých. Kresba neříká, která je Théseova.
      await posuvnik.fill(String(POCET));
      await expect(popis).toHaveText(POPISY_LODI.druha.vse);
      await expect(kresba.locator('.nove.je')).toHaveCount(POCET);
      await expect.poll(async () => (await okraje(kresba, '.stare__tvar')).every((p) => p.prava < BREH)).toBe(true);
      for (const p of await okraje(kresba, '.nove.je')) expect(p.leva).toBeGreaterThan(BREH);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/lod-druha-24-${sirka}-${r}.png` });
      await pohledy.getByRole('radio', { name: 'Výměna prken' }).check({ force: true });
      await expect(popis).toHaveText(POPISY_LODI.vymena.vse);
      await expect.poll(async () => (await okraje(kresba, '.stare__tvar')).every((p) => p.prava < BREH && p.horni > 0)).toBe(true);
      await popiskyVolne(kresba);
      await kresba.screenshot({ path: `test-results/snimky/lod-24-${sirka}-${r}.png` });
      await expect(kresba).not.toContainText(/prav[áéý] loď|skutečn|Théseova je/i);
      expect(TRUP_A.x).toBeGreaterThan(BREH);

      const axe = await new AxeBuilder({ page }).include(`#${ID}`).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    });
  }
}

test('loď po prknech: vlny běží a jdou zastavit; přepínač a posuvník jen klávesnicí; kresba není blok', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  const kresba = await priprav(page);
  const popis = kresba.locator('.kresba__popis');
  const pohledy = kresba.getByRole('radiogroup', { name: 'Loď po prknech' });

  // Samy se hýbou jen vlny. Tlačítko je zastaví a zůstanou stát.
  await expect(kresba).toHaveClass(/kresba--pohyb/);
  expect(await kresba.locator('svg.kresba__platno *').evaluateAll((p) => p.filter((e) => getComputedStyle(e).animationName !== 'none').map((e) => e.getAttribute('class')))).toEqual([expect.stringContaining('vlny')]);
  const stavVln = () => kresba.locator('.vlny').evaluate((e) => getComputedStyle(e).animationPlayState);
  expect(await stavVln()).toBe('running');
  const pohyb = kresba.getByRole('button', { name: 'Zastavit pohyb' });
  expect((await pohyb.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await pohyb.click();
  await expect(kresba.getByRole('button', { name: 'Pustit pohyb' })).toBeVisible();
  expect(await stavVln()).toBe('paused');
  const poloha = () => kresba.locator('.vlny').evaluate((e) => new Promise<string>((ok) => requestAnimationFrame(() => ok(getComputedStyle(e).transform))));
  const prvni = await poloha();
  await page.waitForTimeout(250);
  expect(await poloha()).toBe(prvni);

  // Přepínač pohledů je jedna zastávka tabulátoru, uvnitř se chodí šipkami; posuvník jde šipkami, Home a End.
  await pohledy.getByRole('radio', { name: 'Výměna prken' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(pohledy.getByRole('radio', { name: 'Druhá loď' })).toBeChecked();
  await expect(popis).toHaveText(POPISY_LODI.druha.nic);
  await page.keyboard.press('Tab');
  const posuvnik = kresba.getByRole('slider');
  await expect(posuvnik).toBeFocused();
  // Prvek s fokusem neleží pod pevnou lištou kroku.
  await expect.poll(() => posuvnik.evaluate((e) => { const b = e.getBoundingClientRect(); return e.contains(document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2)); })).toBe(true);
  for (let i = 0; i < 3; i++) await page.keyboard.press('ArrowRight');
  await expect(posuvnik).toHaveValue('3');
  await expect(popis).toHaveText(POPISY_LODI.druha.cast);
  await expect(kresba.locator('.stare.venku')).toHaveCount(3);
  // Přechod doběhne: vyndaná prkna skončí na břehu ve druhé lodi.
  await expect.poll(async () => (await okraje(kresba, '.stare.venku .stare__tvar')).every((p) => p.prava <= TRUP_B.x + SIRKA_TRUPU + 8), { timeout: 4000 }).toBe(true);
  await page.keyboard.press('End');
  await expect(posuvnik).toHaveValue(String(POCET));
  await expect(popis).toHaveText(POPISY_LODI.druha.vse);
  await page.keyboard.press('Home');
  await expect(posuvnik).toHaveValue('0');
  await expect(kresba.locator('.stare.venku')).toHaveCount(0);

  // Kresba není blok: nic neukládá a nenabízí Kam dál. Stojí za výzvou a před Hobbesovou druhou lodí.
  await expect(kresba).not.toHaveClass(/\bblok\b/);
  await expect(kresba.getByRole('navigation')).toHaveCount(0);
  const text = page.locator('.krok__obsah > .ctenarsky');
  expect(await text.evaluate((t) => {
    const pred = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('můžeš výměnu dotáhnout do konce'))!;
    const po = [...t.querySelectorAll('p')].find((p) => p.textContent!.includes('dva tisíce let později'))!;
    const k = t.querySelector('#lod-po-prknech')!;
    return !!(pred.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING) && !!(k.compareDocumentPosition(po) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBe(true);
  // Text kroku říká totéž co oba pohledy kresby, i pro toho, kdo ji přeskočí.
  await expect(text).toContainText('Zpátky k lodi z prvního kroku.');
  await expect(text).toContainText('dovedl anglický filozof Thomas Hobbes výměnu až k poslednímu prknu a přidal druhou loď');
  await expect(text).toContainText('Jedna nikdy nepřestala být lodí a nemá jediné původní prkno. Druhá je celá z původních prken a ještě nedávno to byla hromada dřeva.');
  // Otázku klade až blok pod kresbou a neptá se, která loď je „pravá“.
  await expect(page.locator('#cesta2-ktera-je-theseova')).toContainText('Která z nich je Théseova?');
  await expect(page.locator('.krok__obsah')).not.toContainText(/prav[áéý] loď|která je pravá/i);
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('atlas-denik') ?? '{"zapisy":[]}').zapisy.length)).toBe(0);
});
