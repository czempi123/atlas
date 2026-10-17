# Plán větve hodiny-v1: příprava hodiny

Učitel si z atlasu složí hodinu: vybere kroky cest, bloky, kapitoly profilů a hlasy otázek z různých stránek, seřadí je, připíše si poznámky a hodinu si uloží. Studenti dostanou odkaz na tutéž hodinu a doma projdou zbytek; atlas jim ukáže, které kroky a kapitoly v hodině nebyly. Je to přání autora z 15. 10. 2026 (`docs/plan.md` › Doma i ve třídě). Všechno běží ve statickém webu: bez účtů, bez serveru, hodina se ukládá v prohlížeči a do souboru a sdílí se adresou. Režim třídy (velké písmo, odkrývání na pokyn, QR kód) na větev naváže později a není její součástí. Větev je založená z hlavní větve 17. 10. 2026 (commit `b135e57`, po uzavření `medailonky`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| H1 | Katalog zastavení a kotvy: co všechno jde dát do hodiny, pevné id a adresa každého zastavení, formát hodiny a její adresy, kontrola katalogu proti sestavenému webu | Opus 5.5 · high | hotovo 17. 10. 2026; viz Po H1 |
| H2 | Skladatel hodiny `/hodina/nova/`: výběr z katalogu, pořadí, poznámky, uložení, soubor, odkaz ke sdílení | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | čeká; zadání níže |
| H3 | Hodina pro studenta: stránka hodiny, lišta hodiny při průchodu, „Doma projdi“ podle deníku, tisk přehledu pro učitele | Opus 5.5 · high se skillem `atlas-komponenta` | čeká |
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

1. **Id celých stránek** `k:<cesta>`, `o:<profil>`, `h:<otázka>` (stejná předpona jako jejich části). Odpověď:
2. **Oddíl Doba a lidé jde do hodiny**; Moje stanovisko, Kam dál, Prameny a Návrat ne. Odpověď:
3. **Čtené kapitoly v deníku:** H3 přidá nepovinné pole `prectene` (adresa profilu → kotvy kapitol, které student dočetl, verze deníku zůstane 1), aby „Doma projdi“ umělo odškrtnout i kapitoly. Bez něj odškrtne jen kroky cest. Odpověď:

## Zadání H2: skladatel hodiny

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high**, se skillem `atlas-komponenta` (xhigh při zaseknutí).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (příprava hodiny, plán docs/plany/hodiny-v1.md; přečti z něj oddíly Co větev staví, Po H1 a Co rozhodnout po H1, odpovědi autora tam mají přednost před návrhem). Tento krok je H2: skladatel hodiny. Použij skill atlas-komponenta. Katalog, formát hodiny a adresu už máš v src/lib/hodiny.ts; nepiš je znovu.

1. Úložiště hodin. Vedle src/lib/hodiny.ts napiš src/lib/hodiny-uloziste.ts: seznam uložených hodin v localStorage pod klíčem KLIC_HODIN (odděleně od deníku), načíst, uložit (nová hodina dostane id, každá změna posune zmeneno), smazat a stáhnout jednu hodinu jako soubor .json (nahrání už umí hodinaZeSouboru). Nedostupné úložiště se chová jako deník: hodina vydrží do zavření stránky. Jednotkové testy v tests/data.

2. Stránka /hodina/nova/ (ostrov ve Svelte; katalog si stáhne z /hodina/katalog.json). Výběr z katalogu: zastavení seskupená po stránkách (cesta s kroky a bloky, profil s kapitolami a oddíly, otázka s hlasy) podle pole rodic a poradi, hledání podle názvu, filtr podle období a druhu, u každého zastavení Přidat. Hodina: název, poznámka k hodině, zvolená zastavení v pořadí s poznámkou u každého, posun nahoru a dolů tlačítky (ovladatelné klávesnicí), odebrat. Akce: Uložit, Stáhnout soubor, Nahrát soubor, Odkaz pro studenty s tlačítkem Kopírovat (adresaHodiny; poznámky v odkazu nikdy nejsou) a u každého zastavení náhled (otevře jeho adresu v nové kartě). Uložená hodina se otevře k úpravě přes /hodina/nova/?hodina=<id>. Zastavení, které v katalogu není, ukaž s textem NENI_V_ATLASU a nabídni ho odebrat. Na notebooku výběr a hodina vedle sebe, na telefonu pod sebou s viditelným počtem zvolených zastavení. Stránka nepatří do vyhledávání.

3. Vstupy. V patičce odkaz „Pro učitele: připravit hodinu“, v deníku oddíl „Moje hodiny“ (seznam uložených hodin: upravit, odkaz pro studenty, smazat s potvrzením; bez uložených hodin oddíl nic neukazuje). Hlavní navigace se nemění.

4. Kontroly. E2e test tests/e2e/hodina.spec.ts: složit hodinu jen klávesnicí, přeřadit, napsat poznámky, uložit, obnovit stránku, odkaz pro studenty neobsahuje poznámku, nahrát soubor, neznámé zastavení, Moje hodiny v deníku. Axe na stránce. Snímky 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs) do Claude outputs/hodiny/ a prohlédni je.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H2, oddíl „Po H2“ a plné zadání H3, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```
