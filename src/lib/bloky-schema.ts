// Schémata obsahu interaktivních bloků (src/content/bloky/*.yaml).
// Blok s více možnostmi (Volba s důvodem, Změň jednu věc, Spor) se píše do YAML a do MDX se vkládá
// jedním řádkem: <Volba id="…" />. Sdílí je kolekce `bloky` (src/content.config.ts) i testy (tests/data).
// Texty smějí obsahovat *kurzívu*; prázdný řádek dělí odstavce.
import { z } from 'astro/zod';

const idVzor = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const Id = z.string().regex(idVzor, 'id: malá písmena bez diakritiky, číslice a pomlčky');
const Text = z.string().trim().min(1);
const Obdobi = z.number().int().min(1).max(8);

/** Společné pro všechny bloky z YAML. */
const zaklad = {
  /** barva období (1–8) */
  obdobi: Obdobi,
  /** krátký nadtitulek v barvě období */
  nadtitulek: Text.optional(),
  /** úvodní scéna před otázkou (volitelná) */
  scena: Text.optional(),
  /** otázka bloku; ukládá se do deníku jako otázka zápisu */
  otazka: Text,
  /** prameny (id v src/data/zdroje.yaml), ze kterých stojí historická tvrzení bloku */
  zdroje: z.array(Id).default([]),
  /**
   * Co ještě čeká na ověření (atlas-overeni). Blok s neprázdným seznamem smí být jen v dílně
   * (/dilna/); na jiné stránce zastaví sestavení.
   */
  kOvereni: z.array(Text).default([]),
};

export const BlokVolba = z
  .object({
    druh: z.literal('volba'),
    ...zaklad,
    moznosti: z
      .array(
        z
          .object({
            text: Text,
            /** krátký popis tahu do titulku zpětné vazby: „Tvůj tah: zeptat se znovu.“ */
            tah: Text,
            /** zpětná vazba k této volbě: vysvětluje důvod, nehodnotí souhlas */
            zpetna: Text,
            /** tuhle cestu zvolil filozof z oddílu „Co udělal …“ */
            jeho: z.boolean().default(false),
          })
          .strict(),
      )
      .min(2)
      .max(4),
    /** oddíl „Co udělal …“ po volbě; osoba je id v lide.yaml */
    coUdelal: z
      .object({
        osoba: Id,
        /** když student zvolil stejně jako filozof */
        stejne: Text,
        /** když zvolil jinak */
        jinak: Text,
      })
      .strict()
      .optional(),
  })
  .strict()
  .refine((b) => !b.coUdelal || b.moznosti.filter((m) => m.jeho).length === 1, {
    message: 'S oddílem coUdelal musí mít právě jedna možnost jeho: true.',
  })
  .refine((b) => b.coUdelal || b.moznosti.every((m) => !m.jeho), {
    message: 'Možnost s jeho: true potřebuje oddíl coUdelal.',
  });

export const BlokZmena = z
  .object({
    druh: z.literal('zmena'),
    ...zaklad,
    /** rozhodnutí, mezi kterými student volí (stejná pro základ i všechny podmínky) */
    moznosti: z.array(z.object({ id: Id, text: Text }).strict()).min(2).max(4),
    /** podmínky, které se dají přepnout; každá mění jednu věc ve scéně */
    podminky: z
      .array(
        z
          .object({
            id: Id,
            /** krátký popisek přepínače: „Rozsudek je spravedlivý“ */
            prepinac: Text,
            /** co se ve scéně změnilo („Teď si představ, že…“) */
            zmena: Text,
            /** zpětná vazba, když se odpověď posunula */
            posun: Text,
            /** zpětná vazba, když zůstala stejná */
            stejne: Text,
          })
          .strict(),
      )
      .min(1)
      .max(3),
    /** co udělal skutečný člověk (volitelné, ukáže se po prvním posunu nebo nezměně) */
    coUdelal: z.object({ osoba: Id, text: Text }).strict().optional(),
  })
  .strict()
  .refine((b) => new Set(b.moznosti.map((m) => m.id)).size === b.moznosti.length, { message: 'Id možností se opakuje.' })
  .refine((b) => new Set(b.podminky.map((m) => m.id)).size === b.podminky.length, { message: 'Id podmínek se opakuje.' });

export const StranaSporu = z
  .object({
    /** id osoby v lide.yaml; jméno se vezme z dat */
    osoba: Id,
    /** postoj jednou větou: „To, co pochopím.“ */
    postoj: Text,
    /** nejsilnější argumenty (1–3 odstavce) */
    argumenty: z.array(Text).min(1).max(3),
  })
  .strict();

export const BlokSpor = z
  .object({
    druh: z.literal('spor'),
    ...zaklad,
    /** levý a pravý konec škály */
    strany: z.tuple([StranaSporu, StranaSporu]),
  })
  .strict()
  .refine((b) => b.strany[0].osoba !== b.strany[1].osoba, { message: 'Spor potřebuje dvě různé osoby.' });

export const Blok = z.union([BlokVolba, BlokZmena, BlokSpor]);

export type TBlokVolba = z.infer<typeof BlokVolba>;
export type TBlokZmena = z.infer<typeof BlokZmena>;
export type TBlokSpor = z.infer<typeof BlokSpor>;
export type TBlok = z.infer<typeof Blok>;
