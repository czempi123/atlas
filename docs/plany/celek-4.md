# Plán větve celek-4: „Je to, co vidím, celá skutečnost?“

Celek 4: portrét Platóna, cesta 3 „Je to, co vidím, celá skutečnost?“ (období 1, velká otázka 6 „Co je skutečné?“) a stránka velké otázky 6 s antickými hlasy. Rozsah zvolil autor 3. 10. 2026 („Platón a jeskyně“). Po třech celcích z helenismu a Říma se atlas vrací do období 1: Platón je v datech portrét a zatím mluví jen cizími ústy (v Sókratově portrétu, v cestě 1 a ve Sporu s Diogenem). Podklady vzniknou v `docs/podklady/celek-4-co-je-skutecne.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 3. 10. 2026 (`docs/podklady/celek-4-co-je-skutecne.md`); autor 4. 10. 2026 rozhodl otevřené otázky, obrázky jsou stažené |
| P7 | Portrét Platóna | hotovo 4. 10. 2026 (`src/content/osobnosti/platon.mdx`); stav v oddílu Po P7. Autor zadal přípravu P8; výhrady k portrétu řekne průběžně nebo při revizi |
| P8 | Cesta 3 „Je to, co vidím, celá skutečnost?“ a stránka velké otázky 6 „Co je skutečné?“ | **další krok**; zadání v oddílu P8 na konci |
| P10 | Revize celku | po P8 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po revizi |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání (P6, P7) jsou v plném znění v `docs/archiv/zadani/celek-4.md`.

**Souběh s větví `rozhrani-v2`.** Autor chce úpravy rozhraní (`docs/plany/rozhrani-v2.md`) projít zvlášť. Podklady (P6) se rozhraní netýkají a mohou běžet souběžně. Před P7 se do `celek-4` sloučí hlavní větev, pokud v ní `rozhrani-v2` už bude: nový portrét a cesta mají vzniknout na novém obsahu profilu a novém závěru cest, ne na starém.

## Co si celek nese z celků 1 až 3

- **Co už v atlasu o Platónovi je:**
  - V datech (`lide.yaml`): portrét, období 1, otázky 6, 8, 2 a 7, místa Athény a Syrákúsy (pobyt do roku 361 př. n. l.), atribut jeskyně („Přirovnal nás k vězňům, kteří mají stíny na zdi za skutečnost“), vztahy se Sókratem (učitel), Aristotelem, Speusippem a Xenokratem (žáci), Archytou a Eudoxem. Obrázek zatím nemá.
  - Jeho dialogy nesou Sókratův portrét (Obrana, Kritón, Faidón, Lachés, Euthyfrón, Symposion) a cestu 1 (Theaitétos, Prótagorás). Tyto scény si celek 4 nebere.
  - Spor Platón × Diogenés „Co je skutečnější, to, co vidíš, nebo to, co pochopíš?“ (`platon-diogenes-skutecnost`) stojí v Sókratově portrétu a odkazuje na něj profil Diogena. Používá obraz jeskyně i větu o stolovosti (`dl-vi-53-platon`, jediný citát vedený pod Platónem). Oškubaný kohout a „Sókratés, který se zbláznil“ jsou v profilu Diogena.
  - Pramen `platon-ustava` v datech je jen Ústava VII. Citát z podobenství o jeskyni v `zdroje.yaml` není.
  - Stránka otázky 6 je zatím řádek v přehledu `/otazky/`. Parmenidés a Aristotelés už mluví na stránce otázky 7; Aristotelés navíc na otázkách 1 a 4 a ve Sporu cesty 5, pořád bez vlastního portrétu.
- **Největší riziko celku je tón, ne věcná chyba.** Jeskyně lichotí: student se snadno posadí mezi ty, kdo vyšli ven, a ostatní má za vězně. Stejným obrazem mluví konspirační weby („probuďte se“). Cesta ho proto musí nechat sedět mezi vězni, zeptat se, podle čeho by poznal, že venku opravdu byl, a dát slovo i tomu, kdo říká, že na „stínech“ záleží a že o skutečnosti nemá rozhodovat ten, kdo o sobě tvrdí, že ji viděl.
- **Poučení z revizí** je v `docs/pouceni.md`.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové; Změň jednu věc smí mít vlastní nadpis oddílu Co udělal; popisek obrázku se ukazuje pod deskou; Doba a lidé dělí vztahy podle typu; mini osa a mini mapa hlídají překryvy samy.
- **Nové osoby** se do dat zatím nepřidávají (rozhodnutí autora z 2. 10. 2026). Koho příběh potřebuje a v datech není, zůstane v textu bez odkazu a podklady to řeknou.

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

## Po P7 (4. 10. 2026)

Portrét Platóna je v `src/content/osobnosti/platon.mdx`: úvod, pět kapitol s bloky, Doba a lidé, Kdo žil dřív?, dvě velké myšlenky, výzva a Kam dál. Má asi 1 850 slov; na telefonu měří 23 200 px (Sókratés 19 200 px), na notebooku 18 300 px. `npm test` prošel celý (376 testů dat, 250 v prohlížeči). Na GitHub nic nešlo. Snímky jsou ve složce `Claude outputs/P7-platon/`.

Autor schválil osnovu i s odchylkami od zadání; důvody jsou v `docs/rozhodnuti.md` (Portrét Platóna, P7), otevřené body v `docs/podklady/k-overeni.md` (Portrét Platóna, P7).

| Kapitola | Čím začíná | Blok | Citáty |
| --- | --- | --- | --- |
| Úvod | Platón u soudu seděl, v den popravy chyběl | – | `faidon-59b` (hlavní citát stránky) |
| 01 Příbuzní u moci | válka, porážka, příbuzní mezi oligarchy | Volba `platon-pribuzni-u-moci` (bez Co udělal) | `dl-iii-5` |
| 02 Chlapec a čtverec | škola v háji; rozhovory, ve kterých sám nemluví | Odkryj `platon-ctverec` | `dl-iii-35`, `metafyzika-1078b`, `menon-81d`, `menon-86b` |
| 03 Stůl a stolovost | stoly ve třídě; idea na Platónově příkladu stolu | Spor `platon-diogenes-skutecnost` | `parmenides-130d`, `parmenides-135c`, `etika-1096a` |
| 04 Prsten a tři síly | Glaukón předkládá názor, kterému nevěří | Změň jednu věc `platon-gyguv-prsten` | `ustava-360b`, `ustava-440a`, `ustava-433a` |
| 05 Třikrát do Syrákús | věta o filozofech a králích | Volba `platon-dion-vola` (s Co udělal) | `ustava-473d`, `sedmy-list-328c`, `plutarchos-dion-20` |

Velké myšlenky: „Učit se znamená rozpomínat se“ (Poznání) a „Spravedlnost je pořádek v tobě“ (Etika). Kdo žil dřív?: Platón × Aristotelés. Zkus to žít: Kdo dnes rozhodl? Kam dál: Sókratés, Diogenés, Marcus Aurelius.

**Použité citáty (15, každý jednou):** `faidon-59b`, `dl-iii-5`, `dl-iii-35`, `metafyzika-1078b`, `menon-81d`, `menon-86b`, `parmenides-130d`, `parmenides-135c`, `etika-1096a`, `ustava-360b`, `ustava-440a`, `ustava-433a`, `ustava-473d`, `sedmy-list-328c`, `plutarchos-dion-20`. Ve Sporu stojí v textu argumentů obě věty z Diogena Laertia VI, 53 (`dl-vi-53-diogenes`, `dl-vi-53-platon`).

**Citáty celku, které portrét nechal P8:** `ustava-515a`, `ustava-515c`, `ustava-517a`, `ustava-517b`, `ustava-518a`, `ustava-518c` a `ustava-510d` (cesta 3); `etika-1097a`, `metafyzika-991a` a `metafyzika-1086b` (Spor s Aristotelem); `timaios-51d`, `sofistes-246a`, `parmenides-b8`, `dl-ix-72-demokritos`, `kategorie-2b`, `metafyzika-980a` a `meteorologika-iii-4` (otázka 6). Mimo studentský text zůstávají `politika-1261b`, `kd-34`, `antidosis-271` a `helena-5`.

**Přesun Sporu Platón × Diogenés:** blok stojí v kapitole 03 portrétu. První Platónův argument je stůl a truhlář, Diogenés má repliku a poslední slovo, scéna říká jeho námitku předem. Sókratův portrét blok nemá a odkazuje na Platónův (spojovací odstavec a Kam dál, kde Platón nahradil mapu); profil Diogena vede na novou adresu z kapitoly 02 i z Kam dál. Testy bloku běží dál v dílně s novým zněním; že blok stojí v Platónově portrétu a odkazy sedí, hlídá `tests/e2e/platon.spec.ts`.

**Data:** Platónovi přibyly prameny `platon-obrana`, `platon-faidon-perseus` a `platon-menon`; obrázek `platon-smk` má `vyrezNaSirku: 50% 16%`. Nové osoby, místa ani vztahy nepřibyly.

**Co si nese P8:**

- Kam dál portrétu má tři položky. P8 přidá cestu 3 a otázku 6; položky smějí být nejvýš čtyři, jedna tedy vypadne (Diogenés má odkaz i v kapitole 03).
- Jeskyně je v portrétu jednou větou v kapitole 03 („jako stíny na stěně jeskyně“), bez odkazu. P8 doplní odkaz na cestu 3 nebo kartu cesty. Vstupy v hlavičce profilu se ukážou samy, až bude Platón ve `filozofove` cesty a v `hlasy` otázky 6.
- Co portrét už vyprávěl a cesta ani otázka nemají opakovat: stůl a truhlář, stolovost, vlas, bláto a špína, den a plachta, chlapec se čtvercem, Leontios, Gýgův prsten, Syrákúsy, `etika-1096a` s větou o rčení.
- Detaily, které cesta bude chtít znovu a v portrétu jsou jednou: „Aristotelés přišel do Akademie asi v sedmnácti a zůstal dvacet let“ (kapitola 03) a „to, čím je stůl stolem, není vedle stolů, ale v nich“ (závěr kapitoly 03). Ve Sporu cesty smějí zaznít ještě jednou. Spálené tragédie jsou v portrétu dvakrát (kapitoly 01 a 04); jinde už ne.
- Kapitola 05 končí otázkou, jestli svěřit vládu těm, kdo o sobě říkají, že vidí víc. Krok cesty o návratu na ni může navázat ušlechtilou lží, kterou portrét nemá.
- Tón: portrét nikde neříká, že student vidí víc než ostatní. Větu „Podobní nám“ nechává cestě.
- Blok `platon-gyguv-prsten` je psaný tak, aby ho převzala stránka pokusu: scéna říká, kdo příběh vypráví.

**Otevřené pro autora a pro revizi (P10):** popisek „znal ho z textů“ u Hérakleita v Době a lidech (podle Aristotela ho Platón poznal od Kratyla); nákres ke čtverci v kapitole 02 (zatím jen slovy); délka stránky (na telefonu o pětinu delší než Sókratés); údaj pod citátem ze Sedmého listu zůstává „dochováno pod Platónovým jménem“.

**Skilly v účtu:** kopie `skills/atlas-osobnost` a `skills/atlas-cesta` už neříkají „ukaž osnovu autorovi a počkej“ (rozhodnutí ze 4. 10. 2026). Skilly uložené v účtu Claude tu větu ještě mají; do jejich příští úpravy (nejpozději s poučením z revize celku 4) ji přebíjí pravidlo v `CLAUDE.md`.

## P8: Cesta 3 „Je to, co vidím, celá skutečnost?“ a stránka velké otázky 6

V Coworku v novém chatu projektu, se zapnutým Desktop Commanderem. Opus 5.5 · high. Zadání počítá s úsporným čtením (`CLAUDE.md` › Co číst a jak šetřit) a s tím, že se osnova předem neschvaluje.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-4; podklady, oba obrázky a portrét Platóna jsou v ní hotové.

Čti úsporně, podle oddílu „Co číst a jak šetřit“ v CLAUDE.md. Přečti:
- CLAUDE.md, docs/styl.md, docs/pouceni.md;
- v docs/plany/celek-4.md oddíly „Co si celek nese z celků 1 až 3“ a „Po P7“;
- z docs/podklady/celek-4-co-je-skutecne.md jen: Čeho se drží celý celek; Jak převádím klíčová slova; Slunce, úsečka a jeskyně; tabulku „Jak o tom psát v atlasu“ v oddílu Kde končí Sókratés a začíná Platón; v Citlivých místech Ústavy řádky Ušlechtilá lež a Filozofové mají vládnout; celý oddíl Tvrzení: cesta 3 (jeskyně podle pramene, Roztřiď, Podle čeho bys poznal, Spor Platón × Aristotelés, pokus na Facebooku, Kdo dá za pravdu studentovi, Návrat a vlastní pravidlo); oddíl Velká otázka 6 (kdo se s kým přel, duha, hlasy, čím se liší); Citáty (sloupce Mluví a Kde použít); u Obrázků rytinu jeskyně; Rozpory a rozhodnutí. Platónův život, Sedmý list, Gygův prsten a přesun Sporu s Diogenem nečti;
- z docs/podklady/k-overeni.md oddíly Celek 4 a Portrét Platóna; z docs/rozhodnuti.md záznamy celku 4;
- v docs/architektura.md řádek cesty 3 a velké otázky 6; v docs/design.md oddíly Cesta a Velká otázka a z Bloků jen bloky, které použiješ (Příběh, Roztřiď, Volba, Odkryj, Spor, Závěr cesty, Návrat);
- jako vzor cestu 5: přehled src/content/cesty/co-mam-ve-svych-rukou.mdx, její kroky 1, 2, 5 a 8 a bloky cesta5-*.yaml (i případ pro Návrat); a stránku otázky 4 src/content/otazky/jsem-svobodny.mdx;
- z portrétu src/content/osobnosti/platon.mdx kapitolu 03 a konec kapitoly 05.
Postupuj podle skillu atlas-cesta.

Udělej:

1. Cestu 3 „Je to, co vidím, celá skutečnost?“ (období 1, velká otázka 6, filozof Platón, ve Sporu Aristotelés; do 20 minut, 7 až 8 kroků). Průchod podle podkladů:
- jeskyně jako Příběh s rytinou jeskyne-saenredam: pouta od dětství, oheň a zídka, nosiči, stíny, ozvěna; scéna končí větou „Podobní nám“ (ustava-515a). Popisek říká, že je to představa z roku 1604, a přidá jedno pozorování: na rytině stojíš mezi těmi, kdo vidí, v Platónově textu sedíš mezi vězni;
- vlastní pokus Roztřiď „Odkud to vím?“ (koše Viděl jsem sám · Vím od někoho, komu věřím · Znám jen z obrazovky; karty z podkladů). Koš „z obrazovky“ není koš lží; karta „dvakrát dvě jsou čtyři“ nepatří nikam a vrátí se u čtverce;
- osvobození, bolest očí a výstup podle pramene (někdo ho rozváže a vleče; venku jsou nejdřív zase stíny) s Volbou „Někdo ti řekne: já venku byl. Podle čeho poznáš, jestli má pravdu?“;
- co je venku: čtverec sám (Odkryj; ustava-510d). Slunce jednou větou, úsečka vůbec;
- Spor Platón × Aristotelés podle podkladů: rámec bez setkání tváří v tvář a bez ohlášeného vítěze, každá strana s odpovědí na nejsilnější námitku druhé;
- nový případ: pokus na Facebooku z roku 2020. Nejdřív Volba „Co se podle tebe stalo s jejich názory?“, pak výsledek; drž, co vědci změnili (třetinu, na tři měsíce), výhrady až ve zpětné vazbě; druhá otázka „Mluví ten pokus pro jeskyni, nebo proti ní?“;
- návrat: proč se v Ústavě vracejí (musí), co by vězni udělali (ustava-517a, „kdyby mohli“), ušlechtilá lež jednou a otázka, kdo má o skutečnosti rozhodovat;
- vlastní pravidlo (Závěr cesty): dá slovo i tomu, kdo s Platónem nesouhlasí (jeho spojenec je Aristotelés), a pošle na velkou otázku 6.
Citáty rozmísti podle sloupce Kde použít. K cestě patří pole zacatek v přehledu (Roztřiď) a případ pro Návrat (cesta3-navrat.yaml): autorské „Představ si…“ jiného druhu než Facebook a než duha.

2. Stránku velké otázky 6 „Co je skutečné?“ (src/content/otazky/co-je-skutecne je zatím jen řádek v přehledu; doplň ji podle vzoru otázky 4): úvodní případ duha a čtyři hlasy podle podkladů: Parmenidés (parmenides-b8), Démokritos (dl-ix-72-demokritos), Platón (timaios-51d; mluví Tímaios) a Aristotelés (meteorologika-iii-4; kategorie-2b a metafyzika-980a v myšlence). Odpověď hlasu má nejvýš dvě věty. Úvod smí otevřít „boj obrů“ (sofistes-246a; mluví host z Eleje).

3. Propojení: do Kam dál Platónova portrétu cestu 3 a otázku 6 (položky nejvýš čtyři); u věty o jeskyni v kapitole 03 odkaz na cestu, nebo kartu cesty tam, kde na ni text navazuje; v přehledu otázek přepoj otázku 6 na vlastní stránku.

Co se po portrétu nesmí opakovat:
- Stůl a truhlář, stolovost, vlas, bláto a špína, den a plachta, chlapec se čtvercem, Leontios, Gýgův prsten, Syrákúsy a etika-1096a s větou o rčení jsou v portrétu. Cesta stojí na jeskyni, čtverci samém, Sporu s Aristotelem a pokusu z roku 2020.
- „Aristotelés přišel do Akademie asi v sedmnácti a zůstal dvacet let“ a „to společné je ve věcech, ne vedle nich“ jsou v portrétu jednou; ve Sporu smějí zaznít ještě jednou. Spálené tragédie nepoužívej.
- Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku. Citáty z portrétu (seznam je v oddílu Po P7) v cestě ani na stránce otázky nepoužívej.
- Jeskyně jako obraz stojí mimo cestu jen v atributu a jednou větou v portrétu; stránka otázky 6 ani Platónův hlas ji nepoužijí.
- Aristotelés mluví na otázkách 1, 4 a 7 a ve Sporu cesty 5, Parmenidés na otázce 7: tady každý říká něco jiného a s jiným citátem. Každý ze čtyř hlasů se musí poznat (v podkladech tučně).
- Úvodní případ otázky (duha) je jiného druhu než nový případ cesty (Facebook) a než případ pro Návrat.

Tón je největší riziko celku: jeskyně nesmí studentovi lichotit, že on vidí a ostatní spí. Student sedí mezi vězni („Podobní nám“). Vězni nejsou hloupí: udílejí si pocty za to, kdo stíny nejlíp předvídá. Kdo vyšel, je nejdřív oslepený a stínům věří víc než dřív. Vypravěč si není jistý („Bůh ví, jestli je to pravda“). Zpátky se nejde kázat, ale z povinnosti. Čeho se vyvarovat, vypisují podklady (hrdina, který se osvobodí sám; nosiči jako manipulátoři; Platón, který ví, jak to je). Cesta dá slovo i studentovi, podle kterého jsou stíny skutečné dost, a poslední krok mu řekne, že má spojence v Aristotelovi.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml. U dialogu vždy řekni, kdo mluví („Platón nechává Sókrata vyprávět…“; Tímaios; host z Eleje); nauku piš „podle Platóna“. Aristotelés nesmí znít, jako by znal dnešní fyziku: duha je „odraz v kapkách“. Neříkej, kdy Aristotelés kritiku idejí napsal, ani že se ti dva přeli tváří v tvář. Isokratés, Diogenés jako hlas, osmá kniha Ústavy, výběr dětí a společné ženy a děti strážců do studentského textu nepatří. U pokusu z roku 2020 stačí „Facebook“, bez jmen autorů a firmy; pokus „zkoušel“, ne „ukázal“. Zpětná vazba vysvětluje důvod a ptá se dál, nikdy neříká, kdo má pravdu; možnosti ve Volbě jsou skutečné tahy. Nové osoby do dat nepřidávej. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky; text přečti ještě jednou podle oddílu „Ať text nezní jako stroj“ ve skillu.

Kontrola: při psaní pouštěj jen dotčené testy, celé npm test jednou před posledním commitem (testy v prohlížeči běží na portu 4322). Cestu 3 a stránku otázky 6 přidej do testů prohlídky a průchodu. Cestu projdi v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí, jednou i bez odkrytí bloků; snímky dělej skripty scripts/snimky-listy.mjs a scripts/snimky-montaz.mjs. Podívej se, jak deska Příběhu ořezává rytinu (vyrez u jeskyne-saenredam je odhad) a jak hlavička Platónova portrétu ukáže vstupy do cesty a otázky. Po přidání stránek restartuj běžící npm run dev.

Osnovu mi neposílej ke schválení: kde váháš, zvol nejlepší cestu a pracuj dál. Commituj česky po ucelených krocích (cesta, stránka otázky, propojení a kontrola) a nic neposílej na GitHub. Na konci pošli snímky cesty a stránky otázky, zapiš do docs/plany/celek-4.md stav po P8 (plán aktualizuj i v projektu) a napiš: co je hotové, nad čím jsi váhal a co jsi zvolil, co jsi vynechal nebo připsal do k-overeni a co potřebuje moje rozhodnutí.
```
