# Plán větve hodiny-v1: příprava hodiny

Učitel si z atlasu složí hodinu: vybere kroky cest, bloky, kapitoly profilů a hlasy otázek z různých stránek, seřadí je, připíše si poznámky a hodinu si uloží. Studenti dostanou odkaz na tutéž hodinu a doma projdou zbytek; atlas jim ukáže, které kroky a kapitoly v hodině nebyly. Je to přání autora z 15. 10. 2026 (`docs/plan.md` › Doma i ve třídě). Všechno běží ve statickém webu: bez účtů, bez serveru, hodina se ukládá v prohlížeči a do souboru a sdílí se adresou. Režim třídy (velké písmo, odkrývání na pokyn, QR kód) na větev naváže později a není její součástí. Větev je založená z hlavní větve 17. 10. 2026 (commit `b135e57`, po uzavření `medailonky`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| H1 | Katalog zastavení a kotvy: co všechno jde dát do hodiny, pevné id a adresa každého zastavení, formát hodiny a její adresy, kontrola katalogu proti sestavenému webu | Opus 5.5 · high | hotovo 17. 10. 2026; viz Po H1 |
| H2 | Skladatel hodiny `/hodina/nova/`: výběr z katalogu, pořadí, poznámky, uložení, soubor, odkaz ke sdílení | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 17. 10. 2026; viz Po H2 |
| H3 | Hodina pro studenta: stránka hodiny, lišta hodiny při průchodu, „Doma projdi“ podle deníku, režim Promítat pro plátno, tisk přehledu pro učitele | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | čeká; zadání níže |
| R | Revize větve očima učitele, studenta a uživatele telefonu | Opus 5.5 · high se skillem `atlas-revize` | čeká |
| O | Opravy po revizi | Opus 5.5 · high | čeká |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | Opus 5.5 · medium | čeká |

Stav a zadání dalších kroků se zapisují sem. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/hodiny-v1.md`.

## Co větev staví

### Zastavení

Hodina je seřazený seznam **zastavení**. Zastavení je místo v atlasu, které už existuje: stránka a kotva na ní. Do hodiny jde dát:

| Druh | Příklad | Adresa | Id zastavení |
| --- | --- | --- | --- |
| Krok cesty | Cesta 1, krok 3 „Politik, básníci, řemeslníci“ | `/cesta/kdy-mam-dobry-duvod-verit/3/` | `k:kdy-mam-dobry-duvod-verit/3` |
| Blok | Volba „Jak bys to zjišťoval?“ | stránka, kde blok stojí, a kotva bloku | `b:cesta1-jak-zjistit` |
| Příběh | Diogenés a pohárek | stránka a `#dite-a-poharek` | `p:dite-a-poharek` |
| Kapitola profilu | Sókratés, kapitola o soudu | `/osobnost/sokrates/#<kotva>` | `o:sokrates/<kotva>` |
| Oddíl profilu | Velké myšlenky, Zkus to žít | `/osobnost/<id>/#myslenky`, `#zkus-to-zit` | `o:<id>/myslenky` |
| Hlas otázky | Epikúros u otázky „Jak mám žít?“ | `/otazka/jak-zit/#hlas-epikuros` | `h:jak-zit/epikuros` |
| Celá stránka | Přehled cesty, profil, stránka otázky | `/cesta/<slug>/`, `/osobnost/<id>/`, `/otazka/<slug>/` | `k:<slug>`, `o:<id>`, `h:<slug>` (doplněno v H1) |

Medailonky do katalogu nepatří (nemají co učit samy o sobě); celá stránka profilu nebo otázky ano, jako zastavení bez kotvy.

### Proč odkazy, ne poskládaná stránka

Zastavení se při hodině otevírá **na svém místě v atlasu**, s lištou hodiny nahoře („Hodina: Delfy · 3 ze 7 · Další“). Hodina tedy obsah nekopíruje ani neskládá do jedné nové stránky.

- **Pro:** bloky jsou ostrovy Svelte s vlastním stavem v deníku; vytržené ze stránky by přišly o souvislost (filozof, Kam dál z bloku, závěr cesty), a skládat hotové HTML za běhu by ostrovy rozbilo. Student při hodině vidí atlas, jak ho pak doma zná, a co ve třídě odpoví, zůstane mu v deníku.
- **Proti:** při promítání se mezi zastaveními přechází po stránkách, ne posouváním jedné stránky. Lišta hodiny to dělá jedním klepnutím, takže to snesu.
- Poskládaná stránka (pracovní list) se může vrátit s Režimem třídy, až bude jasné, co učitel opravdu promítá.

### Katalog

Seznam všech zastavení se generuje při sestavení z obsahu a dat (`src/lib/hodiny.ts`, výstup `/hodina/katalog.json`): druh, id, název, stránka, kotva, období, cesta nebo osoba, ke které patří, a pořadí na stránce. Ručně se nepíše nic. Kontrolní skript (jako `doba-odkazy-vypis.mjs`) po sestavení ověří, že každá kotva z katalogu v `dist/` opravdu existuje; test to hlídá i v CI.

### Hodina a její adresa

- **Uložená hodina** (`localStorage`, klíč `atlas-hodiny`, odděleně od deníku): název, seznam id zastavení, poznámka k hodině a ke každému zastavení, datum změny. Export a import do souboru `.json`.
- **Odkaz pro studenty** nese jen název a pořadí zastavení, například `/hodina/?v=1&n=Delfy&z=k:kdy-mam-dobry-duvod-verit/1,b:cesta1-jak-zjistit,h:jak-poznam-pravdu/protagoras`. **Poznámky učitele v odkazu nejsou**, zůstávají jen u něj.
- Zastavení, které atlas mezitím přejmenuje nebo zruší, se v hodině ukáže jako „Tohle místo už v atlasu není“ a hodina jde dál; nic nespadne.

### Student a „Doma projdi“

Stránka hodiny ukáže zastavení v pořadí a pod nimi oddíl **Doma projdi**: ke každé cestě, které se hodina dotkla, kroky, které v hodině nebyly, a ke každému profilu kapitoly, které v hodině nebyly. Co už student prošel (deník: navštívené kroky, `cteni`), je odškrtnuté. Otevřená hodina se zapíše do deníku jako nepovinné pole `hodiny` (verze deníku zůstává 1, stejně jako u `cteni`), aby se k ní student vrátil z deníku. Nic se nehodnotí ani neposílá.

### Promítání na plátně

Hodina se ve třídě promítá ze stránky hodiny tlačítkem **Promítat hodinu** (přání autora ze 17. 10. 2026, doplněno po H2). Režim pro plátno: bez hlavičky, drobečků, patičky a spodní lišty, jen tenká lišta hodiny; písmo zhruba o polovinu větší a čtenářský sloupec přes šířku plátna; u bloku, příběhu, kapitoly, oddílu a hlasu jen ten úsek stránky, krok cesty a celé stránky celé. Ovládá se klikačem i klávesnicí: šipka vpravo nebo PageDown posune uvnitř dlouhého zastavení o obrazovku a na jeho konci přejde na další zastavení, šipka vlevo nebo PageUp obráceně, F celá obrazovka, Esc konec promítání. Bloky zůstávají funkční (učitel klikne, co třída odhlasovala). Odkrývání na pokyn, QR kód a jeden podnět na obrazovku zůstávají Režimu třídy.

### Kudy se k tomu učitel dostane

Hlavní navigace zůstává studentská (pět vstupů). Skladatel hodiny je v patičce jako „Pro učitele: připravit hodinu“ a v deníku jako „Moje hodiny“, protože tam už je export a soukromý prostor. Stránka hodiny pro studenty se otevírá jen odkazem.

### Dokud web běží jen lokálně

Odkaz pro studenty poslouží, až bude atlas na webu. Do té doby jde hodinu promítat z učitelova notebooku (lišta hodiny) a vytisknout **přehled hodiny pro učitele**: pořadí, názvy, poznámky a adresy zastavení. Tištěný pracovní list pro studenty větev nedělá.

## Co rozhodnout (prázdná odpověď znamená souhlas s návrhem)

Autor nechal všech pět odpovědí prázdných, takže platí návrh (H1, 17. 10. 2026).

1. **Zastavení jako odkazy na místa v atlasu** s lištou hodiny, ne jedna poskládaná stránka. Odpověď:
2. **Poznámky učitele nejdou do odkazu pro studenty.** Odpověď:
3. **Vstup pro učitele v patičce a v deníku**, ne v hlavní navigaci. Odpověď:
4. **Tisk jen jako přehled pro učitele**, pracovní list pro studenty až s Režimem třídy. Odpověď:
5. **Celé stránky (profil, otázka, přehled cesty) jdou do hodiny i bez kotvy**, medailonky ne. Odpověď:

## Co zůstává na později

- Tlačítko „Do hodiny“ přímo u bloku nebo kroku při procházení atlasu (sběr bez skladatele). Po H2 se ukáže, jestli ho výběr z katalogu nenahradí.
- Režim třídy (`docs/plan.md` › Doma i ve třídě): naváže na lištu hodiny.
- Hotové vzorové hodiny k celkům 1 až 8 (třeba z listů v `ucitel/`): obsah, ne funkce; až po zkoušce se studenty.

## Po H1

Hotovo 17. 10. 2026. Katalog skládá `katalogZastaveni` v `src/lib/hodiny.ts`, endpoint `src/pages/hodina/katalog.json.ts` ho zapíše do `/hodina/katalog.json` (verze 1). Ve stejném souboru je formát hodiny (`UlozenaHodina`, `adresaHodiny`, `hodinaZAdresy`, `hodinaZeSouboru`), `najdiZastaveni` s textem „Tohle místo už v atlasu není“ a `domaProjdi`. Testy: `tests/data/hodiny.test.ts` (15). Kontrola proti `dist/`: `node scripts/hodiny-katalog.mjs` po `npm run build`, končí „Chyb: 0“.

| Druh | Počet | Odkud název |
| --- | --- | --- |
| cesta (přehled) | 8 | `nazev` v přehledu cesty |
| krok | 63 | `nazev` ve frontmatteru kroku |
| blok | 120 | otázka v YAML (Volba, Roztřiď, Změň jednu věc, Spor), atribut `otazka` v MDX (Odkryj, Nejdřív sám, závěr cesty), `otazkaKdoZil` (Kdo žil dřív?), `NAZVY_KRESEB` (kresby) |
| příběh | 12 | `titulek` příběhu bez hvězdiček kurzívy |
| profil | 12 | jméno z dat, u společného profilu `titulek` |
| kapitola | 48 | `kapitoly` ve frontmatteru profilu (jen hotové) |
| oddíl | 36 | Doba a lidé, Myšlenky (`titulek` nebo výchozí), Zkus to žít s názvem výzvy; z `src/lib/oddily.ts` |
| otázka | 6 | `otazka` ve frontmatteru; jen otázky s hlasy mají stránku |
| hlas | 30 | jméno osoby z dat, pořadí jako časová osa (`seradHlasy`) |

Celkem 335 zastavení na 89 stránkách. Každé má `rodic` (krok, kapitola nebo oddíl, stránka) a `poradi` na stránce.

**Inventura kotev.** Pevnou kotvu z dat už měly kroky (stránka), kapitoly (`kotva` ve frontmatteru i v MDX), hlasy (`hlas-<osoba>`), bloky, kresby a příběhy (`id` v MDX) i Kdo žil dřív? (`kdo-<a>-<b>-<druh>` z dat). Kotva z názvu nevzniká nikde. Chyběla jen u závěru cesty: kořen ostrova `ZaverCesty` id neměl, teď ho nese v obou podobách (před hydratací i po ní). Kotvy a názvy oddílů Doba a lidé, Myšlenky, Zkus to žít a Kam dál byly napsané přímo v komponentách; teď je berou komponenty i katalog z `src/lib/oddily.ts`. Názvy kreseb přešly ze Svelte do `src/lib/kresby.ts`, výchozí otázka Kdo žil dřív? do `otazkaKdoZil` v `src/lib/bloky.ts`. Vzhled ani texty se nezměnily. Katalog zastaví sestavení, když kapitoly v textu profilu nesedí na frontmatter, blok nemá v datech otázku nebo dvě zastavení dostanou stejné id.

**Co jsem zvažoval.**

- *Celé stránky:* plán dával id jen částem. Celá stránka má stejnou předponu bez části: `k:<cesta>` přehled cesty, `o:<profil>` profil, `h:<otázka>` stránka otázky. Id má vždy tvar `předpona:stránka[/část]` a předpona říká, kam patří.
- *Co v katalogu není:* Moje stanovisko (je součástí karty myšlenky, do hodiny jde celý oddíl Myšlenky), Zkus to žít uvnitř kroku (část kroku), Kam dál a Prameny (rozcestník a seznam zdrojů), Návrat (nabízí ho jen deník), medailonky (rozhodnutí 5). Oddíl Doba a lidé v katalogu je: mini osa se současníky se hodí do hodiny.
- *Blok v kroku je zastavení, i když krok nic jiného nemá* (krok 2 cesty 1 je jen Volba). Učitel tak vybírá podle toho, co chce dělat, a „Doma projdi“ to sloučí.
- *„Doma projdi“:* krok nebo kapitola je v hodině, když v ní je sama, nebo cokoli na ní (blok v kroku, příběh v kapitole). Celý profil v hodině pokryje všechny kapitoly, přehled cesty kroky nepokryje. Stránky otázek se nepočítají. Skupiny jdou v pořadí, v jakém se jich hodina dotkla.
- *Čtené kapitoly:* deník si pamatuje jen naposledy čtený oddíl profilu (`cteni`), ne všechny dočtené kapitoly. `domaProjdi` proto bere obecný vstup (`Proslo`: kroky podle slugu, kapitoly podle adresy profilu); kroky dodá deník už teď (`cesty[slug].navstivene`), kapitoly až nové pole v H3 (viz Co rozhodnout po H1).
- *Adresa:* `/hodina/?v=1&n=<název>&z=<id>,<id>`; dvojtečky, lomítka a čárky v id zůstávají nezakódované, aby byla adresa čitelná, a stejně tak se přečte, když ji prohlížeč zakóduje. Řetězec, který nemá tvar id, se zahodí; id ve správném tvaru, které v atlasu není, zůstane a ukáže se jako „Tohle místo už v atlasu není“. Hodina má nejvýš 60 zastavení a název nejvýš 120 znaků.

## Co rozhodnout po H1 (prázdná odpověď znamená souhlas s návrhem)

Autor nechal všechny tři odpovědi prázdné, takže platí návrh (H2, 17. 10. 2026).

1. **Id celých stránek** `k:<cesta>`, `o:<profil>`, `h:<otázka>` (stejná předpona jako jejich části). Odpověď:
2. **Oddíl Doba a lidé jde do hodiny**; Moje stanovisko, Kam dál, Prameny a Návrat ne. Odpověď:
3. **Čtené kapitoly v deníku:** H3 přidá nepovinné pole `prectene` (adresa profilu → kotvy kapitol, které student dočetl, verze deníku zůstane 1), aby „Doma projdi“ umělo odškrtnout i kapitoly. Bez něj odškrtne jen kroky cest. Odpověď:

## Po H2

Hotovo 17. 10. 2026. Skladatel hodiny stojí na `/hodina/nova/` (stránka `src/pages/hodina/nova.astro`, ostrov `src/components/hodina/Skladatel.svelte`), uložené hodiny jsou v `src/lib/hodiny-uloziste.ts`, strom výběru, hledání, filtry, štítky a přeřazení v `src/lib/skladatel.ts`. Vstupy: odkaz „Pro učitele: připravit hodinu“ v patičce každé stránky (`src/layouts/Zakladni.astro`) a oddíl Moje hodiny v deníku (`src/components/hodina/MojeHodiny.svelte` uvnitř ostrovu Deník). Hlavní navigace se nezměnila, stránka nemá `data-pagefind-body`. Popis a API v `docs/design.md` › Komponenty, rozhodnutí v `docs/rozhodnuti.md`.

| Co | Kde | Testy |
| --- | --- | --- |
| Úložiště hodin: `nactiHodiny` (od naposledy změněné), `nactiHodinu`, `ulozHodinu` (nové id `hodina-<čas>-<náhoda>`, posun `zmeneno` i ve stejné milisekundě, pročištění jako soubor), `smazHodinu`, `jmenoSouboru`, `souborHodiny`, `stahniHodinu`; bez úložiště v paměti | `src/lib/hodiny-uloziste.ts` | `tests/data/hodiny-uloziste.test.ts` (11) |
| Výběr: `stromKatalogu` (stránky a pod nimi zastavení podle `rodic`, kroky podle čísla), `filtrujKatalog` (hledání bez diakritiky, všechna slova, i v názvu nadřazeného zastavení; období; druh), `stitekDruhu`, `kdeStoji`, `posun`, `pocetZastaveni` | `src/lib/skladatel.ts` | `tests/data/skladatel.test.ts` (11) |
| Skladatel: výběr po stránkách v `<details>`, Přidat / Odebrat, náhled jako odkaz do nové karty, hodina s poznámkami, Výš / Níž / Odebrat s návratem fokusu, Uložit, Stáhnout soubor, Nahrát soubor, Odkaz pro studenty s Kopírovat, neznámé zastavení, `?hodina=<id>`, dialog prohlížeče při odchodu s neuloženými změnami | `src/components/hodina/Skladatel.svelte` | `tests/e2e/hodina.spec.ts` (10 testů: klávesnice, neznámé zastavení, soubor, filtry, Moje hodiny, patička, rozvržení a axe na 390 a 1440 px v obou režimech) |
| Vypnuté tiché tlačítko s čárkovaným okrajem | `src/styles/global.css` | |
| Snímky pro autora s naplněným úložištěm: `ULOZISTE=<soubor.json>` a `AKCE=<výraz>` | `scripts/snimky-listy.mjs` | |

Snímky: `Claude outputs/hodiny/` (skladatel 390 a 1440 px ve světlém i tmavém režimu s uloženou hodinou o šesti zastaveních včetně jednoho, které v atlasu není, a s otevřenou cestou 5; deník s Moje hodiny na 390 px světle a 1440 px tmavě). Celé `npm test`: Vitest bez chyby, Playwright 487 z 488; spadl jen `zaver.spec.ts` (klávesnice na telefonu), protože mezi polem a lištou kroku je teď i odkaz v patičce. Test hledá „Dokončit cestu“ tabulátorem až šestkrát a samostatně prošel. `node scripts/hodiny-katalog.mjs`: Chyb: 0.

**Co jsem zvažoval.**

- *Telefon:* hodina nad výběrem by byla blíž názvu a akcím, ale pořadí na obrazovce by se lišilo od pořadí v DOM a tabulátoru. Výběr je proto nahoře jako na notebooku a počet zvolených zastavení drží řádek přilepený pod hlavičkou s odkazem K hodině. Pevná lišta dole by se sešla se spodní lištou webu a potřebovala by úpravu skriptu, který hlídá fokus pod lištou.
- *Hledání:* jen v názvu zastavení našlo „Epiktétos“ řádek profilu a hlasy, ale ne kapitoly (kapitoly osobu nejmenují). Hledání proto čte i názvy nadřazených zastavení.
- *Náhled:* zvláštní tlačítko u každého z 335 zastavení by přidalo stejný počet zastávek tabulátoru. Náhled je název zastavení jako odkaz do nové karty se šipkou.
- *Ukládání:* žádné automatické; Uložit je akce ze zadání. Při odchodu s neuloženými změnami se ozve prohlížeč. Nahraný soubor se otevře jako neuložený.
- *Neznámé zastavení v odkazu:* odkaz pro studenty ho nese dál (`adresaHodiny` zahazuje jen řetězce, které nemají tvar id), takže student uvidí „Tohle místo už v atlasu není“. Skladatel ho ukáže a nabídne odebrat. Viz Co rozhodnout po H2.
- *Odkaz pro studenty* vede na `/hodina/?…`, kterou postaví až H3; do té doby skončí na stránce 404.
- *Smazání* potvrzuje řádek v deníku, ne dialog prohlížeče. Smazaná hodina nejde vrátit; soubor .json je jediná záloha.

## Co rozhodnout po H2 (prázdná odpověď znamená souhlas s návrhem)

1. **Na telefonu výběr nad hodinou** a počet zvolených zastavení v přilepeném řádku nad výběrem (ne hodina nahoře, ne pevná lišta dole). Odpověď:
2. **Nahraný soubor se neuloží sám**, do Mých hodin se dostane až tlačítkem Uložit. Odpověď:
3. **Odkaz pro studenty nese i zastavení, které v atlasu už není** (student uvidí „Tohle místo už v atlasu není“); jinak by ho skladatel z odkazu tiše vypustil. Odpověď:
4. **Lišta hodiny v H3** pozná, že student prochází hodinu, podle hodiny uložené v `sessionStorage` (jen pro tuto kartu, po zavření zmizí), ne podle parametru v adrese každého zastavení. Odpověď:

## Zadání H3: hodina pro studenta

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high**, se skillem `atlas-komponenta` (xhigh při zaseknutí).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (příprava hodiny, plán docs/plany/hodiny-v1.md; přečti z něj oddíly Co větev staví, Po H2 a Co rozhodnout po H1 a po H2, odpovědi autora tam mají přednost před návrhem). Tento krok je H3: hodina pro studenta. Použij skill atlas-komponenta. Katalog, formát a adresu hodiny, najdiZastaveni a domaProjdi už máš v src/lib/hodiny.ts, uložené hodiny v src/lib/hodiny-uloziste.ts, štítky a místa zastavení v src/lib/skladatel.ts; nepiš je znovu.

1. Stránka hodiny /hodina/ (ostrov ve Svelte; hodinu čte z adresy přes hodinaZAdresy, katalog si stáhne z /hodina/katalog.json). Název hodiny, zastavení v pořadí (štítek druhu, kde stojí, název jako odkaz na místo v atlasu) a hlavní tlačítko na první zastavení. Zastavení, které v katalogu není, ukaž s textem NENI_V_ATLASU, bez odkazu. Adresa bez hodiny nebo s neznámou verzí ukáže krátkou větu a odkaz Domů. Poznámky učitele tu nikdy nejsou. Stránka nepatří do vyhledávání.

2. Doma projdi. Pod zastaveními oddíl „Doma projdi“ z domaProjdi: ke každé cestě a profilu, kterých se hodina dotkla, kroky a kapitoly, které v hodině nebyly, jako odkazy; co student už prošel, je odškrtnuté (text, ne jen barva). Kroky ber z deníku (cesty[slug].navstivene). Pro kapitoly přidej do deníku nepovinné pole prectene (adresa profilu → kotvy dočtených kapitol; verze deníku zůstává 1, starší deníky se načtou beze změny, pole je v exportu): kapitola je dočtená, když student dočte její konec (rozhodni sám, jak to poznat tak, aby kapitola nepočítala jen proletění; zapiš do docs/rozhodnuti.md). Bez zbytku oddíl nic neukazuje.

3. Hodina v deníku. Otevřená hodina se zapíše do deníku jako nepovinné pole hodiny (adresa hodiny, název, kdy naposledy otevřená; nejvýš deset, nejstarší vypadne). Deník ji ukáže studentovi v oddílu „Hodiny“ s odkazem zpět; Moje hodiny učitele zůstávají zvlášť.

4. Lišta hodiny. Když student hodinu otevře, uloží se jako aktivní pro tuto kartu (sessionStorage, pokud autor v Co rozhodnout po H2 neřekl jinak). Na každé stránce atlasu, kde stojí některé její zastavení, se ukáže lišta „Hodina: <název> · 3 ze 7“ s Předchozí, Další (na adresu sousedního zastavení), Přehled hodiny a Zavřít. Když na stránce stojí víc zastavení hodiny (krok s blokem), platí to, na které student přišel z lišty nebo podle kotvy. Lišta se nesmí tlouct se spodní lištou telefonu, s lištou kroku cesty ani s lištou Obsah na profilu; když je pevná dole, přidej ji do skriptu, který v src/layouts/Zakladni.astro hlídá fokus pod lištou, a do tests/e2e/fokus-lista.spec.ts. Zavřená lišta se v té kartě už neukáže, dokud student hodinu znovu neotevře.

5. Promítat (přání autora ze 17. 10. 2026; plán › Co větev staví › Promítání na plátně). Na stránce hodiny tlačítko „Promítat hodinu“ (a totéž ve skladateli u uložené hodiny), které otevře první zastavení v režimu pro plátno. Režim drží sessionStorage spolu s aktivní hodinou a pozná ho i stránka po přechodu na další zastavení (třída na <html>, nastavená skriptem před vykreslením, aby nic neprobliklo). Na plátně: bez hlavičky, drobečků, patičky a spodní lišty webu, jen tenká lišta hodiny „Delfy · 3 ze 7“ se stejnými tlačítky jako lišta hodiny; písmo zhruba o polovinu větší (přes tokeny, ne zoomem prohlížeče) a čtenářský sloupec přes šířku plátna s rozumnými okraji; u zastavení s kotvou (blok, příběh, kapitola, oddíl, hlas) jen ten úsek stránky, ostatní obsah skrytý, u kroku cesty a celé stránky celá stránka (lišta kroku cesty se skryje, posun obstará lišta hodiny). Ovládání: šipka vpravo, PageDown a mezerník posunou uvnitř zastavení o obrazovku (kousek předchozí zůstane vidět, aby se neztratil řádek), na konci zastavení přejdou na další; šipka vlevo, PageUp a Shift+mezerník obráceně (na předchozí zastavení přijde student na jeho konec, nebo začátek – rozhodni a zapiš); F zapne a vypne celou obrazovku (Fullscreen API), Esc nebo tlačítko Ukončit promítání vrátí normální stránku. Klávesy nesmí brát fokus z polí: když je fokus v poli, posuvníku nebo přepínači bloku, šipky a mezerník patří jemu. Bloky fungují dál. Pohyb kreseb běží jako jinde a při omezeném pohybu stojí. Ověř na 1280 × 720 a 1920 × 1080 (typický projektor) ve světlém i tmavém režimu, že text zastavení je čitelný z dálky a nic nepřetéká do strany.

6. Tisk přehledu pro učitele. Ve skladateli tlačítko „Vytisknout přehled“: tisková podoba s názvem, poznámkou k hodině a zastaveními v pořadí (číslo, štítek, kde stojí, název, celá adresa, poznámka). Na papíře bez navigace, výběru a tlačítek. Pracovní list pro studenty se nedělá.

7. Kontroly. Jednotkové testy pro nové čisté funkce (prectene, hodiny v deníku, výběr aktuálního zastavení lišty, kam vede další a předchozí krok promítání). E2e test tests/e2e/hodina-student.spec.ts: otevřít hodinu z odkazu, neznámé zastavení, neplatná adresa, průchod lištou tam a zpět jen klávesnicí, zavřít lištu, Doma projdi s odškrtnutým krokem a kapitolou, hodina v deníku, tisková podoba (emulateMedia print), poznámky se studentovi nikdy neukážou; promítání: celá hodina tam a zpět jen šipkami a PageDown/PageUp přes krok, blok, kapitolu a hlas, skrytá hlavička a patička, viditelný jen úsek zastavení, šipky v poli bloku nepřeskočí zastavení, Esc vrátí normální stránku. Axe na stránce hodiny a na stránce s lištou. Snímky 390 a 1440 px ve světlém i tmavém režimu do Claude outputs/hodiny/ (stránka hodiny, krok cesty s lištou, profil s lištou i s lištou Obsah, tisková podoba) a promítání na 1280 × 720 a 1920 × 1080 (krok cesty, blok, kapitola, hlas) a prohlédni je.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H3, oddíl „Po H3“ a plné zadání revize R, rozhodnutí zapiš do docs/rozhodnuti.md, popis do docs/design.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```
