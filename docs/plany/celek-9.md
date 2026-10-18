# Plán větve celek-9: „Kam mi mizí čas?“

Celek 9 staví cestu 34 z katalogu (`docs/architektura.md`): Seneca a jeho spis O krátkosti života, Marcus Aurelius a dnešní čas u obrazovky; hlavní otázka 1 „Jak mám žít?“. Je to první ze dvou stoických cest, které přibyly na bráně F0 (druhá je cesta 33 „Co když přijde to nejhorší?“). Nové osoby celek nepotřebuje: Seneca má portrét z celku 6, Marcus z celku 3, otázka 1 má stránku z celku 2. Větev vzniká z hlavní větve, zatímco `hodiny-v1` čeká na revizi; podklady mění jen `docs/`, takže se větve nepotkají. Psaní obsahu (P8) začne až po sloučení `hodiny-v1` (viz Souběh s hodiny-v1). Plán připraven 18. 10. 2026. Rozhodnutí se zapisují do `docs/rozhodnuti.md`.

| Krok | Co | Model | Stav |
| --- | --- | --- | --- |
| P6 | Podklady: prameny, příběh, spor Seneca × Marcus, nejsilnější námitka, dnešní případ, návrh kroků cesty | Opus 5.5 · high s vyhledáváním | čeká; zadání níže |
| P8 | Cesta 34 se závěrem a Návratem, kresba, hlas nebo doplnění otázky 1, případné odkazy z portrétů Seneky a Marca | Opus 5.5 · high se skillem `atlas-cesta` (xhigh při zaseknutí) | čeká na P6 a na sloučení `hodiny-v1` |
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

## Zadání P6: podklady

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** s vyhledáváním. Krok je stavěný tak, aby přežil přerušení: podkladový list se píše a commituje po oddílech a stejné zadání po resetu kreditů pokračuje tam, kde práce skončila.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Krok P6 celku 9 „Kam mi mizí čas?“ (cesta 34). Plán celku je v projektu Claude jako docs/plany/celek-9.md (oddíly Co celek staví a Souběh s hodiny-v1), postup ve skillu atlas-overeni (skills/atlas-overeni/). Čti jen to, co krok potřebuje (CLAUDE.md › Co číst a jak šetřit).

0. Začátek, nebo pokračování.
   - Když větev celek-9 neexistuje: zkontroluj, že ve větvi hodiny-v1 nejsou necommitnuté změny (jinak nic nepřepínej a napiš mi). Založ celek-9 z hlavní větve (ne z hodiny-v1), ulož plán z projektu beze změny do docs/plany/celek-9.md, v docs/plan.md přidej řádek celek-9 do tabulky Plány větví a uprav odstavec Další větve v pořadí, commitni.
   - Když větev existuje (pokračuješ po přerušení): přepni se do ní a přečti docs/podklady/celek-9.md. Oddíly mají v nadpisu stav (hotovo / rozpracováno); pokračuj prvním, který není hotový, a hotové znovu neověřuj.

1. Podkladový list docs/podklady/celek-9.md podle šablony skillu. Piš ho po oddílech a po každém oddílu commitni (česky). Nejdřív se podívej do podkladů celků 3 a 6 v docs/podklady/ (Marcus, Seneca): co je tam ověřené, znovu neověřuj, jen odkaž. Oddíly:
   a) Příběh: komu a kdy Seneca psal O krátkosti života (Paulinus, jeho úřad, datace spisu a její nejistota); Senecovy žádosti, aby ho Nero propustil ze dvora (Tacitus, Letopisy 14 a 15), a jak dopadly; kde a za jakých okolností psal Marcus Hovory k sobě (z celku 3).
   b) Seneca: hlavní místa O krátkosti života a prvního dopisu Luciliovi (čas jako jediné, co je opravdu naše; zaneprázdnění; výzva spočítat si léta; žít, nebo jen být; rozhovor s mudrci všech dob). U každého místa latinský text a české znění s překladatelem a vydáním, nebo vlastní překlad výslovně označený jako vlastní. Seneca patří k nejčastěji podvrhovaným autorům na internetu: každý citát ověř v latině.
   c) Marcus: místa o čase a přítomnosti (třeba 2.5, 2.14, 4.3, 4.17, 4.32; číslování ověř) v překladu, který atlas už používá.
   d) Spor Seneca × Marcus: odejít z úřadu do klidu (otium), nebo zůstat a ustoupit do sebe? Je to poctivé čtení obou? Kde Seneca sám rozlišuje (O klidu duše, O volném čase)? Nejsilnější verze každé strany jednou větou.
   e) Nejsilnější námitka: volný čas jako výsada bohatých (Senecovo bohatství a výtky současníků, Tacitus 13.42) a čas s přáteli v telefonu, který není promarněný. Co by Seneca odpověděl a kde je jeho odpověď slabá.
   f) Dnešní případ pro studenta 15–19 let: čas u obrazovky a pozornost jako zboží. Najdi nejvýš dva spolehlivé údaje (nejlépe české nebo evropské výzkumy dospívajících, s rokem a metodou); když žádný nesedí, cesta se obejde bez čísel. Pointa cesty není „odlož mobil“, ale „kdo rozhodl, kam můj čas jde“.
   g) Návrh cesty: osnova 7–8 kroků s bloky z knihovny ke každému kroku, námět na kresbu nebo animaci (mám rád pohyblivé kresby jako jeskyně v cestě 3), závěrečné pravidlo, tři případy pro Návrat, Zkus to žít (odlišné od večerního ohlédnutí ze Stoického týdne), vazby na portréty Seneky a Marca a na stránku otázky 1 (zjisti v src/content, jestli otázka 1 má stoický hlas; když nemá, navrhni hlas Seneky). Žádné nové osoby v datech.
   h) Obrázky: potřebuje cesta nový obraz pro vstup? Návrh s licencí; stahuj až s mým souhlasem.
   i) Otevřené otázky pro mě, každá s doporučením a řádkem „Odpověď:“ (prázdná odpověď znamená souhlas s doporučením).

2. Do plánu větve zapiš stav P6, oddíl „Po P6“ (co jsi zvažoval) a zadání P8 (Opus 5.5 · high se skillem atlas-cesta). Do zadání P8 napiš, že začne až po sloučení hodiny-v1 do hlavní větve a hlavní větve do celek-9, jak to ověřit, a že nové bloky a kresby potřebují značky data-cast podle docs/design.md › Podoba na plátně. Zadání P6 přesuň do docs/archiv/zadani/celek-9.md. Plán větve a docs/plan.md nahraj do projektu Claude (docs/plany/celek-9.md, docs/plan.md). Nic neposílej na GitHub a nic nesluč. Pak mi krátce napiš, co jsi našel a co je potřeba rozhodnout.
```
