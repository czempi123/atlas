// Závěr cesty: panel „Na začátku“ × „Teď“ v posledním kroku (src/components/ostrovy/ZaverCesty.svelte).
// Čisté funkce nad zápisem z deníku. Počáteční odpověď se ukazuje tak, jak ji student tehdy uložil:
// nic se neukládá podruhé a nic se nedomýšlí. Když zápis chybí, panel není.

/** Z jakého bloku počáteční odpověď je; podle toho se zápis rozloží na části. */
export type DruhZacatku = 'volba' | 'roztrid' | 'jiny';

export interface CastZacatku {
  /** malý nadpis části: název koše nebo „Proč“ */
  nadpis?: string;
  radky: string[];
}

const escapuj = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Zápis z Roztřiď („Potřebuju: spánek; přítel. Těší mě: pizza.“) po koších; null, když názvy košů nesedí. */
function castiRoztrid(text: string, kose: string[]): CastZacatku[] | null {
  if (!kose.length) return null;
  const nazvy = [...kose].sort((a, b) => b.length - a.length).map(escapuj).join('|');
  const vzor = new RegExp(`(^|[.!?…“] )(${nazvy}): `, 'g');
  const hranice: { nazev: string; od: number; obsah: number }[] = [];
  for (let m = vzor.exec(text); m; m = vzor.exec(text)) {
    hranice.push({ nazev: m[2], od: m.index + m[1].length, obsah: m.index + m[0].length });
  }
  if (!hranice.length || hranice[0].od !== 0) return null;
  return hranice.map((h, i) => {
    const konec = i + 1 < hranice.length ? hranice[i + 1].od : text.length;
    const obsah = text.slice(h.obsah, konec).trim().replace(/\.$/, '');
    return { nadpis: h.nazev, radky: obsah.split('; ').map((r) => r.trim()).filter(Boolean) };
  });
}

/**
 * Rozloží uložený zápis počáteční odpovědi na části pro panel „Na začátku“.
 * Volba: zvolená možnost bez písmene a zvlášť „Proč“. Roztřiď: koše s kartami po řádcích
 * (`kose` = názvy košů z bloku; když v zápisu nejsou, zůstane text vcelku). Ostatní: text po odstavcích.
 * Prázdný zápis nemá žádnou část, a panel se tedy neukáže.
 */
export function castiZacatku(odpoved: string, druh: DruhZacatku, kose: string[] = []): CastZacatku[] {
  const text = odpoved.trim();
  if (!text) return [];
  if (druh === 'volba') {
    const bezPismene = text.replace(/^[A-D] · /, '');
    const i = bezPismene.indexOf(' Proč: ');
    if (i < 0) return [{ radky: [bezPismene] }];
    return [{ radky: [bezPismene.slice(0, i)] }, { nadpis: 'Proč', radky: [bezPismene.slice(i + ' Proč: '.length)] }];
  }
  if (druh === 'roztrid') {
    const casti = castiRoztrid(text, kose);
    if (casti) return casti;
  }
  return [{ radky: text.split(/\n+/).map((r) => r.trim()).filter(Boolean) }];
}
