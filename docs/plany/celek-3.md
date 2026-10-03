# Plán větve celek-3: „Co mám ve svých rukou?“

Celek 3: cesta 5 „Co mám ve svých rukou?“ (období 2, velká otázka 4 „Jsem svobodný?“), portrét Epiktéta a portrét Marca Aurelia, který je zároveň druhým hlasem cesty (rozhodnutí autora 2. 10. 2026). Je to první stoický celek; podle `docs/architektura.md` má stoicismus v atlasu zvláštní váhu a po cestě 5 navazuje Stoický týden. Podklady vzniknou v `docs/podklady/celek-3-co-mam-v-rukou.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | hotovo 2. 10. 2026 (`docs/podklady/celek-3-co-mam-v-rukou.md`) |
| P7 | Portrét Epiktéta a portrét Marca Aurelia | hotovo 2. 10. 2026, schváleno 3. 10. 2026 |
| P8 | Cesta 5 „Co mám ve svých rukou?“ a stránka velké otázky 4 „Jsem svobodný?“ | hotovo a schváleno 3. 10. 2026 |
| P10 | Revize celku | hotovo 3. 10. 2026 (`docs/revize/celek-3-2026-10-03.md`); všech deset nálezů schváleno a zapracováno týž den |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | hotovo 3. 10. 2026 |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`.

## Co si celek nese z celků 1 a 2

- **Rozsah (rozhodnuto 2. 10. 2026):** Marcus Aurelius dostane v tomto celku i portrét a stránka velké otázky 4 vznikne už teď se čtyřmi antickými hlasy.
- **Co už v atlasu je:** Seneca jako hlas na stránce otázky 1 (citát `vita-beata-26`) a dva jeho citáty v cestě 6 (`seneca-ep-21-10`, `seneca-ep-18-9`); Epiktétos, Marcus Aurelius, Musonius Rufus a Seneca v datech (`lide.yaml`) bez stránek. Cesta 33 (Stockdale) a cesta 34 (Seneca a čas) jsou samostatné celky: jejich scény si celek 3 nebere.
- **Vyřízeno z dřívějška:** rok Domitianova vyhnání filozofů (v datech „asi 93“, ve studentském textu bez roku) a Epiktétovy pobyty v Římě a Níkopoli. Texty o Marcovi z prototypu v9 (`docs/archiv/`) jsou jen seznam témat; co z nich obstálo, je v podkladovém listu.
- **Poučení z revizí** (`docs/revize/celek-1-2026-10-01.md`, `docs/revize/celek-2-2026-10-02.md`; jsou i ve skillech):
  - shrnutí pramene drží jeho rozdíly a „asi“ zůstává „asi“;
  - Spor dá oběma stranám odpověď na nejsilnější námitku a postoj není krajnější než citát strany;
  - každý hlas na stránce otázky se pozná a nezmenšuje se to, čím se liší;
  - cesta dá slovo i studentovi, který s jejím filozofem nesouhlasí; u stoika to znamená myslitele, podle kterého na vnějších věcech záleží;
  - možnosti ve Změň jednu věc dávají smysl v každé podmínce, zpětná vazba vidí, co student zvolil;
  - tentýž citát i tentýž doložený detail nejvýš dvakrát v celku.
- **Technika:** blok Roztřiď je hotový a pro „co mám v rukou a co ne“ se nabízí; nezlomitelné mezery za jednopísmennými předložkami doplňuje sestavení; mini mapa hlídá překryvy popisků sama.
- **Na později (nepatří k celku 3):** tečky kroků v hlavičce cesty mají na telefonu 28 × 36 px.

## P6: Podklady k celku 3 „Co mám ve svých rukou?“

**Stav 2. 10. 2026:** hotovo. Zadání zůstává pro záznam.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Sonnet 5.5 · high s vyhledáváním; u sporných pramenů (příběh s Epiktétovou nohou, Historia Augusta o Marcovi) Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pracuj ve větvi celek-3; je založená z hlavní větve po sloučení celku 2.

Přečti CLAUDE.md, docs/styl.md, docs/plany/celek-3.md (co si celek nese z celků 1 a 2), v docs/architektura.md velkou otázku 4, cestu 5, cesty 33 a 34 (Stockdale a Seneca, aby se celky nepřekrývaly), linii Stoicismus napříč dějinami a Stoický týden, docs/podklady/k-overeni.md, hotový podkladový list docs/podklady/celek-2-jak-zit.md jako vzor a oba záznamy revizí v docs/revize/ (co se v celcích nepovedlo). Postupuj podle skillu atlas-overeni.

Připrav podklady k celku 3 „Co mám ve svých rukou?“. Studentský text zatím nepiš.

1. Epiktétos pro portrét: život (Hierapolis, otroctví v Římě, učitel Musonius Rufus, propuštění, Domitianovo vyhnání filozofů, škola v Níkopoli, žák Arriános, který jeho řeči zapsal). Příběh o pánovi, který mu kroutil nohou: zjisti, kdo ho vypráví, jak dlouho po Epiktétovi a co o jeho chromé noze říkají jiné prameny; označ, co je doložené a co tradované. Myšlenky: co je v naší moci a co ne, netrápí nás věci, ale naše soudy o nich, role a herec, svoboda otroka. Prameny: Rozpravy a Rukojeť, SEP „Epictetus“, IEP. Rozpor roků Domitianova vyhnání (89 × 93) je v k-overeni: rozhodni ho, nebo navrhni formulaci bez roku. Jeho nejsilnější argument v jeho nejsilnější verzi a nejsilnější námitka proti němu (není to rezignace? co s nespravedlností, která se změnit dá?) i s jeho odpovědí.
2. Marcus Aurelius pro cestu 5: císař, který si na tažení u Dunaje píše poznámky pro sebe; co převzal od Epiktéta a kde ho jmenuje nebo cituje; ranní příprava na den a pohled shora. Prameny: Hovory k sobě, SEP „Marcus Aurelius“; Historia Augusta jen s výhradou. Texty o Marcovi z prototypu v9 (docs/archiv) ber jako seznam témat, každé tvrzení ověř znovu. Navrhni, co si nechá cesta 5, co Marcův portrét a co cesta 34.
3. Cesta 5 „Co mám ve svých rukou?“: vstupní scéna (nejlépe doložená, ne jen nejznámější), vlastní pokus studenta (věci z jeho dne roztříděné na ty, které má v rukou, a ty, které ne; blok Roztřiď je hotový), skutečný střet pro blok Spor a nový případ ze současnosti (doložená událost, nebo „Představ si…“ bez historických osob). Pro Spor navrhni protivníka se silnou námitkou, která je v pramenech: kdo tvrdí, že na vnějších věcech záleží (Aristotelés a vnější dobra, Epikúros, akademický skeptik). Obě strany v nejsilnější verzi, každá s odpovědí na nejsilnější námitku druhé. Stockdale patří cestě 33: neber ho.
4. Velká otázka 4 „Jsem svobodný?“: zjisti, kteří antičtí myslitelé spolu o svobodě opravdu vedou spor (Epiktétos, Chrýsippos a osud, Epikúros a odchylka atomů, Aristotelés a dobrovolné jednání). U každého jedna ověřená myšlenka se zdrojem a citát, který patří téže osobě. Navrhni úvodní případ ze života studenta a řekni, jestli má stránka otázky 4 vzniknout už teď s antickými hlasy, nebo zůstat řádkem v přehledu do dalších období.
5. Stoický týden: které cvičení patří k cestě 5 (rozlišit, co je v mé moci) a čím je doložené.
6. Obrázky: Epiktétos (spolehlivá antická podobizna nejspíš není; navrhni řešení jako u Diogena) a Marcus Aurelius, z muzeí s otevřeným přístupem; autor, instituce, licence a odkaz.

Výstup: podkladový list docs/podklady/celek-3-co-mam-v-rukou.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem; vlastní převody z řečtiny a latiny jako v celcích 1 a 2), návrh dat do src/data, vyřízené a nové body v docs/podklady/k-overeni.md. Celé npm test musí projít (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí).

Pravidla jako u celku 2, s poučením z obou revizí: každé historické tvrzení a citát se zdrojem; u každého shrnutí pramene drž rozdíly, které pramen dělá; doporučená formulace nesmí být silnější než tvrzení („asi“ zůstává „asi“); tradované jako tradované, výklad jako výklad. Už v podkladech mysli na studenta, který se stoikem nesouhlasí: musí v nich být myslitel, který mu dá za pravdu. Pointa má přednost před stoprocentní historickou jistotou, fakta ale jen ověřená.

Nejdřív mi v pár bodech napiš, co budeš ověřovat, které příběhy považuješ za nejsilnější, jaký Spor a nový případ navrhuješ a jak bys rozdělil Epiktéta, Marca a stránku otázky 4 mezi tento celek a další, a počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci napiš, co je ověřeno, co zůstalo otevřené a co potřebuje moje rozhodnutí.
```

## Stav po P6 (2. 10. 2026)

**Rozhodl autor před prací:** vstupní scénou cesty 5 je příběh s nohou; Spor je Epiktétos × Aristotelés; nový případ má dva kroky (snímek z chatu a doložený pokus s emocemi); Marcus Aurelius se zpracuje rovnou i s portrétem. Další stoikové se doplní později.

**Rozhodl autor po podkladech:** stránka velké otázky 4 vznikne teď se čtyřmi hlasy (Aristotelés, Epikúros, Chrýsippos, Epiktétos); v datech zůstává Epiktétův odchod z Říma „asi 93“, ve studentském textu bez roku; Marcus má na desce rytinu jezdecké sochy z Met, Epiktétos rytinu s berlou z roku 1715; προαίρεσις je „vůle“; Roztřiď má tři koše; k novému případu B stačí souhrn studie; příklad v `docs/styl.md` (Cassiovy dopisy) je opraven.

**Co je hotové:** podkladový list (příběhy, tvrzení se zdrojem a doporučenou formulací, Spor, oba případy, čtyři hlasy otázky 4, cvičení Stoického týdne, obrázky), 31 pramenů a 40 citátů v `src/data/zdroje.yaml`, data Epiktéta (odchod z Říma „asi 93“) a Marca (Carnuntum), oba obrázky v `public/obrazky/` a v datech (`epiktetos-1715`, `marcus-jezdec`), vztah Karneadés → Chrýsippos, otevřené body v `docs/podklady/k-overeni.md` (oddíl Celek 3).

**Co si P7 a P8 nesou z podkladů:**

- Příběh s nohou jen jako „Vypráví se“ a bez jména pána; celý patří cestě 5, portrét ho zmíní jednou větou s odkazem.
- Lampa, Musonius, Epafroditův dům, Helvidius, vousy, škola jako ordinace a Arriános patří portrétu Epiktéta.
- Z Historie Augusty a z Cassia Diona všechno jako tradované; žádná věta z Hovorů se nespojuje s konkrétní událostí; „v noci“ doložené není.
- Ranní příprava a pohled shora zůstávají Stoickému týdnu, čas a pomíjivost cestě 34, Stockdale cestě 33.
- Cesta dá v posledním kroku slovo Aristotelovi; „vůli“ text jednou vysvětlí.
- Výřez obou obrázků na desce se musí zkontrolovat v prohlížeči (stránky dosud neexistovaly).
- Neověřené roky u Marca (války, Cassiova vzpoura, smrt syna a Faustiny, Commodus spoluvládcem) a Helvidiův konec: buď ověřit před psaním, nebo psát bez nich (`k-overeni.md`, oddíl Celek 3).

## P7: Portrét Epiktéta a portrét Marca Aurelia

**Stav 3. 10. 2026:** hotovo a schváleno autorem. Co je hotové a co si nese P8, je v oddílu „Stav po P7“ pod zadáním. Zadání zůstává pro záznam.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-3; podklady z P6 jsou v ní.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-3-co-mam-v-rukou.md (Čeho se drží celý celek, Jak převádím klíčová slova, Nejsilnější příběhy, Tvrzení: Epiktétos, Tvrzení: Marcus Aurelius i s návrhem rozdělení, Citáty se sloupcem Kde použít, Obrázky, Rozpory a rozhodnutí), docs/podklady/k-overeni.md (oddíl Celek 3), docs/rozhodnuti.md (záznamy z 2. 10. 2026), v docs/plany/celek-3.md oddíl „Stav po P6“, obě revize v docs/revize/ a hotové stránky src/content/osobnosti/sokrates.mdx (portrét) a epikuros.mdx jako vzor. Postupuj podle skillu atlas-osobnost.

Napiš dva portréty (v datech mají oba hloubka: portret):

1. Portrét Epiktéta src/content/osobnosti/epiktetos.mdx. Úvod scénou z domu mocného: otrok vidí, jak se jeho pán klaní císařovu ševci (Rozpravy I, 19) a jak u něj pláče muž, kterému zbylo „jen“ půldruhého milionu (I, 26). Kapitoly: otrok v Římě a učitel Musonius (zkouška „to se lidem stává“, Kapitol); vyhnanec a škola v Níkopoli (Domitianus bez roku, škola jako ordinace, Arriános zapisuje, ukradená lampa a Lúkianův sběratel); co mu nikdo nevzal (svoboda otroka, Helvidius a císař jako odpověď na námitku, že je to rezignace; role a herec). Příběh s nohou jen jednou větou jako „Vypráví se“ s odkazem na cestu 5: celý patří cestě. Dvě velké myšlenky s vlastním pokusem (návrh: „dvě ucha“ a „role a herec“), Zkus to žít, Kam dál (Marcus Aurelius, Diogenés; cesta 5 a otázka 4 se připojí v P8). Na desce je rytina epiktetos-1715: popisek říká, že je to představa rytce; berla je až na rytině, prameny dokládají jen kulhání.

2. Portrét Marca Aurelia src/content/osobnosti/marcus-aurelius.mdx. Motto „Dej pozor, ať nezcísařštíš“ (hovory-vi-30). Kapitoly: chlapec, který měl být císařem (filozofský plášť ve dvanácti, adopce, která ho vyděsila, od řečnictví k filozofii, Rusticus mu půjčí Epiktéta: jedna věta, zbytek nese cesta 5); vláda jako úkol (povodeň, mor, dražba císařského majetku); zápisky z tažení (psáno řecky a pro sebe, Carnuntum, pevnost, ústraní v sobě, věci svlečené z pozlátka); Cassius a konec (zničené písemnosti, smrt roku 180, Commodus, Dionovo hodnocení). Ukaž, čím se liší od Epiktéta: stoik, který musí vládnout („jako Antoninus mám za vlast Řím, jako člověk svět“; kulhavý voják, kterému pomůže druhý). Dvě velké myšlenky s vlastním pokusem, Zkus to žít, Kam dál (Epiktétos, velká otázka 1; cesta 5 se připojí v P8). Na desce je rytina marcus-jezdec.

Co do portrétů nepatří, protože to nese cesta 5, stránka otázky 4 nebo Stoický týden: celý příběh s nohou (origenes-vii-53, rukojet-9), Epiktétovo dělení (rukojet-1), dvojice vět otroka a císaře (rukojet-5, hovory-viii-47, hovory-i-7), citáty Sporu a případů (rukojet-14, rozpravy-ii-5-1, rukojet-20, hovory-ix-5, hovory-vi-6, rozpravy-iii-2-4, všechny etika-…), citát otázky 4 (rozpravy-iv-1-1), cvičení (rukojet-1-5, rozpravy-iii-3-16), ranní příprava a pohled shora (hovory-ii-1, hovory-v-1, hovory-ix-30; v portrétu nejvýš jedna věta), čas a pomíjivost (cesta 34), Stockdale (cesta 33).

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml; Helvidiova slova uveď jako jeho slova v Epiktétově vyprávění. Všechno z Historie Augusty a z Cassia Diona „Vypráví se, že…“. Žádnou větu z Hovorů nespojuj s konkrétní událostí („tohle napsal po povodni“). Nepiš „v noci u Dunaje“, „jako chlapec přišel do Říma“, jméno pána ve scéně s nohou, rok vykázání filozofů, Marcův věk při adopci, místo jeho smrti ani roky, které k-overeni vede jako neověřené. Drž rozdíly pramenů (železná lampa × hliněná; „zničil“, ne „spálil“; kulhání doložené, zlomená noha tradovaná). προαίρεσις je „vůle“ a text ji jednou vysvětlí. Citlivá místa (dveře jsou otevřené, smrt dítěte, tělesná láska v Hovorech VI, 13) do studentského textu nedávej. Jména střídmě: Arriános, Musonius a Rusticus jménem, Epafroditos jen v portrétu Epiktéta, Helvidius jednou. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); obě stránky si prohlédni v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu, hlavně jak deska ořezává obě rytiny (vyrez v zdroje.yaml je jen odhad) a jak mini mapa ukáže Níkopoli a Carnuntum; projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš, jakou scénou otevřeš každý portrét, jaké kapitoly a bloky v něm budou, které citáty použiješ a čím se oba portréty navzájem neopakují, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci pošli snímky obou stránek a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

## Stav po P7 (2. 10. 2026, schváleno 3. 10. 2026)

**Rozhodl autor nad osnovou:** portrét Epiktéta má čtyři kapitoly; Marcovo císařské jméno Antoninus se ověří (ověřeno v Britannice a zapsáno v podkladech).

**Rozhodl autor po portrétech (3. 10. 2026):** portréty schváleny; mini mapa nechává „působení asi 93 n. l.“.

**Co je hotové:** `src/content/osobnosti/epiktetos.mdx` a `marcus-aurelius.mdx`, šest bloků v `src/content/bloky/` (`epiktetos-musoniova-zkouska`, `epiktetos-kdo-je-svobodnejsi`, `epiktetos-senator`, `marcus-vladnout-nechtel`, `marcus-prazdna-pokladna`, `marcus-pisemnosti`), obě stránky v testech prohlídky a mini mapy. Obrázky mají zkontrolovaný výřez (`vyrez` a nový `vyrezNaSirku` pro desku na telefonu), mini mapa píše u přibližného roku „asi“, místo se jmenuje Níkopolis. Rozhodnutí jsou v `docs/rozhodnuti.md` (P7), otevřené body v `docs/podklady/k-overeni.md` (Celek 3, Po P7).

**Co si P8 nese z portrétů:**

- **Použité citáty** (v cestě ani na stránce otázky už ne): u Epiktéta `rozpravy-i-1-23` (motto), `rozpravy-iii-23-30`, `rozpravy-i-18-15`, `rozpravy-i-16-20`, `rozpravy-i-2-21`, `rukojet-43`, `rukojet-17`; u Marca `hovory-vi-30` (motto), `hovory-vi-44`, `hovory-iv-3`, `hovory-viii-48`, `hovory-viii-59`, `hovory-x-16`, `hovory-vii-7`. Nepoužité zůstaly `hovory-iv-41`, `hovory-v-1`, `rozpravy-iii-2-4` a `rukojet-1-5`.
- **Odkaz na cestu:** v portrétu Epiktéta, kapitola 03, stojí věta „Celý ten příběh vypráví cesta „Co mám ve svých rukou?“.“ zatím bez odkazu. P8 z ní udělá odkaz nebo za odstavec vloží kartu cesty; do Kam dál obou portrétů doplní cestu 5 a otázku 4.
- **Co portréty říkají o vztahu obou:** Rusticus půjčil Marcovi Epiktétovy zápisky (jedna věta u Marca), císař si opisoval Epiktétovy věty (jedna věta na konci kapitoly 02 u Epiktéta), kulhavý voják (Marcova druhá myšlenka). Že se nepotkali a že Marcus říká totéž co Epiktétos, zůstalo cestě (krok 4).
- **Kdo žil dřív?** je u Epiktéta s Diogenem a u Marca se Senekou; dvojice Epiktétos × Marcus je volná pro cestu.
- **Svoboda:** portrét Epiktéta má Volbu „Kdo z těch dvou je svobodnější?“ (pán, nebo otrok) a propuštěného otroka (Rozpravy IV, 1, 33–37). Stránka otázky 4 stojí na `rozpravy-iv-1-1` a na otázce, jestli je v mých rukou aspoň moje rozhodnutí; pána a ševce neopakovat.
- **Vůle** je v portrétu Epiktéta vysvětlená jednou (kapitola 03); cesta ji vysvětlí po svém, protože musí stát i bez portrétu.

## P8: Cesta 5 „Co mám ve svých rukou?“ a stránka velké otázky 4

**Stav 3. 10. 2026:** hotovo a schváleno autorem („V pořádku, P8 schvaluju“). Co je hotové a na co se má podívat revize, je v oddílu „Stav po P8“ na konci. Zadání zůstává pro záznam.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-3; portréty Epiktéta a Marca Aurelia z P7 jsou v ní hotové a schválené.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-3-co-mam-v-rukou.md (Čeho se drží celý celek, Tvrzení: cesta 5 se Sporem a oběma novými případy, Velká otázka 4, Stoický týden, Citáty se sloupcem Kde použít, Rozpory a rozhodnutí), docs/podklady/k-overeni.md (oddíl Celek 3 a co přibylo v P7), docs/rozhodnuti.md (záznamy z 2. a 3. 10. 2026), v docs/plany/celek-3.md oddíl „Stav po P7“ (použité citáty, věta s odkazem na cestu, co portréty říkají o vztahu obou), obě revize v docs/revize/, v docs/architektura.md velkou otázku 4 a cesty 5, 33 a 34, v docs/design.md oddíly Bloky, Cesta a Velká otázka, hotovou cestu 6 (src/content/cesty/kolik-je-dost*), stránku otázky 1 (src/content/otazky/jak-zit.mdx) a oba nové portréty, ať se v celku nic neopakuje. Postupuj podle skillu atlas-cesta.

Udělej:

1. Cestu 5 „Co mám ve svých rukou?“ (období 2, velká otázka 4, filozofové Epiktétos a Marcus Aurelius, do 20 minut, 7 až 8 kroků). Pořadí navržené v podkladech: scéna s nohou jako „Vypráví se“ a za ní doložená věta (origenes-vii-53, rukojet-9) → vlastní pokus: věci z jednoho dne do tří košů „Mám v rukou“, „Zčásti“, „Nemám v rukou“ (blok Roztřiď; zpětná vazba se u prostředního koše ptá na dvě půlky karty) → Epiktétovo dělení a vítr nebo lučištník (rukojet-1, rukojet-5) → otrok a císař: Marcus si opisuje Epiktéta a říká totéž (hovory-i-7, hovory-viii-47; návrh „Kterou větu napsal otrok a kterou císař?“) → Spor Epiktétos × Aristotelés jako spor dvou škol bez smyšleného setkání (rukojet-14, rozpravy-ii-5-1, etika-1153b, etika-1100b) → krok „Představ si… snímek z chatu“ (Změň jednu věc; rukojet-20, hovory-vi-6, hovory-ix-5, etika-1126a) → krok s pokusem o přehodnocení a potlačení emocí (jen tři tvrzení ze souhrnu, bez jména autora; rozpravy-iii-2-4; co z pokusu nevyplývá, patří do zpětné vazby) → vlastní pravidlo (Moje stanovisko s rozbalene). Poslední krok dá slovo i tomu, kdo s Epiktétem nesouhlasí: Aristotelés by řekl, že na zdraví, přátelích a pověsti záleží a že zlobit se je někdy správně.

2. Stránku velké otázky 4 „Jsem svobodný?“ (src/content/otazky/jsem-svobodny je zatím jen řádek v přehledu; doplň ji podle vzoru otázek 7 a 1): úvodní případ „Představ si…“ (kamarád po ošklivé zprávě řekne „já jsem prostě výbušný, mám to po tátovi, nemůžu za to“) a čtyři hlasy podle podkladů: Aristotelés (etika-1114a), Epikúros (menoikeus-134), Chrýsippos (de-fato-43) a Epiktétos (rozpravy-iv-1-1). Odchylku atomů podej jako nauku, kterou Epikúrovi připisují pozdější prameny.

3. Propojení: do Kam dál obou portrétů doplň cestu 5 a otázku 4; kartu cesty dej do portrétu Epiktéta tam, kde na ni text navazuje; v přehledu otázek přepoj otázku 4 na vlastní stránku. Cesty 33 a 34 a Stoický týden neexistují: neodkazuj na ně.

Co se po portrétech nesmí opakovat:
- Lampa, Musonius, Epafroditův dům, Helvidius, role a herec, dvě ucha jsou v portrétu Epiktéta; cesta stojí na noze, dělení a soudech.
- Život Marca, dražba, mor, Cassius, pevnost a ústraní jsou v jeho portrétu; cesta z něj bere jen to, že si opisuje Epiktéta a říká totéž shora.
- Tentýž citát a tentýž doložený detail nejvýš dvakrát v celku; citáty použité v portrétech v cestě ani na stránce otázky nepoužívej.
- Aristotelés je na stránce otázky 1 (činnost a vnější dobra), ve Sporu (rány osudu a hněv) a na otázce 4 (odpovědnost za povahu): pokaždé jiná myšlenka a jiný citát.
- Každý hlas na stránce otázky se musí poznat: Aristotelés ručí i za povahu, Epikúros jediný popírá, že všechno má nutnou příčinu, Chrýsippos drží osud i odpovědnost zároveň, Epiktétos obrací otázku dovnitř.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml. Scénu s nohou uveď „Vypráví se, že…“, bez jména pána a bez roku; vymyšlené situace „Představ si…“ bez historických osob; pokus vyprávěj přímo jako doloženou událost. Spor bez ohlášeného vítěze, první věta rámce řekne, že Aristotelés zemřel dřív, než stoická škola vznikla; obě strany dostanou odpověď na nejsilnější námitku druhé, postoj strany není krajnější než její citát a domyšlené odpovědi podávej jako výklad („Epiktétos by mohl odpovědět“). Možnosti ve Změň jednu věc musí dávat smysl v každé podmínce a zpětná vazba musí vidět, co student zvolil. Zpětná vazba vysvětluje důvod a ptá se dál, nikdy neříká, kdo má pravdu; student má právo na koš „Zčásti“ i na nesouhlas se stoikem. προαίρεσις je „vůle“ a text ji jednou vysvětlí. Větu „i ke špatnému otci jsi pořád synem“ (Rukojeť 30) nepodávej jako radu. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); stránku otázky 4 a cestu 5 přidej do testů prohlídky; cestu projdi celou v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí, jednou i bez odkrytí bloků; projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš osnovu cesty 5 (kroky, blok v každém, odhad minut), karty pro Roztřiď, možnosti a podmínky nového případu a čtyři odpovědi hlasů na úvodní případ otázky 4, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích (cesta, stránka otázky, propojení) a nic neposílej na GitHub. Na konci pošli snímky cesty a stránky otázky a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

## Stav po P8 (3. 10. 2026, schváleno týž den)

**Rozhodl autor nad osnovou:** osm kroků; třetí podmínka nového případu „Do večera to všichni pustili z hlavy“; v kroku 6 tři citáty; na otázce 4 smějí všichni čtyři odpovědět „může“.

**Co je hotové:** cesta 5 (`src/content/cesty/co-mam-ve-svych-rukou.mdx` a osm kroků), čtyři bloky (`cesta5-tri-kose`, `cesta5-aristoteles-spor`, `cesta5-snimek-z-chatu`, `cesta5-pokus`), stránka otázky 4 (`src/content/otazky/jsem-svobodny.mdx`, čtyři hlasy), propojení (karta cesty na konci kapitoly 04 portrétu Epiktéta, odkaz u věty o noze, Kam dál obou portrétů; vstupy v hlavičce, přehled otázek a Lidé se složily samy z dat). Testy: cesta 5 v prohlídce kroků, celý průchod klávesnicí na telefonu a průchod bez odkrytí bloků (`tests/e2e/cesta5.spec.ts`), stránka otázky 4 a propojení (`tests/e2e/otazka.spec.ts`).

**Na co se má podívat revize (P10):**

- Dvě zprávy v celku: úvodní případ otázky 4 a snímek z chatu v kroku 6.
- Aristotelés na třech místech (otázka 1, Spor a krok 6, otázka 4): pokaždé jiná myšlenka a jiný citát.
- Krok 5 má čtyři citáty před Sporem a je nejdelší; krok 6 tři.
- Student, který se stoikem nesouhlasí: čtvrtá možnost Volby v portrétu, Aristotelés ve Sporu, v kroku 6 a 7 a v kroku 8.
- Rozsah: text kroků asi 700 slov, s bloky kolem 1 700; odhad 20 minut.

## P10: Revize celku 3 „Co mám ve svých rukou?“

**Stav 3. 10. 2026:** hotovo, výsledek je v oddílu „Stav po P10“ na konci. Zadání zůstává pro záznam. Revize projde celý celek skillem `atlas-revize`: drobnosti opraví rovnou, zásahy do významu, příběhu a struktury jen navrhne a počká na rozhodnutí autora.

Celek je o tom, co člověk nemá ve své moci. Největší riziko proto není věcná chyba, ale tón: cesta ani portréty nesmějí studentovi, kterému někdo ubližuje, naznačovat, že se má smířit a mlčet. Revize to má prověřit jako první.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high. Nový chat je tu záměr: portréty i cestu psal jeden chat a revize má číst cizíma očima.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-3.

Udělej revizi celku 3 „Co mám ve svých rukou?“ skillem atlas-revize. Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-3-co-mam-v-rukou.md, docs/podklady/k-overeni.md (oddíl Celek 3 i s částmi Po P7 a Po P8), docs/rozhodnuti.md (záznamy z 2. a 3. 10. 2026), obě revize v docs/revize/ (vzor záznamu a chyby, které se nemají opakovat), v docs/plany/celek-3.md oddíly „Stav po P7“ a „Stav po P8“ a v docs/design.md oddíly Komponenty (Deska a Mini mapa osoby), Bloky, Cesta a Velká otázka.

Celek tvoří:
- portrét Epiktéta (src/content/osobnosti/epiktetos.mdx, kapitoly 01–04) a portrét Marca Aurelia (src/content/osobnosti/marcus-aurelius.mdx, kapitoly 01–04) s bloky epiktetos-* a marcus-* v src/content/bloky,
- cesta 5 „Co mám ve svých rukou?“ (src/content/cesty/co-mam-ve-svych-rukou*, 8 kroků, bloky cesta5-*),
- stránka velké otázky 4 (src/content/otazky/jsem-svobodny.mdx, adresa /otazka/jsem-svobodny/),
- vstupy a návraty: přehled /otazky/, Lidé a směry, vstupy v hlavičce profilu (Epikúros má nově tři otázky), karta cesty v portrétu Epiktéta, Kam dál, Pokračuj a Můj deník.

Zvlášť zkontroluj:
1. Rezignace a křivda. Projdi zpětné vazby ve Volbě s Musoniem (portrét, kapitola 01), ve Volbě „Kdo je svobodnější?“ (kapitola 03), v pokusu se senátorem (kapitola 04), v Roztřiď (krok 2), ve snímku z chatu (krok 6), v kroku 7 a obě výzvy Zkus to žít. Projde celkem student, kterému doma nebo ve třídě někdo ubližuje, aniž by četl, že se má smířit? Je někde věta, která zní jako rada snášet křivdu? Dostane slovo ten, kdo říká, že vnitřní klid křivdu neodčiní?
2. Spor Epiktétos × Aristotelés v kroku 5: má každá strana odpověď na nejsilnější námitku druhé? Kdo mluví na telefonu poslední a zůstává jeho poslední tah bez odpovědi? Je třetí Epiktétův argument podaný jako výklad? Říká scéna jasně, že jde o spor dvou škol, a neoznamuje vítěze? Není postoj strany krajnější než její citát?
3. Tradované × doložené. Noha jen jako „Vypráví se“, bez jména pána a bez roku; kulhání jako fakt. Všechno z Historie Augusty a z Cassia Diona jako tradované. Žádná věta z Hovorů spojená s konkrétní událostí (pozor na citáty, které stojí hned za scénou: `hovory-vi-44` za dražbou, `hovory-viii-59` za Cassiem; Kde jsme v kroku 4). Železná lampa × hliněná, „zničit“, ne „spálit“, žádná noc u Dunaje, žádný věk při adopci, žádné místo smrti, žádný neověřený rok. Každé shrnutí porovnej s podkladovým listem, sporná místa přímo s pramenem.
4. Čtyři hlasy na stránce otázky 4: poznal by se v nich každý (Aristotelés ručí i za povahu, Epikúros jediný popírá, že všechno má nutnou příčinu, Chrýsippos drží osud i odpovědnost zároveň, Epiktétos obrací otázku dovnitř)? Všichni čtyři říkají „může“: je i tak vidět, kde se rozcházejí? Je odchylka atomů podaná jako nauka, kterou Epikúrovi připisují pozdější prameny?
5. Aristotelés na třech místech (stránka otázky 1, Spor a krok 6 cesty 5, stránka otázky 4): říká pokaždé něco jiného a jiným citátem? Nezmenšuje se nikde to, čím se od stoiků liší?
6. Opakování v celku: pán a švec (úvod portrétu × Volba v kapitole 03), noha (portrét jednou větou × krok 1), „vůle“ vysvětlená v portrétu i v cestě, Rusticus a Epiktétova kniha (portrét Marca × krok 4), kulhavý voják, dvě zprávy (úvodní případ otázky 4 × snímek z chatu v kroku 6). Tentýž citát nanejvýš dvakrát v celku; citáty z portrétů v cestě ani na stránce otázky (seznam je ve „Stavu po P7“).
7. Pokus z roku 1998 v kroku 7: jen tři tvrzení ze souhrnu, bez čísel a bez jména autora; výhrady jen ve zpětné vazbě. Nevyznívá krok jako důkaz, že Epiktétos měl pravdu?
8. Citlivá místa: v celku nesmí být „dveře jsou otevřené“, smrt dítěte, tělesná láska z Hovorů VI, 13 ani věta o špatném otci (Rukojeť 30) jako rada.
9. Délka: dá se cesta projít do 20 minut? Krok 5 má čtyři citáty před Sporem, krok 6 tři. Kde by student přestal číst v cestě a kde v portrétech na telefonu (oba mají kolem 15 000 px)?
10. Rozhraní: výřez obou rytin na desce na 390 i 1440 px (`vyrez`, `vyrezNaSirku`), mini mapa s Níkopolí a Carnuntem („asi“ u přibližných roků), hlavička Epikúrova profilu se třemi otázkami na telefonu, Roztřiď s osmi kartami prstem i klávesnicí, odhad „otrok, nebo císař“ v kroku 4 (ví student napoprvé, co má dělat?). Nic rozbitého v celcích 1 a 2.

Postup podle skillu: projdi celek jako student na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí (i přímé odkazy na kroky, obnovení stránky, Začít znovu, deník), cestu jednou i bez odkrytí bloků a jednou očima studenta, který s Epiktétem nesouhlasí, pak pět perspektiv. Drobnosti oprav rovnou a commituj česky; zásahy do významu, příběhu nebo struktury jen navrhni s hotovým novým zněním. Záznam ulož do docs/revize/celek-3-<datum>.md (nejvýš deset nálezů) a stav zapiš do docs/plany/celek-3.md.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí). Na vlastní náhled si web sestav (npm run build) a pusť npx astro preview --port 4323 --ignore-lock; příkazy delší než minutu pouštěj na pozadí s výstupem do souboru a pomocné skripty drž mimo test-results.

Na konci mi napiš verdikt (připraveno ke schválení / po opravách / přepracovat), tři nejdůležitější nálezy a pošli snímky míst, kterých se nálezy týkají. Návrhy zatím nezapracovávej, počkej na moje rozhodnutí. Nic neposílej na GitHub a do hlavní větve nic neslučuj.
```

Po P10 rozhodne autor o návrzích z revize. Po jejich zapracování následuje schválení celku 3, sloučení `celek-3` do hlavní větve a hlavní větev na GitHub. Pak se založí větev `rozhrani-v2` (`docs/plany/rozhrani-v2.md`, krok R1).

## Stav po P10 (3. 10. 2026)

**Verdikt revize: po opravách.** Záznam je v `docs/revize/celek-3-2026-10-03.md`, snímky míst ve složce `Claude outputs/revize-celek-3/` (mimo git).

**Opraveno rovnou** (commity 017aca4 a 98e2584): „Velkou část vlády válčil…“ v úvodu Marcova portrétu, „Epiktétos k ní má příběh“ v kapitole 04, „asi čtyři sta let“ v Kde jsme kroku 5, „jak léta jednal“ v Aristotelově odpovědi na otázce 4; mini osa současníků nese u roků před přelomem letopočtu „př. n. l.“ (nový test).

**Nálezy** (autor schválil všech deset 3. 10. 2026 a všechny jsou zapracované; co přesně se změnilo, je v záznamu v oddílu „Po rozhodnutí autora“):

| # | Nález | Váha |
| --- | --- | --- |
| 1 | Krok 6: úvodní otázka „když ti někdo ublíží“ a citát s „nebo tě bije“; „trapas“ ve zpětné vazbě | blokující |
| 2 | Portrét Epiktéta, kapitola 04: „Proti Epiktétovi tu otázku položil už Aristotelés“ | blokující |
| 3 | Doba a lidé: nadpis „Znali se a přeli se“ nad vztahem `vliv-textem` (Epiktétos, Marcus, Epikúros) | blokující |
| 4 | Výzva „Druhé ucho“, vlastní karta v Roztřiď a scéna s Musoniem bez pojistky pro studenta, kterému někdo ubližuje | důležité |
| 5 | Krok 7: shrnutí pokusu vynechává „aby nic necítili“; „ukázal“ | důležité |
| 6 | Spor na telefonu: třetí Epiktétův argument odpovídá na námitky, které student ještě nečetl | drobné |
| 7 | Krok 6: zpětná vazba „O pověst ti tedy nejde“ a nadpis „Co udělal Epiktétos“ | drobné |
| 8 | Deska Epiktéta: popisek o rytci z roku 1715 není vidět | drobné |
| 9 | Dvě zprávy v celku (otázka 4 × krok 6) | drobné |
| 10 | Kroky 2 a 3 říkají totéž dvakrát; cesta má asi 2 100 slov | drobné |

Nálezy 3, 7 (nadpis) a 8 byly zásahy do komponent (skill `atlas-komponenta`): `src/lib/vztahy.ts`, nepovinné `coUdelal.nadpis` a popisek obrázku pod deskou; popsané jsou v `docs/design.md`.

**Celek 3 je schválený** (autor 3. 10. 2026: „Sloučit do hlavní a poslat“). Větev `celek-3` je sloučená do hlavní a hlavní větev je na GitHubu.

**Další krok:** větev `rozhrani-v2` (`docs/plany/rozhrani-v2.md`, krok R1). Mimo deset nálezů zůstalo pro ni: hlavička profilu s více otázkami na telefonu. Poučení z revize (student, kterému někdo ubližuje; nadpisy generovaných oddílů; shrnutí studie drží i pokyn skupině) zatím není ve skillech.
