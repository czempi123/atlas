---
name: "atlas-revize"
description: "Revize hotového celku Atlasu myšlení očima filozofa, historika, studenta, učitele a uživatele; drobnosti opraví, zásadní nálezy seřadí podle dopadu s návrhem opravy."
---

# Revize celku

Revize hledá to, co by studentovi vadilo nebo co by ho zavedlo: nepřesnost, slabou námitku, nudný vstup, nejasný úkol, rozbitý krok. Nehodnotí délku textu ani vkus, pokud nebrání učení. Strojově znějící text se za vkus nepočítá: prázdná věta zabírá místo faktu a student, který ji pozná, přestane číst pozorně.

## Postup

1. **Připrav si podklady:** zadání celku, podkladový list z `docs/podklady/`, `docs/styl.md` a samotný obsah (MDX a data). U hotového webu spusť `npm run build` a `npm test`.
2. **Projdi celek jako student.** Celý průchod od vstupu po návrat, včetně odboček do profilů a mapy. Zkus odpovědět špatně, přeskočit krok, vrátit se, obnovit stránku, otevřít krok přímým odkazem. Na hotovém webu na šířce 390 a 1440 px, ve světlém i tmavém režimu a klávesnicí; pořiď snímky obrazovek a prohlédni je. Projdi ho i jako student, který s filozofem celku nesouhlasí (chce hodně vydělávat, nevěří, že stačí málo): najde v celku někoho, kdo mu dává za pravdu? Celek o tom, co má člověk unést, přijmout nebo odpustit (stoici, osud, role), projdi i jako student, kterému doma nebo ve třídě někdo ubližuje: čte někde, že se má smířit? Spočítej slova cesty; při 150 slovech za minutu a s ovládáním se má vejít do 20 minut.
3. **Projdi šest perspektiv** podle části „Kontrolní seznam revize“ níže: filozof, historik, student, učitel, rozhraní, lidský hlas. Shrnutí porovnej s podkladovým listem, čísla a sporná místa přímo s pramenem.
4. **Oprav rovnou**, co je drobné a jednoznačné: překlepy, konvence (jména, letopočty, uvozovky), redakční vsuvky ve studentském textu, rozbité odkazy, strojové obraty, které jdou škrtnout nebo přepsat beze změny významu (navazovací vata, pochvala na úvod zpětné vazby, zbytky značek, pomlčka místo čárky). Zásahy do významu, příběhu nebo struktury jen navrhni; patří k nim i věta, která po škrtnutí zůstane prázdná a potřebuje fakt z podkladů.
5. **Zapiš nálezy** do `docs/revize/<id-celku>-<datum>.md` ve formátu níže, nejvýš deset nejdůležitějších. Studentský obsah nikdy nedoplňuj o poznámky z revize.
6. **Předej** v pár větách: verdikt (připraveno ke schválení / po opravách / přepracovat), tři nejdůležitější nálezy a co bylo ověřeno technicky.

## Formát nálezu

```markdown
### [blokující | důležité | drobné] Krátký název
- **Kde:** soubor a místo (krok, odstavec, komponenta)
- **Co je špatně:** jedna až dvě věty
- **Proč to vadí studentovi:** konkrétní důsledek
- **Oprava:** hotové nové znění nebo přesný zásah
```

- **Blokující:** věcná chyba, podvržený citát, nefunkční krok, zpětná vazba, která hodnotí názor, nebo text, který by student pochopil opačně.
- **Důležité:** slabá námitka, nudný nebo úřední vstup, nejasný úkol, chybějící zpětná vazba u volby, zploštělý filozof, problém na telefonu, shluk strojových obratů v jednom kroku nebo kapitole.
- **Drobné:** styl, délka, drobná nekonzistence, ojedinělý strojový obrat.

## Zásady

- Hodnoť, co student skutečně udělá a pochopí, ne jak text zní autorovi.
- U každého filozofa se ptej: dostal svůj nejsilnější argument? Poznal by se v tom?
- Tlak hledej v celku, ne jen ve větách. Každá zpětná vazba může být v pořádku, a cesta přesto mluví jedním hlasem a končí shrnutím, které se čte jako verdikt.
- Přečti každou kombinaci: každou možnost v každé podmínce (Změň jednu věc), zpětnou vazbu karty v každém koši (Roztřiď) a kdo mluví poslední ve Sporu na telefonu. Do Roztřiď přidej vlastní kartu s něčím bolestným („hádka doma“) a přečti, co na ni blok odpoví.
- Přesný citát může na špatném místě vyznít jako rada. Čti první obrazovku každého kroku zvlášť: stojí u věty, která by se dala číst jako „snášej to“ nebo „můžeš si za to sám“, protihlas na téže obrazovce? Epiktétovo „neuráží tě ten, kdo tě bije“ v úvodu kroku bylo blokující, i když Aristotelés odpovídal o dva citáty níž.
- Čti i to, co se skládá z dat a nikdo to nepsal: nadpisy a popisky v Době a lidech, značky mini osy, popisky mini mapy, popisek pod deskou, nadpis „Co udělal …“. Chyba tam nevzniká při psaní, a proto ji při psaní nikdo nevidí („Znali se a přeli se“ nad lidmi, kteří se nikdy neviděli; osa se dvěma značkami „50“).
- Návrh nového znění zkontroluj proti pravidlům, která hlídají testy a styl (odpověď hlasu nejvýš dvě věty, věty do 25 slov), než ho předložíš.
- Snímky čti po výřezech: celostránkový snímek dlouhé stránky je po zmenšení nečitelný. Snímek jednoho prvku má pevnou lištu uprostřed a uříznutý přesah; to není nález. Překryvy a zakrytý fokus hledej i strojově (obdélníky prvků), ne jen očima.
- Revize obsahu a technická kontrola nejsou totéž co vyzkoušení se studenty. Zda celek učí, ukáže až skutečný průchod studentů; revize jen připraví půdu.

## Kdy je hotovo

Blokující nálezy jsou opravené nebo předané autorovi s hotovým návrhem opravy, drobné chyby opravené, záznam revize uložený a verdikt sdělený.

---

## Kontrolní seznam revize

Šest perspektiv. U každé otázky hledej konkrétní místo, kde odpověď zní „ne“.

### 1. Filozof

- Je myšlenka vyložená přesně, ne jako slogan (Epikúros ≠ požitkář, stoik ≠ lhostejný, sofista ≠ lhář)?
- Dostal každý filozof i protivník svůj nejsilnější argument?
- Je námitka skutečně silná, nebo jen slaměný panák, kterého snadno porazíme?
- Může rozumný student dojít k jinému závěru a dostane k tomu prostor?
- Má v celku svého myslitele i student, který s filozofem cesty nesouhlasí?
- Nemá poslední slovo těsně před hlasováním některý z filozofů? Nezmenšuje odpověď hlasu to, čím se myslitel liší od ostatních?
- Má každá strana Sporu odpověď na nejsilnější námitku druhé a není její postoj krajnější než její citát?
- Nevkládá text historické osobě do úst větu, kterou nenajdeme v prameni? Nepřipisuje jí spojovací věta záměr, otázku nebo protivníka, které neměla („Proti Epiktétovi tu otázku položil už Aristotelés“; „na námitku odpovídal příběhem“, když k námitce ten příběh vztahujeme až my)?
- Jsou pojmy vysvětlené lidsky a jednotně napříč atlasem?

### 2. Historik

- Sedí data, místa a vztahy s podkladovým listem a s daty osob (`src/data/`)?
- Je tradovaný příběh uvedený jako tradovaný („vypráví se“), fakt jako fakt?
- Nezmizelo z čísel „asi“ a „kolem“? Nestojí „přes“ tam, kde pramen říká „asi“? Ověř v prameni, ne jen v doporučené formulaci podkladového listu.
- Má každý citát dílo, místo a překlad?
- Netvrdí text, mapa nebo nadpis generovaného oddílu setkání tam, kde jde jen o vliv přes texty?
- Drží shrnutí studie i to, co měli účastníci dělat, nebo jen tu část, která se hodí filozofovi? Neříká text, co pokus „ukázal“, dřív, než se student zeptá, co dokládá?
- Je u rytiny, kresby nebo pozdější sochy vidět, čí je to představa a z kdy? Neodporuje obraz textu (Epiktétos s perem × „Sám nenapsal nic“)?
- Kresba s pohybem: říká text kroku i text pod ní totéž co ona, drží se pramene („kdyby“ zůstává „kdyby“) a nenechává studenta dívat se shora tam, kde má sedět uvnitř? Jde pohyb zastavit a stojí při omezeném pohybu?
- Je doba vylíčená tak, aby student pochopil, proč se tehdy myslelo právě takhle?

### 3. Šestnáctiletý student

- Chytne mě první odstavec? Chci číst dál?
- Týká se mě ta otázka? Dokážu ji spojit s vlastním životem?
- Vím v každém kroku, co mám udělat, bez čtení instrukcí dvakrát?
- Dostanu po každé volbě vysvětlení, proč, a ne jen verdikt?
- Dává každá možnost smysl v každé podmínce? Vidí zpětná vazba, co jsem skutečně zvolil?
- Nemám pocit, že mě někdo hodnotí za názor nebo tlačí k „správnému“ životnímu postoji?
- Projdu celkem, i když mi někdo ubližuje, aniž bych četl, že se mám smířit? Hledej v úvodech kroků, ve výzvě Zkus to žít (nemíří cvičení na člověka, který ubližuje?), ve zpětné vazbě vlastní karty („co je tvoje dílo“ zní jako vina), ve scéně, kde silnější odmítne pomoct, a ve slovech, která křivdu zlehčují („trapas“).
- Je ve studentském textu jediná věta, která mluví o práci autorů místo o filozofii? (Má zmizet.)
- Vydržím do konce? Kde bych to zavřel? Neříká srovnání na konci kroku totéž, čím začíná další krok?
- Přijde v úvodu profilu první myšlenka dřív než výčet míst a dat? Nenapovídá výzva Zkus to žít, jak má dopadnout?

### 4. Učitel

- Dá se krok použít ve třídě samostatně (projektor, jeden podnět na obrazovce)?
- Dá se odpověď studenta posoudit podle důvodu, ne podle shody s modelem?
- Navazuje celek na předchozí a připravuje další (vazby na mapu, osobnosti, otázky)?
- Jsou výsledky celku (nejvýš tři) v průchodu opravdu procvičené a v návratu ověřené?

### 5. Rozhraní

- Funguje celý průchod na 390 i 1440 px, ve světlém i tmavém režimu?
- Lze vše ovládat klávesnicí, je vidět fokus, dávají smysl popisky pro čtečku?
- Nezůstane prvek s fokusem pod pevnou spodní lištou? Vypadá vypnuté tlačítko vypnutě?
- Sedí osa a letopočty i přes přelom letopočtu (značky „př. n. l.“, žádný rok nula)?
- Nepřekrývají se prvky (ovládání, popisky mapy)? Mají prvky stejného druhu stejnou velikost a stavbu při krátkém i dlouhém textu?
- Nekončí řádek jednopísmennou předložkou? (Doplňuje sestavení; nález znamená text, který ho míjí.)
- Fungují přímé odkazy na krok, zpět a vpřed, obnovení stránky a návrat z odbočky?
- Zůstávají odpovědi uložené a dá se začít znovu?
- Vedou všechny odkazy na hotový obsah? Žádné slepé uličky ani „připravujeme“.
- Prošly automatické kontroly (`npm run build`, `npm test`)?

### 6. Lidský hlas

- Dala by se některá věta beze změny napsat o jiném filozofovi?
- Končí odstavec přívěskem, který hodnotí („čímž ukázal…“), nebo shrnutím toho, co už řekl?
- Sejdou se v jednom odstavci dvě slova ze seznamu nadužívaných?
- Vyvrací text tvrzení, které nikdo neřekl („Nejde jen o…“)?
- Jsou výčty po třech i tam, kde podklady dávají dvě nebo čtyři věci?
- Mění se označení téže osoby větu od věty?
- Začíná zpětná vazba pochvalou nebo zdvořilostí?
- Zůstaly v textech bloků značky Markdownu, výplně nebo zbytky rozhovoru s modelem?
- Stojí v textu pomlčka tam, kde stačí čárka nebo tečka?

Podrobný seznam s příklady je v oddílu Ať text nezní jako stroj níže.

---

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

V revizi: ojedinělý obrat oprav rovnou, když se význam nemění. Shluk zapiš jako nález a novou větu vezmi z podkladového listu: kdo, kde, co udělal, co řekl.