# Plán větve celek-8: „Čí život vlastně žiju?“

Celek 8: společný profil Kratéta a Hipparchie, cesta 7 „Čí život vlastně žiju?“ (období 2, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1. Rozsah navrhl Claude 15. 10. 2026 ze tří možností, které z antiky zbývají (oddíl Proč tento rozsah), a autor ho týž den potvrdil („Líbí se mi cesta 7“). Podklady vzniknou v `docs/podklady/celek-8-ci-zivot-ziju.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 15. 10. 2026 (oddíl Po P6); šest bodů autor 16. 10. nechal na doporučení podkladů |
| P7 | Společný profil Kratéta a Hipparchie | hotovo 16. 10. 2026 (oddíl Po P7); tři body čekají na autora |
| P8 | Cesta 7 „Čí život vlastně žiju?“, kresba Třetí čára a hlas Hipparchie na stránce otázky 1 | čeká; zadání je níže |
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

## Zadání P8: Cesta 7 „Čí život vlastně žiju?“, kresba Třetí čára a hlas Hipparchie

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Cesta má osm kroků se Sporem, Změň jednu věc, novým případem ze studie a zastánci všech Voleb, k tomu nová kresba s pohybem a pátý hlas na hotové stránce otázky; citlivá místa jsou tu hustší než v profilu (rodina, skupina, peníze). Kdo chce šetřit, nechá kresbu a úpravy testů na Sonnetu 5.5 · high a texty cesty na Opus.

Pět řádků na začátku je místo pro tvé odpovědi. Prázdný řádek znamená doporučení z podkladů a z oddílu Po P7.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-8. Společný profil Kratéta a Hipparchie (P7) je hotový.

Vstup cesty (Hipparchiina volba s rytinou Cats 1637, rodiče nejsou záporné postavy): 
Spor Kratés × Aristotelés „Svazují mě zvyky, nebo mě dělají člověkem?“: 
Nový případ (Aschův pokus se spojencem) a Návrat (Císařovy nové šaty, císař jde dál): 
Kresba Třetí čára (odpovědi skupiny jedna po druhé, přepínač se spojencem): 
Hlas Hipparchie na stránce otázky 1 (čas a kdo o něm rozhoduje): 

Kde řádek zůstal prázdný, platí doporučení z podkladů (docs/podklady/celek-8-ci-zivot-ziju.md) a z oddílu „Po P7“ v docs/plany/celek-8.md.

Postav cestu 7 podle skillu atlas-cesta, kresbu podle atlas-komponenta a hlas na stránce otázky podle atlas-cesta (oddíl o stránce velké otázky). Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md;
- v docs/plany/celek-8.md tabulku stavu a oddíl „Po P7“;
- z podkladů: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), Nejsilnější příběhy 1, 4, 6 a 9, celý oddíl Tvrzení: cesta 7 (od Podle přírody po Návrh kroků), Velká otázka 1: doplnit hlas Hipparchie, z Citlivých míst Pravidla pro celý celek, Vstup, jádro, nový případ a Návrat očima pěti studentů a Co patří učiteli, tabulku Citáty a Obrázky (Cats);
- ze společného profilu (src/content/osobnosti/krates-a-hipparchia.mdx) jen kapitolu 04 a Kam dál, ať cesta neopakuje scénu doslova; z profilu Diogena a z cesty 6 (krok 4) nic nepřebírej, jen na ně odkaž;
- jako vzor cesty src/content/cesty/jsem-porad-tentyz-kdyz-se-menim.mdx a dva její kroky (vstup a krok se zastánci); jako vzor kresby src/components/ostrovy/Lod.svelte nebo DvePulky.svelte na rámu Kresba.svelte; stránku otázky src/content/otazky/jak-zit.mdx.

Co udělat:

1. Cesta 7 v src/content/cesty/ci-zivot-vlastne-ziju.mdx a kroky podle Návrhu kroků v podkladech: vstup Hipparchiina volba (Volba „Komu patří to rozhodnutí?“ jako začátek cesty, rytina krates-hipparchia-cats), podle přírody, ne podle zvyku (Roztřiď bez vlastní karty), tři oboly (ceník a dým), Spor Kratés × Aristotelés, jinou nadutostí (Změň jednu věc „Nikdo se nedívá“, Epiktétos III, 22, 50), třetí čára (kresba a Volba před výsledky), kdo je na tvé straně (zastánci odpovědí ze všech Voleb, spojenec je vždy jiný myslitel než kynik), závěr s Na začátku × Teď a Zkus to žít „Nejdřív ty“. Nový případ a zastánci jsou dva kroky. Návrat Císařovy nové šaty. Čas spočítej skriptem scripts/slova-cesta.mjs. Filozofové cesty: Diogenés, Kratés a Hipparchia.
2. Kresba s pohybem „Třetí čára“ v kroku 6 na rámu Kresba.svelte: odpovědi skupiny přicházejí jedna po druhé, přepínač se spojencem; texty a geometrie v src/lib/, s jednotkovým testem; pramen je Aschovo uspořádání a karta z kola 1, siluety jsou náš obraz. Zapiš ji do dílny (Kresby) a do docs/design.md.
3. Hlas Hipparchie jako pátý hlas na stránce otázky 1: odpověď na úvodní případ nejvýš dvě věty, myšlenka z DL VI, 96–98, citát dl-vi-98 (v celku podruhé a naposledy). Neříkej studentovi, že má mít čas „pro sebe“; mluv o tom, kdo o čase rozhoduje. Uprav seznamy v testech (otazka.spec.ts a hlavičky profilů) podle skutečných hlaviček v dist/.
4. Společný profil: odkaz na cestu 7 v kapitole 04 a v Kam dál. Hlavička profilu dostane tlačítko cesty a otázky: na telefonu znovu změř, že deska, oba atributy a začátek prvního odstavce zůstanou na první obrazovce (tests/e2e/krates-hipparchia.spec.ts to hlídá); uprav rozvržení, ne test.
5. V docs/architektura.md změň v katalogu cest vstupní příběh cesty 7 na „Hipparchia a Kratétova podmínka“. Do ucitel/celek-8.md doplň část k cestě: Aschův obrácený pokus (smích šestnácti lidí jednomu) jen jako materiál, pokud třída chce; čísla studií a odkud jsou (Asch 1951 a 1956, Franzen a Mader 2023, Bond a Smith přes ně); konec Andersenovy pohádky; otázky do hodiny.

Citlivá místa podle pravidel z podkladů: cesta se ptá, podle čeho poznám, že je rozhodnutí moje, ne jestli má student odejít, poslechnout, nebo vzdorovat; žádné pole na psaní o rodině, víře, vztahu, identitě, penězích ani profilu na sítích; rebelie není ctnost; péče o druhé není cizí život; přizpůsobivé lidi nenazývej ovcemi a vyloučení nepopisuj jako normální.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně); snímky kroků cesty s odpověďmi i bez (scripts/snimky-cesta.mjs), kresby (scripts/snimky-prvek.mjs, s pohybem i bez), stránky otázky 1 a hlavičky profilu na 390 a 1440 px ve světlém i tmavém režimu; fokus z klávesnice (scripts/kontrola-fokus.mjs) na cestě, otázce 1 a profilu; vstupy v hlavičkách profilů Diogena a dvojice; karty v Lidech a počet cest na Domů. Po změnách restartuj npm run dev.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-8.md oddíl „Po P8“, připrav tam zadání P10 (revize celku 8) s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-8.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co je hotové, nad čím jsi váhal a co potřebuje moje rozhodnutí.
```
