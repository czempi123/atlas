# Plán větve celek-6: „Proč se bát smrti?“

Celek 6: portrét Seneky, cesta 8 „Proč se bát smrti?“ (období 2, velká otázka 3 „Má život smysl?“) a stránka velké otázky 3. Rozsah vybral autor 8. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; Seneca a smrt; Seneca a čas). Seneca je v datech portrét a nemá vlastní stránku; potřebují ho tři cesty katalogu (8, 33 a 34). Otázka 3 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-6-proc-se-bat-smrti.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 8. 10. 2026; podklady v `docs/podklady/celek-6-proc-se-bat-smrti.md` |
| P7 | Portrét Seneky | čeká; zadání je níže |
| P8 | Cesta 8 „Proč se bát smrti?“ a stránka velké otázky 3 | čeká na P7 |
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

## Zadání P7: Portrét Seneky

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.** Je to nejcitlivější portrét atlasu (smrt na císařův rozkaz, věta o tom, že mladý Seneca nechtěl žít, otroci, služba Neronovi) a rozhoduje v něm tón jednotlivých vět; na Sonnetu bych ho nepsal. Čtyři řádky s odpověďmi jsou vyplněné podle chatu z 8. 10. 2026; u prvních dvou zbývá doplnit konec (Rubensova kresba, motiv ochrany rodiny). Nedoplněný konec znamená doporučení podkladů: kresbu ne, motiv jen učiteli.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-6. Podklady (P6) jsou hotové.

Obrázek: berlínská herma se jménem SENECA, souhlasím se stažením i s licencí CC BY-NC-SA. Rubensova kresba Pseudo-Seneky (ano / ne): 
Senekova smrt: znění z podkladů; slovo „sebevražda“ se použít smí, vždy s rozkazem. Motiv ochrany rodiny (jen učiteli / i ve studentském textu jako popis zákona): 
Věta z Dopisu 78 „Někdy je statečné i žít“: ano, do kapitoly o mládí.
Řádek s kontaktem pomoci pod poslední kapitolou portrétu: ano, jen jako informace na okraj, znění z podkladů.

Napiš portrét Seneky podle skillu atlas-osobnost. Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md a docs/pouceni.md (oddíl Student, kterého se téma bolestně týká pozorně);
- v docs/plany/celek-6.md tabulku stavu a oddíl „Po P6“;
- z docs/podklady/celek-6-proc-se-bat-smrti.md: úvod (Čeho se drží celý celek, Jak převádím klíčová slova), Nejsilnější příběhy, celý oddíl Tvrzení: Seneca (portrét), celý oddíl Citlivá místa, z tabulky Citáty řádky 1 až 17, Návrh dat, Obrázky (Podobizna Seneky) a Rozpory a rozhodnutí. Oddíly o cestě 8 a o otázce 3 nečti; z nich jen seznam Překryvy, kterým se cesta vyhne;
- jako vzor stavby hlavičku a jednu kapitolu src/content/osobnosti/aristoteles.mdx a jeden jeho blok v src/content/bloky/;
- co atlas o Senekovi už říká, najdi grepem („Senec“) v src/content/otazky/jak-zit.mdx, src/content/osobnosti/epikuros.mdx a src/content/cesty/kolik-je-dost/; nic z toho neopakuj.

Co portrét má mít:

1. Osa. Ne učitel a vladař (to byla cesta 4), ale člověk, který psal, jak žít, a třináct let stál vedle moci, ze které pak nesměl odejít; a k tomu slovo a život. Rozdíly od Aristotela a Alexandra jsou v podkladech (Seneca a Nero nejsou Aristotelés a Alexandr): portrét je nevyjmenovává, stojí na nich. Žádná omluva a žádný soud naším hlasem.
2. Vstup. Žádost o odchod roku 62 (Nejsilnější příběhy 7), bez přímé řeči: řeči složil Tacitus. Vila a platany patří kapitole o stáří a dopisech. Smrtí portrét nezačíná.
3. Tři myšlenky, každá s vlastním pokusem studenta před výkladem a s námitkou, kterou nese jiný myslitel nebo Seneca sám: „Učíme se pro školu, ne pro život“ (Roztřiď), otroci jsou lidé (Změň jednu věc; Seneca otroky měl a propuštění nežádal; atlas má portrét Epiktéta), odklad jako lék na hněv (Volba). Karta Zkus to žít: večerní tři otázky; otázky jsou Sextiovy a věta před citátem to řekne.
4. Život podle tabulky Život a tabulky Kdo to vypráví. U každé věty drž typ tvrzení z podkladů: „asi“ zůstává „asi“, co říká jen Tacitus, říká Tacitus, a Tacitovy řeči nejsou Senekova slova. Nepoužívej: pět dobrých let, půjčku Britům, poměry s Julií a Agrippinou, Egypt jako fakt, dopisy s Pavlem jako fakt, výši majetku jinak než jako Suilliovu výčitku.
5. Senekova smrt: znění z podkladů a moje odpověď výše. Způsob nikde. Slovo „sebevražda“ jen s rozkazem v téže větě („vynucená sebevražda“), ne „spáchal“; žádné „klidně“, „statečně“, „důstojně“, „po vzoru Sókrata“, „zvolil“, „odešel“. Prázdný řádek o motivu znamená: jen učiteli. Hned po scéně to, co po něm zůstalo, a otázka pro studenta. Paulina jednou větou.
6. Co portrét nechává jinde: argumenty o smrti a záchvat dušnosti (Dopisy 54, 30, 24) a útěchy cestě 8, čas cestě 34 (v portrétu jen atribut), představu nejhoršího cestě 33, bohatství a jeho odpověď stránce otázky 1 (odkaz).
7. Kapitola nebo Odkryj „Tvář, která mu nepatřila“ s hermou: jediná podobizna se jménem a tvář, kterou Evropa neznala. Popisek říká, co to je, odkud a z kdy; autor a licence jsou vidět v Pramenech na téže stránce.
8. Kdo žil dřív?, Doba a lidé a Kam dál podle skillu. Cestu 8 jmenuj zatím bez odkazu; vznikne v P8.

Data: hlavní citát a obrázek Seneky. Hermu stáhni (souhlas je výše): originál mimo repozitář, do public/obrazky/ kopii zmenšenou na 1280 px; předtím ověř v záznamu muzea verzi licence a jméno fotografa a napiš mi název souboru, zdroj a velikost. Jiný obrázek jen po mém souhlasu. Nové osoby nepřidávej. Po změně dat restartuj běžící npm run dev.

Založ ucitel/celek-6.md a zapiš do něj z oddílu Citlivá místa to, co se týká portrétu: Senekovu smrt celou podle Tacita a proč ji studentský text krátí, Dionovu verzi, proč text říká „vynucená sebevražda“ a ne „spáchal“, římský zvyk podle Tacita VI, 29 a proč není Senekovým motivem, obrazy Senekovy smrti a proč je atlas neukazuje, stoickou obhajobu dobrovolné smrti a co jí v Senekovi odporuje, otroky a Dopis 47, bohatství, Nerona, Paulinu, co odpovědět na otázku „a jak tedy zemřel?“ a linky pomoci (116 111, 116 123, Poradna Vigvam). Bez odkazu ze studentského webu; ověř, že se soubor nedostane do sestaveného webu. Cesta doplní svou část v P8.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když spadne jen tests/e2e/cesta.spec.ts:73, pusť ten soubor znovu samostatně); snímky portrétu na 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs); oddíl Doba a lidé na stránkách Seneky a Epikúra (nové vztahy z P6); karta Seneky v Mapě a čase.

Na schválení nečekej. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš do docs/plany/celek-6.md oddíl „Po P7“ (co stránka má, použité citáty, co se změnilo mimo portrét, co si nese P8, co čeká na autora), připrav tam zadání P8 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-6.md, rozhodnutí zapiš do docs/rozhodnuti.md, vynechané a neověřené do docs/podklady/k-overeni.md (Po P7) a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co stránka má, kde ses od podkladů odchýlil a proč a co čeká na mé rozhodnutí, a pošli snímek úvodu, poslední kapitoly a jednoho bloku.
```
