// Návraty cest pro deník a dílnu: obsah z YAML (druh: navrat) a kontrola proti cestám při sestavení.
import { getCollection } from 'astro:content';
import { data } from '../../lib/data';
import { chybyBloku } from '../../lib/bloky';
import { chybyNavratu, type NavratDeniku } from '../../lib/navrat';
import { adresaKroku, krokyCesty } from '../../lib/cesty';
import type { TBlokNavrat } from '../../lib/bloky-schema';

const osoby = new Set(data.lide.map((o) => o.id));
const prameny = new Set(data.zdroje.prameny.map((p) => p.id));

/**
 * Všechny návraty seřazené podle čísla cesty. Zastaví sestavení, když návrat míří na neznámou cestu,
 * cesta má dva návraty nebo pravidlo nestojí v jejím posledním kroku. Cesta bez návratu je v pořádku.
 * Návrat, který čeká na ověření, se do deníku nedostane; s `sNeoverenymi` ho uvidí jen dílna.
 */
export async function nactiNavraty(sNeoverenymi = false): Promise<NavratDeniku[]> {
  const cesty = await getCollection('cesty');
  const kroky = (await getCollection('kroky')).map((k) => ({ ...k.data, body: k.body }));
  const navraty = (await getCollection('bloky'))
    .filter((b) => b.data.druh === 'navrat')
    .map((b) => ({ id: b.id, ...(b.data as TBlokNavrat) }));
  const chyby = [
    ...chybyNavratu(navraty, new Set(cesty.map((c) => c.id)), kroky),
    ...navraty.flatMap((n) => chybyBloku(n.id, n, osoby, prameny)),
  ];
  if (chyby.length) throw new Error(chyby.join('\n'));
  const cesta = (slug: string) => cesty.find((c) => c.id === slug)!;
  return navraty
    .filter((n) => sNeoverenymi || !n.kOvereni.length)
    .sort((a, b) => cesta(a.cesta).data.cislo - cesta(b.cesta).data.cislo)
    .map((n) => ({
      id: n.id,
      cesta: n.cesta,
      pravidlo: n.pravidlo,
      nazevCesty: cesta(n.cesta).data.nazev,
      odkaz: adresaKroku(n.cesta, krokyCesty(kroky, n.cesta).length),
      blok: { obdobi: n.obdobi, nazev: n.nazev, scena: n.scena, po: n.po },
    }));
}
