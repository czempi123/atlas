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
