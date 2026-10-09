# Plán větve celek-7: „Jsem pořád tentýž, když se měním?“

Celek 7: profily Hérakleita a Parmenida, cesta 2 „Jsem pořád tentýž, když se měním?“ (období 1, velká otázka 5 „Kdo vlastně jsem?“) a stránka velké otázky 5. Rozsah vybral autor 9. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; cesta 7 s Diogenem, Kratétem a Hipparchií; cesta 34 se Senekou a Marcem Aureliem). Cestou 2 budou hotové všechny čtyři cesty klasického Řecka a atlas dostane první předsókratiky. Otázka 5 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-7-jsem-porad-tentyz.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 9. 10. 2026 (oddíl Po P6) |
| P7 | Profily Hérakleita a Parmenida | hotovo 9. 10. 2026 (oddíl Po P7) |
| P8 | Cesta 2 „Jsem pořád tentýž, když se měním?“, kresba a stránka velké otázky 5 | čeká; zadání je níže |
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

- **Profil Hérakleita:** scéna jsou kostky s dětmi u Artemidina chrámu („vypráví se“), pointu jí dává jeho vlastní věta o Hermodórovi. Myšlenky: táž řeka, jiná voda (Roztřiď; Odkryj se dvěma zněními věty; Kratylos a prst) a protiklady patří k sobě (luk a lyra; Změň jednu věc). Námitky nesou Platón a Aristotelés. Karta Zkus to žít „Co drží napětím“ zůstává u věcí. Profil končí větou „Hledal jsem sám sebe“. Smrt podle Diogena a „plačící filozof“ mimo popisek obrazu do profilu nepatří; zlomek o válce a celá věta o Hermodórovi po odpovědi autora ano (oddíl níže).
- **Profil Parmenida:** scéna je brána Noci a Dne (začátek básně). Myšlenky: o tom, co není, se nedá mluvit (Roztřiď; námitka Platónova hosta z Eleje) a změna pod lupou (banán; námitka Aristotelova: člověk se stal vzdělaným). V básni mluví bohyně. Druhé čtení (svět změn nezrušil) je v profilu jako spor čtenářů od starověku, ne jako oprava. Karta „Věty o ničem“.
- **Hérakleitos a Parmenidés:** vztah se do dat nezapisuje. Jestli jeden o druhém věděl, nevíme; proti sobě je postavil Platón (Theaitétos 180e–181a).
- **Cesta 2** se otevírá lodí (Plútarchos, Théseus 23); řeka přijde jako první odpověď. Návrh sedmi kroků: loď · řeka · proč je změna záhada (Parmenidés na banánu, Aristotelés, tentýž × stejný) · loď po prknech s kresbou a Hobbesovou druhou lodí · a co člověk (dlužník, host, Diotima) · Spor · jak staré je tvoje tělo.
- **Spor** je Seneca (Dopisy 58, 22–23) × Plútarchos (O pozdní odplatě bohů 559a–c): dva čtenáři téže řeky s opačným závěrem. Scéna netvrdí, že jeden četl druhého. Zamítnuto: Hérakleitos × Parmenidés, akademikové × stoikové, Aristotelés × Kratylos.
- **Nový případ** je stáří buněk podle uhlíku z jaderných zkoušek (čtyři studie v plném textu); „tělo se vymění za sedm let“ je pověra, kterou případ opraví. **Návrat** je lístek na koncert oblíbené kapely za deset let (studie z roku 2013), úzce o odhadu, ne o tom, kým kdo bude.
- **Kresba s pohybem:** loď, které student vyměňuje prkna, a druhá loď ze starých prken. Pramen jsou Plútarchos (výměna prken, spor filozofů) a Hobbes (druhá loď, 1656); výměna všech prken je už náš přídavek a popis pohledu to řekne.
- **Stránka otázky 5:** případ „Kdo tě zná líp?“ a šest hlasů (Hérakleitos B45, Sókratés podle Faidra 229e, Platón podle Faidóna 115c, Aristotelés podle Etiky Nikomachovy 1166a, Epikúros podle Dopisu Hérodotovi 64, Marcus Aurelius XII, 3). Plútarchos a Epiktétos jsou v rezervě.
- **Citlivá místa:** sedm pravidel pro celý celek a tabulka míst očima pěti studentů. Nemoc, demence, závislost a úraz nejsou v cestě příkladem. Do studentského textu nejde řádek s pomocí. Opřeno o přílohy č. 3 a č. 8 metodického doporučení MŠMT a o australské zásady řeči o demenci.
- **Zénón a Achilleus se želvou:** celek je nezakládá ani nepotřebuje.

**Čekalo na autora** (osm bodů je na konci podkladů; odpovědi jsou v oddíle níže):

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

## Odpovědi autora po P6 (9. 10. 2026)

Autor odpověděl v chatu; v podkladech je to oddíl Odpovědi autora a dotčená místa jsou přepsaná.

- **Věta atributu u Hérakleita:** znění A („Do týchž řek vstupujeme, a pořád na nás tečou jiné vody.“). Zapíše P7.
- **Obrázky:** souhlas se stažením Hérakleita z Art Institute of Chicago (P7) a číše s loděmi z Met (P8). Parmenidés zůstává bez obrazu, dokud autor neověří bránu ve Velii na Wikimedia Commons.
- **Citlivá místa:** souhlas u toho, co není podstatné; „Pokud je to důležitá věc a nevolíš ji pouze kvůli ‚vhodnosti‘ nebo ‚slušnosti‘, zahrni ji.“ Podle toho je nově zařazeno:
  - zlomek o válce (B53, `herakleitos-b53`) v profilu Hérakleita, uvnitř výkladu o protikladech;
  - celá věta o Hermodórovi (B121) i s kletbou nad Efesem; dává scéně s kostkami pointu;
  - Senekův závěr o těle a o strachu ze smrti (`seneca-ep-58-23-smrt`) ve Sporu, s otázkou za ním a s odkazem na cestu 8;
  - souvislost Plútarchova argumentu ve scéně Sporu: město nese následky toho, co udělalo před generacemi (`de-sera-559-obec`);
  - Epiktétos jako sedmý hlas na stránce otázky 5 (`rozpravy-ii-10-1`: člověk, občan světa, role).
- **Zůstává mimo, protože důvod není jen ohled:** nemoc, demence, závislost a úraz jako příklad (antické prameny celku ho nemají; patří k paměti a k Lockovi); věty, které tělem pohrdají (Marcus Aurelius II, 2; Epiktétos III, 1, 40), protože podstatu nesou jiné citáty; Hérakleitova smrt; hádanka o Diónovi a Theónovi (jen učiteli); řádek s pomocí.
- **Čtyři vztahy, které mění hotové stránky:** zapsat v P7.
- **Spor:** Seneca × Plútarchos. Ke kresbě lodi a k počtu hlasů se autor nevyjádřil; platí doporučení (kresba ano; sedm hlasů s Epiktétem, Plútarchos v rezervě).
- **Data:** čtyři nové citáty (B53, B52 jako rezerva ke scéně s kostkami, Senekův závěr, Plútarchova obec) a celý zlomek B121; citátů celku je 64. Původní znění sedí se staženými texty. `npm test` po změně prošel celý (495 testů dat, 368 v prohlížeči).

## Po P7 (9. 10. 2026)

Profily jsou v `src/content/osobnosti/herakleitos.mdx` a `parmenides.mdx`, jejich bloky v `src/content/bloky/` (`herakleitos-co-trva`, `herakleitos-luk`, `parmenides-co-neni`, `parmenides-banan`; Odkryj `herakleitos-dve-vety` je přímo v MDX). List pro učitele `ucitel/celek-7.md` má část o profilech. Zadání P7 je v `docs/archiv/zadani/celek-7.md`.

**Co stránky mají.**

- **Hérakleitos** („Muž, který psal v hádankách“). Úvod: odmítnuté zákony a kostky s dětmi („vypráví se“, nepřímo), hned za tím celý zlomek B121 jako citát a věta o tom, co víme. Velký citát B12. Kapitola 01 Řeka: Roztřiď „Čím to trvá?“ (osm věcí, tři koše), výklad zlomku jako výklad („dá se to číst takhle“), Odkryj „Kterou z nich napsal Hérakleitos?“ (známé znění „dvakrát“ proti větě z úvodu; po odkrytí Platónův citát, „vymyšlená tedy není“, dvě věty o hesle „všechno plyne“), Kratylos s prstem nepřímo, Platónova námitka nepřímo, Aristotelova odpověď citátem a otázka, na koho míří. Kapitola 02 Luk a lyra: Změň jednu věc (povol tětivu, tužší dřevo, přeřízni tětivu), zlomek B51, cesta nahoru a dolů jako hádanka (nepřímo), moře (B61), zlomek o válce (B53) uvnitř výkladu s větou „kdo tu větu čte vedle luku a lyry, rozumí jí jinak“ a s otázkou, Aristotelova námitka (1005b) nepřímo a jako otázka, konec: kniha v chrámu, Temný, potápěč z Délu nepřímo, „Hledal jsem sám sebe“. Myšlenky: Metafyzika (některé věci trvají jen tím, že se mění) a Argumentace (protiklady drží pohromadě). Karta „Co drží napětím“. Kdo žil dřív? s Parmenidem.
- **Parmenidés** („Muž, který nechal mluvit bohyni“). Úvod: jízda k bráně Noci a Dne a přijetí u bohyně (B1, 22–23 jako citát), Elea, kolem roku 515, zákony („vypráví se“), od brány mluví bohyně. Velký citát B8, 5–6. Kapitola 01 Co není: Roztřiď „Je to, nebo není?“ (šest věcí, tři koše), zlomek B2, host z Eleje (Sofistés 241d) a jeho řešení. Kapitola 02 Změna pod lupou: Změň jednu věc s banánem (shnije, mixér, někdo ho sní), argument převyprávěný, verš o jménech (B8, 38–41), Aristotelés (Fyzika I, 7) bez tvrzení, že odpovídal Parmenidovi, odkaz na Démokrita u otázky 6, dvojí čtení jako spor čtenářů (Měsíc B14, Kólótés a Plútarchos), Simplikios a otázka na konec. Myšlenky: Poznání (o tom, co není, se nedá mluvit) a Metafyzika (změna je záhada). Karta „Věty o ničem“. Kdo žil dřív? se Sókratem (vzdálenost). Sókratés a Zénón jednou větou v oddíle Doba a lidé; tam je i život (Ameiniás, Xenofanés „říkalo se“).
- **Dvojice.** Oba profily říkají v oddíle Doba a lidé: jestli jeden o druhém věděl, nevíme; proti sobě je postavil Platón asi o sto let později. Věta tím v celku zazněla dvakrát.
- **Kam dál** obou profilů jmenuje cestu 2 kartou bez odkazu („Cesta 2 · připravujeme“).

**Použité citáty** (každý na stránce jednou).

| Stránka | Jako citát | Jen nepřímo, bez citátu |
| --- | --- | --- |
| Hérakleitos | `herakleitos-b121`, `herakleitos-b12` (velký), `kratylos-402a` (v Odkryj), `metafyzika-1010a-zbyva`, `herakleitos-b51`, `herakleitos-b61`, `herakleitos-b53`, `herakleitos-b101` | kostky (`dl-ix-3-kostky`), Kratylos (`metafyzika-1010a-kratylos`), cesta nahoru a dolů (`herakleitos-b60`), slavná jména (`herakleitos-b40`), potápěč (`dl-ii-22-potapec`), Kratylos 439d–440b, Metafyzika 1005b |
| Parmenidés | `parmenides-b1-bohyne`, `parmenides-b8-ted` (velký), `parmenides-b2`, `sofistes-241d`, `parmenides-b8-jmena`, `fyzika-i-7`, `parmenides-b14`, `plutarchos-kolotes-1114b` | brána (`parmenides-b1-brana`), slib bohyně (`parmenides-b1-vsechno`), argument o vzniku (`parmenides-b8-jak`), konec řeči o pravdě (`parmenides-b8-mineni`, `parmenides-b8-predstihl`), setkání se Sókratem (`theaitetos-183e`), dva tábory (`theaitetos-181a`) |

Nepoužité zůstaly `herakleitos-b49a`, `herakleitos-b52`, `plutarchos-de-e-392b`, `seneca-ira-ii-10`, `parmenides-b8-zustava` a `parmenides-b6`; `herakleitos-b45` čeká na stránku otázky 5.

**Co se změnilo mimo profily.**

- `lide.yaml`: věta atributu u Hérakleita je „Do týchž řek vstupujeme, a pořád na nás tečou jiné vody.“ s pramenem `eusebios-pe-xv-20`; Hérakleitos má obraz `herakleitos-aic` a pramen `seneca-plac`; Parmenidés prameny `platon-sofistes-parmenides` a `aristoteles-fyzika-i`. Pole `kdo` a `proc` drží.
- `vztahy.yaml`: čtyři vztahy z Návrhu dat (Parmenidés – Sókratés, Aristotelés → Hérakleitos, Hérakleitos → Seneca a → Marcus Aurelius). Oddíl Doba a lidé se tím změnil u Sókrata (Znali se a přeli se), Aristotela (S kým se přel na dálku), Seneky a Marca Aurelia (Koho četl); přečteno, sedí.
- `zdroje.yaml`: obrázek `herakleitos-aic` (Art Institute of Chicago, inv. 1897.296, CC0; licence ověřena v API muzea i na stránce díla). Originál 2637 × 2250 px je v `~/Pictures/Atlas-originaly/`, v repozitáři zmenšenina 1280 × 1092 px zesvětlená gamou 1,9; dělá to nový skript `scripts/obrazek-zesvetli.mjs`.
- `KamDal.astro`: položka bez `href` je karta s čárkovaným okrajem a slovem „připravujeme“ (stránka, která teprve vznikne).
- Stránky otázek 6 a 7: jméno Parmenida u hlasu teď vede na profil (dřív profil neměl).
- Testy: nový `tests/e2e/celek7-profily.spec.ts` (bloky na 390 a 1440 px ve světlém i tmavém režimu, pravidla textu, deska, Mapa a čas, Doba a lidé na čtyřech starších stránkách), obě stránky v prohlídce, `vztahy.test.ts` (nové vztahy a žádný vztah mezi Hérakleitem a Parmenidem), `otazka.spec.ts` (odkaz na Parmenidův profil).

**Kde jsem se odchýlil od podkladů a zadání.**

- Koše prvního Roztřiď se jmenují „Tím, že se mění · Tím, že se nemění · Jak se to vezme“ a karet je osm (schéma víc nedovolí; vypadl vír nad výpustí).
- Žádné Roztřiď v profilech nemá vlastní kartu. U „co není“ by do ní student, kterému někdo zemřel, mohl napsat člověka.
- Kapitola o řece nezačíná na mostě, ale na břehu (první obrazovka očima studenta s myšlenkami na smrt).
- Výrok u kostek, Kratylos a potápěč jsou nepřímo, aby v úvodu a na konci nestály tři citáty za sebou; věta o Hermodórovi je citát celý.
- Banán má třetí podmínku (mixér: látka zůstane, tvar ne). Karta „Věty o ničem“ má místo „Nic se nestalo“ nápis „Žádný signál“: zůstává u nápisů.
- Aristotelés u Parmenida „se na změnu díval jinak“; věta netvrdí, že Parmenidovi odpovídal (Fyzika I, 2–3 a 8 nečteny).
- Disciplína „Metafyzika“ je na profilu poprvé; jméno je ze stránky otázky 6 („Metafyzika, ontologie“).
- Kam dál jmenuje cestu 2 bez odkazu; komponenta to dřív neuměla.

**Co si nese P8.**

- Zlomek B12 smí v cestě zaznít jednou a naposled. Aristotelova věta `metafyzika-1010a-zbyva` a `fyzika-i-7` jsou v profilech jednou; `parmenides-b8-jak` a `theaitetos-181a` v profilech jako citát nejsou a cesta je smí mít doslova.
- Věta „jestli jeden o druhém věděl, nevíme“ už zazněla dvakrát: cesta ji neopakuje, most mezi oběma postaví Platónovou přetahovanou (`theaitetos-181a`).
- Banán je v profilu Parmenida (blok `parmenides-banan`). Krok 3 cesty ho neopakuje doslova: argument, proč je změna záhada, postaví na věci cesty (prkno lodi) a na profil odkáže.
- Scény profilů (kostky, Hermodóros, dvě znění věty o řece, Kratylos, luk, brána, věty o ničem) cesta nevypráví; smí na ně odkázat.
- Po založení cesty: doplnit `href` u první položky Kam dál v obou profilech a upravit test `celek7-profily.spec.ts` (čeká na kartu `.polozka--ceka`); vstupy v hlavičkách všech filozofů a hlasů cesty a stránky otázky 5, karty v Lidech, počet cest na Domů, počet kreseb v dílně. Celé testy pustit hned po přidání.
- List pro učitele: doplnit část o cestě a o stránce otázky 5 (seznam je na konci `ucitel/celek-7.md` a v podkladech v oddíle Co patří učiteli) a ověřit kontakty.

**Co čeká na autora.**

1. Obraz Parmenida: profil je bez obrazu. Když ověříš bránu ve Velii na Wikimedia Commons, stačí připsat odkaz do zadání P8.
2. Úvod Hérakleita: kletba nad Efesem stojí na první obrazovce jako citát. Je to podle zadání; kdyby měla přijít až za větu o knize, je to jedna výměna.
3. Výřez obrazu na desce (střed „45 % 30 %“, na šířku „45 % 25 %“) je odhad.
4. Karta „připravujeme“ v Kam dál: nový prvek rozhraní. Kdyby se nelíbil, P8 ho odkazem stejně nahradí; komponenta ho umí dál.
5. Originály obrázků jsou nově v `~/Pictures/Atlas-originaly/` (mimo repozitář). Jestli mají být jinde, řekni.

**Kontrola.** `npm test` prošel celý: 502 testů dat a 388 testů v prohlížeči (z toho 12 nových v `celek7-profily.spec.ts` a osm v prohlídce). První běh skončil 386 z 388: dva testy stránek otázek 6 a 7 čekaly Parmenida bez odkazu na profil; po úpravě seznamu prošlo všechno a známý test „cesta: průchod, Kam dál z bloku…“ nespadl. List pro učitele v sestaveném webu není (hledáno v `dist/`). Náhled `npm run dev` je restartovaný. Snímky obou profilů na 390 a 1440 px ve světlém i tmavém režimu jsou v `Claude outputs/snimky-celek-7/`.

## Zadání P8: Cesta 2, kresba a stránka velké otázky 5

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Krok je největší v celku: sedm kroků cesty, nová kresba s pohybem, Spor se dvěma citlivými větami, nový případ ze čtyř studií, Návrat a stránka otázky se sedmi hlasy. Skoro v každém kroku je třeba držet, kdo co napsal o věci a kdo o člověku.

První čtyři řádky zadání jsou vyplněné podle odpovědí autora a podle doporučení podkladů; přepiš je, kdyby ses rozhodl jinak.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-7. Podklady (P6) a profily Hérakleita a Parmenida (P7) jsou hotové.

Kresba s pohybem (loď po prknech a druhá loď): ano.
Hlasy na stránce otázky 5: sedm, s Epiktétem; Plútarchos zůstává v rezervě.
Obrázek ke vstupu cesty: číše s loděmi z Metropolitního muzea, inv. 56.171.36. Se stažením souhlasím.
Obrázek Parmenida: bez obrazu, pokud sem nepřipíšu odkaz na soubor z Wikimedia Commons, u kterého jsem ověřil licenci: 

Napiš cestu 2 „Jsem pořád tentýž, když se měním?“ a stránku velké otázky 5 „Kdo vlastně jsem?“ podle skillu atlas-cesta; kresbu s pohybem postav podle skillu atlas-komponenta. Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md;
- v docs/plany/celek-7.md tabulku stavu a oddíly „Po P6“ a „Po P7“;
- z docs/podklady/celek-7-jsem-porad-tentyz.md: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), z Nejsilnějších příběhů body 1 až 3, 8, 9 a 11 až 13, celé oddíly Tvrzení: cesta 2, Velká otázka 5 a Citlivá místa, z tabulky Citáty řádky 1, 4 až 6, 8, 22, 32 až 60 a 63 až 64, Návrh dat, z Obrázků Vstup cesty, Rozpory a rozhodnutí a Odpovědi autora. Oddíly Tvrzení: Hérakleitos a Tvrzení: Parmenidés nečti: co z nich cesta potřebuje, je v oddíle Po P7;
- oba profily celé (src/content/osobnosti/herakleitos.mdx a parmenides.mdx): cesta je nesmí opakovat;
- jako vzor cesty src/content/cesty/proc-se-bat-smrti.mdx a z jejích kroků jen ty, které potřebuješ (krok se Sporem, krok s kresbou, poslední krok se Závěrem cesty), její Návrat src/content/bloky/cesta8-navrat.yaml a jako vzor stránky otázky src/content/otazky/ma-zivot-smysl.mdx;
- ucitel/celek-7.md, abys věděl, co už v něm je.

Co cesta má mít:

1. Sedm kroků podle Návrhu kroků v podkladech: loď · řeka · proč je změna záhada · loď po prknech · a co člověk · Spor · jak staré je tvoje tělo. Čas na štítku spočítej skriptem scripts/slova-cesta.mjs.
2. Vstup lodí: „Plútarchos vypráví…“ (Théseus 23). Plútarchos neříká, že byla vyměněna všechna prkna, a druhou loď nezná; cesta mu to nepřipíše. Loď z Délu a Sókratovo čekání jen jednou větou s odkazem na portrét Sókrata. První blok je vlastní pokus studenta podle podkladů a je začátkem cesty pro „Na začátku × Teď“.
3. Řeka je první odpověď, ne scéna. Zlomek B12 tu zazní jako citát podruhé a naposled v celku. Kostky, Hermodóra, dvě znění věty, Kratyla, luk a zlomek o válce vypráví profil: neopakuj je, odkaž. Že známé znění „dvakrát“ je Platónovo podání, smí zaznít jednou větou. „Jsme i nejsme“ (B49a) jen jako pozdější podoba věty, ne jako Hérakleitova odpověď na otázku cesty.
4. Proč je změna záhada: argument Parmenidovy bohyně (smí doslova `parmenides-b8-jak`) a Aristotelova odpověď. Banán má profil Parmenida jako blok: tady ho neopakuj, postav argument na prkně lodi nebo na jiné věci cesty. V básni mluví bohyně; cesta neříká „změnu popírá“ ani „nepopírá“ a mezi čteními nerozhoduje. Větu „jestli jeden o druhém věděl, nevíme“ už mají oba profily: most mezi nimi postav Platónovou přetahovanou (`theaitetos-181a`), ne touž větou potřetí. Sem patří i rozdíl tentýž × stejný.
5. Loď po prknech s kresbou: student vyměňuje prkna, druhá loď se skládá ze starých. Pramen je Plútarchos (výměna prken, spor filozofů) a Hobbes (druhá loď, 1656; jméno bez odkazu); výměna všech prken je náš přídavek a popis pohledu to řekne. Kresba podle pravidel v docs/pouceni.md (pohyb jde zastavit, při omezeném pohybu stojí, text pod ní říká totéž slovy, na telefonu čitelné popisky). Neptej se „která je pravá“, ale „která je Théseova“. Kresbu mi ukaž snímkem dřív, než ji popíšeš jako hotovou.
6. A co člověk: dlužník a pozvaný host („hádanka, kterou staří Řekové znali z komedií“; bití ne), Diotima v Symposiu. Slova o člověku bere cesta jen od těch, kdo je napsali; Hérakleitovi ani Parmenidovi otázku osobní identity nevkládej. Paměť a vědomí jako měřítko nech pozdějším obdobím (Locke, Hume: jména bez odkazu, nejvýš jednou větou).
7. Spor Seneca × Plútarchos: dva čtenáři jedné řeky s opačným závěrem. Scéna netvrdí, že jeden četl druhého. Podle odpovědi autora patří do Sporu Senekův závěr o těle a o strachu ze smrti (`seneca-ep-58-23-smrt`), s otázkou hned za ním, s Plútarchovou odpovědí a s odkazem na cestu 8, a souvislost Plútarchova argumentu (`de-sera-559-obec`). Scénu čti očima studenta po ztrátě. Obě strany odpoví na nejsilnější námitku druhé; na telefonu čte student jednu stranu celou před druhou.
8. Nový případ: jak staré je tvoje tělo (uhlík z jaderných zkoušek, čtyři studie; „tělo se vymění za sedm let“ je pověra, kterou případ opraví). Čísla ověř v plném textu studií sám, žádné číslo mimo podklady. Odkud jsou tkáně, patří učiteli. Případ je o buňkách, ne o tom, kým kdo je.
9. Závěr cesty se ptá na pravidlo („Podle čeho poznáš, že je něco pořád totéž?“), ne na studentův život. Každá odpověď z prvního bloku má na konci zastánce, a spojenec je jiný myslitel než filozof cesty; projdi možnosti jednu po druhé.
10. Návrat: lístek na koncert oblíbené kapely za deset let (studie z roku 2013), úzce o odhadu, ne o tom, kým kdo bude; žádné „to tě přejde“. Karta Zkus to žít cesty je jiná než karty profilů (věc, která je táž, ačkoli se v ní vyměnilo všechno).
11. Citlivá místa: pravidla 1 až 7 a tabulka míst očima pěti studentů z podkladů. Příklady změny jsou cizí nebo neutrální; žádné pole na psaní o vlastní změně; slovo „pravý“ se nepojí s člověkem; nemoc, demence, závislost a úraz nejsou příkladem; věty, které tělem pohrdají, cesta necituje. Řádek s pomocí do studentského textu nepatří.

Stránka velké otázky 5: úvodní případ „Kdo tě zná líp?“ (jiného druhu než nový případ cesty) a sedm hlasů podle podkladů: Hérakleitos (`herakleitos-b45`), Sókratés, Platón, Aristotelés, Epikúros, Marcus Aurelius a Epiktétos (`rozpravy-ii-10-1`). Odpověď hlasu má nejvýš dvě věty a výklad ověř v tomtéž díle a místě, ze kterého je citát. Každý hlas se pozná a nezmenšuje se to, čím se liší; hlasy, které říkají „nejsem své tělo“, mají vedle sebe hlas, pro který k člověku tělo patří. Stránka nikomu neříká, kdo je.

Data a co se změní jinde: cesta a její filozofové v datech podle Návrhu dat; nové osoby nepřidávej (Hobbes, Locke, Hume, Epicharmos, Diotima a Kratylos zůstanou v textu bez odkazu). V obou profilech doplň odkaz u první položky Kam dál a uprav test tests/e2e/celek7-profily.spec.ts, který čeká kartu bez odkazu. Nová cesta a nový hlas mění stránky, které nikdo neotevřel: vstupy v hlavičkách všech filozofů a hlasů, karty v Lidech, počet cest na Domů, počet kreseb v dílně. Celé testy pusť hned po přidání, ne až na konci. Obrázek stáhni jen se souhlasem výše: předtím ověř licenci v záznamu muzea a napiš mi název souboru, zdroj a velikost; originál do ~/Pictures/Atlas-originaly/, do public/obrazky/ kopii zmenšenou na 1280 px. Po změně dat restartuj běžící npm run dev.

Doplň ucitel/celek-7.md o cestu a stránku otázky 5: co Plútarchos o lodi říká a co ne; dlužník a co je z něj doložené; souvislost Senekovy a Plútarchovy věty; odkud jsou tkáně ve studiích o buňkách a co studie říkají o nemocech; „iluze konce dějin“ a její meze; co prameny hlasů říkají a atlas necituje (Epiktétos II, 10, 7 a 17; Marcus Aurelius II, 2; Dión a Theón jednou větou); co dělat, když student řekne „už to nejsem já“. Kontakty ověř při psaní (Linka bezpečí, Centrum Anabell, poradna pro pozůstalé, poradna pro dospívající, kteří řeší orientaci nebo identitu) a k válečné zkušenosti žáků najdi české doporučení, o které se oddíl o zlomku B53 může opřít. Ověř, že se soubor nedostane do sestaveného webu.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně); snímky kroků cesty s odpověďmi i bez nich (scripts/snimky-cesta.mjs) a stránky otázky (scripts/snimky-listy.mjs) na 390 a 1440 px ve světlém i tmavém režimu; kresba na obou šířkách a s omezeným pohybem; průchod klávesnicí (scripts/kontrola-fokus.mjs); závěr „Na začátku × Teď“; Návrat v deníku.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-7.md oddíl „Po P8“ (co cesta a stránka mají, použité citáty a kolikrát který v celku zazněl, co se změnilo mimo ně, co si nese revize, co čeká na autora), připrav tam zadání P10 (revize celku podle skillu atlas-revize) s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-7.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md (Po P8) a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co cesta a stránka mají, kde ses od podkladů odchýlil a proč a co čeká na mé rozhodnutí, a pošli snímek vstupu, kresby, Sporu a stránky otázky.
```
