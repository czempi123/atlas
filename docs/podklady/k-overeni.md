# K ověření

29. 9. 2026 · P2. Co se při zakládání dat období 1 a 2 nepodařilo ověřit, a proto to v `src/data/` zatím není. Každý bod má návrh, co s ním. Postup ověřování je v `docs/podklady/data-obdobi-1-2.md`.

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
| Prótagorás ↔ Sókratés | Setkání známe jen z Platónova dialogu Prótagorás; historičnost jsem neověřil. |
| Aspasie ↔ Sókratés | Britannica zmiňuje jen Aischinův dialog Aspasie. |
| Leukippos → Démokritos | Leukippos zatím není v datech (vztah SEP: „druh nebo učitel“). |
| Démokritos → Epikúros (vliv textem) | Přes Nausifana; Nausifanés není v datech. |
| Ammónios Sakkás → Plótínos, Theón → Hypatia, Hypatia → Synesios | Učitelé a žáci zatím nejsou v datech (prameny: SEP Plotinus, BEA Hypatia). |

## Citáty a překlady

- **Obrana 38a a 21d:** autor 30. 9. 2026 rozhodl, že zůstává vlastní převod (zapsáno v `zdroje.yaml`). Novotného překlad se nepřebírá.
- **Kapitola 01 Delfy** odkazuje na Obranu 20e–22e; čísla stran jsem ověřil přes SEP (20e–23b) a Jowettův překlad bez Stephanova číslování. Při revizi (P10) zkontrolovat po odstavcích proti řeckému vydání (Burnet, OCT).

## Obrázky

- Wikimedia Commons nebyl při zakládání dostupný, proto atlas zatím žádný obrázek nemá a desky ukazují minci s atributem. Kandidát pro Sókrata: římská mramorová busta z Louvru; ověřit autora fotografie, licenci a inventární číslo.

## Obsah bloků (P5)

30. 9. 2026. Ukázky na `/dilna/bloky/` stojí jen na ověřeném obsahu. Tohle bloky potřebují, aby mohly do cest a profilů:

| Blok | Co chybí | Kde hledat | Stav |
| --- | --- | --- | --- |
| Spor Platón × Diogenés (`src/content/bloky/platon-diogenes-skutecnost.yaml`) | Diogenova strana: anekdota o stolu a „stolovosti“ (Platón mluví o idejích, Diogenés vidí stůl, ne stolovost), český převod a přesné místo | Diogenés Laertios VI, 53 (vydání Hicks, Loeb; český překlad Diogenés Laertios, *Životy, názory a výroky proslulých filozofů*) | blok je v `kOvereni`, jen v dílně |
| Tentýž Spor | Platónův nejsilnější argument pro ideje vlastními slovy (zatím jen teze z `lide.yaml`) | Ústava VI–VII (úsečka, jeskyně), Faidón 74a–75b (rovnost sama) | tamtéž |
| Změň jednu věc „Útěk z vězení“ | Sókratovy vlastní důvody, proč neutekl, pro oddíl „Co udělal Sókratés“ | Platón, Kritón 45a–46a (Kritónova nabídka), 50a–54d (řeč Zákonů) | v bloku zatím jen ověřený fakt z atributu |
| Změň jednu věc (další ukázka) | Gygův prsten jako klasický pokus pro cestu 2 | Platón, Ústava II, 359c–360d | nezačato |
| Odkryj „Koho považuješ za moudrého?“ | Modelové odpovědi a sebekontrola jsou autorské (nejde o historická tvrzení); projít revizí (`atlas-revize`) před vložením do profilu | — | jen v dílně |
| Kdo žil dřív? | Nic; roky jsou z dat | — | hotovo |
