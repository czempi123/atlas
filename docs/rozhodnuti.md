# Rozhodnutí

Zásadní rozhodnutí projektu, nejnovější nahoře. Každé má datum, rozhodnutí a stručný důvod. Změna rozhodnutí se zapisuje jako nový záznam, starý zůstává.

## 2. 10. 2026: Cesta 6 a stránka velké otázky 1 (P8)

| Rozhodnutí | Důvod |
| --- | --- |
| Krok 2 cesty 6 je nový blok **Roztřiď**: karty se do košů přetahují, pokládají tlačítkem Dát sem nebo klávesnicí, student smí přidat vlastní. Blok je součást knihovny (sedmý), obsah má v YAML | Autor nad osnovou: postavit třídění rovnou s přetahováním, komponenta se použije i jinde |
| Žádný koš není „správně“. Zpětná vazba patří ke kartě, ptá se dál a jen někde se liší podle koše (`kdyz`); srovnání „Jak třídil Epikúros“ říká jeho zkoušku, ne řešení | Zpětná vazba hodnotí důvody, nic se neboduje |
| Strana Sporu smí mít `oznaceni` místo jména osoby. Ve Sporu cesty 6 stojí „kynici“ s Diogenovou mincí a scéna říká, že se Epikúros s Diogenem nejspíš nepotkal | Autor souhlasil; Spor je Epikúros × kynici, ne smyšlené setkání |
| Citát `menoikeus-130` (soběstačnost) stojí v kroku 3 u stropu slasti, ne v kroku 4 | Autor souhlasil; před Sporem by jinak stálo pět citátů za sebou a blok Spor citáty neumí |
| V kroku cesty stojí text před blokem, i když jde o výklad filozofa (krok 3: strop slasti, pak volba bundy) | Po dokončení nabídne blok další krok; text pod blokem by student přeskočil |
| Graf ke studii je vlastní kresba směru (`GrafKrivek`): dvě křivky, jediné číslo 100 000 dolarů, osy bez hodnot. Druhá křivka je inkoustem a čárkovaně, svislá značka je plná tenká čára | Čísla jen z podkladů a graf ze studie se nekopíruje; dvě čárkované čáry vedle sebe by se pletly |
| Výhrady ke studii (zaměstnaní Američané, souvislost není příčina, měří se okamžitá nálada) jsou jen ve zpětné vazbě Volby v kroku 6 | Studie se vypráví přímo jako doložená událost; pochybnost je tu obsah úkolu |
| Karta cesty 6 stojí v profilu Epikúra na konci kapitoly 03 „Pověst“ | Kapitola končí Senekou a cesta Senekou začíná; za kapitolou 02 by student četl touhy a strop dvakrát po sobě |
| Přehled cesty bere odkaz do Mapy a času z frontmatteru cesty (`mapa`) | Dřív vedl u každé cesty do Athén roku 399 k Sókratovi |
| Stránku otázky 1 otevírá Diogenés, protože hlasy jdou podle narození | Diogenés je starší než Aristotelés; jeho „Ptáš se špatně“ na začátku neškodí |
| Hlas Epikúra na stránce otázky 7 nemá citát | V datech je jen ověřená věta (DL X, 31–32), žádný citát k měřítku pravdy |

## 2. 10. 2026: Plány větví a GitHub

| Rozhodnutí | Důvod |
| --- | --- |
| Zadání kroků, jejich stav a „co zůstalo na později“ má každá větev ve vlastním souboru `docs/plany/<větev>.md`, od podkladů po závěrečnou revizi celku. `docs/plan.md` drží strategii, katalog promptů a rozcestník. Dosavadní prompty jsou přesunuté do `zaklad.md` (P0 až P5), `celek-1.md` a `celek-2.md` | Autor: prompty se v plánu hromadí a v tom množství textu se špatně hledá |
| Po závěrečné revizi a schválení celku se větev sloučí do hlavní a hlavní větev se pošle na GitHub. Poprvé po dokončení celku 2 | Autor: po finální revizi celku vždy aktualizovat GitHub |

## 2. 10. 2026: Schválení P7 (celek 2) a další krok

| Rozhodnutí | Důvod |
| --- | --- |
| Profily Epikúra a Diogena schváleny, včetně odstavce o sudu a bodů doověřených z `k-overeni.md` | Autor: „Výborně“ |
| Další krok P8 pro celek 2: nejdřív graf ke studii o penězích a štěstí (`atlas-komponenta`), pak cesta 6 „Kolik je dost?“ a stránka velké otázky 1 (`atlas-cesta`); zadání v `docs/plany/celek-2.md` | Pořadí workflow celku: psaní → revize → schválení |
| V P8 se do Kam dál profilů doplní cesta 6, otázka 1 se přepojí na vlastní stránku a na stránku otázky 7 přibude hlas Epikúra | Odkazy čekaly na stránky; Epikúros už má profil a jeho věta k otázce 7 je ověřená z celku 1 |

## 2. 10. 2026: Profily Epikúra a Diogena (P7)

| Rozhodnutí | Důvod |
| --- | --- |
| Kam dál obou profilů vede zatím jen na stránky, které existují: druhý profil, Spor v Sókratově portrétu, Mapa a čas a řádek otázky 1 v přehledu otázek. Věta o Alexandrovi je bez odkazu. Cesta 6 a stránka otázky 1 se připojí v P8, cesty 7 a 8, až vzniknou | Autor: odkážeme, až to bude; test odkazů neexistující cíl nepustí |
| Epikúros a Diogenés mají v datech `hloubka: profil`, dokud nevznikne portrét | Autor; stránka Lidé je řadila mezi portréty, ale stránky jsou profily |
| Profil Epikúra má tři krátké kapitoly, profil Diogena čtyři (Pohárek, Lucerna, Pes, Na prodej) | Autor: v pochybnostech raději rozsáhlejší |
| Body z `k-overeni.md` (P7) doověřeny a zahrnuty: kohout s citátem `dl-vi-40` a vlastním Odkryj „Co je člověk?“, Pýthagorova zásada, Samos v úvodu, pozadí „občana světa“ podle SEP. Srovnání Zahrady s jinými školami (ženy a otroci jako výjimka) se nepíše | Autor: zahrnout vše z k ověření. Výjimečnost pramen nepotvrdil a Platón měl podle DL III, 46 také dvě žačky |
| V Diogenově profilu vysvětluje odstavec o sudu, proč ho student zná jinak: sud nakreslil až renesanční umělec podle nádob své doby | Autor: holá věta, že Řekové sudy nepoužívali, působila nepatřičně |
| Vlastní pokus s touhami v profilu Epikúra zkouší jedno studentovo přání (bolelo by, kdyby se nesplnilo?); třídění věcí do tří košů zůstává cestě 6 | Aby se pokus v celku neopakoval (poučení z revize celku 1) |
| Velký citát Diogena je „Jsem občan světa“: odpovídá na vyhnanství z úvodu. „Hledám člověka“ zazní v kapitole Lucerna, „Dítě mě porazilo“ v bloku Příběh | Každý citát stojí tam, kde zazněl |
| Volba „Co uděláš se svým pohárkem?“ stojí před blokem Příběh a nemá oddíl Co udělal: co Diogenés udělal, vypráví hned Příběh s kresbou | Kresba ukazuje odhozený pohárek; za blokem Volba by vyzradila tah předem |
| Blok Příběh umí desku na výšku (`pomer`), rozvržení se řídí šířkou místa a obrázek může mít vlastní střed výřezu (`vyrez` v `zdroje.yaml`); obrázky z Příběhu jsou v Pramenech | Kresba s pohárkem je na výšku; v čtenářském sloupci profilu by deska vedle textu byla drobná; výchozí výřez pro busty usekl Diogenovi hlavu |
| Mini mapa v oddílu Doba a lidé se přizpůsobí místům osoby, když se nevejdou do egejského výřezu; popisek bodu s těsným sousedem vpravo stojí vlevo | Na mapě chyběla Diogenova Sinópé i Epikúrův Samos a Kolofón. Změnila se tím i mapa Prótagora (přibyly Thurioi); Sókratova zůstala |
| V hlavičce osobnosti stojí rodiště, a když ho neznáme, poslední působiště | U Epikúra stála Mytiléna místo Athén |

## 2. 10. 2026: Podklady k celku 2 schváleny

| Rozhodnutí | Důvod |
| --- | --- |
| Podklady k celku 2 schváleny; další krok P7 (profily Epikúra a Diogena) | Autor: „vše schvaluji“ |
| Epikúros má na desce mramorovou hlavu z Metropolitan Museum (inv. 11.90, CC0) | Licence ověřena přímo u muzea |
| Diogenés má na desce novověké vyobrazení: dřevořez Uga da Carpi podle Parmigianina (Met, CC0); ke scéně s dítětem kresba „Diogenés odhazuje pohárek“ (Met, CC0). Lucerna zůstává atributem | Autor: Diogenových kreseb a maleb je hodně, použijme některou; spolehlivá antická podobizna neexistuje. Popisek říká, že jde o představu renesance (sud místo pithu) |
| Spor v cestě 6 je Epikúros × kynici, bez smyšleného setkání s Diogenem | Doložené je jen Epikúrovo „moudrý nebude žít jako kynik“ (DL X, 119); kynická strana mluví Diogenovými průpovídkami |
| Studie o penězích a štěstí je samostatný krok cesty 6, vedle kroku „měsíc na minimum“ | Autor |
| Vlastní převody citátů platí i pro Diogena Laertia a Senecu | Stejně jako v celku 1 |
| Tři zkreslení doplněna do skillu `atlas-overeni` („poctivého člověka“, „Diogenés v sudu“, „epikurejec = požitkář“), k tomu muzea s otevřeným přístupem jako zdroj obrázků | Poučení z celku 2 |

## 1. 10. 2026: Podklady k celku 2 (P6)

| Rozhodnutí | Důvod |
| --- | --- |
| Cesta 6 dostane oba nové případy: „Představ si… měsíc na minimum“ i studii o penězích a štěstí (Killingsworth, Kahneman, Mellers 2023) | Autor: na každého zapůsobí něco jiného, není důvod se omezovat |
| Stoik na stránce otázky 1 je Seneca | Epiktétos nese cestu 5; Seneca se jasně liší od Diogena (bohatství nevyhodí) i od Aristotela (ke štěstí ho nepotřebuje) |
| Leontion, Themista ani další nové osoby zatím do dat nepřibudou; v textu je lze zmínit bez odkazu | Autor: osob je už hodně, přidávat se bude až dodatečně, až bude vše hotové |

## 1. 10. 2026: Schválení celku 1 a další krok

| Rozhodnutí | Důvod |
| --- | --- |
| Celek 1 „Jak poznám, co je pravda?“ schválen a sloučen do hlavní větve (lokálně, bez GitHubu) | Autor: „můžeme se opět posunout o krok dál“ |
| Ve Sporu v kroku 5 dostal Prótagorás odpověď na sebevyvrácení místo argumentu o obcích; bez dalšího ověřování | Autor: jdeme primárně po pointě, ne po stoprocentní historické věrohodnosti, i když ji chceme maximálně zachovat. Výklad se podává jako výklad, historická fakta dál jen z podkladů |
| Skill `atlas-cesta` doplněn o poučení z revize (shrnutí drží rozdíly pramene, text drží souvislost bez bloků, Spor bez ohlášeného vítěze a s odpovědí obou stran, hlas na stránce otázky se pozná, závěrečné pravidlo s `rozbalene`) | Ať se chyby celku 1 neopakují |
| Celek 2 „Jak mám žít?“: velká otázka 1, cesta 6 „Kolik je dost?“, profil Epikúra a profil Diogena jako protihlas; stoici na stránce otázky, celek s Epiktétem (cesta 5) hned potom. Další krok P6, zadání v `docs/plan.md` | Autor vybral z navržených možností; oba myslitelé žijí s málem, každý z jiného důvodu, a to dává Spor |

## 1. 10. 2026: Revize celku 1 (P10)

| Rozhodnutí | Důvod |
| --- | --- |
| Délka Sókratovy stránky zůstává; Spor Platón × Diogenés i citát `obrana-38a` v kapitole 04 zůstávají | Autor: kdo chce, přečte si víc; neodrazovat zvídavé studenty a nedělat z portrétu povrchní věc |
| V kapitole 02 doplněn krok mezi Lachétovou první a druhou definicí: Skythové a Sparťané v hlavním textu, Lachés uzná, že věta nestačí, Sókratés chce definici pro všechny odvážné (Lachés 191a–e). Srovnání v Odkryj už příběh nevyzrazuje, jen vede ke zkoušce vlastní věty | Autor: mezi „ptal se“ a „zkusil to znovu“ chyběla myšlenka; text musí dávat smysl i bez odkrytí bloku |
| Politik, básníci a řemeslníci podle Obrany 21c–22e: opravdu rozuměli jen řemeslníci; citát 21d stojí hned za politikem | Věcná chyba nalezená revizí (ověřeno v PerseusDL) |
| Spor v kroku 5 neohlašuje vítěze; Sókratův argument o sebevyvrácení ponechává Prótagorovo „pro toho, kdo ho má“. Prótagorova odpověď na sebevyvrácení přibude až po ověření | Nejsilnější verze druhého |
| Na stránce otázky 7: Parmenidés odpovídá „ani babičce, ani učitelce, obojí je jen mínění“, Prótagorás s lékařem, Sókratés s Lachétem místo Delf, Prótagorova myšlenka bez větru | Parmenidés se v původní odpovědi nepoznal; Delfy a vítr se v celku opakovaly |
| Kapitola 01 portrétu bez karty „Pokračuj cestou“ (cesta zůstává v Kam dál); konec cesty bez citátu 38a | Kroky 1–3 opakují kapitolu 01; 38a byl v celku potřetí |
| Moje stanovisko má vlastnost `rozbalene`: pole je vidět hned a ukládá se samo; použito v kroku 7 | Pravidlo bylo schované za tlačítkem a po „Dokončit cestu“ bez uložení se ztratilo |
| Na přehledu cesty stojí Začít / Pokračovat nad seznamem kroků | Na telefonu bylo tlačítko pod okrajem obrazovky, klávesnicí za 16 tabulátory |
| Chairefón jménem jen v první větě kroku 1 a kapitoly 01, Melétos bez jména | Pravidlo 6 „Jména a podrobnosti střídmě“ |

## 1. 10. 2026: Schválení P8

| Rozhodnutí | Důvod |
| --- | --- |
| Stránka velké otázky (šablona a otázka 7), cesta 1 s Prótagorem a skill `atlas-cesta` schváleny; finální čtení proběhne u celého celku po revizi | Autor: „můžeme se posunout o krok dál“ |
| Další krok P10: revize celku 1 skillem `atlas-revize`; návrhy z revize autor schválí dřív, než se zapracují; zadání v `docs/plan.md` | Pořadí workflow celku: psaní → revize → schválení |

## 1. 10. 2026: Stránka velké otázky, druhé kolo

| Rozhodnutí | Důvod |
| --- | --- |
| Filozofové na stránce otázky ve dvou vrstvách: nejdřív všichni odpoví na úvodní případ (karty vedle sebe, „Komu věřit?“), teprve potom časová osa „Proč to tak viděli“ s myšlenkou, citátem a odkazem na profil | Autor: srovnání s filozofy bylo polovičaté; student má nejdřív vidět, kde se rozcházejí na tomtéž případu |
| Odpověď na případ je náš převod myšlenky filozofa, ve třetí osobě a bez uvozovek; přímá řeč zůstává jen v citátu | Pravidlo o přímé řeči skutečných osob |

## 1. 10. 2026: Stránka velké otázky a cesta 1 s Prótagorem (P8)

| Rozhodnutí | Důvod |
| --- | --- |
| Stránka velké otázky `/otazka/<slug>/`: otázka a úvod „Představ si…“ → Tvůj první názor → hlasy na časové ose → cesty k otázce → Změnil se? → Prameny. Hlasy ve frontmatteru `src/content/otazky/<slug>.mdx`; sestavení je kontroluje proti datům | Autor schválil návrh; jména, roky a citáty se berou z dat, takže se nerozejdou s mapou |
| Hlasy, cesty a návrat jsou skryté, dokud student neuloží první názor nebo nestiskne Přeskočit; bez JavaScriptu je stránka vidět celá | Nejdřív student, pak filozof (`CLAUDE.md`); přeskočení nechává osobní rovinu dobrovolnou |
| Časová osa na telefonu i notebooku svisle se stejnými rozestupy; na notebooku letopočty v levém okraji | Prótagorás a Sókratés žili současně; poměrné rozestupy by je slily dohromady |
| Otázka bez hlasů zatím nemá stránku; přehled `/otazky/` odkazuje jen na hotové stránky | Žádná prázdná stránka; adresy `/otazky/#<slug>` dál fungují |
| Na stránce otázky 7 věta Aristotela jeho odpovědí z Metafyziky IV, 6 (pro koho, kdy a jak se jeví), definice pravdy v citátu | Věta a citát by jinak říkaly totéž |
| Cesta 1 má sedm kroků, asi 20 minut: krok 5 Spor Prótagorás × Sókratés z Theaitéta, krok 6 šaty z roku 2015 (Změň jednu věc). Šaty nahradily „Zprávu ve skupině“ | S oběma by cesta měla 8 kroků a přes 20 minut a dva bloky Změň jednu věc za sebou; šaty přímo zkoušejí spor z kroku 5 |
| Ve Sporu Prótagorova strana: vítr, lékař (166d–167b), obce; Sókratova: budoucnost (178b–179b), sebevyvrácení. Posměšek o praseti vynechán | Nejsilnější verze obou stran podle podkladů |
| Skloňování Prótagorás podle vzoru pán i v 7. a 4. pádě (s Prótagorem, o Prótagora), opraveno v dokumentech, skillu i textu | Autor |

## 1. 10. 2026: Schválení P7

| Rozhodnutí | Důvod |
| --- | --- |
| Sókratův portrét a profil Prótagora schváleny; finální čtení proběhne u celého celku po revizi (P10) | Autor |
| Stránka velké otázky 7 má čtyři hlasy: Parmenidés, Prótagorás, Sókratés, Aristotelés; Platón, Pyrrhón a Epikúros přibudou s vlastními profily | Pravidlo „Jména střídmě“: čtyři hlasy, které spolu opravdu vedou spor |
| Další krok P8: nejdřív šablona stránky velké otázky (`/otazka/<slug>/`, nový typ stránky), pak otázka 7 a cesta 1 s Prótagorem; zadání v `docs/plan.md` | Stránka velké otázky zatím neexistuje, přehled `/otazky/` má jen kotvy |

## 1. 10. 2026: Sókratův portrét a profil Prótagora (P7)

| Rozhodnutí | Důvod |
| --- | --- |
| Blok Změň jednu věc „Útěk z vězení“ stojí v kapitole 05 hned za Kritónovou nabídkou, před Sókratovou odpovědí | Autor: student rozhoduje dřív, než se dozví, co udělal Sókratés; za Myšlenkami už to věděl |
| Každá kapitola má jeden blok: 02 Odkryj (co je odvaha), 03 Volba (byl ústup odvážný?), 04 Volba (návrh trestu), 05 Změň jednu věc | Blok vyrůstá ze scény; Volba 03 spojuje Lachétovu definici s ústupem od Délia |
| Euthyfrónovo dilema v portrétu jako otázka pro studenta v textu, bez bloku | Blok si nechává stránka velké otázky 9 |
| Prótagorův profil: úvod Hippokratés a Kalliův dům, kapitoly Měřítko všech věcí (Volba o větru) a O bozích a o obci (Odkryj o pravidlech školy), konec života podle Menóna 91e | Doporučení podkladů; vyhnání a pálení knih vynechány |
| Lékař z Theaitéta 166d–167b zůstává pro Spor v cestě 1 (P8) | Aby se profil a Spor neopakovaly |
| **Jména střídmě:** jménem jen ten, kdo nese příběh nebo myšlenku (v portrétu Sókratés, Alkibiadés, Lachés, Euthyfrón, Kritón, Xanthippa, Platón); vedlejší postavy popisem, popisy vzhledu a čísla jen tam, kde něco říkají. Pravidlo 6 v `docs/styl.md`, zapsáno i ve skillu `atlas-osobnost` | Autor po přečtení P7: hodně jmen ubírá z údernosti; atlas má předávat hlavně myšlenky a příběh |
| Body z `k-overeni.md` (P7) ověřené a zapracované: pronásledovatelé u Délia, Lachétovy další definice, mladí s volným časem, Euthyfrónova jistota, Sókratova námitka o lodích, kdo byli sofisté, Asklépios | Autor souhlasil s návrhy; podklady v `celek-1-pravda.md`, oddíl Doplněno po P7 |

## 1. 10. 2026: Podklady k celku 1 (P6)

| Rozhodnutí | Důvod |
| --- | --- |
| Řecká jména na -ás se skloňují podle vzoru pán: Prótagora, Pýthagora, Anaxagora, Gorgia, Archyta | Autor; jednotně v `lide.yaml` (`jmeno2`) |
| Sókratův portrét: kapitola 02 stojí na Lachétovi, kapitola 04 začíná setkáním s Euthyfrónem; Euthyfrónovo dilema zazní v portrétu i na stránce velké otázky 9 | Lachés vede přímo k ústupu od Délia, Euthyfrón k soudu; dilema patří k otázce víry i k Sókratovu způsobu ptaní |
| Spor Sókratés × Prótagorás v cestě 1 se bere z Platónova Theaitéta a podává se jako spor, který si představil Platón | Skutečný záznam jejich hádky o pravdě neexistuje; Prótagorás je v dialogu už mrtvý |
| Nový případ k cestě 1: šaty z roku 2015 (modročerné, nebo bílozlaté?) | Vnímání se liší jako Prótagorův vítr, a přitom existuje ověřitelná odpověď |
| Citáty celku 1 jsou vlastní převody z řeckého textu; publikované české překlady se nepřebírají | Autor |
| Fotografie busty Sókrata z Louvru (Eric Gaba, CC BY-SA 2.5) je na desce Sókratovy stránky; autor a licence jsou v Pramenech (oddíl Obrázky), mince s kalichem se přesunula k popisku „Proč kalich?“ | Autor ověřil licenci na Commons; CC BY-SA vyžaduje uvedení autora a licence; bez mince by „Proč kalich?“ ztratilo obraz |
| Příběh nepřebírá portrét osoby, jen obraz předaný přímo | Popisek Příběhu patří k místu scény (Delfy), ne k bustě |
| Stránka osobnosti má středovou osu: text a bloky v jednom čtenářském sloupci uprostřed, přes celou šířku jen hlavička a oddíly na mřížce (Doba a lidé, Myšlenky, Zkus to žít, Kam dál) | Autor: na notebooku se střídaly čtyři šířky zarovnané vlevo a stránka působila nesourodě |
| Testy v prohlížeči běží na portu 4322 | Na 4321 bývá spuštěné `npm run dev`; testy se k němu připojily a hledání i kontrola odkazů selhaly |

## 1. 10. 2026: Schválení P5

| Rozhodnutí | Důvod |
| --- | --- |
| Knihovna šesti bloků a ukázková cesta 1 schváleny a sloučeny do hlavní větve | Autor: „toto je tedy hotovo“ |
| Další krok je P6: podklady k celku „Jak poznám, co je pravda?“ (Sókratův portrét, Prótagorás, cesta 1, velká otázka 7); skill `atlas-cesta` připraven pro P8 | Pořadí F2: celek po celku, podklady před psaním |
| Claude pracuje přímo v repozitáři na Macu přes terminál Desktop Commanderu; kopie repozitáře a git bundle jen tehdy, když terminál chybí | Bez přenosu bundlů a bez dvou kopií; testy běží nativně na Macu |

## 1. 10. 2026: Bloky v atlasu (P5, druhé kolo)

| Rozhodnutí | Důvod |
| --- | --- |
| Bloky jsou vidět v ukázkové cestě 1 „Kdy mám dobrý důvod věřit?“ (šest kroků) a v Sókratově profilu; vstup z Domů, z profilu a přes Pokračuj | Autor: v dílně se k blokům student nedostal a zobrazoval se v ní kód |
| Dílna zůstává pro autora (noindex), ale bez kódu, cest k souborům a redakčních poznámek | Autor: do zobrazení se nesmí propisovat kód |
| Cesta 1 zatím jen Sókratova část; Prótagorás přibude s jeho ověřením | Ukázka stojí jen na ověřeném obsahu; krok 4 a 5 jsou pokus studenta a nový případ „Představ si…“ bez historických tvrzení |
| Krok cesty má vlastní soustředěnou hlavičku a lištu Předchozí / Další místo hlavní navigace | Podle docs/design.md › Navigace; student ví, kde je, jak se vrátí a co dál |
| Kdo žil dřív? (vzdálenost) a Spor se ovládají tažením, klepnutím i klávesnicí; osa je souměrná kolem prvního člověka | Autor zvolil tažení; souměrná osa neprozradí odpověď |
| Každý blok po dokončení nabídne jeden další krok (v cestě další krok sám) | Autor: Kam dál po bloku |
| Spor Platón × Diogenés ověřen (Diogenés Laertios VI, 53, vlastní převod) a je v Sókratově profilu | Autor: ověřit hned; podklady v docs/podklady/spor-platon-diogenes.md |
| Kontrola odkazů ignoruje stav v adrese (`?rok=…`) | Odkaz do Mapy a času se stavem vede na existující stránku /mapa/ |

## 30. 9. 2026: Knihovna bloků, prvních šest (P5)

| Rozhodnutí | Důvod |
| --- | --- |
| Obsah bloků s více možnostmi (Volba s důvodem, Změň jednu věc, Spor) je v YAML v `src/content/bloky/`, do MDX se vkládá jedním řádkem `<Volba id="…" />` | Rozhodnutí autora: schéma a kontrola dat (osoby, prameny) při sestavení; dlouhé české texty s uvozovkami ve vlastnostech MDX jsou křehké |
| Do deníku jdou Odkryj, Volba, Změň jednu věc a Spor; Příběh nic a Kdo žil dřív? jen stav bloku | Rozhodnutí autora: deník je pro názory a důvody, ne pro fakta. Rozpracovaný stav všech bloků je v části `bloky` záznamu `atlas-denik`, vydrží obnovení a je v exportu |
| Nejdřív sám a Odkryj jsou jeden blok; `NejdrivSam.svelte` zůstává jako starší jméno | Sókratův profil funguje beze změny textu a nově po obnovení ukáže uloženou odpověď |
| Příběh je komponenta Astro bez JavaScriptu, ne Svelte ostrov | Nemá interakci; statická komponenta je rychlejší a funguje i bez skriptů |
| Blok s neprázdným `kOvereni` smí být jen v dílně (`/dilna/`), jinde zastaví sestavení | Neověřený obsah se nesmí dostat ke studentům omylem |
| Ukázka Změň jednu věc: útěk z vězení („Představ si…“), jako fakt jen „mohl utéct, neutekl“ z atributu | Rozhodnutí autora; Sókratovy důvody z Kritóna čekají na ověření |
| Ukázka Sporu: Platón × Diogenés o skutečnosti; Diogenova strana čeká na ověření (Diogenés Laertios VI, 53), do té doby jen v dílně | Rozhodnutí autora: skutečný historický spor je lepší než spor sestavený z nesouvisejících vět |
| Mapa: první změna roku po načtení vždy založí záznam historie | Na rychlém počítači se první změna do 800 ms jen přepsala a Zpět odešlo ze stránky |

## 30. 9. 2026: Schválení P4

| Rozhodnutí | Důvod |
| --- | --- |
| Mapa a čas v2 schválena a sloučena do hlavní větve | Autor: „naprosto úžasné“ |
| Další krok je P5 (prvních šest bloků knihovny) se skillem `atlas-komponenta`, v novém chatu projektu | Pořadí podle plánu etap F2; každý krok v novém chatu šetří kontext, souvislost nese repozitář a dokumenty |

## 30. 9. 2026: Mapa a čas v2 (P4)

| Rozhodnutí | Důvod |
| --- | --- |
| U lidí bez přesných dat stačí rámcový odhad s „asi“ (Hérakleitos, Démokritos, Empedoklés, Zénón z Eleje, Xenofanés, Filón…); kde prameny dávají jen dolní mez, platí „zemřel po roce …“ (`nejdrive`) | Autor: je normální, že u někoho přesně nevíme; na mapu a do řeky je stačí zařadit rámcově. Prameny v `docs/podklady/mapa-a-cas.md` |
| Kde člověk v daném roce je: pobyt s časem, jinak od 18 let působiště bez času, jinak rodiště; místo smrti jen v roce úmrtí. Chybí-li začátek pobytu, nedomýšlí se (Platón v Syrákúsách jen v roce návratu 361) | Mapa nesmí tvrdit víc, než říkají prameny |
| Krajiny a moře: dobový název a v závorce dnešní, pokud se liší (`src/data/krajiny.yaml`) | Rozhodnutí autora |
| Období 3–8 jsou v pásu období vidět, ale ztlumená a zatím se na ně nepřepíná; posuvník končí rokem 550 | Zatím v nich nejsou lidé; kód je umí, zapnou se samy, jakmile přibudou data |
| „Mezitím jinde“: malá karta na mapě s lidmi z jiných tradic, kteří žijí daleko mimo podklad (zatím Konfucius) | Autor chce vhled i mimo západní páteř |
| Události ze životů mají pole `osoby`; karta člověka ukáže, co ho v daném roce potkalo | Autor souhlasil |
| Stín odkazu: zesnulý se ukáže vybledle, dokud žije někdo, s kým ho přímo spojuje zapsaný vztah; tradované vztahy mají slabší čáru, polemika vlnovku | Autor souhlasil |
| Karta člověka je u každého; tlačítko Otevřít portrét se ukáže, jakmile má člověk stránku, jinak odkaz do Lidé a směry | Portrét dostane časem každý, přidávají se postupně |
| Okno řeky 240 let na notebooku a 160 na telefonu; stopa posuvníku ukazuje totéž okno, takže jezdec navazuje na čáru roku v řece | Autor souhlasil s oknem; stejné měřítko drží čáru roku souvislou |
| Geometrie mapy se předpočítá při sestavení pro každé období a výřez (`/mapa/podklad/N-notebook.json`), pobřeží 10m jen u detailního výřezu, u velkých 50m, body bližší než 0,9 px se vynechají | Do prohlížeče nejde d3-geo ani celý Natural Earth; jeden výřez má 40–130 kB před kompresí |
| Výřez období 2 rozšířen (střed 15° v. d., 38,5° s. š., měřítko 900), aby obsáhl Cordubu i Pontus Euxinus; zůstává ve stavu návrh | Původní návrh neukazoval Senecovo rodiště ani Galii |

## 30. 9. 2026: Schválení P2 (brána F1)

| Rozhodnutí | Důvod |
| --- | --- |
| Kostra webu z P2 schválena a sloučena do hlavní větve; dotažení vzhledu pokračuje průběžně v dalších krocích | Web běží na autorově počítači a odpovídá návrhu |
| Diogenés se v datech narodil asi 412 př. n. l. (rozmezí 412–403) | Víc pramenů: Diogenés Laertios VI, 76–79 a Routledge Encyclopedia of Philosophy proti IEP (404) |
| Citáty z Platónovy Obrany zůstávají ve vlastním převodu | Rozhodnutí autora; Novotného překlad se nepřebírá |
| Atributy všech profilů a portrétů období 1 a 2 schváleny (`docs/podklady/atributy.md`), 14 nových ikon | Mince na mapě a v kartách potřebují atribut u každého profilu a portrétu |

## 29. 9. 2026: Založení projektu v Astru (P2)

| Rozhodnutí | Důvod |
| --- | --- |
| Astro 7 (statický výstup), Svelte 5 pro ostrovy, MDX, TypeScript; kontroly dat ve Vitestu, průchody v Playwrightu s axe | Aktuální stabilní verze k 29. 9. 2026; axe ověřuje kontrast a přístupnost na skutečných stránkách |
| Datové soubory v `src/data/*.yaml` nejsou Astro kolekce, ale mají vlastní schémata (`src/lib/schema.ts`) a kontroly (`src/lib/kontroly.ts`), které zastaví sestavení | Jedno místo pravdy pro build i testy; chyba v datech se nedostane ke studentům |
| Adresa osobnosti je podle id osoby v datech: `/osobnost/sokrates/` (ne `socrates`) | ID v datech i v adrese jsou česky a stejná |
| Nejisté roky: `priblizne`, `nejpozdeji`, `rozmezi`; když prameny nedávají narození ani úmrtí, jen `aktivni` | Data nesmí tvrdit víc než prameny; co nejde ověřit, je v `docs/podklady/k-overeni.md` |
| Atributy navržené Claudem jdou do dat až po schválení autorem; do té doby je kontrola vede jako čekající (`src/lib/cekajici.ts`) | Atribut je trvalý znak osobnosti na mapě i v kartách |
| Osnova nenapsaných kapitol je ve frontmatteru a zobrazuje se jen při `npm run dev` | Autor vidí plán, student ne |

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
