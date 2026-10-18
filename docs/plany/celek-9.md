# Plán větve celek-9: „Kam mi mizí čas?“

Celek 9 staví cestu 34 z katalogu (`docs/architektura.md`): Seneca a jeho spis O krátkosti života, Marcus Aurelius a dnešní čas u obrazovky; hlavní otázka 1 „Jak mám žít?“. Je to první ze dvou stoických cest, které přibyly na bráně F0 (druhá je cesta 33 „Co když přijde to nejhorší?“). Nové osoby celek nepotřebuje: Seneca má portrét z celku 6, Marcus z celku 3, otázka 1 má stránku z celku 2. Větev vzniká z hlavní větve, zatímco `hodiny-v1` čeká na revizi; podklady mění jen `docs/`, takže se větve nepotkají. Psaní obsahu (P8) začne až po sloučení `hodiny-v1` (viz Souběh s hodiny-v1). Plán připraven 18. 10. 2026. Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| P6 | Podklady: prameny, příběh, spor Seneca × Marcus, nejsilnější námitka, dnešní případ, návrh kroků cesty | Opus 5.5 · high s vyhledáváním | hotovo 18. 10. 2026 (`docs/podklady/celek-9.md`); viz Po P6 |
| P8 | Cesta 34 se závěrem a Návratem, kresba, hlas nebo doplnění otázky 1, případné odkazy z portrétů Seneky a Marca | Opus 5.5 · high se skillem `atlas-cesta` (xhigh při zaseknutí) | čeká na sloučení `hodiny-v1`; zadání níže |
| P10 | Revize celku | Opus 5.5 · high se skillem `atlas-revize` | čeká |
| O | Opravy po revizi | Opus 5.5 · high | čeká |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | Opus 5.5 · medium | čeká |

P7 v celku není: nová osoba nepřibývá a drobné úpravy hotových portrétů (odkaz na cestu, věta v Kam dál) udělá P8, pokud je podklady doporučí.

Stav a zadání dalších kroků se zapisují sem. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-9.md`.

## Proč tahle cesta teď

- **Pořadí z `docs/plan.md`:** po `hodiny-v1` jsou na řadě cesty 34 a 33, pak souhrnná revize antiky (P11) a zkouška se studenty.
- **34 před 33:** cesta 33 stojí na pilotu Jamesi Stockdalovi, kterého data nemají, a nové osoby se zatím nepřidávají. Cesta 34 jde rovnou, bez výjimky z pravidla.
- **RVP G:** cesta naplňuje i výstup o významu techniky a nových technologií pro praktický život a jejich rizicích (dosud jen cesty 28 a 32).

## Co celek staví (návrh, podklady ho mohou změnit)

### Vstup

Seneca píše Paulinovi, který má na starosti zásobování Říma obilím: muži, na kterém závisí, jestli celé město bude mít co jíst, a který sám nemá chvíli pro sebe. Spis tvrdí, že život není krátký; krátký ho děláme tím, že velkou část promarníme.

### Kde je filozofie, ne jen rada odložit mobil

Seneca nepočítá jen promarněné hodiny. Ptá se, čí ten čas je: kdo si ho bere a jestli jsem o tom rozhodl já. Mezi „zaneprázdněné“ řadí i úspěšné a pracovité lidi, ne jen lenochy. Telefon je dnešní případ, ne téma cesty; cesta nesmí znít jako kázání o čase u obrazovky.

### Spor: odejít, nebo ustoupit do sebe?

Seneca radí Paulinovi úřad opustit a věnovat zbytek života filozofii. Marcus odejít nemůže a nechce; píše si, že ustoupit do sebe se dá kdekoli, i ve vojenském táboře u Dunaje. Dva stoici, dvě odpovědi, přirozený blok Spor. Obrat pro závěr nebo námitku: Seneca sám později žádal Nerona, aby ho propustil ze dvora, a nepovedlo se mu to (P6 ověří u Tacita).

### Nejsilnější námitka

Volný čas na filozofii je výsada bohatých. Kdo pracuje na dvě směny nebo se stará o nemocného rodiče, nemá komu svůj čas „vzít zpět“. A čas s přáteli v telefonu nemusí být promarněný. Seneca přitom patřil k nejbohatším mužům Říma.

### Náměty pro P8 (rozhodne P8 podle podkladů)

- **Kresba nebo animace:** Senecova výzva spočítat si léta (kolik vzal věřitel, kolik spory, kolik klienti) převedená na týden šestnáctiletého: student si z plochy svého týdne sám odebírá, co mu vzali jiní a co vzala obrazovka, a vidí, co zbylo jemu.
- **Zkus to žít:** odlišné od večerního ohlédnutí, které patří do Stoického týdne; třeba jeden den zapisovat, kdo rozhodl o každé hodině.
- **Závěr a Návrat:** závěrečné pravidlo a tři případy pro Návrat jako u ostatních cest.
- **Otázka 1:** hlas Seneky, pokud na stránce chybí stoický hlas.

## Souběh s hodiny-v1

- P6 mění jen `docs/podklady/`, plán větve a `docs/plan.md`; žádný kód.
- **Před P8** musí být `hodiny-v1` sloučená do hlavní větve a hlavní větev sloučená do `celek-9`. Nové bloky a kresby cesty 34 potřebují značky `data-cast` pro podoby na plátně (H4) a katalog zastavení je hned zahrne; `node scripts/hodiny-katalog.mjs` patří do kontroly P8.
- Řádek `celek-9` v tabulce Plány větví v `docs/plan.md` se při slučování může potkat se změnami z `hodiny-v1` v téže tabulce; ponechají se oba řádky.

## Co zůstává na později

- **Cesta 33 jako celek 10:** Stockdale v datech není. Buď výjimka z pravidla o nových osobách (v architektuře je jako medailonek), nebo jeho příběh jen v textu cesty. Rozhodne plán celku 10.
- **Stoický týden** (sedm cvičení, spouští se po cestách 5, 33 a 34) až po obou stoických cestách, jako vlastní větev.

## Po P6

Hotovo 18. 10. 2026. Podkladový list je `docs/podklady/celek-9.md` (oddíly a až i, každý commitnutý zvlášť). O krátkosti života jsem četl celé latinsky, k tomu Dopisy 1 a 17, O duševním klidu 3–5 a 13, O volném čase 3–5, Tacita (I, 7; XI, 31; XIII, 53; XIV, 53–56; XV, 18; XV, 45; XV, 60) a čtrnáct Marcových kapitol řecky. Všechny převody jsou vlastní; české překlady jsem neměl v ruce. Paulinovu totožnost a dataci spisu znám jen z úryvků odborné literatury (Griffinová 1962, Williams 2003), proto je studentský text nepotřebuje.

**Co jsem našel navíc proti plánu.**

- *Turranius* (O krátkosti života 20, 4): stařec přes devadesát, který si po odchodu z úřadu dal vystrojit pohřeb, dokud mu práci nevrátili. Byl to podle Griffinové Paulinův předchůdce ve stejném úřadě; Tacitus ho v úřadě dokládá roku 14 i 48. Nejsilnější scéna celku (krok 4).
- *Zaneprázdněné volno* (12, 2): Seneca mezi zaneprázdněné počítá i lidi, kteří mají volno a vyplní ho zaneprázdněností. Telefon tím do cesty patří jako případ bez kázání.
- *Pointa* (20, 1): nejubožejší jsou ti, kdo „chodí cizím krokem“; kdo chce vědět, jak krátký je jeho život, ať spočítá, jak velká část z něj je jeho. To je „kdo rozhodl“ přímo od Seneky.
- *Marcus VIII, 8*: „Číst nemůžeš. Ale…“ Nejlepší odpověď na námitku, že volno je pro bohaté, a dává ji Marcus, ne Seneca.
- *Démokritos*: Marcus (IV, 24) i Seneca (O duševním klidu 13, 1) citují tutéž větu „dělej málo“ a oba ji vztahují na zbytečné věci. Místo, kde se oba stoici shodnou.

**Co jsem zvažoval.**

- *Spor:* plán stavěl Seneku na stranu „odejít“. Seneca jinde (O duševním klidu 4) radí neutíkat hned a „mísit volno s prací“; Marcus po ústraní sám touží (IV, 3). Spor jsem nechal, ale jako dvě rady dvěma lidem, ne dvě školy: prostřední poloha škály dostane Seneku z O duševním klidu za zastánce.
- *Obrat:* Senekova žádost u Nerona roku 62 ano (Tacitus mu do úst vkládá, že chce svůj čas zpátky); pověst o druhé žádosti roku 64 ne, jako v celku 6.
- *Paulinus:* „neposlechl a dál sloužil“ by byla silná pointa, ale stojí na nejisté totožnosti s konzulárem z Tacita. Nepoužito.
- *Čísla:* dva údaje obstály (PISA 2022 o vypnutých upozorněních a tlaku odpovídat; příjmy Mety z reklamy podle výroční zprávy). Českou studii se srovnatelnou metodou jsem neověřil a HBSC 2022 jen z tiskové zprávy (věk 11–15, měří závislost, ne čas). Cesta se obejde i bez procent.
- *Kresba:* Přesýpací hodiny (atribut Seneky) s pískem jednoho dne, který se usazuje podle toho, kdo o hodině rozhodl. Loď ve vichru (7, 10) jako druhá možnost.
- *Otázka 1:* stoický hlas už má (Seneca o bohatství) a Hipparchia tam nese „kdo určil, kam má tvůj čas patřit“. Nový hlas nenavrhuji.
- *Cesta 7:* je blízko („čí život vlastně žiju“). Cesta 34 mluví o hodinách a pozornosti, ne o životních volbách; v posledním kroku na cestu 7 odkáže.

## Co rozhodnout po P6 (prázdná odpověď znamená souhlas s doporučením)

Otázky s doporučením jsou v podkladovém listu, oddíl i): kresba (Přesýpací hodiny), obrázek na vstup (žádný), nový hlas na otázce 1 (ne), Turranius bez jména, čísla v kroku 5 (slovy a jedna věta o reklamě), Zkus to žít „Proč teď?“, slug `kam-mi-mizi-cas`. Odpovědi piš tam.

## Zadání P8: cesta 34

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** se skillem `atlas-cesta` (xhigh při zaseknutí; kresba se skillem `atlas-komponenta`). **Začne až po sloučení `hodiny-v1` do hlavní větve a hlavní větve do `celek-9`** (viz Souběh s hodiny-v1). Krok je stavěný tak, aby přežil přerušení: kroky cesty se commitují po jednom.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Krok P8 celku 9 „Kam mi mizí čas?“: cesta 34. Plán celku je v projektu Claude jako docs/plany/celek-9.md (oddíly Po P6, Co rozhodnout po P6 a Souběh s hodiny-v1), podklady v docs/podklady/celek-9.md (moje odpovědi v oddíle i) mají přednost před doporučením; prázdná odpověď znamená souhlas), postup ve skillu atlas-cesta, kresba se skillem atlas-komponenta. Čti jen to, co krok potřebuje (CLAUDE.md › Co číst a jak šetřit); z podkladového listu čti oddíly a), b) a c) jen v řádcích, které cesta použije.

0. Kontrola souběhu (nic nepiš, dokud neprojde):
   - git switch celek-9 a git status bez necommitnutých změn.
   - git merge-base --is-ancestor hodiny-v1 main (hodiny-v1 je v hlavní větvi). Když to neprojde, nic nedělej a napiš mi, že hodiny-v1 ještě není sloučená.
   - git merge-base --is-ancestor main celek-9 (hlavní větev je v celek-9). Když to neprojde, sluč hlavní větev do celek-9 (git merge main); konflikt v tabulce Plány větví v docs/plan.md vyřeš tak, že zůstanou oba řádky (hodiny-v1 i celek-9). Jiný konflikt neřeš a napiš mi.
   - Ověř, že v celek-9 jsou věci z hodiny-v1: soubor src/lib/kresby.ts, skript scripts/hodiny-katalog.mjs a značky data-cast v src/components/ostrovy/Volba.svelte. Restartuj náhled (npx astro dev stop, pak nohup npm run dev > /tmp/atlas-dev.log 2>&1 &).
   - Pokračuješ po přerušení? Hotové kroky cesty jsou v src/content/cesty/kam-mi-mizi-cas/ a v git logu; pokračuj prvním, který chybí.

1. Data: prameny a citáty podle podkladů (Návrh dat; ids z tabulek b a c), jen ta místa, která cesta opravdu použije. Tentýž citát nejvýš dvakrát v celku; atribut Seneky (O krátkosti života 1, 3) v cestě jen jednou. Žádné nové osoby, místa ani vztahy.

2. Cesta 34 podle Osnovy v podkladech (oddíl g): přehled cesty (obdobi 2, otazka 1, filozofove seneca a marcus-aurelius) a osm kroků, každý jako MDX s bloky z knihovny (Volba, Roztřiď, Odkryj, Změň jednu věc, Spor Seneca × Marcus Aurelius, Závěr cesty se Zkus to žít) a s daty bloků v YAML. Drž oddíly d) a e) podkladů (Spor jako dvě rady, obrat s Tacitem jako Tacitovo podání, námitky se spojenci) a docs/pouceni.md (Bloky, Celek, Student, kterého se téma bolestně týká: pečující student, student po ztrátě, rodiny). Krok 5 o telefonu bez kázání; školu ani spánek nepočítej jako ztracený čas. Návrat se třemi případy z podkladů. Každý krok commitni zvlášť.

3. Kresba Přesýpací hodiny (krok 3) na rámu Kresba.svelte podle podkladů (oddíl g) a skillu atlas-komponenta: pohyb jde zastavit, při omezeném pohybu stojí a text pod ní říká totéž slovy, v kresbě nic mimo model, jednotka na telefonu asi pixel. Než ji popíšeš jako hotovou, ukaž mi snímky (scripts/snimky-prvek.mjs) v obou režimech na 390 a 1440 px.

4. Podoba na plátně (hodiny-v1, H4): nové bloky a kresba potřebují značky data-cast podle docs/design.md › Komponenty › Podoba na plátně (hlava, otázka, možnosti; u kresby rám a ovládání), jinak se v otevřené otázce nebo v „jen kresba“ ukáže špatně. Název nové kresby přidej do NAZVY_KRESEB v src/lib/kresby.ts. Po npm run build pusť node scripts/hodiny-katalog.mjs (musí skončit „Chyb: 0“) a zkontroluj, že katalog zastavení má všech osm kroků, nové bloky a kresbu se správnými názvy.

5. Vazby: v portrétu Seneky (místo, kde je atribut a čas) a v portrétu Marca (ústraní, IV, 3) po jedné větě s odkazem na cestu; stránka otázky 1 podle mé odpovědi v podkladech (doporučení: bez nového hlasu). Pak celé npm test na pozadí s výstupem do souboru (nová cesta mění hlavičky filozofů, počty na Domů a v dílně: uprav jen testy, které padnou kvůli nové cestě), snímky cesty (scripts/snimky-cesta.mjs) na 390 a 1440 px v obou režimech, čas cesty skriptem scripts/slova-cesta.mjs.

6. Do plánu větve zapiš stav P8, oddíl „Po P8“ (co jsi zvažoval, co je potřeba rozhodnout) a zadání P10 (Opus 5.5 · high se skillem atlas-revize). Zadání P8 přesuň do docs/archiv/zadani/celek-9.md, rozhodnutí zapiš do docs/rozhodnuti.md. Plán větve a docs/plan.md nahraj do projektu Claude. Nic neposílej na GitHub a nic nesluč (kromě hlavní větve do celek-9 v bodě 0). Pak mi krátce napiš, co je hotové a co rozhodnout.
```
