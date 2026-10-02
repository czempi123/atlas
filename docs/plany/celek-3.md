# Plán větve celek-3: „Co mám ve svých rukou?“

Celek 3: cesta 5 „Co mám ve svých rukou?“ (období 2, velká otázka 4 „Jsem svobodný?“), portrét Epiktéta a Marcus Aurelius jako druhý hlas cesty. Je to první stoický celek; podle `docs/architektura.md` má stoicismus v atlasu zvláštní váhu a po cestě 5 navazuje Stoický týden. Podklady vzniknou v `docs/podklady/celek-3-co-mam-v-rukou.md`, rozhodnutí se zapisují do `docs/rozhodnuti.md`, otevřené body do `docs/podklady/k-overeni.md`.

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady | **další krok**, zadání níže |
| P7 | Portrét Epiktéta (a rozhodnutí o Marcovi) | po P6 |
| P8 | Cesta 5 „Co mám ve svých rukou?“ (a stránka velké otázky 4, pokud ji autor po P6 zařadí) | po P7 |
| P10 | Revize celku | po P8 |
| Uzavření | Schválení autorem, sloučení do hlavní větve, hlavní větev na GitHub | po revizi |

Stav a zadání dalších kroků se zapisují sem, ne do `docs/plan.md`.

## Co si celek nese z celků 1 a 2

- **Rozsah rozhodne autor po osnově P6.** Otevřené je: jestli Marcus Aurelius dostane v tomto celku jen místo v cestě 5, nebo i znovu napsaný portrét (architektura počítá ve fázi F2 s obojím); a jestli stránka velké otázky 4 vznikne už teď s antickými hlasy, nebo zůstane řádkem v přehledu (většina jejích hlasů je z pozdějších období).
- **Co už v atlasu je:** Seneca jako hlas na stránce otázky 1 (citát `vita-beata-26`) a dva jeho citáty v cestě 6 (`seneca-ep-21-10`, `seneca-ep-18-9`); Epiktétos, Marcus Aurelius, Musonius Rufus a Seneca v datech (`lide.yaml`) bez stránek. Cesta 33 (Stockdale) a cesta 34 (Seneca a čas) jsou samostatné celky: jejich scény si celek 3 nebere.
- **Otevřené z dřívějška:** rozpor roků Domitianova vyhnání filozofů (89 × 93) a Epiktétovy pobyty v Římě a Níkopoli bez let (`k-overeni.md`). Texty o Marcovi z prototypu v9 (`docs/archiv/`) jsou jen seznam témat; `docs/styl.md` na nich ukazuje, jak se psát nemá.
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

**Stav 2. 10. 2026:** další krok. Celek 2 je schválený a sloučený do hlavní větve; větev `celek-3` je z ní založená.

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

Po P6 rozhodne autor o rozsahu celku (Marcus, stránka otázky 4) a podle toho se sem doplní zadání P7 a P8.
