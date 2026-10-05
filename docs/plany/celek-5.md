# Plán větve celek-5: „Stačí vědět, co je správné?“

Celek 5: portrét Aristotela, cesta 4 „Stačí vědět, co je správné?“ (období 1, velká otázka 1 „Jak mám žít?“) a doplnění stránky otázky 1, která už stojí. Rozsah zvolil Claude 5. 10. 2026 na pokyn autora „vybrat další celek a připravit ho“; autor ho může změnit, dokud neproběhne P6. Aristotelés je v datech portrét a mluví na čtyřech stránkách otázek, ve dvou Sporech a v portrétu Platóna, pořád bez vlastní stránky. Po něm má období 1 všechny tři portréty a cesta 4 odpovídá Sókratovi z celku 1, podle kterého dobře jedná ten, kdo ví, co je dobré. Podklady vzniknou v `docs/podklady/celek-5-staci-vedet.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | připraveno 5. 10. 2026, zadání níže |
| P7 | Portrét Aristotela | po P6 |
| P8 | Cesta 4 „Stačí vědět, co je správné?“ a doplnění stránky velké otázky 1 | po P7 |
| P10 | Revize celku | po P8 |
| Opravy | Zapracování nálezů revize | po P10 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po opravách |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-5.md`. Větev `celek-5` je založená z hlavní větve 5. 10. 2026 (commit `96c942b`, po sloučení celku 4, `rozhrani-v2` a `kresby-ctverec`).

## Co si celek nese z celků 1 až 4

- **Co už v atlasu o Aristotelovi je:**
  - V datech (`lide.yaml`): portrét, období 1, směr peripatetici, otázky 1, 6, 10 a 7, linie věda a společnost, místa Stageira, Athény (studium asi 367–347 př. n. l.), Assos, Lesbos, Pella (asi 343–341), Athény (335–323) a Chalkis, atribut váhy („Ctnost je střed mezi dvěma krajnostmi“). Vztahy: Platón (učitel a polemika o ideje), Theofrastos. Obrázek nemá. Otázka 4 mu v datech chybí, ačkoli na její stránce mluví.
  - Hlas na čtyřech stránkách otázek: otázka 1 (štěstí je činnost, „jednat dobře, a to po celý život“), otázka 4 (kdy člověk za svůj čin může), otázka 6 (začíná u smyslů), otázka 7 (odpověď Prótagorovi).
  - Dva Spory: cesta 5, krok 5, Epiktétos × Aristotelés (vnější dobra a hněv; Etika Nikomachova 1099a–1101a, 1125b–1126a, 1153b) a cesta 3, krok 5, Platón × Aristotelés (ideje a jednotlivé věci). Tyto argumenty si celek 5 nebere podruhé.
  - Portrét Platóna: příchod do Akademie asi v sedmnácti, dvacet let, odmítnutí idejí, věta z Etiky Nikomachovy I, 6 a rčení o příteli Platónovi.
  - V `zdroje.yaml` jsou prameny `aristoteles-etika`, `-etika-stesti`, `-etika-iii`, `-etika-i-6`, `-metafyzika`, `-metafyzika-ideje`, `-politika-ii`, `-kategorie`, `-meteorologika` a citáty `etika-1096a`, `-1097a`, `-1098a`, `-1099a`, `-1100b`, `-1114a`, `-1126a`, `-1153b`, `-1155a`. Stránka směru `src/content/smery/peripatetici.md` existuje.
- **Stránka otázky 1 „Jak mám žít?“ už stojí** (celek 2) a Aristotelés je na ní prvním hlasem. Celek proto nezakládá novou stránku otázky; P8 na ni přidá cestu 4 a rozhodne, jestli se Aristotelův hlas má změnit.
- **Alexandr Makedonský v datech není** a nové osoby se zatím nepřidávají (rozhodnutí autora z 2. 10. 2026, `k-overeni.md`). Vstupní příběh cesty ho potřebuje: zůstane v textu bez odkazu a bez vztahu v datech.
- **Otevřené body z `k-overeni.md`, které čekají na tento celek:** jak česky podat ctnost (areté); Bekkerovy řádky u Kategorií 5; Metafyzika I, 1 (kolem 981a) jako Aristotelova odpověď ve Sporu cesty 3; kdy Aristotelés napsal kritiku idejí.
- **Největší riziko celku je kázání.** „Zlatý střed“ zní jako „všeho s mírou“ a návyk jako rada z třídnické hodiny. Střed podle Aristotela není průměr a nemá ho každý stejně; návyk není dril. Student, který řekne „vím, co je správné, a stejně to neudělám“ nebo „kdo určí, kde je střed?“, musí v cestě najít myslitele, který mu dá za pravdu. Druhé riziko je vstupní příběh: o tom, co Aristotelés Alexandra opravdu učil, víme málo a vyprávějí to autoři o staletí mladší.
- **Citlivá místa:** otroctví „od přírody“ a postavení žen v Politice. Podklady je sepíšou zvlášť; atlas má navíc portrét Epiktéta, který otrokem byl.
- **Překryvy, kterým se vyhnout:** cesta 10 (Augustin, „Proč dělám, co nechci?“), cesta 34 (Seneca a čas), cesta 6 (Epikúros a třídění tužeb), Spor cesty 5.
- **Kresba s pohybem:** autor ji chce v atlasu častěji (4. 10. 2026). Tady se nabízí střed, který se posouvá podle člověka a situace; podklady navrhnou, kde má smysl.
- **Poučení z revizí** je v `docs/pouceni.md`.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“ (pole `zacatek` v přehledu cesty) a Návrat s novým případem v deníku. Cesta 4 potřebuje blok, který bude jejím začátkem, a jeden případ pro Návrat.
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026): žádné „napiš osnovu a počkej“. Předem se ptá jen na stahování obrázků, nové osoby, slučování a GitHub.

## Zadání P6: Podklady k celku 5 „Stačí vědět, co je správné?“

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Sonnet 5.5 · high s vyhledáváním; u sporných pramenů (výchova Alexandra, odchod z Athén a smrt, závěť, podvržené výroky) Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pracuj ve větvi celek-5; je založená z hlavní větve po sloučení celku 4.

Přečti CLAUDE.md, docs/styl.md, docs/pouceni.md a docs/plany/celek-5.md (tabulka stavu a Co si celek nese z celků 1 až 4). V docs/architektura.md jen velkou otázku 1 a řádky cest 4, 10 a 34. V docs/podklady/k-overeni.md jen řádky, kde je Aristotelés nebo Alexandr (najdi je grepem). Jako vzor podkladového listu si z docs/podklady/celek-4-co-je-skutecne.md vypiš nadpisy a přečti jeden oddíl. Co atlas o Aristotelovi už říká, najdeš v src/content/otazky/jak-zit.mdx, src/content/bloky/cesta5-aristoteles-spor.yaml, src/content/bloky/cesta3-aristoteles-spor.yaml a v portrétu Platóna (grep „Aristotel“); nic z toho neopakuj. Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 5 „Stačí vědět, co je správné?“. Studentský text zatím nepiš.

1. Aristotelés pro portrét: život (Stageira a otec lékař u makedonského dvora, příchod do Akademie a dvacet let u Platóna, odchod po jeho smrti, Assos a Hermeiás, Pýthias, Lesbos a pozorování živočichů s Theofrastem, výchova Alexandra, návrat do Athén a Lykeion, Alexandrova smrt, obžaloba a odchod do Chalkidy, smrt, závěť u Diogena Laertia V, 11–16). U každého příběhu zjisti, kdo ho vypráví a jak dlouho po Aristotelovi; označ, co je doložené, co tradované a co podezřelé: procházky při výuce a jméno peripatetici, věta o tom, že nedá Athéňanům zhřešit na filozofii podruhé, co se stalo s jeho spisy. Řekni, co z jeho díla máme (přednášky, ne dialogy) a jak o tom psát. Myšlenky: navrhni nejvýš tři pro portrét, každou s vlastním pokusem studenta, a vyber je tak, aby neopakovaly hlasy na stránkách otázek 1, 4, 6 a 7 ani oba Spory. Kandidáti: pozorovat a třídit dřív než soudit (živočichové z Lesbu), čtyři otázky „proč“, účel, úsudek a jeho stavba, tři druhy přátelství (Etika Nikomachova VIII, 2–4), člověk jako tvor obce (Politika I, 2). Ke každé nejsilnější verze a nejsilnější námitka. Ověř výroky, které se mu připisují: „Jsme to, co opakovaně děláme“ (podle všeho Will Durant 1926, ne Aristotelés), „Jedna vlaštovka jaro nedělá“, „Kořeny vzdělání jsou hořké“, „Platón je mi přítel“ (už ověřeno v celku 4). Rozhodni otevřené body z k-overeni: jak česky podat areté, Bekkerovy řádky u Kategorií 5, Metafyzika I, 1 (981a) a kdy psal kritiku idejí.

2. Cesta 4 „Stačí vědět, co je správné?“. Vstupní příběh: Aristotelés vychovává mladého Alexandra (Plútarchos, Alexandros 7–8; Mieza). Zjisti, co prameny opravdu říkají, co Alexandra učil a jak dlouho, a kdo to vypráví. Zjisti i to, co se stalo potom (Kleitos, Kallisthenés: Plútarchos, Alexandros 50–55; Arriános IV), a navrhni, jestli se tím dá otázka cesty otevřít poctivě: žák nejslavnějšího učitele etiky neudělal vždy, co je správné. Netvrď, že ho Aristotelés učil etice, pokud to pramen neříká. Jádro: ctnost vzniká jednáním, ne poučením (Etika Nikomachova II, 1 a II, 4: stavitelem se stáváme stavěním; lidé, kteří poslouchají lékaře a nedělají, co říká), střed vzhledem k nám (II, 6, zápasník Milón), slabá vůle (VII, 1–3) a proč podle něj řeči samy nestačí (X, 9). Skutečný střet pro blok Spor: Sókratés × Aristotelés. Sókratés v Platónově Prótagorovi (352b–358d) tvrdí, že kdo ví, co je dobré, nejedná proti tomu; Aristotelés ho jmenuje a odpovídá (1145b21–28). Obě strany v nejsilnější verzi, každá s odpovědí na nejsilnější námitku druhé; u Sókrata řekni, kdo v dialogu mluví. Vlastní pokus studenta před výkladem: navrhni blok, který bude i začátkem cesty pro panel Na začátku × Teď (chvíle, kdy jsem věděl, co je správné, a neudělal to; bez přiznání, která by student nechtěl mít uložená). Nový případ ze současnosti: najdi doložený výzkum, který se dá vyprávět přímo (jak dlouho trvá, než se z jednání stane návyk; co pomáhá udělat to, co si člověk předsevzal), a řekni poctivě, co ukázal a co ne; kdyby vyvracel oblíbenou poučku (21 dní), tím líp. Druhá možnost je „Představ si…“ bez skutečných osob. Navrhni případ pro Návrat a místo pro kresbu s pohybem (střed, který se posouvá podle člověka a situace), pokud tam má smysl. Mysli na tón: žádné kázání, střed není průměr, návyk není dril. Řekni, kdo dá za pravdu studentovi, podle kterého vědět stačí, a kdo tomu, podle kterého střed nikdo neurčí. Podle oddílu Student, kterého se téma bolestně týká v docs/pouceni.md posuď, koho může řeč o návyku a slabé vůli zranit (závislost, jídlo, odkládání) a jak to cesta ošetří. Hlídej překryv s cestou 10 (Augustin), 34 (Seneca) a 6 (Epikúros).

3. Velká otázka 1 „Jak mám žít?“: stránka stojí a Aristotelés je na ní prvním hlasem. Navrhni, jestli jeho hlas nechat, nebo po cestě 4 upravit, a co na stránku přibude. Novou stránku otázky celek nezakládá.

4. Citlivá místa: otroctví „od přírody“ (Politika I, 4–7) a ženy. Sepiš je zvlášť a u každého navrhni, jestli patří do studentského textu, učiteli, nebo nikam; počítej s tím, že atlas má portrét Epiktéta.

5. Obrázky: podobizna Aristotela (římská kopie řecké busty) a obraz pro vstupní scénu cesty, z muzeí s otevřeným přístupem; autor, instituce, licence a odkaz. U pozdějšího zobrazení Aristotela s Alexandrem řekni, čí je to představa a z kdy. Zatím nic nestahuj, jen navrhni dva až tři kandidáty; o stažení rozhodnu já.

6. Data: navrhni, co doplnit Aristotelovi v src/data (otázka 4, roky u míst, prameny, obrázek) a které vztahy přibudou. Nové osoby nepřidávej; koho příběh potřebuje a v datech není (Alexandr, Filip, Hermeiás, Pýthias, Kallisthenés), zůstane v textu bez odkazu.

Výstup: podkladový list docs/podklady/celek-5-staci-vedet.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny jako v celcích 1 až 4; kde existuje český překlad, uveď ho pro srovnání), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí).

Pravidla jako u celku 4: každé historické tvrzení a citát se zdrojem; u každého shrnutí pramene drž rozdíly, které pramen dělá; doporučená formulace nesmí být silnější než tvrzení („asi“ zůstává „asi“); tradované jako tradované, výklad jako výklad. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Osnovu mi neposílej a na schválení nečekej. Kde váháš (které tři myšlenky, jaký Spor, jaký nový případ, co s hlasem na otázce 1), zvol nejlepší cestu a pracuj. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš stav do docs/plany/celek-5.md (oddíl Po P6), připrav tam zadání P7 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-5.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co je ověřeno, co zůstalo otevřené, nad čím jsi váhal a co jsi zvolil, a co potřebuje moje rozhodnutí (obrázky ke stažení).
```
