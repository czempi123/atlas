---
name: atlas-komponenta
description: Stavba nové komponenty nebo interaktivního bloku Atlasu myšlení (Svelte ostrov v Astru) a každá změna UI — podle design tokenů, s přístupností, testy v Playwrightu a snímky ve světlém i tmavém režimu. Použij VŽDY, když vzniká nebo se mění blok knihovny (Volba s důvodem, Odkryj, Spor…), stránka s interakcí nebo ostrov, a když uživatel řekne „postav komponentu“, „nový blok“, „uprav rozhraní“, „oprav vzhled“.
---

# Komponenta Atlasu myšlení

Komponenta je hotová, když ji autor vloží do MDX jedním řádkem, student ji ovládá prstem i klávesnicí, vypadá stejně dobře ve světlém i tmavém režimu a testy to dokazují. Tón a pravidla obsahu platí i pro texty uvnitř komponent (`CLAUDE.md`, `docs/styl.md`).

## Postup

1. **Přečti** `docs/design.md` (Barvy, Typografie, Komponenty, Přístupnost), `docs/plan.md` (tabulka bloků v oddílu Mechanismy učení), podobné hotové ostrovy v `src/components/` a sdílenou logiku v `src/lib/`. Nejdřív hledej, co už existuje (Mince, deník, letopočty, časová logika mapy); nic nepiš dvakrát.
2. **Navrhni rozhraní** dřív než kód: props, sloty/snippety pro MDX, co blok ukládá (deník, localStorage) a jak vypadá stav po obnovení stránky. Jednu ukázku použití v MDX napiš hned na začátek souboru komponenty jako komentář.
3. **Logiku odděl do `src/lib/`** jako čisté funkce bez DOM a Astra (vyhodnocení, převody, formátování). Ty dostanou jednotkové testy ve Vitestu.
4. **Postav ostrov** podle `references/vzor-komponenty.md`: Svelte 5 (runes), jen tokeny, barva období přes třídu `obdobi-N`, fokus jen při klávesnici, dotykové cíle aspoň 44 px, pohyb vypnutý při omezeném pohybu.
5. **Vyzkoušej v prohlížeči** na 390 a 1440 px, světlý i tmavý režim, jen klávesnicí, a jednou se zpomaleným procesorem, pokud komponenta reaguje na tažení nebo psaní. Snímky si prohlédni; obrázek v testu nestačí, musíš ho vidět.
6. **Napiš testy** podle `references/kontrolni-seznam.md` a spusť celé `npm test` (ne jen nové testy).
7. **Zapiš** do `docs/design.md` (oddíl Komponenty) krátký popis bloku a jeho API, zásadní volbu do `docs/rozhodnuti.md`. Commituj česky po ucelených krocích ve vlastní větvi.
8. **Předej** snímky obou šířek v obou režimech, seznam odchylek od `docs/design.md` s důvodem a co zůstalo na později.

## Zásady

- **Student první.** Odpověď a zpětná vazba se odkrývají až po vlastním pokusu. Zpětná vazba hodnotí důvody, nikdy souhlas s filozofem; nic se neboduje, nic se nesoutěží.
- **Žádná redakce v rozhraní.** Popisky tlačítek a nápovědy jsou krátké pokyny („Porovnat se Sókratem“), ne vysvětlování, jak je blok udělaný.
- **Soukromí.** Odpovědi zůstávají v prohlížeči (`src/lib/denik.ts`), nikam se neodesílají; komponenta musí fungovat i bez localStorage.
- **Bez externích závislostí za běhu.** Žádné CDN, písma a ikony lokálně (`public/ikony/*.svg`, komponenta Mince).
- **Data z `src/data`, ne ručně.** Jména, roky a vztahy ber z dat přes `src/lib/data.ts` nebo z výtahu předaného ostrovu; text v komponentě nesmí odporovat datům.

## Časté pasti

- Nezlomitelnou mezeru v TypeScriptu piš jako `' '`, v šabloně jako `&nbsp;`. Znak vložený přímo se při úpravách souboru může změnit na obyčejnou mezeru.
- `requestAnimationFrame`, `matchMedia`, `localStorage` a `history` nejsou při sestavení (SSR) k dispozici: používej je jen v `onMount`, v obsluze událostí nebo za kontrolou `typeof`.
- Efekt (`$effect`), který zapisuje stav, jenž sám čte, se zacyklí nebo si zruší vlastní práci; čtení zabal do `untrack`.
- Ostrov s `client:visible` se hydratuje až po posunu k němu; test musí počkat na `astro-island[component-url*="Jmeno"]:not([ssr])`, jinak klikne dřív než skript.
- Prvek skrytý přes `display: none` v CSS mřížce posune ostatní do jiných sloupců; sloupec nastav explicitně (`grid-column`).
- Text jen pro čtečky: třída `vizualne-skryte` z `global.css`.

## Když nemáš terminál na autorově počítači

Pracuj v kopii repozitáře a hotovou větev předej jako git bundle do složky Atlas (do `.git` zapisovat nelze): `git bundle create mapa.bundle <zakladni-vetev>..<nova-vetev>` a autorovi napiš jeden příkaz, jak ji načíst (`git fetch ./soubor.bundle vetev:vetev`, nebo `git pull ./soubor.bundle vetev`, pokud je větev zrovna vybraná). Postup si nejdřív ověř na kopii.
