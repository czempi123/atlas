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
