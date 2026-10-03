# Plán větve rozhrani-v2: jasnější začátek, orientace a návrat k vlastnímu pravidlu

Zadání schválil autor 2. 10. 2026; spustí se po celku 3. Větev mimo celky: nemění obsah cest ani profilů, upravuje rozhraní a interakce nad tím, co je hotové (Domů, profil, Mapa a čas, blok Spor, závěr cest, deník). Vychází ze vzorového zadání autora, přepsaného podle `docs/design.md`, `docs/plan.md` a skutečného stavu hlavní větve (commit `0f145eb`, celek 2).

| Krok | Co | Stav |
| --- | --- | --- |
| R1 | Orientace: Domů, obsah profilu, ovládání mapy | po sloučení celku 3 a odeslání hlavní větve na GitHub, zadání níže |
| R2 | Argument a návrat: reflexe ve Sporu, Na začátku × Teď, blok Návrat | po schválení R1, zadání níže |
| P10 | Revize větve skillem `atlas-revize` (průchod jako student) | po R2 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po revizi |

## Rozhodl autor (2. 10. 2026)

- **Pořadí:** větev se založí až po uzavření celku 3, tedy až bude hlavní větev s celkem 3 na GitHubu. Je to bod, ke kterému se dá vrátit, kdyby po změnách něco nefungovalo. Úpravy závěru cest a Sporu se tak rovnou vztahují i na cestu 5.
- **Rod v textech rozhraní:** žádné lomené tvary („odpověděl/a“), ruší. V nových textech má přednost formulace, která rod neřeší („Co na něj odpovíš?“, „Upravím ho“), když zní přirozeně; hotové texty se kvůli tomu nepřepisují.
- **Tlačítko „Začít první cestu“** vede rovnou na krok 1 cesty, ne na její přehled.
- **Návrat se nabízí jen v deníku.** Upozornění na Domů, se kterým počítal `docs/plan.md`, se nedělá, aby Domů měl jeden jasný začátek.

## Co je dnes v kódu (ověřeno na hlavní větvi)

- **Domů** (`src/pages/index.astro`): nadpis má `t-display-1` (148 / 76 px). O začátek se hlásí několik prvků: hlavní tlačítko „Začni se Sókratem“ (vede na profil), vedlejší „Mapa a čas“, ostrov Pokračuj, pod úvodem karta cesty „Začni cestou“ s vlastním tlačítkem „Vydat se na cestu“ a dole „Příběh na začátek“.
- **Profil** (`src/pages/osobnost/[id].astro`): `nav.kapitoly` vypisuje jen kapitoly z frontmatteru a stojí jednou pod hlavičkou. Další oddíly kotvy mají (`#doba-a-lide`, `#myslenky`, `#zkus-to-zit`, `#kam-dal`), Prameny (`<details>`) kotvu nemají. Široké oddíly jdou přes celou šířku stránky, takže obsah v levém okraji by je překrýval.
- **Mapa** (`src/components/mapa/`): „Stín odkazu“ je zaškrtávací pole bez vysvětlení (`Mapa.svelte`). Legenda vztahů není; typy v datech jsou `ucitel`, `znali-se`, `vliv-textem`, `polemika` a příznak `tradovany` (v kartě „vypráví se“), čáry v řece plná, tečkovaná, čárkovaná, vlnovka. Připravované období pozná student v pásu období jen podle `title` po najetí myší (`PasObdobi.svelte`).
- **Spor** (`Spor.svelte`, `zpetnaSporu` v `src/lib/bloky.ts`): před konečnou polohou nepovinné „Co tě posunulo, nebo co tě udrželo?“. Zpětná vazba se už dnes ptá „Který argument druhé strany šel nejhůř odbýt?“; nová reflexe na ni musí navázat, ne ptát se podruhé. Argumenty jsou v YAML jako prostý seznam bez id.
- **Závěr cest**: počáteční odpověď se ukládá v kroku 2 (cesta 1: Volba `cesta1-jak-zjistit`; cesta 6: Roztřiď `cesta6-tri-kose`), pravidlo v kroku 7 (`cesta1-moje-pravidlo`, `cesta6-moje-pravidlo`, Moje stanovisko s `rozbalene`). Krok 7 na začátek odkazuje jen větou („Vzpomeň si na svůj tah v kroku 2“). Vzor „Na začátku / Teď“ už existuje na stránce velké otázky (`ZmenilSe.svelte`).
- **Deník** (`src/lib/denik.ts`, `Denik.svelte`): u cesty se ukládá jen čas naposledy otevřeného kroku (`cesty[slug].kdy`), ne čas dokončení. Blok Návrat je v `docs/plan.md` (Mechanismy učení) plánovaný, ale neexistuje.
- **Jazyk rozhraní**: všude tykání v mužském rodě bez lomených tvarů („Zůstal jsi“, „Co bys udělal?“).

## R1: Orientace (Domů, obsah profilu, ovládání mapy)

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high (xhigh při zaseknutí).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Nejdřív ověř, že je celek 3 sloučený v hlavní větvi a hlavní větev je na GitHubu (git status, git log origin/main). Když není, nic nezakládej a řekni mi to. Pak založ větev rozhrani-v2 z hlavní větve.

Přečti CLAUDE.md, docs/styl.md, docs/plany/rozhrani-v2.md (oddíl Co je dnes v kódu), v docs/design.md oddíly Principy, Typografie, Mezery, Navigace a rozvržení, Komponenty, Mapa a čas a Přístupnost, v docs/plan.md řádek Domů v tabulce typů stránek a oddíl Mapa a čas pro celé dějiny, a nález o místě, kde student opouští profil, v docs/revize/celek-2-2026-10-02.md. Postupuj podle skillu atlas-komponenta.

Jde o tři úpravy rozhraní. Není to redesign: drž tokeny, typografii, barvy období, ornamenty a hotové komponenty. Texty cest a profilů, data osob a vztahů neměň. Žádný nový úvodní ani vysvětlující text o tom, jak atlas funguje.

1. Domů: jeden jasný začátek (src/pages/index.astro)
- Hlavní tlačítko „Začít první cestu“ vede rovnou na krok 1 cesty „Kdy mám dobrý důvod věřit?“. U něj údaj „Cesta 1 · asi N minut · K kroků“ z dat cesty, ne napsaný ručně.
- Vedlejší textový odkaz „Poznat Sókrata“ na jeho profil. Tlačítko „Mapa a čas“ z úvodu pryč: mapa zůstává v hlavičce, ve spodní liště a ve třech vstupech.
- Dnes spolu soupeří tlačítko „Začni se Sókratem“, karta cesty „Začni cestou“ a „Příběh na začátek“. Navrhni, co zmizí a co se spojí, aby na stránce byla jedna výzva k začátku. Ostrov Pokračuj zůstává, ale nesmí vypadat jako druhé hlavní tlačítko. Navrhni taky, co hlavní tlačítko říká studentovi, který má cestu 1 rozpracovanou nebo hotovou, a to bez probliknutí při načtení.
- Nadpis „Velké otázky mají dlouhé dějiny.“ zmenši z t-display-1 na existující token: výchozí je t-h1 (64 / 44 px), t-display-2 jen když se s ním vejde všechno níže. Uber svislé mezery úvodu. Nové velikosti písma nezaváděj.
- Na 1280 × 720 a 390 × 844 musí být bez posouvání celý vidět nadpis, perex i hlavní tlačítko (na telefonu počítej s horní a spodní lištou) a pod nimi kousek dalšího obsahu. Přidej na to test v prohlížeči.

2. Profil: obsah celé stránky a návrat ke čtení (src/pages/osobnost/[id].astro)
- Obsah dnes vypisuje jen kapitoly. Rozšiř ho o další oddíly, které na stránce opravdu jsou (Doba a lidé, Velké myšlenky, Zkus to žít, Kam dál, Prameny). Názvy ber ze stránky, ne ze seznamu v kódu; oddíl, který profil nemá, v obsahu není. Prameny dostanou kotvu.
- Notebook: nenápadný obsah, který je po ruce i při čtení. Čtenářský sloupec (680 px) se nesmí zúžit ani posunout a obsah nesmí překrývat široké oddíly (Doba a lidé, Velké myšlenky, Zkus to žít, Kam dál jdou přes celou šířku). Když to čistě nejde, použij i na notebooku kompaktní podobu z telefonu.
- Telefon: kompaktní rozbalovací obsah. Nesmí zakrývat text, spodní lištu ani prvek s fokusem; skok na kotvu nesmí skončit pod lištou (scroll-padding už v global.css je, doplň, co chybí).
- Právě čtený oddíl je zvýrazněný (aria-current), a to nejen barvou.
- „Pokračovat ve čtení“: nenápadný odkaz nahoře na profilu, když se student vrátí a naposledy četl jiný než první oddíl. Ukládej jen kotvu oddílu u adresy profilu, přes src/lib/denik.ts (deník zůstává verze 1, nové pole je nepovinné a je v exportu), ne při každém posunu, ale při změně oddílu. Stránka se sama nikdy neposune.
- Bez JavaScriptu zůstává obsah obyčejným seznamem odkazů. Platí pro všechny profily a portréty.

3. Mapa a čas: srozumitelnější ovládání (src/components/mapa/)
- „Stín odkazu“: krátké vysvětlení (jedna až dvě věty podle toho, co dělá stinOdkazu v src/lib/cas-mapy.ts) dostupné klepnutím i klávesnicí, ne jen po najetí myší. Zavírá se klávesou Esc a nezakrývá přepínač.
- Kompaktní legenda vztahů pro čtyři typy z dat (učitel a žák, osobně se znali, vliv přes texty, polemika) a pro tradovaný vztah. Pojmenování musí sedět s kartou člověka a s CLAUDE.md; vzorek čáry a text, ne jen barva. Žádné nové typy ani vztahy.
- Výběr člověka dál zvýrazní jeho vztahy a potlačí ostatní: chování neměň, jen ho pojisti testem.
- Telefon: v pásu období musí být rozdíl mezi otevřeným a připravovaným obdobím vidět bez najetí myší a nejen z barvy. Zkontroluj čitelnost drobných popisků (velikost podle tokenu popisek, kontrast AA v obou režimech).
- Rozvržení z docs/design.md musí dál platit: na 1440 × 900 a 1280 × 800 mapa, posuvník i řeka bez posouvání stránky.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí). Nové testy: ohyb na Domů, obsah profilu (zvýrazněný oddíl, „Pokračovat ve čtení“ po obnovení stránky, žádný samovolný posun), vysvětlení stínu a legenda klávesnicí. Všechno si prohlédni na 390 a 1440 px ve světlém i tmavém režimu a projdi jen klávesnicí. Změny zapiš do docs/design.md (Navigace a rozvržení, Komponenty, Mapa a čas), zásadní volby do docs/rozhodnuti.md a stav do docs/plany/rozhrani-v2.md.

Nejdřív mi v pár bodech napiš: co na Domů zůstane, co zmizí a co se spojí a jak se zachová tlačítko u vracejícího se studenta; jak bude obsah profilu vypadat na notebooku a na telefonu a kde bude „Pokračovat ve čtení“; kam dáš legendu a vysvětlení stínu na notebooku a na telefonu a jejich znění. Počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích (Domů, profil, mapa) a nic neposílej na GitHub. Na konci pošli snímky všech tří míst v obou šířkách a režimech, výsledek testů a seznam toho, co se liší od docs/design.md nebo zůstalo na později.
```

## R2: Argument a návrat (reflexe ve Sporu, Na začátku × Teď, blok Návrat)

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high (xhigh při zaseknutí).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi rozhrani-v2; krok R1 je v ní hotový a schválený.

Přečti CLAUDE.md, docs/styl.md, docs/plany/rozhrani-v2.md (oddíl Co je dnes v kódu a stav po R1), v docs/design.md oddíly Bloky (hlavně Jak blok vložit do MDX, Co se ukládá, Spor, Společné pro všechny bloky), Cesta a Velká otázka (Změnil se?), v docs/plan.md oddíly Pedagogické pilíře a Mechanismy učení (řádky Spor, Návrat, Moje stanovisko a Motivace bez manipulace), src/lib/denik.ts, Spor.svelte, ZmenilSe.svelte, MojeStanovisko.svelte, Denik.svelte a první dva a poslední krok všech hotových cest. Postupuj podle skillu atlas-komponenta; texty nových případů piš podle skillu atlas-cesta.

Tři úpravy mají studentovi pomoct rozvíjet vlastní argument. Všechny jsou dobrovolné a žádná nesmí zpomalit hlavní průchod. Nic se neboduje ani nevyhodnocuje, atlas nepředstírá, že rozumí volnému textu, a nikde nečeká změnu názoru: nechat si svůj postoj po zvážení námitek je stejně dobrý výsledek. Znění drž podle hotových bloků: tykání, žádné lomené tvary. V nových textech dej přednost formulaci, která rod neřeší („Co na něj odpovíš?“, „Upravím ho“), když zní přirozeně; hotové texty kvůli tomu nepřepisuj. Jiné texty cest a profilů neměň.

1. Spor: nejsilnější argument druhé strany (Spor.svelte, src/lib/bloky.ts)
- Po zapsání konečné polohy nabídni rozbalovací nepovinnou reflexi: „Který argument druhé strany byl nejsilnější? Co na něj odpovíš?“ Student vybere jeden z argumentů, které už ve Sporu četl, nebo „Jiný argument“ s vlastním textem, a připíše krátkou odpověď.
- Druhá strana je ta, ke které se student nakonec nepřiklonil. Kdo skončil uprostřed, vybírá z argumentů obou stran.
- Zpětná vazba se dnes ptá skoro na totéž (zpetnaSporu). Uprav ji tak, aby k reflexi vedla a otázka nezazněla dvakrát. Dosavadní pole „Co tě posunulo, nebo co tě udrželo?“ zůstává.
- Reflexe je zavřená, dokud ji student neotevře; „Další krok“ je vidět i bez ní. „Začít znovu“ smaže i reflexi.
- Ukládání: do stavu bloku a do téhož zápisu v deníku (další věta za „Co mě posunulo“). Starý uložený stav bez reflexe musí dál fungovat. Argumenty nemají v YAML id: zajisti, aby uložená reflexe neukázala jiný argument, když se pořadí nebo text v YAML později změní.
- Platí pro všechny Spory (v cestách, v profilu Sókrata i v dílně), bez zásahu do jejich YAML. Strana se může jmenovat po směru („kynici“): každou složenou větu přečti se všemi stranami, které v atlasu jsou.

2. Závěr cesty: Na začátku × Teď (poslední krok každé hotové cesty)
- V posledním kroku ukaž vedle sebe, co student opravdu uložil na začátku cesty, a jeho závěrečné pravidlo. Označení „Na začátku“ a „Teď“, vzor rozvržení ze ZmenilSe.svelte: na telefonu pod sebou, od 700 px vedle sebe.
- Počáteční odpověď už v deníku je: u cesty 1 tah z kroku 2 (cesta1-jak-zjistit), u cesty 6 koše z kroku 2 (cesta6-tri-kose); u cesty 5 ji najdi sám (první vlastní pokus studenta). Čti ji z deníku, nic neukládej podruhé. Který blok je začátkem cesty, zapiš do dat cesty (jedno pole ve frontmatteru přehledu, hlídané při sestavení), ne do kódu, ať další cesta přidá jen jeden řádek.
- „Teď“ je pravidlo z Mého stanoviska v tomtéž kroku a mění se, jak ho student ukládá.
- Pod srovnáním nepovinná otázka „Co se změnilo, nebo proč si myslíš totéž?“, uložená jako vlastní zápis.
- Když počáteční odpověď chybí (student krok přeskočil nebo ji smazal), panel se neukáže vůbec: žádné „Bez odpovědi“, žádný prázdný rámeček, nic domyšleného. Závěr funguje jako dnes.
- Zápis z Roztřiď je dlouhý (tři koše s kartami): ověř, že se na telefonu čte.
- Věty v posledním kroku, které na začátek odkazují („Vzpomeň si na svůj tah v kroku 2“), smíš upravit jen tak, aby s panelem seděly. Návrh znění mi ukaž předem.

3. Návrat: nový případ po několika dnech (nový blok, deník)
- Je to blok Návrat z docs/plan.md: po dokončení cesty nabídne deník při pozdější návštěvě krátký nový případ. Není to opakování cvičení, ale zkouška vlastního pravidla v jiné situaci.
- Nabídka se ukáže jen v deníku (/denik/), nejdřív tři dny po dokončení cesty a jen tomu, kdo má uložené závěrečné pravidlo. Jde odložit (vrátí se později) nebo skrýt (už se nenabídne). Na Domů, v navigaci ani jinde na ni nic neupozorňuje: žádné notifikace, odznaky, počítadla ani série dní.
- Deník dnes čas dokončení cesty nemá (jen čas naposledy otevřeného kroku). Doplň ho tak, aby se pozdějším otevřením kroku neposouval; starým deníkům bez něj se nesmí nic rozbít. Rozhodování, co a kdy nabídnout, dej do čisté funkce v src/lib s časem jako parametrem a s jednotkovými testy.
- Blok ukáže studentovo pravidlo (jen ke čtení), nový případ a otázku „Platí tvoje pravidlo i tady?“ s možnostmi „Ano“, „Upravím ho“, „Nevím“ a nepovinným krátkým důvodem. Po odpovědi nic nehodnotí; nejvýš jedna věta, která se ptá dál.
- Odpověď se ukládá jako nový zápis v deníku. Původní pravidlo se nepřepisuje.
- Obsah případu je v YAML v src/content/bloky/ jako u ostatních bloků (nový druh, schéma a kontrola při sestavení; cesta bez návratu je v pořádku). Blok přidej do dílny /dilna/bloky/.
- Tři případy, všechny „Představ si…“, bez historických osob a bez tvrzení, která by potřebovala pramen:
  - cesta 1: tvrzení, které sdílí půlka třídy, ale nikdo neví, odkud je. Nesmí opakovat šaty z kroku 6.
  - cesta 6: nový telefon, i když starý funguje, protože ho mají všichni ostatní. Nesmí opakovat bundu z kroku 3 (tam jde o cenu a teplo, tady o to, že ho mají druzí).
  - cesta 5: navrhni případ sám podle jejího závěrečného pravidla; nesmí opakovat její nové případy.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí). Nové testy: reflexe ve Sporu (výběr argumentu, Jiný argument, průchod bez reflexe, Začít znovu, starý stav), závěr cesty s počáteční odpovědí i bez ní, Návrat (před třemi dny nic, po třech dnech nabídka, odložit, skrýt, uložení a původní pravidlo beze změny). Všechno ověř po obnovení stránky, na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí; jednou projdi všechny hotové cesty celé a nic nepovinného nevyplňuj. Nové bloky a ukládání zapiš do docs/design.md (Bloky, Co se ukládá, Cesta), zásadní volby do docs/rozhodnuti.md, stav do docs/plany/rozhrani-v2.md a do skillu atlas-cesta doplň, jak se píše případ pro Návrat (i do kopie ve skills/).

Hotovo je, když je první krok jasnější, dlouhým profilem se dá projít a interakce pomáhají studentovi rozvíjet vlastní argument, aniž by atlas působil složitěji nebo školometsky.

Nejdřív mi v pár bodech napiš: znění reflexe ve Sporu a upravené zpětné vazby; jak bude panel Na začátku × Teď vypadat u cest 1, 5 a 6 a upravené věty posledního kroku; plné znění všech tří nových případů s větou po každé ze tří odpovědí; co přesně přibude v deníku (pole, zápisy) a jak poznáš dokončení cesty. Počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích (Spor, závěr cesty, Návrat) a nic neposílej na GitHub. Na konci pošli snímky, výsledek testů a seznam toho, co jsi vynechal nebo co zůstalo na později.
```

Po R2 následuje revize větve skillem `atlas-revize` (průchod jako student: působí atlas jednodušeji, nebo složitěji než před větví?) a schválení autorem.
