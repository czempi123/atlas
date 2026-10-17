# Provedená zadání větve hodiny-v1

Zadání kroků, které už proběhly, v plném znění. Plán větve se stavem po každém kroku je v `docs/plany/hodiny-v1.md`.

## H1: katalog zastavení a kotvy

Autor zadání poslal 17. 10. 2026 (Opus 5.5 · high).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (příprava hodiny, plán docs/plany/hodiny-v1.md; přečti z něj oddíly Co větev staví a Co rozhodnout, odpovědi autora tam mají přednost před návrhem). Tento krok je H1: katalog zastavení a kotvy. Žádné nové UI.

1. Inventura kotev. Projdi src/content (cesty, osobnosti, otázky) a komponenty bloků a sepiš, která zastavení z tabulky v plánu už mají v sestaveném webu stálou kotvu (id prvku) a která ne. Kde kotva chybí nebo se mění podle obsahu (například kapitola, jejíž kotva vzniká z názvu), dej jí pevnou kotvu z dat, ne z textu. Neměň vzhled ani texty.

2. Katalog. Napiš src/lib/hodiny.ts: čistá funkce, která z kolekcí a dat sestaví seznam zastavení (druh, id podle tabulky v plánu, název, stránka, kotva, období, cesta nebo osoba, pořadí na stránce), a endpoint, který ho při sestavení zapíše jako /hodina/katalog.json. Názvy ber ze stejných dat, ze kterých je skládá stránka (nadpis kroku, kapitoly, jméno u hlasu), nikdy nepiš ručně.

3. Formát hodiny. Ve stejném souboru: typ uložené hodiny (název, id zastavení, poznámka k hodině a k zastavením, datum změny), převod hodiny na adresu pro studenty a zpět (verze v=1, název, seznam id; poznámky nikdy) a funkce, která pro neznámé id vrátí „místo už v atlasu není“ místo chyby. Dál funkce „Doma projdi“: pro hodinu a seznam navštívených kroků a čtených kapitol vrátí, které kroky cest a kapitoly profilů dotčených v hodině v ní nebyly a co z nich student už prošel.

4. Kontroly. Jednotkové testy v tests/data/hodiny.test.ts (katalog z dat: počet kroků každé cesty, kapitoly Sókrata, hlasy otázky 1; id jsou jedinečná; adresa tam a zpět; neznámé id; Doma projdi). Skript scripts/hodiny-katalog.mjs, který po npm run build ověří, že každá kotva z katalogu v dist/ existuje, a vypíše počty podle druhu; musí skončit „Chyb: 0“.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H1 a oddíl „Po H1“ (kolik zastavení kterého druhu, co jsi zvažoval) a plné zadání H2, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```

## H2: skladatel hodiny

Autor zadání poslal 17. 10. 2026 (Opus 5.5 · high).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Jsi ve větvi hodiny-v1 (příprava hodiny, plán docs/plany/hodiny-v1.md; přečti z něj oddíly Co větev staví, Po H1 a Co rozhodnout po H1, odpovědi autora tam mají přednost před návrhem). Tento krok je H2: skladatel hodiny. Použij skill atlas-komponenta. Katalog, formát hodiny a adresu už máš v src/lib/hodiny.ts; nepiš je znovu.

1. Úložiště hodin. Vedle src/lib/hodiny.ts napiš src/lib/hodiny-uloziste.ts: seznam uložených hodin v localStorage pod klíčem KLIC_HODIN (odděleně od deníku), načíst, uložit (nová hodina dostane id, každá změna posune zmeneno), smazat a stáhnout jednu hodinu jako soubor .json (nahrání už umí hodinaZeSouboru). Nedostupné úložiště se chová jako deník: hodina vydrží do zavření stránky. Jednotkové testy v tests/data.

2. Stránka /hodina/nova/ (ostrov ve Svelte; katalog si stáhne z /hodina/katalog.json). Výběr z katalogu: zastavení seskupená po stránkách (cesta s kroky a bloky, profil s kapitolami a oddíly, otázka s hlasy) podle pole rodic a poradi, hledání podle názvu, filtr podle období a druhu, u každého zastavení Přidat. Hodina: název, poznámka k hodině, zvolená zastavení v pořadí s poznámkou u každého, posun nahoru a dolů tlačítky (ovladatelné klávesnicí), odebrat. Akce: Uložit, Stáhnout soubor, Nahrát soubor, Odkaz pro studenty s tlačítkem Kopírovat (adresaHodiny; poznámky v odkazu nikdy nejsou) a u každého zastavení náhled (otevře jeho adresu v nové kartě). Uložená hodina se otevře k úpravě přes /hodina/nova/?hodina=<id>. Zastavení, které v katalogu není, ukaž s textem NENI_V_ATLASU a nabídni ho odebrat. Na notebooku výběr a hodina vedle sebe, na telefonu pod sebou s viditelným počtem zvolených zastavení. Stránka nepatří do vyhledávání.

3. Vstupy. V patičce odkaz „Pro učitele: připravit hodinu“, v deníku oddíl „Moje hodiny“ (seznam uložených hodin: upravit, odkaz pro studenty, smazat s potvrzením; bez uložených hodin oddíl nic neukazuje). Hlavní navigace se nemění.

4. Kontroly. E2e test tests/e2e/hodina.spec.ts: složit hodinu jen klávesnicí, přeřadit, napsat poznámky, uložit, obnovit stránku, odkaz pro studenty neobsahuje poznámku, nahrát soubor, neznámé zastavení, Moje hodiny v deníku. Axe na stránce. Snímky 390 a 1440 px ve světlém i tmavém režimu (scripts/snimky-listy.mjs) do Claude outputs/hodiny/ a prohlédni je.

Kontrola: celé npm test na pozadí s výstupem do souboru; když spadne jen test „cesta: průchod, Kam dál z bloku…“ v tests/e2e/cesta.spec.ts, pusť ten soubor znovu samostatně. Commituj česky, nic neposílej na GitHub. Na konci toto zadání přesuň do docs/archiv/zadani/hodiny-v1.md, do plánu větve zapiš stav H2, oddíl „Po H2“ a plné zadání H3, rozhodnutí zapiš do docs/rozhodnuti.md, do docs/pouceni.md připiš poučení jen když nějaké vzniklo, plán větve nahraj do projektu Claude jako docs/plany/hodiny-v1.md a restartuj náhled npm run dev. Pak mi napiš, co vzniklo a co je potřeba rozhodnout.
```

## H3: hodina pro studenta

Autor zadání poslal 17. 10. 2026 (Opus 5.5 · high, se skillem `atlas-komponenta`).

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
