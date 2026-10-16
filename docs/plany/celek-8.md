# Plán větve celek-8: „Čí život vlastně žiju?“

Celek 8: společný profil Kratéta a Hipparchie, cesta 7 „Čí život vlastně žiju?“ (období 2, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1. Rozsah navrhl Claude 15. 10. 2026 ze tří možností, které z antiky zbývají (oddíl Proč tento rozsah), a autor ho týž den potvrdil („Líbí se mi cesta 7“). Podklady vzniknou v `docs/podklady/celek-8-ci-zivot-ziju.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 15. 10. 2026 (oddíl Po P6); šest bodů autor 16. 10. nechal na doporučení podkladů |
| P7 | Společný profil Kratéta a Hipparchie | hotovo 16. 10. 2026 (oddíl Po P7); tři body čekají na autora |
| P8 | Cesta 7 „Čí život vlastně žiju?“, kresba Třetí čára a hlas Hipparchie na stránce otázky 1 | hotovo 16. 10. 2026 (oddíl Po P8); čtyři body čekají na autora |
| P10 | Revize celku | hotovo 16. 10. 2026 (oddíl Po P10, záznam `docs/revize/celek-8-2026-10-16.md`); šest bodů autor nechal na doporučení revize |
| Opravy | Zapracování nálezů revize | hotovo 16. 10. 2026 (oddíl Po opravách); autor nechal sedm řádků odpovědí prázdných |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | připraveno, jen na pokyn autora (oddíl Uzavření celku 8) |

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

## Po P7 (16. 10. 2026)

Společný profil je na `/osobnost/krates-a-hipparchia/` (`src/content/osobnosti/krates-a-hipparchia.mdx`, blok `src/content/bloky/krates-otvirac-dveri.yaml`). Autor nechal všech šest řádků odpovědí prázdných, platí doporučení z podkladů (záznam v `docs/rozhodnuti.md` z 16. 10. 2026). Zadání P7 je v `docs/archiv/zadani/celek-8.md`. Celé `npm test` prošlo (530 jednotkových testů a 423 testů v prohlížeči).

**Co stránka má.** Titulek „Kratés a Hipparchia. *Dva lidé, jedna mošna.*“, nadtitulek „Kynici z Théb a Maróneie · společný profil“, dva řádky dat a rytina Beverwijck 1643 s atributy obou (mošna, člunek). Úvod scénou: Kratés rozdává jmění spoluobčanům (verze Antisthena z Rhodu, Dioklés jednou větou), velký citát „Mám to, co jsem se naučil…“, věta o Hipparchii. Kapitoly:

1. **Péra a dým** (Kratés): hravé verše, parodie Homérovy Kréty, citát o Péře, dým jako nadutost; Odkryj „Přepiš to po Kratétovi“ (přísloví nebo heslo z reklamy).
2. **Otvírač dveří** (Kratés): přezdívka, Volba „Co uděláš?“ (dva bratři a otcovo pole, „Představ si“, bez Co udělal), potom Apuleius jako pozdní vyprávění.
3. **Zénón a hrnec polévky** (Kratés): knihkupec, stydlivý Zénón, rozbitý hrnec, citát, hned otázka „Byl to dobrý způsob…? A co kdyby to učitel udělal tobě před celou třídou?“; Zénónova kniha vzpomínek a stoa, odkaz na cestu 5.
4. **Hipparchiina volba**: krátce, bez výhrůžky; Kratétova podmínka nepřímou řečí, plášť, hostiny, Menandros.
5. **Hostina**: Theodóros a jeho chytáky, sofisma jako citát, Odkryj „Kde je chyba?“, „Zkusil ji tedy zahanbit. Hipparchia se nezalekla.“, verš z tragédie a odpověď o čase a vzdělání, otázka „Kdo v té hádce prohrál?“.
6. **Ta filozofka**: „té filozofce“ a tisíce příběhů, spisy ze Sudy, Epiktétovo „žena, která byla druhý Kratés“ jako konec příběhu.

Doba a lidé pro oba, **Tři velké myšlenky** (Etika · Kratés „Co ses naučil, ti nikdo nevezme“ s Aristotelem EN IV, 1; Výchova · Kratés „Pohrdat zvyky neznamená pohrdat lidmi“ s Epiktétovou podmínkou; Politika · Hipparchia „Rozhodnout o sobě znamená rozhodnout o svém čase“ s Aristotelem Politika I, 13 a Platónem jako spojencem napůl), Zkus to žít „Čí byla ta hodina“, Kam dál (Diogenés, cesta 6, Epiktétos, otázka 1).

**Použité citáty:** `dl-vi-86-co-mam` (velký), `dl-vi-85-pera`, `dl-vii-3-zenon`, `dl-vi-97-sofisma`, `dl-vi-98`, `rozpravy-iii-22-76`, `dl-vi-93-vlast`, `etika-1120a-marnotratnik`, `rozpravy-iii-22-19`, `politika-1260a-ctnost`, `ustava-455d-zeny`. Nepoužité a volné pro cestu: `dl-vi-96-zenich` (krok 1; profil jen nepřímou řečí), `dl-vi-86-cenik`, `etika-1120b-stedry` (v profilu jen parafráze), `rozpravy-iii-22-10` a `-50`, `dl-vi-92-oslari`. `dl-vi-98` smí v celku ještě jednou (hlas na otázce 1).

**Co se změnilo mimo profil:**

- Šablona `src/pages/osobnost/[id].astro`: pole `dalsi` (v `content.config.ts`), hlavička dvojice, atributy všech osob pod deskou, sjednocené vstupy (`VstupyOsoby` s `dalsi`, `vstupyOsoby` bere pole osob), `DobaALide`, `MiniOsa` a `MiniMapa` s `dalsi`. U ženy „S kým … žila“ a „Kde žila“.
- `src/lib/adresa-osoby.ts` (`adresaOsoby`) skládá adresu na všech místech: Lidé a směry, přehled cesty (Kam dál dává jeden odkaz na stránku dvou filozofů), stránka otázky s `HlasyOsa`, Mapa a čas (`mapa-vstup-build.ts`).
- `Myslenky`: tři karty, třetí přes obě kolony; titulek „Tři velké myšlenky“ se předává z MDX.
- Data: Kratés a Hipparchia hloubka profil, atributy (`bag`, `shuttle`), `kdo`, `proc`, obraz; Kratés asi 365–285 (OCD), dřív 350–301. Vztahy Diogenés → Kratés a Kratés → Hipparchia z `dl-vi-85`, Kratés → Zénón z `dl-vii-2`. Prameny `ocd-crates`, `arrianos-anabaze-i-9`. Obrázky `krates-hipparchia-beverwijck` a `krates-hipparchia-cats` (výřezy rytin; originály v `~/Pictures/Atlas-originaly/`).
- Citát `rozpravy-iii-22-76` má vnitřní uvozovky ‚ ‘; Kratétovy verše mají místo „u Diogena Laertia VI, 85/86“ (týká se i `dl-vi-86-cenik` v cestě).
- Lidé a směry: Kratés a Hipparchia jsou karty profilů s odkazem; Mapa a čas: karta obou má „Otevřít portrét“ na společný profil; Doba a lidé u Diogena a Zénóna ukazuje Kratéta s novými roky (jména v Době a lidech odkazy nejsou nikde, viz Čeká na autora).
- `ucitel/celek-8.md`: část k profilu.
- Testy: `tests/data/adresa-osoby.test.ts`, společný profil ve `vstupy.test.ts`, `tests/e2e/krates-hipparchia.spec.ts` (hlavička dvojice na 390 a 1440 px v obou režimech včetně první obrazovky telefonu, Doba a lidé, bloky, odkazy z Lidí, Mapy a času a cesty), stránka v `prohlidka.spec.ts`.

**Co si nese P8:**

- **Hlavička profilu se změní.** Cesta 7 a hlas Hipparchie přidají do hlavičky společného profilu tlačítko cesty (pod jménem) a otázky 1 (pod deskou). Na telefonu dnes první odstavec začíná na 721 px při výšce 844; tlačítko cesty (64 px a mezera) ho posune pod spodní lištu a `krates-hipparchia.spec.ts` spadne. P8 musí hlavičku na telefonu znovu změřit a upravit (třeba nižší cestu u dvojice nebo kratší popisek obrazu), ne test.
- Kapitola 04 „Hipparchiina volba“ a Kam dál dostanou odkaz na cestu 7; kapitola je schválně krátká a cesta příběh vypráví celou (s citátem `dl-vi-96-zenich`). Cesta nesmí opakovat scénu z profilu doslova a musí stát i bez něj.
- Vstup cesty 7 je rytina `krates-hipparchia-cats` (výřez je hotový, popisek v `zdroje.yaml`). V `docs/architektura.md` (řádek cesty 7) se má vstupní příběh změnit na „Hipparchia a Kratétova podmínka“.
- Profil Theodórův čin podává jen „Zkusil ji tedy zahanbit“; cesta ho neopakuje. Ceník, dým jako argument a Spor Kratés × Aristotelés patří cestě; profil Péru ukázal jen jako báseň.
- Epiktétův citát III, 22, 50 („hůl a velká ústa“) je volný pro krok 5; profil vzal III, 22, 19.
- Přehled cesty 7 dá „Kratés a Hipparchia: celý příběh“ jako jeden odkaz (hotové). Mince Diogena, Kratéta a Hipparchie v hlavičce cesty vedou na svou stránku přes `adresaOsoby`.
- `ucitel/celek-8.md` doplní část k cestě: Aschův obrácený pokus (smích šestnácti lidí jednomu), čísla studií, Andersenův konec, otázky do hodiny.

**Čeká na autora:**

1. Jestli mají být jména v oddílu Doba a lidé odkazy na stránky lidí (týkalo by se všech profilů; podklady s tím u Kratéta počítaly). Doporučuji ano, ale jako samostatný malý krok, ne v P8.
2. Pointa „Dva lidé, jedna mošna.“ a nadtitulek „Kynici z Théb a Maróneie“ jsou můj návrh.
3. Druhá Kratétova myšlenka má jako protihlas Epiktétovu podmínku („Nejdřív musíš udělat čistým to, co v tobě vládne“), protože zadání u ní námitku nejmenovalo.

## Po P8 (16. 10. 2026)

Cesta 7 „Čí život vlastně žiju?“ je na `/cesta/ci-zivot-vlastne-ziju/` (přehled a osm kroků v `src/content/cesty/ci-zivot-vlastne-ziju*`, bloky `src/content/bloky/cesta7-*.yaml`), kresba Třetí čára v kroku 6 a v dílně, pátý hlas (Hipparchia) na `/otazka/jak-zit/`. Autor nechal všech pět řádků odpovědí prázdných, platí doporučení z podkladů a z oddílu Po P7 (záznam v `docs/rozhodnuti.md` z 16. 10. 2026). Zadání P8 je v `docs/archiv/zadani/celek-8.md`. Celé `npm test` prošlo (551 jednotkových testů a 433 testů v prohlížeči); po posledních úpravách textu kroku 1 a hlasu znovu prošly testy cesty 7, otázek, cest, prohlídky a hlavičky dvojice.

**Co cesta má.** Přehled: „Co nosíš, co chceš a za čím jdeš…“, filozofové Diogenés, Kratés a Hipparchia (mince Kratéta i Hipparchie vedou na společný profil), 30 minut (`slova-cesta.mjs`: 3 427 slov, 29,3 minuty), začátek `cesta7-komu-patri`, mapa Athény kolem roku 328 př. n. l.

1. **Ženich a jeho majetek.** Příběh s rytinou Cats 1637 (popisek: plášť a hůl na zemi, služebné za závěsem): rodiče mají strach a prosí Kratéta, ten se snaží, pak odloží výbavu a mluví citátem `dl-vi-96-zenich`. Volba „Komu patřilo to rozhodnutí?“ (Jí / Rodičům / Kratétovi / Nikomu z nich samotnému), s polem na důvod, bez Co udělal. Výhrůžka nikde.
2. **Podle přírody, ne podle zvyku.** Diogenés a zvyk, myš, „Buď sám sebou?“ (heslo o dva tisíce let mladší, příroda je to, co mají všichni stejné, cvik celý život), Epiktétův stud. Roztřiď „Kdo to po mně chce?“ (Tělo · Druzí · Já), šest neutrálních karet, bez vlastní karty, srovnání „Jak by třídil kynik“.
3. **Tři oboly.** Ceník `dl-vi-86-cenik` s přepočtem měn, Antisthenovo „Mnoho lidí tě chválí“ (`dl-vi-8-chvala`), dým a Péra jen větou. Odkryj „Komu se dnes platí nejvíc…“ (modelové ceníky neosobní, lajky jen jako to, čím se platí).
4. **Svazují mě zvyky?** Krátký úvod a Spor Kratés × Aristotelés: scéna bez setkání, Hipparchiin bratr v Aristotelově škole; Kratés (Théby, ceník, domyšlená odpověď: spoluobčan Diogena), Aristotelés (tvor obce, obec nejsou zdi, ctnost zvykem, pravá ruka).
5. **Jinou nadutostí.** Sókratés Antisthenovi (`dl-vi-8-plast`), Platón Diogenovi (`dl-vi-26-platon`), Epiktétos (`rozpravy-iii-22-50`), „Vzdor ještě není svoboda.“ Změň jednu věc „Je to kynický čin, nebo jiná nadutost?“ s podmínkami Nikdo se nedívá a Hosté to už čekají; oddíl „Co by na to řekli“ (Platón, Epiktétos).
6. **Třetí čára.** Aschův pokus slovy, kresba Třetí čára, Volba „Co řekneš, až na tebe přijde řada?“ (čtyři možnosti včetně čekání na spojence) s vlastním Kam dál na `#co-vyslo`; výsledky (třetina, čtvrtina, proč ustoupili, nezávislý nebyl vzdorovitý, spojenec, Bern 2021), „Pokus neříká, kdo je slabý. Říká, jak těžké je být jediný.“
7. **Kdo je na tvé straně.** Zastánci všech čtyř odpovědí z kroku 1 (Hipparchia a Epiktétos `rozpravy-i-2-11`; Aristotelés; Platón a rodiče; Aristotelés podruhé), všech tří ze Změň jednu věc (Epiktétos; Platón a Sókratés; Epiktétos) a všech čtyř z kroku 6 (Asch a Epiktétos; Asch a Aristotelés; Epiktétos `rozpravy-i-2-32`; Asch). Odkaz na otázku 1.
8. **Nejdřív ty.** Krátké shrnutí, karta Zkus to žít „Nejdřív ty“ (v duchu, nikomu nic neukazovat), Na začátku × Teď, pravidlo „Podle čeho poznáš, že je rozhodnutí opravdu tvoje?“.

Návrat `cesta7-navrat` „Císařovy nové šaty“: student jde v průvodu kousek za komořími, i s koncem, kdy císař ví a jde dál; bez pramene a čísel.

**Kresba Třetí čára** (`src/lib/treti-cara.ts`, `TretiCara.svelte`, `tests/data/treti-cara.test.ts`, `tests/e2e/treti-cara.spec.ts`): karta se vzorem a karta se třemi čarami (kolo 1 z Asche 1956), osm siluet, student předposlední s otazníkem, bubliny přicházejí po 0,8 s, pohled Se spojencem změní jedinou odpověď. Jde zastavit, při omezeném pohybu svítí všechno. Zapsaná v dílně (jedenáct kreseb) a v `docs/design.md`.

**Hlas Hipparchie** na otázce 1: „Než začneš počítat, zeptej se, kdo určil, kam má tvůj čas patřit: ty, nebo to, co se od tebe čeká. Vzít můžeš sklad i tábor, jen ať o tom létě rozhodneš ty.“ Myšlenka z DL VI, 96–98, citát `dl-vi-98` (v celku podruhé a naposledy). Stránka řadí hlasy podle narození: Diogenés, Aristotelés, Epikúros, Hipparchia, Seneca.

**Co se změnilo mimo cestu:**

- Společný profil: věta s odkazem na cestu 7 na konci kapitoly 04, cesta 7 jako první v Kam dál. Hlavička má cestu i otázku; na telefonu stojí vedle sebe nad deskou (titulek s `display: contents`, `grid-auto-flow: row dense`), deska 2 : 1, titulek 34 px, skrytá délka cesty (`.vstup__meta` ve `VstupyOsoby.astro`) a šipky. Začátek prvního odstavce je na 732 px, lišta na 772 (dřív by byl na 883).
- Diogenés má v hlavičce cesty 6 a 7, v Lidech dvě karty cest; otázka 1 má tři cesty (4, 6, 7); Domů po hotové cestě 1 „zbývá 7 cest“.
- `docs/architektura.md`: vstup cesty 7 je „Hipparchia a Kratétova podmínka“. `ucitel/celek-8.md`: část k cestě (co je naše, Aschova čísla a odkud jsou, obrácený pokus jen jako materiál, konec pohádky, otázky do hodiny).
- `docs/pouceni.md`: zkratka `animation` bez jména se při sestavení zminifikuje na `none`.
- Testy: nové `cesta7.spec.ts` a `treti-cara.spec.ts`; upravené `otazka.spec.ts` (pět hlasů, hlavičky Diogena a dvojice, karty v Lidech, cesty u otázky 1), `ctverec.spec.ts` (jedenáct kreseb), `domu.spec.ts`.
- Snímky pro autora: `Claude outputs/p8/` (kroky cesty s odpověďmi i bez, kresba s pohybem i bez, otázka 1, hlavička profilu).

**Čeká na autora:**

1. Spojencem odpovědi „Kratétovi“ v kroku 7 je Platón (v Ústavě vládnou ti, kdo nejvíc vědí). Podklady pro tuhle možnost nabízely jen Kratéta samého; Platóna jsem přidal kvůli pravidlu, že spojenec je jiný myslitel než kynik. Je to obecný výklad Ústavy, ne místo z podkladů (bod v `k-overeni.md`).
2. Detail „čas u stavu dala vzdělání“: citát je v celku dvakrát, jak má být, ale tentýž obraz nese i atribut „Proč člunek?“ v hlavičce profilu. Doporučuji při revizi atribut přepsat (bod v `k-overeni.md`).
3. Hlavička dvojice na telefonu: cesta a otázka jsou dvě menší dlaždice vedle sebe, bez délky cesty. Kdyby se ti víc líbila cesta přes celou šířku, musela by deska klesnout ještě níž, nebo by otázka odešla pod popisek obrazu a odstavec by spadl pod lištu.
4. Tři body z Po P7 zůstávají (odkazy v Době a lidech, pointa titulku, protihlas druhé myšlenky).

## Po P10 (16. 10. 2026)

Záznam revize je v `docs/revize/celek-8-2026-10-16.md`. Zadání P10 je v `docs/archiv/zadani/celek-8.md`; autor ho poslal se šesti prázdnými řádky odpovědí, revize proto ke všem dává doporučení.

**Verdikt: po opravách.** Blokující nález není. Nikde rada odejít, poslechnout ani vzdorovat, nikde „ovce“, žádné pole na psaní o rodině, víře, vztahu, identitě, penězích ani profilu na sítích; výhrůžka jen v listu pro učitele, Theodórův čin jen „zkusil ji zahanbit“. Aschova čísla, ceník, Aristotelés i Epiktétos sedí na prameny.

**Nálezy** (čtyři důležité, pět drobných; hotová znění jsou v záznamu):

| # | Váha | Nález | Kde |
| --- | --- | --- | --- |
| 1 | důležité | „Kdo dělá opak toho, co se čeká, řídí se pořád tím, co se čeká“ čte student odlišující se od rodiny jako „jsi jen pozér“; „plyne totéž“ je náš závěr | krok 5 |
| 2 | důležité | „Čas je tvůj, když ho dáváš, protože chceš“: pečující student čte, že jeho čas není jeho | profil (myšlenka 3, Zkus to žít), hlas Hipparchie |
| 3 | důležité | Rodiče „svěřili rozhodnutí“ Kratétovi a „jeho přece poslechne“: pramen říká jen, že ho prosili, ať jí to rozmluví | kroky 1, 7, 8, `cesta7-komu-patri.yaml`, list pro učitele |
| 4 | důležité | Kratés ve Sporu nemá odpověď na „dobrými nás dělá zvyk“, ačkoli krok 2 říká, že se kynici cvičili | `cesta7-zvyky-spor.yaml` |
| 5 | drobné | Atribut „Proč člunek?“ prozrazuje pointu hostiny; obraz čtyřikrát | `lide.yaml`, myšlenka 3 |
| 6 | drobné | Zénónova stydlivost a Epiktétův stud pod jedním slovem, Zénón v cestě neuvedený | krok 5 |
| 7 | drobné | Platón jako spojenec odpovědi „Kratétovi“ stojí na obecném výkladu Ústavy; Sókratés z Kritóna 47b–d sedí přesně | krok 7, `cesta7.spec.ts`, list pro učitele |
| 8 | drobné | Možnost „chce, aby ho viděli“ v podmínce „Nikdo se nedívá“ | `cesta7-nikdo-se-nediva.yaml` |
| 9 | drobné | Spojenec u Asche nebyl kamarád: přidat „Stačil k tomu kdokoli, kdo nahlas řekl, co vidí.“ | krok 6 |

**Co revize opravila rovnou** (commit `55e10ba`): myš v kroku 2 jednou větou; třetí výskyty Péry, spoluobčana Diogena a Epiktétova III, 22, 19 a 50 pryč (kroky 5 a 7, myšlenka 2 profilu); „máš na své straně čtvrtinu“ v kroku 7; věty v kroku 8 a v kartě Nejdřív ty; Diogenovo Kam dál na cestu 7 a společný profil a „takovou váhu jako přírodě“ v jeho úvodu (DL VI, 71). Spojenec na čtvrté židli je Aschův (1951, s. 231: „always seated in the fourth position“), délky čar jsou z prvního kritického kola (1956, Tabulka 1, Trial 1): komentáře kresby, `docs/design.md`, list pro učitele, podklady.

**Doporučení k otevřeným bodům:** Platóna v kroku 7 nahradit Sókratem z Kritóna (nález 7); atribut přepsat (nález 5); hlavičku dvojice na telefonu nechat (odstavec na 732 px, lišta 772; dlaždice stejně vysoké na 390, 700, 899 i 1440 px); jména v Době a lidech jako odkazy ano, ale samostatným krokem po sloučení celku 8 (dvanáct profilů); pointu a nadtitulek nechat; kresbu nechat; protihlas druhé Kratétovy myšlenky nechat. Mimo celek: Diogenés, Epikúros a Platón mají na telefonu dvě cesty pod sebou (deska od 546 do 595 px); kompaktní dlaždice z hlavičky dvojice patří do příští větve rozhraní.

**Ověřeno navíc:** Xenofón, Oikonomikos VII, 6, 21–22 a 36 dokládá větu o tkaní v kapitole Hostina i v hlasu (bod z P7 a P8 v `k-overeni.md`); vztah Antisthenés → Diogenés je v datech.

**Kontrola.** `npm test` před opravami prošel celý (551 jednotkových testů a 433 v prohlížeči). Po drobných opravách prošly `cesta7`, `krates-hipparchia`, `otazka`, `treti-cara` a `prohlidka` (143 testů) a pak znovu celé `npm test` (551 a 433, vše prošlo, i „cesta: průchod, Kam dál z bloku…“). `kontrola-fokus.mjs` bez nálezu na všech stránkách celku (390, 700, 899 a 1440 px). Čas cesty 3 407 slov, 29,2 minuty, štítek 30 sedí. Snímky a pomůcky revize jsou v `Claude outputs/revize-celek-8/`.

## Po opravách (16. 10. 2026)

Zadání oprav je v `docs/archiv/zadani/celek-8.md`. Autor ho poslal se sedmi prázdnými řádky odpovědí: platí všech devět nálezů revize v hotových zněních a všechna doporučení. Rozhodnutí jsou v `docs/rozhodnuti.md`, změny vět s „dřív a teď“ v `docs/podklady/k-overeni.md` (Po opravách celku 8).

**Co se změnilo** (commit `e231e32`):

| # | Nález | Co je teď |
| --- | --- | --- |
| 1 | Krok 5, „kdo dělá opak…“ | Výtky míří na pohrdání, které potřebuje diváky; „Kdo dělá opak jen proto, aby se vymezil…“ |
| 2 | Čas „protože chceš“ | „když víš, komu a proč ho dáváš“ v myšlence 3, Zkus to žít („klidně i kratší chvíli“) a hlasu Hipparchie („nebo jen to, co se od tebe čeká“, „klidně i kvůli někomu jinému“) |
| 3 | Rodiče „svěřili rozhodnutí“ | Jen „požádali ho, ať jí to rozmluví“: kroky 1, 7, 8, Volba, list pro učitele |
| 4 | Spor bez odpovědi na zvyk | Scéna zmíní zvyk, Kratés odpovídá cvikem atleta a flétnisty; zdroj `dl-vi-69` (pramen DL VI, 69–75; `dl-vi-71` je v datech citát), komentář YAML |
| 5 | Atribut „Proč člunek?“ | „Od žen se čekalo, že stráví čas u stavu. Hipparchia si vybrala filozofii.“; myšlenka 3 bez věty o stavu |
| 6 | Zénónův stud | Hrnec polévky a dva druhy studu |
| 7 | Platón v kroku 7 | Sókratés z Kritóna 47b–d, i v listu pro učitele |
| 8 | Možnost bez diváků | „potřebuje dokázat, že je nad věcí“ |
| 9 | Spojenec není kamarád | „Stačil k tomu kdokoli, kdo nahlas řekl, co vidí.“ |

**Kde jsem se od znění revize odchýlil:** atribut je kratší než návrh „Patřil ke stavu, u kterého se od žen čekalo, že stráví čas.“: ten na 390 px posunul první odstavec o řádek pod lištu (752 px, test hlídá 742). Teď začíná na 732 px jako před opravou. V kroku 7 stojí „o pomoc požádali právě Kratéta“ místo „právě jeho“ (zájmeno by za větou o Sókratovi padlo na něj) a ve Volbě „Všimni si ale, co udělal.“ místo „co s ním udělal“ („s ním“ už nemá rozhodnutí, ke kterému by se vztáhlo).

**Čtení očima dvou studentů.** *Student, který se od rodiny liší tím, kým je:* krok 5 teď soudí vymezování kvůli divákům, ne odlišnost; „Vzdor ještě není svoboda“ se čte jako věta o vzdoru, ne o něm. Změň jednu věc hodnotí čin a důvod, ne povahu. *Student, který pečuje o sourozence:* myšlenka 3 mu jeho čas nebere (ví, komu a proč ho dává), karta Zkus to žít mu dovolí kratší chvíli místo hodiny a hlas Hipparchie připouští léto „klidně i kvůli někomu jinému“. Nový nález z toho není.

**Kontrola.** Celé `npm test` po opravách prošlo napoprvé: 551 jednotkových testů a 433 v prohlížeči, i „cesta: průchod, Kam dál z bloku…“. Testy hlídají nová znění (`cesta7`: kroky 4, 5, 6 a 7; `krates-hipparchia`: atribut). Čas cesty (`slova-cesta.mjs`): 3 477 slov, 23,2 minuty čtení a 6,5 ovládání = 29,7 minuty; štítek 30 sedí. Hlavička dvojice na 390, 700, 899 a 1440 px v obou režimech (`Claude outputs/opravy-celek-8/snimky/`): na 390 px deska 343–664, odstavec od 732 px, lišta od 772; oba atributy celé nad lištou.

## Uzavření celku 8

Čeká na pokyn autora. Až řekne „vše schvaluji“, postup je stejný jako u celku 7:

1. Ve větvi `celek-8` zapsat schválení do tabulky stavu a do `docs/rozhodnuti.md`, plán větve přesunout do `docs/archiv/plany/`, z projektu Claude ho odebrat a v `docs/plan.md` označit celek 8 jako uzavřený (a aktualizovat ho i v projektu).
2. `git switch main`, `git merge --no-ff celek-8`, celé `npm test` na hlavní větvi.
3. `git push origin main` (a případně smazat větev `celek-8`).
4. Další krok podle autora: jména v Době a lidech jako odkazy (malý samostatný krok), nebo medailonky (P9), nebo další celek.
