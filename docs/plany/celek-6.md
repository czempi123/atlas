# Plán větve celek-6: „Proč se bát smrti?“

Celek 6: portrét Seneky, cesta 8 „Proč se bát smrti?“ (období 2, velká otázka 3 „Má život smysl?“) a stránka velké otázky 3. Rozsah vybral autor 8. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; Seneca a smrt; Seneca a čas). Seneca je v datech portrét a nemá vlastní stránku; potřebují ho tři cesty katalogu (8, 33 a 34). Otázka 3 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-6-proc-se-bat-smrti.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 8. 10. 2026; podklady v `docs/podklady/celek-6-proc-se-bat-smrti.md` |
| P7 | Portrét Seneky | hotovo 8. 10. 2026; `src/content/osobnosti/seneca.mdx`, učiteli `ucitel/celek-6.md` |
| P8 | Cesta 8 „Proč se bát smrti?“ a stránka velké otázky 3 | čeká; zadání je níže |
| P10 | Revize celku | čeká na P8 |
| Opravy | Zapracování nálezů revize | čeká na P10 |
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

## Zadání P8: Cesta 8 „Proč se bát smrti?“ a stránka velké otázky 3

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Cesta mluví o smrti se šestnáctiletými, mezi kterými je někdo, komu zemřel blízký člověk, a rozhoduje v ní znění jednotlivých vět; na Sonnetu bych ji nepsal. Před odesláním doplň tři řádky; prázdný řádek znamená doporučení z podkladů (bez obrázku) a portrét beze změny.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-6; je v ní portrét Seneky z P7.

Obrázek pro vstup cesty (papyrus s řeckým dopisem, The Met 251788 / římská lampa, The Met 241715 / žádný): 
Portrét Seneky z P7 (nechat / co změnit): 
Deska Seneky (výřez hlavy / celá fotografie hermy): 

Napiš cestu 8 „Proč se bát smrti?“ (období 2, velká otázka 3) podle skillu atlas-cesta a stránku velké otázky 3 „Má život smysl?“. Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md (oddíl Student, kterého se téma bolestně týká pozorně);
- v docs/plany/celek-6.md tabulku stavu, z oddílu „Po P6“ seznam „Co si P7 a P8 nesou z podkladů“ a celý oddíl „Po P7“;
- z docs/podklady/celek-6-proc-se-bat-smrti.md: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), Nejsilnější příběhy 1, 2, 10 a 12, celý oddíl Citlivá místa kromě Senekovy smrti, celý oddíl Tvrzení: cesta 8 (od Vstupního příběhu po Návrh kroků), celý oddíl Velká otázka 3, z tabulky Citáty řádky od 18 dál, Obrázky (Obraz pro vstup cesty) a Rozpory a rozhodnutí; v docs/podklady/k-overeni.md jen Celek 6 a Po P7;
- z portrétu src/content/osobnosti/seneca.mdx kapitoly 01 a 06 (co už říká) a ucitel/celek-6.md celý (doplníš ho);
- jako vzor cesty přehled, jeden krok s blokem a poslední krok z src/content/cesty/staci-vedet-co-je-spravne/, jako vzor kresby s pohybem jednu hotovou kresbu s posuvníkem a její soubor v src/lib, jako vzor stránky otázky hlavičku src/content/otazky/jsem-svobodny.mdx. Kresbu stav podle skillu atlas-komponenta.

Co cesta má (podle Návrhu kroků v podkladech; uprav stavbu, když najdeš lepší):

1. Pět strachů: že budu mrtvý, umírání, o co přijdu, ti, kdo zůstanou, smrt blízkých. U každého argumentu řekni, na který strach míří, a řekni to dřív, než to student namítne. Epikúrův argument míří jen na první.
2. Vstup: Epikúrův dopis z posledního dne, psaný jako dopis (návrh A), bez popisu nemoci, s větou, že to bolelo, a hned otázka. Adresát je „přítel“. Pokud jsem nahoře vybral obrázek, stáhni ho stejně jako hermu v P7 (originál mimo repozitář, kopie 1280 px, licence ověřená u muzea a zapsaná u obrázku).
3. Začátek cesty: Volba „Je rozumné bát se smrti?“ se čtyřmi možnostmi, pak Roztřiď cizích vět do čtyř košů.
4. Jádro: Epikúros („netýká se nás“, ne „nic není“; „zvykej si“), Lucretius (zrcadlo; z řeči Přírody jen první půlka a hned námitka, že šestnáctiletý není nasycený host), Seneca (záchvat dušnosti bez popisu dušení, lampa, starý přítel, kterému věty pomohly, až když je řekl někdo blízko smrti).
5. Kresba s pohybem: Lucretiovo zrcadlo na ose času se dvěma pohyby (zrcadlo a námitka ztráty), bez letopočtu na pravém konci. Snímky mi pošli dřív, než ji popíšeš jako hotovou.
6. Spor Epikúros × Plútarchos (Plútarchos není v datech: strana ponese označení). Obě strany odpoví na nejsilnější námitku druhé.
7. Krok „Ti druzí“: argument o smrti lidí, které máme rádi, nemluví. Seneca přizná, že přítele oplakával bez míry, Epikúros podle Plútarcha hájí slzy.
8. Nový případ: studie A. Goransonové a kol. (2017), jen první část. Čísla nejdřív ověř ještě jednou v plném textu; „zkoušela“, ne „dokázala“; dvě skupiny; věta autorů o těch, kdo stojí vedle umírajícího.
9. Tvoje pravidlo: kdo dá za pravdu komu (kdo se bojí a argument mu nepomáhá, kdo se nebojí, kdo věří, že smrtí nic nekončí, kdo neví), panel Na začátku × Teď, karta Zkus to žít o přátelích beze slova smrt, Návrat „zpráva od kamaráda o půlnoci“.

Co do cesty nepatří: způsob jakékoli smrti; obhajoba dobrovolné smrti (Dopisy 70 a 77, druhá půlka řeči Přírody, Hégésiás, „dveře jsou otevřené“); slova „nácvik smrti“, „mysli každý den na smrt“, „vysvobození“, „klid“ a „spánek“ jako to, co čeká; „o nic nejde“; „velká bolest je krátká“ jako útěcha; začátek Dopisu 99 a tvrdé věty z Dopisu 63; „pět věcí, kterých lidé před smrtí litují“; Sókratova smrt (jen Obrana 40c–42a, bez „zisku“ a spánku); Senekova smrt, věta z Dopisu 78, syn, Paulina a večerní soud (nese portrét); čas a O krátkosti života (cesta 34); představa nejhoršího (cesta 33); třídění tužeb (cesta 6). Tentýž citát nejvýš dvakrát v celku: které jsou v portrétu, je v oddíle Po P7.

Tichý řádek pomoci vkládej komponentou <RadekPomoci /> (src/components/ui/RadekPomoci.astro), znění neměň: v úvodu cesty pod počtem kroků a pod krokem „Ti druzí“.

Stránka otázky 3 (src/content/otazky/ma-zivot-smysl.md): úvodní případ s fotografií třídy z roku 1926 a pět hlasů (Platón, Aristotelés, Epikúros, Seneca, Epiktétos), každý poznatelný a s odpovědí nejvýš na dvě věty. Antičtí autoři se neptali „má život smysl?“: stránka jim tu otázku nevkládá do úst a nechává místo pozdějším obdobím. Úvodní případ je jiného druhu než nový případ cesty.

Portrét Seneky: v kapitole 05 udělej z názvu cesty odkaz, do Kam dál dej cestu 8 na první místo (místo cesty 5) a uprav tests/e2e/seneca.spec.ts. Pokud jsem nahoře napsal změny portrétu nebo desky, udělej je jako první krok. Vstupy v hlavičce profilů Seneky a Epikúra, karty v Lidech a přehled otázek se složí z dat: zkontroluj je.

Doplň ucitel/celek-6.md o cestu: koho se téma může bolestně týkat a co s tím cesta dělá, co vynechává a proč (stoická a epikurejská místa o dobrovolné smrti), věřící student, co vědět o studii, otázky do hodiny. Čísla linek pomoci ověř znovu na jejich webech.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč jen jako citát ze zdroje.yaml (před použitím zkontroluj vnitřní uvozovky: lucretius-iii-894 má „ “ a potřebuje ‚ ‘); věty Plútarcha a studie v datech nejsou a zůstanou parafrází s vypravěčem. Doporučená formulace nesmí být silnější než tvrzení v podkladech. Zpětné vazby nesmí u žádné možnosti naznačit, že víra je útěk nebo že nevíra je odvaha. Texty mají znít jako psané člověkem (styl.md).

Tón: žádná útěcha, která zlehčuje, žádná morbidnost a žádný patos. První obrazovku každého kroku čti očima studenta, kterému někdo zemřel nebo umírá, studenta vážně nemocného a studenta s myšlenkami na smrt. Otázka na vlastní bolest nemá pole na psaní.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když spadne jen tests/e2e/cesta.spec.ts:73, pusť ten soubor znovu samostatně); cestu přidej do STRANKY v tests/e2e/prohlidka.spec.ts a napiš její průchod podle vzoru tests/e2e/cesta4.spec.ts; čas cesty spočítej skriptem scripts/slova-cesta.mjs; projdi ji na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-cesta.mjs). Po přidání cesty restartuj npm run dev.

Osnovu mi neposílej a na schválení nečekej, kromě kresby. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-6.md oddíl „Po P8“ (použité citáty, co si nese revize, co čeká na mě), připrav tam zadání P10 (revize celku skillem atlas-revize) s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-6.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md a plán větve aktualizuj i v projektu Claude. Pak mi pošli snímky cesty a stránky otázky a napiš, co jsi zvolil, kde ses od podkladů odchýlil a co čeká na mé rozhodnutí.
```
