# Plán větve celek-4: „Je to, co vidím, celá skutečnost?“

Celek 4: portrét Platóna, cesta 3 „Je to, co vidím, celá skutečnost?“ (období 1, velká otázka 6 „Co je skutečné?“) a stránka velké otázky 6 s antickými hlasy. Rozsah zvolil autor 3. 10. 2026 („Platón a jeskyně“). Po třech celcích z helenismu a Říma se atlas vrací do období 1: Platón je v datech portrét a zatím mluví jen cizími ústy (v Sókratově portrétu, v cestě 1 a ve Sporu s Diogenem). Podklady vzniknou v `docs/podklady/celek-4-co-je-skutecne.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 3. 10. 2026 (`docs/podklady/celek-4-co-je-skutecne.md`); autor 4. 10. 2026 rozhodl otevřené otázky, obrázky jsou stažené |
| P7 | Portrét Platóna | **další krok**, čeká na pokyn autora; co si nese, je v oddílu Po P6 na konci |
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
