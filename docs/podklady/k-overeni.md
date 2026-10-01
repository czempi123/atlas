# K ověření

29. 9. 2026 · P2. Co se při zakládání dat období 1 a 2 nepodařilo ověřit, a proto to v `src/data/` zatím není. Každý bod má návrh, co s ním. Postup ověřování je v `docs/podklady/data-obdobi-1-2.md`. Doplněno 1. 10. 2026 (P6, celek 1): vyřízené body jsou označené, nové otevřené jsou v posledním oddílu.

## Lidé, kteří v datech zatím chybějí

| Osoba | Proč chybí | Co udělat |
| --- | --- | --- |
| Lao-c’ (okno období 1) | SEP („Laozi“) uvádí, že podle části badatelů jde o legendární postavu; data ani místo nelze doložit. | Rozhodnout, zda ho v atlasu uvádět jako osobu, nebo jen jako knihu Tao te ťing (ustálená podoba textu kolem pol. 3. st. př. n. l.). |
| Buddha (okno období 1) | SEP („Buddha“) uvádí tradiční 560–480, ale mnoho badatelů dnes klade smrt kolem 405 př. n. l. | Vybrat datování (doporučuji „asi 480–400 př. n. l.“ jen s výslovným souhlasem autora) nebo ho uvést jen na stránce Buddhismus. |
| Čuang-c’ (okno období 2) | SEP („Zhuangzi“) uvádí jen „pozdní 4. století př. n. l.“; tradiční 369–286 z návrhu P1 jsem nedoložil. | Dohledat v Chan, *A Source Book in Chinese Philosophy*, nebo v IEP. |
| Hieroklés (stoik) | Heslo IEP neexistuje na očekávané adrese; datace „2. st. n. l.“ nemá odborný zdroj. | Dohledat v Ramelli, *Hierocles the Stoic* (SBL 2009); obraz soustředných kruhů je u Stobaia 4.27.23. |
| Sextus Empiricus | SEP: „víme málo nebo nic o tom, kdy a kde žil“ (asi 2.–3. st. n. l.). | Nechat bez dat jako medailonek bez místa na mapě, nebo vynechat z mapy. Schéma to umí. |
| Alexandr Veliký | Není v kostře osobností (architektura), ale vztah učitel a žák s Aristotelem nese cestu 4. | Rozhodnout, zda přidat jako medailonek „nefilozofa s přesahem“ (Britannica: 356–323 př. n. l., Babylón). |

## Chybějící roky a místa u lidí, kteří v datech jsou

Odhady let pro Hérakleita, Parmenida, Démokrita, Zénóna z Eleje, Anaximena, Xenofana, Empedokla, Aristippa, Chairefónta, Kritóna, Hipparchii a Filóna a místa Kratéta a Konfucia jsou od P4 v datech; rozbor v `docs/podklady/mapa-a-cas.md`.

| Osoba | Co chybí | Co uvádějí prameny | Návrh |
| --- | --- | --- | --- |
| Xenofón | přesný rok úmrtí, Skillús a Korinth | Britannica: asi 430 – „krátce před 350“; stránka neukázala pasáže o Skillúntu u Olympie a o Korinthu. | Doplnit místa z Anabase V, 3, 7–13 (Skillús) po ověření. |
| Platón | roky cest na Sicílii (kromě návratu 361), rok založení Akademie | SEP uvádí „429?–347“, Britannica (Meinwald) „428/427–348/347, Athény“; roky cest a založení Akademie ani jedno heslo nepodalo. | V datech „asi 427“ (souhlasí s návrhem P1: v roce 360 je mu 67 let). Doplnit cesty a Akademii ze 7. listu a z Diogena Laertia III po ověření. |
| Epikúros | místo narození | SEP: athénský občan, vyrůstal na Samu. | V datech jen pobyt na Samu do 321. |
| Epiktétos | roky v Římě a v Níkopoli | SEP: Domitianův edikt roku 89; SEP „Stoicism“: 93. | Po rozhodnutí doplnit `do`/`od`. **Rozpor pramenů.** |
| Marcus Aurelius | místo smrti, Carnuntum | Britannica: zemřel ve Vindoboně nebo v Sirmiu; Carnuntum a Granua jsou v nadpisech knih Hovorů (I a II/III), stránka je nepodala. | Doplnit Carnuntum z Hovorů (vydání Haines, Loeb) po ověření. |
| Seneca | pobyt v Egyptě | SEP stránka nepodala. | Doplnit z Consolatio ad Helviam 19, 2 po ověření. |
| Cicero | místo narození (Arpinum), studia v Athénách a na Rhodu, vyhnanství, smrt u Formií | IEP stránka nepodala. | Doplnit z Plútarchova Cicerona. |
| Plótínos | místo narození | Místo smrti doplněno (Minturnae v Kampánii, Porfyrios, Život Plótínův 2). Lykopolis uvádí až Eunapios, ne Porfyrios. | Doplnit Lykopolis, pokud stačí Eunapios. |
| Pyrrhón | tažení s Alexandrem | SEP: „údajně“ doprovázel Alexandra do Indie. | V datech jen jako „vypráví se“ v textu, bez místa. |

## Místa

- **Souřadnice** míst mimo schválený podklad mapy jsou přibližné polohy lokalit. Web Pleiades (pleiades.stoa.org) při zakládání projektu blokoval automatický přístup, proto v `mista.yaml` zatím chybí ID z Pleiad. Doplnit při P4 (Mapa a čas v2), kdy se budou kontrolovat všechny značky na mapě.
- Místa **Konfucia** (Zou, Lu) doplněna v P4 (docs/podklady/mapa-a-cas.md).

## Vztahy, které v datech nejsou

| Vztah | Proč chybí |
| --- | --- |
| Xenofanés → Parmenidés | SEP: tradice je spojuje, Parmenidés ho „mohl potkat“. |
| Hérakleitos ↔ Parmenidés (polemika) | SEP: Hérakleitos Parmenida „možná podnítil“. |
| ~~Prótagorás ↔ Sókratés~~ | **Vyřízeno 1. 10. 2026:** v datech jako `znali-se`, `tradovany: true`, pramen Platón, Prótagorás (`docs/podklady/celek-1-pravda.md`). Polemika o pravdě (Theaitétos) je Platónova konstrukce, do vztahů nejde. |
| Aspasie ↔ Sókratés | Britannica zmiňuje jen Aischinův dialog Aspasie. |
| Leukippos → Démokritos | Leukippos zatím není v datech (vztah SEP: „druh nebo učitel“). |
| Démokritos → Epikúros (vliv textem) | Přes Nausifana; Nausifanés není v datech. |
| Ammónios Sakkás → Plótínos, Theón → Hypatia, Hypatia → Synesios | Učitelé a žáci zatím nejsou v datech (prameny: SEP Plotinus, BEA Hypatia). |

## Citáty a překlady

- **Obrana 38a a 21d:** autor 30. 9. 2026 rozhodl, že zůstává vlastní převod (zapsáno v `zdroje.yaml`). Novotného překlad se nepřebírá.
- **Celek 1 (1. 10. 2026):** nové citáty (Obrana 36a, 36d–e; Kritón 49c; Faidón 118a; Theaitétos 152a; DL IX, 51; DL IX, 22; Metafyzika 1011b26–27; Menón 98a) jsou vlastní převody z řeckého textu. Porovnat s publikovanými překlady (Novotný, Kolář), pokud autor chce převzít.
- **Kapitola 01 Delfy** odkazuje na Obranu 20e–22e; čísla stran jsem ověřil přes SEP (20e–23b) a Jowettův překlad bez Stephanova číslování. Při revizi (P10) zkontrolovat po odstavcích proti řeckému vydání (Burnet, OCT).

## Obrázky

- Wikimedia Commons nebyl při zakládání dostupný, proto atlas zatím žádný obrázek nemá a desky ukazují minci s atributem.
- **1. 10. 2026 (celek 1):** Commons byl pro nástroje znovu nedostupný. Kandidát pro Sókrata: `Socrates_Louvre.jpg`, busta z Louvru (Ma 59, MR 652), foto Eric Gaba (Sting), 13. 7. 2005, CC BY-SA 2.5. Údaje jsou z kopie stránky (Wikipedia for Schools), ne z Commons. **Autor:** potvrdit na Commons, stáhnout soubor do `public/` a pak zapsat do `obrazky`. Prótagorás autentický portrét nemá, zůstává mince.

## Obsah bloků (P5)

30. 9. 2026. Ukázky na `/dilna/bloky/` stojí jen na ověřeném obsahu. Tohle bloky potřebují, aby mohly do cest a profilů:

| Blok | Co chybí | Kde hledat | Stav |
| --- | --- | --- | --- |
| Spor Platón × Diogenés (`src/content/bloky/platon-diogenes-skutecnost.yaml`) | Diogenova strana a Platónova odpověď | Diogenés Laertios VI, 53 | ověřeno 1. 10. 2026 (`docs/podklady/spor-platon-diogenes.md`); otevřené: porovnat vlastní převod s českým překladem A. Koláře |
| Tentýž Spor | Platónův argument pro ideje šířeji vlastními slovy (teď teze z dat, jeskyně a odpověď z DL VI, 53) | Ústava VI–VII (úsečka, jeskyně), Faidón 74a–75b (rovnost sama) | stačí pro ukázku; rozšířit při profilu Platóna |
| Cesta 1 „Kdy mám dobrý důvod věřit?“ | Prótagorás (druhý filozof cesty podle architektury): život, „člověk je měřítkem všech věcí“ a spor se Sókratem | DK 80 B1, Platón, Theaitétos 152a; SEP „Protagoras“ | ověřeno 1. 10. 2026 (`docs/podklady/celek-1-pravda.md`): život, B1, B4, konec života, spor z Theaitéta, nový případ (šaty 2015) |
| Změň jednu věc „Útěk z vězení“ | Sókratovy vlastní důvody, proč neutekl, pro oddíl „Co udělal Sókratés“ | Platón, Kritón 45a–46a (Kritónova nabídka), 50a–54d (řeč Zákonů) | ověřeno 1. 10. 2026 (`celek-1-pravda.md`, kapitola 05: Kritón 44b–46a, 49a–e, 50a–54d); dopsáno do „Co udělal Sókratés“ 1. 10. 2026 (P7); blok stojí v kapitole 05 portrétu |
| Změň jednu věc (další ukázka) | Gygův prsten jako klasický pokus pro cestu 2 | Platón, Ústava II, 359c–360d | nezačato |
| Odkryj „Koho považuješ za moudrého?“ | Modelové odpovědi a sebekontrola jsou autorské (nejde o historická tvrzení); projít revizí (`atlas-revize`) před vložením do profilu | — | jen v dílně |
| Kdo žil dřív? | Nic; roky jsou z dat | — | hotovo |

## Celek 1 „Jak poznám, co je pravda?“ (P6)

1. 10. 2026. Podklady jsou v `docs/podklady/celek-1-pravda.md`. Otevřené zůstalo:

| Bod | Proč | Co udělat |
| --- | --- | --- |
| Nikiás jako generál (Lachés, rámec) | Dialog ho jako velitele nepředstavuje, Thúkydida jsem neotevřel. | Ve studentském textu ho nenazývat velitelem, nebo doložit z Thúkydida. |
| Dramatické datum dialogu Prótagorás | Neověřeno; pro text není potřeba. | Neuvádět rok setkání. |
| Velikost poroty a počty hlasů u Diogena Laertia II, 41–42 | Prameny se rozcházejí, velikost poroty se jen dovozuje. | Ve studentském textu jen Obrana 36a (třicet hlasů). |
| ~~2. pád Pýthagorás, Anaxagorás~~ | **Vyřízeno 1. 10.:** autor rozhodl pro vzor pán, v datech Pýthagora, Anaxagora. | — |
| ~~Obrázek Sókrata~~ | **Vyřízeno 1. 10.:** autor licenci potvrdil a soubor stáhl; v datech jako `sokrates-louvre`. | — |

## Sókratův portrét a profil Prótagora (P7)

1. 10. 2026. **Vyřízeno týž den:** všechny body ověřené a zapsané v `celek-1-pravda.md` (oddíl Doplněno po P7); co text potřeboval, je v něm.

| Bod | Stav |
| --- | --- |
| ~~Asklépios~~ | Symposion 186e: zakladatel lékařství; v textu jedna věta, výklad posledních slov se nepodává. |
| ~~Pronásledovatelé honí ty, kdo utíkají bez hlavy~~ | Symposion 221b–c; v kapitole 03. |
| ~~Lachétovy další definice a Nikiova odpověď~~ | Lachés 192b–193c, 194d–199e; v kapitole 02, Nikiás bez jména („druhý rádce“). |
| ~~Mladí s nejvíc volného času~~ | Obrana 23c; v kapitole 02. |
| ~~Euthyfrón přesně ví, co je zbožné~~ | Euthyfrón 4e–5a; v kapitole 04. |
| ~~Kdo vznáší námitku o lodích a o obci~~ | Sókratés, Prótagorás 319b–d; v profilu Prótagora. |
| ~~Co je sofista~~ | SEP „The Sophists“; v úvodu profilu. |
| Obraz flétny korybantů (Kritón 54d) | Vynechán natrvalo; bez výkladu by studentům nic neřekl. |

Vědomě vynecháno podle doporučení v podkladech: počty hlasů u Diogena Laertia a velikost poroty, Platón okřiknutý porotou, potrestání žalobců, Platónova nemoc (Faidón 59b), bolehlav, Prótagorovo vyhnání, pálení knih a utonutí, Démokritos jako jeho učitel, Euathlos, částka sto min. Lachétův citát (Lachés 190e) je jen v nepřímé řeči, protože v `zdroje.yaml` není.

Po revizi autora vynechány i vedlejší postavy a popisy, které příběh nenesou (rozhodnutí 1. 10. 2026, „Jména střídmě“).

## Cesta 1 s Prótagorem a velká otázka 7 (P8)

1. 10. 2026. Všechna tvrzení v kroku 5 (Spor), v kroku 6 (šaty) a na stránce otázky 7 jsou z `celek-1-pravda.md`; nic nového k ověření nevzniklo. Otevřené zůstává:

| Bod | Proč | Co udělat |
| --- | --- | --- |
| Fotka šatů (#TheDress) | Licenci fotky jsem neověřoval; atlas ji proto neukazuje a případ stojí jen na popisu. | Pro animaci „posuvník předpokládaného světla“ (Po P7) použít vlastní kresbu, ne fotku. |
| Platón, Pyrrhón a Epikúros na stránce otázky 7 | Věty jsou ověřené (`celek-1-pravda.md`, Velká otázka 7), ale podle rozhodnutí z 1. 10. přibudou až s vlastním profilem. | Doplnit do `hlasy` v `src/content/otazky/jak-poznam-pravdu.mdx`, až profil vznikne. Citát `menon-98a` pro Platóna už je v datech. |

Vědomě vynecháno: Sókratův posměšek o praseti a paviánovi jako měřítku (Theaitétos 161c; podklad ho vede jen jako barvu, ne argument), jméno Prótagorova přítele z Theaitéta (nese jen rámec), prodej šatů a telefonáty výrobci, jména majitelky a výrobce šatů, Kdo žil dřív? Prótagorás × Sókratés (je v Prótagorově profilu).

## Revize celku 1 (P10)

1. 10. 2026. Otevřené po revizi (`docs/revize/celek-1-2026-10-01.md`):

| Bod | Proč | Co udělat |
| --- | --- | --- |
| Prótagorova odpověď na sebevyvrácení (Theaitétos 171a–d) | Spor v kroku 5 by ji mohl dát Prótagorovi místo argumentu „obce“; jde o výklad, který je mezi badateli sporný (M. Burnyeat 1976 hájí Platónův argument). | Ověřit v SEP „Protagoras“ a u Burnyeata; teprve pak rozhodnout o záměně argumentu. |
