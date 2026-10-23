# Provedená zadání větve celek-9

Zadání kroků celku 9 v plném znění, jak byla provedena. Plán větve je v `docs/plany/celek-9.md`.

## Zadání P6: podklady (provedeno 18. 10. 2026)

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

## Zadání P8: cesta 34 (provedeno 23. 10. 2026)

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

## Zadání P10: revize celku (provedeno 23. 10. 2026)

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** se skillem `atlas-revize`.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Krok P10 celku 9 „Kam mi mizí čas?“: revize celku se skillem atlas-revize. Plán celku je v projektu Claude jako docs/plany/celek-9.md (oddíly Po P8 a Co rozhodnout po P8; moje odpovědi tam mají přednost, prázdná odpověď znamená souhlas), podklady v docs/podklady/celek-9.md. Čti jen to, co krok potřebuje (CLAUDE.md › Co číst a jak šetřit); z podkladového listu jen oddíly a řádky, proti kterým kontroluješ.

0. git switch celek-9 a git status bez necommitnutých změn. Restartuj náhled (npx astro dev stop, pak nohup npm run dev > /tmp/atlas-dev.log 2>&1 &).

1. Reviduj celek: cesta 34 (src/content/cesty/kam-mi-mizi-cas.mdx a kam-mi-mizi-cas/, bloky src/content/bloky/cesta34-*.yaml včetně Návratu), kresba Přesýpací hodiny (src/components/ostrovy/PresypaciHodiny.svelte, src/lib/presypaci.ts), nové prameny a citáty celku 9 v src/data/zdroje.yaml, věty s odkazem v portrétech Seneky a Marca a všechno, co se skládá z dat (hlavičky Seneky a Marca, Lidé, stránka otázky 1, Domů, katalog hodin). Všech šest pohledů ze skillu. Každé historické tvrzení a citát proti podkladům (oddíly a až f) a proti docs/pouceni.md, hlavně Bloky, Celek a Student, kterého se téma bolestně týká: pečující student, student po ztrátě, student z rodiny, kde na volno nejsou peníze, student, kterému je zle.

2. V prohlížeči projdi cestu na 390 a 1440 px v obou režimech, s odkrytím i bez (scripts/snimky-cesta.mjs), jednou jen klávesnicí (scripts/kontrola-fokus.mjs) a kresbu i s pohybem, jeho zastavením a omezeným pohybem (scripts/snimky-prvek.mjs). Ověř podoby na plátně (hodiny-v1): krok, bloky a kresbu v otevřené otázce, jen otázce a možnostech a jen kresbě.

3. Záznam revize zapiš do docs/revize/celek-9-<datum>.md: nálezy seřazené podle dopadu, u každého návrh opravy, na konci verdikt. Zjevné drobnosti (překlep, sazba) oprav rovnou a commitni; ostatní nech na krok O.

4. Do plánu větve zapiš stav P10, oddíl „Po P10“ (co rozhodnout) a zadání O (Opus 5.5 · high). Zadání P10 přesuň do docs/archiv/zadani/celek-9.md, nové poučení zapiš jednou větou do docs/pouceni.md, rozhodnutí do docs/rozhodnuti.md. Plán větve a docs/plan.md nahraj do projektu Claude. Nic neposílej na GitHub a nic nesluč. Pak mi krátce napiš verdikt a co rozhodnout.
```

## Zadání O: opravy po revizi (provedeno 23. 10. 2026)

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high.**

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Krok O celku 9 „Kam mi mizí čas?“: opravy po revizi. Plán celku je v projektu Claude jako docs/plany/celek-9.md (oddíly Po P10 a Co rozhodnout po P10; moje odpovědi tam mají přednost, prázdná odpověď znamená souhlas), nálezy s hotovým zněním v docs/revize/celek-9-2026-10-23.md. Čti jen to, co krok potřebuje (CLAUDE.md › Co číst a jak šetřit).

0. git switch celek-9 a git status bez necommitnutých změn. Restartuj náhled (npx astro dev stop, pak nohup npm run dev > /tmp/atlas-dev.log 2>&1 &).

1. Zapracuj všech deset nálezů podle záznamu revize a mých odpovědí; každý nález zvlášť commitni. Než změníš studentskou větu, najdi ji v tests/ (grep -rn) a test uprav v tomtéž commitu. Nález 1: příklady ze 12, 2–3 ověř v latinském textu (The Latin Library). Nález 3: Politiku VII, 9 (1328b37–1329a2) ověř v řeckém textu (PerseusDL, Ross) a pramen aristoteles-politika-vii zapiš do src/data/zdroje.yaml; když se pramen od navrženého znění liší, drž se pramene. Nález 2: zapiš pravidlo i do docs/design.md u kresby a přidej test zastavení hned po načtení.

2. Ověř: npm run build, node scripts/hodiny-katalog.mjs, dotčené testy, kresbu zastavenou hned po načtení i s posunutým posuvníkem (scripts/snimky-prvek.mjs s klepnutím na Zastavit pohyb) na 390 a 1440 px v obou režimech, krok 4 a 8 snímkem (scripts/snimky-cesta.mjs), čas cesty (scripts/slova-cesta.mjs; štítek uprav, když se změní). Celé npm test jednou na konci na pozadí s výstupem do souboru.

3. Do plánu větve zapiš stav O, oddíl „Po O“ a co rozhodnout před uzavřením. Zadání O přesuň do docs/archiv/zadani/celek-9.md, rozhodnutí do docs/rozhodnuti.md, plán větve a docs/plan.md nahraj do projektu Claude. Nic neposílej na GitHub a nic nesluč. Pak mi krátce napiš, co je hotové a co rozhodnout.
```
