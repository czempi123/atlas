# Plán větve celek-5: „Stačí vědět, co je správné?“

Celek 5: portrét Aristotela, cesta 4 „Stačí vědět, co je správné?“ (období 1, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1, která už stojí. Rozsah zvolil Claude 5. 10. 2026 na pokyn autora „vybrat další celek a připravit ho“; autor ho může změnit, dokud neproběhne P6. Aristotelés je v datech portrét a mluví na čtyřech stránkách otázek, ve dvou Sporech a v portrétu Platóna, pořád bez vlastní stránky. Po něm má období 1 všechny tři portréty a cesta 4 odpovídá Sókratovi z celku 1, podle kterého dobře jedná ten, kdo ví, co je dobré. Podklady vzniknou v `docs/podklady/celek-5-staci-vedet.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 5. 10. 2026; podklady v `docs/podklady/celek-5-staci-vedet.md` |
| P7 | Portrét Aristotela | hotovo 5. 10. 2026; `src/content/osobnosti/aristoteles.mdx` |
| P8 | Cesta 4 „Stačí vědět, co je správné?“ a doplnění stránky velké otázky 1 | hotovo 8. 10. 2026; `src/content/cesty/staci-vedet-co-je-spravne*`; kresbu „Kde je střed?“ má autor na snímcích a ještě ji nepotvrdil |
| P10 | Revize celku | připraveno 8. 10. 2026, zadání níže |
| Opravy | Zapracování nálezů revize | po P10 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po opravách |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-5.md`. Větev `celek-5` je založená z hlavní větve 5. 10. 2026 (commit `96c942b`, po sloučení celku 4, `rozhrani-v2` a `kresby-ctverec`).

## Co si celek nese z celků 1 až 4

- **Co už v atlasu o Aristotelovi je:**
  - V datech (`lide.yaml`): portrét, období 1, směr peripatetici, otázky 1, 6, 10 a 7, linie věda a společnost, místa Stageira, Athény (studium asi 367–347 př. n. l.), Assos, Lesbos, Pella (asi 343–341), Athény (335–323) a Chalkis, atribut váhy („Ctnost je střed mezi dvěma krajnostmi“). Vztahy: Platón (učitel a polemika o ideje), Theofrastos. Obrázek nemá. Otázka 4 mu v datech chybí, ačkoli na její stránce mluví.
  - Hlas na čtyřech stránkách otázek: otázka 1 (štěstí je činnost, „jednat dobře, a to po celý život“), otázka 4 (kdy člověk za svůj čin může), otázka 6 (začíná u smyslů), otázka 7 (odpověď Prótagorovi).
  - Dva Spory: cesta 5, krok 5, Epiktétos × Aristotelés (vnější dobra a hněv; Etika Nikomachova 1099a–1101a, 1125b–1126a, 1153b) a cesta 3, krok 5, Platón × Aristotelés (ideje a jednotlivé věci). Tyto argumenty si celek 5 nebere podruhé.
  - Portrét Platóna: příchod do Akademie asi v sedmnácti, dvacet let, odmítnutí idejí, věta z Etiky Nikomachovy I, 6 a rčení o příteli Platónovi.
  - V `zdroje.yaml` jsou prameny `aristoteles-etika`, `-etika-stesti`, `-etika-iii`, `-etika-i-6`, `-metafyzika`, `-metafyzika-ideje`, `-politika-ii`, `-kategorie`, `-meteorologika` a citáty `etika-1096a`, `-1097a`, `-1098a`, `-1099a`, `-1100b`, `-1114a`, `-1126a`, `-1153b`, `-1155a`. Stránka směru `src/content/smery/peripatetici.md` existuje.
- **Stránka otázky 1 „Jak mám žít?“ už stojí** (celek 2) a Aristotelés je na ní prvním hlasem. Celek proto nezakládá novou stránku otázky; P8 na ni přidá cestu 4 a rozhodne, jestli se Aristotelův hlas má změnit.
- **Alexandr Makedonský v datech není** a nové osoby se zatím nepřidávají (rozhodnutí autora z 2. 10. 2026, `k-overeni.md`). Vstupní příběh cesty ho potřebuje: zůstane v textu bez odkazu a bez vztahu v datech.
- **Otevřené body z `k-overeni.md`, které čekají na tento celek:** jak česky podat ctnost (areté); Bekkerovy řádky u Kategorií 5; Metafyzika I, 1 (kolem 981a) jako Aristotelova odpověď ve Sporu cesty 3; kdy Aristotelés napsal kritiku idejí.
- **Největší riziko celku je kázání.** „Zlatý střed“ zní jako „všeho s mírou“ a návyk jako rada z třídnické hodiny. Střed podle Aristotela není průměr a nemá ho každý stejně; návyk není dril. Student, který řekne „vím, co je správné, a stejně to neudělám“ nebo „kdo určí, kde je střed?“, musí v cestě najít myslitele, který mu dá za pravdu. Druhé riziko je vstupní příběh: o tom, co Aristotelés Alexandra opravdu učil, víme málo a vyprávějí to autoři o staletí mladší.
- **Citlivá místa:** otroctví „od přírody“ a postavení žen v Politice. Podklady je sepíšou zvlášť; atlas má navíc portrét Epiktéta, který otrokem byl.
- **Překryvy, kterým se vyhnout:** cesta 10 (Augustin, „Proč dělám, co nechci?“), cesta 34 (Seneca a čas), cesta 6 (Epikúros a třídění tužeb), Spor cesty 5.
- **Kresba s pohybem:** autor ji chce v atlasu častěji (4. 10. 2026). Tady se nabízí střed, který se posouvá podle člověka a situace; podklady navrhnou, kde má smysl.
- **Poučení z revizí** je v `docs/pouceni.md`.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“ (pole `zacatek` v přehledu cesty) a Návrat s novým případem v deníku. Cesta 4 potřebuje blok, který bude jejím začátkem, a jeden případ pro Návrat.
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026): žádné „napiš osnovu a počkej“. Předem se ptá jen na stahování obrázků, nové osoby, slučování a GitHub.

## Po P6 (5. 10. 2026)

Podklady jsou v `docs/podklady/celek-5-staci-vedet.md`; nové prameny (32) a citáty (48) v `src/data/zdroje.yaml`; Aristotelés má v datech otázku 4, roky v Assu a na Lesbu podle Apollodóra a vztah s Xenokratem. `npm test` prošel celý (434 testů dat, 308 v prohlížeči; při prvním běhu jednou spadl krok, který v `tests/e2e/cesta.spec.ts` čeká na hydrataci ostrovů, samostatně i při druhém celém běhu prošel). Studentský text nevznikl a žádný obrázek není stažený. Zadání P6 je v `docs/archiv/zadani/celek-5.md`.

**Zvolil jsem sám** (bez mezikroku schvalování; důvody jsou v podkladovém listu, Rozpory a rozhodnutí):

- tři myšlenky portrétu: pozorovat dřív než soudit (laguna na Lesbu, delfín), čtyři „proč“ a účel (s námitkou, kterou si Aristotelés napsal sám), tři druhy přátelství; úsudek a člověk jako tvor obce jsou v rezervě;
- Spor cesty 4 je Sókratés × Aristotelés a Aristotelés v něm Sókratovi z půlky přitaká, protože to tak v textu je (1147b14–17);
- vstupní příběh je háj u Miezy a hostina o patnáct let později, s otázkou „co se s jeho věděním stalo mezi tím“; text netvrdí, čemu Aristotelés Alexandra učil;
- začátek cesty je Volba „Co ti tehdy chybělo?“ se čtyřmi druhy důvodu, bez zápisu;
- nový případ je studie o návycích z roku 2010 (pověra o 21 dnech; 18 až 254 dní, medián 66);
- kresba s pohybem „Kde je střed?“ stojí na odvaze u řeky, ne na jídle ani na hněvu;
- Návrat je případ „Třetí týden“;
- hlas Aristotela na stránce otázky 1 zůstává;
- otroctví a ženy patří do portrétu krátce jako námitka k první myšlence, do cesty ne;
- místo „slabá vůle“ píše celek „neovládnutí“ a „neudržel se“; areté zůstává „ctnost“ a vyloží ji Aristotelés sám (oko a kůň).

**Čeká na autora** (podkladový list, Otevřené otázky):

1. souhlas se stažením obrázků: odlitek hlavy Aristotela ze Statens Museum for Kunst (KAS825) pro portrét, přední deska slonovinové skříňky z The Metropolitan Museum of Art (17.190.173) pro vstup cesty a Rembrandtův Aristotelés s bustou Homéra (61.198) jako druhý obraz portrétu;
2. jestli má oddíl Doba a lidé dostat vlastní skupinu pro spor přes texty (pak přibudou vztahy Aristotelés → Sókratés a Aristotelés → Prótagorás);
3. jestli se má podle Metafyziky 981a upravit třetí Aristotelův argument ve Sporu cesty 3;
4. jestli smí v popisku obrázku zaznít středověká pověst o Fyllidě;
5. kdy vznikne složka `ucitel/` (citlivá místa jsou zatím jen v podkladech).

**Co si P7 a P8 nesou z podkladů:**

- Co Aristotelés Alexandra učil, říká jen Plútarchos asi o 450 let později a sám píše „zdá se“. Text netvrdí, že ho učil etice, ani opak; nepíše „nejslavnější učitel etiky“.
- Hostina: první obrazovka je Mieza; opilost jednou větou; pokus o sebevraždu po činu se nevypráví; hned po scéně otázka.
- Sókratova slova jsou z Platónova Prótagory: „Platón nechává Sókrata říct“. Závěr o nevědomosti stojí v dialogu na předpokladu, že dobré je příjemné; cesta proto mluví o „větším a menším“, ne o slasti.
- Aristotelés Sókrata neodbývá: kdo se neudržel, plné vědění neměl. Liší se v tom, jak se k němu dojde.
- Střed není průměr, není pro všechny stejný, některé věci ho nemají a Aristotelés přiznává, že se nedá vymezit slovy. Sousloví „zlatý střed“ není jeho.
- Zvyk není dril: ze stejného dělání vznikají i špatní stavitelé a kdo jedná na povel, ještě spravedlivý není.
- Milón se vypráví na běhu a zápase, ne na jídle. Nikde žádný příklad o jídle, váze, závislosti; odkládání a obrazovky patří cestě 34, „vůle“ cestě 10.
- Co je z nemoci, není podle Aristotela neovládnutí ani špatnost (1148b15–1149a20); jeho příklady z toho místa do textu nesmějí.
- Studie o návycích měřila pocit samozřejmosti u 39 lidí a drobných úkonů; „zkoušela“, ne „dokázala“; z vody po snídani ke ctnosti vede jen naše přirovnání. Čísla před P8 projít ještě jednou v plném textu.
- Tradované jako „Vypráví se, že…“: věta o Athéňanech a filozofii, rukopisy ve sklepě, obnova Stageiry, Íliada pod polštářem, Hermeiás jako bývalý otrok, výroky u Diogena Laertia. Nepoužívat: odchod od Platóna za jeho života, jed, akonit, dopisy, „kořeny vzdělání“.
- Věta „Jsme to, co opakovaně děláme“ není Aristotelova (Will Durant, 1926).
- Obrázky: odlitek je odlitek a popisek to říká; středověká deska a Rembrandt jsou představy své doby a popisek říká čí a z kdy.

## Po P7 (5. 10. 2026)

Portrét Aristotela stojí: `src/content/osobnosti/aristoteles.mdx`, bloky `aristoteles-kam-s-nim`, `aristoteles-ctyri-proc`, `aristoteles-co-zbude` a `aristoteles-odchod` v `src/content/bloky/` a Odkryj `aristoteles-ctnost` v MDX. `npm test` prošel celý (449 testů dat, 320 v prohlížeči). Na GitHubu nic není. Zadání P7 je v `docs/archiv/zadani/celek-5.md`, rozhodnutí v `docs/rozhodnuti.md` (5. 10. 2026: Portrét Aristotela), vynechané a neověřené v `docs/podklady/k-overeni.md` (Po P7).

**Odpovědi autora.** Obrázky: odlitek i Rembrandt (v chatu 5. 10. 2026). Spor přes texty a pověst o Fyllidě zůstaly bez odpovědi, platí tedy doporučení podkladů: spor přes texty je hotový, Fyllis se týká až obrázku cesty.

**Co stránka má.**

- Úvod: laguna u Pyrrhy a hlavní citát `casti-zivocichu-i-5`; pointa „Muž, který se nejdřív díval.“
- 01 Syn lékaře: původ, Akademie jednou větou s odkazem na portrét Platóna, zápisky místo knih, Odkryj ke slovu ctnost a Aristotelův výklad na oku (`etika-1106a`), jedna věta o etice a cestě 4.
- 02 Delfín a škatulky: Lesbos, vejce (`zivocichove-vi-3`), delfín, Roztřiď „Vodní, nebo suchozemský?“, `zivocichove-viii-2`; námitka: zuby, ženy (Platón nechává Sókrata tvrdit opak), otroci, odpůrci jeho citátem (`politika-1253b`), tři místa, kde si nebyl jistý, a věta o Epiktétovi.
- 03 Čtyři proč: `fyzika-ii-3-proc`, Roztřiď s mostem, socha, procházka (`fyzika-ii-3-prochazka`), námitka, kterou si napsal sám (`fyzika-ii-8`, `fyzika-ii-8-prezilo`), střídmá věta o biologii, odkaz na stránku otázky 1.
- 04 Škola a přátelé: Makedonie třemi větami, Lykeion, úsudek a tvor obce po jedné větě, Změň jednu věc „Co bude s vaším přátelstvím za rok?“, tři druhy přátelství (`etika-1155b`, `etika-1156a`, `etika-1156b`), Hermeiás a báseň.
- 05 Podruhé ne: Rembrandt jako Příběh, Volba „Co bys na Aristotelově místě udělal?“, Chalkis, věta o Athéňanech (`ailianos-iii-36`), rukopisy, závěť (`dl-v-16`).
- Kdo žil dřív? Sókratés × Aristotelés (vzdálenost), myšlenky „Nejdřív se podívej. Soudit můžeš potom.“ (Poznání) a „Odmysli si důvod a podívej se, co zbude.“ (Etika), výzva „Tři dny se jen dívej“, Kam dál Platón a Epiktétos.

**Použité citáty (14, každý jednou):** `casti-zivocichu-i-5`, `etika-1106a`, `zivocichove-vi-3`, `zivocichove-viii-2`, `politika-1253b`, `fyzika-ii-3-proc`, `fyzika-ii-3-prochazka`, `fyzika-ii-8`, `fyzika-ii-8-prezilo`, `etika-1155b`, `etika-1156a`, `etika-1156b`, `ailianos-iii-36`, `dl-v-16`. Z portrétových zůstaly nepoužité `etika-1103b`, `politika-1253b-clunky`, `dl-v-15`, `dl-v-20`; rezervy `analytiky-i-1`, `politika-1253a` a `politika-1253a-buh` čekají na pojem a na otázku 9. Citáty vyhrazené cestě 4 portrét nepoužil.

**Co se změnilo mimo portrét.**

- Doba a lidé: polemika lidí, kteří se osobně přít nemohli, má skupiny „S kým se přel na dálku“ a „Kdo se s ním přel později“ (`sporNaDalku` v `src/lib/vztahy.ts`; hranice je společný rok, kdy bylo oběma aspoň patnáct). Změnilo se: stránka Sókrata (Aristotelés ve skupině „Kdo se s ním přel později“, Aristofanés zůstal), stránka Prótagora (totéž), karta Karneada a Chrýsippa na mapě („přel se s jeho učením“). Názvy z podkladů („Přel se s jeho texty“) jsem nepoužil: Sókratés nic nenapsal.
- Mini mapa: výřez se o málo oddálí a posune, když by popisek vyjel z mapy (Pella). Ostatní profily mají výřez stejný jako dřív.
- Roztřiď: koše se řadí podle šířky bloku. V kroku cesty se nic nemění; v profilu jsou tři koše pod sebou a čtyři po dvou.
- Atribut Aristotela: „Správná míra leží mezi dvěma krajnostmi a není pro každého stejná.“
- Hlasy Aristotela na stránkách otázek 1, 4, 6 a 7 vedou samy na portrét; v portrétu Platóna je na něj odkaz v kapitole 03.
- Skill `atlas-osobnost`: kopie ve `skills/` má dvě nové věty (spor na dálku; blok v čtenářském sloupci). Verzi v účtu je třeba uložit zvlášť.

**Co si P8 nese.**

- Portrét jmenuje cestu „Stačí vědět, co je správné?“ ve dvou větách (kapitoly 01 a 04) zatím bez odkazu a Kam dál má jen Platóna a Epiktéta. P8 doplní odkazy, cestu 4 a otázku 1 do Kam dál a upraví `tests/e2e/aristoteles.spec.ts` (test Kam dál).
- Portrét říká o Alexandrovi tři věty a o etice jednu („Dobrým se podle něj člověk nestává výkladem, ale tím, že dobře jedná a pokaždé hledá správnou míru mezi příliš a málo“). Cesta musí stát i bez portrétu a jeho scény neopakuje: laguna, delfín, zuby, most, tři druhy přátelství, Hermeiás, odchod z Athén, závěť.
- Slovo ctnost portrét vykládá na oku a koni (`etika-1106a`): „být dobrý v tom, čím jsi“. Cesta smí tentýž citát použít nejvýš jednou a výklad má s portrétem ladit.
- Věta „Jsme to, co opakovaně děláme“ v portrétu není; cesta ji smí mít v jednom Odkryj jako větu, kterou nenapsal.
- Kdo žil dřív? Sókratés × Aristotelés je v portrétu; v cestě jinou dvojici, nebo nic.
- Vztah Aristotelés → Sókratés je v datech s poznámkou „stačí vědět, co je dobré?“; Spor cesty se o něj opírá.
- Obrázek cesty není stažený: skříňka ze slonoviny (The Met, inv. 17.190.173) čeká na souhlas autora; nejdřív zjistit, který snímek ukazuje přední desku.
- Čísla ze studie o návycích projít před psaním ještě jednou v plném textu (`k-overeni.md`).
- Roztřiď, mini mapa a Doba a lidé se od P7 chovají jinak (výše); nový blok v cestě zkoušet i na 800 px.

**Čeká na autora.**

1. Souhlas se stažením obrázku pro vstup cesty (skříňka ze slonoviny), nebo jiná volba.
2. Jestli smí v popisku zaznít středověká pověst o Fyllidě.
3. Úprava třetího Aristotelova argumentu ve Sporu cesty 3 podle Metafyziky 981a: v P8, při revizi, nebo vůbec.
4. Kdy vznikne složka `ucitel/`.
5. Uložit skill `atlas-osobnost` v účtu (dvě nové věty).
6. Popisek odlitku: ověřit na stránce Kunsthistorisches Museum, jestli je vídeňská hlava římská kopie (inv. I 246); nástroje stránku nenašly.

## Po P8 (8. 10. 2026)

Cesta 4 „Stačí vědět, co je správné?“ stojí: přehled `src/content/cesty/staci-vedet-co-je-spravne.mdx`, osm kroků ve složce téhož jména, bloky `cesta4-co-chybelo`, `cesta4-kdy-je-to-jeho`, `cesta4-vedel-to`, `cesta4-navyk-odhad`, `cesta4-navyk-cteni` a `cesta4-navrat` v `src/content/bloky/`, Odkryj `cesta4-sokrates-alexandr` v MDX a kresba „Kde je střed?“ (`src/lib/stred.ts`, `src/components/ostrovy/KdeJeStred.svelte`). `npm test` prošel celý (466 testů dat, 336 v prohlížeči). Na GitHubu nic není. Zadání P8 je v `docs/archiv/zadani/celek-5.md`, rozhodnutí v `docs/rozhodnuti.md` (8. 10. 2026: Cesta 4), vynechané a neověřené v `docs/podklady/k-overeni.md` (Po P8).

**Odpovědi autora.** Všechny čtyři zůstaly prázdné. Vstup cesty je proto bez obrázku (ornament a mince), pověst o Fyllidě v atlasu není, třetí Aristotelův argument ve Sporu cesty 3 zůstal, jak je, a složka `ucitel/` nevznikla.

**Kresba „Kde je střed?“ čeká na autora.** Snímky šesti stavů dostal 8. 10. 2026 v chatu; dokud je nepotvrdí, není hotová. Testy jí procházejí (`tests/e2e/stred.spec.ts`, `tests/data/stred.test.ts`).

**Co cesta má.**

1. *Háj a hostina.* Příběh bez obrázku: Mieza, Plútarchovo „zdá se“, Íliada („Vypráví se“). Pod ním „O patnáct let později“: hostina čtyřmi krátkými odstavci, opilost jednou větou, Arriánův soud parafrází, otázka „Co se s tím věděním stalo mezi tím?“ a otázka pro studenta v kurzívě. Filip a Kleitos jménem jednou.
2. *Co ti tehdy chybělo?* Volba bez pole „Proč“ (začátek cesty): nevěděl jsem to jistě · chtěl jsem něco jiného víc · neuměl jsem to · nebylo to v mé moci. Každá možnost má spojence.
3. *Kdo ví, udělá to.* Sókratés v Platónově Prótagorovi („Platón ho nechává říct“): otrok, větší a menší, nikdo nejde dobrovolně za zlem. Odkryj „Co by Sókratés řekl o Alexandrovi?“.
4. *Stavitelem se stáváš stavěním.* Rozum a povaha, ctnost na oku (parafráze), stavitel, nemocní a lékař, špatný stavitel. Změň jednu věc „Řekl bys o něm, že je statečný?“ (díval se učitel · někdo ho šťouchl · vyšlo to náhodou).
5. *Věděl to doopravdy?* Aristotelova odpověď na vlastní námitku, Sókratés jménem (`etika-1145b`), neovládnutí není špatnost, nemoc není selhání povahy, hněv a pes (`etika-1149a`). Spor Sókratés × Aristotelés.
6. *Kde je střed?* Dvě krajnosti, „zlatý střed“ jednou a opravený, střed věci a střed vzhledem k nám, Milón na běhu a zápase, pět rozměrů (`etika-1106b`), věci bez středu, kresba, námitka kruhu s jednou větou o svobodných mužích, přiznání (`etika-1109b`). Krok nemá blok s odpovědí.
7. *Jak dlouho to trvá?* `etika-1147a`, 21 dní a plastický chirurg, studie z roku 2010 (co měli dělat, co se měřilo), Volba s odhadem, „Co vyšlo“ s grafem dvou účastníků, Volba „Komu ten pokus dává za pravdu?“.
8. *Tvoje pravidlo.* `etika-1179b`, kdo dá za pravdu komu (Sókratés a kus Aristotela, Epiktétos jednou větou, Aristotelés tomu, kdo ví a neudělá, i tomu, kdo se ptá, kdo určí střed), odkaz na otázku 1, rada o křivém dřevě (`etika-1109b-drevo`), karta Zkus to žít „Kam tě to táhne?“, panel Na začátku × Teď. Návrat „Třetí týden“.

Čas na štítku je 30 minut (asi 3 470 slov a ovládání; `node scripts/slova-cesta.mjs staci-vedet-co-je-spravne`). Je to nejdelší cesta atlasu; nejdelší krok je 5.

**Použité citáty (12, každý jednou):** `protagoras-352b`, `protagoras-356c`, `protagoras-358d`, `etika-1103a`, `etika-1105b`, `etika-1145b`, `etika-1149a`, `etika-1106b`, `etika-1109b`, `etika-1147a`, `etika-1179b`, `etika-1109b-drevo`. S portrétem (14 citátů) nemá cesta žádný společný; `etika-1106a` (oko) je v cestě jen parafrází. Z citátů vyhrazených cestě zůstaly nepoužité `protagoras-352c`, `-352d`, `-358c`, `etika-1103b`, `-1106b-milon`, `-1107a`, `-1109a`, `-1095a`, `-1147b`, `-1152a`, `-1179b-reci` a `-1179b-puda`.

**Co se v celku smí ještě jednou a co už ne** (tentýž doložený detail nejvýš dvakrát):

- Patnáct let mezi Sókratovou smrtí a Aristotelovým narozením: portrét dvakrát (Doba a lidé, Kdo žil dřív?), cesta ani jednou. Už ne.
- Rok 343, třináctiletý Alexandr, král Filip: portrét jednou (kapitola 04), cesta jednou (krok 1). Už ne.
- Ctnost oka: portrét jednou (citát a výklad), cesta jednou (parafráze v kroku 4). Už ne.
- Špatný stavitel: krok 4 a třetí Aristotelův argument ve Sporu. Už ne.
- Vědění vláčené sem a tam jako otrok: `protagoras-352b` (krok 3), `etika-1145b` (krok 5, Aristotelés cituje Sókrata) a přitakání ve Sporu. Jsou to tři různá místa pramene, ale obraz zazní třikrát: revize ať řekne, jestli je to moc.
- „Musí to s ním srůst, a to chce čas“: druhý Aristotelův argument ve Sporu (parafráze) a citát v kroku 7. Už ne.
- Špatný člověk o své špatnosti neví: krok 5 a krok 8. Už ne.
- Hostina: krok 1; kroky 2, 3 a 5 na ni jednou větou odkazují a Odkryj v kroku 3 se k ní vrací otázkou. Opilost jen v kroku 1.
- Nemocní a lékař, Milón, 21 dní, čísla studie: jednou.

**Co se změnilo mimo cestu.**

- Portrét Aristotela: název cesty je v kapitolách 01 a 04 odkaz; Kam dál má cestu 4 první a otázku 1 poslední.
- Sókratés je filozofem dvou cest: jeho hlavička má cesty 1 a 4, karta v Lidech dva řádky.
- Stránka otázky 1 má dvě karty cest (4 a 6) pod nadpisem „Cesty k otázce“; hlas Aristotela se nezměnil. Přehled otázek má u otázky 1 dva odkazy.
- Volba: nové pole schématu `bezDuvodu` (blok bez „Proč právě tohle?“).
- Dílna bloků: osmá kresba. Domů: po dokončení cesty 1 „zbývají 4 cesty“.
- Skripty: `scripts/slova-cesta.mjs` (čas cesty), `scripts/snimky-prvek.mjs` umí víc klepnutí za sebou.
- `docs/design.md` (Volba, Zkus to žít v cestě, kresba Kde je střed?, Cesta), `docs/architektura.md` (řádek cesty 4), `docs/pouceni.md` (tři věty).

**Co si nese revize (P10).**

- Kresbu „Kde je střed?“ autor ještě nepotvrdil. Polohy bodu a činy lidí na břehu jsou naše volba; z Aristotela kresba drží jen to, že střed není v půli a není pro každého stejný.
- Cesta má 30 minut. Kvůli délce se nekrátí, ale revize ať řekne, co je v ní dvakrát.
- Otevřené body autora: obrázek pro vstup cesty, třetí Aristotelův argument ve Sporu cesty 3 (návrh v podkladovém listu), složka `ucitel/`, popisek odlitku (inv. I 246 ve Vídni), uložení skillů v účtu.
- Naše převody a spojení, které má revize přečíst s podklady: „hazarduje“ pro krajnost odvahy, strom a hora k `protagoras-356c`, Sókratova domyšlená odpověď o Alexandrovi, graf dvou účastníků, jeden vynechaný den, „král“ a „Střední Asie“ (`k-overeni.md`, Po P8).
- `scripts/kontrola-fokus.mjs` hlásí u kroků 7 a 8 pole pod lištou po `focus()`; stejně to hlásí u cest 3 a 5. Skutečný tabulátor hlídá `tests/e2e/fokus-lista.spec.ts` a průchod klávesnicí v `tests/e2e/cesta4.spec.ts` prošel.
- Skilly: kopie ve `skills/` se v P8 neměnily. Do `atlas-cesta` by patřily dvě věty (Volba bez pole „Proč“ u bolestné otázky; výzva Zkus to žít v posledním kroku), pokud je autor chce.

**Čeká na autora.**

1. Kresba „Kde je střed?“: potvrdit, nebo říct, co změnit.
2. Obrázek pro vstup cesty (skříňka ze slonoviny z The Met, jiný, nebo žádný).
3. Třetí Aristotelův argument ve Sporu cesty 3: upravit při revizi, nebo nechat být.
4. Složka `ucitel/`.
5. Z P7: uložit skill `atlas-osobnost` v účtu; popisek odlitku.

## Zadání P10: Revize celku 5

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high. Zadání počítá s úsporným čtením (`CLAUDE.md` › Co číst a jak šetřit) a s tím, že se nálezy průběžně neschvalují. Před odesláním doplň, co platí pro kresbu.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-5. Portrét Aristotela, cesta 4 a kresba „Kde je střed?“ jsou v ní hotové a commitnuté.

Kresba „Kde je střed?“ (potvrzuji; chci změnit: …): 

Udělej revizi celku 5 podle skillu atlas-revize. Do celku patří:
- portrét Aristotela (src/content/osobnosti/aristoteles.mdx a jeho bloky aristoteles-*.yaml);
- cesta 4 „Stačí vědět, co je správné?“ (přehled, osm kroků, bloky cesta4-*.yaml, Odkryj v kroku 3, případ pro Návrat);
- kresba „Kde je střed?“ v kroku 6 (src/lib/stred.ts, src/components/ostrovy/KdeJeStred.svelte) a graf v kroku 7;
- stránka velké otázky 1 „Jak mám žít?“ jen v tom, co se změnilo: dvě cesty k otázce a Aristotelův hlas vedle cesty 4;
- propojení: hlavičky profilů Aristotela a Sókrata, Kam dál portrétu, přehled otázek, Lidé, Domů;
- co se od P7 chová jinak v celém atlasu: skupiny „S kým se přel na dálku“ a „Kdo se s ním přel později“ v Době a lidech (stránky Sókrata a Prótagora), mini mapa s posunutým výřezem, Roztřiď v čtenářském sloupci.

Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md, docs/pouceni.md;
- v docs/plany/celek-5.md oddíly „Co si celek nese z celků 1 až 4“, „Po P7“ a „Po P8“;
- docs/podklady/celek-5-staci-vedet.md: je to měřítko revize. Čti vždy oddíl k tomu, co právě kontroluješ (portrét, cesta, citlivá místa, citáty, obrázky), ne celý list naráz;
- z docs/podklady/k-overeni.md oddíl Celek 5 s částmi Po P7 a Po P8; z docs/rozhodnuti.md záznamy z 5. a 8. 10. 2026;
- v docs/design.md oddíly Cesta, Velká otázka a z Komponent Kresbu s pohybem (jen Rám a Kde je střed?);
- jako vzor záznamu jen začátek docs/revize/celek-4-2026-10-04.md (formát a hloubka nálezů).
Podklady a obsah celků 1 až 4 jinak nečti; z portrétu Sókrata a Platóna jen místa, na která celek 5 odkazuje.

Na co se dívej zvlášť:

1. Tón. Největší riziko celku je kázání. Projdi cestu jako student, který říká „vím, co je správné, a stejně to neudělám“: vyjde z ní někde jako slaboch? A jako student, který se ptá „kdo určí, kde je střed?“: najde myslitele, který mu dá za pravdu, a řekne mu to poslední krok? Čti první obrazovku každého kroku, všechny zpětné vazby a výzvu „Kam tě to táhne?“.
2. Student, kterého se téma bolestně týká. Krok 1 (opilost a zabití přítele), krok 2 (čtvrtá možnost „nebylo to v mé moci“), krok 5 (nemoc není selhání povahy; hněv „za omluvu nemá“), krok 7 (komu se návyky nedaří), Návrat „Třetí týden“. Nikde příklad o jídle, váze, závislosti nebo odkládání; nikde „slabá vůle“.
3. Vstupní příběh proti podkladům. Text nesmí tvrdit, čemu Aristotelés Alexandra učil, ani opak; Plútarchovo „zdá se“; Arriánův soud jen parafrází; co se nevypráví. Porovnej každou větu kroku 1 s tabulkami „Vstupní příběh“ a „Co se stalo potom“.
4. Kdo mluví. Sókratova slova jsou z Platónova Prótagory a text to říká; měří se větší a menší, ne slast. Sókratova odpověď o Alexandrovi a jeho třetí argument ve Sporu jsou domyšlené a musí tak znít. Aristotelés Sókratovi z půlky přitaká (1147b14–17).
5. Spor na telefonu. Sókratés stojí první: odpovídá jen na to, co už zaznělo? Má Aristotelés poslední slovo právem, nebo Sókratovi chybí odpověď?
6. Střed. Není průměr, není pro každého stejný, některé věci ho nemají, nedá se vymezit slovy; „zlatý střed“ jednou. Kresba: říká text kroku i text pod kresbou totéž co ona? Nevypadá jako měřák správné odpovědi? Obstojí šest stavů (hlavně plavčík v rozvodněné řece a neplavec, který „jen“ volá o pomoc)? Jde pohyb zastavit, stojí při omezeném pohybu, jde všechno klávesnicí, jsou popisky čitelné na telefonu?
7. Studie o návycích. Čísla a formulace porovnej s podklady a s oddílem Po P8 v k-overeni.md: co měli účastníci dělat, co se měřilo, „zkoušela“, ne „dokázala“; výhrady jen ve zpětné vazbě; rozdíl mezi druhy úkonů nikde. Graf dvou účastníků: je poctivý jako kresba směru, nebo vypadá jako data?
8. Opakování. Drž se seznamu „Co se v celku smí ještě jednou a co už ne“ v oddílu Po P8 a seznamů citátů v oddílech Po P7 a Po P8: tentýž citát a tentýž doložený detail nejvýš dvakrát v celku. Projdi portrét, cestu a stránku otázky 1 za sebou, jak je projde student. Zvlášť obraz vědění vláčeného jako otrok (třikrát).
9. Každá kombinace. Všechny možnosti čtyř Voleb, tři podmínky Změň jednu věc se všemi třemi odpověďmi, Odkryj, Spor, tři odpovědi Návratu, bloky portrétu (dva Roztřiď, Změň jednu věc, Volba, Odkryj) i s vlastní kartou.
10. Citlivá místa portrétu. Otroctví a ženy v kapitole 02: stojí jako námitka, ne jako omluva ani jako odsudek bez pramene? Věta o Epiktétovi. V cestě jen jedna věta o svobodných mužích.
11. Co se skládá z dat. Doba a lidé u Aristotela, Sókrata a Prótagora (nové skupiny sporu na dálku), mini osa, mini mapa (Pella), popisky pod deskami (odlitek, Rembrandt), vstupy v hlavičkách (Sókratés má dvě cesty), Kam dál, řádky cest u otázky 1, karty v Lidech.
12. Délka. Cesta má na štítku 30 minut (node scripts/slova-cesta.mjs staci-vedet-co-je-spravne). Řekni, co je v ní dvakrát a co by šlo zkrátit bez ztráty myšlenky, ale sám nezkracuj.
13. Strojový text. Všechny studentské texty celku přečti ještě jednou jen podle oddílu „Ať text nezní jako stroj“.

Otevřené body, ke kterým chci doporučení: obrázek pro vstup cesty (skříňka ze slonoviny z The Met, inv. 17.190.173; jiný; žádný); třetí Aristotelův argument ve Sporu cesty 3 podle Metafyziky 981a (i s druhou půlkou: vědění přisuzuje tomu, kdo zná příčinu); složka ucitel/ s citlivými místy; Sókratés jako druhý filozof cesty 4; karta Zkus to žít v posledním kroku cesty; graf v kroku 7; převod „hazarduje“.
Rozhodnuté, neotvírej (ledaže je nález blokující): tři myšlenky portrétu, Spor Sókratés × Aristotelés, začátek cesty Volbou bez zápisu, nový případ je studie o návycích, hlas Aristotela na stránce otázky 1, „ctnost“ jako převod areté, místo „slabá vůle“ „neudržel se“.

Drobnosti oprav rovnou (překlep, sazba, věta nad 25 slov, odkaz, test). Zásadní nálezy neopravuj: seřaď je podle dopadu, ke každému napiš místo, proč vadí a návrh opravy. Záznam ulož do docs/revize/celek-5-<datum>.md s verdiktem (hotovo · po opravách · přepracovat).

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když jednou spadne krok „astro-island[ssr]“ v tests/e2e/cesta.spec.ts, spusť test znovu); projdi portrét a cestu na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs, scripts/snimky-cesta.mjs, scripts/snimky-prvek.mjs) a jednou jen klávesnicí; scripts/kontrola-fokus.mjs na portrét a kroky cesty.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-5.md stav po P10 a připrav tam zadání oprav s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-5.md, do docs/pouceni.md připiš, co se z revize má dodržovat příště, a plán větve aktualizuj i v projektu Claude. Pak mi napiš verdikt, nálezy podle dopadu a co jsi opravil sám.
```
