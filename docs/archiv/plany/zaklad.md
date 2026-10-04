# Plán: základ a kostra (P0–P5)

Větve `restart`, `mapa-v2` a `bloky-v1`, všechny sloučené do hlavní větve. **Stav: hotovo a schváleno** (29. 9. až 1. 10. 2026).

Tady jsou zadání kroků v plném znění a to, co po nich zůstalo na později. Strategie, katalog promptů a rozcestník plánů větví jsou v `docs/plan.md`.

## P0: Základ projektu

```text
Pracuješ v repozitáři atlas (Atlas myšlení, interaktivní atlas filozofie pro střední školy). Nejdřív si přečti docs/plan.md, hlavně oddíly o kritice, obsahovém modelu a skillech.

Připrav základ pro restart projektu:
1. Přesuň všechny dosavadní soubory do docs/archiv/ (atlas-antika.html je verze v9).
2. Napiš nový README.md: proč atlas vzniká, pro koho je, co v něm student najde, jak projekt spustit a jak je repozitář uspořádaný. Piš lidsky a krátce.
3. Napiš CLAUDE.md podle oddílu „CLAUDE.md: ústava projektu“ v plánu. Maximálně dvě obrazovky textu; pravidla formuluj jako to, co dělat, ne jako seznam zákazů.
4. Napiš docs/styl.md: průvodce tónem s deseti dvojicemi „takhle ne / takhle ano“. Příklady „ne“ vezmi ze skutečných textů v archivu (redakční výhrady, úřední školní příklady), příklady „ano“ napiš jako živé vyprávění.
5. Pomocí skillu skill-creator vytvoř ve složce skills/ skilly atlas-overeni a atlas-revize podle tabulky skillů v plánu.
6. Přidej LICENSE: CC BY-NC-SA 4.0 pro texty a MIT pro kód, s vysvětlením v README.

Všechno ulož jedním commitem s popisem změn. Na konci mi v pár větách řekni, co vzniklo a co bys na pravidlech ještě změnil.
```

## P1: Vizuální návrh

Hotovo 29. 9. 2026: schválený návrh a tokeny jsou v `docs/design.md`, obrazovky na plátně (odkaz v design.md). Znění ponechané pro záznam.

```text
Navrhni vizuální podobu Atlasu myšlení, interaktivního atlasu filozofie pro středoškoláky. Vycházej z docs/plan.md (oddíly o informační architektuře, mapě a čase a vizuálním jazyce) a z profilu Marca Aurelia v docs/archiv/atlas-antika.html, jehož časopisecký styl je výchozí inspirací.

Navrhni čtyři obrazovky, každou pro notebook (1440 px) i telefon (390 px): Domů, Mapa a čas (rok 360 př. n. l., vybraný Platón), profil Sókrata a jeden krok cesty s volbou a odkrytou zpětnou vazbou. Použij skutečné české texty, ne výplň.

Atlas má působit klidně, krásně a důvěryhodně, jako dobře udělaný časopis nebo muzejní průvodce, a přitom lákat k prozkoumávání. Navrhni barvu pro každé období, pár písem s plnou podporou češtiny, světlý i tmavý režim. U každé obrazovky ukaž, kde student je, jak se vrátí a co může udělat dál.

Vyřeš hlavně mapu s řekou životů: na mapě jen žijící, pod ní pruhy celých životů s čarou zvoleného roku; na notebooku vše vidět najednou.

Odevzdej návrh k posouzení a seznam design tokenů (barvy, písma, velikosti, mezery, zaoblení); po schválení je ulož do docs/design.md. Nabídni mi dvě varianty barevnosti.
```

## P2: Založení projektu a přenos dat

Doporučeně v Claude Code (nebo v Coworku s připojenou složkou Atlas), Opus 5.5, úsilí high. Projekt v Astru se zakládá od nuly; prototyp v9 (`docs/archiv/atlas-antika.html`) je nedotažený a slouží jen jako inspirace. Počítej s delší prací, klidně ve dvou sezeních; druhé sezení začni větou „Pokračuj v P2 podle docs/plan.md, stav najdeš v gitu“.

```text
Pracuješ v repozitáři atlas. Přečti CLAUDE.md, docs/plan.md (oddíly o technologii, informační architektuře a obsahovém modelu), docs/architektura.md a docs/design.md včetně podkladů ve složce docs/design/.

Založ ve větvi restart nový projekt: Astro se statickým výstupem, TypeScript, Svelte pro interaktivní ostrovy. Content collections se schématy pro osobnosti, směry, období, otázky, cesty, pokusy, pojmy, příběhy a náboženství; datové soubory lide, vztahy, mista, udalosti, obdobi a zdroje v src/data.

Design:
1. Převeď tokeny z docs/design.md do src/styles/tokens.css jako CSS proměnné, varianta A ve světlém i tmavém režimu. Tmavý režim podle nastavení systému i ručního přepínače, volbu ulož v localStorage.
2. Písma Newsreader a Instrument Sans přes balíčky @fontsource, jen latin a latin-ext, bez Google Fonts.
3. Ikony atributů z docs/design/atributy-ikony.json jako jeden SVG soubor se symboly.
4. Komponenty podle oddílu Komponenty: Mince (atribut), Deska (duotónová plocha pro obraz), PásObdobí (velký a malý, ornamenty z docs/design/ornamenty.js), Tlačítko, Citát. Hlavička, spodní lišta na telefonu a drobečková navigace podle oddílu Navigace a rozvržení.

Data a obsah (projekt začíná od nuly; prototyp v9 v docs/archiv/ ber jen jako inspiraci, nic z něj nepřebírej doslova):
5. Založ lide.yaml, mista.yaml, vztahy.yaml a udalosti.yaml pro období 1 a 2 podle kostry osobností v docs/architektura.md (portréty, profily, vybrané medailonky). Roky, místa s rolí a časem pobytu i vztahy ověř skillem atlas-overeni a pramen zapiš do zdroje.yaml. Co nejde ověřit, do dat nedávej a zapiš do docs/podklady/k-overeni.md.
6. Atributy: u lidí z tabulky v docs/design.md je převezmi i s větou „proč“. Pro ostatní profily a portréty navrhni atribut do docs/podklady/atributy.md k mému schválení; do dat je zatím nedávej.
7. obdobi.yaml podle architektury: osm období s časovým oknem, výřezem mapy, barvou a ornamentem.
8. Šablonu osobnosti ověř na Sókratovi: úvod, kapitola 01 Delfy, Doba a lidé (generovaná z dat), Dvě velké myšlenky, Zkus to žít a Kam dál podle docs/podklady/texty-z-navrhu-p1.md. Kapitoly 02–05 nech jen jako osnovu; napíšou se v P7. Citáty ověř a doplň český překlad do zdroje.yaml.

Stránky: Domů, Lidé a směry, šablona osobnosti (Sókratés) a Mapa a čas zatím jen jako statický podklad (podle docs/design/mapa-podklad.mjs). Nastav vyhledávání Pagefind.

Kontroly: schéma dat, existující odkazy, žádný rok nula, narození před úmrtím, učitel starší než žák, licence u každého obrázku, atribut u každého profilu a portrétu. Test v Playwrightu projde Domů, Lidé a směry a Sókrata na 390 a 1440 px ve světlém i tmavém režimu a ověří kontrast. GitHub Actions pro sestavení a kontroly; web nenasazuj.

Commituj po ucelených krocích česky, nic neposílej na GitHub. Na konci mi pošli snímky obou šířek v obou režimech, návod, jak web spustit, a seznam toho, co se od docs/design.md odchýlilo a proč.
```

## P4: Mapa a čas v2

**Stav 30. 9. 2026:** hotovo a schváleno autorem, sloučeno do hlavní větve. Rozhodnutí v `docs/rozhodnuti.md`, prameny k novým datům v `docs/podklady/mapa-a-cas.md`, co zůstalo na později, v oddílu „Po P4“ níže.

Až po dokončení P2. Doporučeně v Claude Code, Opus 5.5, úsilí high; když se zasekne na časové logice nebo výkonu, přepni na xhigh.

```text
Pracuješ v repozitáři atlas ve větvi mapa-v2 (vytvoř ji z restart). Přečti CLAUDE.md, v docs/plan.md oddíl „Mapa a čas pro celé dějiny“, v docs/design.md oddíl „Mapa a čas“, docs/design/mapa-podklad.mjs a data v src/data.

Postav Mapu a čas jako Svelte ostrov na stránce /mapa. Adresa nese rok, období a vybraného člověka (/mapa?rok=-360&osoba=platon), takže se dá sdílet a tlačítko Zpět funguje.

Musí umět:
1. Mapa: d3-geo a Natural Earth (world-atlas, land 10m, jen polygony regionu), výřez a projekce podle období z obdobi.yaml, styl podle design.md (vodní linky u pobřeží, jemná síť poledníků, dobové názvy krajin a moří, měřítko). Geometrii pro každý výřez předpočítej při sestavení, ne v prohlížeči. Při změně období se kamera plynule přesune, při omezeném pohybu skočí.
2. Jen žijící: člověk je na mapě od roku narození do roku úmrtí včetně, rok nula neexistuje. Pozici určují místa s rolí a časem (kde v daném roce byl). Víc lidí na jednom místě tvoří shluk s mincemi, který se po kliknutí rozbalí. Kdo je mimo výřez, má štítek se šipkou u okraje. Když vybraný člověk zemře, zmizí s krátkou zprávou „Platón zemřel roku 347 př. n. l.“
3. Posuvník roku po jednom roce, šipkami po deseti, klávesnicí i dotykem; nad ním dějinné kotvy z udalosti.yaml.
4. Řeka životů pod mapou: pruhy celých životů v okně kolem zvoleného roku, žijící v barvě období, ostatní vybledlí, svislá čára roku navazující na posuvník. Oblouky vztahů: plná čára učitel a žák, tečkovaná znali se, čárkovaná vliv textem, polemika vlastním tvarem. Klik na pruh vybere člověka i na mapě.
5. Přepínač období jako malý pás období se závorkou okna řeky a značkou roku; přehled celých 2 600 let s hustotou myslitelů pro rychlý skok.
6. Karta člověka: medailonek z dat, věk ve zvoleném roce, kde právě je, atribut s „proč“, vztahy s poznámkou („zemřel před 39 lety“), Změř vzdálenost mezi dvěma lidmi (správně přes chybějící rok nula).
7. Volitelný stín odkazu (výchozí vypnutý) a karta „Mezitím jinde“, když pro rok existují data.
8. Rozvržení: na notebooku mapa, posuvník, řeka i karta najednou bez posouvání při 1440 × 900 i 1280 × 800; na telefonu mapa nahoře a spodní list se záložkami Člověk a Řeka životů.

Přístupnost: každá osoba i pruh jsou ovladatelné klávesnicí, řeka má textovou alternativu (seznam žijících ve zvoleném roce), kontrast podle design.md. Výkon: plynulé posouvání roku na slabším telefonu.

Testy: jednotkové pro věk, „žije v roce“, vzdálenost mezi lidmi a přechod přes rok nula; Playwright pro roky -399, -360, -323 a 121 na 390 a 1440 px ve světlém i tmavém režimu, se snímky.

Nejdřív mi v pár bodech napiš plán a sporná místa (hlavně data, která pro mapu chybějí) a počkej na odpověď. Pak implementuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci pošli snímky a seznam toho, co zůstalo na později.
```

## Po P4: co zůstalo na později

- Výřezy období 3–8 doladit a schválit, až přibudou lidé; stejně tak telefonní výřezy období 2–8 (odvozené z notebookového).
- Hispánie, Sýrie a další římské provincie do `krajiny.yaml` po ověření; ID z Pleiad k místům (web Pleiades blokuje automatický přístup).
- „Mezitím jinde“ s vloženou mapkou Číny a Indie, až budou v datech Buddha, Lao-c’ a další (`docs/podklady/k-overeni.md`).
- Chybějící pobyty s časem (Platónovy cesty na Sicílii a založení Akademie, Xenokratés v Akademii, Epiktétos v Římě a Níkopoli), aby mapa přesněji ukazovala, kde kdo byl.
- Lucretius nemá doložené místo, na mapě chybí (v řece je).
- Plynulé posouvání roku ověřit na skutečném starším telefonu (měřeno jen se zpomaleným procesorem v Chromiu).
- Tlačítko „cesta“ v kartě člověka, až budou hotové cesty.

## P5: Knihovna bloků, prvních šest

**Stav 1. 10. 2026:** hotovo a schváleno autorem, sloučeno do hlavní větve. Bloky jsou v ukázkové cestě 1 (`/cesta/kdy-mam-dobry-duvod-verit/`) a v Sókratově profilu, všechny pohromadě v dílně `/dilna/bloky/`. API, návod pro MDX a stavba cesty v `docs/design.md` › Bloky a › Cesta, rozhodnutí v `docs/rozhodnuti.md`, potřeby ověření v `docs/podklady/k-overeni.md` › Obsah bloků. Co zůstalo na později, je v oddílu „Po P5“ níže.

Zadání, se kterým P5 proběhl. Doporučeně v Claude Code ve složce Atlas na Macu (změny pak vznikají rovnou v tvém repozitáři), nebo v Coworku v novém chatu projektu; Opus 5.5, úsilí high, při zaseknutí xhigh. Před spuštěním musí být v účtu uložený skill `atlas-komponenta` (zdrojová verze ve `skills/atlas-komponenta/`).

```text
Pracuješ v repozitáři atlas ve složce Atlas na mém Macu. Hlavní větev main obsahuje schválenou Mapu a čas (P4); založ z ní větev bloky-v1. Když k mému počítači nemáš terminál, pracuj v kopii repozitáře a hotovou větev mi na konci předej jako git bundle do složky Atlas s jedním příkazem, jak ji načíst.

Přečti CLAUDE.md, docs/styl.md, v docs/plan.md oddíly „Pedagogické pilíře“ a „Mechanismy učení a obsahová složka“, v docs/design.md oddíly Komponenty a Přístupnost a hotové ostrovy v src/components/ostrovy (NejdrivSam, MojeStanovisko, ZkusToZit) i src/lib/denik.ts. Postupuj podle skillu atlas-komponenta.

Postav prvních šest bloků knihovny jako Svelte ostrovy, které autor vloží do MDX jedním řádkem:
1. Příběh: krátká scéna s volitelným obrazem (deska v barvě období, když obraz chybí) a popiskem; bez interakce, ale se stejnou typografií jako profil.
2. Volba s důvodem: karty A–D, nepovinné pole „Proč právě tohle?“, ke každé možnosti vlastní zpětná vazba „Tvůj tah: …“ a oddíl „Co udělal …“ podle docs/design.md.
3. Odkryj: vlastní pokus, pak modelové odpovědi a sebekontrola. Sjednoť ho s dnešním Nejdřív sám (Sókratův profil musí dál fungovat beze změny textu).
4. Změň jednu věc: myšlenkový pokus s přepínačem podmínky; student rozhoduje znovu a vidí, jak se jeho odpověď posunula.
5. Spor: student se postaví na škálu mezi dva filozofy, přečte si jejich nejsilnější argumenty a může se přesunout; zapíše se první i konečná poloha.
6. Kdo žil dřív?: odhad pořadí nebo vzdálenosti dvou lidí z dat, pak odhalení s „Žili současně … / Dělí je …“ ze src/lib/cas-mapy.ts a odkazem do /mapa na správný rok.

Pro všechny bloky: zpětná vazba hodnotí důvody, ne souhlas; nic se neboduje. Odpovědi, které mají smysl pro deník, se uloží přes src/lib/denik.ts a vydrží obnovení stránky. Ovládání klávesnicí a dotykem, cíle aspoň 44 px, omezený pohyb, světlý i tmavý režim, kontrast AA.

Ukázky: stránka /dilna/bloky/ mimo navigaci a hledání (noindex), kde je každý blok na skutečném ověřeném obsahu období 1 (Sókratés, Platón, Diogenés); nový obsah, který by potřeboval ověření, nevymýšlej a zapiš jako potřebu do docs/podklady/k-overeni.md. Do docs/design.md doplň API každého bloku a krátký návod, jak ho vložit do MDX (bude ho potřebovat skill atlas-cesta).

Testy: jednotkové pro logiku bloků (vyhodnocení, posun odpovědi, uložení), Playwright pro každý blok na 390 a 1440 px ve světlém i tmavém režimu s axe, ovládáním klávesnicí, obnovením stránky a se snímky; celé npm test musí projít.

Nejdřív mi v pár bodech napiš plán a sporná místa (hlavně API bloků a co z bloků patří do deníku) a počkej na odpověď. Pak implementuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci pošli snímky a seznam toho, co zůstalo na později.
```

## Po P5: co zůstalo na později

- Ověřit Sókratovy důvody z Kritóna pro „Co udělal Sókratés“ u útěku z vězení (`atlas-overeni`).
- Dopsat cestu 1 o Prótagora (ověření, krok se Sporem Sókratés × Prótagorás) a projít ji revizí (`atlas-revize`), včetně autorských modelových odpovědí v krocích 4 a 5.
- Režim třídy u bloků: zpětná vazba až na pokyn učitele, jeden podnět na obrazovce, QR kód.
- Deník: seskupit zápisy podle druhu (`druh` už se ukládá), u Sporu ukázat posun graficky, „Zkus to žít“ s poznámkou, jak dopadlo.
- Návrat (blok knihovny): po několika dnech nabídnout v Pokračuj otázku z prošlé cesty na novém případu.
- Příběh s obrazem: první obraz s ověřenou licencí (Wikimedia Commons), později poslech s přepisem.
- Kdo žil dřív?: varianta se třemi a více lidmi (seřaď na ose) a lidé jen s dobou činnosti (bez narození a úmrtí).
- Zbylé bloky knihovny: Dialog, Úryvek s otázkou, Slož argument, Kdo to řekl?, Návrat.
- Skill `atlas-cesta` napsat podle `docs/design.md` › Bloky.
