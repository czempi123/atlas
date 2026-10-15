# Plán větve celek-7: „Jsem pořád tentýž, když se měním?“

Celek 7: profily Hérakleita a Parmenida, cesta 2 „Jsem pořád tentýž, když se měním?“ (období 1, velká otázka 5 „Kdo vlastně jsem?“) a stránka velké otázky 5. Rozsah vybral autor 9. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; cesta 7 s Diogenem, Kratétem a Hipparchií; cesta 34 se Senekou a Marcem Aureliem). Cestou 2 budou hotové všechny čtyři cesty klasického Řecka a atlas dostane první předsókratiky. Otázka 5 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-7-jsem-porad-tentyz.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 9. 10. 2026 (oddíl Po P6) |
| P7 | Profily Hérakleita a Parmenida | hotovo 9. 10. 2026 (oddíl Po P7) |
| P8 | Cesta 2 „Jsem pořád tentýž, když se měním?“, kresba a stránka velké otázky 5 | hotovo 10. 10. 2026 (oddíl Po P8) |
| P10 | Revize celku | hotovo 10. 10. 2026: po opravách (oddíl Po P10; záznam `docs/revize/celek-7-2026-10-10.md`) |
| Opravy | Zapracování nálezů revize | hotovo 15. 10. 2026 (oddíl Po opravách; zadání v `docs/archiv/zadani/celek-7.md`) |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | hotovo 15. 10. 2026: autor celek schválil i s kresbou, větev je sloučená do hlavní větve a hlavní větev je na GitHubu |

**Celek je uzavřený 15. 10. 2026:** schválený autorem, sloučený do hlavní větve a poslaný na GitHub. Tento plán je od té doby v archivu (`docs/archiv/plany/celek-7.md`) a čte se jen na pokyn.

Stav a zadání dalších kroků se zapisovaly sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-7.md`. Větev `celek-7` je založená z hlavní větve 9. 10. 2026 (commit `7e95762`, po sloučení celku 6).

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

## Po P10 (10. 10. 2026)

Záznam revize je v `docs/revize/celek-7-2026-10-10.md`. Zadání P10 je v `docs/archiv/zadani/celek-7.md`; autor ho poslal s prázdnými řádky odpovědí, revize proto ke všem šesti bodům dává doporučení.

**Verdikt: po opravách.** Blokující nález není. Slovo „pravý“ se nikde nepojí s člověkem, nikde „to přejde“, žádné pole na psaní o vlastní změně, žádná nemoc, demence, závislost ani úraz jako příklad; paměť jen ve větě o Lockovi a Humovi; v básni mluví bohyně. Senekův závěr má na telefonu na téže obrazovce otázku, větu o ztrátě i Plútarchovu odpověď. Znění sedí na prameny, čísla kroku 7 na studie.

**Nálezy** (šest důležitých, čtyři drobné; hotová znění jsou v záznamu):

| # | Váha | Nález | Kde |
| --- | --- | --- | --- |
| 1 | důležité | Senekův soud o těle má pod sebou jen otázku na strach; přidat druhou otázku o těle | krok 6 |
| 2 | důležité | Blok za měřením buněk se ptá, jaké pravidlo si z něj student „vezme“, hned po větě „Kdo jsi, z nich neplyne“ | `cesta2-co-z-toho-plyne.yaml` |
| 3 | důležité | „O člověku taky ne“: zlomek B12 mluví o těch, kdo do řek vstupují, a jedno čtení k nim vztahuje „týchž“ | krok 2, `cesta2.spec.ts:87` |
| 4 | důležité | Poslední prkno jsme nepřidali my: Hobbes má „after all the Planks were changed“ | `src/lib/lod.ts`, krok 4, `lod.test.ts:95`, `docs/design.md` |
| 5 | důležité | Kdo ve čtvrtém kroku zvolil „obě“ nebo „žádná“, v posledním kroku nikoho nenajde | krok 7 |
| 6 | důležité | Hlavička se sedmi tlačítky (Aristotelés, Epikúros) odsune na telefonu desku i příběh o obrazovku | vstupy osobnosti |
| 7 | drobné | Tři hlasy otázky 5 říkají o kousek víc než jejich místo (spojovací věta u Hérakleita, „Zeptej se“ u Aristotela, „jedno z nich“ u Epiktéta) | `kdo-vlastne-jsem.mdx`, `cesta2.spec.ts:365` |
| 8 | drobné | Karta s telefonem nevidí koš „O dvou“ | `cesta2-tentyz-stejny.yaml` |
| 9 | drobné | Stojatá voda pětkrát, výhrada o počtu prken čtyřikrát, Senekova věta třikrát | profil Hérakleita, kroky 1, 2, 4, 7, `cesta2.spec.ts:246` |
| 10 | drobné | Kdo žil dřív? píše rok úmrtí bez „asi“ | `src/lib/bloky.ts:462` |

**Co revize opravila rovnou** (tři commity): text pod všemi kresbami má nezlomitelné mezery (`Kresba.svelte`); `scripts/kontrola-fokus.mjs` hlásí totéž co skutečný tabulátor; přehled cesty netvrdí, že se Řekové dostali k člověku až po lodi; „Stejně odpověděla jedna strana sporu“ v kroku 1; „Dlužník přitom…“ v kroku 5; „opačné závěry“ v kroku 6; „Člověk je jako každý živý tvor jedna souvislá věc“ ve Sporu; zkoušky „nad zemí“, smlouva, „která zkoušky v ovzduší zakázala“, host u dveří a dva rozdělené odstavce v kroku 7; „dál v básni“ a „z výkladu světa“ v profilu Parmenida; „občan světa“ a rozdělená věta na stránce otázky 5. V listu pro učitele: linka 116 123 podle jejího webu, pramen ke smlouvě z roku 1963, Hobbesovo „všechna prkna“, dvojí čtení zlomku B12, Politika 1276a–b. V podkladovém listu a u pramene `quoidbach-2013`: vzorek pokusu s lístky podle studie.

**K bodům zadání bez nálezu.** Spor na telefonu drží (Seneca odpovídá jen na to, co zaznělo, a na Plútarchovo poslední slovo odpověď má). Kresba drží ve všech deseti stavech. Zastánci čtyř odpovědí z kroku 1 jsou jiní myslitelé než Hérakleitos a Parmenidés. Fokus z klávesnice: chyba byla ve skriptu, ne ve stránce. Linky pomoci ověřeny 10. 10. 2026 na webech služeb, 116 123 poprvé. List pro učitele v sestaveném webu není.

**Doporučení k otevřeným bodům** (podrobně v záznamu): Seneca a Plútarchos v `filozofove` nechat; Návrat bez studie nechat; krok 7 rozdělit na dva kroky; přístav nechat; obraz vstupu vyříznout úžeji na jednu loď (náhled `Claude outputs/revize-celek-7/navrh-vyrez-jedna-lod.jpg`); Parmenidés bez obrazu; Poradnu Vigvam nechat s poznámkou; z nepoužitých citátů nanejvýš `hovory-x-7` do kroku o buňkách, když se krok rozdělí.

**Co si nesou opravy.** Testy s přesným zněním: `cesta2.spec.ts:87` (nález 3), `:246` (nález 9), `:365` (nález 7), `lod.test.ts:95` (nález 4); při rozdělení kroku `KROKY2`, `NAVAZUJE` a kotva `#kdo-je-na-tve-strane`. Otázku Volby v kroku 7 jmenují tabulka kroků výše a záznam z 10. 10. 2026 v `docs/rozhodnuti.md`; test ji nehlídá. Text pod kresbou má od P10 nezlomitelné mezery: vzor v testu, který začíná `^`, píše za jednopísmennou předložkou `\s`.

**Co čeká na autora.**

1. Schválit nebo upravit deset nálezů.
2. Krok 7: rozdělit na dva? Doporučuji ano.
3. Nález 6 mění rozhraní: otázky na telefonu pod desku, rozbalovací řádek, nebo odložit.
4. Obraz vstupu: užší výřez na jednu loď?
5. Kresba Loď po prknech: potvrdit, že jsi ji viděl.
6. Sloučení do hlavní větve a GitHub až po opravách, na tvůj pokyn.

**Kontrola.** `npm test` prošel celý před opravami i po nich: 521 testů dat a 411 testů v prohlížeči; známý test „cesta: průchod, Kam dál z bloku…“ nespadl ani jednou. Po úpravě rámu kresby spadlo pět testů v `kresby-pokusu.spec.ts` (vzor čekal obyčejnou mezeru za „a“); po úpravě dvou vzorů prošly. Čas cesty: 4 012 slov, 33,9 minuty, štítek 34 sedí. List pro učitele v sestaveném webu není. Náhled `npm run dev` je restartovaný. Snímky kroků s odpověďmi i bez nich, stránky otázky, obou profilů, kresby ve stavech 0, 1, 12, 23 a 24 a hlaviček jsou v `Claude outputs/revize-celek-7/snimky/`, pomůcky revize (hledání slov, věty, texty z dat, klávesnice) o složku výš.

## Po opravách (15. 10. 2026)

Zadání oprav je v `docs/archiv/zadani/celek-7.md`. Autor ho poslal s prázdnými řádky odpovědí; opravy proto vzaly u každého bodu první nabízenou možnost, která je zároveň doporučením revize: všech deset nálezů podle záznamu, krok 7 rozdělit, otázky na telefonu pod desku, užší výřez obrazu vstupu, ostatní body podle doporučení. Řádek o kresbě Loď po prknech zůstal nepotvrzený.

**Co se změnilo ve studentském textu**

| # | Kde | Co |
| --- | --- | --- |
| 1 | krok 6 | Pod Senekovým závěrem dvě otázky: k strachu i k tělu („A plyne z toho, že tělo nestojí za to, aby ho měl člověk rád?“). |
| 2 | krok 7, `cesta2-co-z-toho-plyne` | Otázka Volby: „Které pravidlo si na buňkách vyzkoušíš?“ |
| 3 | krok 2 | „Hérakleitova věta je o řekách a vodách. O lodi v ní není nic. Jsou v ní i ti, kdo do řek vstupují, a jestli říká něco i o nich, čtou její čtenáři každý jinak.“ Věta o dovětku je teď samostatný odstavec (jinak by měl odstavec pět vět). |
| 4 | text pod kresbou, krok 4 | Poslední prkno je Hobbesovo: „až sem úlohu dovedl v 17. století Thomas Hobbes“; nová prkna jsou světlejší „v kresbě“; v kroku 4 Hobbes „dovedl výměnu až k poslednímu prknu a přidal druhou loď“. |
| 5 | krok 8 | Za Hobbesovou odpovědí dva odstavce o dvou lodích ze čtvrtého kroku, i pro odpověď „obě“ a „žádná“. |
| 6 | hlavička profilu | Cesty pod jménem, velké otázky na telefonu až pod deskou; od 900 px pod cestou vlevo od desky. |
| 7 | stránka otázky 5 | Hérakleitos: „Jiná jeho věta mluví o duši. Slib, že se člověk jednou pozná celý, v ní není“; Aristotelés: „Dobrý přítel je pro tebe jako druhý ty, a na druhém člověk vidí víc než na sobě“; Epiktétos: „…sourozenec, spolužák. … znají každý jedno takové jméno“. Pramen `aristoteles-etika-ix` má i IX, 9, 1169b33–1170a4. |
| 8 | krok 3, karta s telefonem | Zpětná vazba pro koš „O dvou“. |
| 9 | profil Hérakleita, kroky 4 a 8 | Bez tůně v myšlence 1; krok 4 začíná „Zpátky k lodi z prvního kroku. V kresbě můžeš výměnu dotáhnout do konce.“; „Podle Seneky tentýž není ani po jediné noci.“ |
| 10 | Kdo žil dřív? | „Když Hérakleitos zemřel (asi 480 př. n. l.)“; týž příznak u všech dvojic. Přečteno i u Prótagory se Sókratem („asi 420 př. n. l.“) a u Diogena s Platónem a Epikúrem (rok úmrtí přesný, „asi“ v závorce není). |
| – | kroky 7 a 8 | Krok 7 „Jak staré je tvoje tělo“: případ a Volba, která nabízí další krok sama. Krok 8 „Kdo je na tvé straně“ (kdeJsme „Zpátky u čtyř odpovědí z prvního kroku“): zastánci, dvě lodě, citát z O delfském E, Locke a Hume, karta Zkus to žít (odkaz `/8/#zkus-to-zit`), shrnutí a Závěr cesty. Marcus Aurelius (Hovory X, 7) v kroku 7 není. |
| – | krok 1, obraz vstupu | Výřez na jednu loď z originálu (432, 377, 728 × 546 px), popisek „Loď pod uchem athénské číše…“. |

**Kontrola.** `npm test` celé prošlo napoprvé: 522 testů dat a 411 v prohlížeči (test „cesta: průchod, Kam dál z bloku…“ nespadl). `scripts/kontrola-fokus.mjs` na přehledu cesty 2, krocích 1, 2, 4, 6, 7 a 8, stránce otázky 5 a profilech Aristotela, Epikúra, Sókrata, Hérakleita, Platóna a Parmenida na 390 i 1440 px: všechno v pořádku. `node scripts/slova-cesta.mjs jsem-porad-tentyz-kdyz-se-menim`: 8 kroků, 4 133 slov, 27,6 minuty čtení a 7,2 minuty ovládání, dohromady 34,7; štítek 35 (dřív 34). Po krocích 280, 527, 745, 323, 503, 706, 424 a 625 slov. Snímky kroků 1–8 s odpověďmi na 390 a 1440 px ve světlém i tmavém režimu, bez odpovědí na 390 px, stránky otázky 5, kresby ve stavech 12 a 24 v obou pohledech a hlaviček Aristotela, Epikúra, Sókrata a Hérakleita jsou v `Claude outputs/opravy-celek-7/` (skript `snimky.sh` tamtéž). Bloky Kdo žil dřív? na deseti profilech čte `scripts/precti-kdo-zil.mjs`.

**Uzavření (15. 10. 2026).** Autor v chatu napsal „Ano, vše schvaluji, můžeme to sloučit na githubu“: schválil opravy, kroky 7 a 8, hlavičku, obraz vstupu i kresbu Loď po prknech. Body 1 a 2 níže jsou tím vyřízené; bod 3 zůstává v `k-overeni.md`.

**Co zbývalo do uzavření**

1. Autor: projít kroky 7 a 8, hlavičku profilu na telefonu a nový obraz vstupu; potvrdit kresbu Loď po prknech, kterou dosud nepotvrdil.
2. Autor: schválit celek 7. Pak sloučení větve `celek-7` do hlavní a hlavní větev na GitHub, jen na jeho pokyn.
3. Otevřené z `docs/podklady/k-overeni.md` (nic z toho celek neblokuje): tlačítko „Otevřít portrét“ na kartě v Mapě a čase i u profilů; Poradna Vigvam v listu k celku 6; publikované české překlady před vydáním.
