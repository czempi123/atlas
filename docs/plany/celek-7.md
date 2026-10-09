# Plán větve celek-7: „Jsem pořád tentýž, když se měním?“

Celek 7: profily Hérakleita a Parmenida, cesta 2 „Jsem pořád tentýž, když se měním?“ (období 1, velká otázka 5 „Kdo vlastně jsem?“) a stránka velké otázky 5. Rozsah vybral autor 9. 10. 2026 ze tří nabídnutých možností (cesta 2 s Hérakleitem a Parmenidem; cesta 7 s Diogenem, Kratétem a Hipparchií; cesta 34 se Senekou a Marcem Aureliem). Cestou 2 budou hotové všechny čtyři cesty klasického Řecka a atlas dostane první předsókratiky. Otázka 5 je zatím jen hlavička. Podklady vzniknou v `docs/podklady/celek-7-jsem-porad-tentyz.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | čeká; zadání je níže |
| P7 | Profily Hérakleita a Parmenida | čeká na P6 |
| P8 | Cesta 2 „Jsem pořád tentýž, když se měním?“, kresba a stránka velké otázky 5 | čeká na P7 |
| P10 | Revize celku | čeká na P8 |
| Opravy | Zapracování nálezů revize | čeká na P10 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | jen na pokyn autora |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`. Provedená zadání se v plném znění přesouvají do `docs/archiv/zadani/celek-7.md`. Větev `celek-7` je založená z hlavní větve 9. 10. 2026 (commit `7e95762`, po sloučení celku 6).

## Co si celek nese z celků 1 až 6

Co je tu o pramenech, je výchozí stav a domněnka k ověření, ne ověřený fakt: rozhodne P6.

- **Co už v atlasu o Hérakleitovi a Parmenidovi je:**
  - V datech (`lide.yaml`) jsou oba jako profil bez stránky. Hérakleitos: období 1, asi 540–480 př. n. l., Efesos, otázka 5, atribut řeka s větou „Do téže řeky nelze vstoupit dvakrát“, prameny `sep-heraclitus` a `britannica-heraclitus`. Parmenidés: asi 515 až po 450 př. n. l., Elea, směr eleaté, otázky 6 a 7 (otázku 5 nemá), atribut brána, prameny `sep-parmenides`, `dl-ix-22` a `parmenides-b8`. Zénón z Eleje je v datech profil s atributem želva.
  - Parmenidés mluví na stránce otázky 6 (citát `parmenides-b8`; v `k-overeni.md` je k němu poznámka o druhém čtení, podle kterého svět změny nepopírá). Portrét Platóna má dialog Parmenidés a větu, že Hérakleitovo učení poznal Platón už v mládí; portrét Aristotela vypráví Hérakleita u pece. Nic z toho se nemá opakovat.
  - Vztahy v datech: Parmenidés → Platón a Hérakleitos → Platón (vliv textem), Parmenidés → Zénón (učitel, tradované). Vztah Hérakleitos ↔ Parmenidés v datech není; `k-overeni.md` říká jen „možná podnítil“. Stránka směru `src/content/smery/eleate.md` existuje.
- **Věta atributu u Hérakleita je nejspíš parafráze, ne zlomek.** O řece se dochovalo víc znění (zlomky B12, B49a a B91) a podobu „dvakrát do téže řeky“ nesou až Platón a Plútarchos. Stejně tak „všechno plyne“ nemusí být Hérakleitova věta. P6 řekne, co je zlomek, co svědectví a co pozdější shrnutí, a podle toho se opraví atribut i texty. Je to táž past jako „smrt nic není“ u Epikúra.
- **Otázka cesty je dnešní; antika se ptala jinak.** Hérakleitos a Parmenidés mluví o změně a o tom, co je, ne o osobní identitě. P6 má najít, kde se antika ptala na člověka, který se mění, a přitom zůstává: Théseova loď, „rostoucí argument“ o dlužníkovi, Platónovo Symposion (o tom, že se člověku za život vymění všechno), stoikové. Cesta jim nesmí vkládat do úst pozdější otázku (paměť, vědomí); má nechat místo Lockovi, Humovi a dalším, kteří v datech nejsou. Je to stejná úloha jako u otázky 3.
- **Plútarchos je od celku 6 v datech** a hodí se podruhé: Théseovu loď podle všeho vypráví on, a je i jedním z pramenů věty o řece. Nové osoby se dál nepřidávají; koho příběh potřebuje a v datech není, zůstane v textu bez odkazu.
- **Spor Hérakleitos × Parmenidés je školní dvojice, ne doložený střet.** Jestli jeden na druhého reagoval a kdo na koho, je sporné. Když Spor, tak na dálku a s větou o tom, co nevíme; scéna netvrdí, že se potkali ani že jeden četl druhého (poučení z celku 6: „stejnou námitku vedl“, ne „z té věty udělal námitku“).
- **Životopisy předsókratiků jsou pozdní a z velké části legenda** (Diogenés Laertios o Hérakleitově povaze a smrti). Tradované jako tradované; co je jen pomluva nebo anekdota bez pointy, do studentského textu nepatří. Hérakleitova smrt podle Diogena je nechutná historka: nevyprávět.
- **Citlivá místa.** Otázka „Kdo vlastně jsem?“ se šestnáctiletých týká víc než kterákoli dosud:
  - student, který se mění tak, že to bolí nebo o tom nechce mluvit (dospívání a tělo, nemoc, úraz, poruchy příjmu potravy);
  - student, který řeší svou genderovou identitu nebo orientaci: cesta o něm nerozhoduje, nezlehčuje („to přejde“) a neudělá z něj příklad;
  - student, jehož blízký se změnil (demence, závislost, těžká nemoc): „už to není on“ je věta, kterou doma slyší;
  - student po ztrátě nebo traumatu („už nejsem, kdo jsem byl“); návaznost na celek 6;
  - adopce, stěhování, dvojí domov a jazyk.
  Cesta nikomu neříká, které jeho „já“ je pravé, nedělá osobnostní test a neptá se na vlastní bolestnou změnu polem na psaní. Příklady změny mají být cizí nebo neutrální (loď, řeka, město, kapela, která vymění všechny členy).
- **Překryvy, kterým se vyhnout:** cesta 3 a stránka otázky 6 (co je skutečné: Parmenidés tam už mluví), portrét Platóna (ideje jako odpověď na Hérakleita a Parmenida), cesta 8 (Nagelova odpověď na zrcadlo je věta o identitě: „narodit se o sto let dřív by musel někdo jiný“; stačí odkaz), cesta 5 (co je moje). Zénónovy paradoxy pohybu patří samostatné stránce pokusu, ne této cestě, pokud P6 neřekne jinak.
- **Kresba s pohybem:** autor ji chce v atlasu častěji (4. 10. 2026). Nabízí se Théseova loď, které student vyměňuje prkna, a druhá loď složená ze starých prken. Podklady řeknou, jestli tam má smysl a co je v ní pramen a co náš přídavek.
- **Poučení z revizí** je v `docs/pouceni.md`. Z celku 6 hlavně: argument drž souměrně a čti ho očima studenta, kterému je zle; citát se stupňováním čti i obráceně; výklad u hlasu ověř v tomtéž místě jako citát; scéna Sporu netvrdí, že jeden autor četl druhého; když poslední krok slíbí zastánce každé odpovědi, projdi všechny možnosti.
- **Technika:** bloky Příběh, Volba, Odkryj, Roztřiď, Změň jednu věc, Spor a Kdo žil dřív? jsou hotové, stejně jako Kresba s pohybem, závěr cesty „Na začátku × Teď“, Návrat a karta Zkus to žít. Profil má šablonu z Epikúra, Diogena a Prótagora. Stránka otázky 5 vznikne ze souboru `src/content/otazky/kdo-vlastne-jsem.md` (teď jen hlavička). Měněné věty hlídají testy přesným zněním i v průchodu bez odkrytí (`tests/e2e/cesta*.spec.ts`): hledej je grepem v celé složce `tests/`, ne v prvních sedmdesáti řádcích výpisu.
- **Bez mezikroku schvalování** (rozhodnutí autora ze 4. 10. 2026). Předem se ptá jen na stahování obrázků, nové osoby, mazání, slučování a GitHub.
- **Test, který občas spadne:** `tests/e2e/cesta.spec.ts:73` (čeká na `astro-island[ssr]`). Když spadne jen on, pusť ten soubor znovu samostatně.

## Zadání P6: Podklady k celku 7

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. **Opus 5.5 · high** s vyhledáváním. Katalog pro podklady doporučuje Sonnet 5.5 · high a Opus jen u sporných pramenů; u předsókratiků je sporné skoro všechno (které znění zlomku je pravé, kdo co o kom vypráví po staletích) a otázka identity má víc citlivých míst než kterákoli dosud. Kdo chce šetřit, pustí krok na Sonnetu 5.5 · high a body 1 a 4 nechá na Opus.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pracuj ve větvi celek-7; je založená z hlavní větve po sloučení celku 6.

Přečti CLAUDE.md, docs/styl.md, docs/pouceni.md a docs/plany/celek-7.md (tabulka stavu a Co si celek nese z celků 1 až 6). V docs/architektura.md jen velkou otázku 5 a řádek cesty 2. V docs/podklady/k-overeni.md jen řádky, kde je Hérakleitos, Parmenidés, Zénón z Eleje nebo Théseova loď (najdi je grepem). Jako vzor podkladového listu si z docs/podklady/celek-6-proc-se-bat-smrti.md vypiš nadpisy a přečti jeden oddíl. Co atlas o Hérakleitovi a Parmenidovi už říká, najdeš grepem („Hérakleit“, „Parmenid“) v src/content/osobnosti/platon.mdx a aristoteles.mdx, v src/content/otazky/co-je-skutecne.mdx a v src/data; nic z toho neopakuj. Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 7 „Jsem pořád tentýž, když se měním?“. Studentský text zatím nepiš.

1. Hérakleitos a Parmenidés pro profily. U každého: co o životě víme a od koho (jak dlouho po něm), co je doložené, co tradované a co legenda; co z díla máme (zlomky, báseň) a jak o tom psát. U Hérakleita zvlášť věty o řece: která znění se dochovala (B12, B49a, B91), u koho a které je nejspíš jeho; odkud je „všechno plyne“ a „dvakrát do téže řeky“. Věta atributu v datech („Do téže řeky nelze vstoupit dvakrát“) je podezřelá: navrhni znění, které drží. U Parmenida: co říká báseň o tom, co je, a jak číst její druhou část; drž i čtení, podle kterého změnu nepopírá. Řekni, jestli jeden na druhého reagoval, kdo to tvrdí a jak je to jisté. Navrhni u každého jednu až dvě myšlenky pro profil, každou s vlastním pokusem studenta, a nejsilnější námitku, kterou nese jiný myslitel.

2. Cesta 2 „Jsem pořád tentýž, když se měním?“. Vstupní příběh podle katalogu: Théseova loď a Hérakleitova řeka. Zjisti, kdo Théseovu loď vypráví, kdy a co přesně říká (Plútarchos je v datech); druhá loď ze starých prken je pozdější přídavek: čí a z kdy. Najdi, kde se antika ptala na člověka, který se mění a zůstává: rostoucí argument (Epicharmos, dlužník), Platónovo Symposion 207d–208b, Plútarchos, stoikové (Chrýsippos je v datech). Otázka cesty je dnešní: řekni, jak ji cesta unese, aniž vloží Hérakleitovi a Parmenidovi do úst osobní identitu, a co nechá pozdějším obdobím (Locke, Hume, Buddha v datech nejsou). Rozliš, o čem je řeč, když se řekne „tentýž“: tatáž věc, tentýž člověk, táž povaha; u každého argumentu řekni, na co míří. Skutečný střet pro blok Spor, v nejsilnější verzi obou stran a s odpovědí na nejsilnější námitku druhé; scéna nesmí tvrdit setkání ani to, že jeden četl druhého, pokud to prameny nenesou. Vlastní pokus studenta před výkladem (začátek cesty), nový případ (ověřený, ne školní scénka: třeba co se v těle za roky vymění a co ne; čísla jen z plného textu) a případ pro Návrat jiného druhu. Kdo dá za pravdu studentovi, který řekne „jsem pořád já“, a kdo tomu, kdo řekne „už jsem někdo jiný“. Kresba s pohybem: posuď Théseovu loď s vyměňováním prken a druhou lodí; co je v ní pramen a co náš přídavek.

3. Velká otázka 5 „Kdo vlastně jsem?“: stránka je zatím jen hlavička (src/content/otazky/kdo-vlastne-jsem.md). Navrhni úvodní případ (pole pripad) jiného druhu než případy cesty a hlasy z osobností, které atlas má: Hérakleitos, Parmenidés, Sókratés (Poznej sám sebe), Platón, Aristotelés, Epikúros, Epiktétos, Marcus Aurelius, Seneca, Plútarchos. Každý hlas s odpovědí na případ (nejvýš dvě věty) a s myšlenkou, která stojí v tomtéž místě pramene jako citát; neopakuj hlasy ze stránek otázek 1, 3, 4, 6 a 7. Řekni, co na stránce zůstane místem pro pozdější období.

4. Citlivá místa sepiš zvlášť a u každého navrhni, jestli patří do studentského textu, učiteli (ucitel/celek-7.md), nebo nikam, a jak ho formulovat. Projdi vstup, jádro a nový případ očima studenta, který se mění tak, že to bolí (tělo, nemoc, poruchy příjmu potravy), studenta, který řeší svou genderovou identitu nebo orientaci, studenta, jehož blízký se změnil (demence, závislost), a studenta po ztrátě nebo traumatu. Cesta nikomu neříká, které jeho já je pravé, nedělá osobnostní test a neptá se na vlastní bolestnou změnu polem na psaní. Opři se o zdroje, které k tomu existují (například doporučení pro školy), najdi je a cituj. K tomu legendy o Hérakleitovi (povaha, smrt) a co z nich nevyprávět.

5. Obrázky: po jednom obrazu ke každému profilu a jeden pro vstup cesty, z muzeí s otevřeným přístupem; autor, instituce, licence a odkaz. U pozdějších zpodobení (plačící Hérakleitos) řekni, čí je to představa a z kdy. Zatím nic nestahuj, jen navrhni dva až tři kandidáty; o stažení rozhodnu já.

6. Data: navrhni, co doplnit Hérakleitovi a Parmenidovi v src/data (roky, místa, prameny, otázky, vztahy mezi nimi a k lidem, které atlas má) a jestli změnit atribut nebo jeho větu. Nové osoby nepřidávej; koho příběh potřebuje a v datech není (Kratylos, Epicharmos, Hobbes, Locke), zůstane v textu bez odkazu. Řekni, jestli celek potřebuje stránku Zénóna z Eleje nebo stránku pokusu Achilleus a želva; celek je nezakládá.

Výstup: podkladový list docs/podklady/celek-7-jsem-porad-tentyz.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny jako v celcích 1 až 6; u zlomků číslo podle Dielse a Kranze a u koho se dochoval), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí; když spadne jen tests/e2e/cesta.spec.ts:73, pusť ten soubor znovu samostatně).

Pravidla jako u celku 6: každé historické tvrzení a citát se zdrojem, ověřené v plném textu, ne ve shrnutí; u každého shrnutí pramene drž rozdíly, které pramen dělá; doporučená formulace nesmí být silnější než tvrzení („asi“ zůstává „asi“); tradované jako tradované, výklad jako výklad; záporné tvrzení o autorovi („to neřekl“) jen po ověření v jeho textu. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Osnovu mi neposílej a na schválení nečekej. Kde váháš (které myšlenky, jaký Spor, jaký nový případ, čím cestu otevřít, které hlasy na otázku 5), zvol nejlepší cestu a pracuj. Commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci zapiš stav do docs/plany/celek-7.md (oddíl Po P6), připrav tam zadání P7 s doporučeným modelem a úsilím, toto zadání přesuň do docs/archiv/zadani/celek-7.md a plán větve aktualizuj i v projektu Claude. Pak mi napiš, co je ověřeno, co zůstalo otevřené, nad čím jsi váhal a co jsi zvolil, a co potřebuje moje rozhodnutí (obrázky ke stažení, znění atributu, citlivá místa).
```
