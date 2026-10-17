# Plán větve doba-odkazy: jména v Době a lidech jako odkazy

Malý krok mimo celky. Jména lidí v oddílu Doba a lidé (učitelé a žáci, známí, vliv přes texty, spory, řetěz Kdo navazoval) se stanou odkazy na jejich stránku, když ji mají. Navrhla to revize celku 8 (`docs/revize/celek-8-2026-10-16.md`, Doporučení) a autor to schválil 16. 10. 2026; pořadí v `docs/plan.md` ho staví před medailonky (P9). Větev je založená z hlavní větve 17. 10. 2026 (commit `a11d695`, po sloučení celku 8). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| O1 | Odkazy v Době a lidech, testy, snímky | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/doba-odkazy.md` |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/doba-odkazy.md` |

Stav a zadání dalších kroků se zapisují sem. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/doba-odkazy.md`.

## Proč a co z toho plyne

- **Proč teď:** Kratéta z Diogenovy stránky dnes student najde jen přes Kam dál, Mapu a čas nebo Lidi a směry. Doba a lidé ho jmenuje, ale nikam nevede, a totéž platí na všech dvanácti profilech (Sókratés → Platón, Platón → Aristotelés, Epikúros → Démokritos…).
- **Proč před medailonky:** odkaz se řídí tím, jestli osoba stránku má (`src/lib/adresa-osoby.ts`). Až P9 přidá medailonky, odkazy přibudou samy a medailonky z nich budou dosažitelné hned.
- **Co se nemění:** data (`lide.yaml`, `vztahy.yaml`), texty, mini osa a mini mapa.

## Po O1 (17. 10. 2026)

**Co se změnilo.** `src/components/osobnost/DobaALide.astro` volá `adresaOsoby` nad kolekcí `osobnosti`. Jméno člověka se stránkou je odkaz ve skupinách vztahů i v řetězu Kdo navazoval; osoby stránky (`osoba` a `dalsi`) a lidé bez stránky zůstávají prostým textem, osoba stránky v řetězu dál tučně. Odkaz je inkoustový text s tenkým podtržením v barvě období (při najetí 2 px), `inline-block` s 2 px nahoře a dole, takže cíl dotyku má aspoň 24 px. Fokus je globální `:focus-visible`. Mince, mini osa, mini mapa, data a texty beze změny.

**Testy.** Nový `tests/e2e/doba-odkazy.spec.ts`: Kratés na Diogenovi vede na společný profil (ve skupině i v řetězu), Antisthenés odkaz nemá, Diogenés v řetězu zůstává zvýrazněný; na společném profilu vede Diogenés na `/osobnost/diogenes/`, Zénón z Kitia odkaz nemá, Kratés v řetězu zvýrazněný bez odkazu; na Sókratovi vede Platón na `/osobnost/platon/`; na žádném z dvanácti profilů nevede odkaz na sebe a každý vede na existující profil; odkazy mají aspoň 24 px a stránky na 390 px nepřetékají. Testy, které čtou jména textem (krates-hipparchia, celek7-profily, platon, seneca, aristoteles, obsah, mini-mapa), platí beze změny: odkaz je uvnitř `.lide__jmeno` a v řetězu nepřidává mezery („Kratés→Zénón z Kitia“).

**Kontrola proti datům.** `node scripts/doba-odkazy-vypis.mjs` (po `npm run build`) vypíše odkazy ze všech profilů v `dist/` a porovná je se seznamem osob se stránkou: 0 chyb. Bez odkazu zůstávají jen lidé bez stránky (Antisthenés, Xenofón, Speusippos, Zénón z Kitia, Kleanthés, Lucretius, Plútarchos…) a osoby stránky. Po P9 (medailonky) stačí skript pustit znovu.

**Co jsem zvažoval.**
- Barva podtržení: inkoust (jako ostatní odkazy v textu) nebo barva období. Zvolil jsem barvu období: v seznamu, kde stojí jména bez odkazu stejným písmem, je odkaz poznat i bez barevného textu a jazyk odpovídá kartě v Mapě a čase. Text zůstává inkoustový, takže odkaz nepřekřičí nadpis.
- Cíl dotyku 24 px místo 44 px (skill `atlas-komponenta`): jméno je odkaz v seznamu, ne tlačítko; 44 px by rozhodilo řádky. Vyhovuje WCAG 2.5.8. Kdyby chtěl autor větší cíl, šlo by udělat odkazem celý řádek včetně mince.
- Mince jako druhý odkaz: ne, zdvojený cíl by čtečka hlásila dvakrát.
- Řetěz Kdo navazoval na společném profilu začíná Kratétem (Diogenés v něm není), takže tam odkaz nese jen skupina Učitelé.

**Snímky** (`Claude outputs/doba-odkazy/`): `list-diogenes-390.jpg`, `list-diogenes-1440.jpg`, `list-krates-a-hipparchia-390.jpg`, `list-krates-a-hipparchia-1440.jpg`, `list-platon-390.jpg`, `list-platon-1440.jpg` (vždy světlý vlevo, tmavý vpravo) a jednotlivé snímky `doba-<stránka>-<šířka>-<režim>.png`. Na snímcích 1440 px přes mini osu leží lišta Obsahu: je to pevná lišta zachycená snímkem prvku, na stránce je v pořádku. `scripts/kontrola-fokus.mjs` na Diogenovi, společném profilu a Platónovi na 390 a 1440 px: vše v pořádku.

## Uzavření větve (17. 10. 2026)

Autor 17. 10. 2026 větev schválil. Je sloučená do hlavní větve bez konfliktů (hlavní větev se od založení větve nehnula, kód je tedy totožný s větví, na které `npm test` prošel celý). Plán je v archivu a hlavní větev je na GitHubu. Další v pořadí: `medailonky` (P9).

