# Plán větve celek-7: „Jsem pořád tentýž, když se měním?“

Celek 7: profily Hérakleita a Parmenida, cesta 2 „Jsem pořád tentýž, když se měním?“ (období 1, velká otázka 5 „Kdo vlastně jsem?“) a stránka velké otázky 5. Rozsah vybral autor 9. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; cesta 7 s Diogenem, Kratétem a Hipparchií; cesta 34 se Senekou a Marcem Aureliem). Cestou 2 budou hotové všechny čtyři cesty klasického Řecka a atlas dostane první předsókratiky. Otázka 5 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-7-jsem-porad-tentyz.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 9. 10. 2026 (oddíl Po P6) |
| P7 | Profily Hérakleita a Parmenida | hotovo 9. 10. 2026 (oddíl Po P7) |
| P8 | Cesta 2 „Jsem pořád tentýž, když se měním?“, kresba a stránka velké otázky 5 | hotovo 10. 10. 2026 (oddíl Po P8) |
| P10 | Revize celku | čeká; zadání je níže |
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

## Po P8 (10. 10. 2026)

Cesta 2 je v `src/content/cesty/jsem-porad-tentyz-kdyz-se-menim.mdx` a ve složce téhož jména (sedm kroků), její bloky v `src/content/bloky/cesta2-*.yaml`, kresba v `src/lib/lod.ts` a `src/components/ostrovy/Lod.svelte`, stránka otázky 5 v `src/content/otazky/kdo-vlastne-jsem.mdx`. List pro učitele `ucitel/celek-7.md` má nově část o cestě a o stránce otázky. Zadání P8 je v `docs/archiv/zadani/celek-7.md`.

**Co cesta má.** Sedm kroků, na štítku 34 minut (`node scripts/slova-cesta.mjs jsem-porad-tentyz-kdyz-se-menim` dává 33,9). Filozofové cesty v datech jsou Hérakleitos a Parmenidés.

| Krok | Co v něm je | Blok |
| --- | --- | --- |
| 1 Loď | „Plútarchos vypráví…“: loď, kterou Athéňané uchovávali, a spor filozofů; obraz číše s loděmi z Met. Loď z Délu a Sókratovo čekání jednou větou s odkazem na portrét. Poslední prkno si student domyslí sám („Představ si…“). | Volba „Je to pořád Théseova loď?“ (čtyři tahy: držet se toho, že trvala · držet se dřeva · hledat hranici · rozdělit otázku); začátek cesty |
| 2 Řeka | Řeka jako první odpověď: zlomek B12 citátem, známé znění jednou větou s odkazem na profil, „jsme i nejsme“ jako pozdější podoba. | Odkryj „Platí věta o řece i o lodi?“; ve srovnání Aristotelova věta o řekách (Politika III, 3) |
| 3 Proč je změna záhada | Otázka bohyně postavená na prkně lodi (`parmenides-b8-jak`), Platónova přetahovaná (`theaitetos-181a`), Aristotelova odpověď (co při změně zůstává, `kategorie-4a`), rozdíl tentýž × stejný. | Roztřiď „O kolika věcech ta věta mluví?“ (šest vět, koše O jedné · O dvou · Záleží, co počítáš), bez vlastní karty |
| 4 Loď po prknech | Kresba s pohybem; Hobbes a druhá loď (1656), výměna všech prken řečená jako náš přídavek. | Volba „Která z nich je Théseova?“ (nepřerušená · z původního dřeva · obě · žádná) |
| 5 A co člověk? | Dlužník a pozvaný host z komedií, jak je vypráví Plútarchos (`de-sera-559-dluznik`); bití nikde. | Odkryj (co odpovíš hostovi a dlužníkovi), „Porovnat s Diotimou“: `symposion-207d`, 207e nepřímo, `symposion-208b` |
| 6 Dva čtenáři jedné řeky | Seneca (`seneca-ep-58-22`), jeho závěr o těle a strachu ze smrti (`seneca-ep-58-23-smrt`) s otázkou hned za ním, větou, že o ztrátě blízkého nemluví, a odkazem na cestu 8; Plútarchova věta o obci (`de-sera-559-obec`) s otázkou. | Spor „Je člověk po letech tentýž?“: Seneca první, Plútarchos druhý, každý tři argumenty; scéna netvrdí, že jeden četl druhého |
| 7 Jak staré je tvoje tělo | Čtyři studie o stáří buněk (uhlík z jaderných zkoušek); „za sedm let se tělo vymění“ jako pověra. Pak „Kdo je na tvé straně“: zastánci čtyř odpovědí z kroku 1, věta, kterou Plútarchos svěřil Ammóniovi (`de-e-392d-mnozi`), Locke a Hume jednou větou, karta Zkus to žít „Táž, a všechno je v ní jiné“. | Volba „Které pravidlo si z toho vezmeš?“ s vlastním Kam dál na kotvu; Závěr cesty „Podle čeho poznáš, že je něco pořád totéž? Napiš svoje pravidlo.“ |

- **Kresba „Loď po prknech“** (`<Lod />`, na rámu `Kresba.svelte`): trup z 24 prken ve třech řadách, posuvník 0–24 „Posuň: vyměň prkna“, dva pohledy (Výměna prken · Druhá loď). Stará prkna odcházejí na hromadu na břehu, v druhém pohledu se z nich skládá loď na podpěrách. Samo se hýbe jen moře; jde zastavit a při omezeném pohybu stojí. Text pod kresbou říká stav slovy a u posledního prkna říká, že tohle už Plútarchos nevypráví. Nic neukládá. Je i v dílně bloků.
- **Návrat** (`cesta2-navrat`, „Lístek na koncert“): kolik bys dnes dal za lístek na kapelu, kterou máš rád teď, kdyby hrála za deset let. Bez čísel a bez studie.
- **Stránka otázky 5.** Případ „Kdo tě zná líp?“: spolužačka, babička a trenér o tobě řeknou každý něco jiného a ty sám ještě něco čtvrtého. Sedm hlasů v pořadí podle narození: Hérakleitos (`herakleitos-b45`), Sókratés (`faidros-229e`), Platón (`faidon-115c`), Aristotelés (`etika-1166a`), Epikúros (`herodotos-64`), Epiktétos (`rozpravy-ii-10-1`), Marcus Aurelius (`hovory-xii-3`). Odpovědi mají nejvýš dvě věty a jsou psané ke studentovi. Hlasy, které říkají „nejsi své tělo“ (Platón, Marcus Aurelius), mají vedle sebe Epikúra, podle kterého jsi tělo i duše. Stránka odkazuje na cestu 2.

**Použité citáty a kolikrát který v celku zazněl.** Celek = oba profily, cesta 2 a stránka otázky 5.

| Kde | Jako citát | Kolikrát v celku |
| --- | --- | --- |
| Krok 2 | `herakleitos-b12` | dvakrát (velký citát profilu a krok 2); víckrát už ne |
| Krok 2 (srovnání v Odkryj) | `politika-1276a-reky` | jednou |
| Krok 3 | `parmenides-b8-jak`, `theaitetos-181a`, `kategorie-4a` | jednou; první dva má profil Parmenida jen nepřímo |
| Krok 5 | `de-sera-559-dluznik`, `symposion-207d`, `symposion-208b` | jednou |
| Krok 6 | `seneca-ep-58-22`, `seneca-ep-58-23-smrt`, `de-sera-559-obec` | jednou |
| Krok 7 | `de-e-392d-mnozi` | jednou |
| Otázka 5 | `herakleitos-b45`, `faidros-229e`, `faidon-115c`, `etika-1166a`, `herodotos-64`, `rozpravy-ii-10-1`, `hovory-xii-3` | jednou; žádný není jinde v atlasu |

Jen nepřímo, bez citátu: Théseus 23 (`plutarchos-theseus-23`), Faidón 58a, `herakleitos-b49a`, `symposion-207e`, Fyzika I, 7, `politika-1276b-sbor`, `seneca-ep-58-23`, `de-sera-559-zmeny`, `-jeden` a `-reka` (argumenty Sporu), `comm-not-1083-dvoji`, Hobbes, Epicharmos, `herakleitos-b101` (odkaz na profil). Žádný krok nemá víc než tři citáty.

**Co se změnilo mimo cestu a stránku.**

- `zdroje.yaml`: obrázek `cise-lode-met` (Metropolitan Museum of Art, inv. 56.171.36, Open Access, Public Domain; licence ověřena v záznamu muzea i v jeho API), poznámka u pramene `met-kylix-lode`, pramen `marcus-hovory-promena` nese i zápis XII, 4. Originál snímku `DP278403.jpg` (1955 × 1607 px, 1,66 MB) je v `~/Pictures/Atlas-originaly/`, v repozitáři výřez 1280 × 960 px `public/obrazky/cise-lode-met.jpg`; dělá ho nový skript `scripts/obrazek-vyrez.mjs`.
- Profily Hérakleita a Parmenida: první položka Kam dál vede na cestu 2 (karta „připravujeme“ zmizela).
- Vstupy složené z dat: cesta 2 v hlavičkách Hérakleita a Parmenida a na jejich kartách v Lidech; velká otázka 5 nově v hlavičkách Sókrata, Platóna, Aristotela, Epikúra, Epiktéta a Marca Aurelia (Aristotelés má šest otázek, Epikúros pět); Domů „zbývá 6 cest“; dílna bloků má deset kreseb.
- `scripts/slova-cesta.mjs` počítá i blok v posledním kroku před závěrečným pravidlem (dřív ho vynechal). Časy ostatních cest se nezměnily.
- `docs/design.md`: kresba Loď po prknech v Komponentách, věta o cestě 2 v oddíle Cesta.
- Testy: nové `tests/data/lod.test.ts` (9), `tests/e2e/lod.spec.ts` (5) a `tests/e2e/cesta2.spec.ts` (5: průchod s odpověďmi na telefonu, průchod bez odkrytí s pravidly textu a počty citátů, Návrat v deníku, stránka otázky 5, vstupy). Upravené: `cesta.spec.ts`, `pruchod.spec.ts`, `prohlidka.spec.ts`, `ctverec.spec.ts`, `domu.spec.ts`, `celek7-profily.spec.ts`, `otazka.spec.ts`, `platon.spec.ts`.

**Kde jsem se odchýlil od podkladů a zadání.** Důvody jsou v `docs/rozhodnuti.md` (10. 10. 2026).

- Návrat je bez studie z roku 2013 a bez jejích čísel; studie je v listu pro učitele. Návrat nesmí mít prameny (schéma a test) a číslo by z odhadu udělalo poučení.
- Krok 2 má Odkryj „platí věta o řece i o lodi?“ s Aristotelovou větou z Politiky, ne dvě znění věty a Kratyla (to vypráví profil).
- Krok 3 třídí věty se slovem „stejný“, bez vlastní karty; krok 5 má Odkryj místo Roztřiď a druhá Diotimina věta je nepřímo (strop tří citátů).
- „Tentýž Plútarchos“ (věta Ammóniova) není druhý blok kroku 6, ale zastánce v kroku 7.
- Volba v kroku 7 se ptá na pravidlo, ne „pomáhá ti to?“.
- Kresba má posuvník, nic neukládá, nemá stěžeň ani vesla a je to model o 24 prknech.
- Obraz vstupu je výřez jiného snímku téhož záznamu a popisek mluví jen o Hérakleitovi.
- `filozofove` cesty jsou jen Hérakleitos a Parmenidés; Seneca a Plútarchos tedy cestu 2 v hlavičce nemají.
- Hlas Marca Aurelia se opírá i o zápis XII, 4; hlasy nemluví v první osobě.
- Hobbes má v kroku 7 několik vět (zastánce dvou odpovědí), Locke a Hume jednu.
- V podkladech je u studie z roku 2013 špatně vzorek pokusu s lístky (viz `k-overeni.md`, Po P8); list pro učitele ho má podle studie.

**Co si nese revize (P10).**

- Citlivá místa očima pěti studentů z podkladů, hlavně krok 6 (Senekův závěr na telefonu, student po ztrátě), krok 5 (host a dlužník: nikdo nikoho nebije), krok 7 (buňky nejsou o tom, kým kdo je) a stránka otázky 5 (nikomu neříká, kdo je).
- Kdo co napsal o věci a kdo o člověku: Hérakleitos a Parmenidés o člověku v cestě nemluví; Plútarchos neříká „všechna prkna“ ani druhou loď; přístav je náš obraz.
- Čísla kroku 7 proti studiím (jsou v listu pro učitele i s místem ve studii) a body Po P8 v `k-overeni.md`: Faidros 229b–c, Politika 1276a–b, Marcus XII, 4 v publikovaném překladu, linka 116 123.
- Zastánci čtyř odpovědí z kroku 1 v kroku 7 jeden po druhém; všechny kombinace bloků; Spor na telefonu (Seneca první, Plútarchos má poslední slovo).
- Opakování v celku: B12 dvakrát, věta o dvojici dvakrát (jen profily), banán jen odkazem.
- Kontrola fokusu skutečným tabulátorem (skript hlásí dvě pole pod lištou, viz `k-overeni.md`).
- Délka: 34 minut, krok 7 je nejdelší (případ, Volba, zastánci, karta, závěr).

**Co čeká na autora.**

1. Kresba Loď po prknech: podívat se na ni (snímky v `Claude outputs/snimky-celek-7/p8/`, živě v kroku 4 a v dílně bloků). Dokud ji neuvidíš, není hotová.
2. Seneca a Plútarchos nejsou filozofové cesty v datech. Kdyby být měli, dostanou cestu 2 do hlavičky a na kartu v Lidech; u Seneky by stála před cestou 8.
3. Návrat bez studie: kdyby měl číslo ze studie mít, muselo by se změnit pravidlo, že Návrat nemá prameny.
4. Délka 34 minut a krok 7. Jde rozdělit na krok 7 (buňky a Volba) a krok 8 (kdo je na tvé straně a závěr); zadání chtělo sedm kroků, proto jsem to neudělal.
5. Obraz vstupu: výřez a popisek. Obraz Parmenida dál chybí.
6. Aristotelés má v hlavičce šest velkých otázek. Je to důsledek hlasu; stojí za pohled na telefonu.
7. Poradna Vigvam má podle svého webu plnou kapacitu a na kontaktní stránce překlep v čísle. V listu pro učitele to je; rozhodni, jestli ji tam nechat.

**Kontrola.** `npm test` prošel celý: 521 testů dat a 411 testů v prohlížeči (z toho 5 nových v `cesta2.spec.ts`, 5 v `lod.spec.ts` a 8 v prohlídce). Hned po přidání cesty a hlasů spadlo pět testů vstupů (`otazka.spec.ts`, `platon.spec.ts`): čekaly hlavičky bez otázky 5; po úpravě seznamů prošly. Známý test „cesta: průchod, Kam dál z bloku…“ spadl v jednom celém běhu a samostatně prošel (36 z 36); v posledním celém běhu nespadl. List pro učitele v sestaveném webu není (hledáno v `dist/`). Náhled `npm run dev` je restartovaný. Průchod klávesnicí: `scripts/kontrola-fokus.mjs` a skutečný tabulátor na 390 a 1440 px. Závěr „Na začátku × Teď“ a Návrat v deníku hlídá `cesta2.spec.ts`. Snímky kroků s odpověďmi i bez nich, kresby a stránky otázky jsou v `Claude outputs/snimky-celek-7/p8/`.

## Zadání P10: Revize celku 7

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Revize čte celek o tom, kdo jsem, očima studentů, kterých se změna bolestně týká, a v každé větě hlídá, kdo co napsal o věci a kdo o člověku; na menším modelu ani s nižším úsilím bych ji nepouštěl. Zadání počítá s úsporným čtením a s tím, že se nálezy průběžně neschvalují.

První řádky zadání jsou místo pro tvoje odpovědi na body z oddílu „Po P8 › Co čeká na autora“. Co necháš prázdné, bere revize jako otevřené a dá k tomu doporučení.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-7. Profily Hérakleita a Parmenida, cesta 2, kresba Loď po prknech a stránka otázky 5 jsou v ní hotové a commitnuté.

Co jsem rozhodl po P8 (prázdné = otevřené, chci doporučení):
- Kresba Loď po prknech (viděl jsem ji): 
- Seneca a Plútarchos jako filozofové cesty v datech: 
- Návrat bez studie z roku 2013: 
- Délka 34 minut a dlouhý krok 7 (nechat / rozdělit na dva kroky): 
- Obraz vstupu (výřez a popisek) a obraz Parmenida: 
- Poradna Vigvam v listu pro učitele: 

Udělej revizi celku 7 podle skillu atlas-revize. Do celku patří:
- profily Hérakleita a Parmenida (src/content/osobnosti/herakleitos.mdx, parmenides.mdx, bloky herakleitos-*.yaml a parmenides-*.yaml);
- cesta 2 „Jsem pořád tentýž, když se měním?“ (přehled, sedm kroků, bloky cesta2-*.yaml, Odkryj v krocích 2 a 5, případ pro Návrat);
- kresba Loď po prknech v kroku 4 (src/lib/lod.ts, src/components/ostrovy/Lod.svelte);
- stránka velké otázky 5 „Kdo vlastně jsem?“ (src/content/otazky/kdo-vlastne-jsem.mdx);
- list pro učitele ucitel/celek-7.md;
- propojení: hlavičky a Kam dál obou profilů, přehled otázek, Lidé, Domů, dílna bloků; nové vstupy u Sókrata, Platóna, Aristotela, Epikúra, Epiktéta a Marca Aurelia (hlasy otázky 5); Doba a lidé u Sókrata, Aristotela, Seneky a Marca Aurelia (vztahy z P7); stránky otázek 6 a 7 (Parmenidés s odkazem na profil).

Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md, docs/pouceni.md;
- v docs/plany/celek-7.md tabulku stavu a oddíly „Po P7“ a „Po P8“;
- docs/podklady/celek-7-jsem-porad-tentyz.md: je to měřítko revize. Čti vždy oddíl k tomu, co právě kontroluješ (Citlivá místa celá a pozorně; Tvrzení: Hérakleitos; Tvrzení: Parmenidés; Tvrzení: cesta 2; Velká otázka 5; Citáty), ne celý list naráz;
- z docs/podklady/k-overeni.md části Po P6, Po P7 a Po P8 celku 7; z docs/rozhodnuti.md záznamy z 9. a 10. 10. 2026 k celku 7;
- v docs/design.md oddíly Cesta, Velká otázka, Spor a z Komponent Kresbu s pohybem (jen Rám a Loď po prknech);
- jako vzor záznamu jen začátek docs/revize/celek-6-2026-10-09.md (formát a hloubka nálezů).
Podklady a obsah celků 1 až 6 jinak nečti; z portrétů Sókrata, Platóna, Aristotela a Seneky a z cesty 8 jen místa, na která celek 7 odkazuje.

Na co se dívej zvlášť:

1. Student, kterého se změna bolestně týká. Projdi profily, cestu a stránku otázky pětkrát, očima pěti studentů z podkladů (Citlivá místa): kdo se mění tak, že to bolí (tělo, nemoc, úraz, příjem potravy); kdo řeší svou genderovou identitu nebo orientaci; komu se změnil blízký (demence, závislost, těžká nemoc); kdo je po ztrátě nebo traumatu; adopce, stěhování, dvojí domov a jazyk. Čti první obrazovku každého kroku a kapitoly na telefonu, všechny zpětné vazby (i zavřené „Co kdybys zvolil jinak?“), texty pod kresbou, obě karty Zkus to žít profilů i kartu cesty a Návrat. Nikde se slovo „pravý“ nepojí s člověkem, nikde „to přejde“, nikde pole na psaní o vlastní změně, nikde nemoc, demence, závislost nebo úraz jako příklad, nikde věta, která tělem pohrdá. Zvlášť: krok 6 (Senekův závěr o těle a strachu ze smrti: stojí otázka a Plútarchova odpověď na téže obrazovce? co čte student po ztrátě?), krok 5 (host a dlužník), krok 7 (buňky nejsou o tom, kým kdo je), Roztřiď v kroku 3 a stránka otázky 5.
2. Kdo co napsal o věci a kdo o člověku. Hérakleitovi ani Parmenidovi cesta nevkládá otázku osobní identity. Plútarchos neříká, že vyměnili všechna prkna, nezná druhou loď a neříká, kde loď stála: je z kroku 1, z kroku 4 a z textu pod kresbou jasné, co je jeho, co Hobbesovo a co naše (poslední prkno, přístav)? V básni mluví bohyně; nikde „změnu popírá“ ani „nepopírá“. Paměť a vědomí jako měřítko nikde kromě jedné věty o Lockovi a Humovi.
3. Znění proti pramenům. Porovnej každou větu s tabulkami podkladů; „asi“ zůstává „asi“. Zvlášť: zlomek B12 a „jsme i nejsme“ jako pozdější podoba; Platónova přetahovaná; Aristotelés v Politice (řeky a obec; v P8 nečteno znovu, přečti 1276a–b) a v Kategoriích; dlužník podle Plútarcha a Epicharmos; Diotima (207d–208b); Seneca Dopis 58, 22–23 a co v něm je o Hérakleitovi; Plútarchos O pozdních trestech 559 a O delfském E 392; stoikové jen „jak o nich píše Plútarchos“; Hobbes.
4. Čísla kroku 7. Každé číslo o buňkách porovnej s podklady a s oddílem „Jak staré je tvoje tělo“ v listu pro učitele (tam je i místo ve studii). Říká text, co se měřilo a na kom, bez věty o nemocech a bez závěru o tom, kým kdo je? Je „sedm let“ řečeno jako pověra?
5. Spor na telefonu. Seneca stojí první: odpovídá jen na to, co už zaznělo, nebo námitku uvádí („Plútarchos namítá, že…“)? Poslední slovo má Plútarchos: má na ně Seneca odpověď ve svých argumentech? Je postoj každé strany stejně silný jako její citát? Netvrdí scéna, že jeden četl druhého?
6. Kresba Loď po prknech. Říká text kroku i text pod kresbou totéž co ona? Je v ní všechno dřevo vyměnitelné? Jsou popisky čitelné na telefonu a nepřekrývají se v žádném stavu (0, 1, 12, 23, 24 v obou pohledech)? Jde posuvník i přepínač klávesnicí, stojí moře při omezeném pohybu a po zastavení? Neprozrazuje kresba odpověď Volby pod sebou?
7. Kdo dá za pravdu komu. Krok 7 slibuje zastánce každé ze čtyř odpovědí z kroku 1: projdi je jednu po druhé. Je zastánce jiný myslitel než Hérakleitos a Parmenidés? Najde ho i student, který v kroku 4 zvolil „žádná“ nebo „obě“? Řekne krok, že souhlasit student nemusí?
8. Stránka otázky 5. Pozná se každý ze sedmi hlasů a nezmenšuje se, čím se liší? Má odpověď nejvýš dvě věty? Výklad každého hlasu ověř v tomtéž díle a místě jako citát (Faidros 229b–230a kvůli „procházce za město“; Marcus Aurelius XII, 3–4 v publikovaném překladu; Epiktétos II, 10 bez § 7 a § 17; Aristotelés 1166a bez pokračování o špatných lidech). Stojí vedle hlasů „nejsi své tělo“ hlas, pro který tělo k člověku patří? Neříká stránka nikomu, kdo je? Je úvodní případ jiného druhu než případy cesty a Návrat?
9. Opakování. Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku (seznamy jsou v oddílech Po P7 a Po P8): B12 dvakrát, věta „jestli jeden o druhém věděl, nevíme“ dvakrát a jen v profilech, banán jen v profilu. Projdi profily, cestu a stránku otázky za sebou, jak je projde student. Co profily vyprávějí (kostky, Hermodóros, dvě znění, Kratylos, luk, brána, věty o ničem), cesta neopakuje.
10. Každá kombinace. Čtyři možnosti každé ze tří Voleb cesty, šest vět ve třech koších, oba Odkryj, Spor z obou stran, tři odpovědi Návratu, závěr „Na začátku × Teď“ s panelem i bez něj; bloky obou profilů (dva Roztřiď, dvě Změň jednu věc, Volba, Odkryj, dvakrát Kdo žil dřív?).
11. Co se skládá z dat. Hlavičky osmi stránek (Hérakleitos, Parmenidés a šest hlasů), Doba a lidé, karty v Lidech, bod cesty na mapě (Efesos kolem roku 500 př. n. l.), Kam dál, řádek cesty u otázky 5 v přehledu, Domů, dílna bloků. Aristotelés má šest tlačítek otázek: vypadá hlavička na telefonu dobře?
12. List pro učitele. Je v něm všechno, co studentský text vynechává, i s důvodem? Odpovídá cestě (čísla kroků, znění)? Studie z roku 2013: vzorek pokusu s lístky podle studie, ne podle podkladů (viz k-overeni.md, Po P8); oprav i podkladový list a poznámku u pramene. Čísla linek ověř znovu na jejich webech, 116 123 poprvé; větu o smlouvě z roku 1963 ověř, nebo navrhni škrtnout. Ověř, že soubor není v sestaveném webu.
13. Fokus z klávesnice. scripts/kontrola-fokus.mjs hlásí pole prvního názoru na stránce otázky 5 (390 px) a pole pravidla v kroku 7 (1440 px) pod lištou. Zkus skutečný tabulátor na výškách 844, 900 a 920 px a řekni, jestli je to chyba stránky, nebo skriptu.
14. Délka. Cesta má na štítku 34 minut (node scripts/slova-cesta.mjs jsem-porad-tentyz-kdyz-se-menim). Řekni, co je v ní dvakrát a jestli krok 7 unese všechno, co nese; nezkracuj.
15. Strojový text. Všechny studentské texty celku přečti ještě jednou jen podle oddílu „Ať text nezní jako stroj“.

Otevřené body, ke kterým chci doporučení, pokud jsem je výš nevyplnil: Seneca a Plútarchos v poli filozofove; Návrat bez studie; rozdělení kroku 7; přístav jako náš obraz; popisek obrazu vstupu; nepoužité citáty z podkladů (seznam v k-overeni.md, Po P8).
Rozhodnuté, neotvírej: sedm hlasů s Epiktétem a Plútarchos v rezervě; kresba s pohybem ano; nové osoby do dat ne (Hobbes, Locke, Hume, Epicharmos, Diotima a Kratylos bez odkazu); řádek s pomocí do studentského textu nepatří; Hérakleitova smrt se nevypráví; kletba nad Efesem v úvodu profilu; Zénónovy paradoxy mimo celek.

Drobnosti oprav rovnou (překlep, sazba, věta přes 25 slov, test, který hlídá opravenou větu). Zásadní nálezy neopravuj: seřaď je podle dopadu, ke každému napiš návrh opravy a zapiš je do docs/revize/celek-7-<datum>.md. Řekni verdikt: schválit / po opravách / přepracovat.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně). Snímky cesty a stránky otázky na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-cesta.mjs, scripts/snimky-listy.mjs) a kresby (scripts/snimky-prvek.mjs) si prohlédni.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-7.md oddíl „Po P10“ (verdikt, nálezy, co jsi opravil, co čeká na mě) a připrav tam zadání oprav s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-7.md, nová poučení připiš jednou větou do docs/pouceni.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš verdikt, nálezy seřazené podle dopadu a co čeká na mé rozhodnutí.
```
