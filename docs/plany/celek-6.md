# Plán větve celek-6: „Proč se bát smrti?“

Celek 6: portrét Seneky, cesta 8 „Proč se bát smrti?“ (období 2, velká otázka 3 „Má život smysl?“) a stránka velké otázky 3. Rozsah vybral autor 8. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; Seneca a smrt; Seneca a čas). Seneca je v datech portrét a nemá vlastní stránku; potřebují ho tři cesty katalogu (8, 33 a 34). Otázka 3 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-6-proc-se-bat-smrti.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 8. 10. 2026; podklady v `docs/podklady/celek-6-proc-se-bat-smrti.md` |
| P7 | Portrét Seneky | hotovo 8. 10. 2026; `src/content/osobnosti/seneca.mdx`, učiteli `ucitel/celek-6.md` |
| P8 | Cesta 8 „Proč se bát smrti?“ a stránka velké otázky 3 | hotovo 8. 10. 2026; `src/content/cesty/proc-se-bat-smrti*`, `src/content/otazky/ma-zivot-smysl.mdx`, kresba Zrcadlo času čeká na potvrzení autora |
| P10 | Revize celku | čeká; zadání je níže |
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
| 6 Týká se nás? | Plútarchos: kdo to je a že se přel s učením, ne s člověkem | Spor Epikúros × Plútarchos (strana jen s označením) | |
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
- `docs/pouceni.md`: šest nových vět (kratší podoba citátu, čtení očima tří studentů, věta, že argument o něm není, Roztřiď bez vlastní karty, strana Sporu bez osoby, co se skládá z dat po přidání cesty).

**Co si nese revize (P10)**

- Kresbu autor zatím nepotvrdil.
- Číst první obrazovku každého kroku očima tří studentů z Citlivých míst; zvlášť krok 5 (truchlící stojí hned nahoře), krok 7 a krok 8.
- Projít všechny kombinace: čtyři možnosti první Volby, osm karet ve čtyřech koších (zpětná vazba `kdyz` je jen u dvou karet), dvě podmínky oslavy se třemi odpověďmi, Spor z obou stran, dvě Volby u studie, tři odpovědi Návratu.
- Spor na telefonu: Epikúros stojí první a námitku, na kterou odpovídá, říká scéna a začátek jeho třetího argumentu. Poslední slovo má Plútarchos („dvojí metr“); posoudit, jestli na ně Epikúrův třetí argument stačí.
- Nagel: věta stojí na SEP, článek je nečtený.
- Hlas Seneky na stránce otázky 3 má větu, která je výklad („podle stoiků nerozhoduje on“).
- Doba a lidé u Epikúra a Seneky se nezměnila; popisek „navázal na jeho texty“ u Seneky zůstává (poznámka z P7).
- Epikúrův profil cestu 8 nejmenuje v textu ani v Kam dál; vede na ni jen hlavička z dat.
- České překlady, Dopis 70, celý Media Guide a výroky připisované Senekovi v listu pro učitele: viz `k-overeni.md`.
- Čísla linek pomoci ověřit znovu; Poradnu Vigvam ručně.

**Čeká na autora**

1. Kresba Zrcadlo času: potvrdit, nebo říct, co změnit (snímky jsou v chatu a ve složce `Claude outputs/celek-6-p8/`).
2. Poslední věta Obrany („Kdo z nás jde za lepším, neví nikdo kromě boha“): vynechal jsem ji; kdybys ji chtěl, vrátí se jedním řádkem na konec kroku 9.
3. Dílo pod citáty z posledního dopisu: „Dopis z posledního dne“ místo „Dopis Ídomeneovi“.
4. Strana Sporu bez osoby (Plútarchos s prázdnou mincí): nechat, nebo později přidat Plútarcha do dat.
5. Krok 5 s oslavou: je to nejlehčí místo cesty; kdyby v celku o smrti rušilo, krok obstojí i bez bloku.
6. Obrázek pro vstup cesty zůstal nevybraný (bez obrázku); papyrus by šel doplnit i po revizi.
7. Z P7 trvá: výřez na desce, Rubensova kresba, motiv ochrany rodiny, tři karty velkých myšlenek, Lucanovo jméno, české překlady.

## Zadání P10: Revize celku 6

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Revize čte cestu o smrti očima studentů, kterých se bolestně týká, a hlídá znění jednotlivých vět proti pramenům; na menším modelu ani s nižším úsilím bych ji nepouštěl. Zadání počítá s úsporným čtením a s tím, že se nálezy průběžně neschvalují. Před odesláním doplň tři řádky; prázdný řádek znamená „nechat, jak je“.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-6. Portrét Seneky, cesta 8, kresba Zrcadlo času a stránka otázky 3 jsou v ní hotové a commitnuté.

Kresba Zrcadlo času (potvrzuji / chci změnit: …): 
Poslední věta Obrany v kroku 9 (nechat vynechanou / vrátit): 
Dílo pod citáty z posledního dopisu („Dopis z posledního dne“ / „Dopis Ídomeneovi“): 

Udělej revizi celku 6 podle skillu atlas-revize. Do celku patří:
- portrét Seneky (src/content/osobnosti/seneca.mdx a bloky seneca-*.yaml);
- cesta 8 „Proč se bát smrti?“ (přehled, devět kroků, bloky cesta8-*.yaml, Odkryj v kroku 3, případ pro Návrat);
- kresba Zrcadlo času v kroku 4 (src/lib/zrcadlo.ts, src/components/ostrovy/Zrcadlo.svelte);
- stránka velké otázky 3 „Má život smysl?“ (src/content/otazky/ma-zivot-smysl.mdx);
- list pro učitele ucitel/celek-6.md;
- propojení: hlavičky profilů Seneky a Epikúra, Kam dál portrétu, přehled otázek, Lidé, Domů; nové vstupy u Platóna, Aristotela a Epiktéta (hlasy otázky 3);
- co se od P8 chová jinak v celém atlasu: strana Sporu bez osoby (prázdná mince), přehled cesty bez odkazu na osobnost, která nemá stránku.

Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md, docs/pouceni.md;
- v docs/plany/celek-6.md tabulku stavu a oddíly „Po P7“ a „Po P8“;
- docs/podklady/celek-6-proc-se-bat-smrti.md: je to měřítko revize. Čti vždy oddíl k tomu, co právě kontroluješ (Citlivá místa celá a pozorně; Tvrzení: Seneca; Tvrzení: cesta 8; Velká otázka 3; Citáty), ne celý list naráz;
- z docs/podklady/k-overeni.md oddíl Celek 6 s částmi Po P7 a Po P8; z docs/rozhodnuti.md oba záznamy z 8. 10. 2026 k celku 6;
- v docs/design.md oddíly Cesta, Velká otázka, Spor a z Komponent Kresbu s pohybem (jen Rám a Zrcadlo času);
- jako vzor záznamu jen začátek docs/revize/celek-5-2026-10-08.md (formát a hloubka nálezů).
Podklady a obsah celků 1 až 5 jinak nečti; z profilu Epikúra a portrétů Sókrata, Platóna a Aristotela jen místa, na která celek 6 odkazuje.

Na co se dívej zvlášť:

1. Student, kterého se téma bolestně týká. Projdi portrét, cestu a stránku otázky třikrát: jako student, kterému někdo zemřel nebo umírá, jako student vážně nemocný a jako student s myšlenkami na smrt. Čti první obrazovku každého kroku a kapitoly na telefonu, všechny zpětné vazby (i zavřené „Co kdybys zvolil jinak?“), text pod kresbou, kartu Zkus to žít a Návrat. Nikde způsob smrti, obhajoba dobrovolné smrti, „klid“, „spánek“ nebo „vysvobození“ jako to, co čeká, „o nic nejde“, srovnání šťastných s nešťastnými ani otázka na vlastní ztrátu s polem na psaní. Zvlášť: krok 5 (truchlící hned nahoře), krok 7, krok 8 a kapitoly 01 a 06 portrétu.
2. Na který strach argument míří. U každého argumentu cesty musí stát, na který z pěti strachů míří, a musí to stát dřív, než to student namítne. O smrti blízkých: říká cesta nahlas, že o ní Epikúrova věta nemluví, a kdo je na straně toho, kdo truchlí?
3. Znění proti pramenům. Epikúros: „netýká se nás“, ne „nic není“; „zvykej si“; adresát „přítel“; nemoc bez těla; škola netvrdila, že nebolí. Lucretius: jen první půlka řeči Přírody; odpověď truchlícím jen o mrtvém. Seneca: záchvat bez dušení, „přejde asi do hodiny“; starý přítel beze jména; přiznání z Dopisu 63. Aristotelés: věta je z výkladu o statečnosti a Epikúrovi neodpovídal. Sókratés: jen Obrana 40c, nerozhodl. Platón: „krásné riziko“ s výhradou. Porovnej každou větu s tabulkami podkladů; „asi“ zůstává „asi“.
4. Plútarchos. Strana Sporu bez osoby: je z textu jasné, kdo to je, že psal o staletí později a že řeč pronáší jeho přítel? Jsou jeho věty parafráze, ne citáty? Obstojí prázdná mince vedle Epikúrovy na telefonu i na notebooku?
5. Spor na telefonu. Epikúros stojí první: odpovídá jen na to, co už zaznělo? Poslední slovo má Plútarchos („dvojí metr“): má na ně Epikúros odpověď ve svých argumentech?
6. Kresba Zrcadlo času. Říká text kroku i text pod kresbou totéž co ona? Je poctivé, že se budoucnost překlápí na minulost (Lucretius to říká obráceně)? Nevypadá pohled Námitka jako odhad délky života? Je vpravo opravdu bez čísla? Jde všechno klávesnicí, jsou popisky čitelné na telefonu, mění se stav hned při omezeném pohybu?
7. Studie z roku 2017. Čísla a formulace porovnej s podklady a s oddílem Po P8 v k-overeni.md: „zkoušela“, dvě skupiny, věta autorů o těch, kdo stojí vedle, v hlavním textu; výhrady jen ve zpětné vazbě; druhá polovina studie nikde.
8. Věřící student. Žádná zpětná vazba nesmí naznačit, že víra je útěk nebo nevíra odvaha. Má věřící student v posledním kroku zastánce a ví to už od třetího kroku?
9. Kdo dá za pravdu komu. Najde student, který se bojí a argument mu nepomáhá, jiného myslitele než filozofy cesty? A ten, kdo se nebojí, kdo neví a kdo věří?
10. Opakování. Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku (seznamy citátů jsou v oddílech Po P7 a Po P8). Projdi portrét, cestu a stránku otázky 3 za sebou, jak je projde student. Co portrét řekl (věta z Dopisu 78, syn, Paulina, večerní zkouška, Senekova smrt), cesta neopakuje.
11. Stránka otázky 3. Pozná se každý z pěti hlasů? Má odpověď nejvýš dvě věty? Nevkládá stránka antickým autorům do úst „smysl života“? Je úvodní případ jiného druhu než případy cesty? Senekova myšlenka („podle stoiků nerozhoduje on“) je výklad: potvrď ji v Dopise 61, nebo navrhni jinou.
12. Každá kombinace. Všechny možnosti tří Voleb cesty, osm karet ve čtyřech koších, dvě podmínky oslavy se třemi odpověďmi, Odkryj, Spor z obou stran, tři odpovědi Návratu; bloky portrétu.
13. Co se skládá z dat. Vstupy v hlavičkách (Seneca, Epikúros, Platón, Aristotelés, Epiktétos), Doba a lidé u Seneky a Epikúra, Kam dál, řádek cesty u otázky 3 v přehledu, karty v Lidech (Lucretius cestu na kartě nemá), přehled cesty (Lucretius bez odkazu), Domů.
14. List pro učitele. Je v něm všechno, co studentský text vynechává, i s důvodem? Odpovídá cestě (čísla kroků, znění)? Čísla linek pomoci ověř znovu na jejich webech; Poradnu Vigvam ručně.
15. Délka. Cesta má na štítku 32 minut (node scripts/slova-cesta.mjs proc-se-bat-smrti). Řekni, co je v ní dvakrát a co by šlo zkrátit bez ztráty myšlenky, ale sám nezkracuj.
16. Strojový text. Všechny studentské texty celku přečti ještě jednou jen podle oddílu „Ať text nezní jako stroj“.

Otevřené body, ke kterým chci doporučení: blok s oslavou v kroku 5 (nechat / krok bez bloku); věta o Nagelovi (nechat / zmírnit / přečíst článek); obrázek pro vstup cesty (papyrus z The Met 251788 / žádný); Plútarchos v datech (přidat později / nechat označení); odkaz na cestu 8 v textu profilu Epikúra; výřez hermy na desce; české překlady citátů; tabulka výroků připisovaných Senekovi v listu pro učitele.
Rozhodnuté, neotvírej: slovo „sebevražda“ jen o Senekově smrti a s rozkazem; věta z Dopisu 78 v kapitole o mládí; řádek pomoci jen jako informace na okraj; obhajoba dobrovolné smrti jen učiteli; nové osoby do dat teď ne; vstup cesty je dopis, ne lůžko.

Drobnosti oprav rovnou (překlep, sazba, věta přes 25 slov, test, který hlídá opravenou větu). Zásadní nálezy neopravuj: seřaď je podle dopadu, ke každému napiš návrh opravy a zapiš je do docs/revize/celek-6-<datum>.md. Řekni verdikt: schválit / po opravách / přepracovat.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322; když spadne jen tests/e2e/cesta.spec.ts:73, pusť ten soubor znovu samostatně). Snímky cesty na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-cesta.mjs) si prohlédni.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-6.md oddíl „Po P10“ (verdikt, nálezy, co jsi opravil, co čeká na mě) a připrav tam zadání oprav s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-6.md, nová poučení připiš jednou větou do docs/pouceni.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš verdikt, nálezy seřazené podle dopadu a co čeká na mé rozhodnutí.
```
