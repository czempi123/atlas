# Podklady: Mapa a čas (P4)

Ověřeno 30. 9. 2026 skillem `atlas-overeni`. Celek: data pro Mapu a čas v2. Autor rozhodl (30. 9. 2026), že u lidí bez přesných dat stačí rámcový odhad s „asi“ a že krajiny a moře mají dobový název a v závorce dnešní.

## Odhady let života

| Osoba | V datech | Typ | Zdroj a místo | Poznámka |
| --- | --- | --- | --- | --- |
| Hérakleitos | asi 540 – asi 480 př. n. l. | přibližný fakt | Britannica „Heraclitus“, záhlaví; SEP: „činný kolem 500“ | Tradiční údaj odvozený z akmé; `aktivni: -500` zůstává. |
| Parmenidés | asi 515 – po 450 př. n. l. | přibližný fakt | SEP „Parmenides“ (Palmer): narozen asi 515; Platónův Parmenidés: asi 65letý v Athénách, Sókratovi asi 20 | Úmrtí neznáme, proto `nejdrive: -450`. |
| Démokritos | asi 460 – asi 370 př. n. l. | přibližný fakt | SEP „Democritus“: asi 460; Britannica (Duignan): asi 460 – asi 370 | |
| Zénón z Eleje | asi 490 – asi 430 př. n. l. | přibližný fakt | SEP „Zeno of Elea“: asi 490; Britannica: asi 495 – asi 430 | Narození ponecháno podle SEP. |
| Anaximenés | činný od asi 550, zemřel asi 528 př. n. l. | přibližný fakt | IEP „Anaximenes“: „flourished in the mid 6th century … died about 528“ | Narození neznáme; na mapě od akmé. |
| Xenofanés | asi 560 – asi 478 př. n. l. | přibližný fakt | Britannica „Xenophanes“, záhlaví; SEP: akmé 540–537, 67 let na cestách od 25 let | |
| Empedoklés | asi 490 – asi 430 př. n. l. | přibližný fakt | Britannica „Empedocles“: asi 490 Akragás – 430 Peloponnésos; SEP: zemřel v 60 letech | Smrt na Peloponnésu SEP označuje jen za možnou, proto bez místa smrti. |
| Aristippos | asi 435 – asi 355 př. n. l. | přibližný fakt | SEP „The Cyrenaics“: narozen asi 435, činný 399–355 | Úmrtí = konec doložené činnosti. |
| Chairefón | asi 470 – před 399 př. n. l. | odhad | Obrana 21a: Sókratův přítel od mládí, v době procesu už nežil | Narození odvozeno ze Sókratova věku. |
| Kritón | asi 469 – po 399 př. n. l. | přibližný fakt | Obrana 33d (vrstevník); Faidón: je u Sókratovy smrti | `nejdrive: -399`. |
| Hipparchia | činná asi 330–300 př. n. l. | odhad | Britannica „Crates of Thebes“: Kratés činný asi 350–301, Hipparchia jeho žena; IEP „Cynics“ | Rámec podle Kratéta. |
| Filón Alexandrijský | asi 15 př. n. l. – asi 50 n. l. | přibližný fakt | Britannica „Philo Judaeus“: 15–10 př. n. l. – 45–50 n. l.; SEP: konec 1. st. př. n. l. až pol. 1. st. n. l. | |
| Aspasie | činná asi 445–429 př. n. l. | doložený fakt | Britannica „Aspasia“: s Periklem od asi 445 do jeho smrti 429 | Rok narození ve spolehlivém pramenu nenalezen; zůstává doba činnosti. |

## Místa

- **Kratés:** Théby (narození, podle přízviska „Kratés Thébský“, Britannica) a Athény (působení; Britannica „Zeno of Citium“: Zénón po roce 312 poslouchal v Athénách Kratéta). Nové místo `theby` se souřadnicemi ze schváleného podkladu mapy.
- **Konfucius:** Zou (narození) a Lu (působení, smrt 479 podle tradiční chronologie); SEP „Confucius“. Souřadnice: Cou-čcheng a Čchü-fu v Šan-tungu.
- **Lucretius:** SEP ani Britannica neuvádějí místo života (jen adresáta Memmia). Na mapě zatím není, v řece životů ano.

## Krajiny a moře (`src/data/krajiny.yaml`)

| Popisek | Zdroj |
| --- | --- |
| Pontos Euxeinos / Pontus Euxinus (Černé moře) | Britannica „Black Sea“: Pontus Axeinus, Pontus Euxinus |
| Propontis (Marmarské moře) | Britannica „Sea of Marmara“ |
| Velké Řecko (jižní Itálie) | Britannica „Magna Graecia“ |
| Iónie (západ Turecka) | Britannica „Ionia“ |
| Kyrenaika (východ Libye) | Britannica „Cyrenaica“ |
| Asie (západ Turecka), římská provincie od 133 př. n. l. | Britannica „Asia (ancient Roman province)“ |
| Galie (Francie) | Britannica „Gaul“ |

Ostatní popisky (Egejské a Iónské moře, Makedonie, Thrákie, Attika, Peloponnésos, Sicílie, Kréta, Itálie, Řecko, Egypt) mají dobový i dnešní název stejný, proto bez závorky.

## Události

Události ze životů mají pole `osoby`, aby karta člověka ukázala, co ho v daném roce potkalo (Sókratés u Délia 424 př. n. l.). Přiřazení vychází z pramenů, které už u událostí jsou.

## Otevřené otázky pro autora

- Hispánie, Sýrie a další římské provincie pro výřez období 2 doplnit, až bude ověřený výčet (Britannica stránku Hispania nevrátila).
- Mare Nostrum pro Středozemní moře v období 2: zdroj se nepodařilo otevřít, zatím česky „Středozemní moře“.
