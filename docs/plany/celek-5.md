# Plán větve celek-5: „Stačí vědět, co je správné?“

Celek 5: portrét Aristotela, cesta 4 „Stačí vědět, co je správné?“ (období 1, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1, která už stojí. Rozsah zvolil Claude 5. 10. 2026 na pokyn autora „vybrat další celek a připravit ho“; autor ho může změnit, dokud neproběhne P6. Aristotelés je v datech portrét a mluví na čtyřech stránkách otázek, ve dvou Sporech a v portrétu Platóna, pořád bez vlastní stránky. Po něm má období 1 všechny tři portréty a cesta 4 odpovídá Sókratovi z celku 1, podle kterého dobře jedná ten, kdo ví, co je dobré. Podklady vzniknou v `docs/podklady/celek-5-staci-vedet.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 5. 10. 2026; podklady v `docs/podklady/celek-5-staci-vedet.md` |
| P7 | Portrét Aristotela | hotovo 5. 10. 2026; `src/content/osobnosti/aristoteles.mdx` |
| P8 | Cesta 4 „Stačí vědět, co je správné?“ a doplnění stránky velké otázky 1 | připraveno 5. 10. 2026, zadání níže; čeká na odpovědi autora (obrázek cesty) |
| P10 | Revize celku | po P8 |
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

## Zadání P8: Cesta 4 „Stačí vědět, co je správné?“ a stránka otázky 1

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high. Před odesláním doplň do zadání své odpovědi na čtyři otázky; kde nic nenapíšeš, platí doporučení z podkladů, jen obrázek se bez tvého souhlasu nestáhne.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-5; je v ní portrét Aristotela z P7.

Přečti CLAUDE.md, docs/styl.md, docs/pouceni.md a v docs/plany/celek-5.md tabulku stavu a oddíl Po P7. Z docs/podklady/celek-5-staci-vedet.md si vypiš nadpisy a čti jen: Čeho se drží celý celek, Jak převádím klíčová slova, Nejsilnější příběhy 1, celý oddíl Tvrzení: cesta 4 (od Vstupního příběhu po Návrh kroků), Velká otázka 1, Citáty (sloupec Kde použít), z Obrázků řádky B2 a B3 a Rozpory a rozhodnutí; z Citlivých míst jen Další místa, na která si dát pozor. V docs/podklady/k-overeni.md jen oddíl Celek 5 a Po P7. Z portrétu src/content/osobnosti/aristoteles.mdx přečti kapitoly 01 a 04 (co už říká o ctnosti, o Alexandrovi a o přátelství). Jako vzor cesty si z src/content/cesty/je-to-co-vidim-cela-skutecnost/ přečti přehled cesty, jeden krok s blokem a poslední krok; jako vzor kresby s pohybem jednu hotovou kresbu s posuvníkem a její soubor v src/lib. Postupuj podle skillu atlas-cesta; kresbu stav podle skillu atlas-komponenta.

Moje odpovědi na otevřené otázky (kde nic není, platí doporučení z podkladů; obrázek bez mého souhlasu nestahuj a vstup cesty pak nech s ornamentem a mincí):
- Obrázek pro vstup cesty (skříňka ze slonoviny z The Met, inv. 17.190.173; jiný; žádný): 
- Pověst o Fyllidě v popisku obrázku: 
- Třetí Aristotelův argument ve Sporu cesty 3 podle Metafyziky 981a (upravit teď; nechat na revizi; nechat být): 
- Složka ucitel/ s citlivými místy (teď; později pro celý atlas): 

Napiš cestu 4 „Stačí vědět, co je správné?“ (období 1, velká otázka 1) podle Návrhu kroků v podkladech. Osm kroků; uprav je, když najdeš lepší stavbu.

1. Háj a hostina. První obrazovka je Mieza; opilost jednou větou; pokus o sebevraždu po činu se nevypráví; hned po scéně otázka pro studenta. Text netvrdí, čemu Aristotelés Alexandra učil, ani opak: Plútarchovo „zdá se“ zůstává. Arriánův soud jen parafrází s vypravěčem. Portrét říká o Alexandrovi tři věty a posílá sem: cesta musí stát i bez portrétu.
2. Začátek cesty: Volba „Co ti tehdy chybělo?“ (cesta4-co-chybelo; pole zacatek v přehledu cesty), bez zápisu vlastního příběhu.
3. Sókratés: kdo ví, udělá to. „Platón nechává Sókrata říct“; mluv o větším a menším, ne o slasti. Malý Odkryj podle podkladů.
4. Aristotelés: stavitelem se stáváš stavěním; nemocní a lékař; Změň jednu věc „Kdy je to jeho?“. Zvyk není dril.
5. Spor Sókratés × Aristotelés. Obě strany odpoví na nejsilnější námitku druhé a Aristotelés Sókratovi z půlky přitaká (1147b14–17). Na telefonu čte student jednu stranu celou před druhou: první strana neodpovídá na to, co ještě nezaznělo.
6. Kde je střed? Milón na běhu a zápase, ne na jídle; kresba s pohybem na odvaze u řeky; přiznání, že se střed nedá vymezit slovy (etika-1109b). Střed není průměr a není pro každého stejný; „zlatý střed“ smí zaznít jednou jako to, co student zná, a hned se opravit. Kresbu mi pošli na snímcích dřív, než ji popíšeš jako hotovou.
7. Nový případ: studie o návycích z roku 2010. Čísla (96, 82, 39, 18–254, 66) nejdřív ověř ještě jednou v plném textu; „zkoušela“, ne „dokázala“; řekni, co měli účastníci dělat a co se měřilo; rozdíl mezi druhy úkonů neuváděj; z vody po snídani ke ctnosti vede jen naše přirovnání.
8. Tvoje pravidlo: kdo dá za pravdu komu (i studentovi, který s Aristotelem nesouhlasí, a tomu, kdo se ptá, kdo určí střed), panel Na začátku × Teď, výzva, Návrat „Třetí týden“ (cesta4-navrat).

Co do cesty nepatří: laguna, delfín, zuby, čtyři „proč“, most, tři druhy přátelství, Hermeiás, odchod z Athén a závěť (nese portrét); štěstí jako činnost a vlaštovka (stránka otázky 1); vnější dobra a hněv proti Epiktétovi (Spor cesty 5); „takovým ses udělal sám“ (stránka otázky 4); odkládání a obrazovky (cesta 34); „vůle“ (cesta 10); příklady o jídle, váze a závislosti; výčet z Etiky Nikomachovy VII, 5 (jen obecná věta). Místo „slabá vůle“ piš „neudržel se“ a „nedodržel, co sám uznal“. Citát etika-1106a (oko) je v portrétu: v cestě nejvýš jednou. Věta „Jsme to, co opakovaně děláme“ smí být v jednom Odkryj jako věta, kterou Aristotelés nenapsal. Kdo žil dřív? Sókratés × Aristotelés je v portrétu; v cestě ho neopakuj. Otroctví do cesty nepatří; nejvýš jedna věta u námitky „kdo určí střed“.

Stránka otázky 1: přidej cestu 4 mezi cesty otázky a Aristotelův hlas nech, jak je (podklady, Velká otázka 1). Portrét: v kapitolách 01 a 04 udělej z názvu cesty odkaz, do Kam dál dej cestu 4 na první místo a otázku 1 na poslední a uprav tests/e2e/aristoteles.spec.ts. Vstupy v hlavičce profilu, karta v Lidech a přehled otázek se složí z dat: zkontroluj je. Pokud jsem souhlasil s úpravou Sporu cesty 3, uprav jen třetí Aristotelův argument podle návrhu v podkladech (Otevřené body z k-overeni, Metafyzika I, 1) a nezapomeň na druhou půlku: vědění přisuzuje tomu, kdo zná příčinu.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč jen jako citát ze zdroje.yaml; věty Plútarcha a Arriána v datech nejsou a zůstanou parafrází s vypravěčem. Doporučená formulace nesmí být silnější než tvrzení v podkladech. Tradované jako „Vypráví se, že…“ nebo s vypravěčem. Jména střídmě: Alexandr, Filip, Kleitos, Milón jednou; ostatní popiš. Texty mají znít jako psané člověkem (styl.md).

Tón: žádné kázání. Student, který řekne „vím, co je správné, a stejně to neudělám“, nesmí vyjít jako slaboch, a ten, kdo řekne „kdo určí, kde je střed?“, má v cestě najít myslitele, který mu dá za pravdu. První obrazovku každého kroku čti očima studenta, kterého se téma bolestně týká (zabití přítele v opilosti; návyky, které se nedaří; co je z nemoci, není neovládnutí).

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když jednou spadne krok „astro-island[ssr]“ v tests/e2e/cesta.spec.ts, spusť test znovu); cestu přidej do STRANKY v tests/e2e/prohlidka.spec.ts a napiš její průchod podle vzoru tests/e2e/cesta3.spec.ts; čas cesty na štítku spočítej ze slov (150 za minutu a ovládání); projdi ji na 390 a 1440 px ve světlém i tmavém režimu (snímky skriptem scripts/snimky-cesta.mjs) a na 800 px se podívej na bloky. Po přidání cesty restartuj npm run dev.

Osnovu mi neposílej a na schválení nečekej, kromě kresby (snímky dřív, než ji nazveš hotovou). Kde váháš, zvol nejlepší cestu a pracuj. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-5.md stav po P8 (použité citáty, co si nese revize), připrav tam zadání P10 (revize celku skillem atlas-revize) s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-5.md a plán větve aktualizuj i v projektu Claude. Pak mi pošli snímky cesty a napiš, co jsi zvolil, nad čím jsi váhal a co jsi vynechal nebo připsal do k-overeni.
```
