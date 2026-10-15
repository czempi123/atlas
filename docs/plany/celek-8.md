# Plán větve celek-8: „Čí život vlastně žiju?“

Celek 8: společný profil Kratéta a Hipparchie, cesta 7 „Čí život vlastně žiju?“ (období 2, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1. Rozsah navrhl Claude 15. 10. 2026 ze tří možností, které z antiky zbývají (oddíl Proč tento rozsah); autor ho potvrdí nebo změní prvním řádkem zadání P6. Podklady vzniknou v `docs/podklady/celek-8-ci-zivot-ziju.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | čeká; zadání je níže |
| P7 | Společný profil Kratéta a Hipparchie | čeká na P6 |
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

## Zadání P6: Podklady k celku 8

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** s vyhledáváním. Prameny ke kynikům jsou pozdní a anekdotické, Hipparchia má citlivá místa a společný profil je v atlasu nový; na tohle bych Sonnet nepouštěl. Kdo chce šetřit, pustí krok na Sonnetu 5.5 · high a body 1 a 4 nechá na Opus.

První řádek je místo pro tvou volbu rozsahu. Když ho necháš prázdný, platí A.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pracuj ve větvi celek-8; je založená z hlavní větve po sloučení celku 7.

Rozsah (A: cesta 7 s Kratétem a Hipparchií; nebo B: cesta 34 „Kam mi mizí čas?“; nebo C: cesta 33 „Co když přijde to nejhorší?“): 

Když platí B nebo C, přepiš nejdřív oddíl „Co si celek nese z celků 1 až 7“ v docs/plany/celek-8.md pro zvolenou cestu (stejné pořadí bodů, nové osoby nepřidávej) a pak pracuj podle bodů níže přiměřeně. Zadání dál počítá s A.

Přečti CLAUDE.md, docs/styl.md, docs/pouceni.md a docs/plany/celek-8.md (tabulka stavu, Proč tento rozsah, Co si celek nese z celků 1 až 7). V docs/architektura.md jen velkou otázku 1, řádek cesty 7 a řádek období 2 v Kostře osobností. V docs/podklady/k-overeni.md jen řádky, kde je Diogenés, Kratés, Hipparchia, kynici nebo Alexandr (najdi je grepem). Jako vzor podkladového listu si z docs/podklady/celek-7-jsem-porad-tentyz.md vypiš nadpisy a přečti oddíl Citlivá místa. Co atlas o kynicích už říká, najdeš v src/content/osobnosti/diogenes.mdx (stačí kapitoly a úvod), v kroku 4 cesty 6 (src/content/cesty/kolik-je-dost/4-zit-jako-kynik.mdx), v hlasu Diogena na stránce otázky 1 a v src/data (grep „krates“, „hipparchia“, „kynismus“); nic z toho neopakuj. Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 8 „Čí život vlastně žiju?“. Studentský text zatím nepiš.

1. Kratés a Hipparchia pro společný profil. U každého: co o životě víme a od koho (jak dlouho po nich), co je doložené, co tradované a co anekdota; co z Kratétova díla máme (zlomky básní, „Pera“) a jak o tom psát; co víme o Hipparchii kromě toho, že šla za Kratétem (spor s Theodórem a její odpověď, spisy, které jí Diogenés Laertios připisuje). Navrhni dvě až tři myšlenky pro profil, každou s vlastním pokusem studenta, a nejsilnější námitku, kterou nese jiný myslitel. Řekni, jak udělat společný profil dvou lidí v datech a v šabloně (jedna stránka, dvě osoby, hlavička, deska, Doba a lidé, vstupy) a jestli na to P7 potřebuje novou komponentu; nic zatím nestav.

2. Cesta 7 „Čí život vlastně žiju?“. Rozliš, co kynici myslí životem „podle přírody, ne podle zvyku“, a co dnešní „buď sám sebou“; cesta nesmí kynikům vložit do úst moderní autenticitu ani slogan. Vstupní příběh: katalog má Diogena a Alexandra, ale profil i cesta 4 Alexandra už mají; posuď Kratéta, který rozdal majetek, a Hipparchii, kterou rodina přemlouvá, a zvol. Skutečný střet pro blok Spor v nejsilnější verzi obou stran (kandidáti: kynik × Aristotelés o tom, k čemu jsou zvyky a obec; kynik × Epikúros, DL X, 119; nebo kynik × Platón), s odpovědí na nejsilnější námitku druhé; scéna nesmí tvrdit setkání ani čtení, které prameny nenesou. Najdi i slabé místo kynika (okázalé pohrdání je pořád hra pro diváky) a kdo ho řekl. Vlastní pokus studenta před výkladem (začátek cesty), nový případ (ověřený, ne školní scénka; třeba studie o tom, jak skupina mění úsudek, nebo o tom, co lidé dělají, když je nikdo nevidí; čísla jen z plného textu a s tím, s čím se srovnává) a případ pro Návrat jiného druhu. Kdo dá za pravdu studentovi, který řekne „žiju podle sebe“, kdo tomu, kdo řekne „bez druhých to nejde“, a kdo tomu, kdo řekne „nevím, co je moje“. Kresba s pohybem: posuď, jestli a jaká; co je v ní pramen a co náš obraz.

3. Velká otázka 1 „Jak mám žít?“: stránka má hlasy Aristotela, Epikúra, Diogena a Seneky. Navrhni, jestli a jak ji celek doplní (hlas Kratéta nebo Hipparchie, Epiktétův ideál kynika z Rozprav III, 22), aby se hlasy nekryly a každý měl myšlenku ze stejného místa pramene jako citát. Nic, co stránka má, neopakuj.

4. Citlivá místa sepiš zvlášť a u každého navrhni, jestli patří do studentského textu, učiteli (ucitel/celek-8.md), nebo nikam, a jak ho formulovat. Zvlášť: Hipparchiina výhrůžka sebevraždou (DL VI, 96), veřejné soužití kyniků a Theodórovo strhávání pláště (VI, 97), Diogenovy tělesné potřeby (vynechané od celku 2). Projdi vstup, jádro, nový případ a Návrat očima studenta pod tlakem rodiny (obor, víra, vztah), studenta, kterého skupina vylučuje, studenta, který si vlastní cestu nemůže dovolit (peníze, péče o sourozence), studenta, který se s rodinou rozchází kvůli své identitě, a studenta, který si „žiju podle sebe“ bere jako omluvu pro krutost. Cesta nikomu neradí odejít z domova, nesoudí rodiče, nedělá z rebelie ctnost a neptá se na vlastní profil na sítích ani na rodinný konflikt polem na psaní. Opři se o zdroje, které k tomu existují (doporučení pro školy k tlaku vrstevníků, šikaně, rodinným konfliktům), najdi je a cituj.

5. Obrázky: jeden pro společný profil a jeden pro vstup cesty, z muzeí s otevřeným přístupem; autor, instituce, licence a odkaz. U pozdějších zpodobení (nástěnná malba z Villa Farnesina s Kratétem a Hipparchií, novověké rytiny) řekni, čí je to představa a z kdy. Zatím nic nestahuj, jen navrhni dva až tři kandidáty; o stažení rozhodnu já.

6. Data: navrhni, co doplnit Kratétovi a Hipparchii v src/data (hloubka profil, roky, místa, prameny, otázky, atribut s větou, vztahy: Diogenés → Kratés, Kratés a Hipparchia, Kratés → Zénón z Kitia, Hipparchiin bratr Métroklés jen tehdy, když nese příběh). Nové osoby nepřidávej; koho příběh potřebuje a v datech není (Alexandr, Theodóros, Métroklés), zůstane v textu bez odkazu. Řekni, jestli se mění atribut nebo věta u Diogena.

Výstup: podkladový list docs/podklady/celek-8-ci-zivot-ziju.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny jako v celcích 1 až 7), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně).

Pravidla jako u celku 7: každé historické tvrzení a citát se zdrojem, ověřené v plném textu, ne ve shrnutí; u každého shrnutí pramene drž rozdíly, které pramen dělá; doporučená formulace nesmí být silnější než tvrzení („asi“ zůstává „asi“); tradované jako tradované, výklad jako výklad; záporné tvrzení o autorovi („to neřekl“) jen po ověření v jeho textu; krok, který bys připsal sobě, hledej i u pozdějších autorů. Čísla ze studie jen z plného textu, s tím, ze kterého pokusu jsou a s čím se srovnávají. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Osnovu mi neposílej a na schválení nečekej. Kde váháš (čím cestu otevřít, jaký Spor, jaký nový případ, jak udělat společný profil, jestli doplnit otázku 1), zvol nejlepší cestu a pracuj. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš stav do docs/plany/celek-8.md (oddíl Po P6), připrav tam zadání P7 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-8.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co je ověřeno, co zůstalo otevřené, nad čím jsi váhal a co jsi zvolil, a co potřebuje moje rozhodnutí (obrázky ke stažení, citlivá místa, podoba společného profilu).
```
