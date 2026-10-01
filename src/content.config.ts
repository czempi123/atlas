// Obsahové kolekce Atlasu myšlení (docs/plan.md, oddíl Obsahový model).
// Datové soubory v src/data (lide, vztahy, mista, udalosti, obdobi, zdroje) mají vlastní schémata
// v src/lib/schema.ts a ověřují se v src/lib/data.ts.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { Blok } from './lib/bloky-schema';

const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const obdobi = z.number().int().min(1).max(8);
const otazka = z.number().int().min(1).max(10);
const vsechny = (slozka: string) => glob({ pattern: '**/[^_]*.{md,mdx}', base: `./src/content/${slozka}` });

const osobnosti = defineCollection({
  loader: vsechny('osobnosti'),
  schema: z.object({
    /** id osoby v src/data/lide.yaml */
    osoba: id,
    nadtitulek: z.string(),
    /** titulek bez tečky, např. „Sókratés“ */
    titulek: z.string(),
    /** pointa titulku, vysází se kurzívou („Muž, který se ptal.“) */
    pointa: z.string(),
    /** hlavní citát stránky (id v zdroje.yaml) */
    citat: id.optional(),
    kapitoly: z.array(
      z.object({
        cislo: z.string().regex(/^\d{2}$/),
        kotva: id,
        nazev: z.string(),
        /** hotovo = napsaná v tomto souboru; osnova = zatím jen plán */
        stav: z.enum(['hotovo', 'osnova']),
        osnova: z.string().optional(),
      }),
    ),
  }),
});

const smery = defineCollection({
  loader: vsechny('smery'),
  schema: z.object({
    nazev: z.string(),
    obdobi: z.array(obdobi).min(1),
    /** pořadí na stránce Lidé a směry */
    poradi: z.number().int(),
  }),
});

const obdobiTexty = defineCollection({
  loader: vsechny('obdobi'),
  schema: z.object({ obdobi, perex: z.string() }),
});

const otazky = defineCollection({
  loader: vsechny('otazky'),
  schema: z.object({ cislo: otazka, otazka: z.string(), disciplina: z.string() }),
});

/** Cesta: přehled v src/content/cesty/<slug>.mdx, kroky v src/content/cesty/<slug>/<n>-<název>.mdx. */
const cesty = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: './src/content/cesty' }),
  schema: z.object({
    cislo: z.number().int().min(1),
    nazev: z.string(),
    obdobi,
    otazka,
    /** jedna věta pod názvem na přehledu cesty a na kartě */
    vstup: z.string(),
    filozofove: z.array(id),
    /** odhad délky v minutách */
    minut: z.number().int().min(5).max(60).optional(),
  }),
});

const kroky = defineCollection({
  loader: glob({ pattern: '*/[0-9]*.mdx', base: './src/content/cesty' }),
  schema: z.object({
    /** slug cesty (název souboru přehledu) */
    cesta: id,
    /** pořadí kroku od 1 */
    krok: z.number().int().min(1),
    /** krátký název kroku: v postupu, v liště Další krok */
    nazev: z.string(),
    /** „Kde jsme“: místo a chvíle příběhu (volitelné) */
    kdeJsme: z.string().optional(),
  }),
});

const pokusy = defineCollection({
  loader: vsechny('pokusy'),
  schema: z.object({ nazev: z.string(), obdobi, otazka: otazka.optional(), osoby: z.array(id).default([]) }),
});

const pojmy = defineCollection({
  loader: vsechny('pojmy'),
  schema: z.object({ pojem: z.string(), puvod: z.string().optional(), kratce: z.string() }),
});

const pribehy = defineCollection({
  loader: vsechny('pribehy'),
  schema: z.object({ nazev: z.string(), obdobi, osoby: z.array(id).default([]), zdroj: id }),
});

const nabozenstvi = defineCollection({
  loader: vsechny('nabozenstvi'),
  schema: z.object({ nazev: z.string(), poradi: z.number().int(), obdobi: z.array(obdobi).default([]) }),
});

/** Obsah interaktivních bloků (Volba, Změň jednu věc, Spor); do MDX se vkládají jedním řádkem podle id. */
const bloky = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: './src/content/bloky' }),
  schema: Blok,
});

export const collections = { osobnosti, smery, obdobi: obdobiTexty, otazky, cesty, pokusy, pojmy, pribehy, nabozenstvi, bloky, kroky };
