# Plán větve celek-2: „Jak mám žít?“

Celek 2: velká otázka 1, cesta 6 „Kolik je dost?“, profil Epikúra a profil Diogena. Podklady jsou v `docs/podklady/celek-2-jak-zit.md`, rozhodnutí v `docs/rozhodnuti.md`, otevřené body v `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo a schváleno 2. 10. 2026 |
| P7 | Profily Epikúra a Diogena | hotovo a schváleno 2. 10. 2026 |
| P8 | Cesta 6 „Kolik je dost?“ a stránka velké otázky 1 | hotovo a schváleno 2. 10. 2026 (i s úpravami vstupů a rozvržení cesty) |
| P10 | Revize celku | hotovo 2. 10. 2026; všech devět nálezů schváleno a zapracováno (`docs/revize/celek-2-2026-10-02.md`) |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | **další krok** |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`.

## P6: Podklady k celku 2 „Jak mám žít?“

**Stav 2. 10. 2026:** hotovo a schváleno, podklady v `docs/podklady/celek-2-jak-zit.md` (větev `celek-2`), rozhodnutí v `docs/rozhodnuti.md`. Zadání, se kterým P6 proběhl: Celek 2 tvoří velká otázka 1 „Jak mám žít?“, cesta 6 „Kolik je dost?“, profil Epikúra a profil Diogena jako protihlas: oba žijí s málem, každý z jiného důvodu (Epikúros kvůli klidu a přátelům, Diogenés kvůli svobodě od všeho, co není potřeba). Stoici zazní na stránce otázky, celek s Epiktétem (cesta 5) přijde hned potom. Rozhodnuto 1. 10. 2026 (`docs/rozhodnuti.md`).

Postup jako u celku 1: P6 podklady, P7 profily (`atlas-osobnost`), P8 cesta a stránka otázky (`atlas-cesta`), P10 revize, schválení autorem. Poučení z revize celku 1 (`docs/revize/celek-1-2026-10-01.md`) platí od začátku: shrnutí pramene drží jeho rozdíly, Spor dá oběma stranám odpověď, každý hlas na stránce otázky se pozná.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Sonnet 5.5 · high s vyhledáváním; u sporných pramenů (Epikúrovy zlomky, kynické anekdoty u Diogena Laertia) Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Z větve main založ větev celek-2.

Přečti CLAUDE.md, docs/styl.md, v docs/architektura.md velkou otázku 1, cestu 6 a cestu 7 (Diogenés, aby se celky nepřekrývaly), docs/podklady/k-overeni.md, hotový podkladový list docs/podklady/celek-1-pravda.md jako vzor a docs/revize/celek-1-2026-10-01.md (co se v celku 1 nepovedlo). Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 2 „Jak mám žít?“. Studentský text zatím nepiš.

1. Epikúros pro profil: život (Samos, Athény, Zahrada a kdo v ní žil, včetně žen a otroků), slast jako klid (ataraxia a aponia), co je potřeba a co ne (přirozené a nutné touhy), přátelství, chléb a voda a hrnek sýra. Prameny: Diogenés Laertios X (Dopis Menoikeovi, Hlavní myšlenky), Vatikánské výroky, SEP „Epicurus“. Jak ho zkreslila pověst „epikurejce“, a jeho nejsilnější argument v jeho vlastní nejsilnější verzi.
2. Diogenés pro profil: život (Sinópé, vyhnanství, Athény, Korinth), sud, miska, lucerna, Alexandr, žít podle přírody a bez studu; co je doložené, co tradované a co jen pozdní anekdota. Prameny: Diogenés Laertios VI, SEP „Cynics“ / „Diogenes of Sinope“. Příběh s Alexandrem patří i cestě 7: navrhni, co si nechá profil a co cesta 7.
3. Cesta 6 „Kolik je dost?“: vstupní scéna z Epikúrovy zahrady, skutečný střet Epikúros × Diogenés nebo kynici pro blok Spor (obě strany v nejsilnější verzi; ověř, co Epikúros říká o kynicích, např. Diogenés Laertios X, 119), a nový případ ze současnosti, na kterém se dá spor vyzkoušet (doložená událost, nebo „Představ si…“ bez historických osob).
4. Velká otázka 1: pro hlasy Aristotelés, Diogenés, Epikúros a jeden stoik (Epiktétos nebo Seneca) jedna ověřená myšlenka o tom, jak žít, se zdrojem, a citát, který patří téže osobě. Navrhni úvodní případ ze života studenta („Představ si…“), na který odpoví všichni čtyři a každý jinak.
5. Obrázky: Epikúros a Diogenés (busty, Commons), autor fotografie, instituce, licence a odkaz.

Výstup: podkladový list docs/podklady/celek-2-jak-zit.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny jako v celku 1), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí).

Pravidla jako u celku 1, s poučením z revize: každé historické tvrzení a citát se zdrojem; u každého shrnutí pramene drž rozdíly, které pramen dělá; výklad, o kterém se badatelé přou, smí do textu, když slouží pointě a podává se jako výklad. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Nejdřív mi v pár bodech napiš, co budeš ověřovat, které příběhy považuješ za nejsilnější a jaký Spor a nový případ navrhuješ, a počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci napiš, co je ověřeno, co zůstalo otevřené a co potřebuje moje rozhodnutí.
```



## Po P6: co zůstalo na později

- Spor v cestě 6 je Epikúros × kynici (ne smyšlené setkání s Diogenem); oba nové případy jsou samostatné kroky (měsíc na minimum, studie o penězích a štěstí). Krok se studií potřebuje vlastní jednoduchý graf (`atlas-komponenta`).
- Kresba `diogenes-poharek` je na výšku, deska bloku Příběh má 4 : 3: výřez, nebo poměr desky na výšku.
- Alexandr u Diogena patří cestě 7 (Plútarchos, Alexandr 14, a Arriánova věta o touze po slávě); profil ho zmíní jednou větou. Spor Platón × Diogenés zůstává v Sókratově portrétu, profil Diogena na něj jen odkáže.
- Umírající Epikúros a dopis Idomeneovi patří cestě 8; Senekova nabídka Neronovi (Tacitus) portrétu Seneky.
- Mince ze Sinópy se jménem Hikesios: datace nesedí, do textu jen aféra s mincemi (`k-overeni.md`).
- Nové osoby (Leontion, Themista, Metrodóros, Alexandr) až dodatečně, až bude vše hotové.

## P7: Profily Epikúra a Diogena

**Stav 2. 10. 2026:** hotovo a schváleno. Profily `src/content/osobnosti/epikuros.mdx` (tři kapitoly) a `diogenes.mdx` (čtyři kapitoly), každý s Volbou, Odkryj, dvěma myšlenkami a Zkus to žít; u Diogena blok Příběh s kresbou a druhý Odkryj „Co je člověk?“. Při práci přibylo: deska na výšku a vlastní výřez obrázku, rozvržení Příběhu podle šířky místa, mini mapa podle míst osoby. Rozhodnutí v `docs/rozhodnuti.md`, vynechané a neověřené v `k-overeni.md` (oddíl P7). Zadání, se kterým P7 proběhl:

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-2; podklady z P6 jsou v ní.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-2-jak-zit.md (Nejsilnější příběhy, Tvrzení s doporučenými formulacemi, Diogenés a Alexandr, Citáty se sloupcem Kde použít, Obrázky, Rozpory a rozhodnutí), docs/rozhodnuti.md (záznamy z 1. a 2. 10. 2026), docs/revize/celek-1-2026-10-01.md a hotové stránky src/content/osobnosti/protagoras.mdx a sokrates.mdx jako vzor. Postupuj podle skillu atlas-osobnost.

Napiš:

1. Profil Epikúra src/content/osobnosti/epikuros.mdx: úvod scénou (čtrnáctiletý Epikúros a učitelé, kteří mu neuměli vysvětlit Hésiodův chaos; rodina, která přišla o domov na Samu), Zahrada a kdo v ní žil (přátelé odevšad, otroci, ženy; majetek nesdíleli, protože přátelství stojí na důvěře), slast jako klid a její strop, tři druhy tužeb s vlastním pokusem studenta, přátelství, pověst „epikurejce“ (Dopis Menoikeovi 131 a Senekovo svědectví). Dvě velké myšlenky s vlastním pokusem, Zkus to žít, Kam dál (cesta 6, cesta 8, velká otázka 1). Obrázek epikuros-met je v datech.

2. Profil Diogena src/content/osobnosti/diogenes.mdx: úvod mincemi ze Sinópy a věštbou „změň ražbu“ (mince i zvyk), nosná scéna je dítě, které pije z dlaní (citát dl-vi-37, kresba diogenes-poharek v bloku Příběh), dál myš, pithos (velká hliněná nádoba, ne sud), lucerna („Hledám člověka“), občan světa, prodej do otroctví. Žít podle přírody, ne podle zvyku. Alexandr jen jednou větou s odkazem na cestu 7; Spor Platón × Diogenés neopakuj, odkaž na Sókratův portrét. Dvě velké myšlenky s vlastním pokusem, Zkus to žít, Kam dál (cesta 6, cesta 7, velká otázka 1). Na desce je dřevořez diogenes-carpi: text může ukázat, že sud je až představa renesance.

Co do profilů nepatří, protože to nese cesta 6 nebo stránka otázky 1: nápis na Zahradě a správce (Seneca 21, 10), Spor s kyniky a jeho citáty (dl-x-119, menoikeus-130, dl-vi-104, dl-vi-71), studie o penězích (kd-15, vs-68), hrnek sýra (dl-x-11-syr, pointa scény v cestě 6), citáty stránky otázky (menoikeus-132, dl-vi-44). Umírající Epikúros patří cestě 8.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml. Diogenovy anekdoty uváděj „Vypráví se…“, Senekův popis Zahrady „Seneca popisuje…“. U každého shrnutí pramene drž rozdíly, které pramen dělá (ječná placka × chléb, pohárek × miska, pithos × sud). Jména střídmě: Leontion, Themistu, Mya ani Xeniada nejmenuj, pokud nenesou myšlenku. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); obě stránky si prohlédni v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu (hlavně jak desky ořezávají nové obrázky); projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš, jakou scénou otevřeš každý profil, jaké kapitoly a bloky v něm budou a které citáty použiješ, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci pošli snímky obou stránek a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

Po P7 následuje P8 (cesta 6 „Kolik je dost?“ se Sporem Epikúros × kynici a dvěma novými případy, stránka velké otázky 1 se čtyřmi hlasy; plné znění níže v tomto souboru) a P10 (revize celku skillem `atlas-revize`).

## Po P7: co zůstalo na později

- **Odkazy, které čekají na stránky.** Kam dál obou profilů zatím nevede na cestu 6, 7 ani 8 a otázka 1 míří na řádek v přehledu `/otazky/#jak-zit`. V P8 doplnit do obou profilů cestu 6 a přepojit otázku 1 na `/otazka/jak-zit/`. Až vznikne cesta 7, přidat ji do Kam dál Diogena a k větě o Alexandrovi v kapitole 03; až vznikne cesta 8, do Kam dál Epikúra.
- **Hloubka v datech.** Epikúros a Diogenés mají `hloubka: profil`; `docs/architektura.md` s nimi počítá jako s portréty. Vrátit na `portret`, až portrét vznikne.
- **Cesta 6 se nesmí opakovat po profilech:** tři druhy tužeb jsou v profilu Epikúra vyložené (s příklady ze scholia), cesta má třídění do tří košů; strop slasti je v kapitole 02 jednou větou a v Myšlence 1. Dny skrovného jídla, hrnek sýra a nápis na Zahradě profil nepoužil.
- Popisky na mini mapě počítají s většími písmy na telefonu; na notebooku proto kolem míst zbývá víc místa, než je nutné. Doladit, až bude profilů s místy mimo Egejské moře víc.

## P8: Cesta 6 „Kolik je dost?“ a stránka velké otázky 1

**Stav 2. 10. 2026:** hotovo a schváleno autorem i s úpravami po P8 (oddíl níže). Vzniklo: graf křivek (`GrafKrivek`), nový blok Roztřiď s přetahováním (rozhodnutí autora nad osnovou), označení strany ve Sporu, cesta 6 o sedmi krocích, stránka otázky 1 se čtyřmi hlasy, karta cesty v profilu Epikúra, Kam dál obou profilů a hlas Epikúra na stránce otázky 7. `npm test` prošlo celé (243 testů dat, 130 v prohlížeči). Co zůstalo, je v oddílu „Po P8“ níže.

**Zadání (pro záznam).** P7 je schválený, podklady k cestě 6 (scéna v Zahradě, Spor Epikúros × kynici, oba nové případy) a k velké otázce 1 jsou v `docs/podklady/celek-2-jak-zit.md`. Pracuje se dál ve větvi `celek-2`; po P8 následuje revize celku (P10) a schválení autorem.

Krok se studií potřebuje vlastní graf, proto P8 začíná komponentou (skill `atlas-komponenta`) a teprve potom přijde obsah (skill `atlas-cesta`). Šablona stránky velké otázky je hotová z celku 1.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high (xhigh, když se zasekne graf).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-2; profily Epikúra a Diogena z P7 jsou v ní hotové a schválené.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-2-jak-zit.md (Čeho se drží celý celek, Tvrzení: cesta 6, Spor Epikúros × kynici, Nový případ A a B, Velká otázka 1, Citáty se sloupcem Kde použít, Rozpory a rozhodnutí), docs/podklady/k-overeni.md (oddíly Celek 2 a P7), docs/rozhodnuti.md (záznamy z 1. a 2. 10. 2026), docs/revize/celek-1-2026-10-01.md, v docs/plany/celek-2.md oddíl „Po P7“, v docs/architektura.md velkou otázku 1 a cesty 5 až 8, v docs/design.md oddíly Bloky, Cesta a Velká otázka, hotovou cestu 1 (src/content/cesty/kdy-mam-dobry-duvod-verit*), stránku otázky 7 (src/content/otazky/jak-poznam-pravdu.mdx) a oba nové profily (src/content/osobnosti/epikuros.mdx a diogenes.mdx), ať se v celku nic neopakuje. Postupuj podle skillu atlas-cesta, u grafu podle skillu atlas-komponenta.

Udělej:

1. Graf ke studii o penězích a štěstí (skill atlas-komponenta): vlastní jednoduchá kresba dvou křivek podle studie Killingswortha, Kahnemana a Mellersové z roku 2023 (pramen kkm-2023, tab. 1 a obr. 2). U většiny lidí štěstí s příjmem roste dál; u nejméně šťastné asi pětiny se nad zhruba 100 000 dolary ročně zastaví. Graf ze studie se nesmí kopírovat. Popisky česky, čitelné na 390 px, ve světlém i tmavém režimu, s textovou alternativou pro čtečky. Čísla jen ta, která jsou v podkladech.

2. Cestu 6 „Kolik je dost?“ (období 2, velká otázka 1, filozofové Epikúros a Diogenés, do 20 minut, 6 až 8 kroků). Pořadí navržené v podkladech: scéna v Zahradě (nápis, správce, ječná kaše a voda podle Seneky; pointa hrnek sýra; citáty seneca-ep-21-10 a dl-x-11-syr) → vlastní pokus: věci ze studentova týdne do tří košů tužeb → Epikúros o stropu slasti → Spor Epikúros × kynici bez smyšleného setkání s Diogenem (citáty dl-vi-104, dl-vi-71, menoikeus-130, dl-x-119; Epikúrovy dny skrovného jídla, seneca-ep-18-9) → krok „Představ si… měsíc na minimum“ → krok se studií o penězích a štěstí a s grafem (citáty kd-15 a vs-68; výhrady ke studii patří do zpětné vazby) → vlastní pravidlo „Kolik je dost?“ (Moje stanovisko s rozbalene). Kartu cesty dej do profilu Epikúra tam, kde na ni text navazuje, a na stránku otázky 1; na Domů zůstává jedna doporučená cesta.

3. Stránku velké otázky 1 „Jak mám žít?“ (src/content/otazky/jak-zit je zatím jen řádek v přehledu; doplň ji podle vzoru otázky 7): úvodní případ „Představ si…“ (celé léto brigáda ve skladu, nebo tři týdny jako vedoucí na táboře s kamarády) a čtyři hlasy podle podkladů: Aristotelés (etika-1098a), Epikúros (menoikeus-132), Diogenés (dl-vi-44) a Seneca (vita-beata-26). U Seneky jedna věta o jeho bohatství; Tacitova scéna s Neronem zůstává pro jeho portrét.

4. Propojení: do Kam dál obou profilů doplň cestu 6 a otázku 1 přepoj z /otazky/#jak-zit na /otazka/jak-zit/. Na stránku otázky 7 přidej hlas Epikúra, protože už má profil (věta je ověřená v docs/podklady/celek-1-pravda.md, Velká otázka 7; pramen dl-x-31). Cesty 7 a 8 neexistují: neodkazuj na ně.

Co se po profilech nesmí opakovat:
- Tři druhy tužeb profil Epikúra vykládá na příkladech ze scholia (žízeň, drahé jídlo, socha) a zkouší na jednom studentově přání. Cesta má třídění do tří košů na věcech ze studentova týdne, s jinými příklady.
- Zahrada, kdo v ní žil, a společná pokladna jsou v profilu Epikúra. Scéna cesty stojí na Senekově popisu a na sýru.
- Dítě a pohárek, lucernu, kohouta, prodej do otroctví a občana světa nese profil Diogena. Spor a stránka otázky ukážou Diogena jinde: cvičení v nepohodlí, snadný život skrytý za medovými koláčky.
- Citáty z profilů (menoikeus-131-maza, menoikeus-131-slast, kd-27, vs-33, vita-beata-13, dl-vi-63, dl-vi-37, dl-vi-41, dl-vi-40) v cestě ani na stránce otázky nepoužívej.
- Každý hlas na stránce otázky se musí poznat: Aristotelés činnost a vnější dobra, Epikúros klid a přátelé, Diogenés zpochybní samu volbu, Seneca peníze mít smí, ale neslouží jim.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml (i řeč správce jen jako citát ze Seneky). Senekův popis Zahrady uváděj „Seneca popisuje…“, nikdy „na bráně stálo“; Diogenovy anekdoty „Vypráví se…“; vymyšlené situace „Představ si…“ bez historických osob; studii vyprávěj přímo jako doloženou událost. Drž rozdíly pramenů (ječná kaše u Seneky × ječná placka v Dopise Menoikeovi × chléb v dopisech; pithos × sud). Spor bez ohlášeného vítěze, obě strany dostanou odpověď na nejsilnější námitku druhé; domyšlené odpovědi podávej jako výklad („kynik by mohl namítnout“). Jména střídmě: adresáty dopisů, Epikúrovy žáky, Kratéta ani autory studie nejmenuj, pokud nenesou myšlenku. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky. Zpětná vazba vysvětluje důvod a ptá se dál, nikdy neříká, kdo má pravdu.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); stránku otázky 1 přidej do testů prohlídky; cestu projdi celou v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí, jednou i bez odkrytí bloků; projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš osnovu cesty 6 (kroky, blok v každém, odhad minut), návrh grafu (co je na osách a jak vypadá na telefonu) a čtyři odpovědi hlasů na úvodní případ, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích (graf, cesta, stránka otázky, propojení) a nic neposílej na GitHub. Na konci pošli snímky cesty a stránky otázky a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

## Po P8: úpravy podle autora (2. 10. 2026)

Autor P8 prošel: celek se mu líbí, dvě připomínky. Obě zapracované, `npm test` prošlo celé.

- **Cesta byla z profilu Epikúra nenápadná.** Nově má hlavička každého profilu vstupy „Cesty a otázky, kde potkáš …“ (deska cesty a tlačítka otázek, samy z dat), přehled otázek ukazuje u otázky její cesty, stránka Lidé u člověka jeho cestu a karta cesty má hlavní tlačítko. Zásada „nic nesmí zapadnout“ je v `docs/design.md` › Navigace a rozvržení.
- **Kroky cesty byly na notebooku přiražené doleva.** Krok i přehled cesty stojí na středové ose (text 680 px, bloky 960 px), lišta Předchozí / Další pod okraji bloku.

## Po P8: co zůstalo na později

- **Blok Roztřiď.** Karta položená v koši se vrací klepnutím a pak se položí znovu; přetáhnout ji rovnou z koše do koše nejde. Při tažení se stránka sama neposouvá; na telefonu leží koše hned pod kartou, takže to nevadí, u bloku s víc koši by to vadit mohlo. Obojí doplnit, až blok dostane druhé použití.
- **Graf křivek** je kresba směru bez čísel na osách a bez nápovědy po najetí. Kdyby měl ukazovat hodnoty (další dílky osy, třetí křivku nejšťastnějších), musí se čísla nejdřív ověřit v tabulce 1 studie (`k-overeni.md`).
- **Odkazy, které čekají na stránky:** cesta 7 (Kam dál Diogena, věta o Alexandrovi v kapitole 03) a cesta 8 (Kam dál Epikúra). Stránka otázky 1 ukáže další cesty sama, až vzniknou (cesty 4, 7, 16, 29 a 34 mají otázku 1).
- **Stránka otázky 1** má čtyři hlasy z období 1 a 2. Další hlasy z architektury (Montaigne, Komenský, Mill, Havel) přibudou se svými celky.
- **Skilly:** kopie `skills/atlas-cesta` a `skills/atlas-komponenta` jsou doplněné o poučení z P8 (Roztřiď, Spor se směrem, studie a graf, pasti při práci přes Desktop Commander). Verze uložené v účtu Claude je potřeba uložit z návrhu, který přišel s předáním P8.
- Běžící `npm run dev` po P8 potřebuje restart (změnilo se schéma bloků a cest).

Po P8 následuje P10 (revize celku 2 skillem `atlas-revize`); plné znění je níže.

## P10: Revize celku 2 „Jak mám žít?“

**Stav 2. 10. 2026:** revize hotová a všech devět nálezů zapracováno po schválení autorem („Nálezy schvaluju všechny“). Záznam i s tabulkou zapracování je v `docs/revize/celek-2-2026-10-02.md`, rozhodnutí v `docs/rozhodnuti.md`. Vedle textů přibylo: nezlomitelné mezery za jednopísmennými předložkami při sestavení (`src/lib/sazba.js`) a rozmístění popisků mini mapy bez překryvů (`umisteniPopisku`). `npm test` prošlo celé (259 testů dat, 137 v prohlížeči). **Další krok: schválení celku 2 autorem**, potom sloučení `celek-2` do hlavní větve a hlavní větev na GitHub. Zůstalo na později: tečky kroků v hlavičce cesty jsou na telefonu menší než 44 px; poučení z revize doplnit do skillů `atlas-cesta` a `atlas-komponenta`.

**Zadání (pro záznam).** P8 autor schválil i s úpravami po něm (vstupy v hlavičce profilu, středová osa cesty). Revize projde celý celek skillem `atlas-revize`: drobnosti opraví rovnou, zásahy do významu, příběhu a struktury jen navrhne a počká na rozhodnutí autora.

Celek je o penězích, věcech a o tom, kolik člověk potřebuje. Největší riziko proto není věcná chyba, ale tón: cesta nesmí studentovi naznačovat, že skromnější odpověď je ta lepší. Revize to má prověřit jako první.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-2.

Udělej revizi celku 2 „Jak mám žít?“ skillem atlas-revize. Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-2-jak-zit.md, docs/podklady/k-overeni.md (oddíly Celek 2, P7 a P8), docs/rozhodnuti.md (záznamy z 1. a 2. 10. 2026), docs/revize/celek-1-2026-10-01.md (vzor záznamu a chyby, které se nemají opakovat), v docs/plany/celek-2.md oddíly „Po P7“ a oba oddíly „Po P8“ a v docs/design.md oddíly Navigace a rozvržení, Bloky (hlavně Roztřiď a Spor), Cesta a Velká otázka.

Celek tvoří:
- profil Epikúra (src/content/osobnosti/epikuros.mdx, kapitoly 01–03) a profil Diogena (src/content/osobnosti/diogenes.mdx, kapitoly 01–04) s bloky epikuros-spolecna-kasa a diogenes-poharek,
- cesta 6 „Kolik je dost?“ (src/content/cesty/kolik-je-dost*, 7 kroků, bloky cesta6-* v src/content/bloky, graf v kroku 6),
- stránka velké otázky 1 (src/content/otazky/jak-zit.mdx, adresa /otazka/jak-zit/) a nový hlas Epikúra na stránce otázky 7,
- vstupy a návraty: Domů, přehled /otazky/ s cestami u otázek, Lidé a směry, vstupy v hlavičce profilu, karta cesty, Kam dál, Pokračuj a Můj deník.

Zvlášť zkontroluj:
1. Tlak na „správný“ život. Projdi zpětné vazby v Roztřiď (krok 2), u bundy (krok 3), v měsíci na minimum (krok 5), u studie (krok 6) a Zkus to žít obou profilů. Hodnotí důvody, nebo naznačují, že skromnější odpověď je lepší? Projde cestou student, který chce hodně vydělávat, bez pocitu, že odpovídá špatně?
2. Spor Epikúros × kynici v kroku 4: dostali kynici nejsilnější verzi, nebo jsou jen kulisa pro Epikúra? Má každá strana odpověď na nejsilnější námitku druhé? Jsou domyšlené odpovědi podané jako výklad? Nevyznívá Diogenova mince u označení „kynici“ jako setkání obou mužů?
3. Čtyři odpovědi na sklad a tábor na stránce otázky 1: poznal by se v nich každý (Aristotelés činnost a vnější dobra, Epikúros klid a přátelé, Diogenés zpochybní samu volbu, Seneca peníze mít smí, ale neslouží jim)? Nezní Epikúros a Seneca stejně? Funguje Diogenés jako první hlas? Nezkresluje věta o Senekově bohatství?
4. Shrnutí pramenů drží rozdíly: ječná kaše u Seneky × ječná placka v Dopise Menoikeovi × chléb v dopisech, pithos × sud, pohárek × miska; „Seneca popisuje…“, nikdy „na bráně stálo“; Diogenovy anekdoty jako tradované. Každé shrnutí porovnej s podkladovým listem, sporná místa přímo s pramenem.
5. Studie v kroku 6: říkají text, graf a jeho slovní popis totéž a jen to, co je v podkladech (jediné číslo 100 000 dolarů, „asi pětina“)? Jsou výhrady jen ve zpětné vazbě? Nevyznívá krok jako důkaz, že Epikúros měl pravdu?
6. Opakování v celku: tři druhy tužeb (kapitola 02 profilu × krok 2), strop slasti (kapitola 02 × Myšlenka 1 × krok 3), Seneca a Zahrada (konec kapitoly 03 s kartou cesty × krok 1). Tentýž citát nanejvýš dvakrát; citáty z profilů v cestě ani na stránce otázky.
7. Blok Roztřiď v kroku 2: na telefonu prstem (tažení i Dát sem), klávesnicí a se čtečkou; vlastní karta, obnovení stránky, Začít znovu, zápis v deníku. Ví student napoprvé, co má dělat?
8. Délka: dá se cesta projít do 20 minut? Kde by student přestal číst v cestě a kde v profilech na telefonu?
9. Vstupy po úpravách z 2. 10.: hlavička profilu u všech čtyř lidí s profilem, cesty v přehledu /otazky/ a na stránce Lidé, středová osa u cesty 1 i 6. Žádný odkaz na cestu 7 a 8, žádná slepá ulička, nic rozbitého v celku 1.

Postup podle skillu: projdi celek jako student na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí (i přímé odkazy na kroky, obnovení stránky, Začít znovu, deník), cestu jednou i bez odkrytí bloků, pak pět perspektiv. Drobnosti oprav rovnou a commituj česky; zásahy do významu, příběhu nebo struktury jen navrhni s hotovým novým zněním. Záznam ulož do docs/revize/celek-2-<datum>.md (nejvýš deset nálezů) a stav zapiš do docs/plany/celek-2.md.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí). Na vlastní náhled si web sestav (npx astro build) a pusť npx astro preview --port 4323; příkazy delší než minutu pouštěj na pozadí s výstupem do souboru.

Na konci mi napiš verdikt (připraveno ke schválení / po opravách / přepracovat), tři nejdůležitější nálezy a pošli snímky míst, kterých se nálezy týkají. Návrhy zatím nezapracovávej, počkej na moje rozhodnutí. Nic neposílej na GitHub a do hlavní větve nic neslučuj.
```

Po P10 rozhodne autor o návrzích z revize. Po jejich zapracování následuje schválení celku 2, sloučení `celek-2` do hlavní větve, hlavní větev na GitHub a další celek podle plánu etap F2 (Epiktétos a cesta 5).
