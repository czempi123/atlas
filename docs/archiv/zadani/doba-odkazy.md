# Provedená zadání větve doba-odkazy

Zadání kroků, které už proběhly, v plném znění. Větev je uzavřená 17. 10. 2026; plán větve se stavem po každém kroku je v `docs/archiv/plany/doba-odkazy.md`.

Autor zadání poslal 17. 10. 2026 se čtyřmi prázdnými řádky odpovědí (souhlas s návrhem).

## O1: Jména v Době a lidech jako odkazy

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · medium.** Jedna komponenta, odkazy z hotové funkce, úprava testů a snímky; vyšší úsilí by přidalo čas, ne kvalitu.

Co necháš prázdné, bere se jako souhlas s návrhem.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi doba-odkazy (založená z main po sloučení celku 8). Plán je v docs/plany/doba-odkazy.md.

Moje odpovědi (prázdné = souhlas s návrhem):
- Odkaz má jen jméno, bez „Otevřít“ a bez šipky: 
- Lidé bez stránky (Antisthenés, Zénón z Kitia…) zůstávají bez odkazu, stejným písmem: 
- Řetěz Kdo navazoval dostane odkazy taky, osoba stránky v něm zůstává zvýrazněná bez odkazu: 
- Mini osa a mini mapa beze změny: 

Úkol: jména lidí v oddílu Doba a lidé (src/components/osobnost/DobaALide.astro) udělej odkazy na jejich stránku, když ji mají. Adresu ber z src/lib/adresa-osoby.ts (Kratés i Hipparchia vedou na /osobnost/krates-a-hipparchia/). Osoby, o kterých stránka je, odkaz nedostanou. Postupuj podle skillu atlas-komponenta: design tokeny, odkaz rozpoznatelný jako odkaz, ale tišší než nadpis, viditelný fokus, cíl dotyku aspoň 24 px, nic nepřetéká na 390 px.

Čti úsporně podle oddílu „Co číst a jak šetřit“ v CLAUDE.md: CLAUDE.md, docs/styl.md, docs/pouceni.md (oddíly Co se skládá z dat a Technika), tento plán, DobaALide.astro, adresa-osoby.ts a testy, které Dobu a lidi hlídají (grep -rln "doba\|navazovali" tests). Jako vzor použití adresaOsoby stačí jedna komponenta, která ji už volá.

Testy: najdi v tests/ místa, která čtou jména v Době a lidech textem (krates-hipparchia, celek7-profily, platon, seneca, aristoteles, obsah), a ověř, že po změně pořád platí. Přidej test, který hlídá cíle odkazů: na Diogenovi vede Kratés na společný profil a Antisthenés odkaz nemá; na společném profilu vede Diogenés na /osobnost/diogenes/ a Zénón z Kitia odkaz nemá; na Sókratovi vede Platón na /osobnost/platon/; žádný odkaz nevede na stránku, na které je. Po sestavení si skutečné odkazy vypiš z dist/ a porovnej se seznamem osob se stránkou.

Snímky: Doba a lidé u Diogena, u společného profilu a u Platóna na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-prvek.mjs se selektorem .doba). scripts/kontrola-fokus.mjs na stejných třech stránkách na 390 a 1440 px.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci zapiš do docs/plany/doba-odkazy.md oddíl „Po O1“ (co se změnilo, co jsi zvažoval, snímky), toto zadání přesuň do docs/archiv/zadani/doba-odkazy.md, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve aktualizuj i v projektu Claude a restartuj náhled npm run dev. Pak mi napiš, co se změnilo, a připrav uzavření větve (sloučení a GitHub jen na můj pokyn).
```

## Uzavření větve

Jen na pokyn autora. **Opus 5.5 · low.** Sloučení a odeslání, bez psaní obsahu.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas) přes Desktop Commander. Větev doba-odkazy schvaluji. Slouč ji do main, zapiš do docs/rozhodnuti.md, že je uzavřená, přesuň docs/plany/doba-odkazy.md do docs/archiv/plany/, v docs/plan.md u větve doba-odkazy zapiš stav a další v pořadí (medailonky), pošli main na GitHub, aktualizuj docs/plan.md v projektu Claude, odeber z něj plán větve a restartuj náhled npm run dev.
```
