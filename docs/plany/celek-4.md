# Plán větve celek-4: „Je to, co vidím, celá skutečnost?“

Celek 4: portrét Platóna, cesta 3 „Je to, co vidím, celá skutečnost?“ (období 1, velká otázka 6 „Co je skutečné?“) a stránka velké otázky 6 s antickými hlasy. Rozsah zvolil autor 3. 10. 2026 („Platón a jeskyně“). Po třech celcích z helenismu a Říma se atlas vrací do období 1: Platón je v datech portrét a zatím mluví jen cizími ústy (v Sókratově portrétu, v cestě 1 a ve Sporu s Diogenem). Podklady vzniknou v `docs/podklady/celek-4-co-je-skutecne.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 3. 10. 2026 (`docs/podklady/celek-4-co-je-skutecne.md`); autor 4. 10. 2026 rozhodl otevřené otázky, obrázky jsou stažené |
| P7 | Portrét Platóna | hotovo 4. 10. 2026 (`src/content/osobnosti/platon.mdx`); stav v oddílu Po P7. Autor zadal přípravu P8; výhrady k portrétu řekne průběžně nebo při revizi |
| P8 | Cesta 3 „Je to, co vidím, celá skutečnost?“ a stránka velké otázky 6 „Co je skutečné?“ | hotovo 4. 10. 2026; stav v oddílu Po P8. Po připomínkách autora z téhož dne: nové názvy košů v kroku 2 a kresba jeskyně s pohybem v kroku 1 |
| P10 | Revize celku | **další krok** (skill `atlas-revize`) |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po revizi |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání (P6, P7, P8) jsou v plném znění v `docs/archiv/zadani/celek-4.md`.

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

**Skilly v účtu:** `atlas-osobnost` a `atlas-cesta` jsou 4. 10. 2026 přepsané podle kopií v `skills/` a navržené k uložení do účtu Claude: krok 3 už neříká „ukaž osnovu autorovi a počkej“, `atlas-cesta` navíc čte `docs/pouceni.md` místo záznamů revizí. Dokud autor návrh neuloží, platí pravidlo v `CLAUDE.md`.

## Po P8 (4. 10. 2026)

Cesta 3 je v `src/content/cesty/je-to-co-vidim-cela-skutecnost.mdx` a ve složce kroků, bloky v `src/content/bloky/cesta3-*.yaml`, stránka otázky 6 v `src/content/otazky/co-je-skutecne.mdx`. Cesta má osm kroků a asi 1 150 slov mimo bloky; na telefonu měří kroky po odkrytí 2 100 až 4 200 px. `npm test` prošel celý (392 testů dat, 272 v prohlížeči). Na GitHub nic nešlo. Snímky jsou ve složce `Claude outputs/P8-cesta3/`.

Osnova se předem neschvalovala. Zásadní volby jsou v `docs/rozhodnuti.md` (Cesta 3, stránka otázky 6 a kresba jeskyně, P8), otevřené body v `docs/podklady/k-overeni.md` (Cesta 3 a stránka otázky 6, P8).

| Krok | Čím začíná | Blok | Citáty |
| --- | --- | --- | --- |
| 1 Jeskyně | Platón nechává Sókrata vyprávět obraz; scéna končí „Podobní nám“ | Příběh s rytinou `jeskyne-saenredam`; uvnitř kresba `<Jeskyne />` (dva pohledy, pohyb stínů) | `ustava-515a` |
| 2 Odkud to vím? | stíny vyrobených věcí | Roztřiď `cesta3-odkud-to-vim` (začátek cesty) | `ustava-515c` |
| 3 Ven | někdo ho rozváže a vleče; venku nejdřív zase stíny; pocty vězňů | Volba `cesta3-kdo-byl-venku` (bez Co udělal) | `ustava-518a` |
| 4 Čtverec sám | výklad obrazu, slunce jednou větou, karta dvakrát dvě | Odkryj `cesta3-ctverec-sam` | `ustava-510d` (ve srovnání) |
| 5 Učitel a žák | ideje; Aristotelés v Akademii | Spor `cesta3-aristoteles-spor` | `metafyzika-991a`, `etika-1097a` |
| 6 Vyměnit stíny | věta o vzdělání; bubliny; pokus na Facebooku 2020 | Volba `cesta3-pokus-odhad` → text „Co vyšlo“ → Volba `cesta3-pokus-cteni` | `ustava-518c` |
| 7 Zpátky dolů | návrat, smích vězňů, povinnost, ušlechtilá lež | Volba `cesta3-kdo-rozhoduje` | `ustava-517a`, `ustava-517b` |
| 8 Tvoje pravidlo | co tvrdil Platón; spojenec nesouhlasícího je Aristotelés; odkaz na otázku 6 | Závěr cesty `cesta3-moje-pravidlo` | – |

Případ pro Návrat: `cesta3-navrat` „U šaten“ (kamarád u cizí bundy; viděl jsem to sám a nikdo jiný). Z citátů celku zůstal nepoužitý jen `metafyzika-1086b`; jeho obsah nese třetí Aristotelův argument ve Sporu.

**Připomínky autora 4. 10. 2026 (po prvním průchodu) a co se změnilo:**

- **Koše v kroku 2.** Původní „Viděl jsem sám · Vím od někoho, komu věřím · Znám jen z obrazovky“ nebyly souměrné a „dvakrát dvě jsou čtyři“ se nedalo nikam dát. Teď jsou koše čtyři a všechny odpovídají na „Odkud to vím?“ stejným tvarem: **Ze zkušenosti · Od lidí · Z obrazovky · Z vlastní hlavy**. Do posledního patří dohad o spolužákovi i dvakrát dvě; zpětná vazba se ptá, čím se ty dvě karty liší. Krok 4 už neříká, že karta nikam nepatřila.
- **Kresba jeskyně s pohybem** (`<Jeskyne />`, `src/components/ostrovy/Jeskyne.svelte`, logika `src/lib/jeskyne.ts`): první pokus o animaci jako formu. Stojí v kroku 1 uvnitř Příběhu, před větou „Podobní nám“. Popis je v `docs/design.md` › Komponenty.

**Stránka otázky 6:** úvod duha, za ní „boj obrů“ (`sofistes-246a`, mluví host z Eleje), hlasy Parmenidés (`parmenides-b8`), Démokritos (`dl-ix-72-demokritos`), Platón (`timaios-51d`, mluví Tímaios; bez jeskyně) a Aristotelés (`meteorologika-iii-4`; Kategorie 5 a Metafyzika I, 1 v myšlence bez citátu). Karta cesty 3 se ukazuje sama.

**Propojení:** Kam dál Platónova portrétu má čtyři položky (cesta 3, Sókratés, Marcus Aurelius, otázka 6; Diogenés vypadl, odkaz má v kapitole 03). Věta o jeskyni v kapitole 03 vede odkazem na cestu; karta cesty v portrétu není. Hlavička profilu, přehled otázek a Lidé ukazují vstupy samy z dat.

**Co se v celku smí ještě jednou a co už ne** (pro revizi P10): „asi sedmnáctiletý Aristotelés a zůstal dvacet let“ je v portrétu a v kroku 5 (dvakrát, víc ne). „V nich, ne vedle nich“ je v portrétu a ve Sporu. Pocty vězňů, „oslepený a bezradný“ a „jen bůh ví“ jsou v cestě dvakrát (text a zpětná vazba, resp. zpětná vazba a citát). Rozdíl vědění a mínění („vědění se nedá vymluvit“) je ve Sporu a v Platónově hlasu otázky 6. „Tenhle člověk, tenhle kůň“ je ve Sporu a v Aristotelově hlasu.

**Testy a skripty:** `tests/e2e/cesta3.spec.ts` (klávesnice, průchod bez odkrytí, tón a co do cesty nepatří), `tests/e2e/jeskyne.spec.ts` (kresba na obou šířkách v obou režimech, pohyb, klávesnice), cesta 3 v `cesta.spec.ts` a v průchodu, otázka 6 v `otazka.spec.ts` a v prohlídce, vstupy v `platon.spec.ts`. Průchod umí krok s více bloky. Nové skripty: `scripts/snimky-cesta.mjs` (kroky cesty s odpověďmi i bez nich) a `scripts/snimky-prvek.mjs` (jeden blok nebo kresba); `snimky-listy.mjs` umí `PRESKOCIT` pro stránku otázky.

**Otevřené pro autora a pro revizi (P10):**

- **Čtvrtý koš.** Autor chtěl jen jiné názvy; čtvrtý koš „Z vlastní hlavy“ je návrh. Jde vrátit na tři koše, ale pak dvakrát dvě zase nemá místo. Druhá možnost je kartu vyřadit a zeptat se na ni až ve srovnání.
- **Kresba jeskyně.** Je to pokus o formu: posoudit, jestli pohyb pomáhá, nebo ruší čtení, a jestli má podobná kresba vzniknout i pro výstup (krok 3). V dílně bloků zatím není.
- **Rytina na desce.** Poměr 4 : 3 sedí, deska rytinu neořezává (`vyrez` se neprojeví). Na notebooku je ale deska asi 300 px široká a detaily rytiny nejsou čitelné; latinské verše zabírají dolní šestinu. Výřez bez veršů by byl nový soubor obrázku.
- **Karta „Jak vypadá válka“.** Ve třídě může sedět student, který válku zažil. Karta má pro koš Ze zkušenosti vlastní zpětnou vazbu; kdyby se autorovi nezdála, nahradit ji jinou kartou „jen z obrazovky“.
- **Krok 7 má Volbu „Kdo má rozhodovat o tom, co je skutečné?“.** Zadání chtělo jen otázku; blok dává studentovi tah i tady. Volba je tak v cestě čtyřikrát (kroky 3, 6 dvakrát a 7).
- **Úvod otázky 6** začíná duhou a „boj obrů“ stojí až za ní; citát před prvním názorem stránku prodlužuje. Jde vypustit.
- Z P7 zůstává: popisek „znal ho z textů“ u Hérakleita, nákres ke čtverci v portrétu, délka portrétu, údaj pod citátem ze Sedmého listu.

**Další krok:** revize celku (P10) skillem `atlas-revize`; zadání zatím není napsané.
