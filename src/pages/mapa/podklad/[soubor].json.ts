// Předpočítaný podklad mapy pro každé období a výřez (notebook, telefon): /mapa/podklad/1-notebook.json.
// Počítá se při sestavení z Natural Earth; ostrov Mapa a čas si stáhne jen to, co právě ukazuje.
import type { APIRoute, GetStaticPaths } from 'astro';
import { data } from '../../../lib/data';
import { podkladObdobi, type DruhVyrezu } from '../../../lib/mapa';

export const getStaticPaths = (() =>
  data.obdobi.flatMap((o) =>
    (['notebook', 'telefon'] as DruhVyrezu[]).map((druh) => ({ params: { soubor: `${o.id}-${druh}` }, props: { id: o.id, druh } })),
  )) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const o = data.obdobi.find((x) => x.id === props.id)!;
  const podklad = podkladObdobi(o, props.druh as DruhVyrezu, data.obdobi, data.mista, data.krajiny);
  return new Response(JSON.stringify(podklad), { headers: { 'Content-Type': 'application/json' } });
};
