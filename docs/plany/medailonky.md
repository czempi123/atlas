# Plán větve medailonky: stránky z dat pro lidi bez stránky (P9)

Každý člověk na mapě má dostat vlastní stránku (rozhodnutí z P4, 30. 9. 2026), autor 15. 10. 2026: „musíme dodělat medailonky“. Medailonek je profil v malém, celý složený z dat: hlavička se jménem, roky a místem, věty „kdo“ a „proč“, Doba a lidé a Kam dál. Ručně se nepíše nic, takže práce větve je hlavně v datech: doplnit a ověřit roky, místa, vztahy a dvě věty u lidí, kteří stránku nemají, a teprve pak jim stránku zapnout příznakem `medailonek: true`. Větev je založená z hlavní větve 17. 10. 2026 (commit `76b1105`, po uzavření `doba-odkazy`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| M0 | Inventura, skill `atlas-data`, šablona medailonku na dvou osobách, plán | Opus 5.5 · high | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md` |
| M1 | Data první vlny (8 osob) a jejich medailonky | Sonnet 5.5 · medium se skillem `atlas-data`; sporné prameny Opus 5.5 · high se skillem `atlas-overeni` | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md`, podklady v `docs/podklady/medailonky-vlna-1.md` |
| M2 | Data druhé vlny (11 osob) | totéž | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md`, podklady v `docs/podklady/medailonky-vlna-2.md` |
| M3 | Data třetí vlny (16 osob) | totéž | hotovo 17. 10. 2026 (14 medailonků, Konfucius a Pýthagorás bez vztahu); zadání je v `docs/archiv/zadani/medailonky.md`, podklady v `docs/podklady/medailonky-vlna-3.md` |
| R | Revize větve (vzorek dat proti pramenům, stránky, odkazy) | Opus 5.5 · high se skillem `atlas-revize` | hotovo 17. 10. 2026, verdikt „po opravách“ (`docs/revize/medailonky-2026-10-17.md`); zadání je v `docs/archiv/zadani/medailonky.md` |
| O | Opravy po revizi (Kam dál, tradované vztahy a rod v Době a lidech, rozhodnutí autora) | Opus 5.5 · high se skillem `atlas-komponenta` | hotovo 17. 10. 2026; zadání je v `docs/archiv/zadani/medailonky.md` |
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

## Po M3 (17. 10. 2026)

**Výsledek.** Čtrnáct ze šestnácti osob dostalo `medailonek: true`: Cicero, Karneadés, Anaxagorás, Gorgiás, Plótínos, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Anaximandros, Anaximenés, Empedoklés, Pyrrhón, Thalés (Cicero, Plótínos, Hypatia, Pyrrhón a Thalés s hloubkou `profil`, stránka profilu později). Bez medailonku zůstali **Konfucius a Pýthagorás**: v datech není nikdo, s kým by měli vztah některého ze čtyř typů, a bez vztahu medailonek nevznikne (test `chybiMedailonku` zůstal beze změny). V datech je 50 lidí, 13 má profil nebo portrét, 34 medailonek, zbývají **3**: Lucretius (bez místa v pramenech), Konfucius a Pýthagorás (bez vztahu).

**Co se změnilo v datech** (podrobně `docs/podklady/medailonky-vlna-3.md`). Přibylo jedenáct vztahů, bez kterých by deset osob nemělo na stránce co ukázat: Empedoklés → Gorgiás a Gorgiás → Isokratés (učitelé, tradovaní, IEP Gorgias), Empedoklés → Lucretius (chvála v De rerum natura), Anaxagorás → Sókratés (Faidón 97b–98b, tradovaný), Aspasie → Sókratés (Platón a Xenofón, tradovaný), Platón → Plótínos, Filón a Cicero (vliv přes texty), Cicero → Epikúros (polemika na dálku), Plótínos → Hypatia (jediné svědectví Sókrata Scholastika, tradovaný) a Démokritos → Pyrrhón (Diogenés Laertios IX, 67, tradovaný). Nové „proč“ dostali Anaximandros (první mapa světa je jen připisovaná), Anaximenés a Hypatia (starý text opakoval atribut astroláb). „Kdo“ se změnilo u Anaximandra („o deset let“ místo „o generaci“), Anaximena („snad“ pryč), Aspasie („vzdělaná“ pryč, Britannica to neříká) a Cicera (věta končila zkratkou „př. n. l.“). Plótínovo narození je teď přibližné (SEP ho jen vyvozuje), u Anaxagorova pobytu v Athénách přibyla značka `priblizne`. Čtyři nové prameny (`dl-ix-67`, `platon-menexenos`, `xenofon-vzpominky`, `sokrates-scholastikos-vii-15`); u sedmnácti stávajících přibyla poznámka s datem.

**Testy a kontroly.** `tests/data` prošly (595), celé `npm test` prošlo kromě dvou známých hydratačních výpadků (`cesta4 · přehled a kroky · 390 px · tmavý` v prvním běhu, „Kam dál z bloku…“ při samostatném běhu souboru); oba prošly při dalším pouštění samostatně. Žádný test čtoucí seznamy odkazů podle jmen nepadl, takže se žádný nemusel upravovat; `mini-mapa.spec.ts` prošel (osm průchodů). `node scripts/doba-odkazy-vypis.mjs`: Chyb: 0. `scripts/kontrola-fokus.mjs` na čtrnácti nových stránkách (390 i 1440 px): v pořádku. Snímky v `Claude outputs/medailonky/vlna-3/` (čtrnáct medailonků na 390 px, Hypatia a Empedoklés na 1440 px ve světlém i tmavém režimu, Doba a lidé u Sókrata a Platóna na 390 i 1440 px).

**Co zůstalo otevřené** (v podkladech v oddílu Pro autora, každé s doporučením): Konfucius a Pýthagorás bez vztahu (doporučení: bez stránky do přidání osob z oken „Mezitím jinde“ a Filolaa), polemika mezi současníky (Xenofanés a Hérakleitos proti Pýthagorovi) a nadpis „Znali se a přeli se“, vztah Hypatie k Plótínovi z jednoho pozdního svědectví, tři tradované vztahy z literárních scén, směr Akademie u Cicera, přibližné narození Plótína, nová „proč“ Anaximandra a nové „kdo“ Aspasie, devět medailonků bez atributu a Lucretius bez místa.

**Co jsem zvažoval.**

- **Kde hledat vztah osobě, která žádný nemá:** nejdřív učitel a žák z antické tradice (IEP Gorgias dal Empedokla, Gorgia a Isokrata), pak vliv přes texty tam, kde pramen říká, že někdo vychází z jiného (SEP Plotinus, SEP Philo, IEP Cicero), pak polemika s člověkem, kterého autor sám kritizuje (Cicero a epikurejci), nakonec literární scény (Platón, Xenofón, Diogenés Laertios), které jsou vždy tradované. Nic z toho se nedalo dohledat pro Konfucia a Pýthagora.
- **Vztahy nezapsané schválně:** Karneadés → Cicero (Karneadés nic nenapsal, takže „vliv přes texty“ by tvrdil víc, než pramen říká), Gorgiás → Aspasie (IEP: „may have been“), Platón → Isokratés (vlastní pramen `isokrates-antidosis` Platóna nejmenuje), Plútarchos → Hypatia (BEA píše o Plútarchovi z Athén, ne o Plútarchovi z Chairóneie).
- **Hypatia:** dostala medailonek se vztahem, který stojí na jediném svědectví z pátého století; vztah je označený jako tradovaný a v podkladech je otázka.
- **Cicero nemá směr:** IEP říká, že se hlásil k Akademii, ale směr přidám až s profilem, aby nepřibyl do výpisu směru bez textu o něm.
- **Postup:** hesla SEP a IEP stažena na Macu, Britannica přes WebFetch (souhrn Aspasie a Hypatie vrací 404, u Aspasie jsem otevřel plný článek, Hypatii nahradilo BEA); IEP nemá hesla Hypatia, Isocrates ani Pythagoras na zkoušených adresách.

**Další krok.** R: revize větve (zadání je v `docs/archiv/zadani/medailonky.md`).

## Po R (17. 10. 2026)

**Verdikt: po opravách** (`docs/revize/medailonky-2026-10-17.md`). Data drží: ve vzorku čtrnácti osob (Hypatia, Anaxagorás, Aspasie, Pyrrhón, Anaximandros, Plótínos; Eudoxos, Alkibiadés, Musonius Rufus, Xenofón; Antisthenés, Chairefón, Plútarchos, Zénón z Kitia) sedí roky, místa i vztahy s prameny. Neprojde text, který se skládá z dat: Kam dál na osmi medailoncích obrací vztah („Znal ho z textů · Platón“ u Cicerona), Doba a lidé neoznačuje tradované vztahy (rozhodnutí M3 počítalo s tím, že je označí slovem „vypráví se“) a u Hypatie nesedí rod („Hypatia navázal“, „Koho četl“).

**Opraveno rovnou** (data, dva commity): Anaximandrovo „kdo“ („o deset let mladší“ heslo IEP neříká; teď „Thalétův krajan“), „roku 415 n. l.“ u Hypatie, čtyři poznámky vztahů, které medailonek poprvé ukázal z druhé strany (Speusippos, Theofrastos, Zénón z Eleje, Aristofanés), pramen vztahu Xenofón → Zénón z Kitia (`dl-vii-2` místo `iep-cynics`, které příběh nemá) a Britannica u Aristippa (potvrzuje rok úmrtí asi 355; otevřený řádek z M2 je uzavřený). Pracovní skripty revize jsou v `scripts/revize-*.mjs`.

**Ověřeno bez nálezu:** věty všech 34 medailonků strojově (jedna věta do 25 slov, bez tykání, výhrad a strojových obratů, druhý pád, zkratky letopočtů, přibližné roky a rozmezí), tvary jmen míst ve větách (Akragás a „Akragantu“ je správné skloňování), `kontrola-fokus.mjs` na 390 i 1440 px, axe ve světlém i tmavém režimu (136 průchodů), `doba-odkazy-vypis.mjs` (Chyb: 0), Lidé a směry, Mapa a čas (karta, kamera, místa), mini mapy, šest stránek jako student na telefonu, přehled cesty 8, deska bez atributu, zápisy M0 až M3 proti datům. Celé `npm test` prošlo; spadl jen známý test „cesta: průchod, Kam dál z bloku…“, který při samostatném běhu prošel.

**Co jsem zvažoval.** Opravy v kódu (nálezy 1 až 3) jsem v revizi neprováděl: mění popisky, které vidí i schválené profily (Platón, Aristotelés, Diogenés), a sahají do testů, takže patří do vlastního kroku O. Poznámky vztahů jsem opravil hned, protože jde o data a pravidlo z `docs/pouceni.md` (poznámka se čte na obou stránkách) je jednoznačné. Popisek „polemizoval s ním“ v řádcích Doby a lidí jsem nechal: jeho podmět je vždy ten, kdo polemizoval, a po nové poznámce u Aristofana to sedí na obou stranách; chybný je jen v Kam dál, kde stojí bez nadpisu skupiny.

**Další krok.** O: opravy po revizi (zadání je v `docs/archiv/zadani/medailonky.md`), pak uzavření větve.

## Po O (17. 10. 2026)

**Výsledek.** Všech šest otevřených nálezů revize je opravených; autor nechal odpovědi k nálezům 5, 6, 9 a 10 prázdné, takže platí návrhy revize. Čtyři commity:

- **Kam dál** (nález 1): nadtitulek karty říká, kdo je ve vztahu činný, s rodem obou lidí (nová funkce `roleNaKarte` v `src/lib/medailonek.ts`). Na Ciceronovi „Profil · S kým se přel na dálku · Epikúros“ a „Portrét · Koho četl · Platón“, u Hypatie „Medailonek · Koho četla · Plótínos“, u Plótína „Medailonek · Četla ho a navázala · Hypatia“, u Aristofana „Portrét · S kým se přel · Sókratés“.
- **Doba a lidé** (nálezy 2 a 3): tradovaný vztah má za popiskem „ · vypráví se“ (konstanta `LEGENDA_TRADOVANY`, stejná jako v kartě Mapy a času a v legendě); týká se pěti schválených profilů (Sókratés, Platón, Prótagorás, Diogenés, Parmenidés) a sedmnácti medailonků. `roleVztahu` zná rod podle toho, kdo je podmět, nadpisy skupin rod osoby stránky: u Hypatie „Koho četla“ a „znala ho z textů“, u Plótína „Hypatia · navázala na jeho texty“. Poznámka vztahu Xenofón → Zénón z Kitia začíná „Zénón po ztroskotání…“, „vypráví se“ už nese popisek.
- **Karta v Mapě a čase** (nález 9): „Otevřít stránku“ místo „Otevřít portrét“; testy `medailonky.spec.ts` a `krates-hipparchia.spec.ts` a popis v `docs/design.md` upravené.
- **Věty v datech** (nálezy 5, 6, 10): Eudoxos „Vymyslel teorii poměrů, která umí srovnat i nesouměřitelné délky, a Eukleidés ji převzal do Základů.“, Démokritos „Učil, že teplé a studené je jen podle zvyku a doopravdy jsou jen atomy a prázdno.“, Anaxagorás „Tvrdil, že svět uspořádal rozum (nús); za tvrzení, že Slunce je rozžhavený kámen, ho v Athénách obžalovali.“

**Testy a kontroly.** Nové testy: `tests/data/medailonky.test.ts` (Kam dál na Ciceronovi, Hypatii, Plótínovi, Aristofanovi a Sókratovi z dat), `tests/data/vztahy.test.ts` (rod v popiscích a nadpisech, Hypatia a Plótínos z dat), `tests/e2e/medailonky.spec.ts` („vypráví se“ u Aspasie, ženský rod u Hypatie a Plótína ve vykreslené stránce). Žádný dosavadní test nečetl popisek, který se změnil, kromě tří s „Otevřít portrét“. Celé `npm test` prošlo napoprvé bez jediného pádu (602 jednotkových, 478 v prohlížeči). `node scripts/doba-odkazy-vypis.mjs`: Chyb: 0. `scripts/kontrola-fokus.mjs` na Ciceronovi, Hypatii, Plótínovi a Aristofanovi (390 i 1440 px): v pořádku. Snímky Doby a lidí a Kam dál u Hypatie, Plótína a Aristofana (a Kam dál u Cicerona) na 390 px jsou v `Claude outputs/medailonky/opravy/`.

**Co jsem zvažoval.**

- **Kam dál má vlastní funkci, ne rozšířenou `roleVztahu`.** Řádek pod nadpisem skupiny a nadtitulek karty bez nadpisu potřebují jiná slova („znal ho z textů“ pod „Koho četl“ proti „Koho četl“ na kartě); jedna funkce s přepínačem by se četla hůř než dvě krátké.
- **„Vypráví se“ jen v Době a lidech, ne v nadtitulku karty Kam dál.** Zadání to na kartě nežádalo a nadtitulek („Medailonek · Koho četla · vypráví se“) by byl na telefonu dlouhý; kdo klepne, uvidí označení na cílové stránce.
- **Společný profil Kratéta a Hipparchie** má nadpisy skupin dál v mužském rodě, protože nemají jeden podmět; stojí tam jen Učitelé a Žáci, kterých se rod nadpisu netýká. Popisky řádků už rod znají („Hipparchia: …“).
- **Poučení** do `docs/pouceni.md` přibylo jedno: slovo, které přidá komponenta (tady „vypráví se“), nesmí být i v datech.

**Další krok.** Uzavření větve po autorově schválení (zadání níže).

## Uzavření větve

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · medium.** Sloučení a úklid, žádný nový obsah. Pouští se po opravách (krok O) a po autorově schválení; autor může větev uzavřít i dřív (po kterékoli vlně) a zbylé vlny nechat na novou větev.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Větev medailonky schvaluji: sluč ji do main a pošli main na GitHub.

1. Zkontroluj, že ve větvi nic nečeká (git status), a pusť celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně.
2. Sluč medailonky do main (bez přepisování historie), znovu sestav web a pusť node scripts/doba-odkazy-vypis.mjs (musí skončit „Chyb: 0“) a node scripts/medailonky-inventura.mjs (stav po větvi).
3. Pošli main na GitHub.
4. Do plánu větve zapiš oddíl „Uzavření větve“ (kolik osob má medailonek, kdo zůstal bez něj a proč, co je další v pořadí) a přesuň ho do docs/archiv/plany/medailonky.md; provedená zadání zůstávají v docs/archiv/zadani/medailonky.md. V docs/plan.md uprav řádek větve v rozcestníku (soubor v archivu, stav) a u P9 stav. Rozhodnutí zapiš do docs/rozhodnuti.md.
5. Z projektu Claude smaž docs/plany/medailonky.md a aktualizuj tam docs/plan.md. Restartuj náhled npm run dev.

Pak mi napiš, co je sloučeno a co je další v pořadí.
```
