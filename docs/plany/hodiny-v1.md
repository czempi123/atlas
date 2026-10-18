# Plán větve hodiny-v1: příprava hodiny

Učitel si z atlasu složí hodinu: vybere kroky cest, bloky, kapitoly profilů a hlasy otázek z různých stránek, seřadí je, připíše si poznámky a hodinu si uloží. Studenti dostanou odkaz na tutéž hodinu a doma projdou zbytek; atlas jim ukáže, které kroky a kapitoly v hodině nebyly. Je to přání autora z 15. 10. 2026 (`docs/plan.md` › Doma i ve třídě). Všechno běží ve statickém webu: bez účtů, bez serveru, hodina se ukládá v prohlížeči a do souboru a sdílí se adresou. Režim třídy (velké písmo, odkrývání na pokyn, QR kód) na větev naváže později a není její součástí. Větev je založená z hlavní větve 17. 10. 2026 (commit `b135e57`, po uzavření `medailonky`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| H1 | Katalog zastavení a kotvy: co všechno jde dát do hodiny, pevné id a adresa každého zastavení, formát hodiny a její adresy, kontrola katalogu proti sestavenému webu | Opus 5.5 · high | hotovo 17. 10. 2026; viz Po H1 |
| H2 | Skladatel hodiny `/hodina/nova/`: výběr z katalogu, pořadí, poznámky, uložení, soubor, odkaz ke sdílení | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 17. 10. 2026; viz Po H2 |
| H3 | Hodina pro studenta: stránka hodiny, lišta hodiny při průchodu, „Doma projdi“ podle deníku, režim Promítat pro plátno, tisk přehledu pro učitele | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 17. 10. 2026; viz Po H3 |
| H4 | Podoba zastavení na plátně: u bloku a kresby volba, kolik z něj promítnout (celý, jen otázka a možnosti, otevřená otázka bez karet A–D, jen kresba); třídní anketa rukou nebo s telefony; čisté bloky při promítání | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | hotovo 18. 10. 2026; viz Po H4 |
| R | Revize větve očima učitele, studenta a uživatele telefonu | Opus 5.5 · high se skillem `atlas-revize` | hotovo 18. 10. 2026; viz Po R |
| O | Opravy po revizi | Opus 5.5 · high se skillem `atlas-komponenta` | čeká; zadání níže |
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

Autor nechal všech šest odpovědí prázdných, takže platí návrh (H4, 18. 10. 2026).

1. **Couvání na konec předchozího zastavení** (šipka vlevo, PageUp); jinak na jeho začátek. Odpověď:
2. **Celá obrazovka:** F zapne celou obrazovku stránky a po přechodu na další zastavení se zapne znovu první klávesou (prohlížeč ji mezi stránkami zavírá). V listu pro učitele bych doporučil celou obrazovku prohlížeče (⌃⌘F na Macu, F11 ve Windows), která přechody přežije. Odpověď:
3. **Hlas otázky s lištou** nechá stránku otázky, jak je (nejdřív Tvůj první názor); na plátně se hlasy ukážou hned. Odpověď:
4. **Dočtená kapitola:** konec vidět a čas přelétnutí při 500 slovech za minutu, nejméně 10 s. Odpověď:
5. **Lišta hodiny nahoře pod hlavičkou**, ne dole. Odpověď:
6. **Přehled hodiny při promítání** otevře stránku hodiny v normální podobě a promítání tím skončí. Odpověď:

## Po H4

Hotovo 18. 10. 2026. U bloku a kresby si učitel ve skladateli vybere podobu na plátně, odkaz pro studenty ji nese značkou za id a promítání ukáže jen části bloku, které do podoby patří. Každé promítání začíná s čistými bloky v odděleném deníku promítání a deník studenta zůstane, jak byl. Popis a tabulka podob v `docs/design.md` › Komponenty › Podoba na plátně a › Co se ukládá, rozhodnutí v `docs/rozhodnuti.md`.

| Co | Kde | Testy |
| --- | --- | --- |
| Podoba: `Podoba`, `podobyZastaveni`, `nazevPodoby`, `ucinnaPodoba`, `platnaPodoba`, značky `~m` `~o` `~k` (`rozeberZastaveniOdkazu`, `zastaveniDoOdkazu`); `UlozenaHodina` se `zastaveni[].podoba`, `HodinaProStudenty.podoby`; `adresaHodiny`, `hodinaZAdresy`, `hodinaZeSouboru`, `hodinaProStudenty` | `src/lib/hodiny.ts` | `tests/data/podoby.test.ts` (25) |
| Aktivní hodina: `podoba` u položky (jen účinná), `poPromitani`; `vstupDoHodiny` s promítáním založí deník promítání, `ulozAktivni` bez promítání ho smaže | `src/lib/pruchod-hodiny.ts` | tamtéž |
| Deník promítání (`atlas-denik-promitani` v `sessionStorage`), `TEXT_DENIKU_SKRIPT` pro skripty před vykreslením (Domů, profil, stránka otázky), tichá stránka po konci promítání (`atlas-denik-ticho`) | `src/lib/denik.ts`, `src/pages/index.astro`, `src/components/osobnost/ObsahProfilu.astro`, `src/pages/otazka/[otazka].astro` | tamtéž, `tests/e2e/hodina-podoby.spec.ts` |
| Značky `data-cast` v blocích (Volba, Odkryj, Roztřiď, Změň jednu věc, Spor, Kdo žil dřív?, `BlokHlava`, `BlokDal`) a v rámu kresby; `data-siroka` u kresby širší než 1,8 : 1 | `src/components/ostrovy/` | `tests/e2e/hodina-podoby.spec.ts` |
| Styly podob na plátně, kresba přes plochu pod lištou (vedle ovládání, široká pod ním) | `src/styles/promitani.css` | tamtéž |
| Lišta: Ukázat možnosti (`aria-pressed`, klávesa M), na plátně pod 1600 px Přehled a Celá obrazovka jen ikonou, pořadí se nezkracuje; Esc a Ukončit promítání stránku načtou znovu (fokus na Přehled hodiny) | `src/components/rozvrzeni/ListaHodiny.astro`, `src/scripts/hodina-lista.ts` | tamtéž, `tests/e2e/hodina-student.spec.ts` |
| Skladatel: řádek Na plátně: s výběrem podoby, hlášení ve stavu, podoba v odkazu a v tisku („na plátně: otevřená otázka“) | `src/components/hodina/Skladatel.svelte` | `tests/e2e/hodina-podoby.spec.ts` |
| Oprava z H3: couvání z celé stránky na předchozí zastavení | `src/scripts/hodina-lista.ts` (`plocha`) | `tests/e2e/hodina-podoby.spec.ts` (čisté bloky: zpět ze stránky otázky) |

Snímky: `Claude outputs/hodiny/podoba-*` (promítání Volby jen s možnostmi, Odkryj a Volby jako otevřené otázky, Volby s ukázanými možnostmi, Sporu jen s možnostmi, široké a běžné kresby na 1280 × 720 a 1920 × 1080 ve světlém i tmavém režimu; skladatel s výběrem podoby na 390 a 1440 px v obou režimech; telefon studenta u otevřené otázky na 390 px). Celé `npm test`: Vitest 691 z 691, Playwright 525 z 526; spadl jen „cesta: průchod, Kam dál z bloku…“ v `cesta.spec.ts` a samostatně prošel (36 z 36). Nový `hodina-podoby.spec.ts` má 13 testů. `node scripts/hodiny-katalog.mjs`: Chyb: 0.

**Co jsem zvažoval.**

- *Které podoby kde:* Roztřiď bez karet nemá co ukázat, otevřenou otázku proto nemá. Závěr cesty je sám jen otázka a pole na vlastní pravidlo, zúžit ho není kam; má jen celý blok. U Odkryj jsou „možnosti“ tlačítko odkrytí a skrytá část, ve skladateli se podoba jmenuje „Jen otázka a odkrytí“.
- *Otevřená otázka:* z bloku zůstanou jen přímí potomci se značkou `hlava` a `otazka`. Část, která do bloku přibude a značku nedostane, se tak v otevřené otázce neukáže. Otázka stojí uprostřed plochy písmem nadpisu h2 (asi 69 px na 1280 px), aby byla čitelná ze zadní lavice.
- *Vlastní psaní v „jen otázka a možnosti“:* pole na důvod je skryté; ve třídě důvody zazní nahlas. Kdo chce, aby pole bylo vidět, zvolí celý blok.
- *Kresba:* pod sebou s přepínačem a ovládáním zbylo na 1280 × 720 na kresbu 185 px. Na plátně 4 : 3 a širším je proto plátno kresby vlevo přes celou výšku a ovládání vpravo; široká kresba (Loď po prknech) by se vedle zmenšila, ta má ovládání pod sebou.
- *Lišta:* s tlačítkem Ukázat možnosti se na 1280 px zkrátil název hodiny i pořadí na nic. Pod 1600 px mají Přehled hodiny a Celá obrazovka na plátně jen ikonu a pořadí se nezkracuje nikdy.
- *Čisté bloky na jednom místě:* deník promítání je v `sessionStorage` a `nacti` a `uloz` ho použijí, dokud existuje. Bloky ani Pokračuj o promítání nevědí nic. Skripty, které čtou deník před vykreslením, čtou totéž přes `TEXT_DENIKU_SKRIPT`.
- *Konec promítání:* bez nového načtení by blok dál ukazoval volbu třídy a prvním klepnutím by ji uložil do deníku studenta. Stránka se proto načte znovu; to je ale běžná návštěva (zapsal by se otevřený krok), proto je ta jedna stránka tichá, dokud ji učitel neopustí. Práce v blocích se zapíše normálně.
- *Stránka hodiny:* otevřená hodina se zapíše do oddílu Hodiny (H3), i když z ní učitel pak promítá. Stránka neví, co učitel udělá; samo promítání nezapíše nic. Viz Co rozhodnout po H4.
- *Třída s telefony:* každá karta má svou aktivní hodinu i deník promítání (`sessionStorage`), takže učitel promítá a student v druhé kartě nebo v telefonu prochází s lištou a svým deníkem; test to ověřuje ve dvou kartách téhož prohlížeče, které sdílejí `localStorage`.
- *Chyba z H3:* u zastavení „celá stránka“ couvání na začátku stránky stálo, protože začátek úseku byl výš, než se stránka dá posunout. Testy H3 couvaly jen z bloků, kapitol a hlasů.

## Co rozhodnout po H4 (prázdná odpověď znamená souhlas s návrhem)

Autor nechal všech pět odpovědí prázdných, takže platí návrh (R, 18. 10. 2026).

1. **Podoby podle komponenty** podle tabulky v `docs/design.md` (Roztřiď bez otevřené otázky, Závěr cesty jen celý). Odpověď:
2. **V „jen otázka a možnosti“ je skryté i pole na důvod** a další vlastní psaní; důvody zazní ve třídě nahlas. Odpověď:
3. **Kresba na plátně vedle ovládání** (široká pod ním). Odpověď:
4. **Konec promítání stránku načte znovu** a ta je do odchodu tichá (nezapíše otevřený krok ani návštěvu). Odpověď:
5. **Otevření stránky hodiny se zapíše do oddílu Hodiny i učiteli**, který z ní pak promítá; jinak by stránka hodiny zápis musela odložit až na první krok studenta. Odpověď:

## Po R

Hotovo 18. 10. 2026. Záznam revize je `docs/revize/hodiny-v1-2026-10-18.md`, verdikt **po opravách**: jeden důležitý nález (lišta po odbočce mimo hodinu zmizí) a sedm drobných, z toho jeden opravený rovnou (Esc v celé obrazovce v popisu promítání v `docs/design.md`). Revize prošla dvě skutečné hodiny k celkům 1 a 6 (osm zastavení, všechny podoby na plátně kromě široké kresby, ta ze snímků H4) očima učitele, studenta a uživatele telefonu; jak, říká záznam revize.

| Co | Kde |
| --- | --- |
| Průchody učitele a studenta na sestaveném webu: `node scripts/revize-hodiny.mjs <ucitel\|platno\|cisto\|telefony\|student>`, příchod na kotvu `scripts/revize-hodiny-kotva.mjs`, okrajové průchody `scripts/revize-hodiny-okraje.mjs`; snímky a záznamy v `Claude outputs/hodiny/revize/` | `scripts/` |
| `scripts/kontrola-fokus.mjs` a `scripts/revize-axe.mjs` znají proměnnou `HODINA` (adresa stránky hodiny): stránky pak mají lištu hodiny | `scripts/` |
| Mřížka snímků s názvy souborů: `node scripts/snimky-mrizka.mjs <vystup.jpg> <sloupcu> <sirka> <soubory…>` | `scripts/snimky-mrizka.mjs` |

Celé `npm test` po revizi: Vitest 691 z 691, Playwright 526 z 526. `node scripts/hodiny-katalog.mjs`: Chyb: 0. Kontrola fokusu a axe s lištou hodiny bez nálezu.

**Co jsem zvažoval.**

- *Lišta mimo hodinu:* rozhodnutí z H3 („Odkaz na kotvu uvnitř stránky aktuální zastavení přepíše“) mluví o kotvě na téže stránce; odbočku na jinou stránku žádné rozhodnutí neřeší. Na telefonu je velké „Další krok“ v liště kroku nejvýraznější tlačítko, takže odbočka nebude výjimka. Navrhuji lištu ve stavu mimo hodinu; jen lepší stránka hodiny by studenta nevrátila, dokud by ji sám nenašel v deníku.
- *Štítky bloků:* učitel podle druhu vybírá a filtruje, student podle něj nic nedělá; proto návrh měnit štítek jen u studenta.
- *Mrtvý stisk:* 4 px na Zrcadle času jsou zaokrouhlení výšky karty; hranice „méně než jeden řádek na plátně“ (asi 32 px) by pokryla i podobné případy jinde a nic by nepřeskočila.
- *Plynulý posun:* je to chování celého atlasu (`scroll-behavior: smooth`); nález se týká jen skoku z lišty hodiny, Kam dál a obsah profilu nechávám.
- *Dočtené kapitoly:* hranice z H3 drží (proletění nic, čtení po obrazovkách ano); dvě minuty na začátku a skok na konec se počítají jako dočtení, s tím rozhodnutí počítalo.

## Co rozhodnout po R (prázdná odpověď znamená souhlas s doporučením)

1. **Lišta mimo hodinu:** na stránce, která v hodině není, ukázat lištu ve stavu „mimo hodinu“ s cestou zpět na poslední zastavení a dál na další (doporučuji), nebo nechat, jak je. Odpověď:
2. **Štítky bloků u studenta:** na stránce hodiny pro studenta nadtitulek bloku, jak stojí na stránce („Nejdřív sám“, „Tvůj tah“), ve skladateli a v tisku dál druh bloku (doporučuji); nebo u studenta štítek u bloků vynechat. Odpověď:
3. **Promítat hodinu u studenta:** nechat, jak je, dokud atlas není na webu (doporučuji), nebo na telefonu jen jako tichý odkaz. Odpověď:
4. **Tisk přehledu s odkazem pro studenty** pod názvem hodiny. Odpověď:

## Zadání O: opravy po revizi

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** se skillem `atlas-komponenta` (xhigh při zaseknutí).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi hodiny-v1. Krok O: opravy po revizi. Plán je v docs/plany/hodiny-v1.md (Po R a Co rozhodnout po R; moje odpovědi mají přednost, prázdná odpověď znamená souhlas s doporučením), nálezy v docs/revize/hodiny-v1-2026-10-18.md, postup ve skillu atlas-komponenta. Čti jen to, co oprava potřebuje.

1. Lišta mimo hodinu (nález 1, podle mé odpovědi 1): na stránce bez zastavení aktivní hodiny lišta ve stavu mimo hodinu („Hodina: Delfy · mimo hodinu“, Předchozí na poslední navštívené zastavení, Další na zastavení za ním, Přehled hodiny, Zavřít); poslední navštívené zastavení drží aktivní hodina v sessionStorage. Při promítání beze změny. Ověř odbočku přes Kam dál z bloku i přes Další krok v liště kroku na 390 a 1440 px a skript scripts/revize-hodiny-okraje.mjs.
2. Štítky bloků u studenta (nález 2, podle odpovědi 2), hledání ve skladateli se štítkem druhu (nález 3, jednotkový test pro „spor smrt“ a „hlas seneca“), mrtvý stisk na plátně (nález 4: zbytek úseku pod jeden řádek je konec úseku, i při couvání; jednotkový test v pruchod-hodiny.test.ts), Roztřiď na plátně (nález 5: Dát sem pod popis koše; snímek 1280 × 720 a 1920 × 1080), příchod z lišty bez plynulého posunu (nález 6), Promítat hodinu u studenta (nález 7, podle odpovědi 3) a tisk s odkazem pro studenty (nález 8, podle odpovědi 4).
3. Studentské věty a popisky hlídají testy: než text změníš, najdi ho v tests/ a uprav test v tomtéž commitu. Po npm run build node scripts/hodiny-katalog.mjs (Chyb: 0), scripts/kontrola-fokus.mjs a scripts/revize-axe.mjs s proměnnou HODINA na stránce hodiny, kroku a profilu; snímky změn do Claude outputs/hodiny/ a prohlédni je. Celé npm test na pozadí s výstupem do souboru.
4. Commituj česky po skupinách, nic neposílej na GitHub a nic nesluč. Rozhodnutí zapiš do docs/rozhodnuti.md, popis do docs/design.md, poučení do docs/pouceni.md jen když vzniklo. Do plánu větve zapiš stav O, oddíl „Po O“ a zadání Uzavření (Opus 5.5 · medium: schválení, sloučení do hlavní větve a hlavní větev na GitHub jen na můj pokyn); zadání O přesuň do docs/archiv/zadani/hodiny-v1.md; plán nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co je opravené a co je potřeba rozhodnout.
```
