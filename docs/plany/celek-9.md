# Plán větve celek-9: „Kam mi mizí čas?“

Celek 9 staví cestu 34 z katalogu (`docs/architektura.md`): Seneca a jeho spis O krátkosti života, Marcus Aurelius a dnešní čas u obrazovky; hlavní otázka 1 „Jak mám žít?“. Je to první ze dvou stoických cest, které přibyly na bráně F0 (druhá je cesta 33 „Co když přijde to nejhorší?“). Nové osoby celek nepotřebuje: Seneca má portrét z celku 6, Marcus z celku 3, otázka 1 má stránku z celku 2. Větev vzniká z hlavní větve, zatímco `hodiny-v1` čeká na revizi; podklady mění jen `docs/`, takže se větve nepotkají. Psaní obsahu (P8) začne až po sloučení `hodiny-v1` (viz Souběh s hodiny-v1). Plán připraven 18. 10. 2026. Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| P6 | Podklady: prameny, příběh, spor Seneca × Marcus, nejsilnější námitka, dnešní případ, návrh kroků cesty | Opus 5.5 · high s vyhledáváním | hotovo 18. 10. 2026 (`docs/podklady/celek-9.md`); viz Po P6 |
| P8 | Cesta 34 se závěrem a Návratem, kresba, hlas nebo doplnění otázky 1, případné odkazy z portrétů Seneky a Marca | Opus 5.5 · high se skillem `atlas-cesta` (xhigh při zaseknutí) | hotovo 23. 10. 2026; viz Po P8 |
| P10 | Revize celku | Opus 5.5 · high se skillem `atlas-revize` | zadání níže |
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
- Hotovo 23. 10. 2026 (začátek P8): hlavní větev s hodinami sloučená do `celek-9` (`a37b36d`), konflikt jen v tabulce Plány větví, oba řádky zůstaly.

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

## Po P8

Hotovo 23. 10. 2026. Cesta 34 `kam-mi-mizi-cas` má přehled a osm kroků (každý krok commitnutý zvlášť), Návrat, kresbu Přesýpací hodiny, nové prameny a citáty v `zdroje.yaml` (bez nových osob, míst a vztahů) a po jedné větě s odkazem v portrétech Seneky a Marca. Čas cesty podle `scripts/slova-cesta.mjs`: 3162 slov, asi 21 minut čtení a 6,5 minuty ovládání, na štítku 28 minut. Katalog zastavení má všech osm kroků, sedm bloků a kresbu se správnými názvy (`scripts/hodiny-katalog.mjs`: Chyb 0). `npm test` celé prošlo (vitest 711, Playwright 537 včetně nového `cesta34.spec.ts`); padalo jen devět testů, které počítaly cesty a vstupy bez cesty 34, a ty jsou upravené. Snímky cesty a kresby (390 a 1440 px, oba režimy) jsou v `Claude outputs/celek9/`.

**Kroky:** 1 Chléb pro celé město (Příběh bez obrazu, Volba „Máš dost času na to, na čem ti záleží?“, začátek cesty) · 2 Plot kolem pozemku (atribut 1, 3 jako jediný citát, pozemek a život, Roztřiď „Kdo ti tu hodinu vzal?“ s koši z Dopisu 1 a vlastní kartou) · 3 Spočítej si den (citát 3, 2 zkrácený, kresba) · 4 Pohřeb za živa (starý správce bez jména, Odkryj s Kam dál na Senekovu otázku 20, 4, zaneprázdnění a líná zaneprázdněnost) · 5 Kdo rozhodl? (citát 20, 1, telefon, PISA a Meta slovy, Změň jednu věc „Čí byly ty dvě hodiny?“) · 6 Odejít, nebo ustoupit do sebe? (18, 1 a IV, 3 na začátku kroku, Spor, pod ním Tacitus o roce 62) · 7 Bez volna (námitka, Dopisy 17, VIII, 8, Odkryj se spolužákem, který hlídá sourozence) · 8 Kdo je na tvé straně (zastánci, IV, 24, Zkus to žít „Proč teď?“, Závěr cesty).

**Co jsem zvažoval.**

- *Kresba:* podklady navrhovaly posuvníky po činnostech (spánek, škola, cesta, jídlo, telefon, co mě baví) a barvy podle toho, kdo rozhodl. Přiřadit činnosti „kdo rozhodl“ by ale musela kresba za studenta (telefon je jednou kamarádka, jindy další video). Posuvníky proto jdou rovnou po tom, kdo rozhodl: Spánek, Škola a rodina, Tvoje volba, Někdo jiný; co student nerozdělí, „proteklo“ (Senekovo „co leželo ladem“, koš z kroku 2). Spánek a škola mají vlastní vrstvu, ne barvu ztráty. Zrnka padají jedno po druhém a kolo se po 13,5 s opakuje; zastavení zastaví i nové kolo. Vrstvy se liší tvarem, ne jen tónem. Snímky jsem prohlédl; jako hotovou ji nepopisuji, dokud ji neuvidíš.
- *Návrat:* blok má jeden případ na cestu (sestavení dva nepustí). Ze tří případů v podkladech jsem vzal Stěhování v sobotu; děda v důchodu by opakoval starého správce z kroku 4 a videohovor do noci telefon z kroku 5. Ostatní dva zůstávají v podkladech.
- *Změň jednu věc:* blok má nejvýš tři podmínky. Vypadla „hodinu ti zadal učitel“; zůstaly kamarádka, další video a vybraný film. Školu cesta za ztrátu nepočítá nikde.
- *Atribut Seneky* (1, 3) zazní jednou, jako citát na začátku kroku 2. Vstup přehledu stojí na 20, 1 (ať si spočítá, kolik z jeho života patří jemu), ne na atributu. Ostatní místa nejvýš dvakrát v celku (Paulinus a obilí v kroku 1 a ve větě v portrétu Seneky; IV, 24 ve Sporu a jako citát v kroku 8; spočítej si, kolik je tvoje (20, 1) ve vstupu a jako citát v kroku 5).
- *Spor:* dvě rady dvěma lidem, jak chtěly podklady. Námitky obou řekne scéna; třetí argument každé strany na ni odpovídá (Seneca: mísit volno s prací, O duševním klidu 4; Marcus: krátké opakované ústraní a škrtat zbytečné, IV, 3 a IV, 24). Macechu a matku (VI, 12) jsem do Sporu nedal: obraz zlé macechy by šel číst očima studenta z nové rodiny. Obrat pod Sporem je jen rok 62 jako Tacitovo podání, pověst o roce 64 ne. Krok končí otázkou „Radil by po roce 62 Paulinovi totéž?“
- *Spojenci v kroku 8:* odejít má i Epikúra (podle Seneky, O volném čase 3); prostřední polohu Spor dostává Seneca z O duševním klidu. Studentovi, který vidí volno jako výsadu bohatých, cesta dá jen odkaz na stránku otázky 1 (Seneca tam odpovídá na výčitku bohatství). Myslitel, který by tu námitku vedl sám, v atlasu zatím není.
- *Telefon:* jeden krok z osmi. PISA i příjmy Mety slovy a bez procent, jak doporučily podklady; zpětná vazba nikde neříká, že telefon je ztráta, a čas s kamarádkou za ztracený nepočítá.
- *Krok 3* nemá blok, jen kresbu a otázku v kurzívě (jako krok 4 cesty 8); lišta pak nabídne další krok.
- *Vazby:* v portrétu Seneky atribut v textu není (jen na desce), věta s odkazem proto stojí v kapitole Dopisy vedle odkazu na cestu 8. V portrétu Marca hned za citátem IV, 3. Obě stránky mají cestu 34 i v Kam dál; hlavičky vstupů, karty v Lidech, Domů a stránka otázky 1 se doplnily z dat samy. Stránka otázky 1 nový hlas nemá (tvá odpověď v oddílu i).
- *Obrázek na vstup:* žádný; Příběh v kroku 1 má ornament s mincí Seneky.

## Co rozhodnout po P8 (prázdná odpověď znamená souhlas s doporučením)

1. **Kresba Přesýpací hodiny** (snímky `Claude outputs/celek9/hodiny-*.png`, s pohybem `hodiny-pohyb-390-390-light.png`): přijímáš ji, jak je? Doporučuji ano. Alternativa: posuvníky po činnostech jako v podkladech, nebo kratší kolo.
   Odpověď:
2. **Návrat:** stačí jeden případ (Stěhování v sobotu)? Doporučuji ano; druhý by potřeboval změnu bloku Návrat pro všechny cesty.
   Odpověď:
3. **Délka:** cesta má 28 minut, víc než 15–20 z architektury (cesta 8 má 32). Doporučuji nechat (délka se kvůli délce nekrátí).
   Odpověď:

## Zadání P10: revize celku

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** se skillem `atlas-revize`.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Krok P10 celku 9 „Kam mi mizí čas?“: revize celku se skillem atlas-revize. Plán celku je v projektu Claude jako docs/plany/celek-9.md (oddíly Po P8 a Co rozhodnout po P8; moje odpovědi tam mají přednost, prázdná odpověď znamená souhlas), podklady v docs/podklady/celek-9.md. Čti jen to, co krok potřebuje (CLAUDE.md › Co číst a jak šetřit); z podkladového listu jen oddíly a řádky, proti kterým kontroluješ.

0. git switch celek-9 a git status bez necommitnutých změn. Restartuj náhled (npx astro dev stop, pak nohup npm run dev > /tmp/atlas-dev.log 2>&1 &).

1. Reviduj celek: cesta 34 (src/content/cesty/kam-mi-mizi-cas.mdx a kam-mi-mizi-cas/, bloky src/content/bloky/cesta34-*.yaml včetně Návratu), kresba Přesýpací hodiny (src/components/ostrovy/PresypaciHodiny.svelte, src/lib/presypaci.ts), nové prameny a citáty celku 9 v src/data/zdroje.yaml, věty s odkazem v portrétech Seneky a Marca a všechno, co se skládá z dat (hlavičky Seneky a Marca, Lidé, stránka otázky 1, Domů, katalog hodin). Všech šest pohledů ze skillu. Každé historické tvrzení a citát proti podkladům (oddíly a až f) a proti docs/pouceni.md, hlavně Bloky, Celek a Student, kterého se téma bolestně týká: pečující student, student po ztrátě, student z rodiny, kde na volno nejsou peníze, student, kterému je zle.

2. V prohlížeči projdi cestu na 390 a 1440 px v obou režimech, s odkrytím i bez (scripts/snimky-cesta.mjs), jednou jen klávesnicí (scripts/kontrola-fokus.mjs) a kresbu i s pohybem, jeho zastavením a omezeným pohybem (scripts/snimky-prvek.mjs). Ověř podoby na plátně (hodiny-v1): krok, bloky a kresbu v otevřené otázce, jen otázce a možnostech a jen kresbě.

3. Záznam revize zapiš do docs/revize/celek-9-<datum>.md: nálezy seřazené podle dopadu, u každého návrh opravy, na konci verdikt. Zjevné drobnosti (překlep, sazba) oprav rovnou a commitni; ostatní nech na krok O.

4. Do plánu větve zapiš stav P10, oddíl „Po P10“ (co rozhodnout) a zadání O (Opus 5.5 · high). Zadání P10 přesuň do docs/archiv/zadani/celek-9.md, nové poučení zapiš jednou větou do docs/pouceni.md, rozhodnutí do docs/rozhodnuti.md. Plán větve a docs/plan.md nahraj do projektu Claude. Nic neposílej na GitHub a nic nesluč. Pak mi krátce napiš verdikt a co rozhodnout.
```
