---
name: atlas-cesta
description: Psaní cesty, stránky velké otázky nebo myšlenkového pokusu v Atlasu myšlení z bloků knihovny (Příběh, Volba s důvodem, Odkryj, Roztřiď, Změň jednu věc, Spor, Kdo žil dřív?). Použij VŽDY, když vzniká nebo se přepisuje cesta, krok cesty, myšlenkový pokus nebo stránka velké otázky, a když uživatel řekne „napiš cestu“, „přidej krok“, „udělej z toho cestu“, „velká otázka“, „myšlenkový pokus“.
---

# Cesta Atlasu myšlení

Cesta je 15–20 minut vedeného průchodu jednou velkou otázkou. Student nejdřív sám zkusí odpovědět, pak potká filozofa, narazí na silnou námitku, vyzkouší myšlenku na novém případu a zapíše si vlastní pravidlo. Je hotová, když ji šestnáctiletý člověk projde na telefonu bez nápovědy, dostane zpětnou vazbu k důvodům (ne ke shodě s filozofem) a na konci ví víc, než si myslel.

Tón a pravidla obsahu jsou v `CLAUDE.md` a `docs/styl.md`; platí i pro texty uvnitř bloků.

## Postup

1. **Přečti** `CLAUDE.md`, `docs/styl.md`, v `docs/architektura.md` řádek cesty v Katalogu cest, v `docs/design.md` oddíly **Bloky**, **Cesta** a **Velká otázka** (API a stavba) a ukázkovou cestu 1 (`src/content/cesty/kdy-mam-dobry-duvod-verit*`). U hotového celku i jeho záznam revize v `docs/revize/`.
2. **Podklady nejdřív.** Každé historické tvrzení, citát a příběh musí být v podkladovém listu (`docs/podklady/`, skill `atlas-overeni`). Co ověřené není, do cesty nepiš; zapiš to do `docs/podklady/k-overeni.md`. Vymyšlené situace uváděj „Představ si…“ a nevkládej do nich historické osoby.
3. **Navrhni osnovu** (6–8 kroků) a ukaž ji autorovi, než začneš psát. Každý krok má jeden úkol pro studenta. Osvědčené pořadí:

   | Krok | Úkol studenta | Blok |
   | --- | --- | --- |
   | Scéna | Čte skutečný příběh, ze kterého vyroste otázka | Příběh |
   | Vlastní tah | Rozhodne a připíše proč | Volba s důvodem |
   | Setkání | Vidí, co udělal filozof a proč | Příběh s citátem |
   | Vlastní pokus | Napíše odpověď, pak srovná s modelovými | Odkryj |
   | Třídění | Roztřídí karty do košů podle filozofova rozlišení, smí přidat vlastní | Roztřiď |
   | Náraz | Postaví se mezi dva filozofy, přečte nejsilnější argumenty obou | Spor |
   | Nový případ | Rozhodne v dnešní situaci a mění jednu podmínku | Změň jednu věc |
   | Souvislosti | Kdo kdy žil, s kým se mohl potkat | Kdo žil dřív? |
   | Tvoje pravidlo | Vrátí se ke svému prvnímu tahu a zapíše si vlastní pravidlo; pole je vidět hned a ukládá se samo | Moje stanovisko s `rozbalene` |

   Ne každý blok musí být v každé cestě. Dva stejné bloky za sebou jen výjimečně.
4. **Napiš soubory** (návod v `docs/design.md` › Cesta a › Bloky):
   - přehled `src/content/cesty/<slug>.mdx` (frontmatter `cislo`, `nazev`, `obdobi`, `otazka`, `vstup`, `filozofove`, `minut`; text = krátký úvod, dvě až tři věty),
   - kroky `src/content/cesty/<slug>/<n>-<nazev>.mdx` (frontmatter `cesta`, `krok`, `nazev`, `kdeJsme`), číslované 1…n bez mezer,
   - obsah Volby, Roztřiď, Změň jednu věc a Sporu do `src/content/bloky/<id>.yaml`; v MDX jen `<Volba id="…" />`.
   Text kroku patří před blok: po dokončení nabídne blok další krok a text pod ním student přeskočí.
   Bloky v kroku nabídnou „Kam dál“ na další krok samy; `client:visible` ani odkaz do deníku nepiš. Závěrečný krok: `<MojeStanovisko client:visible rozbalene id="…" otazka="…" odkaz="…" />`.
5. **Vstupy do cesty:** karta `<CestaKarta slug="…" />` u filozofa cesty a odkaz v jeho Kam dál; u velké otázky odkaz na cestu. Kartu nedávej hned za kapitolu, kterou první kroky cesty převyprávějí; student by tytéž odstavce četl dvakrát za sebou. Na Domů jen jedna doporučená cesta.
6. **Ověř** `npm test` celé, projdi cestu v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí, snímky si prohlédni. Projdi ji jednou i bez odkrytí bloků (viz Jak psát). Projdi ji i očima studenta, který s filozofem cesty nesouhlasí. Pak skill `atlas-revize`.
7. **Zapiš** stav do plánu větve (`docs/plany/<větev>.md`), do `docs/rozhodnuti.md` zásadní volby, potřeby ověření do `k-overeni.md`. Commituj česky po ucelených krocích ve vlastní větvi.

## Jak psát

- **Druh pramene řekni jednou větou na začátku scény:** „Platón vypráví…“ (scéna z dialogu), „Platón si ten spor představil…“ (literární konstrukce, třeba spor s mrtvým Prótagorem), „Vypráví se…“ (tradovaný příběh), „Představ si…“ (vymyšlená situace). Doložená událost z dneška (šaty z roku 2015) se vypráví přímo. Dál už bez výhrad.
- **Pointa má přednost před sporem badatelů.** Historická tvrzení (kdo, kdy, kde, co řekl) jen z podkladů. Výklad myšlenky, o kterém se badatelé přou, smí do textu, když slouží pointě a podává se jako výklad, ne jako fakt (Prótagorova odpověď na sebevyvrácení).
- **Shrnutí drží rozdíly z pramene.** Když pramen líčí několik skupin nebo kroků, nezobecňuj je do jedné věty. V Obraně opravdu rozuměli jen řemeslníci; politik si jen myslel, že ví, a básníci nevěděli, co říkají. Citát dej hned k tomu, o kom mluví.
- **Text drží souvislost i bez bloků.** Na co navazuje další odstavec (protipříklad, odpověď filozofa, obrat v rozhovoru), musí stát v hlavním textu, ne jen ve zpětné vazbě nebo ve srovnání v Odkryj. Srovnání v Odkryj vede studenta ke zkoušce jeho vlastní odpovědi; příběh dopředu nevyzrazuje.
- **Přímá řeč skutečných osob jen jako citát** ze `zdroje.yaml` přes `<Citat id="…" />`. Ostatní v nepřímé řeči nebo jako výklad; ani otázku filozofa nepiš jako vymyšlenou přímou řeč. Postoj ve Sporu („To, co vidím.“) je zkratka stanoviska, ne citát.
- **Jména a podrobnosti střídmě** (`docs/styl.md`, pravidlo 6). Jménem nazvi jen toho, kdo nese příběh nebo myšlenku; ostatní popiš tím, kým jsou: „Sókratův přítel“, „žena, která šaty viděla na svatbě“, „mladý básník“. Vedlejší postava smí jménem nanejvýš v první větě, kde vstoupí; v popiscích, „Kde jsme“ a scénách bloků už popisem. Vzhled, povaha, místa, částky a data jen tam, kde něco říkají o člověku nebo o myšlence.
- **„Kde jsme“** orientuje studenta, který zná jen dosavadní kroky: místo a chvíli, případně dialog („Platónův dialog Theaitétos. Athény, krátce před Sókratovým soudem“). Neodkazuje na události, o kterých cesta nemluví.
- **Myšlenka má přednost před ozdobou.** Když podklad nabízí další krok argumentu (Prótagorův lékař, Sókratova budoucnost), vezmi ho; když nabízí jen další jméno, kulisu nebo posměšek, vynech ho.
- **Neopakuj, co student v celku už četl.** Cesta musí stát sama, takže smí převyprávět scénu z portrétu. Na stránce otázky a v profilu ale ukaž filozofa na jiném příkladu (Sókratés s Lachétem místo Delf). Tentýž citát nanejvýš dvakrát v celém celku. Totéž platí pro doložený detail: Epikúrovy dny skrovného jídla smějí v cestě zaznít dvakrát, ne třikrát, i když pokaždé jinými slovy.
- **Hlas i proti filozofovi cesty.** Cesta o tom, jak žít (peníze, věci, úspěch), nesmí mluvit jen zkouškou svého filozofa. Každá zpětná vazba může být v pořádku, a celek přesto tlačí k jedné odpovědi. Závěrečný krok proto řekne, že souhlasit student nemusí, a pošle ho za myslitelem, který odpovídá jinak (hlas na stránce velké otázky). Srovnání s filozofem v bloku se zeptá i proti němu („A nechal bys to tam i tak?“).
- **Pravidlo filozofa není pravidlo atlasu.** „Smíš“, „musíš“ a „stačí ti“ piš s „podle něj“.
- **Poslední slovo před otázkou.** Citát filozofa těsně před hlasováním zní jako odpověď předem. Jeho citáty dej na začátek kroku; před blokem ať stojí věta, která nikomu nestraní.
- **„Asi“ z podkladů se nesmí ztratit.** „Asi tři sta svitků“ není „přes tři sta“ a „asi pětina“ není „pětina“. Platí i pro popis grafu a pro doporučenou formulaci v podkladovém listu: porovnej ji se sloupcem Tvrzení.
- **Zájmeno po dvou osobách.** Když věta před „on“ jmenuje dva lidi, napiš jméno.
- **Sazba.** Nezlomitelnou mezeru za jednopísmenné předložky a spojky nepiš, doplní ji sestavení. Mezi slovo a číslo, které k němu patří („z kroku 6“), napiš `&nbsp;`.

## Jak psát bloky

- **Otázka** je jedna věta ve druhé osobě: „Co uděláš?“, „Utečeš?“, „Změní se tvá odpověď, když…?“ Žádné „Zamysli se nad tím, že…“.
- **Možnosti ve Volbě** (2–4) jsou skutečné tahy, které by šestnáctiletý člověk udělal, ne jedna správná a tři hloupé. Každá má vlastní zpětnou vazbu: co ten tah umí, kde má slabinu a otázku, která posune dál. Nikdy „správně“ ani „špatně“.
- **Tah** (`tah:`) je krátké sloveso: „zeptat se znovu“, „hledat protipříklad“.
- **„Co udělal …“** jen s doloženým faktem. Verze „stejně jako ty“ i „jinou cestou“ nehodnotí studenta. Po volbě „ne“ nesmí oddíl vyznít jako správná odpověď: když by filozofové cesty jednali různě, řekni, co by udělal každý, a domyšlené podej jako výklad („by nejspíš vynechal“).
- **Modelové odpovědi v Odkryj** (2–3) jsou různě silné odpovědi, jaké by napsal student; komentář řekne, co odpověď umí a jaký test ještě zkusit. Sebekontrola jsou věty, které si student může zaškrtnout („Můj znak by odhalil…“), ne kvíz.
- **Změň jednu věc** mění vždy jen jednu podmínku. Zpětná vazba `posun` a `stejne` se ptá, co přesně rozhodlo; neopakuje titulek „Tvoje odpověď se posunula“ (ten doplní blok). Možnosti jsou pro všechny podmínky stejné: přečti každou možnost v každé podmínce, jestli v ní pořád dává smysl („i bez pátků“ přestalo platit, když v podmínce pátky zůstaly).
- **Spor:** obě strany dostanou nejsilnější verzi, ideálně skutečný střet z pramene. Postoj je krátká věta v první osobě („To, co vidím.“), argumenty 1–3 odstavce. Kdo má pravdu, blok neříká, a neříká to ani scéna („a potom ho vyvrací“ ne; „Kdo z nich má pravdu, rozhodni sám.“ ano). Námitka útočí na tezi druhého v jeho vlastním znění, i s výhradami („pro toho, kdo ho má“). Když jedna strana má silnou námitku, dej druhé straně odpověď na ni. Zkontroluj, kdo mluví poslední na telefonu (druhá strana stojí pod první): když jeho poslední námitka obrací obraz protivníka („i to je provázek“), musí na ni protivník odpovědět už ve svých argumentech. Postoj strany nesmí být krajnější než její vlastní citát („Potřebovat co nejméně“, ne „Obejít se bez všeho“).
- **Spor se směrem:** když za jednu stranu nemluví člověk, ale směr (kynici proti Epikúrovi), dej straně `oznaceni` malým písmenem a ve scéně řekni, že se ti dva nepotkali. Smyšlené setkání nepiš. Domyšlenou odpověď podej jako výklad („kynik by mohl namítnout“).
- **Roztřiď:** dva až čtyři koše s krátkým názvem slovy studenta a jednou větou, podle čeho do koše věc patří. Karty (3–8) jsou věci ze studentova života, jiné než příklady v profilu; aspoň jedna má v sobě dvě věci, které patří do různých košů. Zpětná vazba ke kartě se ptá dál a žádný koš neoznačí za správný; `kdyz` jen tam, kde poloha karty mění otázku. Filozofovo rozlišení stojí v textu před blokem, jeho zkouška ve srovnání a znovu v textu dalšího kroku. Srovnání s osobou jen z doložených faktů. Kartě, jejíž obecná zpětná vazba vede právě ke koši, kam ji student může dát, napiš pro ten koš `kdyz`; jinak čte otázku, na kterou už odpověděl.
- **Studie a graf:** doložená studie se vypráví přímo, čísla jen z podkladů. Graf je vlastní kresba směru (`GrafKrivek`, `docs/design.md` › Komponenty) s textem pod kresbou, který říká totéž slovy; graf ze studie se nekopíruje. Výhrady ke studii (koho měřili, souvislost není příčina, co se vlastně měřilo) patří do zpětné vazby, ne do vyprávění.
- **Kdo žil dřív?** jen pro dvojice, kde výsledek překvapí nebo souvisí s příběhem (Sókratés a Diogenés žili současně, Platón byl při Sókratově smrti mladý muž).
- Věty do 25 slov, odstavce do 4 vět, tykání, české uvozovky, jména podle `lide.yaml`.

## Stránka velké otázky

Stránka `/otazka/<slug>/` (`docs/design.md` › Velká otázka) je rozhovor napříč staletími: úvod scénou, Tvůj první názor, odpovědi myslitelů na tentýž případ, proč to tak viděli (časová osa), cesty k otázce a na konci Změnil se?. Obsah je v `src/content/otazky/<slug>.mdx`.

- **Úvod** je „Představ si…“ ze života studenta, dva až tři krátké odstavce, které končí otázkami. Nepoužívej scénu, kterou už nese cesta k téže otázce nebo profil. Otázku případu zapiš do `pripad` („Komu věřit?“).
- **Hlasy** ve frontmatteru: `hlasy: [{ osoba, odpoved, myslenka, citat, zdroje }]`. Pořadí podle narození dopočítá stránka; zkontroluj, kdo stránku otevírá (Diogenés je starší než Aristotelés). Jen myslitelé, kteří spolu opravdu vedou spor a mají ověřenou myšlenku v podkladech; další přibudou s vlastním profilem.
- **Nejdřív odpověď, pak myšlenka.** `odpoved` je jedna až dvě věty, jak by myslitel naložil s úvodním případem, v tykání, ve třetí osobě a bez uvozovek (převod jeho myšlenky, ne citát). Odpovědi mají stejný tvar, aby bylo na první pohled vidět, kde se rozcházejí. Dvě věty jsou strop a hlídá ho test: dvě otázky myslitele spoj do jedné věty.
- **Poznal by se v tom?** Každá odpověď musí říct, co by na případ řekl jen tenhle myslitel. Radikální postoj nesmí znít jako obecná rada („rozhodni rozumem“); Parmenidés řekne „ani babičce, ani učitelce, obojí je jen mínění“. Když má myslitel klíčový obraz (Prótagorův lékař), patří i do odpovědi. Nezmenšuj to, čím se myslitel liší od ostatních: Aristotelés peníze ke štěstí počítá, „jen jako nástroj“ z něj dělá dalšího, kdo je odsouvá.
- **Myšlenka** (`myslenka`) jsou 2–4 věty z podkladů: proč to tak viděl. Nesmí opakovat odpověď ani citát pod ní a musí dát důvod, ne jen tezi podruhé. Může na citát navázat („Sám řekl, co je pravda, jednou větou:“).
- **Citát** jen ze `zdroje.yaml` a jen ten, který patří téže osobě (kontroluje sestavení). `zdroje` = prameny věty.
- Cesty k otázce se na stránce ukážou samy z `otazka:` v přehledu cesty. Na otázku odkazuj adresou `/otazka/<slug>/`.

## Časté chyby

- Cesta začíná výkladem místo scény. První krok je vždy příběh nebo silný pokus.
- Filozof mluví větou, která není v prameni. Přímá řeč jen jako citát s místem.
- Zpětná vazba chválí shodu s filozofem („Přesně jako Sókratés!“). Hodnotí se důvod, ne shoda.
- Nový případ je úřední školní scénka. Lepší jsou situace, které studenty opravdu zajímají: přátelé, sociální sítě, zprávy ve skupině, rozhodování o budoucnosti.
- V kroku je redakční poznámka, metodický popisek nebo cesta k souboru. Do studentských stránek nepatří nic z toho.
- Krok má dva úkoly naráz. Rozděl ho.
- Ve vymyšlené situaci vystupuje historická osoba, nebo v doložené události přibude detail, který v podkladech není.
- V textu je víc jmen, než příběh potřebuje.
- Mezi „zeptal se“ a „zkusil to znovu“ chybí krok, protože protipříklad zůstal schovaný v bloku.
- Shrnutí pramene je hladší než pramen a tím nepravdivé.
- Spor dá jedné straně poslední slovo a druhé nenechá odpověď.
- Závěrečné pravidlo je schované za tlačítkem nebo se dá ztratit.
- Cesta má hlasy jen pro jednu odpověď a student s opačným názorem v ní nemá zastánce.
- Možnost ve Změň jednu věc v některé podmínce nedává smysl.
- Zpětná vazba se ptá, kam věc patří, a student ji tam právě dal.
- Číslo je v textu silnější než v podkladech („přes“ místo „asi“).

## Kdy je hotovo

- Osnova schválená autorem; každé historické tvrzení má podklad.
- Kroky 1…n fungují na telefonu i notebooku, lišta Další vede až k Dokončit cestu a přehled cesty ukáže prošlé kroky.
- Text dává smysl i tomu, kdo bloky neodkryje.
- Každá zpětná vazba vysvětluje důvod a ptá se dál; nic se neboduje.
- Na konci se student vrátí ke svému prvnímu tahu a zapíše si vlastní pravidlo do deníku.
- Student, který s filozofem cesty nesouhlasí, najde v cestě nebo na jejím konci myslitele, který mu dává za pravdu.
- `npm test` prošlo celé, snímky jsou prohlédnuté, revize (`atlas-revize`) bez zásadních nálezů.
