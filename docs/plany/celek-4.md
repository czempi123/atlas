# Plán větve celek-4: „Je to, co vidím, celá skutečnost?“

Celek 4: portrét Platóna, cesta 3 „Je to, co vidím, celá skutečnost?“ (období 1, velká otázka 6 „Co je skutečné?“) a stránka velké otázky 6 s antickými hlasy. Rozsah zvolil autor 3. 10. 2026 („Platón a jeskyně“). Po třech celcích z helenismu a Říma se atlas vrací do období 1: Platón je v datech portrét a zatím mluví jen cizími ústy (v Sókratově portrétu, v cestě 1 a ve Sporu s Diogenem). Podklady vzniknou v `docs/podklady/celek-4-co-je-skutecne.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 3. 10. 2026 (`docs/podklady/celek-4-co-je-skutecne.md`); autor 4. 10. 2026 rozhodl otevřené otázky, obrázky jsou stažené |
| P7 | Portrét Platóna | **další krok**; zadání je připravené v oddílu P7 na konci (4. 10. 2026) |
| P8 | Cesta 3 „Je to, co vidím, celá skutečnost?“ a stránka velké otázky 6 „Co je skutečné?“ | po P7 |
| P10 | Revize celku | po P8 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po revizi |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`.

**Souběh s větví `rozhrani-v2`.** Autor chce úpravy rozhraní (`docs/plany/rozhrani-v2.md`) projít zvlášť. Podklady (P6) se rozhraní netýkají a mohou běžet souběžně. Před P7 se do `celek-4` sloučí hlavní větev, pokud v ní `rozhrani-v2` už bude: nový portrét a cesta mají vzniknout na novém obsahu profilu a novém závěru cest, ne na starém.

## Co si celek nese z celků 1 až 3

- **Co už v atlasu o Platónovi je:**
  - V datech (`lide.yaml`): portrét, období 1, otázky 6, 8, 2 a 7, místa Athény a Syrákúsy (pobyt do roku 361 př. n. l.), atribut jeskyně („Přirovnal nás k vězňům, kteří mají stíny na zdi za skutečnost“), vztahy se Sókratem (učitel), Aristotelem, Speusippem a Xenokratem (žáci), Archytou a Eudoxem. Obrázek zatím nemá.
  - Jeho dialogy nesou Sókratův portrét (Obrana, Kritón, Faidón, Lachés, Euthyfrón, Symposion) a cestu 1 (Theaitétos, Prótagorás). Tyto scény si celek 4 nebere.
  - Spor Platón × Diogenés „Co je skutečnější, to, co vidíš, nebo to, co pochopíš?“ (`platon-diogenes-skutecnost`) stojí v Sókratově portrétu a odkazuje na něj profil Diogena. Používá obraz jeskyně i větu o stolovosti (`dl-vi-53-platon`, jediný citát vedený pod Platónem). Oškubaný kohout a „Sókratés, který se zbláznil“ jsou v profilu Diogena.
  - Pramen `platon-ustava` v datech je jen Ústava VII. Citát z podobenství o jeskyni v `zdroje.yaml` není.
  - Stránka otázky 6 je zatím řádek v přehledu `/otazky/`. Parmenidés a Aristotelés už mluví na stránce otázky 7; Aristotelés navíc na otázkách 1 a 4 a ve Sporu cesty 5, pořád bez vlastního portrétu.
- **Největší riziko celku je tón, ne věcná chyba.** Jeskyně lichotí: student se snadno posadí mezi ty, kdo vyšli ven, a ostatní má za vězně. Stejným obrazem mluví konspirační weby („probuďte se“). Cesta ho proto musí nechat sedět mezi vězni, zeptat se, podle čeho by poznal, že venku opravdu byl, a dát slovo i tomu, kdo říká, že na „stínech“ záleží a že o skutečnosti nemá rozhodovat ten, kdo o sobě tvrdí, že ji viděl.
- **Poučení z revizí** (`docs/revize/`; jsou i ve skillech):
  - shrnutí pramene drží jeho rozdíly, „asi“ zůstává „asi“ a doporučená formulace není silnější než tvrzení;
  - Spor dá oběma stranám odpověď na nejsilnější námitku, postoj není krajnější než citát strany a na telefonu neodpovídá první strana na něco, co student ještě nečetl;
  - každý hlas na stránce otázky se pozná a nezmenšuje se to, čím se liší; cesta dá slovo i studentovi, který s jejím filozofem nesouhlasí;
  - možnosti ve Změň jednu věc dávají smysl v každé podmínce a zpětná vazba neusuzuje z možnosti, kterou student nezvolil;
  - tentýž citát i tentýž doložený detail nejvýš dvakrát v celku; úvodní případ otázky je jiného druhu než nový případ cesty;
  - spojovací věta netvrdí spor ani otázku, které nebyly; co s příběhem děláme my, nepřipisujeme filozofovi;
  - shrnutí studie drží i to, co měli účastníci dělat; výhrady patří do zpětné vazby;
  - první obrazovka každého kroku se čte očima studenta, kterého se téma bolestně týká;
  - u dialogu je třeba říct, kdo mluví: podobenství o jeskyni vypráví v Ústavě Sókratés, napsal je Platón („Platón nechává Sókrata vyprávět…“).
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové; Změň jednu věc smí mít vlastní nadpis oddílu Co udělal; popisek obrázku se ukazuje pod deskou; Doba a lidé dělí vztahy podle typu; mini osa a mini mapa hlídají překryvy samy.
- **Nové osoby** se do dat zatím nepřidávají (rozhodnutí autora z 2. 10. 2026). Koho příběh potřebuje a v datech není, zůstane v textu bez odkazu a podklady to řeknou.

## P6: Podklady k celku 4 „Je to, co vidím, celá skutečnost?“

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Sonnet 5.5 · high s vyhledáváním; u sporných pramenů (Sedmý list, cesty do Syrákús, prodej do otroctví, nápis nad Akademií) Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pracuj ve větvi celek-4; je založená z hlavní větve po sloučení celku 3.

Přečti CLAUDE.md, docs/styl.md, docs/plany/celek-4.md (co si celek nese z celků 1 až 3), v docs/architektura.md velkou otázku 6, cestu 3, cesty 2, 4 a 13 (Hérakleitos a Parmenidés, Aristotelés, Descartes, aby se celky nepřekrývaly) a myšlenkové pokusy období 1–2 (Gygův prsten), docs/podklady/k-overeni.md, hotový podkladový list docs/podklady/celek-3-co-mam-v-rukou.md jako vzor a všechny tři záznamy revizí v docs/revize/ (co se v celcích nepovedlo). Podívej se, co už atlas o Platónovi říká: src/content/osobnosti/sokrates.mdx, src/content/bloky/platon-diogenes-skutecnost.yaml, src/content/osobnosti/diogenes.mdx a src/content/otazky/jak-poznam-pravdu.mdx. Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 4 „Je to, co vidím, celá skutečnost?“. Studentský text zatím nepiš.

1. Platón pro portrét: život (athénská rodina a doba po prohrané válce, setkání se Sókratem, Sókratův proces a smrt, u které Platón podle Faidóna nebyl, cesty do Syrákús za Diónem a oběma Dionýsii, založení Akademie, Aristotelés jeho žákem dvacet let, smrt). U každého příběhu zjisti, kdo ho vypráví a jak dlouho po Platónovi: jméno Aristoklés a přezdívka Platón, zápasník, spálené tragédie, prodej do otroctví na Aigíně, nápis „Ať nevstoupí nikdo neznalý geometrie“, smrt na svatební hostině. Označ, co je doložené, co tradované a co podezřelé. Sedmý list: řekni, jak se k jeho pravosti staví SEP a novější bádání, a navrhni formulaci, která obstojí v obou případech. Myšlenky: ideje (na příkladu, který unese šestnáctiletý člověk), podobenství o jeskyni, slunci a úsečce, vědění jako rozpomínání (Menón a otrok), duše o třech částech, spravedlnost v obci a filozofové jako vládci. Řekni, kde končí Sókratés a začíná Platón, a jak o tom psát, když v dialozích mluví skoro vždy Sókratés. Jeho nejsilnější argument v nejsilnější verzi a nejsilnější námitky i s tím, co na ně odpovídá sám: třetí člověk a mladý Sókratés v dialogu Parmenidés, Aristotelova kritika idejí (Metafyzika I, 9; Etika Nikomachova I, 6), Diogenova stolovost. Výrok „Platón je mi přítel, ale pravda větší“ ověř: co přesně Aristotelés napsal a kde.

2. Cesta 3 „Je to, co vidím, celá skutečnost?“: vstupní scéna je podobenství o jeskyni (Ústava VII, 514a–520a). Přečti je celé v řečtině nebo ve spolehlivém překladu a rozepiš jeho kroky tak, jak je pramen má: pouta, oheň, zídka a nosiči, ozvěna, osvobození a bolest očí, výstup, slunce, návrat a co vězni udělají s tím, kdo se vrátí. Drž rozdíly pramene (kdo vězně osvobodí, co vidí nejdřív, proč se vrací). Vlastní pokus studenta před výkladem: navrhni blok (Odkryj, Volba nebo Roztřiď: co z mého dne znám z vlastní zkušenosti a co jen z obrazovky). Skutečný střet pro blok Spor: navrhni protivníka, jehož námitka je v pramenech (Aristotelés a jednotlivé věci; Diogenés je už ve Sporu v Sókratově portrétu, řekni, jestli ten Spor nechat tam, přesunout do cesty, nebo v cestě použít jiný). Obě strany v nejsilnější verzi, každá s odpovědí na nejsilnější námitku druhé. Nový případ ze současnosti: bubliny na sociálních sítích. Najdi doložený výzkum, který se dá vyprávět přímo (co se stane, když se lidem změní skladba příspěvků), a řekni poctivě, co ukázal a co ne; kdyby výsledky představu bublin zpochybňovaly, tím líp. Druhá možnost je „Představ si…“ bez skutečných osob. Mysli na tón: jeskyně nesmí studentovi lichotit, že on vidí a ostatní spí. Navrhni, kde ho cesta posadí mezi vězně, kde se zeptá, podle čeho by poznal, že venku opravdu byl, a kdo dá za pravdu studentovi, podle kterého jsou „stíny“ skutečné dost.

3. Velká otázka 6 „Co je skutečné?“: zjisti, kteří antičtí myslitelé se o to opravdu přeli (Parmenidés, Hérakleitos, Démokritos, Platón, Aristotelés, Diogenés). U každého jedna ověřená myšlenka se zdrojem a citát, který patří téže osobě. Hérakleitos a Parmenidés nesou cestu 2 a Parmenidés i Aristotelés už mluví na otázce 7: navrhni čtyři hlasy tak, aby každý řekl něco jiného než na ostatních stránkách a aby mezi nimi byl někdo, kdo dá za pravdu smyslům. Navrhni úvodní případ ze života studenta (jiného druhu než nový případ cesty) a řekni, jestli má stránka vzniknout už teď.

4. Gygův prsten (Ústava II, 359c–360d): architektura ho vede jako samostatný myšlenkový pokus. Navrhni, jestli ho má nést portrét jako blok, nebo zůstat samostatné stránce, a připrav k němu ověřené podklady pro obě možnosti.

5. Obrázky: podobizna Platóna (antická busta nebo její římská kopie) a obraz jeskyně pro scénu cesty, z muzeí s otevřeným přístupem; autor, instituce, licence a odkaz. U pozdějšího zobrazení jeskyně řekni, čí je to představa a z kdy.

6. Data: navrhni, co doplnit Platónovi v src/data (roky u míst, prameny, obrázek) a které vztahy přibudou. Nové osoby nepřidávej; koho příběh potřebuje a v datech není (Dión, Dionýsios), zůstane v textu bez odkazu.

Výstup: podkladový list docs/podklady/celek-4-co-je-skutecne.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny jako v celcích 1 až 3; kde existuje český překlad, uveď ho pro srovnání), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí).

Pravidla jako u celku 3, s poučením ze všech tří revizí: každé historické tvrzení a citát se zdrojem; u každého shrnutí pramene drž rozdíly, které pramen dělá; doporučená formulace nesmí být silnější než tvrzení („asi“ zůstává „asi“); tradované jako tradované, výklad jako výklad; u dialogu vždy řekni, kdo mluví. Už v podkladech mysli na studenta, který s Platónem nesouhlasí: musí v nich být myslitel, který mu dá za pravdu. Citlivá místa Ústavy (cenzura básníků, společné ženy a děti, výběr dětí, „ušlechtilá lež“) sepiš zvlášť a u každého navrhni, jestli patří do studentského textu, učiteli, nebo nikam. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Nejdřív mi v pár bodech napiš, co budeš ověřovat, které příběhy považuješ za nejsilnější, jaký Spor a nový případ navrhuješ, co s dosavadním Sporem Platón × Diogenés a které čtyři hlasy vidíš na stránce otázky 6, a počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci napiš, co je ověřeno, co zůstalo otevřené a co potřebuje moje rozhodnutí.
```

## Po P6 (3. 10. 2026)

Podklady jsou v `docs/podklady/celek-4-co-je-skutecne.md`; nové prameny (35) a citáty (35) v `src/data/zdroje.yaml`, data Platóna, čtyři vztahy a Platón u Sókratova procesu v `src/data/`. `npm test` prošel celý (279 testů dat, 161 v prohlížeči). Studentský text nevznikl.

**Rozhodl autor nad osnovou:** Spor v cestě 3 je Platón × Aristotelés; Spor Platón × Diogenés se přesune do Platónova portrétu; novým případem je pokus na Facebooku z roku 2020; čtyři hlasy otázky 6 jsou Parmenidés, Démokritos, Platón a Aristotelés; větev `rozhrani-v2` půjde na GitHub až s tímto celkem.

**Větev `rozhrani-v2`** je sloučená do `celek-4` (commit cc766c5); nový portrét a cesta vzniknou na novém rozhraní. Na GitHub půjde s celkem 4.

**Odpovědi autora ze 4. 10. 2026** (podrobně v podkladovém listu, Rozhodnutí autora, a v `docs/rozhodnuti.md`):

- obrázek Platóna je kodaňský sádrový odlitek (`platon-smk`), obraz jeskyně Saenredamova rytina z roku 1604 (`jeskyne-saenredam`); oba soubory jsou v `public/obrazky/` a v datech;
- Gygův prsten je blok Změň jednu věc v portrétu;
- stránka otázky 6 vznikne v P8, úvodní případ je duha (Aristotelés o ní psal: Meteorologika III, 2 a 4, citát `meteorologika-iii-4`);
- části duše: rozum, hněv a žádostivost;
- citlivá místa Ústavy podle návrhu (cenzura básníků a ušlechtilá lež do studentského textu, společné děti strážců učiteli, výběr dětí jen učiteli);
- studentovi, který nesouhlasí, dává v cestě za pravdu jen Aristotelés; Isokratés v cestě nebude;
- nové vztahy zůstávají v datech.

**Zůstává otevřené:** údaj pod citátem ze Sedmého listu (platí doporučení „dochováno pod Platónovým jménem“, dokud autor neřekne jinak), výřezy obou obrázků (odhad) a uložení skillu `atlas-overeni` v účtu.

**Co si P7 a P8 nesou z podkladů:**

- U dialogu vždy mluvčí: „Platón nechává Sókrata vyprávět“; prsten vypráví Glaukón, námitky proti idejím Parmenidés, boj obrů host z Eleje, vědění a mínění Tímaios.
- Jeskyně podle kroků pramene: vězni jsou „podobní nám“; osvobodí je někdo jiný a násilím; venku jsou nejdřív zase stíny; vracejí se, protože musí; „bůh ví, jestli je to pravda“.
- Jeskyně smí být v celku nejvýš dvakrát jako obraz mimo cestu (atribut a portrét); Spor s Diogenem a hlas Platóna na otázce 6 ji nepoužívají.
- Sedmý list: fakta cest přímo, pohnutky jen s větou o dopise.
- Tradované příběhy (otroctví na Aigíně, spálené tragédie, odpověď tyranovi, „co toho ten mladík nalhal“) jako „Vypráví se“; jméno Aristoklés, nápis o geometrii a verze smrti do studentského textu nepatří.
- Shrnutí pokusu z roku 2020 drží, co vědci změnili (třetinu, na tři měsíce) a co ne; výhrady až ve zpětné vazbě.
- Rytina jeskyně je představa z roku 1604 a lichotí divákovi (dav ve tmě a hrstka vidoucích); u Platóna jsou vězni „podobní nám“. Popisek i text to drží.
- Aristotelés na stránce otázky 6 nesmí znít, jako by znal dnešní fyziku: duha je u něj odraz pohledu od kapek ke slunci; ve studentském textu „odraz v kapkách“.

## P7: Portrét Platóna

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-4; jsou v ní podklady z P6, oba obrázky a sloučená větev rozhrani-v2.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-4-co-je-skutecne.md (Čeho se drží celý celek, Jak převádím klíčová slova, Nejsilnější příběhy, Tvrzení: Platón i s tabulkou příběhů a oddílem o Sedmém listu, Kde končí Sókratés a začíná Platón, Nejsilnější argument, Nejsilnější námitky, Citlivá místa Ústavy, Spor Platón × Diogenés: přesun, Gygův prsten, Citáty se sloupci Mluví a Kde použít, Obrázky, Rozpory a rozhodnutí, Rozhodnutí autora), docs/podklady/k-overeni.md (oddíl Celek 4), docs/rozhodnuti.md (záznamy z 3. a 4. 10. 2026), v docs/plany/celek-4.md oddíly „Co si celek nese z celků 1 až 3“ a „Po P6“, všechny tři revize v docs/revize/, v docs/design.md to, co se týká stránky osobnosti (Deska a popisek pod ní, Mini mapa osoby, obsah profilu) a Bloky, a hotové stránky src/content/osobnosti/sokrates.mdx a epiktetos.mdx (portréty) a diogenes.mdx (odkazuje na Spor s Platónem). Postupuj podle skillu atlas-osobnost.

Napiš portrét Platóna src/content/osobnosti/platon.mdx (v datech má hloubka: portret; stránka zatím neexistuje).

1. Úvod scénou: Platón u Sókratova soudu seděl a nabídl se jako ručitel, v den popravy ve vězení chyběl. Sám to do dialogu napsal jednou větou (faidon-59b; větu říká Faidón, napsal ji Platón). Navrhni hlavní citát stránky (kandidáti faidon-59b a menon-86b) a pointu.

2. Kapitoly. Návrh pěti; uprav ho, když najdeš lepší stavbu:
- 01 Válka, příbuzní u moci a Sókratés: vyrostl ve válce, kterou Athény prohrály; mezi oligarchy, kteří se pak chopili moci, byli jeho příbuzní z matčiny strany (stupeň příbuzenství neuvádět); že ho zvali mezi sebe a co ho odradilo, jen s větou „V dopise, který se dochoval pod jeho jménem, stojí…“; chodil za Sókratem (bez věku); spálené tragédie jako „Vypráví se“ (dl-iii-5 volitelně). Blok: Volba (příbuzní tě zvou do vlády).
- 02 Škola v háji a chlapec se čtvercem: po návratu z první cesty začal učit v Akadémii; psal rozhovory a sám v nich nemluví; „co toho ten mladík nalhal“ jako „Vypráví se“ (dl-iii-35) a hranice, kterou udává Aristotelés (metafyzika-1078b), s jednou větou pro studenta, ve které „asi“ zůstává. Otrok a čtverec z Menóna: student zkusí čtverec zdvojit dřív, než uvidí řešení (Odkryj). Drž rozdíly pramene: chlapec řešení nenajde sám, přitakává otázkám; nauku má Sókratés od kněží a básníků (menon-81d) a sám za ni neručí (menon-86b).
- 03 Stůl a stolovost: ideje na Platónově vlastním příkladu stolu (Ústava X, 596a–b); přesunutý Spor Platón × Diogenés; nejsilnější námitky proti idejím napsal Platón sám (dialog Parmenidés: parmenides-130d, parmenides-135c; mluví starý Parmenidés a mladý Sókratés, setkání je smyšlené); žák, který zůstal dvacet let a pak řekl ne (etika-1096a: Aristotelés Platóna nejmenuje, píše o „přátelích“). Jeskyně tu nejvýš jednou větou; obraz nese cesta 3.
- 04 Prsten a tři síly v tobě: Gygův prsten vypráví Glaukón, Platónův bratr, a sám mu nevěří; blok Změň jednu věc platon-gyguv-prsten podle návrhu v podkladech (možnosti, tři podmínky, nadpis „Co by na to řekli“, pojistka pro tón). Leontios (ustava-440a; „mrtvá těla“) a tři části duše: rozum, hněv a žádostivost. Spravedlnost jako pořádek v duši (ustava-433a) je Platónova odpověď na prsten. Básníci: prý spálil vlastní tragédie a v Ústavě nechá básníka s poctami vyprovodit z obce; podej to jako otázku pro studenta, ne jako výtku. Rovnost strážkyň jednou větou.
- 05 Třikrát do Syrákús: věta o filozofech a králích (ustava-473d; Sókratés sám čeká vlnu smíchu) a hned za ní, že to Platón zkusil. Tři cesty podle Nejsilnějších příběhů 2: fakta přímo, pohnutky s větou o dopise, citát sedmy-list-328c s údajem „dochováno pod Platónovým jménem“. Prodej do otroctví jen „Vypráví se“, bez částky a bez soudu. Archytova loď, Diónův konec bez roků, smrt roku 347 př. n. l. v Athénách, asi osmdesátiletý, hrob v Akademii. Blok: Volba s coUdelal (Dión tě volá podruhé); odpověď tyranovi (plutarchos-dion-20) volitelně jako „Vypráví se“.

3. Dvě velké myšlenky z různých disciplín, které nenese cesta 3 ani stránka otázky 6 (návrh: „Učit se znamená rozpomínat se“ a „Spravedlnost je pořádek v tobě“; u první se student smí přít, jestli se chlapec něco naučil, nebo jen přitakával). Kdo žil dřív? s dvojicí, která na hotových stránkách není (Sókratés × Platón a Diogenés × Platón už jsou). Zkus to žít: návrh je týden si všímat, která ze tří sil v tobě rozhodla, bez moralizování. Kam dál: Sókratés, Diogenés; cesta 3 a otázka 6 se připojí v P8. Na desce je platon-smk; popisek pod deskou říká, že je to sádrový odlitek římské kopie.

4. Přesun Sporu Platón × Diogenés (blok platon-diogenes-skutecnost) ze Sókratova portrétu do Platónova podle oddílu „Spor Platón × Diogenés: přesun“: první Platónův argument bez jeskyně (stůl a truhlář), Diogenés dostane repliku (první věta tradovaná, druhá výklad s „by mohl“), blok nekončí Platónovou odpovědí bez Diogenovy repliky a začátky argumentů jsou celé věty (bere si je reflexe ve Sporu). V Sókratově portrétu blok zruš a spojovací odstavec před ním přepiš na odkaz na Platónův portrét; v profilu Diogena přepoj oba odkazy (kapitola 02 a Kam dál) na novou adresu; testy, které Spor otevírají v Sókratově portrétu (tests/e2e/bloky.spec.ts, tests/e2e/spor-reflexe.spec.ts), přepoj tam, kde blok nově stojí.

Co do portrétu nepatří, protože to nese cesta 3 nebo stránka otázky 6: jeskyně krok za krokem a citáty ustava-515a, ustava-515c, ustava-517a, ustava-517b, ustava-518a, ustava-518c; „čtverec sám“ (ustava-510d); Spor s Aristotelem a citáty etika-1097a, metafyzika-991a, metafyzika-1086b; hlasy otázky 6 (timaios-51d, sofistes-246a, parmenides-b8, dl-ix-72-demokritos, kategorie-2b, metafyzika-980a, meteorologika-iii-4); ušlechtilá lež (cesta, krok o návratu); pokus na Facebooku; rytina jeskyně (jeskyne-saenredam); slunce a úsečka. Do studentského textu vůbec ne: výběr dětí a řízené sňatky, společné ženy a děti strážců (nejvýš věta, že strážci nemají mít vlastní majetek ani rodinu), Isokratés, politika-1261b a kd-34.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml. U dialogu vždy řekni, kdo mluví: „Platón nechává Sókrata vyprávět…“, prsten vypráví Glaukón, námitky proti idejím říká Parmenidés; nauku celku (ideje, rozpomínání, tři části duše, filozofové-vládci) piš „podle Platóna“, ne „Sókratés učil“. Sedmý list: fakta, která nestojí jen na něm, přímo; pohnutky, pocity a přímou řeč vždy s větou o dopise, nikdy „Platón vzpomínal“ nebo „Platón přiznal“. Tradované jako „Vypráví se, že…“: spálené tragédie, prodej do otroctví, odpověď tyranovi, „co toho ten mladík nalhal“, zápasník. Nepiš: jméno Aristoklés, nápis o geometrii, jak zemřel (hostina, psaní, flétnistka), sen o labuti, cesty do Egypta, Megaru, roky první a druhé sicilské cesty a založení Akademie, věk číslem (u Sókrata, při procesu), roky Diónovy výpravy a smrti, pálení Démokritových spisů, nic z osmé knihy Ústavy o demokracii, a neříkej, kdy Aristotelés kritiku idejí napsal (stačí „napsal“). Větu „Platón je mi přítel, ale pravda větší“ Aristotelovi nepřipisuj. Gygův prsten: „pastýř“ a „Gýgův prsten“, pastýři jméno nedávej a nepleť ho s Hérodotovým Gýgem. Části duše jsou rozum, hněv a žádostivost. Jména střídmě: Dión, Glaukón jako Platónův bratr, tyran Dionýsios a jeho syn, Archytás, Aristotelés, Diogenés, Parmenidés, Leontios jednou; Kritiás, Charmidés, Annikeris, Adeimantos ne. Nové osoby do dat nepřidávej: Dión a Dionýsios zůstanou v textu bez odkazu. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky; text přečti ještě jednou podle oddílu „Ať text nezní jako stroj“ ve skillu.

Tón: portrét nesmí studentovi lichotit, že patří k těm, kdo vidí víc. Kapitola o filozofech a králích dá slovo i tomu, kdo by vládu „těm, kdo vidí víc“ nesvěřil: Syrákúsy dopadly špatně a vlastní žák Platónovi řekl ne. První obrazovku každé kapitoly čti očima studenta, kterého se téma bolestně týká (Leontios a mrtvá těla, prodej do otroctví).

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); stránku přidej do STRANKY v tests/e2e/prohlidka.spec.ts; prohlédni ji v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu, hlavně jak deska ořezává odlitek (vyrez u platon-smk je jen odhad; případně doplň vyrezNaSirku), jak mini mapa ukáže tři pobyty v Syrákúsách vedle Athén a co vygenerovala Doba a lidé (nové vztahy: Aristotelés a Diogenés jako polemika, Parmenidés a Hérakleitos jako vliv přes texty; nadpisy skupin musí sedět na to, co říká text). Zkontroluj i Sókratův portrét a profil Diogena po přesunu Sporu. Projdi rychlou kontrolu ze skillu.

Nejdřív mi v pár bodech napiš, jakou scénou otevřeš úvod a každou kapitolu, jaký blok v ní bude (s možnostmi Volby a podmínkami prstenu), které citáty použiješ, které dvě myšlenky vybereš a co z návrhu výše měníš, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích (přesun Sporu, portrét, kontrola) a nic neposílej na GitHub. Na konci pošli snímky stránky, zapiš do docs/plany/celek-4.md stav po P7 (použité citáty, co si nese P8) a napiš, co jsi vynechal nebo připsal do k-overeni.
```
