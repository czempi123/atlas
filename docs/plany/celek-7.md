# Plán větve celek-7: „Jsem pořád tentýž, když se měním?“

Celek 7: profily Hérakleita a Parmenida, cesta 2 „Jsem pořád tentýž, když se měním?“ (období 1, velká otázka 5 „Kdo vlastně jsem?“) a stránka velké otázky 5. Rozsah vybral autor 9. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; cesta 7 s Diogenem, Kratétem a Hipparchií; cesta 34 se Senekou a Marcem Aureliem). Cestou 2 budou hotové všechny čtyři cesty klasického Řecka a atlas dostane první předsókratiky. Otázka 5 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-7-jsem-porad-tentyz.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 9. 10. 2026 (oddíl Po P6) |
| P7 | Profily Hérakleita a Parmenida | čeká; zadání je níže |
| P8 | Cesta 2 „Jsem pořád tentýž, když se měním?“, kresba a stránka velké otázky 5 | čeká na P7 |
| P10 | Revize celku | čeká na P8 |
| Opravy | Zapracování nálezů revize | čeká na P10 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | jen na pokyn autora |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-7.md`. Větev `celek-7` je založená z hlavní větve 9. 10. 2026 (commit `7e95762`, po sloučení celku 6).

## Co si celek nese z celků 1 až 6

Co je tu o pramenech, byl výchozí stav a domněnka k ověření. P6 rozhodl (9. 10. 2026): kde se tento oddíl rozchází s podklady, platí podklady a oddíl Po P6.

- **Co už v atlasu o Hérakleitovi a Parmenidovi je:**
  - V datech (`lide.yaml`) jsou oba jako profil bez stránky. Hérakleitos: období 1, asi 540–480 př. n. l., Efesos, otázka 5, atribut řeka s větou „Do téže řeky nelze vstoupit dvakrát“, prameny `sep-heraclitus` a `britannica-heraclitus`. Parmenidés: asi 515 až po 450 př. n. l., Elea, směr eleaté, otázky 6 a 7 (otázku 5 nemá), atribut brána, prameny `sep-parmenides`, `dl-ix-22` a `parmenides-b8`. Zénón z Eleje je v datech profil s atributem želva.
  - Parmenidés mluví na stránce otázky 6 (citát `parmenides-b8`; v `k-overeni.md` je k němu poznámka o druhém čtení, podle kterého svět změny nepopírá). Portrét Platóna má dialog Parmenidés a větu, že Hérakleitovo učení poznal Platón už v mládí; portrét Aristotela vypráví Hérakleita u pece. Nic z toho se nemá opakovat.
  - Vztahy v datech: Parmenidés → Platón a Hérakleitos → Platón (vliv textem), Parmenidés → Zénón (učitel, tradované). Vztah Hérakleitos ↔ Parmenidés v datech není; `k-overeni.md` říká jen „možná podnítil“. Stránka směru `src/content/smery/eleate.md` existuje.
- **Věta atributu u Hérakleita je nejspíš parafráze, ne zlomek.** O řece se dochovalo víc znění (zlomky B12, B49a a B91) a podobu „dvakrát do téže řeky“ nesou až Platón a Plútarchos. Stejně tak „všechno plyne“ nemusí být Hérakleitova věta. P6 řekne, co je zlomek, co svědectví a co pozdější shrnutí, a podle toho se opraví atribut i texty. Je to táž past jako „smrt nic není“ u Epikúra.
- **Otázka cesty je dnešní; antika se ptala jinak.** Hérakleitos a Parmenidés mluví o změně a o tom, co je, ne o osobní identitě. P6 má najít, kde se antika ptala na člověka, který se mění, a přitom zůstává: Théseova loď, „rostoucí argument“ o dlužníkovi, Platónovo Symposion (o tom, že se člověku za život vymění všechno), stoikové. Cesta jim nesmí vkládat do úst pozdější otázku (paměť, vědomí); má nechat místo Lockovi, Humovi a dalším, kteří v datech nejsou. Je to stejná úloha jako u otázky 3.
- **Plútarchos je od celku 6 v datech** a hodí se podruhé: Théseovu loď podle všeho vypráví on, a je i jedním z pramenů věty o řece. Nové osoby se dál nepřidávají; koho příběh potřebuje a v datech není, zůstane v textu bez odkazu.
- **Spor Hérakleitos × Parmenidés je školní dvojice, ne doložený střet.** Jestli jeden na druhého reagoval a kdo na koho, je sporné. Když Spor, tak na dálku a s větou o tom, co nevíme; scéna netvrdí, že se potkali ani že jeden četl druhého (poučení z celku 6: „stejnou námitku vedl“, ne „z té věty udělal námitku“).
- **Životopisy předsókratiků jsou pozdní a z velké části legenda** (Diogenés Laertios o Hérakleitově povaze a smrti). Tradované jako tradované; co je jen pomluva nebo anekdota bez pointy, do studentského textu nepatří. Hérakleitova smrt podle Diogena je nechutná historka: nevyprávět.
- **Citlivá místa.** Otázka „Kdo vlastně jsem?“ se šestnáctiletých týká víc než kterákoli dosud:
  - student, který se mění tak, že to bolí nebo o tom nechce mluvit (dospívání a tělo, nemoc, úraz, poruchy příjmu potravy);
  - student, který řeší svou genderovou identitu nebo orientaci: cesta o něm nerozhoduje, nezlehčuje („to přejde“) a neudělá z něj příklad;
  - student, jehož blízký se změnil (demence, závislost, těžká nemoc): „už to není on“ je věta, kterou doma slyší;
  - student po ztrátě nebo traumatu („už nejsem, kdo jsem byl“); návaznost na celek 6;
  - adopce, stěhování, dvojí domov a jazyk.
  Cesta nikomu neříká, které jeho „já“ je pravé, nedělá osobnostní test a neptá se na vlastní bolestnou změnu polem na psaní. Příklady změny mají být cizí nebo neutrální (loď, řeka, město, kapela, která vymění všechny členy).
- **Překryvy, kterým se vyhnout:** cesta 3 a stránka otázky 6 (co je skutečné: Parmenidés tam už mluví), portrét Platóna (ideje jako odpověď na Hérakleita a Parmenida), cesta 8 (Nagelova odpověď na zrcadlo je věta o identitě: „narodit se o sto let dřív by musel někdo jiný“; stačí odkaz), cesta 5 (co je moje). Zénónovy paradoxy pohybu patří samostatné stránce pokusu, ne této cestě, pokud P6 neřekne jinak.
- **Kresba s pohybem:** autor ji chce v atlasu častěji (4. 10. 2026). Nabízí se Théseova loď, které student vyměňuje prkna, a druhá loď složená ze starých prken. Podklady řeknou, jestli tam má smysl a co je v ní pramen a co náš přídavek.
- **Poučení z revizí** je v `docs/pouceni.md`. Z celku 6 hlavně: argument drž souměrně a čti ho očima studenta, kterému je zle; citát se stupňováním čti i obráceně; výklad u hlasu ověř v tomtéž místě jako citát; scéna Sporu netvrdí, že jeden autor četl druhého; když poslední krok slíbí zastánce každé odpovědi, projdi všechny možnosti.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“, Návrat a karta Zkus to žít. Profil má šablonu z Epikúra, Diogena a Prótagora. Stránka otázky 5 vznikne ze souboru `src/content/otazky/kdo-vlastne-jsem.md` (teď jen hlavička). Měněné věty hlídají testy přesným zněním i v průchodu bez odkrytí (`tests/e2e/cesta*.spec.ts`): hledej je grepem v celé složce `tests/`, ne v prvních sedmdesáti řádcích výpisu.
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026). Předem se ptá jen na stahování obrázků, nové osoby, mazání, slučování a GitHub.
- **Test, který občas spadne:** „cesta: průchod, Kam dál z bloku…“ v `tests/e2e/cesta.spec.ts` (řádek 76, před celkem 6 řádek 73; čeká na `astro-island[ssr]`). Když spadne jen on, pusť ten soubor znovu samostatně.

## Po P6 (9. 10. 2026)

Podklady jsou v `docs/podklady/celek-7-jsem-porad-tentyz.md`; nové prameny (46) a citáty (60) v `src/data/zdroje.yaml`. V datech má Hérakleitos otázky 5 a 6, Efesos i jako místo narození a deset pramenů; Parmenidés otázky 6, 7 a 5, Eleu i jako místo působení, deset pramenů a u atributu pramen Sextos (zlomek B1). Přibyly tři vztahy, které nemění žádnou hotovou stránku: Xenofanés → Parmenidés (učitel, tradované), Hérakleitos → Kleanthés a Hérakleitos → Plútarchos (vliv textem). Věta atributu u Hérakleita je beze změny a čeká na autora. Studentský text nevznikl a žádný obrázek není stažený. Zadání P6 je v `docs/archiv/zadani/celek-7.md`.

**Čeho se celek drží** (podrobně v úvodu podkladů):

1. Věta, kterou zná každý, není Hérakleitova věta. Dochovaný zlomek (B12) říká: do týchž řek, jiné vody. „Dvakrát do téže řeky nevstoupíš“ známe od Platóna (Kratylos 402a) a Aristotela; „všechno plyne“ jsem doslova našel až u Simplikia o tisíc let později.
2. Hérakleitos a Parmenidés o osobní identitě nemluví. Na člověka, který se mění, a přece zůstává, se antika ptá jinde: dlužník z komedií, Platónova Diotima, Aristotelés, stoikové, Seneca, Plútarchos. Slova o člověku bere cesta jen od těch, kdo je napsali.
3. „Tentýž“ znamená pokaždé něco jiného: tatáž věc, tentýž člověk, táž povaha. U každého argumentu je řečeno, na co míří.
4. Cesta nikomu neříká, kdo je. Příklady změny jsou cizí nebo neutrální (loď, řeka, banán, dlužník, buňky, kapela).

**Zvolil jsem sám** (bez mezikroku schvalování; důvody jsou v podkladech, Rozpory a rozhodnutí):

- **Profil Hérakleita:** scéna jsou kostky s dětmi u Artemidina chrámu („vypráví se“), pointu jí dává jeho vlastní věta o Hermodórovi. Myšlenky: táž řeka, jiná voda (Roztřiď; Odkryj se dvěma zněními věty; Kratylos a prst) a protiklady patří k sobě (luk a lyra; Změň jednu věc). Námitky nesou Platón a Aristotelés. Karta Zkus to žít „Co drží napětím“ zůstává u věcí. Profil končí větou „Hledal jsem sám sebe“. Smrt podle Diogena, „plačící filozof“ mimo popisek obrazu, první půlka zlomku o Hermodórovi a zlomek o boji do profilu nepatří.
- **Profil Parmenida:** scéna je brána Noci a Dne (začátek básně). Myšlenky: o tom, co není, se nedá mluvit (Roztřiď; námitka Platónova hosta z Eleje) a změna pod lupou (banán; námitka Aristotelova: člověk se stal vzdělaným). V básni mluví bohyně. Druhé čtení (svět změn nezrušil) je v profilu jako spor čtenářů od starověku, ne jako oprava. Karta „Věty o ničem“.
- **Hérakleitos a Parmenidés:** vztah se do dat nezapisuje. Jestli jeden o druhém věděl, nevíme; proti sobě je postavil Platón (Theaitétos 180e–181a).
- **Cesta 2** se otevírá lodí (Plútarchos, Théseus 23); řeka přijde jako první odpověď. Návrh sedmi kroků: loď · řeka · proč je změna záhada (Parmenidés na banánu, Aristotelés, tentýž × stejný) · loď po prknech s kresbou a Hobbesovou druhou lodí · a co člověk (dlužník, host, Diotima) · Spor · jak staré je tvoje tělo.
- **Spor** je Seneca (Dopisy 58, 22–23) × Plútarchos (O pozdní odplatě bohů 559a–c): dva čtenáři téže řeky s opačným závěrem. Scéna netvrdí, že jeden četl druhého. Zamítnuto: Hérakleitos × Parmenidés, akademikové × stoikové, Aristotelés × Kratylos.
- **Nový případ** je stáří buněk podle uhlíku z jaderných zkoušek (čtyři studie v plném textu); „tělo se vymění za sedm let“ je pověra, kterou případ opraví. **Návrat** je lístek na koncert oblíbené kapely za deset let (studie z roku 2013), úzce o odhadu, ne o tom, kým kdo bude.
- **Kresba s pohybem:** loď, které student vyměňuje prkna, a druhá loď ze starých prken. Pramen jsou Plútarchos (výměna prken, spor filozofů) a Hobbes (druhá loď, 1656); výměna všech prken je už náš přídavek a popis pohledu to řekne.
- **Stránka otázky 5:** případ „Kdo tě zná líp?“ a šest hlasů (Hérakleitos B45, Sókratés podle Faidra 229e, Platón podle Faidóna 115c, Aristotelés podle Etiky Nikomachovy 1166a, Epikúros podle Dopisu Hérodotovi 64, Marcus Aurelius XII, 3). Plútarchos a Epiktétos jsou v rezervě.
- **Citlivá místa:** sedm pravidel pro celý celek a tabulka míst očima pěti studentů. Nemoc, demence, závislost a úraz nejsou v cestě příkladem. Do studentského textu nejde řádek s pomocí. Opřeno o přílohy č. 3 a č. 8 metodického doporučení MŠMT a o australské zásady řeči o demenci.
- **Zénón a Achilleus se želvou:** celek je nezakládá ani nepotřebuje.

**Čeká na autora** (osm bodů je na konci podkladů):

1. věta atributu u Hérakleita: A („Do týchž řek vstupujeme, a pořád na nás tečou jiné vody.“), B, nebo C; doporučení A;
2. obrázky ke stažení: Hérakleitos z Art Institute of Chicago (inv. 1897.296, CC0) a číše s loděmi z Met (inv. 56.171.36); u Parmenida brána ve Velii po ověření na Wikimedia Commons, nebo deska bez obrazu;
3. citlivá místa, která chtějí výslovný souhlas: nemoc a demence nejsou příkladem; bez řádku s pomocí; hlas Platóna na stránce otázky 5 stojí na scéně Sókratovy smrti; Návrat s lístkem na koncert; zlomek o boji v profilu není;
4. Spor Seneca × Plútarchos, nebo Odkryj se dvěma větami o řece;
5. kresba lodi, nebo záložní blok Změň jednu věc;
6. stránka otázky 5 se šesti hlasy, nebo se sedmi (s Plútarchem);
7. čtyři vztahy, které mění oddíl Doba a lidé na hotových stránkách (Parmenidés – Sókratés, Aristotelés → Hérakleitos, Hérakleitos → Seneca a → Marcus Aurelius): zapsat v P7?
8. české překlady ke srovnání (B12, B51, Parmenidovy verše).

**Co si nese P7:** oddíly Tvrzení: Hérakleitos, Tvrzení: Parmenidés a Reagoval jeden na druhého?; z Citlivých míst pravidla, tabulku lákavých citátů a legendy; řádky 1–32 tabulky Citáty a řádek 41. Profily nesou větu o řece a její osud a argument o tom, co není; loď, dlužník a Spor patří cestě. Zlomek B12 smí v celku zaznít dvakrát (profil a cesta), stránka otázky 5 proto bere B45.

**Co si nese P8:** oddíly Tvrzení: cesta 2 a Velká otázka 5, celý oddíl Citlivá místa a list pro učitele; body 4 až 6 výše.

**Kontrola.** Původní znění všech 60 citátů je strojem porovnané se staženými texty; čtyři vědomé odchylky jsou popsané u citátů. `npm test`: 495 testů dat prošlo; v prohlížeči prošlo 367 z 368, spadl jen známý test „cesta: průchod, Kam dál z bloku…“ (`tests/e2e/cesta.spec.ts:76`) a celý soubor pak samostatně prošel (32 testů). První běh po zápisu dat prošel celý (368).

## Zadání P7: Profily Hérakleita a Parmenida

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Katalog dává profilu Opus 5.5 · medium. Tady jsou profily dva najednou, skoro každá věta musí držet rozdíl mezi zlomkem, svědectvím a pozdějším shrnutím a Parmenidův argument je nejtěžší výklad, jaký atlas zatím má. Kdo chce šetřit, pustí krok na medium a Parmenidovu kapitolu o změně si přečte zvlášť pozorně.

Pět řádků na začátku zadání čeká na odpověď autora. Prázdný řádek znamená doporučení podkladů; u stažení obrázku znamená prázdný řádek „nestahovat“.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-7. Podklady (P6) jsou hotové.

Věta atributu u Hérakleita (A / B / C; prázdné znamená A): 
Obrázek Hérakleita: Art Institute of Chicago, inv. 1897.296, CC0 (stáhnout ano / ne; prázdné znamená ne): 
Obrázek Parmenida (odkaz na soubor z Wikimedia Commons, u kterého jsem ověřil licenci, nebo „bez obrazu“; prázdné znamená bez obrazu): 
Čtyři vztahy, které mění oddíl Doba a lidé na hotových stránkách (zapsat / nezapsat / které; prázdné znamená zapsat): 
Zlomek o boji (B53) v profilu Hérakleita (ne / uvnitř výkladu; prázdné znamená ne): 

Napiš profily Hérakleita a Parmenida podle skillu atlas-osobnost. Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md;
- v docs/plany/celek-7.md tabulku stavu a oddíl „Po P6“;
- z docs/podklady/celek-7-jsem-porad-tentyz.md: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), z Nejsilnějších příběhů body 4 až 8, 10 a 14, celé oddíly Tvrzení: Hérakleitos (profil), Tvrzení: Parmenidés (profil) a Reagoval jeden na druhého?, z Citlivých míst Pravidla pro celý celek, tabulku Citáty a místa, která lákají, a Legendy o Hérakleitovi, z tabulky Citáty řádky 1 až 32 a 41, Návrh dat, z Obrázků Hérakleita a Parmenida a Rozpory a rozhodnutí. Oddíly o cestě 2 a o otázce 5 nečti;
- jako vzor profilu celý src/content/osobnosti/protagoras.mdx a jeho blok src/content/bloky/protagoras-vitr.yaml;
- co atlas o obou už říká, najdi grepem („Hérakleit“, „Parmenid“) v src/content/osobnosti/platon.mdx a aristoteles.mdx, v src/content/otazky/co-je-skutecne.mdx a jak-poznam-pravdu.mdx a v src/content/smery/eleate.md; nic z toho neopakuj.

Co profily mají mít:

1. Hérakleitos. Úvod scénou: kostky s dětmi u Artemidina chrámu („Vypráví se…“), pointu jí dá jeho vlastní věta o Hermodórovi. Hned potom jednou větou, co o něm víme: z knihy zbyly věty, které si opsali jiní; ostatní se vypráví. Hlavní citát: zlomek B12 (`herakleitos-b12`). Kapitola 01 je věta o řece a její osud: vlastní pokus studenta před výkladem (Roztřiď: co trvá, jen když se v tom něco mění), pak Odkryj, který proti velkému citátu postaví známé znění „dvakrát“ a zeptá se, které napsal on, pak Kratylos s prstem a Aristotelova odpověď. Zlomek B12 smí v celku zaznít nejvýš dvakrát a podruhé ho ponese cesta: v profilu ho proto jako citát podruhé neopakuj. Kapitola 02 jsou protiklady, které drží pohromadě: luk a lyra (Změň jednu věc), moře a cesta jako hádanky, Aristotelova námitka jako otázka, ne jako rozsudek. Konec: kniha v chrámu, Temný, „Hledal jsem sám sebe“.
2. Jak psát o Hérakleitovi: „napsal“ u zlomku, „podle Platóna“ u svědectví, nikdy „učil, že“. Věta „dvakrát do téže řeky“ není podvrh, je to Platónovo a Aristotelovo podání; zlomek říká „do týchž řek, jiné vody“. O hesle „všechno plyne“ jen tolik: mezi dochovanými větami není a připsali mu ho pozdější čtenáři; ne „nikdy to neřekl“ a ne „poprvé u Simplikia“. Nevyprávěj smrt podle Diogena, nálepky o povaze, dopisy s Dareiem ani první půlku věty o Hermodórovi. „Plačící filozof“ smí být jen v popisku obrazu s tím, čí je to představa. Zlomek o boji podle mé odpovědi výše.
3. Parmenidés. Úvod scénou: brána Noci a Dne ze začátku básně. V básni mluví bohyně; nepiš „Parmenidés dokázal“. Život krátce a s typem tvrzení z podkladů (Elea, kolem roku 515, zákony pro město, Ameiniás, Xenofanés jako „říkalo se“). Hlavní citát doporučuji `parmenides-b8-ted`; `parmenides-b8` má stránka otázky 6. Kapitola 01: o tom, co není, se nedá mluvit (Roztřiď: věty o ničem; námitku nese Platónův host z Eleje). Kapitola 02: změna pod lupou (banán; Aristotelova odpověď, že při změně něco zůstává) a na konci druhé čtení jako spor čtenářů od starověku, bez redakční výhrady: atlas neříká „změnu popírá“ ani „nepopírá“, říká, co stojí v básni a že se čte dvojím způsobem. Rozhovor se Sókratem jen jednou větou jako Platónovu scénu, Zénóna jednou větou jako mladšího druha.
4. Dvojice. Žádný z profilů netvrdí, že jeden na druhého reagoval. Smí zaznít: „Jestli jeden o druhém věděl, nevíme. O sto let později je Platón postavil proti sobě jako dva tábory.“ Théseova loď, dlužník a Seneca s Plútarchem patří cestě 2: jmenuj ji v Kam dál zatím bez odkazu; vznikne v P8.
5. Dvě velké myšlenky u každého, každá z jiné disciplíny (názvy disciplín vezmi z hotových stránek), s vlastním stanoviskem studenta. Karta Zkus to žít podle návrhů v podkladech („Co drží napětím“, „Věty o ničem“): obě zůstávají u věcí a nápisů, ne u lidí.
6. Citlivá místa: pravidla 1 až 7 z podkladů platí i pro profily. Bloky jsou o věcech (řeka, plamen, luk, banán, díra v ponožce), ne o studentovi a jeho těle. Co bohyně říká o změně, je věta o tom, co je; profil ji neobrací na člověka.
7. Kdo žil dřív?, Doba a lidé a Kam dál podle skillu. Co atlas už vypráví jinde (Hérakleitos u pece, Platón a Kratylos, „z ničeho nic“ a duha, rozum proti smyslům), neopakuj; odkaž.

Data: hlavní citáty obou profilů; věta atributu u Hérakleita podle mé odpovědi (znění A, B, C jsou v podkladech; po změně zkontroluj desku profilu a kartu v Mapě a čase); čtyři vztahy z Návrhu dat podle mé odpovědi, a po zápisu přečti oddíl Doba a lidé na stránkách Sókrata, Aristotela, Seneky a Marca Aurelia. Vztah Hérakleitos ↔ Parmenidés ani Hérakleitův spor s Pýthagorou a Xenofanem nezapisuj. Nové osoby nepřidávej. Obrázek stáhni jen se souhlasem výše: předtím ověř licenci v záznamu muzea a napiš mi název souboru, zdroj a velikost; originál mimo repozitář, do public/obrazky/ kopii zmenšenou na 1280 px; olejomalbu před uložením zesvětli a zapiš to k obrázku. Profil bez obrazu má desku s mincí atributu. Po změně dat restartuj běžící npm run dev.

Založ ucitel/celek-7.md a zapiš do něj, co se týká profilů: osud věty o řece (tabulka znění) a co odpovědět na „takže to neřekl?“; druhé čtení Parmenida a kdo ho drží; dvě chronologie Parmenida; proč atlas netvrdí, že jeden reagoval na druhého; legendy o Hérakleitovi a proč je atlas nevypráví; zlomky, které profil vynechává (boj, první půlka věty o Hermodórovi). Bez odkazu ze studentského webu; ověř, že se soubor nedostane do sestaveného webu. Cesta doplní svou část v P8.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně); snímky obou profilů na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs); oddíl Doba a lidé na obou profilech a na stránkách, kterým přibyl vztah; karty obou v Mapě a čase; stránka směru eleaté.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-7.md oddíl „Po P7“ (co stránky mají, použité citáty, co se změnilo mimo profily, co si nese P8, co čeká na autora), připrav tam zadání P8 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-7.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md (Po P7) a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co stránky mají, kde ses od podkladů odchýlil a proč a co čeká na mé rozhodnutí, a pošli snímek úvodu a jednoho bloku z každého profilu.
```
