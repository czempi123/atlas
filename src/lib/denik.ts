// Soukromý deník studenta v localStorage (klíč atlas-denik). Nic se neodesílá; export do souboru.
// Když úložiště není dostupné (soukromé okno, zablokovaná data), deník funguje jen do zavření stránky.

export interface Zapis {
  /** kde vznikl, např. „sokrates/nikdo-nedela-zlo“ */
  id: string;
  otazka: string;
  odpoved: string;
  odkaz: string;
  kdy: string;
}
export interface Vyzva {
  id: string;
  nazev: string;
  odkaz: string;
  prijato: string;
  poznamka?: string;
}
export interface Denik {
  verze: 1;
  zapisy: Zapis[];
  vyzvy: Vyzva[];
  navstivene: { odkaz: string; nazev: string; kdy: string }[];
}

const KLIC = 'atlas-denik';
const prazdny = (): Denik => ({ verze: 1, zapisy: [], vyzvy: [], navstivene: [] });
let vPameti: Denik | null = null;

export function nacti(): Denik {
  try {
    const t = localStorage.getItem(KLIC);
    if (t) {
      const d = JSON.parse(t);
      if (d && d.verze === 1) return { ...prazdny(), ...d };
    }
  } catch { /* úložiště nedostupné */ }
  return vPameti ?? prazdny();
}

export function uloz(d: Denik): void {
  vPameti = d;
  try { localStorage.setItem(KLIC, JSON.stringify(d)); } catch { /* zůstane v paměti */ }
  window.dispatchEvent(new CustomEvent('atlas-denik'));
}

export function ulozZapis(z: Omit<Zapis, 'kdy'>): void {
  const d = nacti();
  d.zapisy = [...d.zapisy.filter((x) => x.id !== z.id), { ...z, kdy: new Date().toISOString() }];
  uloz(d);
}

export function prijmiVyzvu(v: Omit<Vyzva, 'prijato'>): void {
  const d = nacti();
  if (!d.vyzvy.some((x) => x.id === v.id)) d.vyzvy.push({ ...v, prijato: new Date().toISOString() });
  uloz(d);
}

export function zaznamenejNavstevu(odkaz: string, nazev: string): void {
  const d = nacti();
  d.navstivene = [{ odkaz, nazev, kdy: new Date().toISOString() }, ...d.navstivene.filter((x) => x.odkaz !== odkaz)].slice(0, 20);
  uloz(d);
}

export function exportuj(): void {
  const blob = new Blob([JSON.stringify(nacti(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `atlas-denik-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
