# Plán větve medailonky: stránky z dat pro lidi bez stránky (P9)

Každý člověk na mapě má dostat vlastní stránku (rozhodnutí z P4, 30. 9. 2026), autor 15. 10. 2026: „musíme dodělat medailonky“. Medailonek je profil v malém, celý složený z dat: hlavička se jménem, roky a místem, věty „kdo“ a „proč“, Doba a lidé a Kam dál. Ručně se nepíše nic, takže práce větve je hlavně v datech: doplnit a ověřit roky, místa, vztahy a dvě věty u lidí, kteří stránku nemají, a teprve pak jim stránku zapnout příznakem `medailonek: true`. Větev je založená z hlavní větve 17. 10. 2026 (commit `76b1105`, po uzavření `doba-odkazy`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| M0 | Inventura, skill `atlas-data`, šablona medailonku na dvou osobách, plán | Opus 5.5 · high | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md` |
| M1 | Data první vlny (8 osob) a jejich medailonky | Sonnet 5.5 · medium se skillem `atlas-data`; sporné prameny Opus 5.5 · high se skillem `atlas-overeni` | čeká |
| M2 | Data druhé vlny (11 osob) | totéž | čeká; zadání vznikne po M1 |
| M3 | Data třetí vlny (16 osob) | totéž | čeká; zadání vznikne po M2 |
| R | Revize větve (vzorek dat proti pramenům, stránky, odkazy) | Opus 5.5 · high se skillem `atlas-revize` | čeká |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | — | čeká |

Stav a zadání dalších kroků se zapisují sem. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/medailonky.md`. Po každé vlně může autor větev sloučit dřív (medailonky jsou samostatné stránky); o tom rozhoduje on.

## Po M0 (17. 10. 2026)

**Co vzniklo.**

- **Inventura:** `scripts/medailonky-inventura.mjs` čte data a obsah (bez sestavení) a píše `Claude outputs/medailonky/inventura.md` a `inventura.json`: kdo nemá stránku, co mu chybí (roky, místa, směr, kdo, proč, vztahy, prameny), kde se jeho jméno objevuje bez odkazu (Doba a lidé, hlasy otázek, přehledy cest), kolikrát padá v textech cest a kolik má míst na mapě. Skript se pouští znovu před každou vlnou i po ní.
- **Skill `atlas-data`** (`skills/atlas-data/SKILL.md` a tři reference: schéma s ukázkami ze skutečných záznamů, věty kdo a proč, šablona podkladů vlny). Postup, kritéria hotového medailonku, přibližná a sporná data, typy vztahů, prameny, kdy přepnout na `atlas-overeni`, které testy pustit. Autor ho uloží do účtu Claude jako ostatní skilly.
- **Šablona medailonku:** `src/components/osobnost/StrankaMedailonku.astro`. Pořadí: nadtitulek (směr nebo období · medailonek), jméno, roky · místo · období, „Kdo byl“ a „Proč si ho pamatujeme“ (věty z dat), cesty a otázky (`VstupyOsoby`), deska s mincí a atributem (jen když osoba má atribut nebo obraz), Doba a lidé (`DobaALide` bez ručního úvodu), Kam dál, Prameny. Stejné komponenty a tokeny jako profil; žádná nová komponenta, skill `atlas-komponenta` nebyl potřeba.
- **Adresa:** `/osobnost/<id>/` z jedné dynamické trasy. `src/pages/osobnost/[id].astro` teď jen rozhoduje: profil z kolekce (`StrankaProfilu.astro`, dřívější obsah trasy beze změny) nebo medailonek z dat. Příznak `medailonek: true` v `lide.yaml` (nové pole schématu). `adresaOsoby` bere medailonky jako druhý argument a zastaví sestavení, když má osoba profil i medailonek; všechna místa, která adresu skládají (Lidé a směry, Doba a lidé, přehled cesty, stránka otázky, Mapa a čas), ji berou z `adresaStranekOsob()` v `src/lib/stranky-osob.ts`.
- **Kam dál** se skládá samo (`kamDalMedailonku` v `src/lib/medailonek.ts`): až dva lidé se stránkou (učitelé a žáci první, profily před medailonky), Mapa a čas v roce prvního působení („Athény kolem roku 312 př. n. l., kdy tam Zénón z Kitia působil“) a do tří položek Lidé a směry.
- **Dvě osoby s nejúplnějšími daty** dostaly `medailonek: true`: Kleanthés (4 vztahy, rodiště i působení, směr) a Zénón z Kitia (3 vztahy, atribut). Jejich data se neměnila.
- **Odkazy přibyly samy:** `node scripts/doba-odkazy-vypis.mjs` (rozšířený o medailonky) hlásí 0 chyb; Zénón z Kitia a Kleanthés jsou odkazy na Diogenovi, Sókratovi, Hérakleitovi, Senekovi a na společném profilu Kratéta a Hipparchie (ve skupinách i v řetězu Kdo navazoval), v Lidech a směrech i v kartě Mapy a času.
- **Testy:** `tests/data/medailonky.test.ts` (kritéria hotového, Kam dál, rok pro mapu, zkratky letopočtů ve větách), `tests/e2e/medailonky.spec.ts` (obě stránky, odkazy Kam dál vedou na existující stránky, 390 px bez přetékání a s oběma větami na první obrazovce, Lidé a směry, Mapa a čas). `tests/e2e/doba-odkazy.spec.ts` počítá s medailonky (Zénón z Kitia na společném profilu je teď odkaz, Chrýsippos ne).
- **Snímky** (`Claude outputs/medailonky/`): `medailonek-kleanthes-*` a `medailonek-zenon-z-kitia-*` na 390 a 1440 px ve světlém i tmavém režimu, `doba-diogenes-*` (Doba a lidé u Diogena s novými odkazy). `scripts/kontrola-fokus.mjs` na obou medailoncích: v pořádku na obou šířkách.

**Osoby a vlny.** V datech je 50 lidí, 13 má profil nebo portrét (12 stránek, Hipparchia na společném), 2 mají medailonek z M0, zbývá **35**. Vlny podle toho, kde jméno už stojí bez odkazu:

| Vlna | Pravidlo | Osoby |
| --- | --- | --- |
| 1 (M1) | jméno bez odkazu aspoň na dvou stránkách, nebo na jedné a k tomu v textu cesty | Plútarchos, Lucretius, Chrýsippos, Antisthenés, Xenokratés, Chairefón, Démokritos, Kritón (8) |
| 2 (M2) | jméno bez odkazu na jedné stránce | Alkibiadés, Eudoxos, Aristippos, Aristofanés, Musonius Rufus, Theofrastos, Xenofanés, Archytás, Speusippos, Xenofón, Zénón z Eleje (11) |
| 3 (M3) | jen na mapě a v Lidech a směrech (Cicero i ve zmínce v cestě) | Cicero, Karneadés, Anaxagorás, Gorgiás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Anaximandros, Anaximenés, Empedoklés, Pyrrhón, Thalés (16) |

Co chybí (podrobně v inventuře): většině chybí jen ověření a lepší „proč“; Lucretius nemá žádné místo; 11 osob třetí vlny nemá žádný vztah (bez něj medailonek nevznikne); 18 osob nemá atribut (stránka pak nemá desku); u Zénóna z Kitia „proč“ opakuje atribut a u Musonia Rufa „proč“ jen opakuje vztah k Epiktétovi (patří do M1 a M2 jako oprava věty).

**Co jsem zvažoval.**

- **Příznak, nebo automatika.** Stránku mohla dostat každá osoba, jejíž data projdou kritérii. Zvolil jsem výslovný příznak `medailonek: true`: stránka vznikne, až data někdo ověřil, ne když náhodou splní formální podmínky (dnes by formálně prošlo 23 osob z 35, i s větami, které nikdo neověřil ani nepřepsal). Kritéria hlídá test, takže příznak nejde dát neúplným datům.
- **Kdo a proč v hlavičce, ne pod ní.** Na telefonu jsou obě věty na první obrazovce hned pod jménem; deska jde až za ně. Na notebooku stojí vlevo vedle desky, kde by jinak zůstalo prázdné místo.
- **Deska bez atributu se neukáže.** Mince bez atributu je prázdný kruh (iniciála je zakázaná, `Mince.astro`) a na velké desce vypadala jako chybějící obrázek. Medailonek bez atributu má proto hlavičku jen z textu (Kleanthés). Kdyby autor chtěl desku vždy, stačí v šabloně podmínku zrušit.
- **Kam dál nejvýš tři položky** (řada na notebooku); Lidé a směry jen doplní řadu, jinak na ně vede drobečková navigace. Text karty u profilu je „jméno: pointa“ jako ve stávajících Kam dál, u medailonku jen jméno; nadtitulek nese druh stránky a vztah („Profil · Učitel“).
- **Karta v Mapě a čase** dál říká „Otevřít portrét“ i u medailonku. Nechal jsem to: slovo je v atlasu obecné pro stránku člověka a změna by šla napříč mapou; kdyby vadilo, je to jedna podmínka v `KartaCloveka.svelte` (potřebovala by druh stránky ve vstupu mapy).
- **Vlny podle viditelnosti, ne podle období.** Nejdřív ti, na které už studenti narážejí jako na jméno bez odkazu; období se v každé vlně míchají, ale data jsou nezávislá, takže to práci nekomplikuje.
- **Hloubka `profil` u lidí bez stránky** (Démokritos, Chrýsippos, Lucretius…): dostanou medailonek hned a profil později v celku; až profil vznikne, příznak se smaže (sestavení na to upozorní).

## M1: data první vlny

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Sonnet 5.5 · medium** se skillem `atlas-data` (uložený v účtu Claude); kde skill říká „přepni na atlas-overeni“, ten úsek dělej **Opus 5.5 · high**: buď v témže chatu přepnutím modelu, nebo zapiš otázku do podkladů vlny a nech ji na konec. Osm osob s hotovými prameny je mechanická práce podle vzoru; vyšší úsilí by přidalo čas, ne kvalitu.

Co necháš prázdné, bere se jako souhlas s návrhem.

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

## Uzavření větve

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · medium.** Sloučení a úklid, žádný nový obsah. Pouští se po revizi (krok R) a po autorově schválení; autor může větev uzavřít i dřív (po kterékoli vlně) a zbylé vlny nechat na novou větev.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Větev medailonky schvaluji: sluč ji do main a pošli main na GitHub.

1. Zkontroluj, že ve větvi nic nečeká (git status), a pusť celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně.
2. Sluč medailonky do main (bez přepisování historie), znovu sestav web a pusť node scripts/doba-odkazy-vypis.mjs (musí skončit „Chyb: 0“) a node scripts/medailonky-inventura.mjs (stav po větvi).
3. Pošli main na GitHub.
4. Do plánu větve zapiš oddíl „Uzavření větve“ (kolik osob má medailonek, kdo zůstal bez něj a proč, co je další v pořadí) a přesuň ho do docs/archiv/plany/medailonky.md; provedená zadání zůstávají v docs/archiv/zadani/medailonky.md. V docs/plan.md uprav řádek větve v rozcestníku (soubor v archivu, stav) a u P9 stav. Rozhodnutí zapiš do docs/rozhodnuti.md.
5. Z projektu Claude smaž docs/plany/medailonky.md a aktualizuj tam docs/plan.md. Restartuj náhled npm run dev.

Pak mi napiš, co je sloučeno a co je další v pořadí.
```
