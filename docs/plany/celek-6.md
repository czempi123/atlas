# Plán větve celek-6: „Proč se bát smrti?“

Celek 6: portrét Seneky, cesta 8 „Proč se bát smrti?“ (období 2, velká otázka 3 „Má život smysl?“) a stránka velké otázky 3. Rozsah vybral autor 8. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; Seneca a smrt; Seneca a čas). Seneca je v datech portrét a nemá vlastní stránku; potřebují ho tři cesty katalogu (8, 33 a 34). Otázka 3 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-6-proc-se-bat-smrti.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 8. 10. 2026; podklady v `docs/podklady/celek-6-proc-se-bat-smrti.md` |
| P7 | Portrét Seneky | hotovo 8. 10. 2026; `src/content/osobnosti/seneca.mdx`, učiteli `ucitel/celek-6.md` |
| P8 | Cesta 8 „Proč se bát smrti?“ a stránka velké otázky 3 | hotovo 8. 10. 2026; `src/content/cesty/proc-se-bat-smrti*`, `src/content/otazky/ma-zivot-smysl.mdx`, autor 9. 10. 2026 potvrdil kresbu i ostatní volby a Plútarchos přibyl do dat (oddíl Po P8) |
| P10 | Revize celku | hotovo 9. 10. 2026; záznam `docs/revize/celek-6-2026-10-09.md`, verdikt po opravách (oddíl Po P10) |
| Opravy | Zapracování nálezů revize | hotovo 9. 10. 2026: všech deset nálezů a otevřené body podle doporučení (oddíl Po opravách) |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | jen na pokyn autora |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-6.md`. Větev `celek-6` je založená z hlavní větve 8. 10. 2026 (commit `6730c40`, po sloučení celku 5).

## Co si celek nese z celků 1 až 5

- **Co už v atlasu o Senekovi je:**
  - V datech (`lide.yaml`): portrét, období 2, směr stoicismus, otázky 3 a 1, linie stoicismus, místa Corduba, Řím, Korsika (vyhnanství 41–49) a Řím (49–65), atribut přesýpací hodiny (O krátkosti života 1, 3). Obrázek nemá.
  - Hlas na stránce otázky 1: bohatství a výtka, že káže jinak, než žije, s jeho odpovědí z O blaženém životě. Portrét tu odpověď nemá opakovat.
  - Profil Epikúra (Seneca se ho zastal) a cesta 6: krok 1 (Senekův popis Zahrady, Dopisy 21, 10) a krok 4 (Epikúrovy dny skrovného jídla, Dopisy 18, 9).
  - V `zdroje.yaml` jsou prameny `sep-seneca`, `seneca-brevitate`, `seneca-epistulae` (jen Dopisy 18 a 21) a `seneca-vita-beata`, citáty `seneca-ep-21-10`, `seneca-ep-18-9` a dva z O blaženém životě. Stránka směru `src/content/smery/stoicismus.md` existuje.
- **Co atlas říká o smrti:** profil Epikúra má závěť; umírajícího Epikúra nechal celek 2 výslovně cestě 8 a jeho věk při smrti vynechal (prameny se liší). Portrét Sókrata vypráví soud a vězení. U Epiktéta zůstala věta „dveře jsou otevřené“ a místa o smrti dítěte mimo studentský text (celek 3). Lucretius je v datech profil bez stránky s atributem zrcadlo (čas před narozením jako zrcadlo času po smrti).
- **Otevřené body z `k-overeni.md`, které čekají na tento celek:** Senekův pobyt v Egyptě (Útěcha Helvii 19, 2); vztah Epikúros × Démokritos (polemika „až s cestou 8“); Suilliovo obvinění, které cesta 6 vynechala; večerní ohlédnutí z O hněvu (patří Stoickému týdnu, ověřit jen tehdy, když ho portrét použije). Platí dál pravidlo o nápisu na Zahradě: „Seneca popisuje…“, nikdy „na bráně stálo“.
- **Stránka otázky 3 musí obstát jen s antickými hlasy.** Z osobností, které k ní katalog řadí, má atlas Epikúra a Seneku; Boëthius, Pascal, Schopenhauer, Nietzsche, Camus a Frankl v datech nejsou a nové osoby se nepřidávají. Otázka zní „Má život smysl?“, antičtí autoři se ale ptali jinak (co je dobrý život, proč se bát smrti). Stránka jim moderní otázku nesmí vkládat do úst a má nechat místo pozdějším obdobím.
- **Největší riziko celku je útěcha, která zlehčuje.** „Smrt se nás netýká“ zní studentovi, kterému někdo zemřel, jako „o nic nejde“. Epikúrův argument míří na strach z toho, že budu mrtvý; o umírání, o ztrátě toho, co jsem ještě mohl mít, a o smrti blízkých říká málo nebo nic. Cesta to musí říct sama a dřív, než to student namítne. Kdo řekne „bojím se a ten argument mi nepomáhá“, musí v cestě najít myslitele, který mu dá za pravdu; stejně tak ten, kdo se nebojí, a ten, kdo věří, že smrtí nic nekončí. Atlas mezi nimi nerozhoduje. Druhé riziko je opačné: morbidnost a patos.
- **Citlivá místa, nejcitlivější dosud:**
  - Seneca zemřel na Neronův rozkaz vlastní rukou (Tacitus, Letopisy XV, 60–64). Stoici navíc dobrovolnou smrt za jistých okolností hájili (Seneca, Dopisy 70 a 77). Studentský text sebevraždu nehájí, nepopisuje způsob a nepodává ji jako řešení ani jako hrdinství. Podklady navrhnou, jak Senekovu smrt vyprávět, a co patří jen učiteli (`ucitel/celek-6.md`).
  - Student, kterému někdo zemřel nebo umírá; student vážně nemocný; student s myšlenkami na sebevraždu. První obrazovka cesty je podle katalogu umírající člověk v bolestech: podklady ji posoudí podle oddílu Student, kterého se téma bolestně týká v `docs/pouceni.md`.
  - Senekův život: bohatství, otroci (a Dopis 47 o tom, že otroci jsou lidé), podíl na Neronově vládě. Žádná omluva a žádný soud naším hlasem, jako u Aristotela.
  - Věřící student: Epikúros a Lucretius život po smrti popírají. Sókratés v Obraně nechává otevřené obě možnosti.
- **Překryvy, kterým se vyhnout:** cesta 34 (Seneca a čas: O krátkosti života patří jí, portrét se času jen dotkne kvůli atributu), cesta 33 (představa nejhoršího, Dopisy 24 a 91), cesta 5 (co je v mé moci), cesta 6 (Zahrada a třídění tužeb), Sókratova smrt v jeho portrétu. A cesta 4: učitel a vladař, který neudělal, co je správné, už jednou vstupním příběhem byl (Aristotelés a Alexandr). Seneca a Nero nesmí být týž příběh podruhé.
- **Kresba s pohybem:** autor ji chce v atlasu častěji (4. 10. 2026). Nabízí se Lucretiovo zrcadlo na časové ose: doba před narozením a doba po smrti. Podklady řeknou, jestli tam má smysl.
- **Poučení z revizí** je v `docs/pouceni.md`. Z celku 5 hlavně: záporné tvrzení o autorovi („o tom nepsal nic“) se ověřuje v plném textu; spojenec myslitele má být jiný myslitel; spojovací věta nedává citátu adresáta, kterého pramen nemá; křivka v grafu nejsou data.
- **Technika:** bloky Příběh, Volba (i bez pole Proč), Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“, Návrat s novým případem v deníku a karta Zkus to žít. Cesta 8 potřebuje blok, který bude jejím začátkem, a jeden případ pro Návrat. Stránka otázky 3 vznikne ze souboru `src/content/otazky/ma-zivot-smysl.md` (teď jen hlavička).
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026). Předem se ptá jen na stahování obrázků, nové osoby, mazání, slučování a GitHub.
- **Test, který občas spadne:** `tests/e2e/cesta.spec.ts:73` (čeká na `astro-island[ssr]`). Když spadne jen on, pusť ten soubor znovu samostatně.

## Po P6 (8. 10. 2026)

Podklady jsou v `docs/podklady/celek-6-proc-se-bat-smrti.md`; nové prameny (46) a citáty (65) v `src/data/zdroje.yaml`. V datech má Seneca konec prvního pobytu v Římě (rok 41), devět pramenů a tři nové vztahy (Epikúros, Kleanthés a Lucretius → Seneca, vliv textem), Lucretius nový pramen a Epikúros vztah k Démokritovi (vliv textem). `npm test` prošel celý napoprvé (466 testů dat, 336 v prohlížeči). Studentský text nevznikl a žádný obrázek není stažený. Zadání P6 je v `docs/archiv/zadani/celek-6.md`.

**Zvolil jsem sám** (bez mezikroku schvalování; důvody jsou v podkladovém listu, Rozpory a rozhodnutí):

- osa portrétu není učitel a vladař, ale člověk, který psal, jak žít, a třináct let stál vedle moci, ze které pak nesměl odejít; vstupem je žádost o odchod roku 62, vila a platany jsou záloha;
- tři myšlenky portrétu: „Učíme se pro školu, ne pro život“ (Roztřiď), otroci jsou lidé (Změň jednu věc), odklad jako lék na hněv (Volba); karta Zkus to žít jsou večerní tři otázky; „změň mysl, ne oblohu“ a dav jsou v rezervě;
- cesta 8 stojí na pěti strachách (že budu mrtvý, umírání, o co přijdu, ti, kdo zůstanou, smrt blízkých) a u každého argumentu říká, na který míří;
- vstup cesty je Epikúrův dopis psaný jako dopis, ne jako lůžko (návrh A); záloha je noční myšlenka (návrh B);
- začátek cesty je Volba „Je rozumné bát se smrti?“ se čtyřmi možnostmi, pak Roztřiď cizích vět do čtyř košů;
- Spor je Epikúros × Plútarchos (Plútarchos není v datech, strana ponese označení); Cicero patří ke kroku o těch, kdo zůstanou, Seneca se s Epikúrem nepře;
- nový případ je první studie A. Goransonové a kol. (2017): blogy lidí, kteří umírali, proti textům těch, kdo si to představovali; druhá studie (popravení) do studentského textu nepatří;
- kresba s pohybem je Lucretiovo zrcadlo na ose času se dvěma pohyby (zrcadlo a Nagelova námitka), bez letopočtu na pravém konci;
- Návrat je zpráva od kamaráda o půlnoci; karta Zkus to žít cesty je o přátelích a nemá slovo smrt;
- stránka otázky 3: případ s fotografií třídy z roku 1926 a pět hlasů (Platón, Aristotelés, Epikúros, Seneca, Epiktétos); osobnost bez stránky mluvit smí, Lucretius a Cicero tu ale nemluví;
- Senekova smrt je smrt na císařův rozkaz a způsob se nepopisuje; stoická obhajoba dobrovolné smrti jen učiteli (slovo „sebevražda“ jsem navrhoval nepoužít, autor rozhodl jinak, viz níže);
- Egypt do dat ne; Suilliovo obvinění do portrétu jako výčitka, kterou slyšel za života; „pět dobrých let“ a půjčku Britům nepoužívat;
- Démokritos → Epikúros je v datech vliv textem; polemika zůstává otevřená pro otázku 4.

**Odpovědi autora (8. 10. 2026 v chatu):**

1. Podobizna: berlínská herma se jménem SENECA (fotografie muzea, CC BY-NC-SA). Stáhne ji P7; před stažením ověřit verzi licence a jméno fotografa.
2. Senekova smrt: slovo „sebevražda“ text použít smí. Autor ji čte jako smrt na Neronův příkaz, kterou Seneca předešel popravě a následkům pro rodinu. Podklady k tomu: příkaz je doložen (Tacitus XV, 61), ochranu pohřbu a závěti popisuje Tacitus jako obecný zvyk za Tiberia (VI, 29), u Seneky ji neuvádí. Znění v oddíle Citlivá místa říká „vynucená sebevražda“, ne „spáchal“.
3. Věta z Dopisu 78 („Někdy je statečné i žít“): ano, do kapitoly o mládí.
4. Řádek s kontaktem pomoci: ano, jen jako informace na okraj (jedno znění, bez výzvy).
5. Plútarchos ve Sporu jen jako označení strany a nový případ s lidmi, kteří umírali: nevadí.

**Čeká na autora:**

1. motiv ochrany rodiny u Senekovy smrti: jen učiteli (doporučení podkladů), nebo i ve studentském textu jako popis zákona;
2. další obrázky: Rubensova kresba Pseudo-Seneky (The Met 459195), papyrus s řeckým dopisem pro vstup cesty (The Met 251788), římská lampa (The Met 241715); bez odpovědi je portrét jen s hermou a cesta bez obrázků;
3. české překlady pro srovnání (neměl jsem je v ruce).

**Co si P7 a P8 nesou z podkladů:**

- O Senekovi víme hlavně od Tacita (asi 50 let poté; u sporných věcí píše „není jisté“). Cassius Dio je pozdní a nepřátelský: jen učiteli. Tacitovy řeči nejsou Senekova slova.
- Seneca učil Nerona řečnictví, ne filozofii; zůstal u něj třináct let (49–62), psal mu projevy, zbohatl z jeho darů, chtěl odejít a nesměl. To je rozdíl od Aristotela a Alexandra.
- Co o sobě Seneca píše, podávej jako „píše“; SEP upozorňuje, že si v dopisech buduje literární postavu.
- Senekova smrt: znění z podkladů; „vynucená sebevražda“ vždy s rozkazem, ne „spáchal“; žádný způsob, žádné „klidně“, „statečně“, „po vzoru Sókrata“; hned po scéně otázka a to, co po něm zůstalo.
- „Non scholae, sed vitae discimus“ je u Seneky obráceně a jako výčitka (Dopisy 106, 12). U Seneky nejsou: „Štěstí je, když se připravenost potká s příležitostí“, „Errare humanum est“, „Per aspera ad astra“. Tvář vyhublého starce mu nepatří.
- Epikúros neříká „smrt nic není“ ani „po smrti je klid“; říká „netýká se nás“ a „zvykej si“. Netvrdí, že bolest necítí (moudrý bude sténat).
- Adresát posledního dopisu: Diogenés Laertios má Ídomenea, Cicero Hermarcha. Text říká „příteli“.
- Epikúrův argument míří na strach z toho, že budu mrtvý. Cesta to řekne sama a dřív, než to student namítne; o smrti blízkých má krok „Ti druzí“, kde Seneca přizná, že Serena oplakával bez míry, a Epikúros podle Plútarcha hájí slzy.
- Námitku ztráty má už Aristotelés (před Epikúrem), truchlící u Lucretia, Cicero a Plútarchos. Nagel jen jednou větou; jeho článek jsem nečetl.
- Z řeči Přírody u Lucretia jen první půlka; z Obrany 40c–41c ne „zisk“ a spánek; z Dopisu 99 jen věta o nelidskosti; Dopis 77 vůbec.
- Slova, kterým se vyhnout: „nácvik smrti“, „mysli každý den na smrt“, „vysvobození“, „klid“ a „spánek“ jako to, co čeká; „až umřeš“ jen v citátu.
- Studie z roku 2017: 25 blogů, „zkoušela“, ne „dokázala“; srovnávají se dvě skupiny; věta autorů o těch, kdo stojí vedle umírajícího, do textu patří. „Pět věcí, kterých lidé před smrtí litují“ není výzkum.
- Čísla linek pomoci ověřit znovu při každé revizi (`k-overeni.md`).
- Tentýž citát nejvýš dvakrát v celku; které citáty patří portrétu a které cestě, je v tabulce Citáty.

## Po P7 (8. 10. 2026)

Portrét Seneky je v `src/content/osobnosti/seneca.mdx`, jeho čtyři bloky v `src/content/bloky/seneca-*.yaml`, list pro učitele v `ucitel/celek-6.md`. `npm test` prošel celý: 471 testů dat a 346 v prohlížeči; při celém běhu spadl jen známý `tests/e2e/cesta.spec.ts:73` a samostatně prošel. Zadání P7 je v `docs/archiv/zadani/celek-6.md`.

**Co stránka má**

- Hlavička: „Spisovatel u Neronova dvora · Senekův portrét“, pointa „Muž, který psal, jak žít, a stál vedle Nerona.“, na desce výřez Senekovy hlavy z berlínské hermy.
- Úvod: žádost o odchod roku 62, vyprávěná nepřímo („Dějepisec Tacitus tu schůzku vypráví takhle“), a hlavní citát o řeči a životě (Dopisy 75, 4).
- 01 Rok bez masa: původ, učitelé, rok bez masa, nemoc v mládí s větou z Dopisu 78 a hned tím, co pomohlo (filozofie a přátelé), Roztřiď „Pro školu, nebo pro život?“, Senekova věta o škole, námitka s Aristotelem.
- 02 Skála: úřad, vyhnanství, syn, dvě útěchy vedle sebe a otázka kurzívou (kapitola nemá blok), návrat roku 49.
- 03 Hněv: Volba „Kdy mu odpovíš?“, odklad, přirovnání k soudu, Aristotelova námitka, kterou Seneca sám uvádí, omezení rady na spor mezi rovnými, večerní soud.
- 04 U dvora: učil mluvit a psát, projevy, „drželi na uzdě“, Britannikova smrt, Volba „Co bys na Senekově místě udělal?“ (bez oddílu Co udělal a bez možnosti označené jako jeho), spis o mírnosti jako zrcadlo, Suilliova výčitka s odkazem na otázku 1, dopis senátu po smrti Agrippiny, návrat k žádosti z úvodu.
- 05 Dopisy: statek a platany, dopisy příteli, Změň jednu věc „Co uděláš?“ (pekárna), Dopis 47 se dvěma důvody a pravidlem, co Seneca nežádal a co dělal, odkaz na Epiktéta.
- 06 Co zůstalo: Senekova smrt podle znění z podkladů, dopisy „pro ty, kdo přijdou po nás“, otázka, Příběh „Tvář, kterou Evropa neznala“ s celou hermou a pod kapitolou tichý řádek s Linkou bezpečí.
- Doba a lidé (Současníci, Kde žil, Koho četl), Kdo žil dřív? Sókratés × Seneca (vzdálenost), Tři velké myšlenky s Mým stanoviskem (Poznání, Politika, Etika), Zkus to žít „Tři otázky večer“, Kam dál (cesta 5, Epiktétos, Marcus Aurelius, otázka 1).

**Použité citáty** (každý jednou): `seneca-ep-75-4` (hlavní), `seneca-ep-78-2`, `seneca-ep-106-12`, `seneca-ep-8-3`, `seneca-ira-ii-29`, `seneca-ira-iii-36`, `seneca-clem-i-1`, `seneca-ep-12-1`, `seneca-ep-47-1`, `seneca-ep-47-11`, `seneca-ep-8-2`, v kartě Zkus to žít `seneca-ira-iii-36-otazky` a `seneca-ira-iii-36-odpoustim`. Nepoužité z řádků 1 až 17: `seneca-ep-75-1` a `seneca-ep-47-10` (jsou v textu nepřímou řečí), `seneca-ep-28-1` a `seneca-ep-7-3` (rezervy).

**Kde se portrét liší od podkladů**

- Platónovu zdviženou ruku (Nejsilnější příběhy 9) nevypráví: otrok v příběhu potrestán byl a příběh bere bití jako samozřejmost. Odklad nese přirovnání k soudu (O hněvu II, 29, 3). Příběh je v listu pro učitele.
- Ze scény na statku vynechává vtip o cizí mrtvole (Citlivá místa ho nabízela jednou větou): v celku o smrti by chtěl vysvětlení a Feliciovo postavení text neříká.
- Senekova smrt: věta „Kat nepřišel; odsouzený dostal rozkaz. Říká se tomu vynucená sebevražda.“ zní „…dostal rozkaz. Takové smrti na rozkaz se říká vynucená sebevražda.“, aby rozkaz stál doslova v téže větě. Druhý odstavec znění je rozdělený na dva (pravidlo čtyř vět) a scéna má vypravěče („Tacitus vypráví i to, co bylo dál“).
- Otázka po scéně není „co bys chtěl, aby po tobě zůstalo místo závěti?“, ale „Zůstalo po něm, co napsal, a to, jak žil. Podle čeho z toho bys ho posuzoval ty?“: neptá se studenta na vlastní smrt a drží osu slovo a život.
- Volba u dvora nemá oddíl Co udělal: co Seneca udělal, říká věta za blokem; proč, nevíme. Dionovu větu (61, 7, 5) blok nepoužívá.
- Quintilianus: tabulka Kdo to vypráví měla „Seneku četli skoro jen mladí“, pramen říká, že mladí nečetli skoro nikoho jiného. Portrét jde podle pramene a tabulka je opravená.
- Odkaz na cestu 5 u hněvu v kapitole není (Spor cesty 5 je o vnějších dobrech, ne o hněvu); cesta 5 je v Kam dál.
- Caligulův výrok o písku bez vápna, Britannikovo jméno, Burrovo jméno, Polybiovo jméno a učitel Sótión jménem v textu nejsou (jména střídmě).

**Co se změnilo mimo portrét**

- Data: Seneca má `obrazek: seneca-smb` a čtyři další prameny; v `zdroje.yaml` dva obrázky (`seneca-smb`, `seneca-herma`) a u citátu `seneca-ep-47-1` jednoduché vnitřní uvozovky (komponenta Citát přidává vnější).
- Obrázky: `public/obrazky/seneca-herma-smb.jpg` (1280 × 991 px, 303 kB) a `public/obrazky/seneca-smb.jpg` (výřez 904 × 1130 px, 360 kB). Originál 2259 × 1750 px je v `~/Downloads/atlas-obrazky-originaly/seneca-herma-smb-SK391-973363.jpg`. Zdroj: https://smb.museum-digital.de/object/13081 (záznam muzea https://id.smb.museum/object/698814); CC BY-NC-SA 4.0; fotograf v záznamech není uveden („Fotonachweis: Staatliche Museen zu Berlin, Antikensammlung“).
- Nová komponenta `src/components/ui/RadekPomoci.astro` s jedním zněním řádku pomoci.
- `MiniMapa.astro`: holý řádek role („působení“) vypadne, když na témže místě stojí tentýž s rokem („působení 49 n. l.“). Týká se jen Seneky.
- Profil Epikúra odkazuje na Seneku jménem. Stránka otázky 1 teď u Senekova hlasu vede na portrét (test upraven).
- Testy: nový `tests/e2e/seneca.spec.ts` (bloky ve čtyřech podobách, pravidla textu, deska, licence, Doba a lidé), Seneca v `prohlidka.spec.ts`.

**Co si nese P8**

- Portrét cestu 8 jen jmenuje (kapitola 05: „Těm patří cesta Proč se bát smrti?“). P8 z názvu udělá odkaz, dá cestu 8 na první místo Kam dál (místo cesty 5) a upraví dva řádky v `tests/e2e/seneca.spec.ts`.
- Řádek pomoci se vkládá `<RadekPomoci />`; znění se nemění. V cestě patří do úvodu pod počet kroků a pod krok „Ti druzí“.
- Co portrét už řekl a cesta to nemá opakovat: věta z Dopisu 78, smrt syna dvacet dní před vyhnanstvím, Paulina, večerní soud, „bránili vraždám“, celá scéna smrti. Záchvat dušnosti, Bassus, Serenus, útěchy a všechny argumenty o smrti portrét nemá.
- Citát `lucretius-iii-894` má v datech vnitřní uvozovky „ “; s vnějšími od komponenty Citát by vyšly dvojí. Před použitím projít citáty cesty a vnitřní uvozovky převést na ‚ ‘.
- `ucitel/celek-6.md` má zatím jen portrét. P8 doplní cestu: tabulku Student, kterému někdo zemřel…, co cesta vynechává (Dopis 77, druhou půlku řeči Přírody, Hégésia), věřícího studenta a studii z roku 2017.
- Doba a lidé u Epikúra: Seneca stojí ve skupině „Četli ho a navázali“ s popiskem „navázal na jeho texty“. Seneca byl stoik a Epikúra citoval; popisek je obecný pro vliv textem. Když to v cestě vadí, patří to do revize.
- Dopis 70 a celé příručky (Media Guide NÚDZ, doporučení MŠMT) zůstávají nečtené; list pro učitele stojí na podkladech.

**Čeká na autora**

1. Výřez na desce: z téže fotografie jsem udělal druhý soubor jen se Senekovou hlavou (licence úpravy dovoluje; je to řečeno v Pramenech). Když ho nechceš, deska ponese celou fotografii a z hermy bude vidět i Sókratův týl.
2. Rubensova kresba Pseudo-Seneky: řádek zůstal prázdný, kresba se nestáhla. Tvář, kterou Evropa malovala, popisuje text slovy.
3. Motiv ochrany rodiny: řádek zůstal prázdný, je jen v listu pro učitele.
4. Tři karty v oddíle velkých myšlenek: na notebooku stojí třetí sama v druhém řádku. Dá se nechat, nebo vybrat dvě.
5. Synovec Lucanus je v textu jménem (znění z podkladů); šlo by „i jeho synovce, básníka“.
6. České překlady pro srovnání citátů (před revizí).
7. Obrázek pro vstup cesty 8 (papyrus, lampa, nebo žádný): rozhoduje se v zadání P8.

## Po P8 (8. 10. 2026)

Cesta 8 je v `src/content/cesty/proc-se-bat-smrti.mdx` a ve složce `proc-se-bat-smrti/` (devět kroků), její bloky v `src/content/bloky/cesta8-*.yaml`, kresba v `src/components/ostrovy/Zrcadlo.svelte` a `src/lib/zrcadlo.ts`, stránka otázky 3 v `src/content/otazky/ma-zivot-smysl.mdx`, list pro učitele v `ucitel/celek-6.md`. `npm test` prošel celý: 495 testů dat a 368 v prohlížeči, tentokrát i `tests/e2e/cesta.spec.ts:73`. Čas cesty podle `scripts/slova-cesta.mjs`: 3 719 slov, 32 minut. Zadání P8 je v `docs/archiv/zadani/celek-6.md`; autor ho poslal se třemi prázdnými řádky, platilo tedy: vstup bez obrázku, portrét a deska beze změny.

**Co cesta má**

| Krok | Co v něm je | Blok | Citáty |
| --- | --- | --- | --- |
| 1 Dopis | Epikúrův dopis z posledního dne jako Příběh (adresát „přítel“, nemoc jednou větou, končí dětmi); škola netvrdila, že moudrého nic nebolí | Volba „Je rozumné bát se smrti?“ (začátek cesty, čtyři možnosti) | `dl-x-22-den`, `dl-x-22-radost`, `dl-x-22-deti` |
| 2 Čeho se vlastně bojíme | Strach ze smrti není jeden | Roztřiď: osm cizích vět do čtyř košů, bez vlastních karet; srovnání říká, že Epikúros míří jen na první koš | |
| 3 „Netýká se nás“ | „Netýká se nás“, ne „nic není“; „zvykej si“; město bez hradeb; argument stojí na tom, že smrtí všechno končí | Odkryj: „Co bys Epikúrovi namítl?“ (námitka se porovná s koši) | `menoikeus-124`, `menoikeus-125`, `vs-31` |
| 4 Zrcadlo | Lucretius (otázka s rokem 1914, zrcadlo), Senekova lampa a to, kdy ji napsal, námitka (Nagel jednou větou) | žádný; kresba Zrcadlo času | `lucretius-iii-972-zrcadlo`, `seneca-ep-54-4`, `seneca-ep-54-5-lampa` |
| 5 Host u stolu | Truchlící u Lucretia, básníkova odpověď o mrtvém, řeč Přírody (první půlka) a hned námitka, Epikúros o délce, Aristotelés | Změň jednu věc: oslava (od odpoledne × před chvílí) | `lucretius-iii-894`, `lucretius-iii-938`, `etika-1117b` |
| 6 Týká se nás? | Plútarchos: kdo to je a že se přel s učením, ne s člověkem | Spor Epikúros × Plútarchos (Plútarchos je od 9. 10. v datech, mince s trojnožkou) | |
| 7 Ti druzí | Strach o ty, kdo zůstanou (Epikúros zařídil, co šlo), a smrt blízkých (věta o nich není; Seneca přiznává; Epikúros podle Plútarcha hájí slzy) | žádný; pod krokem řádek pomoci | `seneca-ep-63-14`, `seneca-ep-99-15` |
| 8 Blízko | Starý přítel, Senekovo přiznání, „nebojíme se smrti, ale myšlenky na smrt“, studie z roku 2017 | dvě Volby: odhad a čtení studie | `seneca-ep-30-7`, `seneca-ep-30-17` |
| 9 Tvoje pravidlo | Kdo dá za pravdu komu (bojím se, nebojím se, umírání a ti druzí, nevím, věřím), odkaz na otázku 3, karta „Řekni to teď“ | Závěr cesty; Na začátku × Teď z kroku 1 | `obrana-40c`, `faidon-114d` |

Návrat je „Zpráva o půlnoci“ (`cesta8-navrat.yaml`). Řádek pomoci (`<RadekPomoci />`) stojí na přehledu cesty pod úvodem a na konci kroku 7.

**Použité citáty.** Cesta jich má osmnáct, každý jednou (tabulka výš). Stránka otázky 3 pět: `faidon-107c`, `etika-1177b`, `kd-19`, `seneca-ep-61-4`, `rozpravy-i-6-19`. S portrétem (seznam v oddíle Po P7) se nekryje žádný; nejvýš dvakrát v celku tedy není žádný citát, všechny jsou jednou. Nepřímou řečí jsou v cestě: `menoikeus-125-cekani` (srovnání v kroku 3 a Spor), `menoikeus-124-touha` (Spor), `menoikeus-126` (krok 5), `lucretius-iii-900` (krok 5), `seneca-ep-54-3` a věta o tom, že nepíše vesele (krok 4), `seneca-ep-24-18` (krok 9), `seneca-ep-26-6` (zpětná vazba v kroku 8), `obrana-29a` a `etika-1115a` (krok 9). Ostatní nepoužité jsou vypsané v `k-overeni.md` (Po P8).

**Kde se cesta liší od podkladů**

- Čtvrtá možnost první Volby je „Záleží na tom, co je po ní.“, aby měl místo i student, který věří, že smrtí nic nekončí.
- Koše v Roztřiď mají tvar „Na to, že nebude · Na umírání · Na to, o co přijde · Na ty druhé“ (otázka „Na co ten, kdo to říká, myslí?“).
- Odkryj v kroku 3 se neptá, co Epikúros neřekl (to říká text), ale co by mu student namítl.
- Dva citáty jsou kratší než v tabulce Citáty (zrcadlo bez spánku, lampa bez klidu) a mají v datech vlastní id.
- Citáty z posledního dopisu mají dílo „Dopis z posledního dne“.
- Krok 5 má navíc blok s oslavou; Ciceronova výtka (závěť proti učení) v kroku 7 není a je jen v listu pro učitele.
- Poslední věta Obrany (42a) v cestě není; z Plútarcha 1106b–c je jen první půlka; `vs-66` není; věta o věku a strachu není; „umíráme každý den“ není.
- Senekův záchvat: „přejde asi do hodiny“ místo „trval asi hodinu“ (podle latiny; podkladový list opraven).
- Kresba má tlačítko a posuvník a výchozí stav před přiložením zrcadla i při omezeném pohybu.
- Návrat nemá čtyři hotové odpovědi, jen případ a tři věty po odpovědi.
- Na stránce otázky 3 je fotografie v úvodu a `pripad` je krátká otázka; hlasy mají myšlenku na dva až čtyři věty, ne na jednu jako v návrhu hlavičky.

**Co se změnilo mimo cestu**

- Data: dva nové citáty, vnitřní uvozovky u dvou Lucretiových, dílo u tří Epikúrových (`src/data/zdroje.yaml`).
- Schéma Sporu: strana smí mít jen `oznaceni` (`bloky-schema.ts`, `Spor.astro`, `Spor.svelte`); popis v `docs/design.md`.
- Přehled cesty (`src/pages/cesta/[cesta]/index.astro`): odkaz na osobnost jen tam, kde má stránku.
- Portrét Seneky: odkaz na cestu v kapitole 05 a cesta 8 první v Kam dál.
- Dílna bloků má devátou kresbu.
- Testy: nové `cesta8.spec.ts`, `zrcadlo.spec.ts`, `tests/data/zrcadlo.test.ts`, dva testy v `otazka.spec.ts`; cesta 8 a otázka 3 v `prohlidka.spec.ts`, `cesta.spec.ts` a `pruchod.spec.ts`. Upravené kvůli tomu, co se skládá z dat: vstupy Epikúra, Epiktéta a Platóna (nové hlasy otázky 3), karty v Lidech, „zbývá 5 cest“ na Domů, devět kreseb v dílně.
- 9. 10. 2026: Plútarchos v datech (`lide.yaml`, místo Chairóneia, prameny `sep-plutarch` a `diodoros-xvi-26`, dva vztahy, ikona `tripod`), strana Sporu je osoba a cesta ho má mezi filozofy. Schéma dál dovoluje stranu jen s označením, obsah ji nepoužívá.
- `docs/pouceni.md`: šest nových vět (kratší podoba citátu, čtení očima tří studentů, věta, že argument o něm není, Roztřiď bez vlastní karty, strana Sporu bez osoby, co se skládá z dat po přidání cesty).

**Co si nese revize (P10)**

- Kresbu autor potvrdil 9. 10. 2026.
- Plútarchos je od 9. 10. v datech (medailonek, atribut trojnožka, Chairóneia; vztahy Platón → Plútarchos a Plútarchos × Epikúros). Projít, kde všude se z dat objevil: mapa kolem roku 100, Lidé, Doba a lidé u Epikúra a Platóna, současníci Seneky, Epiktéta a Marca Aurelia, přehled cesty.
- Číst první obrazovku každého kroku očima tří studentů z Citlivých míst; zvlášť krok 5 (truchlící stojí hned nahoře), krok 7 a krok 8.
- Projít všechny kombinace: čtyři možnosti první Volby, osm karet ve čtyřech koších (zpětná vazba `kdyz` je jen u dvou karet), dvě podmínky oslavy se třemi odpověďmi, Spor z obou stran, dvě Volby u studie, tři odpovědi Návratu.
- Spor na telefonu: Epikúros stojí první a námitku, na kterou odpovídá, říká scéna a začátek jeho třetího argumentu. Poslední slovo má Plútarchos („dvojí metr“); posoudit, jestli na ně Epikúrův třetí argument stačí.
- Nagel: věta stojí na SEP, článek je nečtený.
- Hlas Seneky na stránce otázky 3 má větu, která je výklad („podle stoiků nerozhoduje on“).
- Doba a lidé u Epikúra a Seneky se nezměnila; popisek „navázal na jeho texty“ u Seneky zůstává (poznámka z P7).
- Epikúrův profil cestu 8 nejmenuje v textu ani v Kam dál; vede na ni jen hlavička z dat.
- České překlady, Dopis 70, celý Media Guide a výroky připisované Senekovi v listu pro učitele: viz `k-overeni.md`.
- Čísla linek pomoci ověřit znovu; Poradnu Vigvam ručně.

**Odpovědi autora (9. 10. 2026 v chatu)**

- Ke všemu, co čekalo: „všechno se mi líbí“. Zůstává tedy kresba Zrcadlo času, délka 32 minut, vynechaná poslední věta Obrany, dílo „Dopis z posledního dne“, blok s oslavou v kroku 5 a vstup bez obrázku; z P7 výřez hermy na desce, portrét bez Rubensovy kresby, ochrana rodiny jen učiteli, tři karty velkých myšlenek a Lucanovo jméno.
- K Plútarchovi: „dejme něco“. Je v datech jako medailonek s atributem trojnožka (byl knězem v Delfách) a jeho mince ve Sporu už není prázdná. Důvody voleb jsou v `docs/rozhodnuti.md` (9. 10. 2026), co zbývá ověřit, v `k-overeni.md` (Plútarchos v datech).

**Čeká na autora:** nic, co by bránilo revizi. České překlady pro srovnání citátů zůstávají v `k-overeni.md`.

## Po P10 (9. 10. 2026)

Revize celku je hotová: záznam `docs/revize/celek-6-2026-10-09.md`, **verdikt po opravách**. `npm test` prošel celý před opravami i po nich (495 testů dat, 368 v prohlížeči, pokaždé i `tests/e2e/cesta.spec.ts:73`). Čas cesty: 3 721 slov, 32,0 minuty. Na GitHubu nic není. Zadání P10 je v `docs/archiv/zadani/celek-6.md`.

**Co revize našla.** Žádný blokující nález, pět důležitých a pět drobných; každý má v záznamu hotové znění opravy.

1. Krok 3: „Nezbude nikdo, komu by mohlo být zle“ čte student, kterému je zle, jako úlevu. Epikúros říká „dobré ani zlé“; stejným směrem táhne „co nebude bolet“ (Odkryj, Spor) a text pod kresbou.
2. Krok 5: Aristotelův citát končí „takovému člověku nejvíc stojí za to žít“ a stupňování „čím šťastnější, tím víc“ se v cestě vrací sedmkrát. Je to skryté srovnání šťastných s nešťastnými; návrh je kratší podoba citátu s vlastním id.
3. Scéna Sporu: „Plútarchos z té věty udělal námitku“. Plútarchos Lucretia nečetl ani necituje; spojení je naše.
4. Otázka 3, hlas Seneky: „podle stoiků nerozhoduje on“ v Dopise 61 není. Je v Dopise 93, 2 a jako Senekova věta; věta 61, 4 má jinou souvislost (pořád se nám zdá, že něco chybí).
5. Spor: na Plútarchův „dvojí metr“ nemá Epikúros výslovnou odpověď; stačí první argument začít „Dobré i zlé…“.
6. Krok 9: „smrti ne, umírání ano“ a strach o ty druhé nedostanou jméno, ačkoli oddíl slibuje, že každá odpověď má zastánce.
7. Krok 4: neříká předem, na který koš zrcadlo míří, a „Zrcadlo má slabé místo“ říká atlas svým hlasem.
8. Blok s oslavou: zpětná vazba `posun` v podmínce „Přišel jsi před chvílí“ předpokládá směr; `stejne` končí „jak ses rozhodl odcházet“.
9. List pro učitele: chybí Dopis 61 a Dopis 30 celé, tabulka výroků připisovaných Senekovi a přesnější věta o Nagelovi.
10. Opakování nad dvě: „přes tři sta padesát let“ třikrát v kroku 6, „komu to bude chybět?“ pětkrát.

**Opraveno rovnou** (commit „Revize celku 6: drobné opravy textu cesty 8“): krok 2 jmenuje všechny čtyři odpovědi z kroku 1; v kroku 4 „po stejné myšlence“ místo „po stejném obrazu“; v kroku 8 „tolik nepomáhaly“ podle latiny; `docs/design.md` (Plútarchos je ve Sporu osobou); datum ověření linek v listu pro učitele a v komentáři `RadekPomoci.astro`.

**Doporučení k otevřeným bodům** (zdůvodnění v záznamu): větu o Nagelovi nechat, zmírnit dvě věty před ní, článek číst netřeba; do profilu Epikúra jednu větu s odkazem na cestu 8 a řádek v Kam dál; stranu Sporu bez osoby ve schématu nechat; vlastní překlady nechat a srovnání nedělat podmínkou schválení; tabulku výroků doplnit do listu pro učitele v pěti řádcích.

**Co ověřila revize v pramenech.** Seneca, Dopisy 30, 54, 61 a 93 latinsky; studie z roku 2017 v plném textu (čísla, tři skupiny čtenářů, věta o těch, kdo stojí vedle, výhrada autorů o malém a samovybraném vzorku); heslo Death ve SEP k Nagelovi; Diodóros XVI, 26 anglicky; linky pomoci na webech, Poradna Vigvam ručně. Zapsáno v `k-overeni.md` (Po P10).

**Co si nesou opravy.**

- Z textů, které se mají změnit, hlídá test přesným zněním jediný: `tests/e2e/zrcadlo.spec.ts:179` („Zrcadlo má slabé místo“). Texty pod kresbou berou testy z `src/lib/zrcadlo.ts` a hlídají v nich jen „Lucretius říká“, „podle námitky“, letopočty a délku vět. Kam dál profilu Epikúra žádný test nehlídá. `tests/e2e/cesta8.spec.ts:181` („tím víc ho smrt bude bolet“) a `:197` („host, který sotva přišel, nasycený není“) navržená znění drží.
- Nový citát `etika-1117b-bolest` (když autor zvolí kratší podobu) potřebuje řádek v `zdroje.yaml` a poznámku, co chybí a proč; plná podoba zůstává.
- Po opravách přepočítat čas cesty (`node scripts/slova-cesta.mjs proc-se-bat-smrti`) a po změně dat restartovat běžící `npm run dev`.
- `scripts/kontrola-fokus.mjs` hlásí po `focus()` tři pole pod lištou (dvě v kroku 8 na telefonu, pravidlo v kroku 9 na notebooku); skutečný tabulátor je v pořádku na 390 × 844, 1440 × 900 i 1440 × 920. „Bez obrysu“ u tlačítek Dát sem je planý poplach (obrys nese koš).
- Pomůcky revize a snímky jsou v `Claude outputs/revize-celek-6/`, mimo git.

**Čeká na autora.**

1. Deset nálezů: schválit, nebo říct, které jinak. Uvnitř dvou je volba: nález 2 (kratší Aristotelův citát, nebo celý) a nález 4 (Senekova myšlenka podle Dopisu 61, nebo s osudem podle Dopisu 93).
2. Otevřené body podle doporučení; do oprav by šly odkaz v profilu Epikúra a tabulka výroků.
3. Na vědomí: Senekova mince s přesýpacími hodinami stojí na přehledu cesty o smrti; atribut je rozhodnutý z P6.
4. Po opravách: schválení celku, sloučení do hlavní větve a GitHub jen na pokyn.

## Po opravách (9. 10. 2026)

Autor schválil všech deset nálezů revize i doporučení k otevřeným bodům v chatu („Super, vše schvaluji, slučme to na githubu a vymysleme další celek“) a opravy proběhly v témže chatu jako revize; zadání oprav proto neposílal a je v `docs/archiv/zadani/celek-6.md`. `npm test` po opravách: 495 testů dat a 368 v prohlížeči, všechno prošlo. Čas cesty: 3 765 slov, 32,3 minuty; štítek 32 zůstává.

**Co se změnilo.**

- **Nález 1:** krok 3 říká „Nezbude nikdo, kdo by cokoli zakoušel, dobré ani zlé“; Odkryj a třetí Epikúrův argument ve Sporu mají „co netrápí, když je to tady, trápí naprázdno, když se na to čeká“; text pod kresbou „necítili nic, dobré ani zlé“.
- **Nález 2 (kratší podoba):** nový citát `etika-1117b-bolest` v `zdroje.yaml`, krok 5 ho používá; věta pod ním a věta v kroku 9 jsou bez „nejvíc“. Plná podoba `etika-1117b` zůstává v datech nepoužitá.
- **Nález 3:** scéna Sporu říká „Stejnou námitku vedl proti Epikúrovi Plútarchos“; úvod kroku 6 „Tu druhou vedl proti Epikúrovi…“.
- **Nález 4 (podle Dopisu 61):** Senekova myšlenka na stránce otázky 3 stojí na větě 61, 4 a její souvislosti; Dopis 93 se nepoužil a pramen se nemění.
- **Nález 5:** první Epikúrův argument začíná „Dobré i zlé…“ a říká, že smrt „pro nikoho nebude zlá ani dobrá“. Záznam navrhoval „pro něj“; po přečtení v bloku se zájmeno vázalo na „nikdo“, proto „pro nikoho“.
- **Nález 6:** krok 9 má zvlášť odstavec pro „umírání, a smrti ne“ a zvlášť pro strach o ty druhé, oba se jmény.
- **Nález 7:** krok 4 říká předem, na který koš zrcadlo míří, námitku uvádí „Proti zrcadlu stojí námitka“ a „podle ní“, otázka je v množném čísle; krok 6 „Podle první… Podle druhé…“.
- **Nález 8:** dvě zpětné vazby podmínky „Přišel jsi před chvílí“ v bloku s oslavou.
- **Nález 9:** list pro učitele má Dopis 61, zbytek Dopisu 30, Aristotelovu vynechanou větu, přesnější větu o Nagelovi, tabulku výroků připisovaných Senekovi a místo z Faidónu 61c–62c (ověřeno při opravách v překladu H. N. Fowlera, PerseusDL).
- **Nález 10:** „Kde jsme“ kroku 6 je bez počtu let; karta „Že to prostě skončí“ má ve větvi `kdyz.ztrata` jednu otázku.
- **Otevřené body:** profil Epikúra má na konci kapitoly 01 větu s odkazem na cestu 8 a v Kam dál řádek Cesta 8. Věta o Nagelovi, schéma Sporu a vlastní překlady zůstávají.

**Testy.** Přesným zněním hlídaly měněné věty dva testy, ne jeden, jak tvrdil oddíl Po P10: `tests/e2e/zrcadlo.spec.ts:179` a průchod bez odkrytí v `tests/e2e/cesta8.spec.ts:314` (tři věty z kroků 4, 5 a 6). Oba jsou upravené v commitu oprav.

**Co zůstává po uzavření** (nic z toho nebrání sloučení; je to v `k-overeni.md`): srovnání šesti míst s českými překlady, až budou knihy po ruce; Nagelův článek před druhou větou o něm; Dopis 70, celý Media Guide NÚDZ a doporučení MŠMT nečtené; rok na fotografii u otázky 3 posouvat; linky pomoci ověřovat při každé další revizi; přesýpací hodiny u Seneky s cestou o čase.

