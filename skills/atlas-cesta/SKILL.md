---
name: atlas-cesta
description: Psaní cesty, stránky velké otázky nebo myšlenkového pokusu v Atlasu myšlení z bloků knihovny (Příběh, Volba s důvodem, Odkryj, Změň jednu věc, Spor, Kdo žil dřív?). Použij VŽDY, když vzniká nebo se přepisuje cesta, krok cesty, myšlenkový pokus nebo stránka velké otázky, a když uživatel řekne „napiš cestu“, „přidej krok“, „udělej z toho cestu“, „velká otázka“, „myšlenkový pokus“.
---

# Cesta Atlasu myšlení

Cesta je 15–20 minut vedeného průchodu jednou velkou otázkou. Student nejdřív sám zkusí odpovědět, pak potká filozofa, narazí na silnou námitku, vyzkouší myšlenku na novém případu a zapíše si vlastní pravidlo. Je hotová, když ji šestnáctiletý člověk projde na telefonu bez nápovědy, dostane zpětnou vazbu k důvodům (ne ke shodě s filozofem) a na konci ví víc, než si myslel.

Tón a pravidla obsahu jsou v `CLAUDE.md` a `docs/styl.md`; platí i pro texty uvnitř bloků.

## Postup

1. **Přečti** `CLAUDE.md`, `docs/styl.md`, v `docs/architektura.md` řádek cesty v Katalogu cest, v `docs/design.md` oddíly **Bloky** a **Cesta** (API a stavba) a ukázkovou cestu 1 (`src/content/cesty/kdy-mam-dobry-duvod-verit*`).
2. **Podklady nejdřív.** Každé historické tvrzení, citát a příběh musí být v podkladovém listu (`docs/podklady/`, skill `atlas-overeni`). Co ověřené není, do cesty nepiš; zapiš to do `docs/podklady/k-overeni.md`. Vymyšlené situace uváděj „Představ si…“ a nevkládej do nich historické osoby.
3. **Navrhni osnovu** (6–8 kroků) a ukaž ji autorovi, než začneš psát. Každý krok má jeden úkol pro studenta. Osvědčené pořadí:

   | Krok | Úkol studenta | Blok |
   | --- | --- | --- |
   | Scéna | Čte skutečný příběh, ze kterého vyroste otázka | Příběh |
   | Vlastní tah | Rozhodne a připíše proč | Volba s důvodem |
   | Setkání | Vidí, co udělal filozof a proč | Příběh s citátem |
   | Vlastní pokus | Napíše odpověď, pak srovná s modelovými | Odkryj |
   | Náraz | Postaví se mezi dva filozofy, přečte nejsilnější argumenty obou | Spor |
   | Nový případ | Rozhodne v dnešní situaci a mění jednu podmínku | Změň jednu věc |
   | Souvislosti | Kdo kdy žil, s kým se mohl potkat | Kdo žil dřív? |
   | Tvoje pravidlo | Zapíše si vlastní odpověď do deníku | Moje stanovisko |

   Ne každý blok musí být v každé cestě. Dva stejné bloky za sebou jen výjimečně.
4. **Napiš soubory** (návod v `docs/design.md` › Cesta a › Bloky):
   - přehled `src/content/cesty/<slug>.mdx` (frontmatter `cislo`, `nazev`, `obdobi`, `otazka`, `vstup`, `filozofove`, `minut`; text = krátký úvod, dvě až tři věty),
   - kroky `src/content/cesty/<slug>/<n>-<nazev>.mdx` (frontmatter `cesta`, `krok`, `nazev`, `kdeJsme`), číslované 1…n bez mezer,
   - obsah Volby, Změň jednu věc a Sporu do `src/content/bloky/<id>.yaml`; v MDX jen `<Volba id="…" />`.
   Bloky v kroku nabídnou „Kam dál“ na další krok samy; `client:visible` ani odkaz do deníku nepiš.
5. **Vstupy do cesty:** karta `<CestaKarta slug="…" />` u filozofa cesty (za kapitolou, ze které cesta vychází) a odkaz v jeho Kam dál; u velké otázky odkaz na cestu. Na Domů jen jedna doporučená cesta.
6. **Ověř** `npm test` celé, projdi cestu v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí, snímky si prohlédni. Pak skill `atlas-revize`.
7. **Zapiš** do `docs/plan.md` stav, do `docs/rozhodnuti.md` zásadní volby, potřeby ověření do `k-overeni.md`. Commituj česky po ucelených krocích ve vlastní větvi.

## Jak psát bloky

- **Otázka** je jedna věta ve druhé osobě: „Co uděláš?“, „Utečeš?“, „Změní se tvá odpověď, když…?“ Žádné „Zamysli se nad tím, že…“.
- **Možnosti ve Volbě** (2–4) jsou skutečné tahy, které by šestnáctiletý člověk udělal, ne jedna správná a tři hloupé. Každá má vlastní zpětnou vazbu: co ten tah umí, kde má slabinu a otázku, která posune dál. Nikdy „správně“ ani „špatně“.
- **Tah** (`tah:`) je krátké sloveso: „zeptat se znovu“, „hledat protipříklad“.
- **„Co udělal …“** jen s doloženým faktem. Verze „stejně jako ty“ i „jinou cestou“ nehodnotí studenta.
- **Modelové odpovědi v Odkryj** (2–3) jsou různě silné odpovědi, jaké by napsal student; komentář řekne, co odpověď umí a jaký test ještě zkusit. Sebekontrola jsou věty, které si student může zaškrtnout („Můj znak by odhalil…“), ne kvíz.
- **Změň jednu věc** mění vždy jen jednu podmínku. Zpětná vazba `posun` a `stejne` se ptá, co přesně rozhodlo; neopakuje titulek „Tvoje odpověď se posunula“ (ten doplní blok).
- **Spor:** obě strany dostanou nejsilnější verzi, ideálně skutečný střet z pramene. Postoj je krátká věta v první osobě („To, co vidím.“), argumenty 1–3 odstavce. Kdo má pravdu, blok neříká.
- **Kdo žil dřív?** jen pro dvojice, kde výsledek překvapí nebo souvisí s příběhem (Sókratés a Diogenés žili současně, Platón byl při Sókratově smrti mladý muž).
- Věty do 25 slov, odstavce do 4 vět, tykání, české uvozovky, jména podle `lide.yaml`.

## Časté chyby

- Cesta začíná výkladem místo scény. První krok je vždy příběh nebo silný pokus.
- Filozof mluví větou, která není v prameni. Přímá řeč jen jako citát s místem.
- Zpětná vazba chválí shodu s filozofem („Přesně jako Sókratés!“). Hodnotí se důvod, ne shoda.
- Nový případ je úřední školní scénka. Lepší jsou situace, které studenty opravdu zajímají: přátelé, sociální sítě, zprávy ve skupině, rozhodování o budoucnosti.
- V kroku je redakční poznámka, metodický popisek nebo cesta k souboru. Do studentských stránek nepatří nic z toho.
- Krok má dva úkoly naráz. Rozděl ho.

## Kdy je hotovo

- Osnova schválená autorem; každé tvrzení má podklad.
- Kroky 1…n fungují na telefonu i notebooku, lišta Další vede až k Dokončit cestu a přehled cesty ukáže prošlé kroky.
- Každá zpětná vazba vysvětluje důvod a ptá se dál; nic se neboduje.
- Na konci si student zapíše vlastní pravidlo do deníku.
- `npm test` prošlo celé, snímky jsou prohlédnuté, revize (`atlas-revize`) bez zásadních nálezů.
