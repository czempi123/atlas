// Existující odkazy: každý vnitřní odkaz a kotva v sestaveném webu (dist/) vede na existující místo.
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(import.meta.dirname, '../../dist');

function html(slozka: string): string[] {
  return readdirSync(slozka).flatMap((f) => {
    const p = join(slozka, f);
    if (statSync(p).isDirectory()) return f === 'pagefind' || f === '_astro' ? [] : html(p);
    return f.endsWith('.html') ? [p] : [];
  });
}

test('všechny vnitřní odkazy a kotvy existují', () => {
  const soubory = html(DIST);
  expect(soubory.length).toBeGreaterThan(5);
  const idPodleStranky = new Map<string, Set<string>>();
  const cestaStranky = (soubor: string) => '/' + soubor.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\.html$/, '/');
  for (const s of soubory) {
    const text = readFileSync(s, 'utf8');
    idPodleStranky.set(cestaStranky(s), new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  const chyby: string[] = [];
  for (const s of soubory) {
    const text = readFileSync(s, 'utf8');
    for (const [, href] of text.matchAll(/\shref="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(href) || href.startsWith('/_astro/') || href.startsWith('/pagefind/')) continue;
      const [cesta, kotva] = href.split('#');
      const cil = cesta === '' ? cestaStranky(s) : cesta;
      if (cil.startsWith('/ikony/') || cil.endsWith('.svg') || cil.endsWith('.woff2')) {
        if (!existsSync(join(DIST, cil))) chyby.push(`${cestaStranky(s)}: ${href} neexistuje`);
        continue;
      }
      const ids = idPodleStranky.get(cil.endsWith('/') ? cil : `${cil}/`);
      if (!ids) chyby.push(`${cestaStranky(s)}: stránka ${cil} neexistuje`);
      else if (kotva && !ids.has(kotva)) chyby.push(`${cestaStranky(s)}: kotva #${kotva} na ${cil} neexistuje`);
    }
  }
  expect(chyby).toEqual([]);
});
