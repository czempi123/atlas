# Plán větve medailonky: stránky z dat pro lidi bez stránky (P9)

Každý člověk na mapě má dostat vlastní stránku (rozhodnutí z P4, 30. 9. 2026), autor 15. 10. 2026: „musíme dodělat medailonky“. Medailonek je profil v malém, celý složený z dat: hlavička se jménem, roky a místem, věty „kdo“ a „proč“, Doba a lidé a Kam dál. Ručně se nepíše nic, takže práce větve je hlavně v datech: doplnit a ověřit roky, místa, vztahy a dvě věty u lidí, kteří stránku nemají, a teprve pak jim stránku zapnout příznakem `medailonek: true`. Větev je založená z hlavní větve 17. 10. 2026 (commit `76b1105`, po uzavření `doba-odkazy`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| M0 | Inventura, skill `atlas-data`, šablona medailonku na dvou osobách, plán | Opus 5.5 · high | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md` |
| M1 | Data první vlny (8 osob) a jejich medailonky | Sonnet 5.5 · medium se skillem `atlas-data`; sporné prameny Opus 5.5 · high se skillem `atlas-overeni` | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md`, podklady v `docs/podklady/medailonky-vlna-1.md` |
| M2 | Data druhé vlny (11 osob) | totéž | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md`, podklady v `docs/podklady/medailonky-vlna-2.md` |
| M3 | Data třetí vlny (16 osob) | totéž | čeká; zadání je níže (M3) |
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

## Po M1 (17. 10. 2026)

**Výsledek.** Sedm osob dostalo `medailonek: true`: Plútarchos, Chrýsippos, Antisthenés, Xenokratés, Chairefón, Démokritos, Kritón. Lucretius ne: v pramenech (SEP, S. Trépanier 2023) není jeho rodiště ani místo působení a test místo vyžaduje; místo z odhadu (Řím) jsem nepřidal. V datech je 50 lidí, 13 má profil nebo portrét, 9 medailonek (Kleanthés a Zénón z Kitia z M0, sedm z M1), zbývá **28** (Lucretius a 27 z vln 2 a 3).

**Co se změnilo v datech.** Většina osob měla data hotová a v M1 se ověřila proti pramenům (otevřené SEP a IEP, Platónova Obrana a Fáidón, Diogenés Laertios VI, 1): Chrýsippos, Xenokratés, Démokritos, Kritón a Chairefón zůstali beze změny. Změny: Plútarchos (místa Delfy a Athény se studiem kolem roku 66; nové „proč“ místo věty, která opakovala polemiku s Epikúrem), Antisthenés („kdo“ upřesněno: syn Athéňana a Thrákyně, athénské občanství neměl; místo Athény teď z Diogena Laertia, nový pramen `dl-vi-1`), Zénón z Kitia (nové „proč“ o cíli života podle SEP, 4.1; staré opakovalo atribut sloupoví). U osmi stávajících pramenů přibyla poznámka s datem a tím, co z nich beru. Vše je v `docs/podklady/medailonky-vlna-1.md`, včetně pěti otázek pro autora (každá s doporučením).

**Změna mimo data.** Přehled cesty píše u odkazu na stránku člověka „Jméno: celý příběh“. Plútarchos (cesta 8) má jen medailonek, proto odkaz teď říká „Plútarchos: medailonek“ (`src/pages/cesta/[cesta]/index.astro`). Žádný jiný text ani komponenta se nezměnily.

**Testy a kontroly.** `tests/data` prošly. Celé `npm test` po zapnutí medailonků spadlo na devíti místech: sedm kvůli novým odkazům a medailonkům (Doba a lidé u Diogena a na společném profilu, hlasy otázek 4 a 6, přehled cesty 8, hledání „Chairefón“ najde teď jeho stránku, test Mapy a času bral první medailonek v datech, Démokritos ale v roce −280 už nežil), dvě (`cesta.spec.ts`, `obsah.spec.ts`) jen při zátěži. Po opravě testů a popisku prošlo celé `npm test` (452 testů). `tests/e2e/doba-odkazy.spec.ts` má nově obecný test (Sókratés: odkaz mají jen lidé se stránkou), takže se po dalších vlnách přepisovat nemusí. `node scripts/doba-odkazy-vypis.mjs`: Chyb: 0. `scripts/kontrola-fokus.mjs`: sedm medailonků na 390 i 1440 px v pořádku. Snímky v `Claude outputs/medailonky/vlna-1/` (sedm medailonků na 390 px, Plútarchos a Démokritos na 1440 px ve světlém i tmavém režimu, Doba a lidé u Sókrata a Epikúra).

**Co jsem zvažoval.**

- Chairefón dostal příznak, ač jeho rok narození (asi 470) nemá pramen v datech: Obrana ho nedává, Wikipedii (c. 470/460) jsem do pramenů nezapsal, protože skill uznává SEP, IEP a Britannicu. Rok je přibližný, test prošel; otázka je v podkladech.
- Plútarchos nemá směr (SEP: příslušnost k Akademii je sporná). Rok 66 u studia je odhad z jeho vlastního svědectví, proto přibližný.
- Pireus u Antisthena nepřibyl (leží u Athén a na mini mapě by překrýval popisky).
- Atributy: žádný nový. Antisthenés, Xenokratés, Chairefón a Kritón zůstávají bez desky (chybí ikony; pro Antisthena by šel dvojitý plášť s holí a mošnou).
- Commity: data jsou v jednom commitu (`lide.yaml` a `zdroje.yaml` se prolínají), testy a popisek ve druhém.
- Postup se osvědčil: heslo SEP nebo IEP stáhnout na Macu (`curl`, text, `grep`), ne WebFetchem; Britannica `curl` nepustí, Perseus ano (poučení v `docs/pouceni.md`).

**Další krok.** M2: druhá vlna (11 osob), zadání níže. Podklady M1 mají v oddílu Pro autora pět řádků; autor je může projít kdykoli, žádný neblokuje M2.

## Po M2 (17. 10. 2026)

**Výsledek.** Všech jedenáct osob dostalo `medailonek: true`: Alkibiadés, Eudoxos, Aristippos, Aristofanés, Musonius Rufus, Theofrastos, Xenofanés, Archytás, Speusippos, Xenofón, Zénón z Eleje (ten s hloubkou `profil`, stránka profilu později). V datech je 50 lidí, 13 má profil nebo portrét, 20 medailonek, zbývá **17** (Lucretius a 16 z vlny 3).

**Co se změnilo v datech.** Většina osob měla data hotová a v M2 se ověřila proti SEP, IEP, MacTutoru, Plútarchovi a Symposionu (podrobně `docs/podklady/medailonky-vlna-2.md`). Věta „proč“ se přepsala u osmi osob: u Aristofana, Musonia Rufa a Archyta opakovala vztah, u Eudoxa, Theofrasta, Xenofónta a Zénóna z Eleje atribut, u Alkibiada tvrdila víc, než říká Symposion (Alkibiadés při ústupu od Délia jel na koni a Sókrata nechránil). Roky Eudoxa dostaly `rozmezi`, protože MacTutor (408–355) a SEP v hesle Archytas (ca. 390–340) se rozcházejí o osmnáct let. Nový pramen `plutarchos-alkibiades`; pramen `iep-musonius` měl neexistující adresu, opravena na `iep.utm.edu/musonius/`; u jedenácti pramenů přibyla poznámka s datem.

**Testy a kontroly.** `tests/data` prošly, celé `npm test` prošlo (581 testů jednotkových a 463 průchodů v prohlížeči), tentokrát nepadl žádný test čtoucí seznamy odkazů podle jmen, takže se žádný nemusel upravovat. `node scripts/doba-odkazy-vypis.mjs`: Chyb: 0. `scripts/kontrola-fokus.mjs` na jedenácti nových stránkách (390 i 1440 px): v pořádku. Snímky v `Claude outputs/medailonky/vlna-2/` (jedenáct medailonků na 390 px, Eudoxos a Aristofanés na 1440 px ve světlém i tmavém režimu, Doba a lidé u Platóna a Aristotela). Doba a lidé u Platóna a Aristotela má nové odkazy samy z dat.

**Co zůstalo otevřené** (v podkladech v oddílu Pro autora, každé s doporučením): rok Eudoxa (rozmezí v datech), rok úmrtí Aristippa (SEP uvádí jen konec činnosti kolem 355), rok úmrtí Xenofónta (SEP ±386, v datech nejpozději 350 z dřívějšího ověření), pět medailonků bez atributu (Alkibiadés, Aristofanés, Musonius Rufus, Xenofanés, Speusippos), profil Zénóna z Eleje. Britannica `curl` nepustí (u Aristofana jsem četl její souhrn), roky z ní u ostatních zůstaly z dřívějšího ověření.

**Co jsem zvažoval.**

- Xenofanés nedostal směr `eleate`: SEP výslovně říká, že za zakladatele eleatů ho označují až pozdější autoři a ze zlomků se jednoduchému zařazení vymyká.
- Speusippos má „proč“ věcně shodné s poznámkou u vztahu (osm let v čele Akademie); nechal jsem ho, protože žádná jiná podložená věta ze SEP není stejně pevná.
- Alkibiadovo nové „proč“ stojí na dvou pramenech (SEP o Sókratovi a Plútarchos); Plútarchovo číslování kapitol (1, 17, 19–23) je z anglického překladu na LacusCurtius.
- Atribut jsem nikomu nepřidal: žádný nenesly prameny tak, aby seděla hotová ikona.

**Další krok.** M3: třetí vlna (16 osob), zadání níže.

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
