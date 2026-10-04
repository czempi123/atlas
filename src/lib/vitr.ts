// Stejný vítr (profil Prótagora, kapitola 01): kresba ke větru z Theaitéta. Dva lidé stojí v jednom větru.
// Vítr se v kresbě nemění. Student mění jen to, co má kdo za sebou: čekání na místě, nebo rychlou chůzi.
// Podle toho je mu zima, nebo ne. Co má kdo za sebou, je náš přídavek k Platónovu příkladu: student tak má v ruce
// jedinou věc, kterou může změnit, a vítr přitom zůstává stejný.
// Podklad: docs/podklady/celek-1-pravda.md › Tvrzení: Prótagorás, bod 1 (Theaitétos 152a–b).

export type Predtim = 'cekani' | 'chuze';
export type Kdo = 'ty' | 'kamarad';
export type StavVetru = Record<Kdo, Predtim>;

/** Kresba začíná Platónovým případem: jednomu je zima, druhému ne. */
export const VYCHOZI_VITR: StavVetru = { ty: 'cekani', kamarad: 'chuze' };

export const LIDE: { id: Kdo; nazev: string }[] = [
  { id: 'ty', nazev: 'Ty' },
  { id: 'kamarad', nazev: 'Kamarád' },
];

export const PREDTIM: { id: Predtim; nazev: string }[] = [
  { id: 'cekani', nazev: 'čekání' },
  { id: 'chuze', nazev: 'chůze' },
];

/** Komu je ve větru zima: tomu, kdo předtím stál na místě. */
export const jeZima = (predtim: Predtim): boolean => predtim === 'cekani';

/** Co kdo o větru říká (popisek nad postavou). */
export const rec = (predtim: Predtim): string => (jeZima(predtim) ? '„Je mi zima.“' : '„Není mi zima.“');

/** Text pod kresbou: říká slovy, co je na kresbě. Kdo má pravdu, neříká. */
export function popisVetru(stav: StavVetru): string {
  const ty = jeZima(stav.ty);
  const kamarad = jeZima(stav.kamarad);
  if (ty && kamarad) return 'Oba jste čekali na místě a oběma je zima. Vítr se přitom nezměnil.';
  if (!ty && !kamarad) return 'Oba vás zahřála chůze a zima není ani jednomu. Vítr se přitom nezměnil.';
  if (ty) return 'Tobě je po čekání na místě zima. Kamaráda zahřála chůze a zima mu není. Vítr fouká na oba stejně.';
  return 'Tebe zahřála chůze a zima ti není. Kamarádovi je po čekání na místě zima. Vítr fouká na oba stejně.';
}
