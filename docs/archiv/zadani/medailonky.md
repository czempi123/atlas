# Provedená zadání větve medailonky

Zadání kroků, které už proběhly, v plném znění. Plán větve se stavem po každém kroku je v `docs/plany/medailonky.md`.

## M0: inventura, skill, šablona a plán

Autor zadání poslal 17. 10. 2026 (Opus 5.5 · high).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Založ z main větev medailonky (P9: stránky medailonků z dat pro osoby, které stránku nemají, a doplnění jejich dat). Tento krok je M0: inventura, skill, šablona a plán. Obsah medailonků zatím nepiš.

1. Inventura. Projdi src/data/lide.yaml, vztahy.yaml a mista.yaml a sepiš, kdo nemá vlastní stránku (hloubka medailonek nebo bez stránky) a co mu z dat chybí pro medailonek: roky, místa s rolí, směr, věta „kdo“, věta „proč“, vztahy se zdrojem. Pomocný skript dej do scripts/ a výstup do Claude outputs/medailonky/. Rozděl osoby do vln podle toho, jak často se objevují v Době a lidech, na mapě a v cestách. Nejdřív ty, na které už vedou jména bez odkazu.

2. Skill atlas-data. Vytvoř skills/atlas-data/SKILL.md podle šablony ostatních skillů (krátký postup a kritéria hotového, 1–3 referenční soubory s ukázkami ze skutečných záznamů). Obsah: schéma osoby, místa a vztahu; přibližná a sporná data (priblizne, rok nula neexistuje, narození před úmrtím, učitel starší než žák); typy vztahů a kdy který použít; každý vztah a údaj se zdrojem v zdroje.yaml; jak psát „kdo“ a „proč“ (jedna živá věta, tykání se v datech nepoužívá, styl podle docs/styl.md); kdy přepnout na atlas-overeni; které testy po vyplnění pustit. Skill musí stačit Sonnetu 5.5 na hromadné vyplňování bez dalšího vysvětlování.

3. Šablona medailonku. Navrhni stránku /osobnost/<id>/ pro hloubku medailonek: hlavička, kdo a proč, Doba a lidé z dat, Kam dál. Vše se generuje z dat, ručně se nic nepíše. Použij stávající komponenty a design tokeny; skill atlas-komponenta jen pokud bude potřeba nová. Postav ji na dvou osobách s nejúplnějšími daty, aby šla vidět v náhledu. adresaOsoby pak má vést i na medailonky; ověř, že odkazy v Době a lidech přibudou samy.

4. Plán. Napiš docs/plany/medailonky.md podle vzoru ostatních plánů větví: úvod, tabulka kroků se stavem, oddíl „Po M0“ (co vzniklo, co jsi zvažoval, kolik osob a vln) a plné zadání dalšího kroku M1 (data první vlny, Sonnet 5.5 · medium se skillem atlas-data, sporné prameny Opus 5.5 · high) a zadání uzavření. Do docs/plan.md doplň řádek větve do rozcestníku a u P9 odkaz na skill.

Snímky: medailonek obou osob na 390 a 1440 px ve světlém i tmavém režimu a Doba a lidé u některé osoby, která na ně odkazuje (scripts/snimky-prvek.mjs), do Claude outputs/medailonky/. scripts/kontrola-fokus.mjs na obou medailoncích.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/medailonky.md, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/medailonky.md, aktualizuj tam docs/plan.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo, kolik osob je ve kterých vlnách a co je potřeba rozhodnout.
```

## M1: data první vlny

Autor zadání poslal 17. 10. 2026 (Sonnet 5.5 · medium se skillem `atlas-data`).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi medailonky. Plán je v docs/plany/medailonky.md (tabulka a oddíl Po M0), postup ve skillu atlas-data (kopie ve skills/atlas-data/).

Moje odpovědi (prázdné = souhlas s návrhem):
- Medailonek bez atributu má hlavičku bez desky: 
- Karta v Mapě a čase smí u medailonku dál říkat „Otevřít portrét“: 
- Kam dál má nejvýš tři položky: 

Krok M1: data první vlny. Osoby: Plútarchos, Lucretius, Chrýsippos, Antisthenés, Xenokratés, Chairefón, Démokritos, Kritón.

1. Pusť node scripts/medailonky-inventura.mjs a u každé osoby vlny projdi Chybí a Poznámky.
2. U každé osoby podle skillu atlas-data ověř a doplň roky, místa s rolí, směr (jen patřil-li ke škole), vztahy se zdrojem a věty kdo a proč (jedna živá věta, bez tykání, styl podle docs/styl.md; „proč“ nesmí opakovat atribut ani vztah). Atribut doplň, jen když ho prameny nesou a ikona už je v docs/design/atributy-ikony.json; jinak ho nech na později a zapiš do podkladů. Lucretius nemá žádné místo: doplň ho z pramene, nebo ho nech bez medailonku a zapiš proč. U Zénóna z Kitia (medailonek z M0) přepiš „proč“, které opakuje atribut sloupoví.
3. Každý nový údaj má pramen, který jsi otevřel; nový pramen zapiš do zdroje.yaml s datem overeno a poznámkou, co z něj bereš. Sporné (jiné roky o víc než deset let, vztah jen z jednoho antického svědectví, tradovaný příběh do „proč“) dělej Opus 5.5 · high se skillem atlas-overeni, nebo to zapiš jako otázku pro mě. Nové osoby nepřidávej; data lidí s profilem nebo portrétem neměň.
4. Osobě, která projde tests/data/medailonky.test.ts, přidej medailonek: true. Kdo neprojde, zůstane bez příznaku a v podkladech má důvod.
5. Podklady vlny zapiš do docs/podklady/medailonky-vlna-1.md podle šablony ve skillu (co se změnilo, z jakého pramene, co zůstalo otevřené, otázky pro mě s doporučením a prázdným řádkem na odpověď).

Snímky: medailonek každé nové osoby na 390 px (světlý) a dvou z nich na 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs) a Doba a lidé u Sókrata a Epikúra (scripts/snimky-prvek.mjs '.doba'), do Claude outputs/medailonky/vlna-1/. scripts/kontrola-fokus.mjs na nových medailoncích. node scripts/doba-odkazy-vypis.mjs po npm run build musí skončit „Chyb: 0“.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky po osobách nebo malých skupinách, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/medailonky.md, do plánu větve zapiš stav a oddíl „Po M1“ (kolik osob dostalo medailonek, co zůstalo otevřené) a plné zadání M2 (druhá vlna, stejná struktura), rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/medailonky.md, aktualizuj tam docs/plan.md, když se změnil, a restartuj náhled npm run dev. Pak mi napiš, kdo dostal medailonek, kdo ne a proč, a co mám rozhodnout.
```

## M2: data druhé vlny

Autor zadání poslal 17. 10. 2026 (Sonnet 5.5 · medium se skillem `atlas-data`).

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Sonnet 5.5 · medium** se skillem `atlas-data`; sporné úseky Opus 5.5 · high se skillem `atlas-overeni` (přepnutím modelu v témže chatu, nebo otázka do podkladů). Po M1 se ukázalo, že většině osob data stačí a práce je hlavně v ověření proti pramenům; skutečné opravy „proč“ čekají u Eudoxa, Xenofónta a Musonia Rufa.

Co necháš prázdné, bere se jako souhlas s návrhem.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi medailonky. Plán je v docs/plany/medailonky.md (tabulka a oddíly Po M0 a Po M1), postup ve skillu atlas-data (kopie ve skills/atlas-data/).

Moje odpovědi k otázkám z vlny 1 (docs/podklady/medailonky-vlna-1.md, oddíl Pro autora; prázdné = souhlas s doporučením):

Krok M2: data druhé vlny. Osoby: Alkibiadés, Eudoxos, Aristippos, Aristofanés, Musonius Rufus, Theofrastos, Xenofanés, Archytás, Speusippos, Xenofón, Zénón z Eleje.

1. Pusť node scripts/medailonky-inventura.mjs a u každé osoby vlny projdi Chybí a Poznámky. Většině chybí jen ověření; skutečné opravy „proč“ čekají u Eudoxa a Xenofónta (opakuje atribut) a u Musonia Rufa (opakuje jen vztah k Epiktétovi).
2. U každé osoby podle skillu atlas-data ověř a doplň roky, místa s rolí, směr (jen patřil-li ke škole; Alkibiadés a Aristofanés ho nemají), vztahy se zdrojem a věty kdo a proč (jedna živá věta, bez tykání, styl podle docs/styl.md; „proč“ nesmí opakovat atribut ani vztah). Atribut doplň, jen když ho prameny nesou a ikona už je v docs/design/atributy-ikony.json; jinak ho nech na později a zapiš do podkladů. Zénón z Eleje má hloubku profil, ale stránku zatím nemá: medailonek dostane stejně a profil později.
3. Každý nový údaj má pramen, který jsi otevřel; nový pramen zapiš do zdroje.yaml s datem overeno a poznámkou, co z něj bereš. Heslo SEP nebo IEP stáhni na Macu (curl, text, grep), ne nástrojem WebFetch (ten vrací celou stránku); Britannica curl nepustí, Perseus (perseus.tufts.edu/hopper) ano. Sporné (jiné roky o víc než deset let, vztah jen z jednoho antického svědectví, tradovaný příběh do „proč“) dělej Opus 5.5 · high se skillem atlas-overeni, nebo to zapiš jako otázku pro mě. Nové osoby nepřidávej; data lidí s profilem nebo portrétem neměň. Wikipedii mezi prameny nezapisuj: údaj, který jiný pramen nenese, zapiš jako otevřený.
4. Osobě, která projde tests/data/medailonky.test.ts, přidej medailonek: true. Kdo neprojde, zůstane bez příznaku a v podkladech má důvod.
5. Podklady vlny zapiš do docs/podklady/medailonky-vlna-2.md podle šablony ve skillu (co se změnilo, z jakého pramene, co zůstalo otevřené, otázky pro mě s doporučením a prázdným řádkem na odpověď).

Snímky: medailonek každé nové osoby na 390 px (světlý) a dvou z nich na 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs) a Doba a lidé u Platóna a Aristotela (scripts/snimky-prvek.mjs '.doba'), do Claude outputs/medailonky/vlna-2/. scripts/kontrola-fokus.mjs na nových medailoncích. node scripts/doba-odkazy-vypis.mjs po npm run build musí skončit „Chyb: 0“.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts nebo test v obsah.spec.ts, pusť ten soubor znovu samostatně. Testy, které čtou seznamy odkazů podle jmen (otazka.spec.ts, cesta8.spec.ts, hledání v prohlidka.spec.ts), padnou s každým novým medailonkem: uprav jen ty, které padnou kvůli novému odkazu. Commituj česky po osobách nebo malých skupinách, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/medailonky.md, do plánu větve zapiš stav a oddíl „Po M2“ (kolik osob dostalo medailonek, co zůstalo otevřené) a plné zadání M3 (třetí vlna: Cicero, Karneadés, Anaxagorás, Gorgiás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Anaximandros, Anaximenés, Empedoklés, Pyrrhón, Thalés; stejná struktura; upozorni v něm, že 11 osob nemá žádný vztah, a bez vztahu medailonek nevznikne, takže se vztah hledá v pramenech a nová osoba se nepřidává), rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/medailonky.md, aktualizuj tam docs/plan.md, když se změnil, a restartuj náhled npm run dev. Pak mi napiš, kdo dostal medailonek, kdo ne a proč, a co mám rozhodnout.
```

## M3: data třetí vlny

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Sonnet 5.5 · medium** se skillem `atlas-data`; sporné úseky Opus 5.5 · high se skillem `atlas-overeni` (přepnutím modelu v témže chatu, nebo otázka do podkladů). Tahle vlna je těžší než předchozí: **jedenáct osob nemá v datech žádný vztah** (Cicero, Anaxagorás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Empedoklés, Pyrrhón), a **bez vztahu medailonek nevznikne** (Doba a lidé nemá co ukázat; test `chybiMedailonku` to hlídá). Vztah se proto hledá v pramenech (učitel, žák, znali se, polemika, vliv textem; typ a pramen povinné). Nová osoba se nepřidává: vede-li vztah k člověku, který v datech není (třeba Ammónios Sakkás u Plótína nebo Timón u Pyrrhóna), zapiš ho do podkladů do oddílu Pro autora. Kdo vztah v datech existujících osob nenajde, medailonek nedostane a v podkladech má důvod. Zbývajících pět (Karneadés, Gorgiás, Anaximandros, Anaximenés, Thalés) má aspoň jeden vztah, ale většině chybí ověření a lepší „proč“.

Co necháš prázdné, bere se jako souhlas s návrhem.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi medailonky. Plán je v docs/plany/medailonky.md (tabulka a oddíly Po M0, Po M1 a Po M2), postup ve skillu atlas-data (kopie ve skills/atlas-data/).

Moje odpovědi k otázkám z vlny 2 (docs/podklady/medailonky-vlna-2.md, oddíl Pro autora; prázdné = souhlas s doporučením):

Krok M3: data třetí vlny. Osoby: Cicero, Karneadés, Anaxagorás, Gorgiás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Anaximandros, Anaximenés, Empedoklés, Pyrrhón, Thalés.

1. Pusť node scripts/medailonky-inventura.mjs a u každé osoby vlny projdi Chybí a Poznámky. Pozor: jedenáct osob (Cicero, Anaxagorás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Empedoklés, Pyrrhón) nemá žádný vztah, a bez vztahu medailonek nevznikne. U nich nejdřív v pramenech najdi vztah k někomu, kdo v lide.yaml už je (typ učitel, znali-se, polemika nebo vliv-textem, se zdrojem; současnost nedokazuje setkání, tradované věci dostanou tradovany: true). Nová osoba se nepřidává: vztah k člověku, který v datech není, zapiš do podkladů do Pro autora.
2. U každé osoby podle skillu atlas-data ověř a doplň roky, místa s rolí, směr (jen patřil-li ke škole), vztahy se zdrojem a věty kdo a proč (jedna živá věta, bez tykání, styl podle docs/styl.md; „proč“ nesmí opakovat atribut ani vztah). Atribut doplň, jen když ho prameny nesou a ikona už je v docs/design/atributy-ikony.json; jinak ho nech na později a zapiš do podkladů. Osoby s hloubkou profil (Cicero, Plótínos, Pýthagorás, Hypatia, Pyrrhón, Thalés) dostanou medailonek stejně a profil později.
3. Každý nový údaj má pramen, který jsi otevřel; nový pramen zapiš do zdroje.yaml s datem overeno a poznámkou, co z něj bereš. Heslo SEP nebo IEP stáhni na Macu (curl, text, grep), ne nástrojem WebFetch; Britannica curl nepustí (její souhrn jde otevřít přes vyhledávání na britannica.com/summary/<jméno>), Perseus ano. Adresu hesla IEP si ověř (ne každá odpovídá jménu, třeba iep.utm.edu/musonius/). Sporné (jiné roky o víc než deset let, vztah jen z jednoho antického svědectví, tradovaný příběh do „proč“) dělej Opus 5.5 · high se skillem atlas-overeni, nebo to zapiš jako otázku pro mě. Data lidí s profilem nebo portrétem neměň. Wikipedii mezi prameny nezapisuj. Roky osob v rozporu mezi prameny zapiš jako rozmezi.
4. Osobě, která projde tests/data/medailonky.test.ts, přidej medailonek: true. Kdo neprojde, zůstane bez příznaku a v podkladech má důvod.
5. Podklady vlny zapiš do docs/podklady/medailonky-vlna-3.md podle šablony ve skillu (co se změnilo, z jakého pramene, co zůstalo otevřené, otázky pro mě s doporučením a prázdným řádkem na odpověď).

Snímky: medailonek každé nové osoby na 390 px (světlý) a dvou z nich na 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs) a Doba a lidé u Sókrata a Platóna (scripts/snimky-prvek.mjs '.doba'), do Claude outputs/medailonky/vlna-3/. scripts/kontrola-fokus.mjs na nových medailoncích. node scripts/doba-odkazy-vypis.mjs po npm run build musí skončit „Chyb: 0“. Nový vztah nebo místo může změnit mini mapu: zkontroluj tests/e2e/mini-mapa.spec.ts.

Kontrola: celé npm test na pozadí s výstupem do souboru (příkaz na Mac musí skončit do minuty); když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts nebo test v obsah.spec.ts, pusť ten soubor znovu samostatně. Testy, které čtou seznamy odkazů podle jmen (otazka.spec.ts, cesta8.spec.ts, hledání v prohlidka.spec.ts), mohou padnout s novým medailonkem: uprav jen ty, které padnou kvůli novému odkazu. Commituj česky po osobách nebo malých skupinách, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/medailonky.md, do plánu větve zapiš stav a oddíl „Po M3“ (kolik osob dostalo medailonek, kdo ne a proč, co zůstalo otevřené, zbývající Lucretius bez místa), rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/medailonky.md, aktualizuj tam docs/plan.md, když se změnil, a restartuj náhled npm run dev. Pak mi napiš, kdo dostal medailonek, kdo ne a proč, a co mám rozhodnout. Pak navrhni další krok (R, revize větve).
```
