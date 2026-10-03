---
name: "atlas-osobnost"
description: "Psaní stránky osobnosti v Atlasu myšlení (portrét, profil, medailonek), stránky směru nebo pojmu: příběh scénou, velké myšlenky s vlastním pokusem, Zkus to žít, šablona MDX, rychlá kontrola."
---

# Osobnost v Atlasu myšlení

Stránka osobnosti má studentovi ukázat živého člověka při práci: scénu, ve které se rozhoduje nebo ptá, myšlenku v nejsilnější verzi a jeden pokus, který si student vyzkouší sám. Je hotová, když ji šestnáctiletý člověk dočte dobrovolně, na konci ví, co ten člověk myslel a proč, a aspoň jednou sám odpověděl dřív, než si přečetl filozofa.

Tón a pravidla obsahu jsou v `CLAUDE.md` a `docs/styl.md`. Bloky a jejich API v `docs/design.md` › Bloky, rozvržení stránky v › Mezery, mřížka, tvary (středová osa stránky osobnosti). Hotové vzory: `src/content/osobnosti/sokrates.mdx` (portrét) a `protagoras.mdx` (profil).

## Tři hloubky

| Hloubka | Pro koho | Co stránka má | Kde vzniká |
| --- | --- | --- | --- |
| **Medailonek** | každý na mapě | jméno, roky, místa, směr, věta „kdo to byl“ (`kdo`), věta „proč si ho pamatujeme“ (`proc`), vztahy | jen data v `src/data/lide.yaml`, bez MDX |
| **Profil** | důležití lidé období | úvod scénou, velký citát, 1–2 kapitoly s blokem, Doba a lidé, dvě velké myšlenky s vlastním pokusem, Zkus to žít, Kam dál | `src/content/osobnosti/<id>.mdx`, `hloubka: profil` |
| **Portrét** | 1–3 klíčové postavy období | totéž, ale celý život ve 4–6 kapitolách, každá s blokem pro studenta; navíc Spor nebo Změň jednu věc | `src/content/osobnosti/<id>.mdx`, `hloubka: portret` |

Hloubku určuje `docs/architektura.md` a pole `hloubka` v `lide.yaml`. Doba a lidé, mini osa, mapa a vztahy se generují z dat; ručně se do nich píšou jen dvě až tři věty (místo narození, konec života).

Stránka směru a pojmu se řídí stejnými zásadami (scéna, nejsilnější verze, vlastní pokus), jen místo životního příběhu vypráví okamžik, kdy směr nebo pojem vznikl.

## Postup

1. **Přečti** `CLAUDE.md`, `docs/styl.md`, podkladový list celku (`docs/podklady/…`: Nejsilnější příběhy, Tvrzení s doporučenými formulacemi, Citáty, Rozpory a rozhodnutí), poslední záznamy v `docs/rozhodnuti.md`, osobu v `lide.yaml` a citáty osoby v `zdroje.yaml`.
2. **Podklady nejdřív.** Každé historické tvrzení musí být v podkladovém listu nebo v datech. Když příběh něco potřebuje a v podkladech to není, nepiš to a zapiš to do `docs/podklady/k-overeni.md` (co, kde by se hodilo, co udělat). Když podklady chybějí úplně, nejdřív skill `atlas-overeni`.
3. **Navrhni autorovi** v pár bodech, jakou scénou otevřeš úvod a každou kapitolu, jaký blok v ní bude a které dvě myšlenky vybereš. Počkej na odpověď.
4. **Piš** podle šablony níže. Obsah Volby, Změň jednu věc a Sporu patří do `src/content/bloky/<id>.yaml`, do MDX jen `<Volba id="…" />`. Odkryj a Moje stanovisko se píšou přímo do MDX.
5. **Data:** pramen, ze kterého stránka čerpá a v osobě chybí, přidej do `zdroje` osoby v `lide.yaml`. Na novou stránku odkaž z Kam dál souvisejících osob.
6. **Ověř:** `npm test` celé (testy v prohlížeči běží na portu 4322). Novou stránku přidej do `STRANKY` v `tests/e2e/prohlidka.spec.ts`, ať se kontroluje axe, přesah a snímky na 390 a 1440 px ve světlém i tmavém režimu. Snímky si prohlédni a aspoň jeden blok vyzkoušej v prohlížeči. Text přečti ještě jednou jen podle oddílu Ať text nezní jako stroj. Projdi rychlou kontrolu níže.
7. **Zapiš** zásadní volby do `docs/rozhodnuti.md`, vynechané a neověřené do `k-overeni.md`. Commituj česky po ucelených krocích (portrét, profil, kontrola); na GitHub nic bez pokynu autora.

## Jak najít a vyprávět příběh

- **Hledej chvíli rozhodnutí nebo otázky,** ne životopis. Dobrá scéna má člověka, místo a napětí: Kritón sedí před úsvitem u spícího Sókrata a přišel ho přemluvit k útěku. Mladý Athéňan buší holí na dveře, protože do Athén přijel Prótagorás.
- **Scéna nese myšlenku.** Lachés definuje odvahu jako „neutéct“, a přitom chválí Sókrata za ústup od Délia. Ze dvou kapitol tak vyroste jedna otázka, kterou student sám rozhodne.
- **Druh pramene řekni jednou větou na začátku scény:** „Platón vypráví…“ (scéna z dialogu), „Alkibiadés vyprávěl…“ (vyprávění postavy), „Vypráví se…“ (tradovaný příběh), „Představ si…“ (vymyšlená situace). Dál už vyprávěj bez výhrad.
- **Přímá řeč skutečných osob jen jako citát** ze `zdroje.yaml` přes `<Citat id="…" />`. Ostatní v nepřímé řeči: „Lachés odpověděl, že odvážný je ten, kdo…“. Ani otázku filozofa nepiš jako vymyšlenou přímou řeč.
- **Jména a podrobnosti střídmě** (`docs/styl.md`, pravidlo 6). Jménem nazvi jen toho, kdo nese příběh nebo myšlenku; ostatní popiš tím, kým jsou: „dva athénští otcové“, „druhý rádce“, „přítel, který u toho byl“, „přátelé z ciziny“. Vzhled, místa, částky a seznamy žáků jen tam, kde něco říkají o člověku nebo o myšlence. V Sókratově portrétu stačí Alkibiadés, Lachés, Euthyfrón, Kritón, Xanthippa a Platón.
- **Myšlenka má přednost před ozdobou.** Když scéna nabízí další krok argumentu (Lachétova druhá definice, Sókratova námitka o lodích), vezmi ho; když nabízí jen další jméno nebo kulisu, vynech ji.
- **Sporné vynech,** nejisté zmírni („kolem roku“, „asi“, „prý“). Pochybnosti o pramenech patří do podkladů, ne do textu.
- **Protivník a pokušitel dostanou nejsilnější verzi.** Kritónovy důvody k útěku jsou dobré důvody, jinak Sókratova odpověď nic neváží.
- **Co s příběhem děláme my, nepřipisuj filozofovi.** Epiktétos nevyprávěl o senátorovi jako odpověď na námitku rezignace; za odpověď ho bereme my. Piš „Epiktétos k ní má příběh“, ne „na ni odpovídal příběhem“. Stejně tak spojovací věta k jinému mysliteli nesmí tvrdit spor nebo otázku, které nebyly („Proti Epiktétovi tu otázku položil už Aristotelés“).
- **Formulace nesmí být silnější než tvrzení v podkladech.** „Velkou část vlády“ není „skoro celou vládu“; porovnej doporučenou formulaci se sloupcem Tvrzení.
- **Scéna, kde silnější odmítne pomoct nebo kde hrdina křivdu mlčky unese,** dostane hned za sebou otázku pro studenta („Stačila by ti taková odpověď od učitele?“). Student, kterému někdo ubližuje, jinak čte, že se ho nikdo zastat nemá.
- **Konec kapitoly** nech na silné větě nebo na otázce pro studenta v kurzívě. Pointu nevysvětluj.
- **Titulek kapitoly** je pointa s kurzívou na konci: „Místo trestu *odměna.*“, „Spravedlnost dostal *každý.*“

## Blok pro studenta v kapitole

Každá kapitola portrétu má jeden blok, vybraný podle toho, co scéna nese. Blok stojí **před** tím, co filozof udělal, aby student rozhodl dřív, než to ví.

| Scéna nese… | Blok | Příklad |
| --- | --- | --- |
| definici nebo pojem, který jde vyzkoušet | Odkryj | „Co je odvaha? Najdeš případ, kdy tvá definice neplatí?“ |
| soud o činu nebo o tvrzení | Volba s důvodem bez `coUdelal` | „Byl Sókratův ústup od Délia odvážný?“ |
| rozhodnutí, které filozof udělal | Volba s důvodem s `coUdelal` | „Soud tě uznal vinným. Co navrhneš jako trest?“ |
| dilema, které záleží na podmínkách | Změň jednu věc | „Utečeš?“ (rozsudek spravedlivý, přátelé by pykali, nikdo se to nedozví) |
| otázku k zamyšlení, kterou blok nepotřebuje | kurzíva v textu | „*Je to správné, protože to někdo přikázal? Nebo to přikázal, protože je to správné?*“ |

Možnosti ve Volbě jsou skutečné tahy, každá se zpětnou vazbou, která řekne, co tah umí, kde má slabinu, a položí otázku dál. Modelové odpovědi v Odkryj jsou různě silné studentské odpovědi s komentářem. Nikdy „správně“ ani hodnocení názoru. Podrobně v `docs/design.md` › Bloky a ve skillu `atlas-cesta`.

## Výběr velkých myšlenek

- **Dvě myšlenky** (portrét i profil), každá z jiné disciplíny (Poznání, Etika, Argumentace, Politika…).
- Vyber myšlenky, které **studenta osobně zasáhnou** a dají se vyzkoušet na vlastním životě: „Nikdo nedělá zlo *dobrovolně.*“, „O každé věci se dá mluvit *pro i proti.*“
- Titulek je teze s pointou v kurzívě. Výklad má dvě až čtyři věty v nejsilnější verzi, bez sloganu (`docs/styl.md`, dvojice 10).
- Pak otázka v kurzívě, která tezi vystaví protipříkladu („*Platí to všude? Je krutost špatná jen pro toho, komu se špatná zdá?*“), a vlastní pokus: `<MojeStanovisko client:visible id="<osoba>-<tema>" otazka="…" odkaz="/osobnost/<id>/#myslenky" />`.
- Myšlenka, kterou nese jiný blok (Spor v cestě, stránka velké otázky), se na stránce osobnosti neopakuje.

## Zkus to žít

Jedna výzva na týden, kterou jde opravdu udělat ve škole nebo s kamarády a která v praxi procvičí myšlenku stránky. Tři až čtyři věty: co udělat, jak, co si na konci zapsat. Žádné body ani série.

Výzva, která cvičí něco unést, přehodnotit nebo přijmout (stoici), nesmí mířit na člověka, který studentovi ubližuje. Příklady ber z věcí, které štvou (povinnost, prohra, něčí zlozvyk), a jednou větou řekni, že křivdu, se kterou se dá něco dělat, si student nevybírá: ta potřebuje někoho, komu o ní řekne.

> **Řekni to za druhého.** Až se s někým neshodneš, nezačínej svým názorem. Nejdřív zopakuj ten jeho, a tak dobře, aby řekl: přesně tak. Teprve pak odpověz. Na konci týdne si zapiš, jestli to něco změnilo.

## Ať text nezní jako stroj

Platí pro každý text, který uvidí student: odstavce v MDX, scény a zpětné vazby v YAML, titulky, popisky i „Kde jsme“. Východiskem je seznam, který si pro úklid strojových textů vedou wikipedisté (`https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing`). Tady je převedený do češtiny a na atlas; anglická slova ze seznamu jsou nahrazená českými protějšky.

Jazykový model táhne k průměru. Zvláštní, doložený detail nahradí hladkou obecnou větou, která by seděla na kohokoli. Oprava je proto vždy stejná: vrať do věty konkrétní věc z podkladů. Škrtnout podezřelé slovo a prázdnou větu nechat nestačí.

**Test jedné věty:** dala by se beze změny napsat o jiném filozofovi? Pak nic neříká. Přepiš ji z podkladů, nebo ji smaž.

### Obsah

- **Nafouknutý význam.** „Je svědectvím…“, „sehrál klíčovou roli“, „zásadní zlom“, „položil základy“, „zanechal nesmazatelnou stopu“, „trvalý odkaz“, „dodnes fascinuje“, „připravil půdu pro…“, „odráží širší proměnu“. Napiš, co člověk udělal a co se stalo potom: „Dožil se asi sedmdesáti let a čtyřicet z nich učil.“
- **Rozbor naoko.** Přívěsek na konci věty, který hodnotí, místo aby něco sdělil: „…, čímž podtrhl význam rozumu“, „…, což ukazuje jeho odvahu“, „…, a zdůraznil tak…“. Věta končí tím, co se stalo; závěr si udělá student.
- **Průvodcovský a reklamní tón.** „Bohaté kulturní dědictví“, „pulzující přístav“, „úchvatný“, „malebný“, „v samém srdci Athén“, „pyšní se“. Místo popiš tím, co tam člověk viděl nebo dělal.
- **Mlhavé odvolávky.** „Odborníci se shodují“, „badatelé upozorňují“, „často se uvádí“, „podle některých“, „jak známo“. V atlasu má pramen jméno („Platón vypráví…“), nebo poctivé „Vypráví se…“.
- **Redakční vsuvky.** „Je důležité si uvědomit“, „stojí za zmínku“, „je třeba dodat“, „nelze nezmínit“, „zajímavé je, že“. Řekni rovnou tu věc.
- **Závěr podle šablony.** „Závěrem lze říci“, „celkově“, „shrnuto“, „navzdory tomu všemu zůstává…“, výhled typu „jeho myšlenky budou inspirovat další generace“ a poslední věta, která opakuje, co odstavec už řekl.

### Jazyk

- **Slova, která model nadužívá.** Klíčový, zásadní, stěžejní, komplexní, nadčasový, fascinující, spletitý, bohatý (o dějinách a kultuře), hluboký (o myšlence); podtrhnout, zdůraznit, odhalit, utvářet, rezonovat, ponořit se, prozkoumat; krajina myšlení, mozaika, tapisérie, dobrodružství poznání. Jedno takové slovo může být na místě. Dvě v jednom odstavci jsou důvod odstavec přepsat.
- **Vyhýbání se „je“ a „má“.** „Slouží jako“, „představuje“, „stává se symbolem“, „nabízí“, „vyznačuje se“. Když jde říct „je“ nebo „má“, napiš to tak.
- **Záporná paralela.** „Nejde jen o X, jde o Y.“ „Nebyl to jen učitel, byl to…“ „Nejen…, ale i…“ Vyvrací tvrzení, které nikdo neřekl. Smí zůstat jen tam, kde X opravdu někdo tvrdí: postava ve scéně nebo student ve své volbě.
- **Trojice ze zvyku.** Tři přídavná jména, tři příklady, tři krátké věty za sebou („Bez peněz. Bez domova. Bez strachu.“). Počet urči podle podkladů: když jsou věci dvě, napiš dvě.
- **Střídání synonym.** Sókratés, pak „athénský myslitel“, „slavný filozof“ a „Platónův učitel“ v jednom odstavci. Opakuj jméno nebo zájmeno; vedlejší postava má jeden popis a ten se nemění.
- **Falešné rozpětí.** „Od etiky po politiku“, „od otroků po císaře“ tam, kde mezi krajními body žádná škála není. Vyjmenuj, co opravdu máš.
- **Navazovací vata.** Věty, které začínají „Navíc“, „Kromě toho“, „Zároveň“, „Dále“, „Nicméně“, „Na druhou stranu“. Když věty navazují obsahem, spojku nepotřebují.

### Sazba a forma

- **Pomlčka jako dramatická pauza** nebo jako náhrada čárky, dvojtečky a závorky. V textu pro studenty nanejvýš výjimečně; rozsahů („15–20 minut“) se to netýká. Dlouhá anglická pomlčka (—) do českého textu nepatří vůbec.
- **Tučné písmo uvnitř vyprávění** a odrážky s tučným heslem a dvojtečkou („**Odvaha:** …“). Důraz v atlasu nese kurzíva v titulku a stavba věty.
- **Odrážky a mezititulky tam, kde má být vyprávění.** Emoji nikde. Nadpis s Každým Slovem Velkým je anglický zvyk.
- **Uvozovky.** Anglický seznam hlídá oblé uvozovky; u nás je to naopak. Správně jsou české „ “, chybou jsou rovné " a anglické “ ”.
- **Zbytky značek.** `**`, `#`, zpětné apostrofy a `[odkaz](…)` v polích YAML a v atributech, kde se Markdown nevykreslí.

### Zbytky rozhovoru s modelem

- **Oslovení a nabídky.** „Tady je…“, „Jistě!“, „Doufám, že to pomůže“, „Dej vědět, jestli…“.
- **Pochvala na úvod zpětné vazby.** „Skvělá volba!“, „Zajímavý postřeh.“, „To je dobrá otázka.“ Zpětná vazba začíná tím, co tah umí.
- **Věty o tom, co se neví.** „Konkrétní podrobnosti nejsou doloženy“, „dostupné prameny neuvádějí“. Pochybnosti patří do podkladů.
- **Výplně a značky.** „[doplnit]“, „XY“, „TODO“, `turn0search0`, `oaicite`, `utm_source=chatgpt.com` v adrese zdroje.
- **Zdroj, který nejde otevřít a ověřit.** Citát, místo v díle nebo odkaz, který neexistuje. Citáty jen ze `zdroje.yaml`, tvrzení jen z podkladů.

### Co znakem není

Bezchybný pravopis, spisovná čeština, neobvyklé slovo ani jedna spojka na začátku věty nic nedokazují. Jeden znak z tohoto seznamu taky ne; vadí, když se jich sejde víc. Text proto schválně nekaz: žádné úmyslné chyby, žádná hovorovost naoko. A nenahrazuj jeden obrat jiným ze seznamu („klíčový“ za „stěžejní“, pomlčku za středník).

Po dopsání přečti stránku ještě jednou jen s tímto oddílem. Každý nález přepiš z podkladového listu: kdo, kde, co udělal, co řekl. Když v podkladech nic konkrétního není, věta do stránky nepatří.

## Šablona MDX

```mdx
---
osoba: <id z lide.yaml>
nadtitulek: <kdo · Xův portrét / Xův profil>
titulek: <Jméno>
pointa: <jedna věta, vysází se kurzívou: „Muž, který se ptal.“>
citat: <id hlavního citátu ze zdroje.yaml>
kapitoly:
  - cislo: "01"
    kotva: <bez-diakritiky>
    nazev: <krátký název>
    stav: hotovo
---
import Kapitola from '../../components/osobnost/Kapitola.astro';
import Citat from '../../components/ui/Citat.astro';
import DobaALide from '../../components/osobnost/DobaALide.astro';
import Myslenky from '../../components/osobnost/Myslenky.astro';
import Myslenka from '../../components/osobnost/Myslenka.astro';
import MojeStanovisko from '../../components/ostrovy/MojeStanovisko.svelte';
import ZkusToZitKarta from '../../components/osobnost/ZkusToZitKarta.astro';
import KamDal from '../../components/osobnost/KamDal.astro';
import { KdoZilDriv, Volba, Odkryj } from '../../components/bloky';

<div class="uvod ctenarsky">

Scéna: člověk, místo, napětí. Dva až tři krátké odstavce.

</div>

<div class="ctenarsky"><Citat id="<hlavní citát>" velky /></div>

<Kapitola cislo="01" kotva="<kotva>" nazev="<název>">
  <Fragment slot="titulek">Pointa s kurzívou na <em>konci.</em></Fragment>

Scéna… → blok pro studenta → co udělal filozof → citát → silná poslední věta.
</Kapitola>

<DobaALide osoba={props.osoba}>

Dvě až tři věty: odkud byl, kam chodil, jak skončil.

</DobaALide>

<div class="ctenarsky"><KdoZilDriv a="<id>" b="<id>" druh="poradi" /></div>

<Myslenky>
  <Myslenka cislo={1} disciplina="Poznání">
    <Fragment slot="titulek">Teze s <em>pointou.</em></Fragment>

Výklad v nejsilnější verzi. *Otázka s protipříkladem?*

<MojeStanovisko client:visible id="<id>-<tema>" otazka="…" odkaz="/osobnost/<id>/#myslenky" />

  </Myslenka>
</Myslenky>

<ZkusToZitKarta id="<id>-<vyzva>" nazev="<Název výzvy>" odkaz="/osobnost/<id>/#zkus-to-zit">

Výzva na týden.

</ZkusToZitKarta>

<KamDal odkazy={[
  { href: '/cesta/<slug>/', nadtitulek: 'Cesta N', text: '…' },
  { href: '/osobnost/<id>/', nadtitulek: 'Portrét', text: '…' },
  { href: '/otazky/#<kotva>', nadtitulek: 'Velká otázka N', text: '…' },
]} />
```

Poznámky k šabloně:

- Velký citát z úvodu se v textu nemusí opakovat; když se k němu kapitola vrací, odkaž na něj slovy („začínala právě větou o člověku jako měřítku“). Znovu jako citát má smysl jen tam, kde zazněl (Sókratés, Obrana 38a v kapitole Soud).
- Osoba bez autentického portrétu má na desce minci s atributem; nic nepřidávej. Fotografie jen s ověřenou licencí v `zdroje.yaml` › `obrazky`. Popisek obrázku (`popisek`) se ukazuje pod deskou vedle „Proč …?“: u rytiny, kresby nebo pozdější sochy v něm řekni, čí je to představa a z kdy, hlavně když obraz ukazuje něco, co text popírá (Epiktétos s perem × „Sám nenapsal nic“).
- Doba a lidé skládá skupiny vztahů z dat: „Znali se a přeli se“ jen pro `znali-se` a `polemika`, vliv přes texty má skupiny „Četli ho a navázali“ a „Koho četl“. Lidem, kteří se nepotkali, dej v `vztahy.yaml` typ `vliv-textem`; po sestavení si oddíl přečti, nikdo jiný ho nepíše.
- Letopočty s nezlomitelnými mezerami: `399 př. n. l.` (U+00A0 mezi číslem a „př.“ i uvnitř zkratky).
- `id` bloků malými písmeny bez diakritiky a na celém webu jedinečné, `<osoba>-<tema>`.
- Kapitolu se stavem `osnova` ukazuje stránka jen ve vývojovém režimu; po dopsání nastav `stav: hotovo` a pole `osnova` smaž.

## Ukázky z hotových stránek

**Úvod scénou (profil Prótagora):**

> Platón vypráví, jak jednou před úsvitem bušil někdo holí na Sókratovy dveře. Byl to jeden mladý Athéňan a nesl novinu: do Athén přijel Prótagorás! Chtěl, aby ho k němu Sókratés vzal. Rád by Prótagorovi zaplatil, jen aby ho udělal moudrým.

Proč funguje: první věta řekne pramen a hned je tu zvuk, čas a spěch. Mladík nemusí mít jméno: příběh nese jeho spěch, ne on. Fakta o Prótagorovi (kdo byli sofisté, první placený učitel) přijdou až potom.

**Scéna, ze které vyroste blok (Sókratés, kapitola 03):**

> Alkibiadés z koně viděl, že Sókratés je klidnější než Lachés. Šel stejně jako po athénských ulicích, vzpřímeně a s pohledem na všechny strany. Díval se po přátelích i po nepřátelích. Z dálky bylo vidět, že kdo na něj sáhne, narazí.

Pak Volba „Byl Sókratův ústup od Délia odvážný?“ s Lachétovou definicí ve scéně bloku. Student soudí sám; text pak nic nerozhodne za něj.

**Nejsilnější verze druhé strany (Sókratés, kapitola 05):**

> Peníze jsou připravené, přispějí i přátelé z ciziny. Daleko od Athén čekají lidé, kteří ho ochrání. A když zůstane, zradí sám sebe, udělá radost nepřátelům a opustí vlastní syny.

Hned za tím Změň jednu věc „Utečeš?“ a teprve pak Sókratova odpověď s citátem `kriton-49c`. Jména dárců a cíl útěku (Simmiás, Kebés, Thesálie) by tu jen zdržovala.

**Tradovaný příběh s otázkou na konci (profil Prótagora, kapitola 02):**

> Vypráví se, že při závodech zabil oštěp nešťastnou náhodou jednoho muže. Periklés prý pak s Prótagorou celý den rozebíral, kdo za to může: oštěp, ten, kdo ho hodil, nebo pořadatelé. Posměšně to o otci vyprávěl Periklův vlastní syn.
>
> *Kdo za to podle tebe může? A je to pro tebe hloupá otázka, nebo ta nejdůležitější?*

**Takhle ne:**

> ✗ Prameny o Prótagorově konci se rozcházejí; pozdní tradice o vyhnání je nespolehlivá.
>
> ✓ Dožil se asi sedmdesáti let a čtyřicet z nich učil. Vážnost si podle Platóna udržel až do smrti.

## Rychlá kontrola před odevzdáním

- Začíná úvod i každá kapitola scénou, člověkem nebo otázkou?
- Nese každé jméno a každý detail příběh nebo myšlenku? Ostatní popsat, nebo vynechat.
- Má každé historické tvrzení podklad, a co chybělo, je v `k-overeni.md`?
- Je přímá řeč skutečných osob jen v `<Citat />`? Má scéna z dialogu „Platón vypráví…“ a tradovaný příběh „Vypráví se…“?
- Stojí blok před tím, co udělal filozof? Má každá volba vlastní zpětnou vazbu s důvodem?
- Dostal protivník i filozof svou nejsilnější verzi?
- Přečetl by stránku student, kterému někdo ubližuje, aniž by v ní našel radu smířit se (scéna, kde silnější nepomůže; výzva Zkus to žít; citát o snášení bez otázky za ním)?
- Sedí oddíl Doba a lidé a popisek pod deskou na to, co říká text (nikdo se „neznal“ jen proto, že četl; obraz neodporuje vyprávění)?
- Je ve stránce věta, která mluví o naší práci, o pramenech nebo o tom, proč je něco zpracované takhle? Smazat.
- Dala by se některá věta beze změny napsat o jiném filozofovi? Prošel text čtením podle oddílu Ať text nezní jako stroj?
- Věty do 25 slov, odstavce do 4 vět, tykání, jména a skloňování podle `lide.yaml`, letopočty s nezlomitelnými mezerami?
- Prošlo `npm test` celé a jsou snímky na 390 a 1440 px ve světlém i tmavém režimu prohlédnuté?
- Přečetl by to šestnáctiletý člověk dobrovolně až do konce?