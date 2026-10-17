# Medailonky, vlna 3

Větev `medailonky`, krok M3. Osoby: Cicero, Karneadés, Anaxagorás, Gorgiás, Konfucius, Plótínos, Pýthagorás, Aspasie, Filón Alexandrijský, Hypatia, Isokratés, Anaximandros, Anaximenés, Empedoklés, Pyrrhón, Thalés. Inventura před vlnou: `Claude outputs/medailonky/inventura.md` (17. 10. 2026).

Prameny: hesla SEP a IEP (Thalés, Anaximandros, Anaximenés, Gorgiás, Cicero, Empedoklés, Anaxagorás, Karneadés, Konfucius, Plótínos, Pýthagorás, Pyrrhón, Filón) jsem stáhl na Macu (`curl`, text, `grep`); Platónův Faidón a Menexenos, Xenofóntovy Vzpomínky a Hospodář z Project Gutenberg; Diogenés Laertios IX (LacusCurtius) a Sókratés Scholastikos VII, 15 (New Advent) stejně; PDF hesla Hypatia v Biographical Encyclopedia of Astronomers jsem otevřel čtečkou souborů. Britannica `curl` nepustí, proto jsem u Isokrata četl souhrn a u Aspasie plný článek nástrojem WebFetch (souhrn Aspasie a Hypatie vrací 404, Hypatii jsem nahradil BEA). Britannica údaje o Empedoklovi a Filónovi (roky) jsem dnes znovu otevřít nemohl, zůstávají z dřívějšího ověření (29. až 30. 9. 2026). Wikipedii mezi prameny nezapisuji. IEP nemá hesla Hypatia, Isocrates ani Pythagoras na adresách, které jsem zkusil (iep.utm.edu/hypatia/, /isocrates/, /pythagor/); u Hypatie a Isokrata jsem proto použil jiné prameny, u Pýthagora SEP.

## Přehled

| Osoba | Co se změnilo | Nové prameny | medailonek: true |
| --- | --- | --- | --- |
| Thalés | beze změny, ověřeno proti IEP | — | ano (hloubka zůstává `profil`) |
| Anaximandros | „kdo“ upřesněno („o deset let“ místo „o generaci“), „proč“ přepsáno (první mapa světa je jen připisovaná) | — | ano |
| Anaximenés | „kdo“ bez „snad“, „proč“ rozšířeno | — | ano |
| Empedoklés | vztahy k Gorgiovi a Lucretiovi | — | ano |
| Anaxagorás | vztah k Sókratovi, u pobytu v Athénách značka `priblizne` | — | ano |
| Gorgiás | beze změny, ověřeno proti IEP; nové vztahy vedou z Empedokla a k Isokratovi | — | ano |
| Aspasie | vztah k Sókratovi | `xenofon-vzpominky`, `platon-menexenos` | ano |
| Konfucius | beze změny, ověřeno proti SEP | — | ne: žádný vztah (níže) |
| Isokratés | vztah ke Gorgiovi | — | ano |
| Pyrrhón | vztah k Démokritovi | `dl-ix-67` | ano (hloubka zůstává `profil`) |
| Cicero | vztahy k Platónovi a Epikúrovi, „kdo“ přeformulováno kvůli zkratce „př. n. l.“ na konci věty | — | ano (hloubka zůstává `profil`) |
| Karneadés | beze změny, ověřeno proti SEP | — | ano |
| Plótínos | vztah k Platónovi, narození přibližné | — | ano (hloubka zůstává `profil`) |
| Filón Alexandrijský | vztah k Platónovi | — | ano |
| Hypatia | „proč“ přepsáno, vztah k Plótínovi (tradovaný) | `sokrates-scholastikos-vii-15` | ano (hloubka zůstává `profil`) |
| Pýthagorás | beze změny, ověřeno proti SEP | — | ne: žádný vztah (níže) |

Poznámky s datem 17. 10. 2026 a tím, co z nich beru, přibyly u `iep-thales`, `iep-anaximander`, `iep-anaximenes`, `sep-anaxagoras`, `sep-empedocles`, `iep-gorgias`, `sep-carneades`, `sep-plotinus`, `sep-philo`, `iep-cicero`, `sep-pyrrho`, `sep-confucius`, `sep-pythagoras`, `bea-hypatia`, `britannica-isocrates`, `britannica-aspasia` a `platon-faidon`.

## Nové vztahy (jedenáct)

| Od → k | Typ | Pramen | Poznámka |
| --- | --- | --- | --- |
| Empedoklés → Gorgiás | učitel, tradovaný | IEP Gorgias („student of Empedocles“); SEP Empedocles (Gorgias „associated with him as a student“, A 1 = P 24) | |
| Gorgiás → Isokratés | učitel, tradovaný | IEP Gorgias („according to Quintilian and others, was the teacher of Isocrates“) | |
| Empedoklés → Lucretius | vliv přes texty | SEP Empedocles, oddíl 5 (Lucretius ho v De rerum natura chválí „ne bez výhrad“) | chválí ho v básni O přírodě |
| Anaxagorás → Sókratés | vliv přes texty, tradovaný | Platón, Faidón 97b–99d (Jowett) | Sókratés četl jeho knihu a čekal od rozumu víc |
| Aspasie → Sókratés | znali se, tradovaný | Xenofón, Vzpomínky II, 6, 36 a Hospodář III, 14; Platón, Menexenos 235e–236b | Sókratés se na ni u Platóna i Xenofónta odvolává |
| Platón → Plótínos | vliv přes texty | SEP Plotinus, oddíl 1 („Plato’s figure dominates Plotinus’ thought“) | Platón je hlavním zdrojem Plótínova myšlení |
| Platón → Filón | vliv přes texty | SEP Philo, oddíl 3.3 (Timaios v De opificio mundi je „massive“) | Timaios stojí za Filónovým výkladem stvoření světa |
| Platón → Cicero | vliv přes texty | IEP Cicero, oddíl 7 („many patterned after Plato’s or Aristotle’s dialogues“) | filozofické dialogy psal podle Platónových a Aristotelových vzorů |
| Cicero → Epikúros | polemika (na dálku) | IEP Cicero, oddíly 6 a 7a (pohrdání epikurejci; v O přirozenosti bohů jejich názor líčí a vyvrací) | starají se bohové o lidi? |
| Plótínos → Hypatia | vliv přes texty, tradovaný | Sókratés Scholastikos, Církevní dějiny VII, 15 („succeeded to the school of Plato and Plotinus“) | vedla školu, která se odvozovala od Platóna a Plótína |
| Démokritos → Pyrrhón | vliv přes texty, tradovaný | Diogenés Laertios IX, 67 (podle přítele Fílóna z Athén měl Pyrrhón nejraději Démokrita, potom Homéra) | podle Diogena Laertia ho měl Pyrrhón nejraději |

Poznámky u vztahů jsou malým písmenem bez tečky; u polemiky je to otázka, o kterou šlo (`atlas-data`).

## Thalés (`thales`)

- **Roky:** beze změny, asi 620–546 př. n. l. IEP, záhlaví: „c. 620 – c. 546“.
- **Místa:** beze změny, Milétos (narození); IEP: rodák z Milétu.
- **Směr:** milétská škola (IEP: zakladatel nové školy, podle Aristotela).
- **Vztahy:** beze změny (Thalés → Anaximandros, `ucitel`, tradovaný; IEP: Anaximandros je podle D. L. I, 13 jeho žák).
- **Kdo / proč:** beze změny (IEP: Aristotelés ho označuje za prvního, kdo hledal počátky; voda jako počátek je v oddílu 3 hesla).
- **Atribut:** beze změny (studna).
- **Otevřené:** nic. Hloubka zůstává `profil`; až profil vznikne, příznak `medailonek` se smaže.

## Anaximandros (`anaximandros`)

- **Roky:** beze změny, asi 610–546. IEP: „c. 610–546“ (IEP o Thalétovi: zemřel asi 545).
- **Místa:** beze změny, Milétos (narození).
- **Směr:** milétská škola.
- **Vztahy:** beze změny (Thalés → Anaximandros; Anaximandros → Anaximenés, oba `ucitel` a tradované).
- **Kdo / proč:** kdo bylo „Myslitel z Milétu, o generaci mladší než Thalés.“, teď „Myslitel z Milétu, o deset let mladší než Thalés.“ (IEP o Thalétovi: o deset let mladší; deset let není generace). Proč bylo „Počátkem všeho mu bylo neomezené (apeiron) a nakreslil první mapu světa.“, teď „Jako první řecký myslitel napsal spis prózou a počátkem všeho mu bylo neomezené (apeiron).“ Důvod: IEP o mapě píše jen „is said to have made the first map of the world“, ve větě „proč“ nesmí být nejistá zpráva podaná jako fakt; spis prózou IEP tvrdí bez výhrady („the first who dared to write a treatise in prose“).
- **Atribut:** nemá. Napadla mě mapa (IEP: první mapa je jen připisována) a gnómón (IEP: „probably introduced“), obojí je nejisté; ikona není.
- **Otevřené:** nic.

## Anaximenés (`anaximenes`)

- **Roky:** beze změny, činný asi od 550, zemřel asi 528 (IEP: „flourished in the mid 6th century … died about 528“). Narození v datech není. IEP o Thalétovi (v jiné větě) uvádí narození 585 podle D. L., vlastní heslo roky narození neuvádí, proto nepřevzato.
- **Místa:** beze změny, Milétos (narození).
- **Směr:** milétská škola.
- **Vztahy:** beze změny (Anaximandros → Anaximenés, `ucitel`, tradovaný; IEP: Theofrastos ho označuje za druha a možná žáka).
- **Kdo / proč:** kdo bylo „Myslitel z Milétu, druh a snad i žák Anaximandrův.“, což je výhrada ve větě; teď „Myslitel z Milétu, třetí z milétských filozofů.“ (IEP, úvod: třetí filozof milétské školy). Proč bylo „Za počátek všeho pokládal vzduch.“, teď „Za počátek všeho pokládal vzduch a proměny látek vysvětloval jeho zřeďováním a zhušťováním.“ (IEP, oddíl 1: první zaznamenaný myslitel, který podal teorii změny a opřel ji o pozorování).
- **Atribut:** nemá.
- **Otevřené:** nic.

## Empedoklés (`empedokles`)

- **Roky:** beze změny, asi 490–430 (Britannica, záhlaví, z dřívějšího ověření). SEP: přesná data neznámá, narozen na počátku 5. století, zemřel podle Aristotela v šedesáti.
- **Místa:** beze změny, Akragás (narození); SEP: rodák z Akragantu.
- **Směr:** nemá (SEP: tradice ho spojuje s Parmenidem, Anaxagorou a pýthagorejci, ale „chronologicky sotva možné“).
- **Vztahy:** nové dva: Empedoklés → Gorgiás (`ucitel`, `tradovany`) a Empedoklés → Lucretius (`vliv-textem`), viz tabulka výše. Žák Parmenidův z Alkidamanta (SEP: „hardly possible on chronological grounds“) nezapsán.
- **Kdo / proč:** beze změny (SEP, oddíl 2.1: čtyři kořeny a Láska se Sváry).
- **Atribut:** nemá (SEP o Etně nic neříká a Diogenův příběh o skoku do sopky jsem neotevřel).
- **Pramen:** do `zdroje` osoby přibyl `iep-gorgias`.
- **Otevřené:** nic.

## Anaxagorás (`anaxagoras`)

- **Roky:** beze změny, asi 500–428 př. n. l. (SEP: 500–428; narození z D. L., kterému bylo dvacet při Xerxově přechodu přes Hellespont, 480).
- **Místa:** beze změny, Klazomeny (narození), Athény (působení do 436), Lampsakos (vyhnanství a smrt 428). U Athén jsem přidal `priblizne: true`: SEP (oddíl 1) klade odchod do Lampsaku mezi 436 a 430 a poznamenává, že datum procesu je sporné (450, 437, 434, 430).
- **Směr:** nemá.
- **Vztahy:** nový Anaxagorás → Sókratés (`vliv-textem`, `tradovany`). Sókratés v Faidónu 97b–98b vypráví, že slyšel číst z Anaxagorovy knihy o rozumu jako původci řádu, sáhl po ní a byl zklamán; děj líčí jen Platón, proto tradovaný. SEP v úvodu a v oddílu 1 navíc cituje Platónovu Obranu (kniha k dostání za drachmu).
- **Kdo / proč:** beze změny (SEP: „friend and protégé of Pericles“; Slunce jako rozžhavený kámen, obžaloba z bezbožnosti; nús jako řád).
- **Atribut:** nemá. Napadl mě kámen (Slunce jako rozžhavený kámen), ikona není, návrh níže v Pro autora.
- **Pramen:** do `zdroje` osoby přibyl `platon-faidon`.
- **Otevřené:** nic.

## Gorgiás (`gorgias`)

- **Roky:** beze změny, asi 483–375 (IEP, záhlaví).
- **Místa:** beze změny, Leontíny (narození), Athény (pobyt roku 427), Larisa (smrt); IEP: z Leontín, 427 vyslancem v Athénách, zemřel v 108 letech v Larise.
- **Směr:** sofisté.
- **Vztahy:** původní Gorgiás → Antisthenés (`ucitel`, IEP Antisthenes); nové Empedoklés → Gorgiás a Gorgiás → Isokratés (obojí tradované, IEP Gorgias).
- **Kdo / proč:** beze změny (IEP: roku 427 jako vyslanec v Athénách ohromil posluchače řečmi).
- **Atribut:** nemá.
- **Otevřené:** IEP o něm píše, že „may have been one of Aspasia’s instructors“, v datech jsem to nezapsal: „may have“ je domněnka, ne svědectví.

## Aspasie (`aspasie`)

- **Roky:** beze změny, činná 445–429 př. n. l. (`aktivni`). Britannica: s Periklem žila asi od 445 do jeho smrti 429.
- **Místa:** beze změny, Milétos (narození), Athény (působení). Britannica: z Milétu, nebyla athénskou občankou.
- **Směr:** nemá.
- **Vztahy:** nový Aspasie → Sókratés (`znali-se`, `tradovany`). Platón (Menexenos 235e–236b) nechává Sókrata říkat, že ho učila řečnictví; je to ironie a řeč je smyšlená (Jowett). Xenofón (Vzpomínky II, 6, 36) nechává Sókrata odvolat se na Aspasii („mám to z jejích vlastních úst“), v Hospodáři III, 14 jí Sókratés posílá Kritobúla. Setkání dokládají jen literární scény, proto tradované.
- **Kdo / proč:** kdo bylo „Vzdělaná žena z Milétu, družka athénského státníka Perikla.“, teď „Žena z Milétu, která žila s athénským státníkem Periklem.“ Důvod: „vzdělaná“ Britannica v textu neříká a zpráva, že byla vzdělaná, stojí na Platónově ironii. Proč beze změny („Sókratův žák Aischinés o ní napsal dialog, který nese její jméno.“; Britannica: „The Socratic philosopher Aeschines treated her more kindly in a dialogue bearing her name.“).
- **Atribut:** nemá.
- **Pramen:** přibyly `xenofon-vzpominky` a `platon-menexenos`.
- **Otevřené:** nic.

## Konfucius (`konfucius`)

- **Roky:** beze změny, tradičně 551–479 př. n. l. (SEP, úvod).
- **Místa:** beze změny, Zou (narození), Lu (působení a smrt). SEP, oddíl 1: narozen ve státě Zou, jižně od většího státu Lu; úředník v Lu.
- **Směr:** nemá; má `tradice: cinska`.
- **Vztahy:** žádný. V datech není nikdo, s kým by měl Konfucius vztah jednoho z čtyř typů. V úvahu by přicházeli Mencius (SEP ho cituje, tradičně 372–289) nebo Lao-c’ (SEP ho jmenuje v úvodu); ani jeden v datech není. Příběh o setkání Konfucia s Lao-c’ jsem v pramenech neotevřel a nezapisuji ho. Vztah k západním filozofům žádný pramen neříká.
- **Kdo / proč:** beze změny.
- **Atribut:** nemá.
- **medailonek:** ne (`vztahy: žádný`). Rozhodnutí je na autorovi (Pro autora).

## Isokratés (`isokrates`)

- **Roky:** beze změny, 436–338 př. n. l. (Britannica, souhrn).
- **Místa:** beze změny, Athény (narození i smrt).
- **Směr:** nemá (škola řečnictví není filozofický směr z `smery`).
- **Vztahy:** nový Gorgiás → Isokratés (`ucitel`, `tradovany`; IEP Gorgias, Quintilianus „a jiní“). Vztah k Platónovi (polemika) nezapsán: můj vlastní pramen `isokrates-antidosis` říká „Platóna ani Akademii nejmenuje“ a `isokrates-helena` „nikoho nejmenuje“.
- **Kdo / proč:** beze změny (Britannica: škola připravovala k praktickým potřebám společnosti a byla téměř celá o rétorice).
- **Atribut:** beze změny (svitek).
- **Pramen:** do `zdroje` osoby přibyl `iep-gorgias`.
- **Otevřené:** nic.

## Pyrrhón (`pyrrhon`)

- **Roky:** beze změny, asi 365–360 až 275–270 př. n. l. (`rozmezi` z SEP, oddíl 1: „around 365–360 BCE until around 275–270“).
- **Místa:** beze změny, Élis (narození); SEP: „Pyrrho’s home town of Elis“.
- **Směr:** skepticismus.
- **Vztahy:** nový Démokritos → Pyrrhón (`vliv-textem`, `tradovany`). Diogenés Laertios IX, 67: Fílón z Athén, Pyrrhónův přítel, říkal, že Pyrrhón měl nejraději Démokrita a potom Homéra. Jediný starověký doklad, proto tradovaný. Nezapsáno: Anaxarchos z Abdér (SEP: nejspolehlivější Pyrrhónův učitel), Timón z Fliúntu a Alexandr Veliký, nejsou v datech.
- **Kdo / proč:** beze změny („Vypráví se, že s Alexandrem Velikým došel až do Indie.“, SEP: „allegedly accompanied“; „Učil zdržet se soudu … a tak dojít klidu.“). SEP v oddílu 2 a 3 připomíná, že podání o Pyrrhónově učení stojí na Timónovi (u Aristokla), takže „proč“ je to, co mu připisuje tradice.
- **Atribut:** beze změny (prasátko).
- **Pramen:** do `zdroje` osoby přibyl `dl-ix-67`.
- **Otevřené:** nic.

## Cicero (`cicero`)

- **Roky:** beze změny, 106–43 př. n. l. (IEP: narozen 3. 1. 106, zavražděn 7. 12. 43).
- **Místa:** beze změny, Řím (působení). Rodiště (Arpinum) v datech není a z IEP ho nemám.
- **Směr:** nemá; IEP říká, že se po celý život hlásil k Akademii. Viz Pro autora.
- **Vztahy:** nové dva: Platón → Cicero (`vliv-textem`) a Cicero → Epikúros (`polemika`, spor na dálku); viz tabulka. Karneadés → Cicero nezapsán: Karneadés nic nenapsal, Cicero ho zná z Klitomachových spisů (SEP Carneades), takže „vliv přes texty“ by tvrdil víc, než pramen říká; vliv zpracovává vztah Karneadés → Chrýsippos (polemika), který Cicero v O osudu uchoval.
- **Kdo / proč:** kdo bylo „Římský řečník a politik, konzul roku 63 př. n. l.“, teď „Římský řečník a politik, který byl roku 63 př. n. l. konzulem.“ Obsah stejný; věta končila zkratkou „př. n. l.“ a test ji počítal jako větu bez konce. „Proč“ beze změny (IEP, oddíl 3: překládal řecké spisy do latiny a vymýšlel latinská slova).
- **Atribut:** beze změny (řečnická tribuna).
- **Otevřené:** nic.

## Karneadés (`karneades`)

- **Roky:** beze změny, 214 – asi 129. SEP: 214–129/8.
- **Místa:** beze změny, Kyréné (narození), Athény (působení), Řím (pobyt 155). SEP: z Kyrény; scholarchou Akademie před rokem 155, kdy byl vyslán do Říma.
- **Směr:** Akademie a skepticismus.
- **Vztahy:** beze změny (Karneadés → Chrýsippos, `polemika`, spor na dálku; Cicero, O osudu 22–31).
- **Kdo / proč:** beze změny. „Vypráví se, že v Římě jeden den hájil spravedlnost a druhý den mluvil proti ní.“ je tradice (SEP: „According to tradition … all of them much later, and doubts about every part of the story“).
- **Atribut:** nemá.
- **Otevřené:** nic.

## Plótínos (`plotinos`)

- **Roky:** narození 204, zemřel 270. SEP: „we may infer that he was born in 204“. Narození jsem změnil na `priblizne: true`, protože rok je vyvozený (Porfyrios dává věk, SEP dopočítává).
- **Místa:** beze změny, Alexandrie (studium asi 232–243), Řím (působení 244–269), Minturnae (smrt 270). SEP: u Ammonia Saka od 28 let jedenáct let, 243 tažení Gordiána III., od konce 244 v Římě; místo smrti z Porfyria (`porfyrios-plotinos`).
- **Směr:** novoplatonismus.
- **Vztahy:** nový Platón → Plótínos (`vliv-textem`) a Plótínos → Hypatia (`vliv-textem`, `tradovany`).
- **Kdo / proč:** beze změny (SEP: native of Egypt, přes pětadvacet let učil v Římě).
- **Atribut:** beze změny (prázdný rám).
- **Otevřené:** nic.

## Filón Alexandrijský (`filon-alexandrijsky`)

- **Roky:** beze změny, asi 15–10 př. n. l. až 45–50 n. l. (Britannica, záhlaví, dřívější ověření; dnes znovu nepřístupná). SEP (oddíl 1) píše, že žil „v první polovině 1. století př. n. l.“, což je nejspíš překlep (podle obsahu hesla žil v 1. století n. l.); roky tedy zůstávají z Britannicy.
- **Místa:** beze změny, Alexandrie (působení), Řím (pobyt, bez roku). SEP: vyslanectví k Caligulovi po nepokojích roku 38.
- **Směr:** nemá (SEP: „Was Philo a Middle Platonist?“ je otevřená otázka).
- **Vztahy:** nový Platón → Filón (`vliv-textem`).
- **Kdo / proč:** beze změny (SEP: vyslanectví k Caligulovi; alegorický výklad Písma).
- **Atribut:** nemá.
- **Otevřené:** nic.

## Hypatia (`hypatia`)

- **Roky:** beze změny, asi 370–415 (BEA: „circa 370“, březen 415). Hypatia je uvedená v datech jako 370 s `priblizne`, 415 bez.
- **Místa:** beze změny, Alexandrie (působení a smrt).
- **Směr:** novoplatonismus (BEA: „head of the Alexandrian Neoplatonic school“).
- **Vztahy:** nový Plótínos → Hypatia (`vliv-textem`, `tradovany`). Sókratés Scholastikos VII, 15: „succeeded to the school of Plato and Plotinus“; je to jediné starověké svědectví o tom, v čem navazovala, a je z 5. století, proto tradované.
- **Kdo / proč:** kdo beze změny. Proč bylo „Učila filozofii a matematiku a zemřela rukou rozvášněného davu.“, teď „Stála v čele alexandrijské novoplatonské školy a roku 415 ji zabil rozzuřený dav.“ Důvod: starý „proč“ opakoval atribut (astroláb: „Učila astronomii a matematiku“); BEA, odstavec 3: podle Sudy kolem roku 400 v čele alexandrijské novoplatonské školy; všechny prameny se shodují na smrti davem (BEA).
- **Atribut:** beze změny (astroláb).
- **Pozor na jméno:** BEA uvádí, že studovala v Athénách u Plútarcha a jeho dcery Asklépigenie. Je to Plútarchos z Athén (novoplatonik), ne Plútarchos z Chairóneie, který v datech je. Vztah Plútarchos → Hypatia jsem nezapsal.
- **Pramen:** přibyl `sokrates-scholastikos-vii-15`.
- **Otevřené:** vztah k Plótínovi stojí na jednom pozdním svědectví (Pro autora).

## Pýthagorás (`pythagoras`)

- **Roky:** beze změny, asi 570–490 př. n. l. (SEP, úvod).
- **Místa:** beze změny, Samos (narození), Krotón (působení asi 530–510), Metapontion (smrt asi 490). SEP, oddíl 3: z Samu kolem 530 do Krotónu, kolem 510 násilí proti pýthagorejcům, zemřel v Metapontu kolem 490.
- **Směr:** pýthagorejci.
- **Vztahy:** žádný, a žádný se najít nedal. Pýthagorás nic nenapsal (SEP), takže „vliv přes texty“ nesedí; Xenofanés se mu vysmívá (SEP, oddíl 3, příběh o štěněti) a Hérakleitos ho jmenuje, ale takovou polemiku mezi současníky jsem podle rozhodnutí z celku 7 (komentář ve `vztahy.yaml`) nezapisoval: stránka by ji dala pod „Znali se a přeli se“. Vztah k Platónovi SEP výslovně komplikuje: pozdní Platónovu metafyziku přisuzovala Pýthagorovi až pozdější tradice, Aristotelés ji rozlišuje (oddíl 2.3).
- **Kdo / proč:** beze změny.
- **Atribut:** beze změny (štěně).
- **medailonek:** ne (`vztahy: žádný`). Rozhodnutí je na autorovi.

## Pro autora

Řádky k rozhodnutí, každý s doporučením. Prázdný řádek znamená souhlas s doporučením.

- Konfucius a Pýthagorás zůstávají bez medailonku, protože nemají žádný vztah (kritérium je v `chybiMedailonku`). U Konfucia by vztah vedl k Lao-c’ nebo k Menciovi, u Pýthagora k Filolaovi nebo ke sporu s Xenofanem a Hérakleitem; nikdo z nich není v datech. Doporučení: nechat bez stránky do chvíle, kdy autor přidá osoby z oken „Mezitím jinde“ (Lao-c’, Buddha) a Filolaa; kritérium neměnit. Odpověď:
- Pýthagorás a spor s Xenofanem: kdybys přece chtěl polemiku mezi současníky (Xenofanés o štěněti, Hérakleitos B40), stránka ji dnes pod „Znali se a přeli se“ řadí tak, jako by se znali. Doporučení: nezapisovat, dokud skupina nemá neutrální nadpis („Přeli se“). Odpověď:
- Hypatia: vztah k Plótínovi je jen z jednoho svědectví z 5. století (Sókratés Scholastikos) a říká jen, že vedla školu, která se od Platóna a Plótína odvozovala. Doporučení: nechat jako tradovaný (je to jediné, co ji v datech spojuje s filozofy). Odpověď:
- Anaxagorás a Sókratés, Aspasie a Sókratés, Pyrrhón a Démokritos: tři vztahy, které podává jen jedna literární nebo životopisná scéna (Faidón, Menexenos a Xenofón, Diogenés Laertios IX, 67). Doporučení: nechat jako tradované (stránka je označí slovem „vypráví se“). Odpověď:
- Cicero: IEP říká, že se po celý život hlásil k Akademii, ale `smery` u něj nejsou. Doporučení: doplnit `smery: [akademie]` až při psaní profilu (zatím by přibyl do výpisů směru bez textu o něm). Odpověď:
- Plótínos: rok narození je teď přibližný (`priblizne: true`), protože ho SEP jen vyvozuje; stránka ukáže „asi 204“. Doporučení: nechat. Odpověď:
- Anaximandros: z „proč“ zmizela první mapa světa (IEP ji jen připisuje), zůstalo první spisu prózou a apeiron. Doporučení: nechat nové znění; mapu vrátit až v profilu jako „vypráví se“. Odpověď:
- Aspasie: z „kdo“ zmizelo „vzdělaná“ (Britannica to neříká, stojí na Platónově ironii). Doporučení: nechat. Odpověď:
- Atributy: devět medailonků je bez desky (Anaximandros, Anaximenés, Empedoklés, Anaxagorás, Gorgiás, Aspasie, Karneadés, Filón, Isokratés má svitek). Návrhy, které by prameny nesly a které potřebují novou ikonu: kámen (Anaxagorás, Slunce jako rozžhavený kámen), gnómón (Anaximandros, jen „probably introduced“). Doporučení: nechat bez desky, nevymýšlet. Odpověď:
- Lucretius je jediný z původních pětatřiceti, kdo nemá medailonek: v pramenech není jeho rodiště ani místo působení a test místo vyžaduje. Doporučení: nechat bez stránky do profilu v celku o epikurejcích. Odpověď:
