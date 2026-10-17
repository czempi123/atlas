# Revize větve medailonky (krok R)

17. 10. 2026 · Opus 5.5 · skilly `atlas-revize` a `atlas-data` · 34 medailonků (vlny M0 až M3)

## Verdikt: po opravách

Data drží: ve vzorku čtrnácti osob sedí roky, místa i vztahy s prameny a obě věty se dají doložit, až na dvě drobnosti, které jsem opravil. Stránky jsou technicky v pořádku (fokus, axe, odkazy, Lidé a směry, Mapa a čas). Neprojde ale text, který se skládá z dat a nikdo ho nepsal: **Kam dál na osmi medailoncích obrací vztah** („Znal ho z textů · Platón“ na stránce Cicerona), **Doba a lidé neoznačuje tradované vztahy** (rozhodnutí M3 počítalo s tím, že je označí) a **u Hypatie nesedí rod**. To jsou tři opravy v kódu (`src/lib/medailonek.ts`, `src/lib/vztahy.ts`, `DobaALide.astro`), každá s hotovým návrhem níže. Po nich a po autorově rozhodnutí o bodech 5, 6 a 9 může větev do uzavření.

## Nálezy podle dopadu

### [blokující] Kam dál medailonků obrací vztah u vlivu přes texty a u polemiky
- **Kde:** `kamDalMedailonku` v `src/lib/medailonek.ts` (řádek 111), karty Kam dál na medailoncích. Deset karet na osmi stránkách: Cicero („Znal ho z textů · Platón“, „Přel se s jeho učením · Epikúros“), Plútarchos (totéž s Hérakleitem a Epikúrem), Plótínos (Platón), Filón Alexandrijský (Platón), Hypatia (Plótínos), Pyrrhón (Démokritos), Karneadés („Přel se s jeho učením · Chrýsippos“), Aristofanés („Polemizoval s ním · Sókratés“).
- **Co je špatně:** nadtitulek karty bere popisek z `roleVztahu`, který je psaný pro řádek v Době a lidech pod nadpisem skupiny. Na kartě stojí bez nadpisu a jméno pod ním čte student jako podmět: Platón znal Cicerona z textů, Epikúros se přel s Ciceronovým učením, Sókratés zesměšňoval Aristofana.
- **Proč to vadí studentovi:** čte opak a u Platóna a Epikúra i nemožnost (zemřeli staletí před Ciceronem). Je to první věc, na kterou klepne, když chce jít dál.
- **Oprava:** nadtitulek karty podle toho, kdo je ve vztahu činný, s rodem jako `KartaCloveka.svelte` (`tvar`): učitel „Učitel / Učitelka“, žák „Žák / Žákyně“, „Znali se“; vliv přes texty: osoba karty četla osobu stránky „Četl ho a navázal“ (rod podle obou: „Četla ho a navázala“), osoba stránky četla osobu karty „Koho četl / Koho četla“; polemika na dálku: „S kým se přel na dálku“ (kritik je osoba stránky), „Přel se s jeho učením“ (kritik je osoba karty); polemika současníků: „Polemizoval s ním“ (kritik je osoba karty), „S kým se přel“ (kritik je osoba stránky). Do `tests/data/medailonky.test.ts` test na Cicerona (Platón → „Koho četl“), Hypatii a Aristofana.

### [důležité] Doba a lidé neoznačuje tradované vztahy
- **Kde:** řádky skupin v `src/components/osobnost/DobaALide.astro` (řádek 74 a okolí); rozhodnutí M3 v `docs/rozhodnuti.md` a řádek Pro autora ve `docs/podklady/medailonky-vlna-3.md`.
- **Co je špatně:** příznak `tradovany` ukazuje jen karta v Mapě a čase („· vypráví se“) a šipka ⇢ v řetězu Kdo navazoval. Řádky skupin ho nečtou, takže Anaxagorás → Sókratés (scéna z Faidóna), Aspasie a Sókratés, Plótínos → Hypatia, Démokritos → Pyrrhón, Thalés → Anaximandros nebo Antisthenés → Diogenés stojí na stránkách jako fakt. Rozhodnutí M3 přitom tvrdí, že je stránka označí slovem „vypráví se“, a autor s ním na tom základě souhlasil.
- **Proč to vadí studentovi:** učitel dějepisu, který otevře Aspasii, uvidí „znali se“ jako jistotu.
- **Oprava:** v řádku za popisek role připsat „ · vypráví se“, když `v.vztah.tradovany`, stejně jako v kartě. Poznámku vztahu Xenofón → Zénón z Kitia pak zkrátit na „Zénón po ztroskotání četl v Athénách Xenofóntovy Vzpomínky na Sókrata“ (dnes začíná „vypráví se, že“ a na kartě se to už teď zdvojuje). Testy Doby a lidí (`doba-odkazy.spec.ts`, `celek7-profily.spec.ts`, `mini-mapa.spec.ts`) pustit a upravit, kde čtou přesný popisek.

### [důležité] Ženský rod v Době a lidech a v Kam dál
- **Kde:** `roleVztahu` a `skupinyVztahu` v `src/lib/vztahy.ts`; stránky Hypatie a Plótína.
- **Co je špatně:** u Plótína stojí „Hypatia navázal na jeho texty“ (i v Kam dál „Navázal na jeho texty“), u Hypatie nadpis „Koho četl“ a popisek „znal ho z textů“. Hlavička a „Kde žila“ rod znají (`zena`), popisky vztahů ne.
- **Proč to vadí studentovi:** gramatická chyba hned pod jménem jediné filozofky období; vypadá jako nedodělek.
- **Oprava:** `roleVztahu(v, smer, naDalku, { ja, druhy })` s rodem podle toho, kdo je podmět („navázala na jeho texty“, „znala ho z textů“, „přela se s jeho učením“), a nadpisy skupin s rodem osoby stránky („Koho četla“, „S kým se přela na dálku“, „Kdo se s ní přel později“, „Četli ji a navázali“). Vzor je v `KartaCloveka.svelte`, řádky 70–79. Test v `tests/data/vztahy.test.ts` s Hypatií.

### [důležité, opraveno] Poznámky u vztahů četly na nové stránce obráceně
- **Kde:** `src/data/vztahy.yaml`, čtyři vztahy, které medailonek poprvé ukázal z druhé strany.
- **Co bylo špatně:** u Speusippa stálo „Platón · učitel · synovec a nástupce v čele Akademie“, u Theofrasta „Aristotelés · spolupracovník a nástupce v čele Lykeia“, u Zénóna z Eleje „Parmenidés · učitel · mladší druh“ a u Aristofana „Sókratés · zesměšnil ho v Oblacích“: poznámka popisovala osobu z druhé strany.
- **Oprava (provedena):** „Platón byl jeho strýc; Speusippos po něm vedl Akademii“, „Theofrastos s ním pracoval a po něm vedl Lykeion“, „Zénón byl jeho mladší druh“, „Aristofanés ho zesměšnil v Oblacích“. Každá se čte správně na obou stránkách i na kartě v Mapě a čase.

### [důležité, rozhodnutí] Eudoxovo „proč“ míjí, proč si ho pamatujeme
- **Kde:** `lide.yaml › eudoxos.proc`: „Zabýval se zdvojením krychle a v Kyziku vedl školu, kam se hrnuli žáci.“
- **Co je špatně:** MacTutor jeho zájem o zdvojení krychle jen předpokládá („it would be reasonable to suppose“, pod vlivem Archyta) a jako hlavní přínos uvádí teorii poměrů, kterou Eukleidés převzal do V. knihy Základů, a metodu vyčerpání. Zdvojení krychle navíc nese Archytovo „proč“ na sousední kartě.
- **Proč to vadí studentovi:** jediná věta o tom, proč je Eudoxos důležitý, říká vedlejší věc a opakuje učitele.
- **Oprava (návrh):** „Vymyslel teorii poměrů, která umí srovnat i nesouměřitelné délky, a Eukleidés ji převzal do Základů.“ (16 slov; MacTutor, odstavec o teorii poměrů.)

### [drobné, rozhodnutí] Démokritovo „proč“ opakuje atribut
- **Kde:** `lide.yaml › demokritos`: „proč“ „Učil, že všechno se skládá z nedělitelných atomů a prázdna.“ a hned pod ním „Proč zrnka? Všechno se skládá z drobných nedělitelných částic a prázdna mezi nimi.“
- **Co je špatně:** pravidlo z M2 („proč“ neopakuje atribut) u Démokrita neplatí; v M1 zůstal beze změny.
- **Oprava (návrh):** „Učil, že teplé a studené je jen podle zvyku a doopravdy jsou jen atomy a prázdno.“ (15 slov; Diogenés Laertios IX, 45 a 72, pramen `dl-ix-34`, který Démokritos v datech má.)

### [drobné, opraveno] Anaximandrovo „kdo“ tvrdilo, co pramen neříká
- **Kde:** `lide.yaml › anaximandros.kdo`: „Myslitel z Milétu, o deset let mladší než Thalés.“
- **Co bylo špatně:** heslo IEP o deseti letech nemluví (podklady vlny 3 to heslu připsaly); rozdíl vznikl odečtením dvou přibližných letopočtů v záhlavích (asi 620 a asi 610).
- **Oprava (provedena):** „Myslitel z Milétu, Thalétův krajan.“ (IEP: „a fellow-citizen of Thales“.)

### [drobné, opraveno] Vztah Xenofón → Zénón z Kitia měl pramen, který příběh nenese
- **Kde:** `vztahy.yaml`, pramen `iep-cynics`.
- **Co bylo špatně:** heslo IEP o kynicích ztroskotání ani Vzpomínky nezmiňuje. Příběh je u Diogena Laertia VII, 2–3, který je v datech jako `dl-vii-2`.
- **Oprava (provedena):** pramen vztahu je `dl-vii-2`.

### [drobné, rozhodnutí] Karta v Mapě a čase říká „Otevřít portrét“ i u medailonku a profilu
- **Kde:** `KartaCloveka.svelte`, řádek 179; testy `medailonky.spec.ts:59`, `krates-hipparchia.spec.ts:133` a `:138`.
- **Co je špatně:** v M0 jsme to nechali, protože „portrét“ bral atlas obecně. Od té doby atlas hloubky viditelně rozlišuje (nadtitulek „· medailonek“, karty Kam dál „Portrét ·“, „Profil ·“, „Medailonek ·“), takže tlačítko slibuje jinou stránku, než otevře.
- **Oprava (návrh):** „Otevřít stránku“ pro všechny; testy upravit v tomtéž commitu.

### [drobné, návrh] Anaxagorovo „proč“: za co ho obžalovali
- **Kde:** `lide.yaml › anaxagoras.proc`: „Tvrdil, že svět uspořádal rozum (nús) a že Slunce je rozžhavený kámen; za to ho v Athénách obžalovali.“
- **Co je špatně:** „za to“ se dá číst i na rozum; SEP spojuje obžalobu z bezbožnosti se Sluncem („a red-hot stone“, „owing to this and other dangerous ideas“).
- **Oprava (návrh):** „Tvrdil, že svět uspořádal rozum (nús); za tvrzení, že Slunce je rozžhavený kámen, ho v Athénách obžalovali.“ (19 slov.)

## Ověřeno

**Vzorek proti pramenům (14 osob).** Hesla SEP a IEP stažená na Macu (`curl`, text, `grep`), Britannica přes WebFetch, BEA o Hypatii jako PDF, Sókratés Scholastikos (New Advent), Platónova Obrana (Gutenberg), MacTutor.

| Osoba | Pramen a místo | Výsledek |
| --- | --- | --- |
| Hypatia | BEA (narozena asi 370 v Alexandrii, březen 415, podle Sudy kolem 400 v čele novoplatonské školy, otec Theón, žák Synésios); Sókratés Scholastikos VII, 15 („succeeded to the school of Plato and Plotinus“) | sedí; u „proč“ doplněno „n. l.“ |
| Anaxagorás | SEP, oddíl 1 (Klazomeny, asi 500, Periklés, Slunce jako „red-hot stone“, obžaloba, Lampsakos, 428; Faidón 97b–99a) | sedí; „za to“ viz nález |
| Aspasie | Britannica (Milétos, s Periklem asi 445–429, Aischinův dialog) | sedí |
| Pyrrhón | SEP, oddíl 1 a 7 (asi 365–360 až 275–270; Indie „allegedly“; D. L. IX, 67 přes Fílóna: zvláštní obdiv k Démokritovi) | sedí |
| Anaximandros | IEP, oddíl 1 (asi 610–546, „fellow-citizen of Thales“, první spis prózou, apeiron) | „kdo“ opraveno |
| Plótínos | SEP, oddíl 1 (z Egypta, 204 vyvozeno, 28 let u Ammónia, Řím od konce 244, učil přes 25 let do smrti 270) | sedí |
| Eudoxos | MacTutor (Archytás, Platónovy přednášky „certainly attended“, škola v Kyziku, teorie poměrů) | „proč“ viz nález |
| Alkibiadés | Britannica (asi 450 Athény, 404 Frýgie; poručník Periklés; Potidaia 432 a Délion 424 se Sókratem; Sicílie 415; útěk ke Spartě) | sedí; Britannica tvrdí, že Alkibiadés u Délia Sókrata chránil, atlas to nepíše (rozhodnutí M2) |
| Musonius Rufus | IEP, oddíl 1 („born before 30“, Volsinie, Gyaros 65 „arid, desolate island“, před 101–102) | sedí |
| Xenofón | Britannica (asi 430 Attika, zemřel krátce před 350) | sedí |
| Antisthenés | IEP, oddíl 1 (nothos, nejdřív žák Gorgiův, pak Sókratův; učitel Diogena) | sedí |
| Chairefón | Obrana 21a (přítel od mládí, prudký ve všem, Delfy, v době procesu mrtvý) | sedí; rok narození dál bez pramene (Britannica heslo nemá) |
| Plútarchos | SEP, oddíl 1 (Chairóneia, 45–47, Ammónios v Athénách 66/67, kněz v Delfách, Paralelní životopisy, spisy proti stoikům a epikurejcům) | sedí |
| Zénón z Kitia | Britannica (asi 335 Kition, asi 263 Athény, do Athén asi 312, Kratés, Stoa Poikilé); SEP Stoicism 4.1 (žít v souladu podle jednoho rozumu) | sedí; pramen vztahu k Xenofóntovi opraven |

**Strojově všech 34** (`scripts/revize-medailonky-vety.mjs`): každá věta „kdo“ a „proč“ je jedna, do 25 slov, bez tykání, výhrad a strojových obratů, bez pomlček a značek; „asi čtyřicet komedií“ u Aristofana je počet, ne výhrada. Druhý pád má každá osoba. Zkratky letopočtů v pořádku, žádná věta nekončí zkratkou; „roku 415“ u Hypatie bez „n. l.“ doplněno. Přibližné roky a rozmezí (Eudoxos, Archytás, Pyrrhón, Filón) jsou uvnitř rozmezí a s `priblizne`. „Proč“ neopakuje vztah ani atribut, až na Démokrita (nález). Všech jedenáct tradovaných vztahů proti svému pramenu sedí; chyběl jen pramen u Xenofónta a Zénóna.

**Tvary jmen míst.** „Akragás“ v datech a „ze sicilského Akragantu“ ve větě je správné skloňování, ne nesoulad; stejně Élis a „z Élidy“, Soloi a „ze Sol“, Leontínoi a „z Leontín“, Kition a „z Kitia“. Jediný rozdíl je „Abdéra“ v datech a „z Abdér“ u Démokrita (Abdéry): obě podoby čeština zná a „Démokritos z Abdér“ je ustálené spojení, nechávám. „Minturnae“ na mini mapě Plótína je latinský tvar (česky Minturny), místo je v datech od P2, nechávám.

**Stránky.** `scripts/kontrola-fokus.mjs` na všech 34 medailoncích na 390 i 1440 px: v pořádku. Axe (WCAG 2 AA jako `prohlidka.spec.ts`) a přetékání na 390 i 1440 px ve světlém i tmavém režimu (`scripts/revize-axe.mjs`, 136 průchodů): bez nálezu. `node scripts/doba-odkazy-vypis.mjs`: Chyb: 0. Lidé a směry: každý medailonek má vstup s odkazem. Mapa a čas (`scripts/revize-mapa.mjs`, Hypatia 410, Karneadés −155, Gorgiás −427, Musonius 65): karta, kamera a místa sedí, konzole bez chyb. Pagefind indexuje všechny medailonky. Šest stránek jako student na telefonu (Kleanthés, Chairefón, Aristofanés, Speusippos, Hypatia, Anaxagorás; Plótínos v tmavém režimu): na každou vede odkaz z Doby a lidí jiné stránky, vyhledávání i Kam dál, slepá cesta nikde. Snímky v `Claude outputs/medailonky/revize/`.

**Soulad.** Přehled cesty 8 píše „Plútarchos: medailonek“, ostatní cesty „celý příběh“ u profilů. Deska chybí právě u osmnácti medailonků bez atributu a obrazu. Zápisy M0 až M3 v `docs/rozhodnuti.md` souhlasí s daty (počty osob, jedenáct vztahů z M3, šest tradovaných, Cicero bez směru, přibližné roky Plótína a Anaxagora) až na tvrzení o označení tradovaných vztahů (nález 2).

**K vědomí, bez opravy.** Hypatia a Plótínos mají v Době a lidech osu „Současníci“ jen se sebou: v datech zatím nikdo ze stejné doby není. Doplní se samo s obdobím 3 (Augustin); kdyby to vadilo dřív, šablona může osu s jedním řádkem schovat. Aristippos: Britannica (asi 435 Kyréné – asi 356 Athény) potvrzuje přibližný rok úmrtí 355; pramen je doplněný a otevřený řádek z M2 je tím uzavřený.
