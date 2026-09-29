# Rozhodnutí

Zásadní rozhodnutí projektu, nejnovější nahoře. Každé má datum, rozhodnutí a stručný důvod. Změna rozhodnutí se zapisuje jako nový záznam, starý zůstává.

## 29. 9. 2026: Vizuální návrh (P1)

| Rozhodnutí | Důvod |
| --- | --- |
| Vizuální návrh čtyř obrazovek schválen; závazná pravidla a tokeny jsou v `docs/design.md` | Jednotný vizuální jazyk pro všechny stránky místo dvou stylů z prototypu |
| Výchozí barevnost A · Papír a pigment, světlý i tmavý režim; varianta B zůstává zdokumentovaná jako alternativa | Teplý „muzejní“ papír a pigmenty období; autor si zvlášť oblíbil tmavou paletu |
| Písma Newsreader a Instrument Sans, uložená lokálně | Plná čeština, časopisecký charakter, funguje offline; Instrument Sans místo Interu kvůli výraznějšímu charakteru |
| Osobnosti se místo iniciál zobrazují mincí s atributem z příběhu a vždy s vysvětlením „Proč?“ | Iniciály splývaly (Sókratés, Seneca, Spinoza) a působily jako výplň |
| Období tvoří souvislý pás s plynulými přechody barev a ornamentem každé doby | Dějiny mají působit jako tok, ne jako řada obdélníků |
| Pruhy v řece životů mají barvu období, žijící plnou a ostatní vybledlou; směr ukazuje štítek | Méně barev na mapě, čitelnější „kdo žije teď“ |
| Pořadí dalších kroků: P2 (založení Astra) a teprve potom P4 (Mapa a čas v2) | P4 staví na datech, komponentách a tokenech z P2 |
| Projekt v Astru se zakládá od nuly; obsah prototypu v9 (27 myslitelů, Marcus) se nepřenáší, slouží jen jako inspirace. Data se ověřují znovu, první šablonou osobnosti je Sókratés | Prototyp v9 je nedotažený, jeho obsah neodpovídá novému tónu a nebyl ověřený |

## 29. 9. 2026: Architektura celé filozofie (P3, brána F0)

| Rozhodnutí | Důvod |
| --- | --- |
| Osm období, deset velkých otázek, 35 cest a závěrečná cesta „Jak být sám sebou?“ podle `docs/architektura.md` | Schváleno autorem jako závazný plán obsahu |
| Bez samostatné linie „Česká stopa“; místo ní linie Stoicismus napříč dějinami, Seneca jako portrét, cesty 33 a 34 a Stoický týden | Autor chce stoicismu dát víc prostoru; čeští filozofové zůstávají tam, kde nesou cestu |
| Religionistika je součástí atlasu jako vrstva Náboženství světa (10 stránek, mapa) a cesta 35 | RVP G ji spojuje s filozofií v celku Úvod do filozofie a religionistiky; využití v ZSV |
| Nefilozofové s přesahem (Frankl, William James, Darwin, Freud, Durkheim, Weber, Gándhí, Stockdale, Beck) mají profil nebo medailonek | Nesou příběh nebo myšlenku důležitou pro filozofii |
| Cílová škola je gymnázium; mapování přímo na RVP G bez konkrétního ŠVP | Autor zatím neučí a chce učit na gymnáziu |

## 29. 9. 2026: Restart projektu (F0)

| Rozhodnutí | Důvod |
| --- | --- |
| Atlas se buduje znovu jako statický web v Astru; prototyp v9 (jeden soubor HTML) je v `docs/archiv/` | Jeden 3MB soubor s daty, texty a kódem dohromady neunese atlas celé filozofie; obsah v MDX a data v YAML se schématy se dají udržovat a kontrolovat |
| Web zatím běží jen lokálně | Zveřejnění se rozhodne před zkoušením se studenty ve fázi F2 |
| Závěrečná práce nemá předepsanou podobu odevzdání | Offline export ani jednosouborová verze se nepřipravují |
| Páteří je západní filozofie, s okny do islámské, židovské, indické a čínské tradice | Odpovídá středoškolské výuce a je zvládnutelná; okna ukazují, že se filozofovalo i jinde |
| Licence: texty, data a obrazová úprava CC BY-NC-SA 4.0, kód MIT | Jiní učitelé mohou atlas používat a upravovat, ale nikdo ho nesmí prodávat |
| Stálá pravidla v `CLAUDE.md`, opakované postupy ve skillech ve složce `skills/`, jednorázové kroky v promptech | Pravidla se nemusí opakovat v každém zadání a verzují se s projektem |
| Workflow celku: podklady → psaní přímo do atlasu → revize → schválení autorem | Odpadá samostatný scénář a specifikace interakcí z prototypu (H01–R4) |
| Ve studentském textu nejsou redakční poznámky ani výhrady k vlastní práci; zdroje jsou v datech a v rozbalovacích Pramenech | Atlas má vyprávět; pochybnosti o pramenech se řeší v podkladech |
| Termíny: antika (F0–F3) zhruba do konce ledna 2027, pak jedno období za 6–8 týdnů | Do odevzdání závěrečné práce zbývá víc než rok |
