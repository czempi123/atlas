// Data pro ostrov Mapa a čas: kompaktní výtah z src/data sestavený při buildu.
// Typy (VstupMapy a spol.) sdílí ostrov; funkce vstupMapy() běží jen při sestavení.
import type { TOsoba, TVztah } from './schema';

export interface OsobaV {
  id: string;
  jmeno: string;
  jmeno2?: string;
  zena?: boolean;
  narozen?: TOsoba['narozen'];
  zemrel?: TOsoba['zemrel'];
  aktivni?: TOsoba['aktivni'];
  obdobi: number;
  hloubka: TOsoba['hloubka'];
  tradice: TOsoba['tradice'];
  mista: TOsoba['mista'];
  kdo: string;
  proc: string;
  atribut?: { ikona: string; nazev: string; proc: string };
  /** stránka osobnosti, pokud už existuje */
  stranka?: string;
  /** „469–399 př. n. l.“ */
  zivot: string;
}

export interface MistoV {
  id: string;
  nazev: string;
  dnes: string;
  oblast?: boolean;
}

export interface UdalostV {
  id: string;
  nazev: string;
  od: number;
  do?: number;
  druh: 'kotva' | 'zivot';
  osoby: string[];
  misto?: string;
  obdobi: number[];
}

export interface ObdobiV {
  id: number;
  nazev: string;
  kratce: string;
  okno: { od: number; do: number };
  /** „650–300 př. n. l.“ */
  oknoText: string;
  popis: string;
  /** období už má v atlasu lidi, dá se na něj přepnout */
  otevrene: boolean;
  /** ornament malého pásu pro úzký a široký segment */
  ornament: { uzky: string; siroky: string };
}

export interface VstupMapy {
  lide: OsobaV[];
  mista: MistoV[];
  vztahy: Pick<TVztah, 'od' | 'k' | 'typ' | 'tradovany' | 'poznamka'>[];
  udalosti: UdalostV[];
  obdobi: ObdobiV[];
  /** rozsah posuvníku: od začátku prvního do konce posledního otevřeného období */
  rozsah: [number, number];
  /** hustota myslitelů po 25 letech přes celých 2 600 let */
  hustota: { od: number; pocet: number }[];
  /** celý rozsah dějin atlasu */
  dejiny: [number, number];
}
