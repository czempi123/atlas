// Společné typy ostrovů bloků (předávají je obaly v src/components/bloky).
export interface ClovekBloku {
  jmeno: string;
  obdobi: number;
  /** id ikony atributu (mince) */
  ikona?: string;
  zena?: boolean;
}
export interface Dal {
  href: string;
  text: string;
}
