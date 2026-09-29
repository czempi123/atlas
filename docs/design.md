# Atlas myšlení: design systém

29. 9. 2026 · schválený vizuální návrh (P1) · plátno s obrazovkami: https://claude.ai/artifact/YVzSX5emgdTG3U4V8sr9Mu

Podklady k převzetí do kódu: `docs/design/atributy-ikony.json` (ikony atributů), `docs/design/ornamenty.js` (ornamenty pásu období), `docs/design/mapa-podklad.mjs` (referenční generátor podkladové mapy).

Atlas vypadá jako dobře udělaný časopis nebo muzejní průvodce: teplý papír, silná patková typografie, velké obrazy a jedna barva pro každé období. Tento dokument je závazný pro P2, P4, P5 a skill `atlas-komponenta`.

## Principy

1. **Barva říká, kde v dějinách jsem.** Každé období má svůj pigment; na mapě, na ose, u lidí i v pásu období.
2. **Klid pro čtení, bohatost v navigaci.** Čtenářské stránky jsou tiché (papír, inkoust, jeden akcent). Barvy a ornamenty patří do pásu období, desek s obrazy a map.
3. **Každý znak se vysvětlí.** Atribut, ornament i čára na mapě mají při prvním setkání odpověď na otázku „Proč?“.
4. **Student vždy ví, kde je, jak se vrátí a co dál.** Stálá hlavička, drobečková navigace na stejném místě, jedno hlavní tlačítko.
5. **Světlý i tmavý režim jsou rovnocenné.** Oba splňují WCAG AA pro všechen text.

## Barvy

Výchozí je **varianta A · Papír a pigment**. Varianta B · Mramor a inkoust je zdokumentovaná níže jako alternativa (chladnější, blíž profilu Marca v9); zatím se neimplementuje.

### Základ (A)

| Token | Světlý | Tmavý | Použití |
| --- | --- | --- | --- |
| `--paper` | `#F4EFE6` | `#17140F` | pozadí stránky |
| `--surface` | `#FBF8F2` | `#211D17` | karty, panely, spodní list |
| `--sunk` | `#EAE3D6` | `#2B261F` | zapuštěné plochy, stopa posuvníku |
| `--rule` | `#DDD3C3` | `#3B342B` | linky, okraje |
| `--muted` | `#6B6154` | `#A69B8A` | popisky, letopočty (AA i na `--sunk`) |
| `--ink-2` | `#4A4239` | `#D2C9BB` | druhotný text, perexy |
| `--ink` | `#211C17` | `#F1EBE0` | text, hlavní tlačítko (text na něm `--paper`) |

### Období (A)

Každé období má čtyři tokeny: `--period-N` (text, čáry, značky), `--period-N-tint` (světlé podbarvení kapitol, zpětné vazby), `--period-N-soft` (jemné pruhy, linky na tintu), a pro duotónové desky `--period-N-plate` / `--period-N-on-plate` (ve světlém režimu = barva / tint, v tmavém = soft / barva).

| N | Období | Pigment | Světlý: barva · tint · soft | Tmavý: barva · tint · soft | Ornament |
| --- | --- | --- | --- | --- | --- |
| 1 | Počátky a klasické Řecko | terakota | `#A34329` · `#ECDED3` · `#E2C9BC` | `#E48B68` · `#34251B` · `#483023` | meandr a amfora |
| 2 | Helenismus a Řím | tyrský purpur | `#7B3565` · `#E8DCD9` · `#D9C6CA` | `#D48DBF` · `#312528` · `#44303A` | mozaika a oblouk |
| 3 | Středověk | lapis lazuli | `#2D4E9B` · `#E0DFDE` · `#C8CCD6` | `#95ACEE` · `#29292E` · `#393C4C` | gotická okna a rozeta |
| 4 | Renesance a raný novověk | olovnato-cínová žluť | `#865B0F` · `#E9E0D0` · `#DCCEB7` | `#E0B359` · `#332A19` · `#534425` | perspektivní mřížka |
| 5 | Osvícenství | pruská modř | `#1C5B6B` · `#DEE0DA` · `#C4CECB` | `#6DBFCE` · `#232C2A` · `#314748` | paprsky světla |
| 6 | 19. století | smaragdová zeleň | `#3D6B38` · `#E2E2D5` · `#CCD2C0` | `#93C486` · `#282D20` · `#3C4933` | ozubená kola a koleje |
| 7 | 20. století: krize a hledání | kadmiová červeň | `#A12538` · `#ECDBD5` · `#E2C3C0` | `#F0848F` · `#352421` · `#4B2E2D` | konstruktivistické tvary |
| 8 | Po válce a dnes | dioxazinová fialová | `#5A4A9C` · `#E5DEDF` · `#D2CBD6` | `#B5A8F0` · `#2D292E` · `#433D4F` | síť bodů a uzlů |

Sousední období se liší odstínem (teplá a studená se střídají); rozlišení nikdy nestojí jen na barvě, vždy je u ní číslo nebo název.

### Mapa (A)

| Token | Světlý | Tmavý |
| --- | --- | --- |
| `--map-sea` | `#D6E0DC` | `#0E1618` |
| `--map-sea-line` | `#B4C5BF` | `#1F3136` |
| `--map-land` | `#F8F4EB` | `#241F19` |
| `--map-coast` | `#A3957E` | `#5E5446` |

### Varianta B · Mramor a inkoust (alternativa)

Základ světlý: paper `#EEEDE9`, surface `#FFFFFF`, sunk `#E3E2DD`, rule `#D5D4CF`, muted `#5E646B`, ink-2 `#3B4046`, ink `#141619`. Tmavý: `#0F1114`, `#171A1E`, `#20242A`, `#2D3238`, `#99A0A8`, `#C9CED3`, `#F2F3F4`.
Období světlý 1–8: `#A83B26` `#8B2A6C` `#1D53AE` `#805B00` `#0A657A` `#226F49` `#AC1C3B` `#5C41AE`; tmavý: `#F08B6D` `#E68ECA` `#88AFFF` `#F2C150` `#60CCE0` `#7FD2A3` `#FF8497` `#B5A3FF`. Tinty a soft tóny jsou na plátně (deska Design tokeny).
Mapa světlý: `#DAE2E9` `#B8C6D1` `#FAFAF8` `#949EA7`; tmavý: `#0A1015` `#1B2934` `#1B1F24` `#4B545D`.

## Typografie

- **Newsreader** (Production Type, OFL): nadpisy, čtení, citáty; optická velikost 6–72, řezy 300–700, kurzíva. Kurzíva nese pointu nadpisu („Nikdo není *moudřejší.*“).
- **Instrument Sans** (OFL): ovládání, popisky, nadtitulky, letopočty; řezy 400–700.
- Obě písma lokálně (WOFF2, podmnožiny latin a latin-ext), žádné Google Fonts za běhu.
- Letopočty tabulkovými číslicemi, „469–399 př. n. l.“ s nezlomitelnými mezerami, české uvozovky „…“.

| Token | Písmo | Notebook | Telefon | Řádkování, prostrkání |
| --- | --- | --- | --- | --- |
| `display-1` | Newsreader 400 | 148 | 76 | 0,9 · −3,5 % |
| `display-2` | Newsreader 400 | 92 | 50 | 0,98 · −2,5 % |
| `h1` | Newsreader 400 | 64 | 44 | 1,0 · −2 % |
| `h2` | Newsreader 400 | 48 | 34 | 1,05 · −1,5 % |
| `h3` | Newsreader 400 | 34 | 27 | 1,12 |
| `citat` | Newsreader 400 | 32 | 25 | 1,25 |
| `perex` | Newsreader 400 | 23 | 19 | 1,55 |
| `text` | Newsreader 400 | 21 | 19 | 1,65 |
| `ovladani-l` | Instrument Sans 600 | 17 | 17 | 1,3 |
| `ovladani` | Instrument Sans 500 | 15 | 15 | 1,45 |
| `popisek` | Instrument Sans 400 | 13 | 12 | 1,5 |
| `nadtitulek` | Instrument Sans 600, verzálky | 12 | 11 | +0,14 až 0,16 em |

## Mezery, mřížka, tvary

- Mezery (základ 4 px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96.
- Mřížka 12 sloupců, mezera 24; okraj stránky 80 (notebook) / 16 (telefon); čtenářský sloupec 680 px.
- Zaoblení: `xs` 4 (obrazy, pásy) · `sm` 8 (tlačítka, pole) · `md` 14 (karty, panely) · `lg` 20 (spodní list) · `full` (mince, čipy).
- Stín: překryv na mapě `0 6px 18px rgb(0 0 0 / 12%)`; spodní list `0 -8px 28px rgb(0 0 0 / 14%)`. Jinak bez stínů.
- Hlavička 72 px (notebook) / 56 px (telefon), spodní lišta 72 px, dotykový cíl nejméně 44 × 44.
- Pohyb: přechody 150–250 ms, kamera mapy 600 ms; při `prefers-reduced-motion` bez animací.

## Navigace a rozvržení

- **Notebook:** hlavička s logem (glóbus a „Atlas myšlení“), vstupy Domů · Mapa a čas · Otázky · Lidé a směry (aktivní podtržený inkoustem), hledání s klávesou `/`, Můj deník, přepínač režimu.
- **Telefon:** horní lišta s názvem nebo „‹ Zpět na …“, spodní lišta s pěti ikonami a popisky (Domů, Mapa, Otázky, Lidé, Deník).
- **Drobečková navigace** vždy pod hlavičkou vlevo (Lidé a směry / období / osoba).
- **Cesta** má soustředěnou hlavičku: vlevo zpět na přehled cesty, uprostřed postup po krocích, vpravo Režim třídy a Uložit a odejít. Dole pevná lišta Předchozí krok / Další krok.
- Rámeček fokusu 2 px `--ink`, odsazení 3 px, jen při `:focus-visible`.

## Komponenty

- **Tlačítka:** hlavní (`--ink` / text `--paper`, výška 48–56), vedlejší (obrys `--ink`), tiché (obrys `--rule`), textový odkaz s podtržením.
- **Mince (atribut osobnosti):** kruh s ikonou atributu, dvojitý okraj (1,5 px barva období, mezera, 1 px soft). Varianty: `ring` (na mapě, povrch), `tint` (karty), `sel` (vybraný člověk, plná barva). Velikosti 24–26 (mapa), 36–44 (karty, portrét), 56–64 (přehledy). Nikdy iniciála.
- **Deska:** duotónová plocha pro fotografii (busta, freska, rukopis) v barvách `--period-N-plate` / `--period-N-on-plate`, vždy s popiskem pod obrazem a licencí v Pramenech.
- **Pás období:** osm segmentů bez mezer; pozadí každého segmentu je gradient, který na hranách přechází do poloviční směsi se sousedem; ornament období je maskovaný do ztracena k okrajům. Varianty: velký (Domů, 250 px), malý přepínač (mapa, 26–28 px, aktivní období širší).
- **Volba s důvodem:** karty možností A–D (min. 60 px), vybraná má okraj 2 px a tint období; pole „Proč právě tohle?“ nepovinné; zpětná vazba v tintu období s titulkem „Tvůj tah: …“ a oddílem „Co udělal …“.
- **Nejdřív sám:** povrchová karta s nadtitulkem v barvě období, otázkou v Newsreaderu, polem a tlačítkem „Porovnat…“.
- **Zkus to žít:** karta v tintu období, jedno hlavní tlačítko „Přijmout výzvu“.
- **Citát:** Newsreader, linka nad i pod, pod ním autor, dílo, místo (Platón, Obrana Sókratova 38a).

## Mapa a čas

- **Notebook 1440 × 900 (a 1280 × 800) bez posouvání:** hlavička 72 · pás období 40 · mapa 408 · posuvník roku 72 · osa 24 · řeka 272 · vpravo karta člověka 408 px široká.
- **Telefon:** stav A = mapa 300, posuvník, spodní list s kartou; stav B = zmenšená mapa, vysunutá řeka životů. Přepínání záložkami v listu.
- **Jen žijící:** na mapě jen ti, kdo ve zvoleném roce žijí (od narození do úmrtí včetně; rok nula neexistuje). Více lidí v jednom místě = shluk (pilulka s mincemi a textem „Athény · a dalších 5“). Lidé mimo výřez = čárkovaný štítek se šipkou u okraje.
- **Značky:** mince `ring` 26 px + jméno na povrchové podložce; vybraný `sel` 36 px. Nápověda po najetí nebo klepnutí: jméno, věk, místo a „Proč …?“ k atributu.
- **Mapa:** Natural Earth (balíček `world-atlas`, `land-10m`), polygony regionu, projekce `geoConicConformal`, rovnoběžky 35° a 41° (pro antiku); tři vodní linky podél pobřeží (tah 16 px / 28 %, 7 px / 55 %, v tmavém 16 % a 32 %), síť poledníků po 2° velmi jemně. Názvy krajin verzálkami s prostrkáním, moře kurzívou Newsreaderu, obojí `--muted`. Měřítko a „Podklad: Natural Earth“ vlevo dole.
- **Cesty osob:** tečkovaná čára v barvě období (Platónova cesta domů, 360 př. n. l.).
- **Posuvník roku:** velký letopočet v Newsreaderu, šipky po 10 letech, stopa `--sunk`, uplynulá část `--period-N-soft`, jezdec s okrajem `--ink`. Nad stopou dějinné kotvy (pruh pro období, svislá značka pro rok).
- **Řeka životů:** řádek 16 px (telefon 22 px se jménem nad pruhem); žijící pruh 6 px v barvě období, ostatní `--muted` na 32 %; vybraný 10 px s prstencem a tintem řádku. Svislá čára roku navazuje na jezdec. Vztahy: plná čára učitel a žák, tečkovaná znali se (další typy doplní P4). Vlevo jména a letopočty, nahoře osa po 50 letech.
- **Přepínač období:** malý pás období, závorka pod ním ukazuje okno řeky, svislá značka zvolený rok.
- **Karta člověka:** deska s mincí, jméno (h2), letopočty, „Proč …?“ k atributu, box „V roce … je mu … let“ s místem a příběhem, vztahy (typ čáry, role, jméno, poznámka „zemřel před 39 lety“), Změř vzdálenost („Dělí je 467 let. To je asi šest lidských životů.“), tlačítka Otevřít portrét / cesta.
- **Mezitím jinde:** malá karta vpravo dole na mapě.

## Atributy osobností

Každá osobnost s hloubkou profil nebo portrét má atribut: jednu věc ze svého příběhu (jako atributy světců v ikonografii). V datech jako `atribut: { ikona, proc }`. Při prvním setkání se vždy ukáže „Proč …?“.

| Osobnost | Atribut | Proč |
| --- | --- | --- |
| Sókratés | kalich | Když ho Athény odsoudily, vypil ve vězení číši jedu. Mohl utéct, ale neutekl. |
| Platón | jeskyně | Přirovnal nás k vězňům, kteří mají stíny na zdi za skutečnost. |
| Aristotelés | váhy | Ctnost je střed mezi dvěma krajnostmi. |
| Xenofón | přilba | Vedl ústup deseti tisíc řeckých vojáků. |
| Archytás | holubice | Vypráví se, že sestrojil létající dřevěnou holubici. |
| Isokratés | svitek | Učil řečnictví. |
| Eudoxos | nebeské sféry | Navrhl první model nebe ze soustředných sfér. |
| Theofrastos | rostlina | Napsal první velké dílo o rostlinách; říká se mu otec botaniky. |
| Diogenés | lucerna | Za bílého dne hledal s lucernou člověka. |
| Aristippos | loď | Po ztroskotání našel v písku geometrické obrazce a poznal, že je mezi vzdělanými lidmi. |
| Epikúros | výhonek | Jeho škole se říkalo Zahrada. |
| Seneca | přesýpací hodiny | Psal o tom, že nemáme málo času, jen ho hodně promarníme. |
| Epiktétos | berla | Byl chromý otrok, a přesto svobodný uvnitř. |
| Marcus Aurelius | vavřín | Filozof na císařském trůnu. |
| Augustin | planoucí srdce | „Neklidné je naše srdce, dokud nespočine v tobě.“ |
| Descartes | souřadnice | Kartézská soustava souřadnic nese jeho jméno. |
| Spinoza | čočka | Živil se broušením čoček. |
| Kant | hvězda | „Hvězdné nebe nade mnou a mravní zákon ve mně.“ |
| Nietzsche | kladivo | Chtěl „filozofovat kladivem“. |
| Arendtová | pero | Jako reportérka psala o Eichmannově procesu. |
| Havel | klíče | V listopadu 1989 lidé na náměstích zvonili klíči. |

Ikony jsou tahové, mřížka 24 × 24, tah 1,5–1,8, zakončení kulatá, barva `currentColor`. Cesty ikon jsou v `docs/design/atributy-ikony.json`; v P2 se převedou do jednoho SVG se symboly. Tvrzení u atributů projdou skillem `atlas-overeni`, než se dostanou do dat.

## Obrázky

Fotografie busty, fresky a rukopisy v duotónu barvy období (`plate` / `on-plate`), výřez podle desky, vždy s popiskem a s licencí v `zdroje.yaml`. Dokud obraz chybí, zobrazuje se deska s mincí atributu, nikdy generická silueta.

## Přístupnost

Kontrast AA pro všechen text ve všech čtyřech kombinacích (A/B × světlý/tmavý) je ověřený výpočtem. Každá osoba na mapě i pruh v řece je tlačítko ovladatelné klávesnicí; řeka má textovou alternativu (seznam žijících ve zvoleném roce). Ikony mají `aria-hidden`, mince nese jméno a atribut v `title` / `aria-label`.
