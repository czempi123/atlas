# Plán větve celek-5: „Stačí vědět, co je správné?“

Celek 5: portrét Aristotela, cesta 4 „Stačí vědět, co je správné?“ (období 1, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1, která už stojí. Rozsah zvolil Claude 5. 10. 2026 na pokyn autora „vybrat další celek a připravit ho“; autor ho může změnit, dokud neproběhne P6. Aristotelés je v datech portrét a mluví na čtyřech stránkách otázek, ve dvou Sporech a v portrétu Platóna, pořád bez vlastní stránky. Po něm má období 1 všechny tři portréty a cesta 4 odpovídá Sókratovi z celku 1, podle kterého dobře jedná ten, kdo ví, co je dobré. Podklady vzniknou v `docs/podklady/celek-5-staci-vedet.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 5. 10. 2026; podklady v `docs/podklady/celek-5-staci-vedet.md` |
| P7 | Portrét Aristotela | připraveno 5. 10. 2026, zadání níže; čeká na odpovědi autora (obrázky) |
| P8 | Cesta 4 „Stačí vědět, co je správné?“ a doplnění stránky velké otázky 1 | po P7 |
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

## Zadání P7: Portrét Aristotela

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high. Před odesláním doplň do zadání své odpovědi na tři otázky (obrázky, spor přes texty, Fyllis); kde nic nenapíšeš, platí doporučení z podkladů.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-5; jsou v ní podklady z P6.

Přečti CLAUDE.md, docs/styl.md, docs/pouceni.md a v docs/plany/celek-5.md tabulku stavu a oddíl Po P6. Z docs/podklady/celek-5-staci-vedet.md si vypiš nadpisy a čti jen: Čeho se drží celý celek, Jak převádím klíčová slova, Nejsilnější příběhy, celý oddíl Tvrzení: Aristotelés (portrét), Citlivá místa, Citáty (sloupec Kde použít), Návrh dat, Obrázky a Rozpory a rozhodnutí; z oddílu o cestě 4 jen tabulky Vstupní příběh a Co se stalo potom. V docs/podklady/k-overeni.md jen oddíl Celek 5. Jako vzor si z src/content/osobnosti/platon.mdx přečti frontmatter, jednu kapitolu s blokem a závěr stránky. Postupuj podle skillu atlas-osobnost.

Moje odpovědi na otevřené otázky z podkladů (kde nic není, platí doporučení z podkladů):
- Obrázky: 
- Spor přes texty v oddíle Doba a lidé: 
- Pověst o Fyllidě v popisku: 

Napiš portrét Aristotela src/content/osobnosti/aristoteles.mdx (v datech má hloubka: portret; stránka zatím neexistuje).

1. Úvod scénou: laguna na Lesbu (Nejsilnější příběhy 2). Drž, co text říká: v jeho spisech se vrací laguna u Pyrrhy; že u ní sám stál nebo že tam rozbíjel vejce, pramen neříká. Hlavní citát stránky navrhuji casti-zivocichu-i-5; pointu zvol sám.

2. Kapitoly. Návrh pěti; uprav ho, když najdeš lepší stavbu:
- 01 Syn lékaře, dvacet let u Platóna: Stageira, otec lékař u makedonského krále, příchod do Akademie a odchod po Platónově smrti jen krátce a s odkazem na portrét Platóna (scénu ani větu o přátelích a pravdě neopakuj). Co po něm zbylo: přednášky bez dialogů, po Platónovi dialogy bez přednášek. První výskyt slova ctnost vyloží on sám (etika-1106a).
- 02 Podívej se pořádně: Lesbos s Theofrastem; delfín, kuře ve vejci, hřebenatky; „nic není pod úroveň“ (O částech živočichů I, 5). Blok před výkladem: Roztřiď „Kam s ním?“ podle podkladů. Nejsilnější námitka patří sem: zuby, a hlavně otroci a ženy, které měl za přírodu. Nech promluvit jeho antické odpůrce (politika-1253b), řekni, kde si sám nebyl jistý, a jednou větou odkaž na Epiktéta. Žádná omluva a žádný soud naším hlasem.
- 03 Čtyři „proč“: jeho vlastní příklad s procházkou; socha; k čemu je srdce. Blok před výkladem: Roztřiď „Jedno proč, čtyři odpovědi“ (most). Námitku s deštěm a zuby napsal sám a odmítl ji (fyzika-ii-8, fyzika-ii-8-prezilo); větu o dnešní biologii formuluj střídmě, pramen k ní v datech není.
- 04 Škola, žák a přátelé: Makedonie jen třemi větami a odkazem na cestu 4 (příběh s Alexandrem vypráví cesta; tady ho neopakuj). Lykeion a ochoz; tři druhy přátelství. Blok před výkladem: Změň jednu věc „Co zbude?“ podle podkladů. Báseň pro Hermeia sem, nebo do kapitoly 05.
- 05 Podruhé ne: Alexandrova smrt, žaloba, Chalkis; věta o Athéňanech jako „Vypráví se“ (ailianos-iii-36); závěť (dl-v-16, volitelně dl-v-15); rukopisy ve sklepě jako „Vypráví se“.

3. Kdo žil dřív? s dvojicí, která na hotových stránkách není: navrhuji Sókratés × Aristotelés (minuli se o patnáct let; hodí se k cestě 4). Zkus to žít: tři dny u jedné věci, o které „víš“, jaká je, zapisuj jen to, co vidíš; nemiř na člověka. Kam dál: Platón, Epiktétos; cesta 4 a stránka otázky 1 se připojí v P8.

4. Data a Doba a lidé. Pokud jsem souhlasil se sporem přes texty: uprav src/lib/vztahy.ts tak, aby polemika lidí, jejichž životy se nepřekrývají, měla vlastní skupinu (návrh názvů v podkladech, Návrh dat), dopiš test a přidej do vztahy.yaml oba navržené vztahy; zkontroluj, co se tím změnilo na stránkách Sókrata, Prótagora a v kartě Karneada. Postupuj podle skillu atlas-komponenta. Pokud ne, vztahy nepřidávej.

5. Obrázky. Stáhni jen ty, se kterými jsem výše souhlasil (odlitek přes IIIF rovnou v 1280 px jako u Platóna; u ostatních napiš předem název souboru, zdroj a velikost do zprávy na konci, originál nech mimo repozitář). Zapiš je do obrazky v zdroje.yaml a Aristotelovi doplň obrazek. Popisek odlitku bez slova „římská“, dokud to neověříš na stránce vídeňského muzea. Bez souhlasu má deska minci s atributem.

Co do portrétu nepatří: všechno, co atlas o Aristotelovi už říká (podklady, oddíl Co do portrétu nepatří), a všechno, co nese cesta 4: stavitelé a kitharisté, nemocní a lékař, Milón a střed, Sókratés a vědění jako otrok, hněv a psi, obec se zákony, studie o návycích, Kleitos (citáty etika-1103a, etika-1105b, etika-1106b, etika-1106b-milon, etika-1107a, etika-1109a, etika-1109b, etika-1109b-drevo, etika-1145b, etika-1147a, etika-1147b, etika-1149a, etika-1152a, etika-1179b, etika-1179b-reci, etika-1179b-puda, etika-1095a a všechny protagoras-…). Portrét smí etiku středu a zvyku pojmenovat jednou větou a poslat na cestu. Úsudek a tvor obce nejvýš jednou větou každý.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč jen jako citát ze zdroje.yaml. Doporučená formulace nesmí být silnější než tvrzení v podkladech: „asi“ zůstává „asi“, „vypráví se“ zůstává. Tradované jako „Vypráví se, že…“ nebo s vypravěčem. Nepiš: že odešel od Platóna za jeho života, Hříbě, jed a akonit, dopisy mezi ním a Alexandrem, „kořeny vzdělání“, „zlatý střed“, „Jsme to, co opakovaně děláme“ jako jeho větu (smí být v jednom Odkryj jako věta, kterou nenapsal), proč odešel z Athén roku 347 a z Assu na Lesbos, kdy přednášky o etice vznikly, vzhled. Jména střídmě: Platón, Theofrastos, Hermeiás, Pýthias, Alexandr, Filip jednou; ostatní popiš. Texty mají znít jako psané člověkem (styl.md).

Tón: žádné kázání a žádný pomník. Aristotelés se v portrétu dvakrát mýlí vlastním měřítkem a jednou si napíše nejlepší námitku proti sobě; obojí patří k němu. První obrazovku každé kapitoly čti očima studenta, kterého se téma bolestně týká (otroctví; přátelství u toho, kdo přátele nemá).

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když jednou spadne krok „astro-island[ssr]“ v tests/e2e/cesta.spec.ts, spusť test znovu, při P6 šlo o zpožděnou hydrataci pod zátěží); stránku přidej do STRANKY v tests/e2e/prohlidka.spec.ts a do PROFILY tam, kde se profily vyjmenovávají; prohlédni ji na 390 a 1440 px ve světlém i tmavém režimu (snímky skriptem scripts/snimky-listy.mjs), hlavně desku, mini mapu se šesti místy a to, co vygenerovala Doba a lidé. Po přidání stránky restartuj npm run dev.

Osnovu mi neposílej a na schválení nečekej. Kde váháš, zvol nejlepší cestu a pracuj. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-5.md stav po P7 (použité citáty, co si nese P8), připrav tam zadání P8 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-5.md a plán větve aktualizuj i v projektu Claude. Pak mi pošli snímky stránky a napiš, co jsi zvolil, nad čím jsi váhal a co jsi vynechal nebo připsal do k-overeni.
```
