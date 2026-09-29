# Podklady: data období 1 a 2

Ověřeno 29. 9. 2026 skillem `atlas-overeni`. Celek: `src/data/` (lide, mista, vztahy, udalosti, obdobi, zdroje) pro období 1 (Počátky a klasické Řecko) a 2 (Helenismus a Řím) podle kostry osobností v `docs/architektura.md`. Co nešlo ověřit, je v `docs/podklady/k-overeni.md`.

## Postup

- Každý rok, místo s rolí a časem a každý vztah jsem vzal z otevřeného hesla SEP, IEP nebo odborného přehledu (Britannica s podepsaným autorem, MacTutor, Biographical Encyclopedia of Astronomers) nebo z primárního textu. Pramen je v datech u osoby (`zdroje`), u každého místa (`zdroj`) a u každého vztahu.
- Kde prameny dávají jen rozmezí, je v datech odhad s `priblizne: true` a rozmezí v poli `rozmezi` (Archytás, Pyrrhón). Kde dávají jen horní mez, je `nejpozdeji: true` (Chairefón, Xenofón, Musonius). Kde neznáme narození ani úmrtí, je jen `aktivni` (Hérakleitos, Xenofanés, Aspasie).
- Vztahy, které podává antická tradice a odborné heslo je nebere jako jisté, mají `tradovany: true` (Thalés → Anaximandros, Anaximandros → Anaximenés, Parmenidés → Zénón z Eleje, Antisthenés → Diogenés, Xenofón → Zénón z Kitia).
- Kontroly v `tests/data/data.test.ts` hlídají schéma, odkazy, rok nula, narození před úmrtím, pobyty uvnitř života, učitele staršího než žák, licence obrázků a atributy.

## Rozsah

| Období | Portréty | Profily | Medailonky |
| --- | --- | --- | --- |
| 1 | Sókratés, Platón, Aristotelés | Thalés, Pýthagorás, Hérakleitos, Parmenidés, Démokritos, Prótagorás, Zénón z Eleje | Anaximandros, Anaximenés, Xenofanés, Empedoklés, Anaxagorás, Gorgiás, Aspasie, Konfucius; z návrhu P1 a Sókratova okruhu: Xenofón, Archytás, Isokratés, Eudoxos, Aristippos, Antisthenés, Chairefón, Kritón, Alkibiadés, Aristofanés, Speusippos, Xenokratés |
| 2 | Diogenés, Epikúros, Seneca, Epiktétos, Marcus Aurelius | Zénón z Kitia, Chrýsippos, Pyrrhón, Lucretius, Cicero, Hypatia, Plótínos | Kratés, Hipparchia, Kleanthés, Musonius Rufus, Theofrastos, Karneadés, Filón Alexandrijský |

Celkem 49 osob, 46 míst, 29 vztahů, 15 událostí. Lao-c’, Buddha, Čuang-c’, Hieroklés a Sextus Empiricus čekají v `k-overeni.md`.

## Tvrzení s rozhodnutím

| # | Tvrzení | Typ | Zdroj a místo | V datech |
| --- | --- | --- | --- | --- |
| 1 | Sókratés 469–399 př. n. l., démos Alópeké | doložený fakt | SEP Socrates (Nails, Monoson), oddíl 3 | 469–399, Athény |
| 2 | Sókratés u Potidaie 432, u Délia 424, u Amfipole 422 | doložený fakt | SEP Socrates, oddíl 3; Obrana 28e | tři místa s rolí `tazeni` |
| 3 | Aristofanova Oblaka 423 | doložený fakt | SEP Socrates, oddíl 3 | událost `oblaka`, vztah polemika |
| 4 | Platón asi 427–347, narozen a zemřel v Athénách, založil Akademii | přibližný fakt | SEP Plato (Kraut): „429?–347“; Britannica Plato (Meinwald): 428/427–348/347, Athény | asi 427 (viz Rozpory) |
| 5 | Aristotelés: Stageira 384, Akademie od 17 let do 347, Assos asi 3 roky, Lesbos, Pella 343 (Alexandrovi 13 let), Lykeion 335–323, Chalkis, smrt 322 | doložený fakt | SEP Aristotle (Shields), Life | 7 míst s rolí a roky |
| 6 | Archytás zachránil Platóna roku 361 | doložený fakt | SEP Archytas (Huffman) | vztah znali-se, pobyt Platóna v Syrákúsách do 361 |
| 7 | Archytova dřevěná holubice | tradovaný příběh | Aulus Gellius X, 12 (podle Favorina); SEP upozorňuje, že může jít o jiného Archyta | atribut s „Vypráví se, že…“ |
| 8 | Aristippos po ztroskotání u Rhodu uviděl v písku geometrické obrazce | tradovaný příběh | Vitruvius VI, předmluva 1 | atribut loď |
| 9 | Epikúros: Samos do 321, Kolofón, Mytiléna, Lampsakos, Athény 306–270 | doložený fakt | SEP Epicurus (Konstan) | 5 míst |
| 10 | Seneca asi 1 př. n. l. – 65 n. l., Corduba, Korsika 41–49, rádce Nerona od 54, smrt 65 | doložený fakt | SEP Seneca (Vogt) | 5 míst |
| 11 | Epiktétos: Hierapolis, otrok Epafrodíta v Římě, žák Musonia, škola v Níkopoli, asi 55–135 | doložený / přibližný fakt | SEP Epictetus (Graver) | 3 místa, vztah Musonius → Epiktétos |
| 12 | Marcus Aurelius 121–180, císařem od 161, četl Epiktéta | doložený fakt | SEP Marcus Aurelius (Kamtekar); Britannica (Crook): narozen v Římě | vliv textem Epiktétos → Marcus |
| 13 | Zénón z Kitia asi 335–263, do Athén asi 312, poslouchal Kratéta | přibližný fakt | Britannica Zeno of Citium; IEP Cynics | vztah Kratés → Zénón |
| 14 | Kleanthés 331/330–232/231, v čele Stoy 263–232; Chrýsippos asi 280–207, v čele od 230 | přibližný fakt | Britannica Cleanthes; IEP Chrysippus (Kirby) | posloupnost Zénón → Kleanthés → Chrýsippos |
| 15 | Karneadés 214–129/8, v Římě 155, dvě řeči o spravedlnosti | doložený fakt; řeči „podle tradice“ | SEP Carneades (Allen) | pobyt v Římě 155; ve větě „Vypráví se“ |
| 16 | Hypatia asi 370–415, Alexandrie, dcera Theóna, zabita davem | přibližný / doložený fakt | BEA (Pasachoff), s. o Hypatii | 2 místa |
| 17 | Plótínos 204–270, u Ammónia v Alexandrii od 28 let 11 let, v Římě od konce 244 | doložený fakt | SEP Plotinus (Kalligas) | studium 232–243, Řím 244–270 |

## Citáty

| # | Znění v atlasu | Autor, dílo, místo | Překlad | Poznámka |
| --- | --- | --- | --- | --- |
| 1 | „Život, který nezkoumáme, nestojí za to, aby ho člověk žil.“ | Platón, Obrana Sókratova 38a | vlastní převod podle řeckého textu a B. Jowetta | Jowett: „the unexamined life is not worth living“ |
| 2 | „Tenhle člověk si myslí, že něco ví, a neví. Já nevím, ale ani si nemyslím, že vím.“ | Platón, Obrana Sókratova 21d | vlastní převod podle řeckého textu a B. Jowetta | Skutečné znění místo podvrženého „Vím, že nic nevím“ |

## Rozpory a rozhodnutí

- **Platón:** SEP „429?“, Britannica 428/427. V datech **asi 427**: je to tradiční údaj a drží věk 67 let v roce 360 př. n. l. z testovacího scénáře P4.
- **Diogenés:** IEP asi 404, Diogenés Laertios (skoro devadesátiletý roku 323) asi 412; návrh P1 uváděl 412. V datech **asi 404** podle odborného hesla; rozhoduje autor (k-overeni.md).
- **Epiktétos a Domitianův edikt:** SEP Epictetus 89, SEP Stoicism 93. V datech zatím bez roku odchodu z Říma.
- **Theofrastos a Aristotelés:** SEP je popisuje jako spolupracovníky, ne učitele a žáka. Ve vztazích **znali-se** s poznámkou „spolupracovník a nástupce“.
- **Pýthagorás:** SEP (Huffman): nic nenasvědčuje tomu, že by jeho sláva stála na matematice, a pro důkaz Pýthagorovy věty „není ani špetka dokladů“. Proto ve větě „proč“ stěhování duší, ne věta o trojúhelníku.
- **Empedoklés a Etna:** SEP: „Můžeme si být jisti, že neskočil do Etny.“ Příběh se v atlasu nepoužije jako fakt.

## Otevřené otázky pro autora

- Datování Diogena (404, nebo 412)?
- Přidat Alexandra Velikého jako medailonek (nese cestu 4 a Diogenův příběh)?
- Převzít Novotného překlad Obrany, nebo ponechat vlastní převod?
