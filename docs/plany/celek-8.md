# Plán větve celek-8: „Čí život vlastně žiju?“

Celek 8: společný profil Kratéta a Hipparchie, cesta 7 „Čí život vlastně žiju?“ (období 2, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1. Rozsah navrhl Claude 15. 10. 2026 ze tří možností, které z antiky zbývají (oddíl Proč tento rozsah), a autor ho týž den potvrdil („Líbí se mi cesta 7“). Podklady vzniknou v `docs/podklady/celek-8-ci-zivot-ziju.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 15. 10. 2026 (oddíl Po P6); šest bodů čeká na autora |
| P7 | Společný profil Kratéta a Hipparchie | čeká; zadání je níže |
| P8 | Cesta 7 „Čí život vlastně žiju?“ a doplnění stránky otázky 1 | čeká na P7 |
| P10 | Revize celku | čeká na P8 |
| Opravy | Zapracování nálezů revize | čeká na P10 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | jen na pokyn autora |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-8.md`. Větev `celek-8` je založená z hlavní větve 15. 10. 2026 (commit `b883943`, po sloučení celku 7).

## Proč tento rozsah

Z katalogu cest zbývají pro antiku tři cesty. Všechny jdou udělat bez nové osoby v datech, kromě jedné výjimky u C.

| | Cesta | Kdo | Otázka | Pro | Proti |
| --- | --- | --- | --- | --- | --- |
| **A (doporučuji)** | 7 „Čí život vlastně žiju?“ | Diogenés, Kratés a Hipparchia | 1 | Otázka, na které šestnáctiletým záleží nejvíc: žiju podle sebe, nebo podle toho, co se čeká (rodina, spolužáci, sítě)? Je to hodnota, kterou atlas chce předávat (autenticita). Kratés a Hipparchia jsou v datech jako medailonky a dostanou společný profil; Hipparchia je první filozofka s vlastní stránkou. Uzavře kyniky. | Diogenés má profil i hlas na otázce 1 a kynici mají krok v cestě 6: hlídat překryvy. Prameny o Hipparchii jsou skoupé a místy citlivé (viz níže). |
| B | 34 „Kam mi mizí čas?“ | Seneca, Marcus Aurelius | 1 | Silné téma (čas u obrazovky), oblíbený stoicismus, žádná nová stránka osoby; portrét Seneky si O krátkosti života nechal právě pro ni. | Třetí celek po sobě se Senekou a stoiky; hrozí kázání o mobilech. |
| C | 33 „Co když přijde to nejhorší?“ | Seneca, Epiktétos | 3 | Představa nejhoršího, Stoický týden. | Vstupní příběh nese James Stockdale, který v datech není (nové osoby autor zatím nechce); válka a zajetí jsou nejtěžší citlivé místo atlasu. |

Po celku 8 zbudou z antiky cesty 33 a 34 a pak souhrnná revize období (P11, brána fáze F3).

## Co si celek nese z celků 1 až 7

Co je tu o pramenech, je výchozí stav a domněnka k ověření. Kde se P6 s tímto oddílem rozejde, platí podklady.

- **Co už v atlasu o kynicích je:**
  - Profil Diogena (`src/content/osobnosti/diogenes.mdx`, kapitoly Pohárek, Lucerna, Pes, Na prodej) vypráví aféru s mincemi a radu „změň ražbu“ (přeznačení měny je přesně otázka cesty 7), lucernu, sud jako pithos, prodej do otroctví a jednou větou Alexandra, který mu nemá stínit. Cesta to nesmí opakovat; musí ale stát i bez profilu (poučení: „cesta musí stát i bez portrétu“).
  - Cesta 6 „Kolik je dost?“ má krok 4 „Žít jako kynik?“ se Sporem Epikúros × kynici (`cesta6-kynici-spor`): kynici tam stojí za skromností. Cesta 7 má jinou osu: ne kolik, ale podle koho.
  - Stránka otázky 1 má hlas Diogena („…nebo protože se to čeká?“, citát `dl-vi-44`). Je tam i Aristotelés, Epikúros a Seneca.
  - Alexandra vypráví portrét Aristotela a cesta 4 (hostina). Alexandr v datech není (`k-overeni.md`).
  - V datech: Kratés (medailonek, asi 350–301 př. n. l., Théby, Athény, „Jeho posluchačem byl Zénón z Kitia“), Hipparchia (medailonek, činná asi 330–300 př. n. l., Maróneia, „Z bohaté rodiny odešla za Kratétem“), Antisthenés, Zénón z Kitia; směr `kynismus` se stránkou `src/content/smery/kynismus.md`. Prameny `britannica-crates`, `iep-cynics`, u Diogena `iep-diogenes` a místa Diogena Laertia VI.
- **Hlavní pramen je Diogenés Laertios VI, 85–98**, psaný asi pět set let po nich, a k tomu zlomky Kratétových básní a pozdní listy připisované kynikům (nepravé). Tradované jako tradované. P6 řekne, co je u Kratéta doložené (rozdání majetku, „Pera“, Zénón jako žák) a co anekdota.
- **Otázka cesty je dnešní a zní snadno jako slogan** („buď sám sebou“). Kynici neříkali „poslouchej své city“, ale „žij podle přírody, ne podle zvyku“, a ten rozdíl musí cesta držet. Nejsilnější protistrana není konformista, ale ten, kdo hájí zvyky jako něco, co lidem pomáhá žít spolu (hodí se Aristotelés nebo Epikúros, který kyniky odmítal, DL X, 119; možná Platón, „Sókratés, který se zbláznil“). Kynik má navíc slabé místo: kdo pohrdá míněním druhých okázale, žije pořád pro diváky.
- **Hipparchia nesmí být jen „žena, která šla za mužem“.** Pramen o ní má víc: spor s Theodórem a její odpověď o čase stráveném vzděláním místo u stavu. Stránka ji představí jako filozofku. Platí pravidlo bez lomených tvarů; „filozofka“ ano.
- **Citlivá místa, která P6 rozhodne:**
  - Hipparchia podle Diogena Laertia rodičům pohrozila, že si sáhne na život, když ji za Kratéta nepustí (VI, 96). Výhrůžka sebevraždou jako cesta, jak prosadit vlastní život, do studentského textu nepatří, ani zmírněná; učiteli s doporučením z celku 6.
  - Veřejné soužití kyniků a Theodórovo strhávání pláště (VI, 97) jsou sexuální a obtěžování: studentský text je nevypráví. Diogenovy tělesné potřeby na veřejnosti zůstávají vynechané (rozhodnutí z celku 2).
  - Student pod tlakem rodiny (škola, obor, víra), student, kterého skupina vylučuje, student, který si „vlastní cestu“ nemůže dovolit (peníze, péče o sourozence), student, který se rozchází s rodinou kvůli identitě, a student, který si „autenticitou“ omlouvá krutost k druhým. Cesta nikomu neradí odejít z domova, nesoudí rodiče a nedělá z rebelie ctnost.
  - Sociální sítě: o lajcích a sledujících bez moralizování („mobily jsou zlo“) a bez otázky na vlastní profil.
  - Kratésův vzhled (hrbatý, ošklivý) jen tehdy, když nese myšlenku; pravidlo 6 ze stylu.
- **Překryvy, kterým se vyhnout:** profil Diogena (mince, lucerna, prodej, Alexandr), cesta 6 krok 4 (kynická skromnost, Spor s Epikúrem), cesta 5 (co je v mé moci; Epiktétův ideál kynika, Rozpravy III, 22, se hodí jen jako hlas, ne jako téma), cesta 4 (Alexandr a jeho dvůr), Platón × Diogenés ve Sporu o ideji stolu (`platon-diogenes-skutecnost`), otázka 1 (hlas Diogena: jiný citát, jiná myšlenka).
- **Vstupní příběh podle katalogu** je Diogenés, který žádá Alexandra, ať mu nestíní. Profil ho má jednou větou a Alexandra atlas vypráví už dvakrát. P6 posoudí, jestli cestu neotevře lépe Kratés (rozdal majetek) nebo Hipparchia (rodina ji přemlouvá, Kratés jí ukáže, co si bere), a zvolí.
- **Kresba s pohybem:** autor ji chce v atlasu častěji. P6 řekne, jestli tu dává smysl (třeba mince, kterou student přeznačí; váha, na které se vyvažuje, co dělám pro sebe a co kvůli divákům) a co by byl pramen a co náš obraz.
- **Poučení z revizí** je v `docs/pouceni.md`. Z celku 7 hlavně: zastánci v posledním kroku patří odpovědím všech Voleb cesty; nový případ a zastánci jsou dva kroky; záporné tvrzení o zlomku nebo prameni ověřit proti jeho vlastním slovům; krok, který podle nás „přidáváme“, hledat i u pozdějšího autora; hlavička profilu s mnoha otázkami.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“, Návrat a karta Zkus to žít. Profil má šablonu z Diogena, Hérakleita a Parmenida; společný profil dvou lidí atlas zatím nemá (kostra osobností s ním počítá): P6 navrhne, jak ho udělat v datech a v šabloně (jedna stránka, dvě osoby), a jestli je to nová komponenta pro P7. Vstupy osobnosti mají od celku 7 dvě navigace (cesty a otázky).
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026). Předem se ptá jen na stahování obrázků, nové osoby, mazání, slučování a GitHub. Změna hloubky Kratéta a Hipparchie z medailonku na profil není nová osoba.
- **Test, který občas spadne:** „cesta: průchod, Kam dál z bloku…“ v `tests/e2e/cesta.spec.ts`. Když spadne jen on, pusť ten soubor znovu samostatně.

## Po P6 (15. 10. 2026)

Podklady jsou v `docs/podklady/celek-8-ci-zivot-ziju.md`; nové prameny (22) a citáty (27) v `src/data/zdroje.yaml`. Kratés a Hipparchia mají v datech místa podle Diogena Laertia (`dl-vi-85`) a rozšířené prameny; hloubka, atributy, `kdo` a `proc` a změny vztahů čekají na P7, protože mění Lidé a směry, Mapu a čas a Dobu a lidi na Diogenově a Zénónově stránce. Zadání P6 je v `docs/archiv/zadani/celek-8.md`. Celé `npm test` prošlo.

**Čeho se celek drží** (podrobně v úvodu podkladů):

1. Kynik nežil „podle sebe“, ale „podle přírody, ne podle zvyku“ (DL VI, 71). Příroda je u něj to, co potřebuje každý člověk, a najde se cvičením. Ideál autenticity („buď sám sebou“) vznikl až v 17. a 18. století (SEP). Kynik nechtěl být jiný než ostatní; chtěl být člověkem.
2. Hipparchia není „žena, která šla za mužem“: milovala Kratéta, „jeho řeči i jeho život“, Kratés ji na prosbu rodičů odrazoval a postavil podmínku, že mu bude druhem, jen když bude žít jako on. Diogenés Laertios o ní píše jako o „té filozofce“.
3. Kdo pohrdá míněním okázale, pořád hraje pro diváky: Sókratés Antisthenovi (plášť), Platón Diogenovi (koberce, „jinou nadutostí“), Epiktétos o kynicích své doby (III, 22).
4. Cesta nikomu neradí, s kým má žít ani odkud odejít. Ptá se, podle čeho poznám, že je rozhodnutí moje, a ukazuje, že nezávislost chce cvik a často aspoň jednoho spojence.

**Co se rozešlo s oddílem „Co si celek nese“:** Hipparchii **nepřipisuje spisy Diogenés Laertios** (ověřeno v řečtině VI, 96–98), ale až byzantská Suda. Kratétovy roky v datech (asi 350–301, Britannica) nesedí s tím, že zemřel starý (DL VI, 92, 98); odborná chronologie (Dorandi podle Wikipedie) má asi 365–285, neověřeno.

**Zvolil jsem sám** (bez mezikroku schvalování; důvody jsou v podkladech, Rozpory a rozhodnutí):

- **Společný profil:** jedna stránka `krates-a-hipparchia`, dvě osoby v datech, v obsahu nepovinné pole `dalsi: [hipparchia]`. Jedna pomocná funkce pro adresu osoby (dnes se adresa skládá na pěti místech dvěma způsoby a pro Hipparchii by vedla na neexistující stránku). Šablona: titulek s oběma jmény, dva řádky dat, jeden obraz a pod ním dva atributy, sjednocené vstupy, jedna Doba a lidé s oběma rodišti na mini mapě. **Žádný nový ostrov**, jen rozšíření šablony a komponent Astro; P7 ho dělá se skillem `atlas-komponenta`. Nové ikony atributů: mošna (Kratés, báseň o městě Péra) a člunek (Hipparchia, čas od stavu dala vzdělání).
- **Myšlenky profilu:** Kratés „Co mi nikdo nevezme“ (Théby a vlast neslavnost a chudoba; „mám, co jsem se naučil“; námitka Aristotelova o marnotratnosti, EN IV, 1) a „Otvírač dveří“ (kynik, který chodí lidem do domů; Apuleius); Hipparchia „Čí je můj čas“ (odpověď Theodórovi; námitka Aristotelova, Politika I, 13; spojenec Platón, Ústava V). Spor s Theodórem jako hádanka „Kde je v jejím důkazu chyba?“. Hrnec čočkové polévky (Kratés a Zénón) do profilu s otázkou hned za scénou. Konec profilu Epiktétovým „žena, která byla druhý Kratés“.
- **Vstup cesty 7** je Hipparchiina volba (ženich a jeho majetek), ne Diogenés a Alexandr: Alexandra atlas vypráví už dvakrát a scéna je o tom, kolik potřebuju, ne podle koho žiju. Rodiče nejsou záporné postavy: o dceru se bojí a požádají Kratéta o pomoc.
- **Spor** je Kratés × Aristotelés „Svazují mě zvyky, nebo mě dělají člověkem?“. Oba se odvolávají na přírodu. Scéna netvrdí setkání: Aristotelés kyniky znal (Rétorika 1411a) a Hipparchiin bratr chodil k Theofrastovi, než přešel ke Kratétovi. Aristotelova odpověď na „zvyky se liší“ je EN V, 7 (pravá ruka), o „některých“ bez jména. Zamítnuto: Epikúros (cesta 6), Platón (má Spor s Diogenem a hodí se na slabé místo).
- **Slabé místo kynika:** Platón „jinou nadutostí“ (DL VI, 26), Sókratés a Antisthenův plášť (VI, 8), Epiktétův pravý kynik (III, 22); blok Změň jednu věc „Nikdo se nedívá“.
- **Nový případ:** Aschův pokus s čarami (1951, 1956) a jeho spojenec (s jedním člověkem, který říkal pravdu, šlo s většinou 5,5 % odpovědí místo 32 %), replikace v Bernu 2021 (33 %). **Návrat:** Císařovy nové šaty a jejich konec, který se obvykle nevypráví (císař ví, a jde dál).
- **Kresba s pohybem „Třetí čára“:** odpovědi skupiny přicházejí jedna po druhé, přepínač se spojencem. Pramen je Aschovo uspořádání a karta z kola 1; siluety a bubliny jsou náš obraz. Rezerva pro profil: „Město Péra“.
- **Stránka otázky 1:** přidat pátý hlas, Hipparchii (čas a role), myšlenka i citát z DL VI, 96–98. Kratés by opakoval Diogena, Epiktétův kynik patří do cesty.
- **Citlivá místa:** výhrůžka sebevraždou jen učiteli; veřejné soužití nikam; Theodórův čin studentům jen „zkusil ji zahanbit“; tělesné potřeby dál nikam; Kratés honí příbuzné holí, syn a nevěstinec, oprátka ve verši: nikam. Osm pravidel pro celý celek a tabulka míst očima pěti studentů. Opřeno o PSHE Association (bez osobních otázek, techniky odstupu), přílohy MŠMT č. 6 (šikana) a č. 8 a o WHO a NÚDZ z celku 6.

**Čeká na autora** (podrobně na konci podkladů):

1. obrázky ke stažení: dvě rytiny z Rijksmusea (CC0), Beverwijck 1643 pro profil a Cats 1637 pro vstup cesty; malbu z Villa Farnesina nedoporučuji;
2. citlivá místa podle návrhu výše, hlavně jestli Theodórův čin patří do studentského textu (tvé pravidlo z 9. 10.: co je podstatné a chybělo by jen z ohleduplnosti);
3. podoba společného profilu (jedna stránka, pole `dalsi`, bez nového ostrova);
4. pořadí jmen v titulku (doporučuji ponechat „Kratés a Hipparchia“);
5. hlas Hipparchie na stránce otázky 1;
6. roky Kratéta (doporučuji ověřit a přejít na asi 365–285).

Po schválení vstupu se má v `docs/architektura.md` (katalog cest, řádek cesty 7) změnit vstupní příběh na „Hipparchia a Kratétova podmínka“; zatím nezměněno.

## Zadání P7: Společný profil Kratéta a Hipparchie

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Katalog dává profilu Opus 5.5 · medium. Tady jde o dva lidi na jedné stránce, rozšíření šablony profilu, novou funkci pro adresy osob (mění odkazy na pěti místech webu) a citlivá místa u Hipparchie. Kdo chce šetřit, nechá technickou část (šablona, adresy, testy) na Sonnetu 5.5 · high a text profilu na Opus.

Šest řádků na začátku je místo pro tvé odpovědi. Prázdný řádek znamená doporučení z podkladů.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-8. Podklady (P6) jsou hotové.

Obrázky (Rijksmuseum, CC0: Beverwijck 1643 pro profil, Cats 1637 pro vstup cesty): 
Citlivá místa (návrh v podkladech, hlavně Theodórův čin): 
Podoba společného profilu (jedna stránka, pole dalsi, bez nového ostrova): 
Pořadí jmen v titulku: 
Hlas Hipparchie na stránce otázky 1 (přidá se až v P8): 
Roky Kratéta: 

Kde řádek zůstal prázdný, platí doporučení z podkladů (docs/podklady/celek-8-ci-zivot-ziju.md, Otevřené otázky pro autora). U obrázků platí prázdný řádek jako souhlas se stažením obou rytin.

Postav společný profil Kratéta a Hipparchie podle skillů atlas-osobnost (text) a atlas-komponenta (šablona). Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md;
- v docs/plany/celek-8.md tabulku stavu a oddíl „Po P6“;
- z podkladů: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), Nejsilnější příběhy, celé oddíly Tvrzení: Kratés (profil), Tvrzení: Hipparchia (profil) a Společný profil: data a šablona, z Citlivých míst Pravidla pro celý celek, Zvlášť: tři místa ze zadání a Další místa v pramenech, tabulku Citáty, Návrh dat a Obrázky;
- jako vzor profilu src/content/osobnosti/diogenes.mdx a šablonu src/pages/osobnost/[id].astro; komponenty VstupyOsoby, DobaALide, MiniMapa, MiniOsa, Deska a Mince jen v rozsahu, který měníš.

Co udělat:

1. Šablona dvojice. V content.config.ts nepovinné pole dalsi (seznam id osob). Jedna pomocná funkce pro adresu stránky osoby, která zná i dalsi; přepni na ni všech pět míst, kde se dnes adresa skládá (lide/index.astro, cesta/[cesta]/index.astro, otazka/[otazka].astro s HlasyOsa.astro, mapa/index.astro s mapa-vstup-build.ts). Hlavička se dvěma jmény a dvěma řádky dat, deska s jedním obrazem a pod ní atributy obou, sjednocené vstupy do cest a otázek, jedna Doba a lidé pro obě osoby (vztah mezi nimi se v seznamu neukáže, řekne ho úvodní věta), mini mapa a mini osa s oběma. Dvě nové ikony atributů (mošna, člunek) do docs/design/atributy-ikony.json a npm run ikony. Jednotkový test pro adresu osoby a test v prohlížeči pro hlavičku dvojice a pro odkazy z Lidí, Mapy a času a cesty.
2. Data podle Návrhu dat: obě osoby hloubka profil, atributy, kdo a proc, obrázek; vztahy Diogenés → Kratés a Kratés → Zénón s novými prameny. Roky Kratéta podle mé odpovědi; když zůstane prázdná, ověř odbornou chronologii (Dorandi, OCD) a teprve pak přepiš. Po změně přečti Dobu a lidi na stránkách Diogena a v Mapě a čase karty obou.
3. Obrázky podle mé odpovědi: výřez rytiny z celé strany přes IIIF muzea, delší strana 1280 px, originál mimo repozitář (~/Pictures/Atlas-originaly/), popisek řekne, čí je to představa a z kdy. Výřez rytiny pro vstup cesty připrav taky, použije ho P8.
4. Text profilu: úvod scénou (doporučuji Kratéta, který se vzdal jmění, nebo Otvírače dveří), kapitoly o Kratétovi (Péra a dým, Otvírač dveří, Zénón a hrnec polévky s otázkou hned za scénou) a o Hipparchii (volba jen krátce s odkazem na cestu 7, která ji vypráví celou; hostina s Theodórem a odpověď o čase a vzdělání; hádanka „Kde je chyba?“ v bloku Odkryj). Tři velké myšlenky (dvě Kratétovy, jedna Hipparchiina) s vlastním stanoviskem studenta a s námitkou jiného myslitele (Aristotelés EN IV, 1; Aristotelés Politika I, 13 a spojenec Platón Ústava V, 455d–456a s výhradou, kterou citát nese). Karta Zkus to žít. Konec Epiktétovým „žena, která byla druhý Kratés“. Hipparchie stejný prostor jako Kratétovi.
5. Citlivá místa podle mé odpovědi a pravidel z podkladů. Ceník a argumenty Sporu patří cestě 7; profil je nepoužije. Co atlas o kynicích už říká (profil Diogena, cesta 6, krok 4), neopakuj; odkaž.

Založ ucitel/celek-8.md a zapiš do něj, co se týká profilu: výhrůžka sebevraždou a proč ji atlas neříká; Theodórův čin a Eurípidův verš v kontextu; tři verze Kratétova rozdání majetku; Hipparchiiny spisy (Suda, ne Diogenés Laertios); co dělat, když student řekne „u nás doma by to nešlo“ nebo „já si to nemůžu dovolit“; dokumenty z oddílu Citlivá místa.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně); snímky profilu na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs); hlavička na telefonu (deska, oba atributy a první odstavec na první obrazovce); fokus z klávesnice (scripts/kontrola-fokus.mjs); Doba a lidé na profilu i u Diogena; odkazy na profil z Lidí a směrů, z Mapy a času a z Diogenova a Zénónova záznamu. Po změnách restartuj npm run dev.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-8.md oddíl „Po P7“ (co stránka má, použité citáty, co se změnilo mimo profil, co si nese P8, co čeká na autora), připrav tam zadání P8 (cesta 7, kresba Třetí čára a hlas Hipparchie na stránce otázky 1) s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-8.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co je hotové, nad čím jsi váhal a co potřebuje moje rozhodnutí.
```
