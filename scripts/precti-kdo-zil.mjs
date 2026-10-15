// Přečte odhalení všech bloků Kdo žil dřív? na profilech (věta o věku a letopočtech), aby šlo zkontrolovat „asi“.
// node scripts/precti-kdo-zil.mjs      (ZAKLAD: běžící web, výchozí náhled sestaveného webu na portu 4323)
import { chromium } from '@playwright/test';

const ZAKLAD = process.env.ZAKLAD ?? 'http://localhost:4323';
const PROFILY = ['herakleitos', 'parmenides', 'protagoras', 'sokrates', 'platon', 'diogenes', 'epikuros', 'seneca', 'epiktetos', 'marcus-aurelius'];
const prohlizec = await chromium.launch();
const page = await prohlizec.newPage({ viewport: { width: 1440, height: 900 } });
for (const p of PROFILY) {
  await page.goto(`${ZAKLAD}/osobnost/${p}/`);
  const blok = page.locator('.kdo-zil, [data-blok="kdo-zil-driv"], section:has(button:text("Odhalit"))').first();
  if (!(await blok.count())) { console.log(`${p}: blok nenalezen`); continue; }
  await blok.scrollIntoViewIfNeeded();
  // Pořadí má volbu, vzdálenost posuvník s výchozí hodnotou; v obou stačí odhalit.
  if (await blok.getByRole('radio').count()) await blok.getByRole('radio').first().check({ force: true });
  await blok.getByRole('button', { name: 'Odhalit' }).click({ timeout: 5000 }).catch(() => {});
  const odhaleni = blok.getByRole('region', { name: 'Odhalení' });
  const text = (await ((await odhaleni.count()) ? odhaleni : blok).innerText()).replace(/ /g, ' ').replace(/\s+/g, ' ');
  console.log(`${p}: ${text}`);
}
await prohlizec.close();
