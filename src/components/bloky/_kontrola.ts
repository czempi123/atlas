// Společná kontrola bloků z YAML při sestavení: druh, odkazy na data a obsah čekající na ověření.
import { getEntry } from 'astro:content';
import { data } from '../../lib/data';
import { chybyBloku } from '../../lib/bloky';
import type { TBlok } from '../../lib/bloky-schema';

const osoby = new Set(data.lide.map((o) => o.id));
const prameny = new Set(data.zdroje.prameny.map((p) => p.id));

/** Načte blok podle id a zastaví sestavení, když nesedí druh, data, nebo čeká na ověření mimo dílnu. */
export async function nactiBlok<D extends TBlok['druh']>(id: string, druh: D, stranka: string): Promise<Extract<TBlok, { druh: D }>> {
  const zaznam = await getEntry('bloky', id);
  if (!zaznam) throw new Error(`Blok „${id}“ není v src/content/bloky/${id}.yaml`);
  const blok = zaznam.data as TBlok;
  if (blok.druh !== druh) throw new Error(`Blok „${id}“ je druhu „${blok.druh}“, ne „${druh}“.`);
  const chyby = chybyBloku(id, blok, osoby, prameny);
  if (chyby.length) throw new Error(chyby.join('\n'));
  if (blok.kOvereni.length && !stranka.startsWith('/dilna/')) {
    throw new Error(`Blok „${id}“ čeká na ověření (${blok.kOvereni.join('; ')}) a smí být jen v dílně, ne na ${stranka}.`);
  }
  return blok as Extract<TBlok, { druh: D }>;
}

/** Odkaz zpět k bloku pro deník: stránka a kotva. */
export const odkazNaBlok = (stranka: string, id: string) => `${stranka}#${id}`;

/** Blok bez polí, která ostrov nepotřebuje (zdroje, ověření). */
export function proOstrov<T extends { zdroje: string[]; kOvereni: string[] }>(b: T): Omit<T, 'zdroje' | 'kOvereni'> {
  const { zdroje: _z, kOvereni: _k, ...zbytek } = b;
  return zbytek;
}
