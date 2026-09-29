// Práce s letopočty. Záporné roky jsou př. n. l.; rok nula neexistuje (po −1 následuje 1).
import type { TDatum, TOsoba } from './schema';

const NBSP = ' ';

/** Počet let mezi dvěma letopočty (přes přelom letopočtu bez roku nula). */
export function rozdilLet(od: number, do_: number): number {
  const d = do_ - od;
  return od < 0 && do_ > 0 ? d - 1 : od > 0 && do_ < 0 ? d + 1 : d;
}

/** Věk v daném roce (bez ohledu na měsíc narození). */
export function vek(narozen: number, rok: number): number {
  return rozdilLet(narozen, rok);
}

/** „399 př. n. l.“ nebo „121 n. l.“ (s nezlomitelnými mezerami). */
export function rok(r: number, sLetopoctem: 'vzdy' | 'jen-pnl' = 'vzdy'): string {
  if (r < 0) return `${-r}${NBSP}př.${NBSP}n.${NBSP}l.`;
  return sLetopoctem === 'vzdy' ? `${r}${NBSP}n.${NBSP}l.` : String(r);
}

function cast(d: TDatum | undefined, predpona = true): string {
  if (!d) return '?';
  const asi = d.priblizne ? `asi${NBSP}` : d.nejpozdeji && predpona ? `před${NBSP}` : '';
  return asi + String(Math.abs(d.rok));
}

/** Rozpětí života: „469–399 př. n. l.“, „asi 55–135 n. l.“, „asi 1 př. n. l. – 65 n. l.“. */
export function zivot(o: Pick<TOsoba, 'narozen' | 'zemrel' | 'aktivni'>): string {
  const { narozen: n, zemrel: z, aktivni: a } = o;
  if (n && z) {
    const stejnaEra = (n.rok < 0) === (z.rok < 0);
    if (stejnaEra) {
      const era = z.rok < 0 ? `${NBSP}př.${NBSP}n.${NBSP}l.` : `${NBSP}n.${NBSP}l.`;
      const zText = z.nejpozdeji ? `před${NBSP}${Math.abs(z.rok)}` : `${z.priblizne && !n.priblizne ? `asi${NBSP}` : ''}${Math.abs(z.rok)}`;
      return `${cast(n)}–${zText}${era}`;
    }
    return `${cast(n)}${NBSP}př.${NBSP}n.${NBSP}l. – ${cast(z)}${NBSP}n.${NBSP}l.`;
  }
  if (n) return `nar. ${n.priblizne ? `asi${NBSP}` : ''}${rok(n.rok)}`;
  if (z) return `${z.nejpozdeji ? `zemřel před${NBSP}` : `zem. ${z.priblizne ? `asi${NBSP}` : ''}`}${rok(z.rok)}`;
  if (a) {
    const asi = a.priblizne ? `asi${NBSP}` : '';
    if (a.do === undefined) return `působil ${asi}kolem ${rok(a.od)}`;
    const era = a.do < 0 ? `${NBSP}př.${NBSP}n.${NBSP}l.` : `${NBSP}n.${NBSP}l.`;
    return a.od < 0 === a.do < 0 ? `působil ${asi}${Math.abs(a.od)}–${Math.abs(a.do)}${era}` : `působil ${asi}${rok(a.od)} – ${rok(a.do)}`;
  }
  return '';
}

/** Hrubý interval života pro osy: [od, do], nebo null, když data chybí. */
export function interval(o: Pick<TOsoba, 'narozen' | 'zemrel' | 'aktivni'>): [number, number] | null {
  const n = o.narozen?.rok ?? o.aktivni?.od;
  const z = o.zemrel?.rok ?? o.aktivni?.do;
  if (n === undefined || z === undefined) return null;
  return [n, z];
}

/** Žije osoba v daném roce? (od roku narození do roku úmrtí včetně) */
export function zijeVRoce(o: Pick<TOsoba, 'narozen' | 'zemrel' | 'aktivni'>, r: number): boolean {
  const i = interval(o);
  return !!i && r >= i[0] && r <= i[1];
}
