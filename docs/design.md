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
- **Středová osa stránky osobnosti:** úvod, citát, kapitoly, vložené bloky (Kdo žil dřív?, Změň jednu věc, Spor) a Prameny leží v jednom čtenářském sloupci uprostřed stránky. Přes celou šířku jdou jen hlavička s deskou a oddíly, které stojí na mřížce: Doba a lidé (osa, mapa, vztahy), Velké myšlenky, Zkus to žít a Kam dál. Text uvnitř širokých oddílů začíná u jejich levého okraje. Na telefonu je všechno v jednom sloupci. V hlavičce stojí u letopočtů rodiště; když ho neznáme, místo, kde člověk působil naposledy.
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
- **Deska:** duotónová plocha pro fotografii (busta, freska, rukopis) v barvách `--period-N-plate` / `--period-N-on-plate`, vždy s popiskem pod obrazem a licencí v Pramenech (oddíl Obrázky: popisek, autor, instituce, licence s odkazem). Výřez drží tvář v horní třetině (`object-position: 50% 25%`). Na stránce osobnosti s fotografií se mince s atributem přesune k popisku „Proč …?“. Vlastnost `obrazOsoby={false}` vypne portrét osoby (používá Příběh). Obrázek, u kterého by výchozí výřez usekl to podstatné (rytina, kresba), má v `zdroje.yaml` vlastní střed výřezu `vyrez` („50% 37%“).
- **Mini mapa osoby** (Doba a lidé): výchozí egejský výřez, dokud jsou v něm vidět všechna místa osoby; jinak se střed a měřítko spočítají z míst i s popisky (`vyrezMiniMapy` v `src/lib/mapa.ts`), takže je vidět i Sinópé nebo Thurioi. Popisek stojí vpravo od bodu; vlevo u pravého okraje a u bodu, který má těsně vpravo souseda (Korinth vedle Athén).
- **Pás období:** osm segmentů bez mezer; pozadí každého segmentu je gradient, který na hranách přechází do poloviční směsi se sousedem; ornament období je maskovaný do ztracena k okrajům. Varianty: velký (Domů, 250 px), malý přepínač (mapa, 26–28 px, aktivní období širší).
- **Volba s důvodem:** karty možností A–D (min. 60 px), vybraná má okraj 2 px a tint období; pole „Proč právě tohle?“ nepovinné; zpětná vazba v tintu období s titulkem „Tvůj tah: …“ a oddílem „Co udělal …“.
- **Odkryj (dříve Nejdřív sám):** povrchová karta s nadtitulkem v barvě období, otázkou v Newsreaderu, polem a tlačítkem „Porovnat…“; po odkrytí srovnání v tintu období, modelové odpovědi a sebekontrola. API v oddílu Bloky.
- **Zkus to žít:** karta v tintu období, jedno hlavní tlačítko „Přijmout výzvu“.
- **Moje stanovisko:** krátký zápis do deníku (`MojeStanovisko.svelte`, druh `stanovisko`). V profilu za tlačítkem „Moje stanovisko“ s Uložit / Zrušit. S vlastností `rozbalene` (závěr cesty) je otázka s polem vidět hned, text se ukládá sám 600 ms po psaní, při opuštění pole i při odchodu ze stránky; pod polem „Ukládá se samo do deníku.“ / „Uloženo v deníku.“ (`aria-live`). Smazaný text zmizí i z deníku.
- **Citát:** Newsreader, linka nad i pod, pod ním autor, dílo, místo (Platón, Obrana Sókratova 38a). Varianta `velky` pro hlavní citát stránky, `kompaktni` (menší okraje, velikost textu) pro citát na časové ose otázky.

## Bloky

Interaktivní bloky, ze kterých se skládají cesty, profily a otázky (`docs/plan.md` › Mechanismy učení). Každý se do MDX vkládá jedním řádkem. Ve skutečném atlasu jsou v cestě 1 „Kdy mám dobrý důvod věřit?“ (`/cesta/kdy-mam-dobry-duvod-verit/`) a v Sókratově profilu; všech šest pohromadě a bez kódu je pro autora na `/dilna/bloky/` (mimo navigaci a hledání, `noindex`). Tento oddíl používá skill `atlas-cesta`.

### Jak blok vložit do MDX

1. Na začátek MDX jeden import (cestu uprav podle hloubky souboru):
   ```mdx
   import { Pribeh, Volba, Odkryj, ZmenJednuVec, Spor, KdoZilDriv } from '../../components/bloky';
   ```
2. Volba s důvodem, Změň jednu věc a Spor mají obsah v YAML v `src/content/bloky/<id>.yaml` (schéma `src/lib/bloky-schema.ts`). Do MDX pak stačí `<Volba id="<id>" />`. Příběh, Odkryj a Kdo žil dřív? se píšou přímo v MDX.
3. `client:visible` ani odkaz zpět z deníku nepiš. Doplní je obal v `src/components/bloky/`; odkaz je stránka a kotva `#<id>`.
4. `id` je malými písmeny bez diakritiky, s pomlčkami a na celém webu jedinečné (`sokrates-utek`, `cesta1-jak-zjistit`). Podle něj se ukládá odpověď. Když ho později změníš, studentům zmizí rozpracovaný stav.
5. V textech YAML funguje `*kurzíva*` a prázdný řádek dělí odstavce. Jména lidí se berou z `lide.yaml` podle id; v textu je piš v podobě z dat.
6. Historická tvrzení v bloku musí stát na pramenech v `zdroje` (id ze `zdroje.yaml`). Co ještě čeká na ověření, zapiš do `kOvereni`. Takový blok smí být jen v dílně, jinde zastaví sestavení.
7. Zpětná vazba vysvětluje důvod a ptá se dál. Nikdy „správně“ nebo „špatně“, nikdy hodnocení názoru; nic se neboduje.

8. **Kam dál:** každý blok po dokončení nabídne jeden další krok. V kroku cesty je to sám od sebe další krok (na konci „Dokončit cestu“); jinde ho nastav vlastností `dal={{ href: '/…', text: '…' }}` nebo v YAML polem `dal: { href, text }`. Kdo žil dřív? má navíc vždy odkaz do Mapy a času.
9. Do studentských stránek nepatří kód ani cesty k souborům; ani v dílně.

Sestavení zkontroluje schéma, druh bloku, osoby a prameny (`src/components/bloky/_kontrola.ts`, test `tests/data/bloky.test.ts`). Prameny bloků z YAML se na profilu samy přidají do rozbalovacích Pramenů.

### Co se ukládá

Vše jen v prohlížeči, v záznamu `atlas-denik` (`src/lib/denik.ts`). Bez localStorage bloky fungují do zavření stránky.

| Blok | Do deníku (Moje odpovědi) | Jen stav bloku (vydrží obnovení, je v exportu) |
| --- | --- | --- |
| Příběh | nic | nic |
| Volba s důvodem | „B · text možnosti. Proč: …“ | vybraná karta, důvod, potvrzeno |
| Odkryj | vlastní pokus | odkryto, zaškrtnutá sebekontrola, rozepsaná odpověď |
| Změň jednu věc | „Na začátku: … Podmínka: … (posun)“ | základní rozhodnutí, odpověď v každé podmínce, zapnutá podmínka |
| Spor | „Na začátku: spíš Platón. Po argumentech: uprostřed. Co mě posunulo: …“ | první a konečná poloha, důvod |
| Kdo žil dřív? | nic (fakt, ne názor) | odhad, odkryto |

„Začít znovu“ smaže stav bloku i jeho zápis v deníku. Bloky navíc zapisují poslední aktivitu (`aktivita`: otázka, odkaz, hotovo) a cesty svůj postup (`cesty`: naposledy otevřený krok a prošlé kroky). Z toho staví „Pokračuj, kde jsi skončil“ na Domů (`src/lib/pokracuj.ts`) a oddíl Rozpracované v deníku.

### Příběh

Scéna se stejnou typografií jako profil a deska v barvě období: obraz scény, když ho předáš v `obrazek`, jinak ornament a mince s atributem osoby. Portrét osoby (`obrazek` v `lide.yaml`) se v Příběhu nepoužije, protože popisek patří k místu scény. Bez JavaScriptu (komponenta Astro, ne ostrov).

Rozvržení se řídí šířkou místa, ne obrazovky: od 800 px stojí deska vedle textu (krok cesty), v užším sloupci nad textem (profil, telefon). Obraz na výšku dostane `pomer="4 / 5"` a nad textem zůstává nejvýš 400 px široký. Obrázek z Příběhu se na stránce osobnosti sám přidá do Pramenů.

```mdx
<Pribeh id="delfy" osoba="sokrates" nadtitulek="Delfy" titulek="Nikdo není *moudřejší.*" popisek="Delfy. Tady se Chairefón zeptal věštírny na Sókrata.">

Text scény v odstavcích…

</Pribeh>
```

| Vlastnost | Povinná | Význam |
| --- | --- | --- |
| `popisek` | ano | popisek pod deskou |
| `osoba` | ne* | id v `lide.yaml`: barva období a mince |
| `obdobi` | ne* | 1–8, když scéna nepatří k jedné osobě (*jedno z `osoba`/`obdobi` je nutné) |
| `obrazek` | ne | id obrázku v `zdroje.yaml` (licence povinná) |
| `nadtitulek`, `titulek` | ne | titulek s pointou v `*kurzívě*` |
| `pomer` | ne | poměr stran desky, výchozí `4 / 3`; kresba nebo rytina na výšku `4 / 5` |
| `id` | ne | kotva scény |

### Volba s důvodem

Karty A–D (radiogroup, šipky), nepovinné „Proč právě tohle?“, tlačítko „Tohle je můj tah“. Pak zpětná vazba „Tvůj tah: …“ v tintu období, oddíl „Co udělal …“ a rozbalovací „Co kdybys zvolil jinak?“ se zpětnou vazbou ostatních tahů.

```mdx
<Volba id="cesta1-jak-zjistit" />
```

```yaml
# src/content/bloky/cesta1-jak-zjistit.yaml
druh: volba
obdobi: 1
nadtitulek: Tvůj tah            # nepovinné (výchozí „Co uděláš?“)
scena: Chairefón se vrátil z Delf…   # nepovinné
otazka: Co uděláš, abys zjistil, jestli má věštírna pravdu?
moznosti:                       # 2–4
  - text: Zeptám se věštírny znovu, jinými slovy.
    tah: zeptat se znovu        # → „Tvůj tah: zeptat se znovu.“
    zpetna: Dostaneš jen další odpověď ze stejného zdroje…
  - text: Najdu lidi, kteří mají pověst moudrých, a vyzkouším je.
    tah: hledat protipříklad
    jeho: true                  # tuhle cestu zvolil filozof (právě jedna, když je coUdelal)
    zpetna: …
coUdelal:                       # nepovinné
  osoba: sokrates               # nadpis „Co udělal Sókratés“ z dat
  stejne: Šel stejnou cestou jako ty…
  jinak: Šel jinou cestou: …
zdroje: [platon-obrana]
```

### Odkryj

Vlastní pokus, pak srovnání, volitelně modelové odpovědi a sebekontrola (zaškrtávací věty, nic se nesčítá). Po odkrytí jde odpověď připsat nebo upravit. S `filozof="sokrates"` má hlavička minci filozofa a barvu jeho období. `NejdrivSam.svelte` zůstává jako starší jméno téhož bloku kvůli hotovým stránkám.

```mdx
<Odkryj
  id="sokrates-kdo-je-moudry"
  otazka="Koho považuješ za moudrého člověka? Podle čeho to poznáš?"
  tlacitko="Porovnat se Sókratem"
  modelove={[{ text: 'Moudrý je ten, kdo pozná, kde jeho vědění končí.', komentar: 'Znak, podle kterého…' }]}
  sebekontrola={['Napsal jsem znak, podle kterého moudrost poznám, ne jen jméno.']}
>

Srovnání s filozofem v odstavcích…

</Odkryj>
```

| Vlastnost | Povinná | Význam |
| --- | --- | --- |
| `id`, `otazka` | ano | otázka se ukládá do deníku |
| `tlacitko` | ne | výchozí „Odkrýt“; lépe „Porovnat se Sókratem“ |
| `nadtitulek` | ne | výchozí „Než budeš číst dál“ |
| `modelove` | ne | `[{ text, komentar? }]`, nadpis „Jak se dá odpovědět“ |
| `sebekontrola` | ne | věty, které si student zaškrtne |
| `obdobi` | ne | barva, když ji blok nemá převzít ze stránky |
| `filozof` | ne | id osoby: mince v hlavičce a barva období |
| `dal` | ne | Kam dál po odkrytí (v cestě další krok sám) |

### Změň jednu věc

Scéna a rozhodnutí; pak přepínač podmínky (čipy, 1–3), v každé podmínce nové rozhodnutí a „Předtím → Teď“ se zpětnou vazbou pro posun, nebo pro stejnou odpověď. Po první změně oddíl „Co udělal …“.

```mdx
<ZmenJednuVec id="utek-z-vezeni" />
```

```yaml
druh: zmena
obdobi: 1
nadtitulek: Myšlenkový pokus
scena: Představ si, že tě soud odsoudil k smrti…
otazka: Utečeš?
moznosti:                       # 2–4, stejné pro všechny podmínky
  - { id: uteku, text: Uteču. }
  - { id: zustanu, text: Zůstanu. }
podminky:                       # 1–3
  - id: spravedlivy
    prepinac: Rozsudek je spravedlivý      # text čipu
    zmena: Teď si představ, že soud byl poctivý…
    posun: Rozhoduje tedy pro tebe, jestli…    # titulek „Tvoje odpověď se posunula.“ doplní blok
    stejne: Na tom, jestli je rozsudek spravedlivý, tvé rozhodnutí nestojí…
coUdelal: { osoba: sokrates, text: Sókratés utéct mohl, ale neutekl… }   # nepovinné
zdroje: [platon-kriton, platon-faidon]
```

### Spor

Otázka a postoje obou stran; škála s pěti polohami („Platón“, „spíš Platón“, „uprostřed“, „spíš Diogenés“, „Diogenés“) s mincemi na koncích. Poloha se volí tažením nebo klepnutím (prst svisle dál posouvá stránku) i šipkami (přepínače, body 44 px). Po „Tady stojím“ se otevřou argumenty obou stran s mincemi, student se může přesunout a šipka na škále ukazuje odkud kam; může připsat, co ho posunulo nebo udrželo. Zpětnou vazbu k posunu píše blok sám (`zpetnaSporu` v `src/lib/bloky.ts`), nikdy neříká, kdo má pravdu.

```mdx
<Spor id="platon-diogenes-skutecnost" />
```

```yaml
druh: spor
obdobi: 1
otazka: Co je skutečnější, to, co vidíš, nebo to, co pochopíš?
strany:                         # právě dvě různé osoby; jména z dat
  - osoba: platon
    postoj: To, co pochopím.
    argumenty: [Za proměnlivým světem, který vidíme, stojí neměnné ideje., …]   # 1–3, nejsilnější verze
  - osoba: diogenes
    postoj: To, co vidím.
    argumenty: […]
zdroje: [platon-ustava]
kOvereni: [ … ]                 # dokud není prázdné, jen v dílně
```

### Kdo žil dřív?

Odhad pořadí (karty A / B / Žili ve stejné době), nebo vzdálenosti: na ose s kulatými letopočty leží pevně život A a student přetáhne život B (jeho skutečnou délku) tam, kde podle něj žil, myší, prstem nebo šipkami (PageUp/PageDown po 25 letech). Pod osou se průběžně píše „žili by současně 30 let“ / „dělilo by je 120 let“. Osa je souměrná kolem A, takže její rozsah neprozradí stranu. Po „Odhalit“ se ukáže věta „Žili současně … / Dělí je …“ a věta o věku (`src/lib/cas-mapy.ts`), skutečná poloha vedle čárkovaného odhadu (u pořadí malá osa) a odkaz „Ukázat na mapě v roce …“. Mapa se otevře u současníků v posledním společném roce, jinak v roce úmrtí staršího, s vybraným člověkem a srovnáním. Odhad se jen popíše vedle skutečnosti.

```mdx
<KdoZilDriv a="sokrates" b="diogenes" druh="poradi" />
<KdoZilDriv a="platon" b="diogenes" druh="vzdalenost" />
```

| Vlastnost | Povinná | Význam |
| --- | --- | --- |
| `a`, `b` | ano | id dvou lidí s roky v `lide.yaml` |
| `druh` | ne | `poradi` (výchozí) nebo `vzdalenost` |
| `otazka` | ne | vlastní znění otázky |
| `dal` | ne | další krok vedle odkazu do mapy (v cestě sám) |
| `id` | ne | výchozí `kdo-<a>-<b>-<druh>` |

### Společné pro všechny bloky

- Karta `.blok` (povrch, okraj `--rule`, zaoblení `md`), hlavička s nadtitulkem v barvě období a mincemi lidí, o kterých blok je; otázka `t-h3`; styly v `global.css` › Interaktivní bloky. „Co udělal …“ má minci filozofa.
- Pole na psaní vypadají jako linkovaný deník (spodní linka `--muted`, kontrast 3 : 1). Po tahu ve Volbě zůstane vidět jen vybraná karta, ostatní tahy jsou v „Co kdybys zvolil jinak?“.
- Zpětná vazba se odkrývá krátkým vyjetím (260 ms), při omezeném pohybu bez animace (`src/lib/pohyb.ts`).
- V profilu patří bloky do čtenářského sloupce; Spor se dvěma sloupci argumentů do `.blok-sloupec` (960 px).
- Karty možností jsou nativní přepínače v popiscích (šipky, mezerník, dotyk), cíle aspoň 44 px (karty 56–60).
- Po odkrytí jde fokus na zpětnou vazbu (`aria-live="polite"`), po „Začít znovu“ na první volbu.
- Blok funguje bez JavaScriptu jen jako text; interaktivní část se hydratuje, až je vidět.

## Cesta

Cesta je 15–20 minut vedeného průchodu po krocích (`docs/architektura.md` › Katalog cest). Ukázková je cesta 1 „Kdy mám dobrý důvod věřit?“ (sedm kroků, Sókratés a Prótagorás).

- **Soubory:** přehled `src/content/cesty/<slug>.mdx` (frontmatter `cislo`, `nazev`, `obdobi`, `otazka`, `vstup`, `filozofove`, `minut`; text = úvod), kroky `src/content/cesty/<slug>/<n>-<název>.mdx` (frontmatter `cesta`, `krok`, `nazev`, volitelně `kdeJsme`; text = obsah kroku s bloky). Kroky se číslují 1…n bez mezer, jinak se sestavení zastaví.
- **Přehled cesty** `/cesta/<slug>/`: nadtitulek (číslo, minuty, počet kroků), otázka, vstup, mince filozofů, úvod, tlačítko Začít / Pokračovat: krok n / Projít znovu, pod ním nadpis Kroky a seznam kroků s tím, co student prošel, a oddíl Kam dál (`#hotovo`). Tlačítko stojí nad seznamem, aby bylo na telefonu vidět bez posouvání a klávesnicí na dosah.
- **Krok** `/cesta/<slug>/<n>/`: soustředěná hlavička (vlevo zpět na přehled, uprostřed „Krok n z N“ s tečkami kroků, vpravo Uložit a odejít; postup se ukládá sám), nadtitulek, název kroku, „Kde jsme“ a obsah. Dole pevná lišta Předchozí / Další krok (na telefonu bez názvu kroku), na konci Dokončit cestu.
- **Vstupy:** karta cesty (`src/components/cesta/CestaKarta.astro`) na Domů a v profilu, odkaz v Kam dál profilu, Pokračuj na Domů a Rozpracované v deníku.
- Bloky v kroku nabídnou po dokončení další krok samy.

## Velká otázka

Stránka `/otazka/<slug>/` (`src/pages/otazka/[otazka].astro`) je rozhovor napříč staletími. Ukázková je otázka 7 „Jak poznám, co je pravda?“.

- **Soubor:** `src/content/otazky/<slug>.mdx`. Frontmatter `cislo`, `otazka`, `disciplina`, `pripad` (otázka úvodního případu, „Komu věřit?“) a `hlasy: [{ osoba, odpoved, myslenka, citat?, zdroje? }]` (osoba z `lide.yaml`, citát a prameny ze `zdroje.yaml`); text = úvod scénou („Představ si…“), dva až tři krátké odstavce. Otázka bez hlasů stránku nemá, zůstává jen řádek v přehledu `/otazky/`. Sestavení se zastaví, když osoba, citát nebo pramen chybí nebo když citát patří jiné osobě (`chybyHlasu` v `src/lib/otazky.ts`).
- **Pořadí:** nadtitulek (Velká otázka N · disciplína), otázka jako h1, úvod → **Tvůj první názor** (`PrvniNazor.svelte`) → **odpovědi na úvodní případ** (nadtitulek „Tentýž případ, čtyři odpovědi“, nadpis z `pripad`) → **Proč to tak viděli** (časová osa) → **Cesta / Cesty k otázce** (karty všech cest s touto otázkou, samy z dat) → **Změnil se?** (`ZmenilSe.svelte`) → Prameny.
- **Nejdřív student:** dokud student neuloží první názor nebo nestiskne Přeskočit, je všechno pod prvním názorem skryté (atribut `data-otazka-zavreno` na `<html>`, nastaví ho malý skript před vykreslením). Bez JavaScriptu je stránka vidět celá. Po odkrytí jde fokus na nadpis odpovědí.
- **Odpovědi** (`HlasyOdpovedi.astro`): karty s horní linkou v barvě období, mince 40 px, jméno, `odpoved` (jedna až dvě věty, jak by myslitel naložil s případem; převod jeho myšlenky, ne citát) a „Proč takhle?“. Celá karta je odkaz na `#hlas-<osoba>` na časové ose. Telefon pod sebou, od 700 px dva sloupce v pásu 960 px.
- **Časová osa** (`HlasyOsa.astro`): hlasy seřazené podle narození (`seradHlasy`). Svislá linka `--rule` 2 px prochází středem mincí 44 px (`tint`, barva období osoby); vedle mince letopočty (`t-popisek`, `--pc`, 600), jméno `t-h3` (odkaz, jen když má osoba stránku), `myslenka` (odstavce) a citát `<Citat kompaktni />`. Telefon: letopočty nad jménem. Od 1100 px letopočty v levém okraji vedle mince, text drží čtenářský sloupec. Rozestupy jsou stejné, ne podle let.
- **Deník:** `otazka-<slug>-prvni` (Můj první názor) a `otazka-<slug>-ted` (Po setkání s filozofy), druh `stanovisko`; přeskočení je stav `otazka-<slug>`. Změnil se? ukáže po uložení obě odpovědi vedle sebe („Na začátku“ / „Teď“) a otázku, co by názor změnilo ještě jednou. Nic se nehodnotí.
- **Odkazy:** na otázku odkazuj `adresaOtazky(id, data)`; vede na stránku, a dokud otázka stránku nemá, na kotvu v přehledu.

## Mapa a čas

- **Notebook 1440 × 900 (a 1280 × 800) bez posouvání:** hlavička 72 · pás období 40 · mapa 408 · posuvník roku 72 · osa 24 · řeka 272 · vpravo karta člověka 408 px široká.
- **Telefon:** stav A = mapa 300, posuvník, spodní list s kartou; stav B = zmenšená mapa, vysunutá řeka životů. Přepínání záložkami v listu.
- **Jen žijící:** na mapě jen ti, kdo ve zvoleném roce žijí (od narození do úmrtí včetně; rok nula neexistuje). Více lidí v jednom místě = shluk (pilulka s mincemi a textem „Athény · a dalších 5“). Lidé mimo výřez = čárkovaný štítek se šipkou u okraje.
- **Značky:** mince `ring` 26 px + jméno na povrchové podložce; vybraný `sel` 36 px. Nápověda po najetí nebo klepnutí: jméno, věk, místo a „Proč …?“ k atributu.
- **Mapa:** Natural Earth (balíček `world-atlas`, `land-10m`), polygony regionu, projekce `geoConicConformal`, rovnoběžky 35° a 41° (pro antiku); tři vodní linky podél pobřeží (tah 16 px / 28 %, 7 px / 55 %, v tmavém 16 % a 32 %), síť poledníků po 2° velmi jemně. Názvy krajin verzálkami s prostrkáním, moře kurzívou Newsreaderu, obojí `--muted`. Měřítko a „Podklad: Natural Earth“ vlevo dole.
- **Cesty osob:** tečkovaná čára v barvě období (Platónova cesta domů, 360 př. n. l.).
- **Posuvník roku:** velký letopočet v Newsreaderu, šipky po 10 letech, stopa `--sunk`, uplynulá část `--period-N-soft`, jezdec s okrajem `--ink`. Nad stopou dějinné kotvy (pruh pro období, svislá značka pro rok).
- **Řeka životů:** řádek 16 px (telefon 22 px se jménem nad pruhem); žijící pruh 6 px v barvě období, ostatní `--muted` na 32 %; vybraný 10 px s prstencem a tintem řádku. Svislá čára roku navazuje na jezdec. Vztahy: plná čára učitel a žák, tečkovaná znali se, čárkovaná vliv přes texty, vlnovka polemika; tradovaný vztah slabší. Vlevo sloupec jmen 208 px (pod 1100 px 176 px), stopa posuvníku má stejné měřítko jako řeka. Vlevo jména a letopočty, nahoře osa po 50 letech.
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
