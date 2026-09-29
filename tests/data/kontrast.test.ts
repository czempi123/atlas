// Kontrast tokenů (docs/design.md, Přístupnost): WCAG AA 4,5 : 1 pro text ve světlém i tmavém režimu.
// Stránky navíc kontroluje axe v Playwrightu (tests/e2e/prohlidka.spec.ts).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const css = readFileSync(join(import.meta.dirname, '../../src/styles/tokens.css'), 'utf8');
function tokeny(blok: string): Record<string, string> {
  return Object.fromEntries([...blok.matchAll(/--([a-z0-9-]+):\s*(#[0-9A-Fa-f]{6})/g)].map((m) => [m[1], m[2]]));
}
const svetly = tokeny(css.slice(css.indexOf(':root {'), css.indexOf('@media (min-width')));
const tmavy = tokeny(css.slice(css.indexOf(":root[data-theme='dark']")));

const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const kontrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const DVOJICE: [string, string][] = [
  ...['ink', 'ink-2', 'muted'].flatMap((t) => ['paper', 'surface', 'sunk'].map((p): [string, string] => [t, p])),
  ['paper', 'ink'],
  ...[1, 2, 3, 4, 5, 6, 7, 8].flatMap((n): [string, string][] => [
    [`period-${n}`, 'paper'],
    [`period-${n}`, 'surface'],
    [`period-${n}-on-plate`, `period-${n}-plate`],
    ['ink', `period-${n}-tint`],
    ['ink-2', `period-${n}-tint`],
  ]),
];

describe.each([['světlý', svetly], ['tmavý', tmavy]])('kontrast tokenů · %s režim', (_, t) => {
  it.each(DVOJICE)('%s na %s splňuje AA', (popredi, pozadi) => {
    expect(t[popredi], popredi).toBeDefined();
    expect(kontrast(t[popredi], t[pozadi])).toBeGreaterThanOrEqual(4.5);
  });
});
