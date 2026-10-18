# Plán větve hodiny-v1: příprava hodiny

Učitel si z atlasu složí hodinu: vybere kroky cest, bloky, kapitoly profilů a hlasy otázek z různých stránek, seřadí je, připíše si poznámky a hodinu si uloží. Studenti dostanou odkaz na tutéž hodinu a doma projdou zbytek; atlas jim ukáže, které kroky a kapitoly v hodině nebyly. Je to přání autora z 15. 10. 2026 (`docs/plan.md` › Doma i ve třídě). Všechno běží ve statickém webu: bez účtů, bez serveru, hodina se ukládá v prohlížeči a do souboru a sdílí se adresou. Režim třídy (velké písmo, odkrývání na pokyn, QR kód) na větev naváže později a není její součástí. Větev je založená z hlavní větve 17. 10. 2026 (commit `b135e57`, po uzavření `medailonky`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| H1 | Katalog zastavení a kotvy: co všechno jde dát do hodiny, pevné id a adresa každého zastavení, formát hodiny a její adresy, kontrola katalogu proti sestavenému webu | Opus 5.5 · high | hotovo 17. 10. 2026; viz Po H1 |
| H2 | Skladatel hodiny `/hodina/nova/`: výběr z katalogu, pořadí, poznámky, uložení, soubor, odkaz ke sdílení | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 17. 10. 2026; viz Po H2 |
| H3 | Hodina pro studenta: stránka hodiny, lišta hodiny při průchodu, „Doma projdi“ podle deníku, režim Promítat pro plátno, tisk přehledu pro učitele | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 17. 10. 2026; viz Po H3 |
| H4 | Podoba zastavení na plátně: u bloku a kresby volba, kolik z něj promítnout (celý, jen otázka a možnosti, otevřená otázka bez karet A–D, jen kresba); třídní anketa rukou nebo s telefony; čisté bloky při promítání | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | čeká; zadání níže |
| R | Revize větve očima učitele, studenta a uživatele telefonu | Opus 5.5 · high se skillem `atlas-revize` | čeká; zadání níže |
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

Po H3 (přání autora z 18. 10. 2026): i stránka s jedním blokem je na plátně pořád hodně textu. U bloku a kresby si proto učitel ve skladateli vybere **podobu na plátně** (krok H4): celý blok, jen otázka a možnosti (bez scény a Kam dál), otevřená otázka (bez karet A–D; třída hlasuje rukou nebo si možnosti otevře v telefonu přes odkaz hodiny a pak se o volbách mluví) a u kresby jen kresba s ovládáním. Podoba platí jen pro promítání, student doma vidí celou stránku.

Každé promítání začíná s čistými bloky (přání autora z 18. 10. 2026): nic z deníku na učitelově počítači (odpovědi minulé třídy, odkrytá zpětná vazba, rozepsané důvody) se na plátně neukáže a nic z hodiny se do deníku nezapíše. Během jednoho promítání si bloky stav drží (učitel se vrátí o zastavení zpět a volba třídy tam je), další Promítat hodinu začne znovu od nuly.

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
- Třídní anketa s počty hlasů na plátně (studenti volí v telefonu, plátno ukáže, kolik zvolilo A–D): statický web bez serveru hlasy sečíst neumí. V H4 se hlasuje rukou nebo v telefonu a mluví se o tom; počítání hlasů až s Režimem třídy, pokud atlas dostane server nebo sdílení v místní síti.
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

Autor nechal všechny čtyři odpovědi prázdné, takže platí návrh (H3, 17. 10. 2026).

1. **Na telefonu výběr nad hodinou** a počet zvolených zastavení v přilepeném řádku nad výběrem (ne hodina nahoře, ne pevná lišta dole). Odpověď:
2. **Nahraný soubor se neuloží sám**, do Mých hodin se dostane až tlačítkem Uložit. Odpověď:
3. **Odkaz pro studenty nese i zastavení, které v atlasu už není** (student uvidí „Tohle místo už v atlasu není“); jinak by ho skladatel z odkazu tiše vypustil. Odpověď:
4. **Lišta hodiny v H3** pozná, že student prochází hodinu, podle hodiny uložené v `sessionStorage` (jen pro tuto kartu, po zavření zmizí), ne podle parametru v adrese každého zastavení. Odpověď:

## Po H3

Hotovo 17. 10. 2026. Student otevře hodinu odkazem `/hodina/?v=1&n=…&z=…` (stránka `src/pages/hodina/index.astro`, ostrov `src/components/hodina/HodinaStudent.svelte`), prochází ji lištou na stránkách atlasu, doma dostane „Doma projdi“ a hodinu najde v deníku. Učitel ji promítá na plátně a ze skladatele vytiskne přehled. Popis a API v `docs/design.md` › Komponenty a › Co se ukládá, rozhodnutí v `docs/rozhodnuti.md`.

| Co | Kde | Testy |
| --- | --- | --- |
| Aktivní hodina karty v `sessionStorage` (`atlas-hodina-aktivni`) s adresami zastavení; aktuální zastavení stránky (`aktualniZastaveni`: z lišty, podle kotvy, první), sousední zastavení bez neznámých, „3 ze 7“ s předložkou podle čísla, krok promítání (`krokPromitani`, `polohaPrichodu`, `prekryv`), klávesy v polích (`klavesaPatriPrvku`), `vstupDoHodiny` | `src/lib/pruchod-hodiny.ts` | `tests/data/pruchod-hodiny.test.ts` (20) |
| Deník: `prectene` a `kapitolaDoctena` (konec vidět a čas přelétnutí při 500 slovech za minutu, nejméně 10 s), `hodiny` (nejvýš deset); verze 1, starší deníky beze změny | `src/lib/denik.ts`; měření času v kapitole ve skriptu `src/components/osobnost/ObsahProfilu.astro` | `tests/data/denik.test.ts` (+7) |
| Stránka hodiny: název, zastavení v pořadí, „Tohle místo už v atlasu není“ bez odkazu, Začít hodinu, Promítat hodinu, Doma projdi s „✓ prošel jsi“ a „✓ dočteno“, neplatná adresa s odkazem Domů | `src/components/hodina/HodinaStudent.svelte` | `tests/e2e/hodina-student.spec.ts` |
| Oddíl Hodiny v deníku | `src/components/ostrovy/Denik.svelte` | tamtéž |
| Lišta hodiny pod hlavičkou: Předchozí, Další, Přehled hodiny, Zavřít; místo pro ni od prvního vykreslení (skript v hlavičce `Zakladni.astro`), lišta Obsah pod ní, fokus nezůstane pod ní ani při couvání | `src/components/rozvrzeni/ListaHodiny.astro`, `src/scripts/hodina-lista.ts`, `src/layouts/Zakladni.astro` | `tests/e2e/hodina-student.spec.ts`, `tests/e2e/fokus-lista.spec.ts` (+1) |
| Promítání: `--meritko` (1,5) ve všech velikostech písma, sloupec přes plátno, jen úsek zastavení, šipky / PageDown / mezerník, F, Esc, Ukončit promítání | `src/styles/promitani.css`, `src/styles/tokens.css`, `src/scripts/hodina-lista.ts` | `tests/e2e/hodina-student.spec.ts` |
| Skladatel: Promítat hodinu (u uložené hodiny), Vytisknout přehled a tisková podoba; světlé tokeny v tisku | `src/components/hodina/Skladatel.svelte`, `src/styles/tokens.css` | tamtéž |

Snímky: `Claude outputs/hodiny/` (stránka hodiny, krok cesty s lištou, profil s lištou i lištou Obsah a tisková podoba na 390 a 1440 px ve světlém i tmavém režimu; promítání kroku, bloku, kapitoly a hlasu na 1280 × 720 a 1920 × 1080 v obou režimech). Celé `npm test`: Vitest 666 z 666, Playwright 513 z 513 (nový `hodina-student.spec.ts` má 24 testů, `fokus-lista.spec.ts` jeden navíc). `node scripts/hodiny-katalog.mjs`: Chyb: 0.

**Co jsem zvažoval.**

- *Kde lišta stojí:* dole by se sešla se spodní lištou telefonu a s lištou kroku cesty (na telefonu by spodní pruh měl přes 120 px). Nahoře pod hlavičkou má 48 px a lišta Obsah na profilu drží pod ní. Hlavička kroku cesty je o pár pixelů vyšší než token `--hlavicka`, proto se měří.
- *Kudy zjistit zastavení na stránce:* parametr v adrese každého zastavení by hodinu nesl do sdílených odkazů a záložek. `sessionStorage` patří kartě a stránky se dívají jen na adresu stránky a kotvu.
- *Krok a blok na téže stránce:* přechod se nenačítá znovu (`history.pushState`), jinak by blok přišel o rozepsanou odpověď a plátno by probliklo.
- *Úsek na plátně:* kotva u bloku, příběhu, kapitoly a hlasu stojí na kořeni úseku; u Doby a lidí a Myšlenek na nadpisu, úsekem je pak celý oddíl (`data-oddil-kotva`). Hlas dostane roky nad jménem, v okraji by na plátně vyjely ven.
- *Couvání:* na předchozí zastavení přijde učitel na jeho konec. Je to přesný opak postupu vpřed; začátek by znamenal přeskočit všechno, co právě ukázal.
- *Celá obrazovka:* prohlížeč ji při přechodu na jinou stránku vždy zavře a znovu ji dovolí jen po klávese nebo klepnutí. Atlas ji tedy zapne první klávesou na další stránce. Celá obrazovka prohlížeče (⌃⌘F, F11) přechody přežije a na promítání je lepší; viz Co rozhodnout po H3.
- *Omezený pohyb:* `global.css` zkracuje všem prvkům přechody na 0,01 ms, takže i `visibility` se mění přechodem a objeví se až po několika snímcích. Skrytý obsah (lišta před vyplněním, plátno před nastavením polohy) je proto přes `display`. Zapsáno v `docs/pouceni.md`.
- *Dočtená kapitola:* jen „konec byl vidět“ by počítal i proletění, jen čas by počítal kapitolu, kterou student nechal otevřenou a odešel. Obojí dohromady; čas běží, jen když je kapitola právě čtený oddíl a karta je vidět.
- *Tisk:* tmavý režim by dal na papír světlý text; v tisku jsou tokeny vždy světlé, pro celý atlas.

## Co rozhodnout po H3 (prázdná odpověď znamená souhlas s návrhem)

1. **Couvání na konec předchozího zastavení** (šipka vlevo, PageUp); jinak na jeho začátek. Odpověď:
2. **Celá obrazovka:** F zapne celou obrazovku stránky a po přechodu na další zastavení se zapne znovu první klávesou (prohlížeč ji mezi stránkami zavírá). V listu pro učitele bych doporučil celou obrazovku prohlížeče (⌃⌘F na Macu, F11 ve Windows), která přechody přežije. Odpověď:
3. **Hlas otázky s lištou** nechá stránku otázky, jak je (nejdřív Tvůj první názor); na plátně se hlasy ukážou hned. Odpověď:
4. **Dočtená kapitola:** konec vidět a čas přelétnutí při 500 slovech za minutu, nejméně 10 s. Odpověď:
5. **Lišta hodiny nahoře pod hlavičkou**, ne dole. Odpověď:
6. **Přehled hodiny při promítání** otevře stránku hodiny v normální podobě a promítání tím skončí. Odpověď:

## Zadání H4: podoba zastavení na plátně

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high**, se skillem `atlas-komponenta` (xhigh při zaseknutí). Přání autora z 18. 10. 2026: na plátno si „natahat hlavně interaktivní prvky“; u otázek mít na výběr, jestli ukázat karty A–D, aby z toho byla třídní anketa a kdo si něco vybral, rozvedl proč.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (plán docs/plany/hodiny-v1.md; přečti z něj Co větev staví › Promítání na plátně, Po H3 a Co rozhodnout po H3, odpovědi autora tam mají přednost před návrhem). Tento krok je H4: podoba zastavení na plátně. Použij skill atlas-komponenta. Formát a adresa hodiny jsou v src/lib/hodiny.ts, průchod a promítání v src/lib/pruchod-hodiny.ts a src/scripts/hodina-lista.ts, styly plátna v src/styles/promitani.css, skladatel v src/components/hodina/Skladatel.svelte; stav a rozhodnutí H3 jsou v plánu a v docs/rozhodnuti.md. Nepiš znovu, co tam je.

1. Podoby. U zastavení druhu blok (včetně kreseb) si učitel vybere, jak se ukáže na plátně: „Celý blok“ (výchozí, jak je dnes), „Jen otázka a možnosti“ (bez scény, bez Kam dál a bez věty pod blokem; zpětná vazba se ukáže, až učitel klikne, co třída zvolila), „Otevřená otázka“ (nadtitulek a otázka velkým písmem; karty A–D, pole na důvod, tlačítka i zpětná vazba skryté) a u kresby „Jen kresba“ (plátno kresby a její ovládání; text pod kresbou zůstane čtečkám, jen nebude vidět). Ostatní druhy zastavení (krok, příběh, kapitola, oddíl, hlas, celá stránka) podobu nemají. Pro každý druh bloku (Volba, Odkryj, Nejdřív sám, Roztřiď, Změň jednu věc, Spor, Kdo žil dřív?, Závěr cesty, kresby) rozhodni, které podoby dávají smysl a co v nich je vidět (Roztřiď bez karet nemá co ukázat, u Sporu jsou „možnosti“ strany sporu, u Odkryj skrytá část), zapiš tabulku do docs/design.md a skladatel nabídne jen ty podoby, které druh má. Části bloku neurčuj podle nahodilých tříd: dej jim v komponentách bloků pevné značky (třeba data-cast="scena|moznosti|duvod|zpetna|dal|popis") a styly plátna skrývej podle nich.

2. Ukázat možnosti. V podobě Otevřená otázka má lišta hodiny na plátně tlačítko „Ukázat možnosti“ (a klávesu M mimo pole): ukáže karty A–D toho zastavení, jako by bylo v podobě Jen otázka a možnosti, dokud učitel nepřejde jinam; při návratu na zastavení je zase skryté. Učitel pak klikne, co třída zvolila, a blok funguje jako jinde.

3. Hodina a odkaz. UlozenaHodina dostane u zastavení nepovinné pole podoba; soubor i úložiště ho nesou, starší hodiny bez něj mají Celý blok. Odkaz pro studenty nese podobu krátkou značkou za id (třeba b:cesta1-jak-zjistit~o), protože se z něj promítá i ze stránky hodiny; verze odkazu zůstává 1, odkaz bez značky je Celý blok a neznámá značka se bere jako Celý blok (nic nespadne). adresaHodiny, hodinaZAdresy, hodinaZeSouboru, aktivní hodina v sessionStorage i najdiZastaveni s tím počítají; id samotné se nemění (katalog, Doma projdi a lišta pracují s id bez značky).

4. Skladatel a stránka hodiny. Ve skladateli u každého bloku a kresby v hodině malý výběr „Na plátně:“ (výchozí Celý blok), přístupný klávesnicí, s hlášením změny ve stavu; podoba je i v tiskovém přehledu („na plátně: otevřená otázka“). Na stránce hodiny pro studenta se podoba neukazuje a student doma i s lištou vidí stránku celou; podoba působí jen v režimu promítání.

5. Třída s telefony. Když učitel promítá otevřenou otázku, studenti mohou mít tutéž hodinu otevřenou v telefonu z odkazu a na stejném zastavení vidí karty A–D celé: ověř, že to funguje (lišta, zastavení s kotvou, blok s možnostmi na 390 px) a že promítání u učitele a průchod u studenta se navzájem neovlivňují (každá karta má svou aktivní hodinu). Počítání hlasů na plátně se nedělá (statický web bez serveru; plán › Co zůstává na později).

5a. Čisté bloky při promítání (přání autora z 18. 10. 2026: „na každou hodinu čisté“, výchozí stav 0). Každé Promítat hodinu (ze stránky hodiny i ze skladatele) začne se všemi bloky v počátečním stavu: žádná vybraná karta, nic odkrytého, prázdná pole, žádné „Tvůj tah“ ani „Na začátku“ z dřívějška, i když je deník na tom počítači plný. Nic z promítání se nezapíše do deníku (zápisy, stav bloků, aktivita, postup cest, dočtené kapitoly, navštívené stránky). Během jednoho promítání se stav bloků drží napříč zastaveními a stránkami (návrat o zastavení zpět ukáže, co třída zvolila); po Ukončit promítání, novém Promítat hodinu nebo zavření karty zmizí. Řeš to na jednom místě, ne v každém bloku: v režimu promítání ať deník (src/lib/denik.ts, nacti/uloz) čte a píše oddělený deník promítání v sessionStorage, který Promítat hodinu vždy založí prázdný; bloky, Pokračuj, PostupCesty a skript dočtených kapitol pak nemusí vědět nic. Pozor na skripty, které čtou localStorage atlas-denik přímo před vykreslením (otázka: Tvůj první názor; profil: Pokračovat ve čtení; Domů): na plátně se musí chovat jako u prázdného deníku. Student s lištou (bez promítání) pracuje dál se svým deníkem jako všude jinde (autor 18. 10. 2026: „u studentů to klidně nech, jde o to, jak to má být na plátně“). Testy: s plným deníkem (zvolená Volba, odkrytý Odkryj, zápis Tvého prvního názoru) promítnout hodinu, bloky jsou čisté; zvolit kartu, přejít dál a zpět, volba drží; ukončit promítání, deník je beze změny (porovnat celý localStorage atlas-denik před a po); nové Promítat hodinu je zase čisté.

6. Kontroly. Jednotkové testy pro podobu v adrese a v souboru (zápis, čtení, bez značky, neznámá značka, starší hodina) a pro to, které podoby má který druh bloku. E2e v tests/e2e/hodina-student.spec.ts (nebo vlastní soubor): ve skladateli nastavit podoby klávesnicí, uložit, odkaz nese značky, promítání ukáže u Jen otázka a možnosti otázku a karty bez scény a Kam dál, u Otevřené otázky jen otázku a Ukázat možnosti (tlačítkem i klávesou M) karty ukáže a po návratu na zastavení jsou zase skryté, u Jen kresba plátno kresby bez textu pod ní; šipky v kartách dál nepřeskočí zastavení; student s lištou vidí blok celý. Axe na plátně v každé podobě. Snímky každé podoby (Volba, Odkryj nebo Spor, kresba) na 1280 × 720 a 1920 × 1080 ve světlém i tmavém režimu a skladatel s výběrem podoby na 390 a 1440 px do Claude outputs/hodiny/ a prohlédni je: otázka musí být čitelná z dálky a na plátně nesmí zůstat nic, co do podoby nepatří.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H4, oddíl „Po H4“ a uprav zadání revize R, aby revize prošla i podoby na plátně; rozhodnutí zapiš do docs/rozhodnuti.md, popis do docs/design.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```

## Zadání R: revize větve

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** se skillem `atlas-revize`. Revize čte větev očima lidí, kteří ji budou používat: učitele, který skládá a promítá hodinu, studenta, který dostane odkaz a doma prochází zbytek, a uživatele telefonu. Neopravuje funkce, jen ohlásí a opraví drobnosti; zásadní nálezy seřadí podle dopadu s návrhem opravy.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi hodiny-v1. Plán je v docs/plany/hodiny-v1.md (tabulka, Co větev staví, oddíly Po H1 až Po H4 a Co rozhodnout po H3 a po H4; moje odpovědi tam mají přednost před návrhem), postup ve skillu atlas-revize (skills/atlas-revize/). Krok R: revize větve hodiny-v1.

1. Učitel: na náhledu (npm run dev, nebo sestavený web přes npx astro preview --port 4323) slož ve skladateli dvě skutečné hodiny k celkům 1 a 6 (pět až osm zastavení různých druhů, s poznámkami), ulož je, stáhni a nahraj soubor, zkopíruj odkaz pro studenty, vytiskni přehled (emulateMedia print, i z tmavého režimu) nastav u bloků a kreseb různé podoby na plátně (celý blok, jen otázka a možnosti, otevřená otázka, jen kresba) a obě hodiny promítni na 1280 × 720 a 1920 × 1080 jen klávesami (šipky, PageDown, mezerník, F, Esc) tam i zpět. Hlídej: dá se hodina složit bez návodu, sedí štítky a „kde stojí“ s tím, co je na stránce, je text na plátně čitelný z dálky, neztratí se řádek při posunu, nepřekáží nic, co na plátno nepatří, a dají se bloky ovládat, když třída hlasuje; u otevřené otázky zkus třídu s telefony (druhá karta na 390 px s odkazem hodiny) a Ukázat možnosti.
2. Student: otevři odkazy obou hodin v čisté kartě na telefonu (390 × 844) i notebooku, projdi je lištou a pak doma podle Doma projdi; zkus zastavení, které v atlasu není, zavřenou lištu, novou kartu, návrat z deníku a odkaz na kotvu uvnitř stránky (Kam dál z bloku). Přečti všechny texty, které větev přidala (stránka hodiny, lišta, Doma projdi, deník, tisk, zprávy skladatele), podle docs/styl.md: zní jako pokyn studentovi, ne jako popis rozhraní? Ověř, že se poznámky učitele studentovi nikde neukážou (stránka, lišta, deník, export deníku).
3. Telefon a klávesnice: scripts/kontrola-fokus.mjs na stránce hodiny, kroku s lištou a profilu s lištou i lištou Obsah (390 i 1440 px); axe tak, jak ho dělají testy; lišta hodiny proti hlavičce kroku, liště kroku, spodní liště a liště Obsah při posunu i po skoku na kotvu; omezený pohyb; čtečka (názvy tlačítek lišty na telefonu, kde jsou jen ikony).
4. Data a soulad: node scripts/hodiny-katalog.mjs po npm run build (Chyb: 0), katalog proti stránkám (názvy, štítky, kotvy), dočtené kapitoly v deníku (dočte se kapitola, kterou student opravdu čte, a ne ta, kterou proletí?), zápisy v docs/rozhodnuti.md a popis v docs/design.md proti stavu kódu.
5. Výstup: docs/revize/hodiny-v1-<datum>.md (nálezy podle dopadu, každý s návrhem opravy a s tím, co je drobnost a co rozhodnutí pro mě; verdikt „schváleno“ nebo „po opravách“). Drobnosti oprav rovnou, celé npm test na pozadí s výstupem do souboru, commituj česky po skupinách, nic neposílej na GitHub a nic nesluč. Do plánu větve zapiš stav R, oddíl „Po R“ a zadání O; zadání R přesuň do docs/archiv/zadani/hodiny-v1.md; plán nahraj do projektu Claude jako docs/plany/hodiny-v1.md. Pak mi napiš, co jsi našel a co je potřeba rozhodnout.
```
