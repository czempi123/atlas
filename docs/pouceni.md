# Poučení z revizí a z psaní

Co se v hotových celcích nepovedlo a nemá se opakovat. Výtah ze záznamů revizí celků 1 až 5 (`docs/archiv/revize/`, `docs/revize/`); totéž drží skilly. Záznamy revizí kvůli tomu číst netřeba. Nové poučení sem připiš jednou větou.

## Prameny a formulace

- Shrnutí pramene drží rozdíly, které pramen dělá. „Asi“ zůstává „asi“ a doporučená formulace není silnější než tvrzení v podkladech.
- U dialogu řekni, kdo mluví: „Platón nechává Sókrata vyprávět…“. Názor, kterému mluvčí sám nevěří, mu nepřipisuj.
- Co s příběhem děláme my, nepřipisuj filozofovi. Spojovací věta netvrdí spor ani otázku, které nebyly.
- Co stojí jen na jednom sporném prameni, říká text s větou o prameni; blok k tomu nemá oddíl Co udělal.
- Shrnutí studie drží i to, co měli účastníci dělat a co vědci změnili. Výhrady patří do zpětné vazby; pokus „zkoušel“, ne „ukázal“.
- Výsledek pokusu se dvěma skupinami je rozdíl proti srovnávací skupině, ne „než dřív“. Ověř ve studii, s čím se srovnává, i když podklady nabízejí hotovou větu.
- Jménem nazvi jen toho, kdo nese příběh nebo myšlenku.
- Závěr cesty a text možností drží obraz pramene stejně jako scéna. Shrnutí na jednu větu („otočit se musí každý sám“) snadno řekne opak toho, co cesta o tři kroky dřív vyprávěla.
- Záporné tvrzení o autorovi („o návycích nepsal nic“) je tvrzení jako každé jiné: ověř ho v tomtéž zdroji celém. Blog, ze kterého věta vznikla, citoval o odstavec níž opak.
- Kde text filozofa zpřísní, aby nezněl jako omluva, ztratí rozdíl, kvůli kterému citát v kroku stojí. Napiš obojí: „V pořádku to není. Je to ale míň ošklivé než…“
- Co si filozof myslel („úplně jistý si nebyl“), je domněnka. Piš, co stojí v textu: „jeho výklad s tím na třech místech neladí“.
- Zájmeno za větou se dvěma muži čte student obráceně („Pohádají se. Přátelé ho vyvedou“). Jméno zopakuj, i když mělo zaznít jen jednou.
- Graf nebo kresba, která ukazuje jen směr, nenese jméno měřené věci („Jeden účastník“). Pojmenuj tvar („rychlý průběh“) a text pod ní řekne, odkud ten tvar je.

## Bloky

- Blok stojí před tím, co filozof udělal. Srovnání v Odkryj pointu neprozradí a text za blokem drží souvislost i bez odkrytí.
- Spor: obě strany odpoví na nejsilnější námitku druhé, postoj není krajnější než citát strany a scéna neohlašuje vítěze. Na telefonu čte student jednu stranu celou před druhou: první strana proto neodpovídá na něco, co ještě nezaznělo (námitku řekne scéna nebo začátek argumentu).
- Krok se dvěma bloky: první blok dostane vlastní Kam dál na kotvu pod sebou (`dal={{ href: '#…', text: '…' }}`). Jinak nabídne další krok a student přeskočí text mezi bloky.
- Koše v Roztřiď odpovídají na otázku bloku stejným tvarem („Ze zkušenosti · Od lidí · Z obrazovky“) a každá karta má koš, kam se dá poctivě dát.
- Změň jednu věc: možnosti dávají smysl v každé podmínce a zpětná vazba neusuzuje z možnosti, kterou student nezvolil. Nadpis „Co udělal…“ nestojí nad domněnkou; tam patří „Co by na to řekli“.
- Zpětná vazba vidí, co student zvolil nebo kam kartu dal, vysvětluje důvod a ptá se dál. Žádná možnost nedostane pokárání.
- Otázka na vlastní selhání nebo bolestnou chvíli nemá pole na psaní: Volba s `bezDuvodu: true` uloží jen zvolenou možnost a text kroku říká „Nikam ji nepiš“.
- Vlastní karta v Roztřiď: zpětná vazba se ptá, proč ji student dal do koše, ne jak moc si jí je jistý. U karty s něčím bolestným to zní jako pochybnost o tom, co zažil.
- Kde by vlastní karta byla zpověď (strachy ze smrti), blok ji nemá: student třídí cizí věty a text to říká.
- Strana Sporu, za kterou mluví autor mimo data (Plútarchos), má jen `oznaceni` a prázdnou minci; cizí mince by tvrdila, že mluví někdo jiný.

## Celek

- Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku. Scéna z portrétu se v cestě neopakuje doslova; cesta přitom musí stát i bez portrétu.
- Úvodní případ stránky otázky je jiného druhu než nový případ cesty.
- Každý hlas na stránce otázky se pozná a nezmenšuje se to, čím se liší. Odpověď hlasu má nejvýš dvě věty.
- Cesta dá slovo i studentovi, který s jejím filozofem nesouhlasí, a řekne mu, kdo je jeho spojenec. Spojenec je jiný myslitel: když námitce přitaká jen filozof cesty („to přiznal sám“), promění se v souhlas s ním.
- Čtyři citáty za sebou student přeskakuje.
- Citát, který končí obrazem, jemuž se celek vyhýbá (spánek a klid v celku o smrti), dostane v datech kratší podobu s vlastním id; komponenta Citát zkracovat neumí a ruční opis by obešel data.
- Délka se kvůli délce nekrátí: zvídavý student si přečte víc (rozhodnutí autora).
- Čas cesty na štítku (`minut`) se počítá: slova, která student opravdu přečte, při 150 za minutu, a k tomu ovládání. Neopisuje se z minulé cesty; počítá ho `node scripts/slova-cesta.mjs <slug>`.
- Čísla ze studie ověř v plném textu sám, ne přes nástroj, který stránku převypráví: repozitáře mívají vedle PDF i holý text a jde stáhnout z autorova Macu (`curl`). Příklad, který zní jako ze studie („sklenice vody po snídani“), porovnej s tím, co ve studii opravdu stojí.

## Student, kterého se téma bolestně týká

- První obrazovku kroku nebo kapitoly čti očima studenta, kterému někdo ubližuje. Citát o ráně nepatří na začátek kroku.
- Scéna, kde silnější odmítne pomoct nebo kde hrdina křivdu mlčky unese, dostane hned otázku pro studenta.
- Výzva Zkus to žít nemíří na člověka, který ubližuje.
- Celek 4: jeskyně nesmí studentovi lichotit, že on vidí a ostatní spí.
- Celek 6: první obrazovku čti i očima studenta, kterému někdo zemřel nebo umírá, studenta vážně nemocného a studenta s myšlenkami na smrt. Věta, která srovnává šťastné s nešťastnými („smrt bere víc šťastným“), říká tomu, komu je zle, že on moc neztratí: zůstane z ní jen první půlka. Věta, která nechává otevřené, jestli je lepší žít, nebo zemřít, do cesty nepatří, ani když je to věta o nevědění.
- Argument, který o studentově bolesti nemluví (věta o mrtvém u toho, kdo truchlí), dostane větu, že o něm není, na téže obrazovce.

## Co se skládá z dat

- Čti i to, co nikdo nepsal: Dobu a lidi, mini mapu, mini osu a popisek pod deskou. Nadpis skupiny musí sedět na typ vztahu a obraz nesmí odporovat textu.
- Poznámka u vztahu je studentský text: neodporuje popisku typu vztahu („znal ho z textů · … od Kratyla“) a neodkazuje na místa v díle.
- Poznámka se čte na obou stránkách vztahu. Věta s podmětem („nesouhlasil s ním, že…“) na jedné z nich říká opak; u sporu piš otázku, o kterou šlo („spor o ideje“, „stačí vědět, co je dobré?“).
- Polemika s člověkem, kterého kritik nemohl potkat, není „Znali se a přeli se“: má vlastní skupinu (spor na dálku).
- Text u desky (atribut, popisek) čte student dřív než první kapitolu: nesmí stát na slově, které stránka teprve vyloží (ctnost).
- Nová cesta a nový hlas mění stránky, které nikdo neotevřel: vstupy v hlavičkách všech jejích filozofů a hlasů, karty v Lidech, počet cest na Domů, počet kreseb v dílně. Celé testy pusť hned po přidání, ne až na konci. Filozof cesty bez vlastní stránky (Lucretius) nesmí na přehledu cesty dostat odkaz.
- Když se změní atribut nebo výklad osobnosti, přečti i `kdo` a `proc` v `lide.yaml`. Ukazuje je karta v Mapě a čase a stará věta tam přežije („ctnost je střed mezi dvěma krajnostmi“).

## Technika

- Blok v čtenářském sloupci profilu má 680 px, v kroku cesty až 960 px. Blok, který jsi viděl jen v cestě nebo v dílně, si v profilu prohlédni na 1440 px (Roztřiď se čtyřmi koši se tam rozsypal).
- Tmavý obraz (olejomalba) je v duotónu desky skoro černý: zesvětli ho před uložením a zapiš to k obrázku.
- Po přidání stránky, bloku nebo změně dat restartuj běžící `npm run dev`. Starý náhled ukáže stránku bez obsahu a odkazy na kotvy nikam nevedou.
- Playwright před každým během maže `test-results/`. Pracovní skripty patří do `scripts/`, snímky pro autora do `Claude outputs/`.
- Kresba s pohybem: pohyb jde zastavit, při omezeném pohybu kresba stojí a text pod ní říká totéž slovy. Na telefonu má jednotka kresby vyjít asi na pixel, jinak popisky nejdou přečíst. Novou kresbu stav na rámu `Kresba.svelte`; pasti (animace pod `.kresba--pohyb`, `transform` v SVG) má skill `atlas-komponenta`. Dojem z barvy nevznikne z barevného pozadí: chce věci známé barvy ve stejném světle (šaty v cestě 1). Kresbu, která má vyvolat dojem, ukaž autorovi dřív, než ji popíšeš jako hotovou.
- Chromium nevyfotí najednou stránku vyšší než asi 16 000 px; dlouhé stránky foť po částech (`scripts/snimky-listy.mjs`).
- Prvek s fokusem z klávesnice zůstane pod pevnou lištou, když leží ve viditelné části okna: prohlížeč stránku neposune a `scroll-padding` to nespraví. Dorovnává to základní rozvržení. Při revizi zkoušej skutečným tabulátorem na dvou výškách okna a skriptem `scripts/kontrola-fokus.mjs`.
- Studentské věty hlídají testy přesným zněním. Než opravíš větu, najdi ji v `tests/` (`grep -rn`) a test uprav v tomtéž commitu.
- Příkaz poslaný na autorův Mac musí skončit do minuty. `npm test` a sestavení pouštěj na pozadí s výstupem do souboru a na výsledek se ptej zvlášť.
