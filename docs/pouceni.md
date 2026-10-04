# Poučení z revizí a z psaní

Co se v hotových celcích nepovedlo a nemá se opakovat. Výtah ze záznamů revizí celků 1 až 3 (`docs/archiv/revize/`) a z psaní celku 4; totéž drží skilly. Záznamy revizí kvůli tomu číst netřeba. Nové poučení sem připiš jednou větou.

## Prameny a formulace

- Shrnutí pramene drží rozdíly, které pramen dělá. „Asi“ zůstává „asi“ a doporučená formulace není silnější než tvrzení v podkladech.
- U dialogu řekni, kdo mluví: „Platón nechává Sókrata vyprávět…“. Názor, kterému mluvčí sám nevěří, mu nepřipisuj.
- Co s příběhem děláme my, nepřipisuj filozofovi. Spojovací věta netvrdí spor ani otázku, které nebyly.
- Co stojí jen na jednom sporném prameni, říká text s větou o prameni; blok k tomu nemá oddíl Co udělal.
- Shrnutí studie drží i to, co měli účastníci dělat a co vědci změnili. Výhrady patří do zpětné vazby; pokus „zkoušel“, ne „ukázal“.
- Výsledek pokusu se dvěma skupinami je rozdíl proti srovnávací skupině, ne „než dřív“. Ověř ve studii, s čím se srovnává, i když podklady nabízejí hotovou větu.
- Jménem nazvi jen toho, kdo nese příběh nebo myšlenku.

## Bloky

- Blok stojí před tím, co filozof udělal. Srovnání v Odkryj pointu neprozradí a text za blokem drží souvislost i bez odkrytí.
- Spor: obě strany odpoví na nejsilnější námitku druhé, postoj není krajnější než citát strany a scéna neohlašuje vítěze. Na telefonu čte student jednu stranu celou před druhou: první strana proto neodpovídá na něco, co ještě nezaznělo (námitku řekne scéna nebo začátek argumentu).
- Krok se dvěma bloky: první blok dostane vlastní Kam dál na kotvu pod sebou (`dal={{ href: '#…', text: '…' }}`). Jinak nabídne další krok a student přeskočí text mezi bloky.
- Koše v Roztřiď odpovídají na otázku bloku stejným tvarem („Ze zkušenosti · Od lidí · Z obrazovky“) a každá karta má koš, kam se dá poctivě dát.
- Změň jednu věc: možnosti dávají smysl v každé podmínce a zpětná vazba neusuzuje z možnosti, kterou student nezvolil. Nadpis „Co udělal…“ nestojí nad domněnkou; tam patří „Co by na to řekli“.
- Zpětná vazba vidí, co student zvolil nebo kam kartu dal, vysvětluje důvod a ptá se dál. Žádná možnost nedostane pokárání.

## Celek

- Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku. Scéna z portrétu se v cestě neopakuje doslova; cesta přitom musí stát i bez portrétu.
- Úvodní případ stránky otázky je jiného druhu než nový případ cesty.
- Každý hlas na stránce otázky se pozná a nezmenšuje se to, čím se liší. Odpověď hlasu má nejvýš dvě věty.
- Cesta dá slovo i studentovi, který s jejím filozofem nesouhlasí, a řekne mu, kdo je jeho spojenec.
- Čtyři citáty za sebou student přeskakuje.
- Délka se kvůli délce nekrátí: zvídavý student si přečte víc (rozhodnutí autora).

## Student, kterého se téma bolestně týká

- První obrazovku kroku nebo kapitoly čti očima studenta, kterému někdo ubližuje. Citát o ráně nepatří na začátek kroku.
- Scéna, kde silnější odmítne pomoct nebo kde hrdina křivdu mlčky unese, dostane hned otázku pro studenta.
- Výzva Zkus to žít nemíří na člověka, který ubližuje.
- Celek 4: jeskyně nesmí studentovi lichotit, že on vidí a ostatní spí.

## Co se skládá z dat

- Čti i to, co nikdo nepsal: Dobu a lidi, mini mapu, mini osu a popisek pod deskou. Nadpis skupiny musí sedět na typ vztahu a obraz nesmí odporovat textu.

## Technika

- Po přidání stránky, bloku nebo změně dat restartuj běžící `npm run dev`. Starý náhled ukáže stránku bez obsahu a odkazy na kotvy nikam nevedou.
- Playwright před každým během maže `test-results/`. Pracovní skripty patří do `scripts/`, snímky pro autora do `Claude outputs/`.
- Kresba s pohybem: pohyb jde zastavit, při omezeném pohybu kresba stojí a text pod ní říká totéž slovy. Na telefonu má jednotka kresby vyjít asi na pixel, jinak popisky nejdou přečíst. Novou kresbu stav na rámu `Kresba.svelte`; pasti (animace pod `.kresba--pohyb`, `transform` v SVG) má skill `atlas-komponenta`. Dojem z barvy nevznikne z barevného pozadí: chce věci známé barvy ve stejném světle (šaty v cestě 1). Kresbu, která má vyvolat dojem, ukaž autorovi dřív, než ji popíšeš jako hotovou.
- Chromium nevyfotí najednou stránku vyšší než asi 16 000 px; dlouhé stránky foť po částech (`scripts/snimky-listy.mjs`).
