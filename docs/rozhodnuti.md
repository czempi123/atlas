# Rozhodnutí

Zásadní rozhodnutí projektu, nejnovější nahoře. Každé má datum, rozhodnutí a stručný důvod. Změna rozhodnutí se zapisuje jako nový záznam, starý zůstává.

Starší záznamy (29. 9. – 3. 10. 2026: základ projektu a celky 1 až 3) jsou v `docs/archiv/rozhodnuti-2026-09-29-az-2026-10-03.md`. Co z nich platí pořád, drží `CLAUDE.md`, `docs/styl.md`, `docs/design.md`, `docs/pouceni.md` a skilly.

## 4. 10. 2026: Tři kresby pokusů (vítr, dvě půlky, pohár)

Autor dodal tři samostatné návrhy interakcí jako Web Components (Prótagorův vítr, Epiktétovy dvě půlky, Epikúrovo „Kolik je dost?“; archiv `atlas-interakce.zip` v repozitáři není) a chtěl je rozdělit, sjednotit s grafikou atlasu, uhladit a zařadit.

| Rozhodnutí | Důvod |
| --- | --- |
| Tři návrhy jsou přepsané na kresby atlasu: ostrovy Svelte na rámu `Kresba.svelte`, tři tóny desky období, plátno 340 × 240, texty a stav v `src/lib/`. Web Components se Shadow DOM a skripty v `public/` se nepřebírají | Atlas má pro takové věci jednu formu. Návrhy měly vlastní kartu, nadpis, písma a barvy a ve tmavém režimu i vedle ostatních kreseb by vypadaly jako cizí prvek |
| Rozbalovací „Pramen“ s odkazem ven a věty o tom, co kresba není („není měřením štěstí“), v kresbách nejsou | Prameny má atlas na konci stránky; text pro studenta nenese výhrady ani poznámky o naší práci |
| Podrobné postavy z návrhu větru jsou překreslené na jednoduché siluety | Na plátně 340 jednotek by jemné šrafování na telefonu splynulo; ostatní kresby atlasu jsou siluety ve třech tónech |
| Vítr v kresbě běží sám (proudy, šály) a jde zastavit; u každého člověka se přepíná čekání / chůze | Pohyb větru drží pointu: mění se lidé, vítr ne. Přepínač ukazuje oba stavy naráz, tlačítko s měnícím se nápisem je schovávalo |
| „Stejný vítr“ stojí v profilu Prótagora pod blokem Volba a text pod kresbou neříká, kdo má pravdu | Student má nejdřív odpovědět sám. Závěr návrhu („výpověď o chladu záleží i na tom, kdo ho cítí“) je jedna z možností volby, ne věc kresby; pod kresbou je místo něj otázka |
| „Dvě půlky“ trhají tři karty z koše Zčásti z kroku 2 (Jestli mi odepíše, Známka ze čtvrtletky, Zdravý na zápas) místo scén Omluva, Známka, Závod z návrhu; omluva zůstala jako obsah zprávy | Krok 3 říká, že Epiktétos by roztrhl každou věc z prostředního koše. Student trhá karty, které sám třídil |
| „Dvě půlky“ stojí pod blokem Odkryj; blok k nim vede vlastním Kam dál („Co se stane s druhou půlkou“) | Nad blokem by kresba prozradila modelové odpovědi. Pod ním přidává to, co blok nemá: druhá půlka se mění, moje ne |
| „Kdy je dost?“ stojí v kroku 3 cesty 6 za odstavcem o stropu slasti, před volbou o bundě; u čáry jde dolévat dál | Kresba ukazuje myšlenku, kterou text označuje za divnou; volba ji pak zkouší na jiné věci. Kdo dojde k čáře, zkusí nejdřív dolít: hladina se nehne. Návrh nabízel jen změnu chuti |
| Krok 3 cesty 6 se jmenuje „Kde má slast strop?“ místo „Která bunda víc hřeje?“ | Autor: nadpis o bundě neseděl ke kroku, který teď začíná pohárem vody. Nový název kryje obojí: pohár i bunda jsou dva pokusy s týmž stropem |
| Nádoba je „pohár“, ne hrnek | Hrnek je v cestě 6 hrnek sýra z Epikúrova dopisu |
| Vzhled přepínače rámu je v `global.css` (`k-prepinac`) a kresby ho používají i ve svém ovládání (`k-volba`) | Vítr a dvě půlky potřebují stejný přepínač pod plátnem; styl by jinak byl dvakrát |
| Texty kreseb nepoužívají minulý čas v druhé osobě („čekal jsi“) | Rozhodnutí z 2. 10. o lomených tvarech: rod studenta se obchází, ne láme |

## 4. 10. 2026: Kresba s pohybem jako forma (po P8)

| Rozhodnutí | Důvod |
| --- | --- |
| Kresba s pohybem je forma atlasu a má se používat častěji. Kdy a jak, říkají skilly `atlas-cesta`, `atlas-osobnost`, `atlas-komponenta` a `atlas-revize` | Autor po kresbě jeskyně: „Ten javascript je úžasný. Používejme ho častěji, zakomponuj to i do skillů.“ |
| Kresby stojí na společném rámu `Kresba.svelte` (karta, přepínač pohledů, text pod kresbou, zastavení pohybu); kresba sama dodává jen scénu a případný posuvník | Druhá kresba by jinak opsala polovinu první. Zastavení a omezený pohyb řeší jedno místo |
| Krok 3 cesty 3 má kresbu `<JeskyneVen />`: řez s cestou ven a posuvník, kterým si oči venku zvykají | Autor: „Můžeš to udělat i v kroku 3.“ Pořadí šesti stupňů je z pramene (516a–b) a z textu se špatně představuje |
| Stupně venku mění student posuvníkem; samy neběží | Pořadí je pointa a student si ho má projít vlastní rukou. Pohyb zůstává dějem uvnitř pohledu (dvojice stoupá chodbou) |
| Kresba v kroku 3 stojí za odstavcem o zvykání očí; text kroku se kvůli ní neměnil | Kresba nenese nic, co neříká text; kdo ji přeskočí, o nic nepřijde |
| Krok 6 cesty 1 má kresbu `<Saty />` „Stejné šaty, jiné světlo“: šaty mají pořád stejné dvě barvy, posuvník mění jen světlo okolí | Autor: „Myslím, že ty šaty bychom mohli použít.“ Případ dosud stál jen na popisu, fotku atlas nepřebírá |
| Kresba šatů stojí pod blokem, ne nad ním. Blok k ní vede vlastním Kam dál, další krok nabízí lišta. Text pod blokem neříká, jaké šaty opravdu jsou | Nad blokem by vyzradila podmínku „Vědci vysvětlí, proč to vidíme jinak“ dřív, než student odpoví. Kdo vidí správně, nechává krok podmínkám v bloku |
| Kresba šatů má vlastní barvy mimo tokeny a nemá tlačítko pohybu (`maPohyb={false}`) | Je o barvě, tři tóny období na ni nestačí; nic v ní neběží samo |
| Text pod kresbou šatů neříká, co student vidí, ale co na fotce vidí ten, kdo dané světlo čeká | Podklad má výklad autorů studie o fotce. Jak silně zapůsobí naše kresba, ověřené není |
| Kresba šatů je místnost s postavou a věcmi známé barvy (bílý okraj obrazu, zlatý rám, modrá váza, černá kočka), ne šaty na ramínku před barevnou stěnou. Obě světla jsou dopočítaná tak, aby se šaty na krajích posuvníku s těmi věcmi shodly | Autor k první verzi: „ve skutečnosti nevypadají jinak v obou tónech“. Barevné okolí samo dojem nevyvolá; světlo se odhaduje podle věcí, jejichž barvu člověk zná |
| Otevřené body z P8 zůstávají, jak jsou: čtyři koše v kroku 2, rytina bez výřezu, karta „Jak vypadá válka“, „boj obrů“ v úvodu otázky 6 a Volba v kroku 7 | Autor: „Jinak můžeš nechat tam kde se ptáš.“ |

## 4. 10. 2026: Cesta 3, stránka otázky 6 a kresba jeskyně (P8)

| Rozhodnutí | Důvod |
| --- | --- |
| Cesta má osm kroků: jeskyně, Roztřiď, výstup, čtverec sám, Spor, pokus, návrat, pravidlo. Osnova se předem neschvalovala | Rozhodnutí autora ze 4. 10. 2026; kroky odpovídají osmi bodům zadání |
| Koše v kroku 2 jsou čtyři a odpovídají na „Odkud to vím?“ stejným tvarem: Ze zkušenosti · Od lidí · Z obrazovky · Z vlastní hlavy | Autor: původní názvy konceptuálně nesedí a „dvakrát dvě jsou čtyři“ se do nich nedá zakomponovat. Čtvrtý koš je návrh: dohad o spolužákovi i dvakrát dvě jsou „z hlavy“ a zpětná vazba se ptá, čím se liší (mínění a vědění) |
| Krok 1 má vedle rytiny vlastní kresbu jeskyně s pohybem (`<Jeskyne />`): pohled vězňů a pohled z boku | Autor chce vyzkoušet animaci jako formu a pomoct představivosti. Výchozí je pohled vězňů, aby student seděl dole; pohled z boku má větu „Tenhle pohled žádný z nich nemá.“ |
| Pohyb kresby běží po načtení, jde zastavit a při omezeném pohybu kresba stojí. Kresba nemá Kam dál ani třídu `.blok` a nic neukládá | Není to úkol, ale obraz k textu; automatický karusel to není (nic se nestřídá samo, jen stíny jdou po stěně) |
| Kresba jeskyně stojí uvnitř Příběhu před větou „Podobní nám“ | Scéna má tou větou končit (zadání); kresba přichází po popisu, který zobrazuje |
| Pokus na Facebooku je jeden krok se dvěma Volbami; první vede vlastním Kam dál na nadpis „Co vyšlo“ pod sebou | Zadání chce odhad, výsledek a čtení v jednom kroku. Blok jinak nabízí další krok a student by výsledek přeskočil |
| Výsledek pokusu se říká proti srovnávací skupině („než lidé, kterým vědci nic neubrali“), ne „než dřív“ | Ověřeno v článku: všechny výsledky jsou rozdíl mezi skupinami. Podklady měly „o to víc“ a „pár příspěvků“; zůstalo jich 36 % |
| `ustava-510d` stojí ve srovnání bloku Odkryj; krok 5 Platónovu odpověď opakuje větou v textu | Blok stojí před tím, co filozof řekl, a text drží souvislost i bez odkrytí |
| `ustava-517b` („Bůh ví…“) je citátem až v kroku 7; v kroku 3 jen nepřímo ve zpětné vazbě. `ustava-518c` otevírá krok 6, ne krok 3 | Citát těsně před Volbou „Podle čeho poznáš…“ by odpovídal předem (jistota, cesta, kterou projdu sám) |
| Glaukón má jméno jen při vstupu; dál je „posluchač“ | `docs/styl.md`, pravidlo 6 |
| Ve scéně stojí „Kdo vězně spoutal, Sókratés neříká. Neříká ani, že je lidé za zídkou chtějí klamat.“ | Chrání před čtením o manipulátorech, které pramen nemá; je to věta o příběhu, ne o naší práci |
| Karta „Že mě má někdo rád“ je bez slova „doma“; karta o válce zůstává a má vlastní zpětnou vazbu pro toho, kdo ji zažil | Student, který to doma nemá, a student, který válku viděl |
| Krok 7 má Volbu „Kdo má podle tebe rozhodovat o tom, co je skutečné?“ | Krok o návratu a ušlechtilé lži je pro tón celku nejdůležitější a bez bloku by v něm student jen četl |
| Věta o Akademii („asi sedmnáctiletý… dvacet let“) je v textu kroku 5, ne ve scéně Sporu ani v kroku 8 | Tentýž detail nejvýš dvakrát v celku; portrét ho má jednou |
| Závěrečná otázka: „Jak poznáš, co je skutečné, a co se jen tak jeví? Napiš svoje pravidlo.“ | Pravidlo musí jít použít na případ v Návratu; otázka cesty sama je ano/ne |
| Návrat „U šaten“: kamarád u cizí bundy, viděl jsem to jen já | Jiný druh než pokus (obrazovka, studie) a duha (příroda); posoudí ho pravidlo, které očím věří, i to, které ne |
| Otázka 6: úvod začíná duhou, „boj obrů“ stojí za ní a úvod končí otázkou | Scéna před citátem; první názor se ptá na duhu |
| Démokritova odpověď: „Kapky tam jsou, barvy ne. Barvu jim dává jen zvyk; doopravdy jsou to částice a prázdno.“ | Věta „ve skutečnosti jsou atomy a prázdno“ stojí hned pod hlasem jako citát; odpověď ji nemá opakovat |
| Portrét vede na cestu odkazem u věty o jeskyni, ne kartou; z Kam dál vypadl Diogenés | Karta by do portrétu přinesla vstup cesty s větou „podobní nám“, kterou portrét nechává cestě; Diogenés má odkaz v kapitole 03 |
| Rytina na desce Příběhu zůstává celá (poměr 4 : 3) | Deska ji neořezává; výřez bez latinských veršů by byl nový soubor a rozhodne o něm autor |

## 4. 10. 2026: Úspornější práce a konec předběžného schvalování

| Rozhodnutí | Důvod |
| --- | --- |
| Osnovy a návrhy se neposílají předem ke schválení. Claude zvolí nejlepší cestu, práci dokončí a na konci napíše, nad čím váhal a co by šlo jinak | Autor: návrhy se mu většinou líbí tak, jak jsou, a mezikrok stojí čas i tokeny. Předem se dál ptá jen na GitHub a slučování větví, stahování obrázků, nové osoby v datech a mazání |
| Hotové plány větví (základ, celky 1 až 3), záznamy revizí, provedená zadání celku 4 a starší rozhodnutí jsou v `docs/archiv/`; archiv se bez pokynu nečte | Autor: číst jen to, co je pro krok podstatné. Čím víc hotových celků, tím víc by se četlo zbytečně |
| Poučení z revizí je na jednom místě v `docs/pouceni.md`; zadání už neposílají číst záznamy revizí | Tři záznamy měly přes 60 000 znaků a zadání je nechávala číst celé |
| `CLAUDE.md` má oddíl Co číst a jak šetřit; `docs/plan.md` a `docs/architektura.md` se čtou jen po oddílech, na které zadání odkáže | Dřív se oba soubory četly celé na začátku každého chatu |
| V projektu Claude zůstávají jen `docs/plan.md`, `docs/architektura.md` a plán běžící větve | Dokumenty projektu se načítají do každého chatu; `docs/design.md`, plány hotových větví a záznamy revizí jsou v repozitáři |
| Skripty na snímky jsou v `scripts/` (`snimky-listy.mjs`, `snimky-montaz.mjs`) | Každý chat si je psal znovu; Playwright navíc maže `test-results/` |
| Po přidání stránky, bloku nebo změně dat se restartuje běžící `npm run dev` | Náhled spuštěný 3. 10. ukazoval Platónův portrét bez obsahu a odkaz na Spor nikam nevedl |

## 4. 10. 2026: Portrét Platóna (P7)

| Rozhodnutí | Důvod |
| --- | --- |
| Portrét má pět kapitol: Příbuzní u moci, Chlapec a čtverec, Stůl a stolovost, Prsten a tři síly, Třikrát do Syrákús | Autor schválil osnovu. Každá kapitola má jeden blok a ten stojí před tím, co Platón udělal nebo napsal |
| Hlavní citát je `faidon-59b` („Platón, myslím, stonal“) a pointa „Muž, který ve vlastních rozhovorech nemluví.“; `menon-86b` stojí na konci scény s chlapcem | Úvod je scéna soudu a vězení a citát ji uzavírá. Věta, že Sókratés za nauku neručí, má váhu až po závěru o duši |
| Volba v kapitole 01 nemá oddíl Co udělal, Volba v kapitole 05 ho má | Že Platóna příbuzní zvali a co ho odradilo, stojí jen v Sedmém listu; nadpis „Co udělal Platón“ by z toho dělal fakt. Druhá cesta do Syrákús je doložená |
| Odkryj se čtvercem řešení neprozradí; úhlopříčka stojí v textu za blokem, popsaná jako matematika | Text musí držet i bez odkrytí bloku. Jak přesně Sókratés kreslil, podklady nemají |
| Spor Platón × Diogenés stojí v kapitole 03 Platónova portrétu; scéna říká Diogenovu námitku nepřímo předem | Na telefonu čte student Platónovu stranu první a jeho druhý argument na námitku odpovídá (poučení z revize celku 3) |
| `ustava-433a` je uvedená jako věta o obci, kterou Platón přenáší na duši | V prameni ji Sókratés říká o obci (433a); o duši až 441d–444a |
| O strážcích bez majetku a rodiny portrét nemluví vůbec | Jedna věta by vyvolala otázky, na které studentský text podle rozdělení citlivých míst odpovídat nesmí |
| Otázka „a kdyby takový prsten měli všichni?“ stojí ve zpětné vazbě první podmínky, pro posun i pro stejnou odpověď | Změň jednu věc nemá zpětnou vazbu podle možnosti; takhle otázku dostane každý a žádná možnost není pokáraná |
| Kdo žil dřív? je Platón × Aristotelés (vzdálenost) | Dvojice na žádné hotové stránce není a oba mají v datech přesné roky; u Parmenida je rok smrti jen „nejdřív“ |
| Kam dál: Sókratés, Diogenés a Marcus Aurelius; v Sókratově portrétu nahradil Platón odkaz do mapy | Cesta 3 a otázka 6 přibudou v P8; do mapy vede Kdo žil dřív? (rozhodnutí z 3. 10. 2026) |
| Odlitek má na telefonu vlastní střed výřezu (`vyrezNaSirku: 50% 16%`); na notebooku zůstává 50% 36% | Deska na šířku s původním středem uřízla čelo. Teď zůstane čelo i oči a deska přijde o špičku vousů |
| V kapitole 02 je Aristotelés jen „Platónův žák“; „dvacet let“ říká až kapitola 03 | Tentýž doložený detail nejvýš dvakrát v celku a cesta 3 ho ve Sporu potřebuje |
| Platón má vlastní test v prohlížeči (`tests/e2e/platon.spec.ts`) | Hlídá přesun Sporu, bloky kapitol na obou šířkách a v obou režimech, pravidla textu (dopis, kdo mluví, co do portrétu nepatří), desku, mini mapu a skupiny v Době a lidech |

## 4. 10. 2026: Celek 4 po podkladech: odpovědi autora

| Rozhodnutí | Důvod |
| --- | --- |
| Platónův obrázek je sádrový odlitek ze Statens Museum for Kunst (inv. KAS2111), ne fotografie busty z Wikimedia Commons | Autor: „odlitek“. Licenci uvádí přímo muzeum (Public Domain); popisek říká, že jde o odlitek římské kopie |
| Obraz jeskyně je rytina Jana Saenredama z roku 1604 (National Gallery of Art); popisek říká, že lidé na ní nemají pouta a místo ohně visí lampa | Autor dal souhlas se stažením. Je to představa z roku 1604, ne ilustrace textu: verše na listu dělí lidi na dav ve tmě a hrstku vidoucích, u Platóna jsou vězni „podobní nám“ |
| Gygův prsten bude v P7 blok Změň jednu věc v Platónově portrétu | Autor souhlasil s doporučením: portrét dostane vlastní pokus k duši a spravedlnosti; samostatná stránka pokusu blok později převezme |
| Stránka otázky 6 vznikne v P8 a její úvodní případ je duha, ne lavice | Autor: „duha“. Aristotelés o duze sám psal (Meteorologika III, 2 a 4), takže jeho hlas stojí na doloženém textu |
| Části duše se v atlasu jmenují rozum, hněv a žádostivost | Autor: „rozum, hněv, žádostivost“ |
| Citlivá místa Ústavy: cenzura básníků a ušlechtilá lež do studentského textu, společné děti strážců učiteli, výběr dětí jen učiteli | Autor souhlasil s rozdělením z podkladů |
| Studentovi, který s Platónem nesouhlasí, dává v cestě 3 za pravdu Aristotelés; Isokratés v cestě nebude | Autor: „stačí Aristoteles“. Isokratovy citáty zůstávají v datech pro jeho profil |
| Nové vztahy (Aristotelés → Platón a Diogenés → Platón jako polemika, Parmenidés a Hérakleitos → Platón jako vliv přes texty) zůstávají v datech | Autor souhlasil; ukážou se v Době a lidech u hotových profilů |

## 4. 10. 2026: Mapa a čas: události nad posuvníkem a pás období

| Rozhodnutí | Důvod |
| --- | --- |
| Dějinné události nad posuvníkem mají řádek názvů a pod ním řádek značek; událost jednoho roku je tečka, ne svislá čárka | Čárky bitev protínaly pruh války a čárka Sókratova procesu zasahovala do názvu Peloponéské války; autor: události se překrývají |
| Názvy rozmisťuje čistá funkce podle šířek změřených v prohlížeči, ne podle odhadu z počtu znaků | Odhad se mýlil o desítky pixelů a názvy se potkávaly |
| Název období smí ustoupit ke konci svého pruhu, když tím uvolní místo události jednoho roku těsně za ním | Sókratův proces je hlavní událost období 1 a na notebooku má být vidět jménem, ne jen jako tečka |
| Číslo a název v pásu období na mapě stojí na štítku v plné barvě desky, text je skoro bílý a tučný | Ornament v barvě textu probíhal přímo písmem a u připravovaných období i šrafování; autor: text splývá, chce větší kontrast |

## 3. 10. 2026: Podklady celku 4 (P6)

| Rozhodnutí | Důvod |
| --- | --- |
| Spor v cestě 3 je Platón × Aristotelés | Skutečný střet učitele a žáka po dvaceti letech v Akademii; Aristotelova námitka je v pramenech (Metafyzika I, 9; Etika Nikomachova I, 6) a dává za pravdu studentovi, podle kterého jsou „stíny“ skutečné dost |
| Spor Platón × Diogenés se v P7 přesune ze Sókratova portrétu do Platónova; první Platónův argument bude bez jeskyně a Diogenés dostane repliku | Revize celku 1: Spor není o Sókratovi; obraz jeskyně by se v celku opakoval potřetí; v prameni má poslední slovo Platón |
| Nový případ cesty 3 je pokus na Facebooku z roku 2020 (Nature 2023) | Doložený pokus, který se dá vyprávět přímo; představu bublin zpochybňuje a vrací jeskyni k otázce, kam se člověk dívá |
| Čtyři hlasy stránky otázky 6: Parmenidés, Démokritos, Platón a Aristotelés | Každý říká něco jiného než na ostatních stránkách; Aristotelés dává za pravdu smyslům |
| Větev `rozhrani-v2` je commitnutá a na GitHub půjde až s celkem 4 | Autor: „do githubu ho pak nahrajeme až s tímto celkem“ |
| Citáty z dialogů celku 4 jsou v datech vedeny pod Platónem jako autorem; kdo větu v dialogu říká, stojí v poli `podle` a ve studentském textu ve větě před citátem | Kontrola hlasů na stránce otázky chce citát téže osoby; pravidlo „u dialogu řekni, kdo mluví“ |
| Soubory, které se nevyplatí přepisovat terminálem, se do repozitáře zapisují přes připojenou složku Atlas; příkazy, testy a commity běží dál přes Desktop Commander | Podkladový list má přes sto tisíc znaků; autor přístup ke složce povolil |

## 3. 10. 2026: Rozhraní v2, krok R2 (reflexe ve Sporu, Na začátku × Teď, Návrat)

| Rozhodnutí | Důvod |
| --- | --- |
| Reflexe ve Sporu je zavřený řádek pod zpětnou vazbou („Který argument druhé strany byl nejsilnější?“ · Nepovinné), ne součást jejího rámečku, a ukládá se sama | „Další krok“ zůstává vidět bez ní. Rámeček zpětné vazby čtečka ohlašuje; formulář uvnitř by se četl při každé změně. Stejný vzor má „Co kdybys zvolil jinak?“ ve Volbě |
| Zpětná vazba Sporu otázku neklade, jen k reflexi dovede („I strana, kterou hájí Epikúros, má argument, který stojí za odpověď.“). „Který argument tě posunul?“ vypadlo | Otázka má zaznít jednou, na řádku reflexe; na posun se ptá pole před zápisem polohy. Jméno v 1. pádě za „kterou hájí“ sedí na všech osm stran včetně „kynici“ |
| Ve výběru stojí začátek argumentu (celé věty asi do 110 znaků), ne celý text ani nový popisek v YAML | Argumenty mají až tři odstavce a YAML Sporů se měnit neměl |
| Reflexe ukládá text vybraného argumentu, ne pořadí. Když ho autor později změní, uvidí student svůj původní výběr jako zvláštní možnost | Argumenty nemají id; uložená reflexe nesmí nikdy ukázat jiný argument |
| „Teď“ v závěru cesty je přímo pole s pravidlem, ne kopie textu pod ním | Pravidlo by jinak stálo na stránce dvakrát; schválil autor |
| „Na začátku“ se čte ze zápisu v deníku (text, jak ho student uložil) a rozkládá se podle druhu bloku: tah bez písmene a „Proč“, koše s kartami po řádcích | Stav bloku ukazuje na pořadí možností a po změně YAML by ukázal jinou; zápis je to, co student opravdu uložil. Nic se neukládá podruhé |
| Začátek cesty říká pole `zacatek` v přehledu cesty; u cesty 5 je to Roztřiď z kroku 2 | První vlastní pokus studenta; další cesta přidá jeden řádek a sestavení ho hlídá |
| Věty posledního kroku zní „Vrať se ke svému tahu / ke svým košům z kroku 2“ | Text kroku je pevný a musí sedět s panelem i bez něj; schválil autor |
| Otázka „Co se změnilo, nebo proč si myslíš totéž?“ se ukáže, až je pravidlo napsané | Dřív není co srovnávat; změna názoru se nečeká a otázka se ptá i na důvod, proč zůstal |
| Cesta je dokončená, když má student otevřené všechny kroky; čas se zapíše jednou do `cesty[slug].dokonceno` | Stejné měřítko, podle kterého deník už psal „prošel jsi celou“. Klepnutí na Dokončit cestu by minulo studenty, kteří odejdou jinudy |
| Starý deník bez `dokonceno` se řídí časem naposledy otevřeného kroku a při příští návštěvě kroku si ho zapíše natrvalo | Nejbližší údaj, který deník má; nic se nerozbije a deník zůstává verze 1 |
| Návrat se otevírá přímo v deníku, ne na vlastní stránce. Nabízí se nejvýš jeden (cesta dokončená nejdéle) a určí se jednou při otevření deníku | Jedno klepnutí a žádná další stránka; po odpovědi nebo odložení se hned nenabídne další. Schválil autor |
| Později vrátí nabídku za tři dny, Už nenabízet ji skryje natrvalo; obojí je ve stavu bloku návratu (`bloky[id]`), ne v nové části deníku | Schválil autor; export i starší deníky zůstávají beze změny tvaru |
| Případ je v YAML (`druh: navrat`: `cesta`, `pravidlo`, `nazev`, `scena`, `po`); otázku „Platí tvoje pravidlo i tady?“ a možnosti Ano / Upravím ho / Nevím píše blok | Jsou pro všechny návraty stejné; autor píše jen případ a tři věty, které se ptají dál |
| Návrat cesty 5 je „Kamarád se stěhuje“ | Ztráta, o které rozhodl někdo jiný: neopakuje výkon (známka, zápas) ani urážku (snímek z chatu). Schválil autor |

## 3. 10. 2026: Rozhraní v2, krok R1 (Domů, obsah profilu, ovládání mapy)

| Rozhodnutí | Důvod |
| --- | --- |
| Domů má jedinou výzvu k začátku: hlavní tlačítko „Začít první cestu“ na krok 1 cesty 1 s údajem z dat cesty. Karta cesty a Příběh na začátek jsou spojené do jednoho panelu bez tlačítka, který stojí vpravo vedle úvodu (na telefonu pod ním) a vede na tentýž krok | O začátek se hlásily tři prvky a dva z nich vyprávěly tutéž věštbu z Delf. Umístění panelu vybral autor: „můžeme to dát asi vpravo vedle úvodu“ |
| Kdo má první cestu hotovou a nic rozpracovaného, dostane „Vybrat další cestu“ do přehledu otázek, ne další cestu podle čísla | Autor: „není to nějak lineární, že by to muselo jít 1, 2, 3“; student si vybírá podle otázky |
| Kdo má cestu rozpracovanou (kteroukoli, bere se naposledy otevřená), dostane „Pokračovat v cestě“ na naposledy otevřený krok; Pokračuj tu cestu ani blok v ní vedle tlačítka neopakuje | Jedno tlačítko vede tam, kde student právě je; dvě nabídky téže cesty vedle sebe by zase soupeřily |
| Nadpis Domů má token `h1` (64 / 44 px), ne `display-2` | S `display-2` zbývalo na 1280 × 720 pod tlačítkem s údajem 85 px a řádek Pokračuj by další obsah vytlačil pod ohyb; s `h1` zbývá 214 px |
| Co se při načtení mění podle deníku (tlačítko na Domů, „Pokračovat ve čtení“ na profilu), přepíše skript hned za prvkem ještě před vykreslením. Rozhoduje čistá funkce z `src/lib`, kterou volá i sestavení; do stránky se vkládá její text, proto nesmí sahat na nic mimo sebe | Bez probliknutí a s jedinou logikou, která má jednotkové testy; stejný postup už používá stránka otázky |
| Obsah profilu je i na notebooku kompaktní lišta pod hlavičkou, ne sloupec v okraji. V klidu zůstává pod hlavičkou profilu řádek odkazů jako dřív | Vedle čtenářského sloupce je na 1440 px 300 px, na 1280 px 230 px a pod 1200 px se sloupec nevejde; ve druhé půlce stránky by ležel přes široké oddíly. Zadání pro ten případ žádalo kompaktní podobu z telefonu |
| Obsah se skládá ze sestavené stránky: oddíl se hlásí atributem `data-oddil` se svým názvem. V obsahu proto stojí „Dvě velké myšlenky“, jak zní nadpis na stránce, ne obecné „Velké myšlenky“ | Zadání: názvy ze stránky, ne ze seznamu v kódu; oddíl, který profil nemá, v obsahu není |
| Deník zůstává verze 1; naposledy čtený oddíl je v nepovinném poli `cteni` (adresa profilu → kotva), nejvýš třicet stránek, zapisuje se při změně oddílu | Starší deníky se načtou beze změny, pole je v exportu a nic dalšího se o čtení neukládá |
| „Pokračovat ve čtení“ stojí v hlavičce profilu pod letopočty, nad vstupy do cest | Na telefonu je tak vidět bez posouvání; pod deskou s portrétem by vidět nebyl |
| `stinOdkazu`: u polemiky dostává stín ten, s kým se žijící pře, ne zesnulý kritik | Kód bral směr obráceně než jeho vlastní komentář, takže polemika stín nikdy nezapnula; autor opravu schválil. Vysvětlení v mapě proto smí říkat „nebo se s ním přel“ |
| Legenda čar je na notebooku stále viditelný řádek pod řekou (24 px), na telefonu panel za tlačítkem Legenda | Čára bez vysvětlení odporuje principu 3 z `docs/design.md`; na notebooku se řádek vejde, na telefonu ne |
| Zpráva po klepnutí na připravované období zní „Středověk: připravujeme.“ (s dvojtečkou; návrh byl bez ní) | „Po válce a dnes připravujeme.“ se bez dvojtečky četlo špatně |
| Názvy moří na mapě jsou v `--ink-2`, ne v `--muted` | `--muted` má na světlém moři kontrast 4,49 : 1, těsně pod AA; pár je nově v testu kontrastu |
| Hlavička řeky je na telefonu 44 px místo 26 px a tlačítka v ní 32 px | Dotykový cíl 44 px se jinak nevešel: nad hlavičkou leží záložky, které by rozšířený cíl překrývaly |

## 3. 10. 2026: Celek 4 a skilly po revizi celku 3

| Rozhodnutí | Důvod |
| --- | --- |
| Čtvrtý celek je „Platón a jeskyně“: portrét Platóna, cesta 3 „Je to, co vidím, celá skutečnost?“ a stránka velké otázky 6 „Co je skutečné?“. Plán a zadání P6 jsou v `docs/plany/celek-4.md` | Autor vybral z nabídnutých možností (Seneca a čas, strach ze smrti, Aristotelés, Platón a jeskyně) |
| Celek 4 a větev `rozhrani-v2` běží vedle sebe: úpravy rozhraní projde autor zvlášť, podklady (P6) na ně nečekají. Před P7 se do `celek-4` sloučí hlavní větev, pokud v ní `rozhrani-v2` už bude | Autor: „já si ještě sjedu tu obecnou úpravu, ale měli bychom mít další celek“; podklady se rozhraní netýkají |
| Největší riziko celku 4 je tón: jeskyně nesmí studentovi lichotit, že on vidí a ostatní spí | Stejný obraz používají konspirační weby; u celku 3 bylo obdobným rizikem smíření s křivdou |
| Poučení z revize celku 3 je ve skillech `atlas-revize`, `atlas-cesta` a `atlas-osobnost`: čtení očima studenta, kterému někdo ubližuje; citát o ráně nepatří na začátek kroku; výzva Zkus to žít nemíří na člověka, který ubližuje; čte se i to, co se skládá z dat; shrnutí studie drží i pokyn skupině; spojovací věta netvrdí spor, který nebyl | Autor: „Revizi do skillů klidně dej“ |
| Kopie skillů ve `skills/` odpovídají verzím v účtu: jeden soubor `SKILL.md` včetně oddílu Ať text nezní jako stroj a kontrolního seznamu; `skills/atlas-revize/references/kontrolni-seznam.md` je zrušený | Verze v účtu byly novější než kopie v repozitáři (přibyl oddíl o strojovém textu a šestá perspektiva revize) |
| Skilly a plán celku 4 jdou do hlavní větve a na GitHub hned, ne až s dalším celkem | Autor: „Ano, poslat“; větve `rozhrani-v2` i `celek-4` tak vyjdou ze stavu, který je na GitHubu |
