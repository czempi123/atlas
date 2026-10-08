// Schémata obsahu interaktivních bloků (src/content/bloky/*.yaml).
// Blok s více možnostmi (Volba s důvodem, Změň jednu věc, Spor, Roztřiď) se píše do YAML a do MDX se vkládá
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
  /** „Kam dál“ po dokončení bloku (v cestě se doplní další krok sám) */
  dal: z.object({ href: z.string().startsWith('/'), text: Text }).strict().optional(),
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
    /**
     * Blok bez pole „Proč právě tohle?“: student volí jen možnost a do deníku se uloží jen ona.
     * Pro otázky, u kterých by důvod byl zpověď (cesta 4: „Co ti tehdy chybělo?“).
     */
    bezDuvodu: z.boolean().default(false),
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
    /**
     * co udělal skutečný člověk (volitelné, ukáže se po prvním posunu nebo nezměně);
     * `nadpis` nahradí „Co udělal …“ tam, kde text říká, co by lidé nejspíš řekli k vymyšlenému případu
     */
    coUdelal: z.object({ osoba: Id, nadpis: Text.optional(), text: Text }).strict().optional(),
  })
  .strict()
  .refine((b) => new Set(b.moznosti.map((m) => m.id)).size === b.moznosti.length, { message: 'Id možností se opakuje.' })
  .refine((b) => new Set(b.podminky.map((m) => m.id)).size === b.podminky.length, { message: 'Id podmínek se opakuje.' });

export const StranaSporu = z
  .object({
    /** id osoby v lide.yaml; jméno se vezme z dat */
    osoba: Id,
    /**
     * Jak stranu nazvat místo jména osoby, když za ni mluví celý směr („kynici“). Malým písmenem,
     * jak stojí uprostřed věty; na škále a v nadpisech se první písmeno zvětší samo. Mince zůstává osoby.
     */
    oznaceni: Text.optional(),
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

export const BlokRoztrid = z
  .object({
    druh: z.literal('roztrid'),
    ...zaklad,
    /** koše, do kterých student třídí */
    kose: z
      .array(
        z
          .object({
            id: Id,
            /** krátký název: „Potřebuju“ */
            nazev: Text,
            /** jedna věta, podle čeho do koše věc patří */
            popis: Text.optional(),
          })
          .strict(),
      )
      .min(2)
      .max(4),
    /** karty k roztřídění */
    karty: z
      .array(
        z
          .object({
            id: Id,
            text: Text.max(60),
            /** zpětná vazba ke kartě po roztřídění, ať leží v kterémkoli koši: důvod a otázka dál */
            zpetna: Text.optional(),
            /** zpětná vazba jen pro některý koš (id koše → text); má přednost před `zpetna` */
            kdyz: z.record(Id, Text).optional(),
          })
          .strict(),
      )
      .min(3)
      .max(8),
    /** vlastní karty, které smí student přidat */
    vlastni: z
      .object({
        pocet: z.number().int().min(1).max(3),
        /** popisek pole: „Přidej vlastní věc z tohoto týdne“ */
        vyzva: Text,
        /** zpětná vazba k vlastní kartě (stejná pro všechny koše) */
        zpetna: Text.optional(),
      })
      .strict()
      .optional(),
    /** srovnání po roztřídění; s osobou má minci filozofa a smí stát jen na doložených faktech */
    srovnani: z.object({ osoba: Id.optional(), nadpis: Text, text: Text }).strict().optional(),
  })
  .strict()
  .refine((b) => new Set(b.kose.map((k) => k.id)).size === b.kose.length, { message: 'Id košů se opakuje.' })
  .refine((b) => new Set(b.karty.map((k) => k.id)).size === b.karty.length, { message: 'Id karet se opakuje.' })
  .refine((b) => b.karty.every((k) => !/^vlastni-\d+$/.test(k.id)), { message: 'Id „vlastni-N“ je vyhrazené kartám studenta.' })
  .refine((b) => b.karty.every((k) => Object.keys(k.kdyz ?? {}).every((kos) => b.kose.some((x) => x.id === kos))), {
    message: 'Zpětná vazba `kdyz` odkazuje na koš, který v bloku není.',
  });

/**
 * Návrat: krátký nový případ, který deník nabídne několik dní po dokončení cesty. Student na něm zkouší
 * vlastní závěrečné pravidlo; nic se nehodnotí. Otázka („Platí tvoje pravidlo i tady?“) a možnosti jsou
 * pro všechny návraty stejné a píše je blok; v YAML je jen případ a věta po každé odpovědi.
 */
export const BlokNavrat = z
  .object({
    druh: z.literal('navrat'),
    obdobi: Obdobi,
    /** slug cesty, ke které návrat patří (nejvýš jeden návrat na cestu) */
    cesta: Id,
    /** id závěrečného pravidla v posledním kroku cesty (`<ZaverCesty id="…" />`) */
    pravidlo: Id,
    /** krátký název případu: stojí v zápisu v deníku („Návrat · Nový telefon: …“) */
    nazev: Text,
    /** nový případ („Představ si…“), bez historických osob a bez tvrzení, která by potřebovala pramen */
    scena: Text,
    /** věta po odpovědi: jedna, ptá se dál a nehodnotí */
    po: z.object({ ano: Text, upravim: Text, nevim: Text }).strict(),
    zdroje: zaklad.zdroje,
    kOvereni: zaklad.kOvereni,
  })
  .strict();

export const Blok = z.union([BlokVolba, BlokZmena, BlokSpor, BlokRoztrid, BlokNavrat]);

export type TBlokVolba = z.infer<typeof BlokVolba>;
export type TBlokZmena = z.infer<typeof BlokZmena>;
export type TBlokSpor = z.infer<typeof BlokSpor>;
export type TBlokRoztrid = z.infer<typeof BlokRoztrid>;
export type TBlokNavrat = z.infer<typeof BlokNavrat>;
export type TBlok = z.infer<typeof Blok>;
