# Atlas myšlení — harmonogram rozšiřování a hotové prompty

Pracovní plán od 27. září 2026 · aktualizace H10 a R1–R3/B1 dne 28. září 2026 · projekt Přehled filozofie

**Další zadání: R4 pro B1 — implementováno, čeká na revizi.** V aktuálním atlasu jsou tři cesty i úvod se třemi vstupy. H10 vymezil antické jádro a doporučuje pořadí B1 → B4 → B2 → B3. Před další sérií implementací dořešíme skutečné prohlížečové a studentské ověření pilotů; nepovažujeme je za provedené jen podle přítomnosti kódu. Přidáváme menší propojené celky, nikoli nejprve desítky izolovaných životopisů.

## 1. Z čeho vycházíme

Následující inventura zachycuje výchozí stav z 27. 9. Aktuální stav je v oddílu 7. Aktualizace H10 vychází také z `atlas-antika.html`, verze 9, a z [mapy antického učiva](Plány%20hodin/atlas-mapa-antickeho-uciva.md); původní koncepce zůstává podkladem.

Přečtené podklady: `atlas-mysleni-koncepce-a-prompty.md`, `atlas-cesta-co-mam-ve-svych-rukou-struktura.md`, `atlas-cesta-co-mam-ve-svych-rukou-pilot.md` a relevantní části aktuálního `atlas-antika.html`, verze 6, změna 27. 9. 2026. Dále skill atlas-koncepce a jeho principy. Tento dokument plánuje další práci; HTML ani skilly nyní nemění.

| Oblast | Výchozí stav pro harmonogram |
| --- | --- |
| Pět atlasových skillů | Jsou dostupné. Není potřeba je znovu vytvářet. |
| Mapa, životní osy, profily, Marcus a stoicismus | Existují. Nové práce je rozšiřují a zachovávají jejich adresy. |
| Mapa podle žijících osob | Aktuální rozhraní již popisuje výběr podle narození a úmrtí a odlišení životních os. Staré zadání opravy se neopakuje; správnost chování se zkontroluje při revizi. |
| „Co mám ve svých rukou?“ | V HTML je úvod, šest kroků, zpětné vazby a samostatný návrat. Existuje i textový scénář. Přítomnost kódu zde neoznačujeme za nové funkční ověření. |
| Učitelské podklady | Struktura a pilot jsou ve složce `Přehled filozofie/Plány hodin`. Další plány patří tamtéž. |
| Samostatná specifikace starého P3 | V prohlédnuté projektové složce se nenachází. Nebudeme ji vydávat za hotový podklad ani kvůli ní opakovat celý pilot. Potřebná rozhodnutí ověří H02 proti implementaci. |
| Ověření se studenty | V přečtených podkladech není záznam skutečného zkoušení. Připravíme ho; výsledky nesmí zastoupit simulované odpovědi AI. |

Dosavadní koncepce zůstává základem: zájem o filozofii, vlastní úsudek, autenticita, hledání smyslu a ohled na druhé. Současně má atlas učit dějinnou orientaci a skutečné filozofické spory. Etika proto nebude jediným tématem.

## 2. Závazný styl: přirozený atlas bez redakčních vsuvek

**Student má číst filozofii, příběhy a otázky. Zdrojovou a metodickou práci odvádíme při přípravě.** Do žákovského rozhraní nepatří komentáře o tom, proč jsme zvolili určitou konstrukci, jak obtížné bylo ověření nebo co vše autor aplikace nechce tvrdit. Ani rozbalovací rámeček pod každým odstavcem tento problém neřeší.

Pravidla pro všechny následující prompty:

1. Výklad piš přímo, přirozeně a konkrétně. Vynechávej „je třeba zdůraznit“, „jde o didaktickou pomůcku“, „nemůžeme bezpečně rekonstruovat“, „prameny nejsou zcela spolehlivé“ a podobné obranné dodatky.
2. Zvol takové znění, které je věcně udržitelné samo o sobě. Nepodstatný sporný detail vypusť; datování případně vyjádři „kolem roku…“. Nevytvářej nepodloženou jistotu pouhým smazáním výhrady.
3. Tradovaný příběh může začít přirozeným „Vypráví se, že…“ nebo uvedením vypravěče. Nepřipojuj k němu další odstavec o pramenné nejistotě. Smyšlené současné situace uveď „Představ si…“.
4. Zachovej filozofickou pochybnost, námitky a práci s důvody. To je obsah výuky. Redakční výhrady k vlastní práci jsou jiná věc.
5. Citát může mít stručný údaj autor–dílo–místo. Překlad, bibliografie, ověřování a redakční zdůvodnění patří do samostatného pracovního dokumentu. Stávající stručné pramenné odkazy lze zachovat; auditní komentáře z atlasu odnést.
6. Úkoly formuluj jako činnost: „Co bys udělal?“, „Který důvod tě přesvědčuje?“, „Změní se tvá odpověď, když…?“ Vyhýbej se školometným popiskům „přenos“, „didaktický cíl“, „rekonstrukce argumentu“ tam, kde je student nepotřebuje.
7. Zpětná vazba vysvětluje důvod a důsledek. Neuděluje známku za životní přesvědčení. Volný text nabídne k porovnání s příklady; aplikace nepředstírá jeho individuální posouzení.
8. Praktická informace, co se stane s napsanou odpovědí, zůstává stručná a dostupná u příslušné funkce. Není to metodická vsuvka.

### Konkrétní úpravy, které už nyní dávají smysl

Příklady jsou návrhy znění podle přečteného atlasu; vlastní zásah provede H01.

| Dnešní formulace | Doporučená úprava |
| --- | --- |
| „Jeho vnitřní přání nemůžeme bezpečně rekonstruovat. Vlastní zápisky ale ukazují…“ | „Ve svých zápiscích si připomíná povinnost pracovat pro druhé.“ |
| „To je parafráze jeho svědectví, ne záznam setkání.“ | Vypustit tuto větu. Předchozí sdělení, že Marcus děkuje Rusticovi za Epiktétovy texty, již říká to podstatné. |
| „Volba / vliv / výsledek je naše didaktická pomůcka, ne Epiktétova původní trojice.“ | „Vrať se k projektu: co zvolíš, co můžeš ovlivnit a co nezaručíš?“ Není potřeba tuto otázku připisovat Epiktétovi. |
| „Zpráva nám neříká, co si Marcus přitom myslel.“ | Vypustit. Nechat stručný příběh pomoci při povodni a otázku, proč má smysl jednat bez vlády nad výsledkem. |
| „Prameny se v podrobnostech rozcházejí a císaře často idealizují.“ | Odnést do redakčních podkladů; v příběhu použít pouze udržitelné konkrétní tvrzení. |
| „Podklad: Stanford Encyclopedia of Philosophy · otázka k přemýšlení je autorská“ pod krátkým profilem | Odebrat z hlavního výkladu; původ uchovat v podkladech, případně zachovat stručný odkaz na další čtení. |

## 3. Harmonogram po pracovních blocích

Navrhuji přibližně **10–12 týdnů při třech pracovních sezeních týdně**. Je to rozpočet na tvorbu, čtení a zkoušení, nikoli odhad rychlosti modelu. Jedno sezení může zahrnout navazující obsahové a technické zadání; u náročné cesty zabere samotná implementace více času. Řiď se koncem etapy, ne kalendářem. Při začátku koncem září jde orientačně o říjen až polovinu prosince 2026.

| Blok | Orientační čas | Prompty v pořadí | Výsledek a podmínka dokončení |
| --- | --- | --- | --- |
| A. Upevnit hotový pilot | 1. týden | H01 → H02 → H03 | Přirozené texty, opravený průchod a připravený krátký test s lidmi. Mapa, profily a adresy fungují. |
| B. Zkusit pilot a začít Epikúra | 2. týden | Skutečné průchody; H04 po získání poznámek; H05 | Zaznamenané obtíže pilotu a hotový scénář druhé cesty. Při opakovaném zásadním neporozumění nejprve opravit pilot. |
| C. Dokončit druhou cestu | 3. týden | H06 → H07 → H08 | „Kolik je dost?“ funguje samostatně; struktura není závislá pouze na stoickém tématu. |
| D. Uspořádat vstup a učivo | 4. týden | H09 → H10 | Přehledný vstup přes otázky, lidi a mapu; vymezené antické jádro před další sériovou tvorbou. |
| E. Poznání a přesvědčování | 5.–6. týden | R1 → R2 → R3 → R4 pro B1 | Sókratés a Protágoras: student odliší tvrzení, důvod a přesvědčivost; použije námitku. |
| F. Příroda, změna a vysvětlení | 7. týden | R1 → R2 → R3 → R4 pro B4 | Hérakleitos a Parmenidés: student porovná argumenty o změně a stálosti; připraví si otázku pro Platóna. |
| G. Zdání a skutečnost | 8. týden | R1 → R2 → R3 → R4 pro B2 | Platón: student vyloží konkrétní problém poznání a prověří analogii s dnešní situací. |
| H. Charakter a dobrý život | 9.–10. týden | R1 → R2 → R3 → R4 pro B3 | Aristotelés: student posoudí návyk a konkrétní volbu, srovná odpověď se stoiky a Epikúrem. |
| I. Propojit a vyzkoušet | 11.–12. týden | R4 pro celý antický celek; další skutečná hodina; H04 | Opravené vazby a opakované omyly, použitelné antické jádro, rozhodnutí o další etapě. |

**Když zatím nejsou dostupní studenti:** dokonči technickou a redakční kontrolu a připrav druhý pilot. Test eviduj jako neprovedený. Před rozsáhlým přidáváním dalších celků se k němu vrať. Dostupnost třídy nesmí vést k vymyšleným výsledkům ani k neomezenému vyrábění neověřeného obsahu.

## 4. Jak prompty používat

Kopíruj vždy jen jeden prompt. V projektu ponech tento harmonogram a používej aktuální verze souborů. Po H10 opakuj cyklus R1–R4 pro jediný další celek z tabulky B1–B4. Rozpracovaný celek dokonči před zahájením dalšího.

Každé zadání má určitý výstup. Obsahový návrh ještě neznamená hotovou funkci; vložená funkce ještě neznamená ověření se studenty. Přijatý výsledek navazující prompt využije bez nového schvalování běžných detailů. Zásadní rozpor se zadáním pojmenuje konkrétně.

Modely a míra přemýšlení níže přebírají pracovní rozdělení z dosavadní koncepce. Nejde o nové ověření nabídky modelů ani o automatické přepínání: volba se provádí v rozhraní. Není nutné kvůli každému kroku měnit model; podstatné jsou podklady a kontrolovatelný výsledek.

### H01 — Upravit jazyk stávajícího atlasu

**Model: GPT-6 Astra · medium.** Rozhodující je redakční úsudek a zachování významu.

```text
Použij $atlas-revize a $atlas-vyvoj. Otevři aktuální atlas-antika.html a atlas-harmonogram-rozsirovani-a-prompty.md. Proveď H01: uprav studentské texty podle pravidel přirozeného výkladu z oddílu 2 harmonogramu.

Projdi mapové karty, profily, Marca, stoicismus a cestu „Co mám ve svých rukou?“. Odstraň redakční sebevysvětlování, metodické popisky, obecné pramenné výhrady a dodatky typu „nemůžeme bezpečně rekonstruovat“ nebo „jde o naši didaktickou pomůcku“. Přepiš celé věty tak, aby fungovaly přirozeně. Pouhé ukrytí těchto poznámek do rozbalovacích boxů v atlasu nestačí.

Používej věcně udržitelný rozsah tvrzení. Nepodstatný sporný detail vypusť, případně použij přirozené „kolem roku“ nebo „vypráví se“. Zachovej filozofické námitky, užitečnou zpětnou vazbu, stručnou identifikaci citátů a skutečně potřebné instrukce. Nevymýšlej citace, motivy ani setkání. Historickou aktivitu nezruš jen proto, že pracuje s rozdílem mezi četbou a setkáním.

Redakční podklady odnes do samostatného atlas-redakcni-podklady.md v projektu. Uprav rovněž odpovídající studentské pasáže dokumentu atlas-cesta-co-mam-ve-svych-rukou-pilot.md, aby se staré znění při příští implementaci nevrátilo. Učitelskou část drž odděleně. Zachovej vzhled, mapu, stavy a dosavadní adresy. Ověř dotčené stránky a ulož upravené soubory. Předání omez na hlavní změny a skutečně provedené ověření.
```

**Hotovo:** vyprávění nepřerušují redakční komentáře a odstraněním výhrad nevznikla zavádějící tvrzení.

### H02 — Zkontrolovat a opravit celý první průchod

**Model: GPT-6 Astra · high.** Je třeba spojit filozofickou kontrolu s chováním aplikace.

```text
Použij $atlas-revize a $atlas-vyvoj. Navazuj na aktuální atlas po H01, opravený scénář a atlas-harmonogram-rozsirovani-a-prompty.md. Projdi celou cestu „Co mám ve svých rukou?“ a rovnou oprav konkrétní obsahové a funkční chyby v jejím stávajícím rozsahu.

Ověř vstup, všech šest kroků, zpětnou vazbu, revizi první odpovědi, odbočku do profilu či mapy a návrat na stejný krok, přímý odkaz po obnovení stránky a samostatný návratový úkol. Zkontroluj, co se opravdu ukládá a co o tom říká rozhraní. U volného textu nepředstírej automatické individuální hodnocení. Pokud chybí dříve zamýšlená funkce, doplň pouze to, co je nutné pro úplný průchod.

Prověř telefon a notebook v obou tématech a klávesnici. U mapy zkontroluj narození, úmrtí, zmizení vybrané osoby, prázdný rok, vynechání roku nula a současnou viditelnost mapy s ovládáním na notebooku. Zachovej staré hluboké odkazy. Sdílený výklad neopisuj do dalších nezávislých kopií.

Obsahově ověř, že student může rozlišit jednání a výsledek, formulovat silnou námitku proti rezignaci a pochopit historický vztah Marca a Epiktéta. Dodržuj přirozený jazyk podle harmonogramu; nálezy ani vysvětlení oprav nevkládej do atlasu. Ulož opravený atlas a stručný samostatný záznam revize s oddělenou obsahovou a technickou částí. Netvrď, že tím bylo ověřeno učení skutečných studentů.
```

**Hotovo:** žádná známá chyba nebrání průchodu a hlavní argument se neztrácí mezi instrukcemi.

### H03 — Připravit vyzkoušení s lidmi

**Model: GPT-6 Astra · medium.** Úkolem je navrhnout krátké pozorování porozumění.

```text
Použij $atlas-revize. Podle aktuální cesty „Co mám ve svých rukou?“ a harmonogramu připrav jednoduché ověření s 3–5 středoškoláky a jednu 45minutovou hodinu. Aplikaci teď neměň.

Připrav jednostránkový záznam pro pozorovatele: kde se student zastavil, co pochopil bez pomoci, jak vlastními slovy vysvětlil vztah jednání a výsledku, jakou uvedl námitku a jak rozlišil vztah obou autorů. Přidej nový případ, výstupní lístek a krátký návrat po 2–7 dnech. Nevyžaduj osobní přiznání ani souhlas se stoiky. Vedle porozumění sleduj, zda jazyk zní přirozeně a zda délka odpovídá skutečnému tempu.

Použij existující obsah a aktualizuj učitelský plán, pokud už je připraven. Dokument ulož do Přehled filozofie/Plány hodin jako atlas-overeni-pilotu.md. Připrav prázdný záznam; nevytvářej smyšlené výsledky, výpovědi ani hodnocení studentů. Uveď konkrétně, co mám jako člověk udělat a co ti potom předat.
```

**Hotovo:** lze test provést bez dalšího vymýšlení postupu. Jeho provedení je samostatný lidský krok.

### H04 — Zpracovat skutečné poznámky ze zkoušení

**Model: GPT-6 Astra · high.** Z několika pozorování je potřeba odlišit opakovaný problém od jednotlivosti.

```text
Použij $atlas-revize a $atlas-vyvoj. Zpracuj moje dodané skutečné poznámky z vyzkoušení aktuálního atlasu podle atlas-overeni-pilotu.md a harmonogramu. Pokud poznámky nejsou v konverzaci ani projektových podkladech, vyžádej si je a nevytvářej náhradní výsledky.

Odděl obtíže v navigaci, nejasný jazyk a filozofické neporozumění. Uveď přímo pozorované počty a příklady; z malého vzorku nevyvozuj obecnou účinnost atlasu. Vyber nejvýše tři opravy s největším dopadem a proveď je. Oprav i příslušný scénář, pokud by jinak zůstal v rozporu s aplikací.

Zachovej námitky a možnost nesouhlasu; cestu neusnadňuj vyzrazením odpovědi před pokusem. Dodržuj přirozený studentský jazyk z harmonogramu. Ověř opravené průchody a ulož výsledek. Pozorování a odůvodnění ulož zvlášť, ne do žákovského rozhraní. Na konci řekni, zda je rozumné pokračovat v rozšiřování, nebo jaký konkrétní opakovaný omyl je ještě potřeba odstranit.
```

**Hotovo:** doložené problémy mají opravu a záznam o následném ověření; nepozorované účinky se nepřipisují aplikaci.

### H05 — Napsat Epikúra: „Kolik je dost?“

**Model: GPT-6 Astra · medium.** Potřebujeme vlastní příběh a odlišný filozofický argument.

```text
Použij $atlas-koncepce a $atlas-lekce. Vycházej z aktuálního atlasu, hotové první cesty a atlas-harmonogram-rozsirovani-a-prompty.md. Připrav druhou úplnou cestu „Kolik je dost?“ s Epikúrem pro 15–20 minut samostudia a 45minutovou hodinu.

Nosná otázka: „Kdy mi touha zlepšuje život a kdy mě drží v neustálé nespokojenosti?“ Vstupem bude srozumitelný současný případ volby mezi dalším výkonem či prestiží, nákupem a časem s přáteli. Nemoralizuj nad spotřebou ani ambicí. Vylož Epikúrovu práci s touhami, slastí, bolestí, rozvahou a přátelstvím; neudělej z něj zastánce bezmezného požitkářství ani moderního kouče produktivity. Přidej námitku, zda klidný soukromý život stačí tváří v tvář nespravedlnosti.

Stanov nejvýše tři pozorovatelné výsledky. Napiš celý studentský průchod: situace, vlastní pokus, krátký pramen s otázkou, výklad důvodu, změna okolností, silná námitka, nový případ a samostatný pozdější návrat. Každá volba potřebuje konkrétní zpětnou vazbu, otevřený závěr více obhajitelných odpovědí a sebekontrolu. Urči, co vlastní profil Epikúra, co epikureismus a co cesta; zbytečně neduplikuj obsah.

Ověř prameny a citace. Dodržuj oddíl 2 harmonogramu: žádné metodické a pramenné omluvy ve výkladu, zdrojové a redakční podklady zvlášť. Ulož scénář atlas-cesta-kolik-je-dost-pilot.md do Plány hodin, v oddělené části přidej minutový plán hodiny. Běžné volby rozhodni sám. Aplikaci zatím neupravuj.
```

**Hotovo:** celou cestu lze projít jako text a Epikúros nepůsobí jako přejmenovaný stoik.

### H06 — Připravit chování druhé cesty

**Model: GPT-6 Sol · high.** Scénář už existuje; nyní rozhodují konkrétní stavy a návraty.

```text
Použij $atlas-interakce. Pro aktuální atlas a atlas-cesta-kolik-je-dost-pilot.md připrav implementační zadání podle harmonogramu. Navrhni průchod všemi aktivitami, zpětnou vazbu, změnu odpovědi, reset, přímý vstup do kroku a odbočku s návratem. Převzít máš to, co už funguje v prvním pilotu; specifické stoické rozlišení do Epikúra nepřenášej.

Ke každé skutečně nové interakci uveď poznávací účel, přesné české texty, výchozí stav, akce a jejich důsledky, ukládání a přístupnou alternativu. U volného textu použij modelové odpovědi a sebekontrolu. Zkontroluj telefon, klávesnici a stav bez dřívější odpovědi. Nevymýšlej interakci jen kvůli pohybu nebo klikání.

Předej atlas-cesta-kolik-je-dost-interakce.md s odkazy na existující komponenty a konkrétními případy ověření. Dodržuj studentský jazyk z harmonogramu. Aplikaci nyní neměň a nepřepisuj hotový scénář bez konkrétního rozporu.
```

**Hotovo:** každá akce má určený výsledek a není třeba domýšlet texty během programování.

### H07 — Implementovat Epikúra

**Model: GPT-6 Sol · high.** Jde o úplnou implementaci podle dvou hotových podkladů.

```text
Použij $atlas-vyvoj. Do aktuálního atlas-antika.html implementuj cestu „Kolik je dost?“ podle atlas-cesta-kolik-je-dost-pilot.md a atlas-cesta-kolik-je-dost-interakce.md. Dodržuj atlas-harmonogram-rozsirovani-a-prompty.md.

Přidej úplný vstup, průchod, zpětné vazby, závěr a návrat. Zpřístupni potřebný profil Epikúra a společný výklad epikureismu v rozsahu hotového scénáře. Použij existující data a stabilní ID. Studentské části odděl od učitelských a redakčních podkladů; ty do aplikace nekopíruj. Nové odkazy smějí vést pouze na skutečně dokončený obsah.

Sdílené funkční bloky využij znovu, nepřestavuj technologii bez doložené potřeby. Zachovej mapu, oba režimy vzhledu a staré adresy. Ověř první i druhou cestu, historii zpět/vpřed, obnovení hlubokého odkazu, návrat z profilu, klávesnici a telefon/notebook. Ulož funkční výsledek a stručně popiš provedené ověření.
```

**Hotovo:** druhou cestu lze dokončit samostatně a první cesta funguje dál.

### H08 — Prověřit druhou cestu a společný základ

**Model: GPT-6 Astra · high.** Je potřeba rozpoznat zploštění filozofie i slabá místa společných bloků.

```text
Použij $atlas-revize a $atlas-vyvoj. Zkontroluj dokončené „Kolik je dost?“ v aktuálním atlasu proti scénáři a harmonogramu. Oprav věcné chyby, nepoctivé námitky, mechanicky převzaté stoické konstrukce, nepřirozené metapoznámky a poruchy průchodu.

Porovnej obě cesty: které komponenty slouží stejnému účelu a lze je sdílet, kde je naopak nutný odlišný způsob práce? Uprav jen doložené duplicity a chyby, nevytvářej obecný framework pro hypotetické budoucí lekce. Ověř související odkazy a obě cesty po změně.

Ulož atlas a krátký samostatný záznam revize. Přidej tři konkrétní úkoly pro vyzkoušení druhé cesty se studenty. Zásadní zjištění o výrobním postupu zaznamenej jako návrh změny skillu; skilly bez samostatného zadání nyní neměň. Zprávu nevkládej do atlasu.
```

**Hotovo:** druhé téma má vlastní myšlenkovou logiku a technický základ lze rozumně použít dál.

### H09 — Zpřehlednit vstup do atlasu

**Model: GPT-6 Sol · high.** Převážně jde o navigaci nad již existujícím obsahem.

```text
Použij $atlas-interakce a $atlas-vyvoj. Podle aktuálního atlasu a harmonogramu dokonči přehledný úvod se třemi vstupy: otázky a cesty, mapa a čas, lidé a směry. Nejprve zjisti, které z těchto prvků už existují, a rozšiř je. Zobraz obě hotové cesty s krátkým příběhovým vstupem a orientační délkou.

Nabídni pokračování tam, kde se návštěvník skutečně zastavil, v mezích existujícího ukládání. Nepřidávej nehotové karty, prázdné kategorie ani sliby budoucích funkcí. Katalog jasně rozliší člověka dostupného na mapě od člověka s rozpracovaným profilem, aniž by z nehotovosti dělal hlavní sdělení.

Zachovej přímý vstup na #atlas, staré adresy profilů a cest, černobílý vzhled a obě témata. Student se má dostat k obsahu bez registrace. Texty piš podle harmonogramu, bez vysvětlování koncepce aplikace. Ověř, že lze z úvodu najít obě cesty, konkrétního myslitele i mapu a vrátit se. Ulož funkční výsledek.
```

**Hotovo:** první návštěvník má jasný začátek a vracející se návštěvník najde rozpracovaný obsah.

### H10 — Vymezit antické učivo před větším rozšířením

**Model: GPT-6 Astra · high.** Musí propojit témata, výsledky a historickou orientaci bez zahlcení.

```text
Použij $atlas-koncepce. Vycházej z aktuálního atlasu, obou cest, původní koncepce a atlas-harmonogram-rozsirovani-a-prompty.md. Připrav stručnou mapu antického jádra pro středoškolskou výuku filozofie. Jako pracovní výchozí publikum použij všeobecné gymnázium; neprezentuj to jako definitivně zvolený typ školy pro celý projekt.

Při mapování na RVP ověř příslušné aktuální oficiální dokumenty a přechodná pravidla. Výslovně rozliš, co vyžaduje rámec, co musí určit konkrétní ŠVP a co je naše autorská volba. Tyto pracovní poznámky patří do učitelského dokumentu, ne do atlasu. Nevymýšlej povinný seznam filozofů jen z obvyklého obsahu učebnic.

Posuď pořadí B1–B4 v harmonogramu: poznání a argument, Platón a skutečnost, Aristotelés a dobrý život, předsókratici a změna. U každého celku stanov nejvýše tři výsledky, konkrétní důkaz porozumění, předpoklady a vazby na dějiny. Označ základ a dobrovolnou hloubku. Pozdější kynismus, skepticismus a římské stoiky ponech jako rozšíření, pokud pro základ nejsou nutní.

Ulož atlas-mapa-antickeho-uciva.md do Plány hodin. Případné změny pořadí zaznamenej v harmonogramu a stručně odůvodni mimo studentské rozhraní. Aplikaci teď neměň.
```

**Hotovo:** další tvorba má vymezené jádro, předpoklady a učební výsledky.

## 5. Obsahové celky pro postupné rozšiřování

**H10, 28. 9. 2026: výchozí pořadí B1 → B4 → B2 → B3, ID beze změny.** B1 poskytne argumentační nástroje; B4 před Platónem otevře problém změny a stálosti; B3 uzavře celek srovnáním dobrého života s oběma hotovými cestami. Jde o autorské didaktické rozhodnutí pro pracovní publikum všeobecného gymnázia, nikoli o pořadí předepsané RVP ani definitivní typ školy pro atlas. Výsledky, důkazy, předpoklady, základ a hloubku vymezuje [mapa antického učiva](Plány%20hodin/atlas-mapa-antickeho-uciva.md). Každý celek přidává jednu hlavní cestu a jen ty profily či společné výklady, které tato cesta potřebuje. Rozsáhlý portrét typu Marcus není povinný pro každé jméno.

| ID | Otázka a obsah | Výchozí situace | Co student předvede | Co dokončit společně |
| --- | --- | --- | --- | --- |
| B1 | „Kdy mám dobrý důvod věřit?“ — Sókratés, Protágoras, argument a přesvědčování | Skupina přijala sebejisté tvrzení o spolužákovi; co by mohlo její názor změnit? | Odliší tvrzení a důvod, nabídne protipříklad a upraví soud. | Cesta; profil Sókrata a přiměřený profil Protágory; kontext athénské diskuse; otázka poznání. Sofisty nepodat jako pouhé podvodníky. |
| B4 | „Jak může něco zůstávat a zároveň se měnit?“ — Hérakleitos, Parmenidés; krátce Milét; atomisté do hloubky | Proměna věci nebo krajiny vyvolá spor, co se vlastně změnilo a co přetrvalo. | Porovná dvě vysvětlení změny, určí předpoklad a problém každého z nich. | Cesta; stručné profily Hérakleita a Parmenida; srovnání vysvětlení přírody; mapa Iónie a jižní Itálie. Atomismus a Zenónovy paradoxy dobrovolně; antický atomismus není současná fyzika. |
| B2 | „Je to, co vidím, celá skutečnost?“ — Platón | Dva lidé si z různých výběrů zpráv vytvářejí odlišné obrazy stejné události. | Vysvětlí vybraný argument o zdání a poznání a hranici jeho použití. | Cesta; profil Platóna; krátká práce s podobenstvím o jeskyni a dobovým kontextem. Dnešní informační prostředí je aplikace k posouzení, ne údajný původní význam celého podobenství. |
| B3 | „Stačí vědět, co je správné?“ — Aristotelés | Postava se opakovaně rozhoduje mezi pohodlím, odvahou a loajalitou ve společné práci. | Vysvětlí vztah návyku, úsudku a jednání; odmítne mechanický průměr jako univerzální ctnost. | Cesta; profil Aristotela; ctnost, rozumnost a dobrý život; konkrétní srovnání se stoiky a Epikúrem. |

Historický pořádek zůstává viditelný na mapě a ose, i když student vstoupí přes otázku. Každá cesta potřebuje přiměřené dobové zasazení. B1 → B4 → B2 → B3 doporučujeme i pro souvislé studium. Samostatné vstupy zůstávají otevřené; každá cesta krátce dodá potřebný předpoklad.

### R1 — Napsat další obsahový celek

**Model: GPT-6 Astra · medium.** Úloha spojuje nový příběh, filozofický význam a návaznost na existující obsah.

```text
Použij $atlas-lekce. Otevři aktuální atlas, atlas-harmonogram-rozsirovani-a-prompty.md a atlas-mapa-antickeho-uciva.md. Vyber první nedokončený celek B1–B4 podle aktuálního pořadí. Existuje-li již rozpracovaný scénář tohoto celku, dokonči ho; nezačínej druhý celek. Přečti související profily a cesty, nepředpokládej jejich stav ze starého plánu.

Podle zadání daného celku napiš úplný studentský scénář jedné cesty pro 15–20 minut a potřebné krátké profily či společné výklady. Zachovej nejvýše tři výsledky. Použij vlastní pokus před vysvětlením, pramen nebo přesně vyložený argument, skutečnou námitku, změnu případu, nový případ a pozdější návrat. Pro každou volbu napiš konkrétní zpětnou vazbu; otevřenou odpověď nech porovnat s více obhajitelnými modely a vysvětleným omylem.

Dobové zasazení propojí otázku, člověka, místo a argument. Osobní reflexi nech dobrovolnou. Společné výklady odkazuj, nekopíruj. Historická tvrzení a citáty ověř, ale důvody redakčních voleb a pramenné problémy nevkládej do studentského výkladu. Dodržuj oddíl 2 harmonogramu.

Ulož atlas-B1-scenar.md, atlas-B2-scenar.md, atlas-B3-scenar.md nebo atlas-B4-scenar.md podle zvoleného celku. Scénář a oddělený 45minutový plán patří do Plány hodin. Uveď stabilní ID, vlastnictví obsahu a potřebné vazby. Aplikaci zatím neměň. Aktualizuj v harmonogramu stav konkrétního celku na „scénář připraven“ a předej navazující R2.
```

**Hotovo:** jeden úplný scénář bez míst „doplnit později“ a bez závislosti na neexistujícím obsahu.

### R2 — Navrhnout jen potřebné nové interakce

**Model: GPT-6 Sol · high.** Smyslem je přesný popis chování a použití existujících komponent.

```text
Použij $atlas-interakce. V aktuálním projektu najdi rozpracovaný celek B1–B4 se stavem „scénář připraven“ a jeho atlas-Bx-scenar.md. Vycházej z harmonogramu a skutečných komponent atlasu. Připrav přesné implementační zadání celého průchodu; nové komponenty navrhuj jen tam, kde existující neumožní požadovanou činnost.

Uveď vstupy, výchozí stav, volby, odkrytí zpětné vazby, revizi odpovědi, reset, přímý vstup bez historie, ukládání a návrat z odbočky. Každá nová interakce musí umožnit studentovi něco vysvětlit, rozlišit nebo zpochybnit. Zahrň přesné české texty, klávesnici, telefon a variantu bez animace. U volného textu nenavrhuj předstírané individuální hodnocení.

Ulož atlas-Bx-interakce.md, kde x nahradíš číslem zpracovávaného celku. Dodržuj přirozený jazyk z harmonogramu a odděl implementační poznámky od textů určených studentovi. Přidej konkrétní případy ověření. Aplikaci zatím neměň. Zapiš stav „připraveno k implementaci“ a předej R3.
```

**Hotovo:** žádná podstatná akce, zpětná vazba ani prázdný stav nezůstávají neurčené.

### R3 — Vložit jeden celek do atlasu

**Model: GPT-6 Sol · high.** Implementace vyžaduje souvislé provedení a kontrolu návazností.

```text
Použij $atlas-vyvoj. Podle harmonogramu vyber právě rozpracovaný celek B1–B4 se stavem „připraveno k implementaci“. Přečti jeho atlas-Bx-scenar.md a atlas-Bx-interakce.md a aktuální atlas-antika.html. Implementuj celý tento celek včetně potřebných profilů, společného obsahu, vstupu z katalogu, zpětných vazeb a návratu.

Použij existující ID a komponenty, nové přidej jen podle potřeby. Výklad sdílej mezi cestou, osobností a směrem; nepřidávej nezávislé kopie téhož. Učitelské plány, pramenný audit a odůvodnění změn ponech mimo atlas. Dodržuj přirozený studentský jazyk z harmonogramu. Veškeré viditelné odkazy a ovládací prvky musejí fungovat.

Ověř celý nový průchod, přímé adresy po obnovení, zpět/vpřed, odbočku s návratem, klávesnici a telefon/notebook v obou tématech. U změněných společných komponent ověř i dříve hotové cesty a mapu. Technologii nepřestavuj bez konkrétní potřeby. Ulož aktualizovaný atlas, zapiš stav „implementováno, čeká na revizi“ a předej R4 s krátkým výčtem skutečně provedeného ověření.
```

**Hotovo:** nová část je dostupná z atlasu a lze ji skutečně dokončit.

### R4 — Uzavřít celek revizí a opravou

**Model: GPT-6 Astra · high.** Revize musí prověřit argumenty i to, co student skutečně dělá.

```text
Použij $atlas-revize a $atlas-vyvoj. Zkontroluj právě implementovaný celek evidovaný v atlas-harmonogram-rozsirovani-a-prompty.md. Jsou-li B1–B4 už zrevidované, proveď souhrnnou revizi antického jádra a jeho vazeb. Vycházej z aktuálního HTML, odpovídajících scénářů a mapy učiva.

Posuď věcnou přesnost, skutečnou sílu námitky, nepodsouvání správného životního názoru, srozumitelnost úkolů, přirozenost jazyka a úplnost zpětné vazby. Zkontroluj historické vazby, mapu, přímé odkazy a odbočky. Odstraň redakční vsuvky podle oddílu 2 harmonogramu. Námitky a filozofickou nejistotu zachovej tam, kde jsou samotným předmětem otázky.

Rovnou oprav konkrétní chyby a ulož opravený výsledek včetně nezbytných změn scénáře. Ověř dotčené průchody. Samostatně zapiš, co bylo ověřeno obsahově a technicky a co dosud nikdo nezkoušel se studenty. Přidej jeden nový případ pro skutečné ověření porozumění. Závěry nevkládej do žákovského rozhraní.

Aktualizuj stav celku na „zrevidováno“ pouze při odstranění blokujících chyb. Stav „vyzkoušeno se studenty“ používej jen s doloženým záznamem. Potom urč další celek podle harmonogramu; další obsah v tomto kroku nevyráběj.
```

**Hotovo:** opravený celek má doloženou redakční a technickou kontrolu; zkoušení s lidmi je evidováno samostatně.

## 6. Co přijde po antickém jádru

Následující výběr je zásobník, ne souběžně rozpracované úkoly. Nejprve dokončit základní cyklus výše.

| Pořadí | Rozšíření | Přínos |
| --- | --- | --- |
| 1 | Diogenés a kynismus: „Čí život vlastně žiju?“ | Autenticita, potřeby, společenské uznání a ohled na druhé; propojení s Epikúrem a Aristotelem. |
| 2 | Antický skepticismus: „Musím mít na všechno názor?“ | Meze soudu a jednání bez jistoty; návaznost na poznání. |
| 3 | Doplnění stoické tradice: Zenón z Kitia, Chrysippos, Seneca, Epiktétos; Cato v přiměřené historické roli | Rozdíly uvnitř směru, historický vývoj a napětí mezi filozofií a veřejným životem. Ne všichni potřebují stejně rozsáhlý profil. |
| 4 | Přechod k pozdní antice a středověku | Nové otázky, dějinné prostředí a vztah rozumu a víry; nový malý pilot před hromadným přidáváním. |
| 5 | Později novověk, moderní myšlení, existencialismus a autenticita | Rozšíření původního hodnotového záměru na širším historickém základě. |

Před rozšířením mimo Středomoří rozhodnout o prostoru mapy a časovém rozsahu. Současnou antickou mapu zbytečně nepřestavovat předem. U antických doplňků použij stejný cyklus scénář → interakce → implementace → revize s novým označením celku.

### X1 — Navrhnout první celek dalšího období

**Model: GPT-6 Astra · high.** Nové období mění historické vazby i rozsah atlasu.

```text
Použij $atlas-koncepce. Vycházej z aktuálního atlasu, dokončených cest, skutečných záznamů jejich vyzkoušení a atlas-harmonogram-rozsirovani-a-prompty.md. Navrhni první malý úplný celek dalšího historického období podle pořadí v oddílu 6. Pokud antické jádro není dokončené, nejprve pojmenuj konkrétní chybějící předpoklad a nepřeskakuj ho.

Vyber jednu nosnou otázku, nejvýše tři výsledky, potřebné osobnosti a jeden silný spor. Propoj nové téma s alespoň jednou hotovou cestou. Urči nezbytné změny mapy, osy, katalogu a sdílených bloků; rozliš potřebné změny od těch, které mohou počkat. Neplánuj celé období po desítkách prázdných profilů.

Připrav pořadí scénář → interakce → implementace → revize → skutečné vyzkoušení a hotová navazující zadání. Dodržuj přirozený studentský jazyk a oddělené učitelské a redakční materiály. Ulož navazující plán do projektu; aplikaci v tomto kroku neměň.
```

**Hotovo:** další období má proveditelný první celek a jasnou návaznost na to, co už funguje.

## 7. Evidence postupu a pravidlo dokončení

Tuto tabulku budou navazující kroky průběžně aktualizovat. Jde o pracovní evidenci, nikdy o obsah studentského rozhraní. Záznam má uvést výstup a datum; dokončení H03 se nesmí zaměnit za skutečné vyzkoušení.

| Položka | Stav k 28. 9. 2026 | Další krok |
| --- | --- | --- |
| První cesta | Úplný průchod a pozdější návrat přítomny v HTML v9 | Doložit skutečné prohlížečové a studentské ověření |
| Přirozený jazyk v celém atlasu | Pravidlo platí; H10 neprovádí nový plošný audit | Kontrolovat při navazujících revizích |
| Ověření se studenty | Nedoloženo | Skutečné průchody a H04; příprava testu není výsledek |
| Epikúros — Kolik je dost? | Úplná cesta, profil a společný výklad přítomny v HTML v9 | Doložit skutečné prohlížečové a studentské ověření |
| Vstupní navigace nad dvěma cestami | Úvod se třemi vstupy a katalog přítomny v HTML v9 | Ověřit skutečný průchod a návraty |
| Mapa antického učiva | H10: hotový učitelský podklad, ověřen RVP G a přechodná pravidla | Přizpůsobit konkrétnímu ŠVP; navazující B1 je po R1 |
| B1 — Poznání a přesvědčování | implementováno, čeká na revizi — R3, 28. 9. 2026; úplný průchod, profily Sókrata a Protágory, společné bloky a návraty jsou v atlasu | R4: obsahová, didaktická a funkční revize B1; automatizovaný průchod v Chromium prošel 141 kontrolami, ověření se studenty zůstává nedoloženo |
| B4 — Předsókratici | Vymezen v mapě; scénář čeká | R1–R4 po B1 |
| B2 — Platón | Vymezen v mapě; scénář čeká | R1–R4 po B4 |
| B3 — Aristotelés | Vymezen v mapě; scénář čeká | R1–R4 po B2 |

Celek lze považovat za připravený k výuce, když má jasnou otázku a úplný průchod, student dostane zpětnou vazbu a nový případ, obsah drží argumentačně i historicky, fungují přímé odkazy a návraty a text nemluví jazykem redakčního posudku. Zda skutečně naplňuje zamýšlené výsledky, ověřujeme na vysvětlení a jednání studentů, ne počtem kliknutí.

Účty, žebříčky, školní administraci, AI rozhovory s filozofy, audio a rozsáhlou technologickou přestavbu přidávat až na základě konkrétní potřeby. Skilly upravovat po zjištění opakovaného problému ve více celcích. Samostatný skill pro každého filozofa není potřeba.

**Bezprostřední další zadání: R4 pro B1.** R3/B1 dne 28. 9. 2026 vložil úplnou cestu, oba profily, společné výklady, vstup z úvodu, konkrétní zpětné vazby a pozdější návrat. Automatizované ověření v Chromium prošlo 141 kontrolami: úplný průchod a obě fáze kroku 3, první a revidovaná odpověď, čtyři typy resetu, všech osm přímých adres po obnovení, Zpět/Vpřed, odbočky do obou profilů a mapy s návratem, klávesnice, šířky 320, 390 a 1366 px v obou tématech a s omezeným pohybem, obě starší cesty a mapa. Vizuálně byly zkontrolovány tři hraniční pohledy. Jde o technické ověření, nikoli zkoušení se studenty. R4 má zkontrolovat obsah, didaktiku a funkci B1 a případné nálezy opravit; B4 nezačínat před uzavřením tohoto cyklu.
