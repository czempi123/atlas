# Plán větve hodiny-v1: příprava hodiny

Učitel si z atlasu složí hodinu: vybere kroky cest, bloky, kapitoly profilů a hlasy otázek z různých stránek, seřadí je, připíše si poznámky a hodinu si uloží. Studenti dostanou odkaz na tutéž hodinu a doma projdou zbytek; atlas jim ukáže, které kroky a kapitoly v hodině nebyly. Je to přání autora z 15. 10. 2026 (`docs/plan.md` › Doma i ve třídě). Všechno běží ve statickém webu: bez účtů, bez serveru, hodina se ukládá v prohlížeči a do souboru a sdílí se adresou. Režim třídy (velké písmo, odkrývání na pokyn, QR kód) na větev naváže později a není její součástí. Větev je založená z hlavní větve 17. 10. 2026 (commit `b135e57`, po uzavření `medailonky`). Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| H1 | Katalog zastavení a kotvy: co všechno jde dát do hodiny, pevné id a adresa každého zastavení, formát hodiny a její adresy, kontrola katalogu proti sestavenému webu | Opus 5.5 · high | čeká; zadání níže |
| H2 | Skladatel hodiny `/hodina/nova/`: výběr z katalogu, pořadí, poznámky, uložení, soubor, odkaz ke sdílení | Opus 5.5 · high se skillem `atlas-komponenta` (xhigh při zaseknutí) | čeká |
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
| Krok cesty | Cesta 1, krok 3 „Politik, básník, řemeslník“ | `/cesta/kdy-mam-dobry-duvod-verit/3/` | `k:kdy-mam-dobry-duvod-verit/3` |
| Blok | Volba „Jak bys to zjišťoval?“ | stránka, kde blok stojí, a kotva bloku | `b:cesta1-jak-zjistit` |
| Příběh | Diogenés a pohárek | stránka a `#dite-a-poharek` | `p:dite-a-poharek` |
| Kapitola profilu | Sókratés, kapitola o soudu | `/osobnost/sokrates/#<kotva>` | `o:sokrates/<kotva>` |
| Oddíl profilu | Velké myšlenky, Zkus to žít | `/osobnost/<id>/#myslenky`, `#zkus-to-zit` | `o:<id>/myslenky` |
| Hlas otázky | Epikúros u otázky „Jak mám žít?“ | `/otazka/jak-zit/#hlas-epikuros` | `h:jak-zit/epikuros` |

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

1. **Zastavení jako odkazy na místa v atlasu** s lištou hodiny, ne jedna poskládaná stránka. Odpověď:
2. **Poznámky učitele nejdou do odkazu pro studenty.** Odpověď:
3. **Vstup pro učitele v patičce a v deníku**, ne v hlavní navigaci. Odpověď:
4. **Tisk jen jako přehled pro učitele**, pracovní list pro studenty až s Režimem třídy. Odpověď:
5. **Celé stránky (profil, otázka, přehled cesty) jdou do hodiny i bez kotvy**, medailonky ne. Odpověď:

## Co zůstává na později

- Tlačítko „Do hodiny“ přímo u bloku nebo kroku při procházení atlasu (sběr bez skladatele). Po H2 se ukáže, jestli ho výběr z katalogu nenahradí.
- Režim třídy (`docs/plan.md` › Doma i ve třídě): naváže na lištu hodiny.
- Hotové vzorové hodiny k celkům 1 až 8 (třeba z listů v `ucitel/`): obsah, ne funkce; až po zkoušce se studenty.

## Zadání H1: katalog zastavení a kotvy

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.**

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (příprava hodiny, plán docs/plany/hodiny-v1.md; přečti z něj oddíly Co větev staví a Co rozhodnout, odpovědi autora tam mají přednost před návrhem). Tento krok je H1: katalog zastavení a kotvy. Žádné nové UI.

1. Inventura kotev. Projdi src/content (cesty, osobnosti, otázky) a komponenty bloků a sepiš, která zastavení z tabulky v plánu už mají v sestaveném webu stálou kotvu (id prvku) a která ne. Kde kotva chybí nebo se mění podle obsahu (například kapitola, jejíž kotva vzniká z názvu), dej jí pevnou kotvu z dat, ne z textu. Neměň vzhled ani texty.

2. Katalog. Napiš src/lib/hodiny.ts: čistá funkce, která z kolekcí a dat sestaví seznam zastavení (druh, id podle tabulky v plánu, název, stránka, kotva, období, cesta nebo osoba, pořadí na stránce), a endpoint, který ho při sestavení zapíše jako /hodina/katalog.json. Názvy ber ze stejných dat, ze kterých je skládá stránka (nadpis kroku, kapitoly, jméno u hlasu), nikdy nepiš ručně.

3. Formát hodiny. Ve stejném souboru: typ uložené hodiny (název, id zastavení, poznámka k hodině a k zastavením, datum změny), převod hodiny na adresu pro studenty a zpět (verze v=1, název, seznam id; poznámky nikdy) a funkce, která pro neznámé id vrátí „místo už v atlasu není“ místo chyby. Dál funkce „Doma projdi“: pro hodinu a seznam navštívených kroků a čtených kapitol vrátí, které kroky cest a kapitoly profilů dotčených v hodině v ní nebyly a co z nich student už prošel.

4. Kontroly. Jednotkové testy v tests/data/hodiny.test.ts (katalog z dat: počet kroků každé cesty, kapitoly Sókrata, hlasy otázky 1; id jsou jedinečná; adresa tam a zpět; neznámé id; Doma projdi). Skript scripts/hodiny-katalog.mjs, který po npm run build ověří, že každá kotva z katalogu v dist/ existuje, a vypíše počty podle druhu; musí skončit „Chyb: 0“.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H1 a oddíl „Po H1“ (kolik zastavení kterého druhu, co jsi zvažoval) a plné zadání H2, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```
