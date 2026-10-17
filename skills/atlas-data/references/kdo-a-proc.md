# Věty „kdo“ a „proč“

Dvě věty, které o člověku řeknou nejvíc. Stojí v kartě Mapy a času, v popisu stránky pro vyhledávače, na kartě v Lidech a směrech a na medailonku hned pod jménem („Kdo byl“, „Proč si ho pamatujeme“). Medailonek nemá jiný text: tyhle dvě věty jsou celý jeho příběh.

## Pravidla

- **Kdo:** kým člověk byl, odkud a v jakém vztahu k tomu, co student zná. Smí to být jmenná věta („Stoik z Assu, Zénónův nástupce v čele školy.“).
- **Proč:** jedna myšlenka, čin nebo dílo, kvůli kterému ho atlas vůbec má. Plná věta se slovesem („Napsal…“, „Učil, že…“, „Ukázal, že…“).
- Každá **jedna věta, nejvýš 25 slov**, s tečkou. Kratší je lepší, pokud nic neztratí.
- **Bez tykání a oslovení** (data se skládají do karet a popisů, kde „ty“ nesedí). Tykání patří do textů stránek.
- **Bez výhrad** („asi“, „snad“, „údajně“, „podle některých“). Nejistý rok nese značka v datech; nejistý příběh se buď podá jako tradovaný („Vypráví se, že…“, jen když pramen příběh nese), nebo do věty nepatří.
- **Proč neopakuje kdo ani atribut** a neříká jen vztah, který už ukáže Doba a lidé.
- **Jména střídmě** (`docs/styl.md`, pravidlo 6): jen ta, která student zná z atlasu nebo která nesou smysl věty.
- **Udržitelné tvrzení.** Formulace musí platit sama o sobě a mít oporu v pramenu z pole `zdroje` osoby.
- **Žádné znaky strojového textu** (Wikipedie, „Signs of AI writing“): žádné nafouknuté hodnocení („zásadní“, „klíčový“, „významně přispěl“, „nesmazatelně se zapsal“, „odkaz, který přetrval“), žádné trojice přídavných jmen, žádné „nejen…, ale i…“ jako ozdoba, žádné pomlčky místo čárek pro efekt.

## Dvojice

> ✗ Významný stoický filozof, který zásadně ovlivnil vývoj školy.
> ✓ Stoik z Assu, Zénónův nástupce v čele školy. *(Kleanthés)*

Proč: „významný“ a „zásadně“ nic neříkají. Odkud byl a co ve škole dělal, ano.

> ✗ Byl učitelem Epiktétovým. *(Musonius Rufus, proč)*
> ✓ jedna věta o tom, co Musonius učil nebo udělal: myšlenka, kterou student u Epiktéta potká znovu, z pramene v jeho `zdroje`.

Proč: vztah k Epiktétovi už ukáže Doba a lidé. „Proč“ má říct, co si z něj vzít.

> ✗ Stoikové mají jméno podle malovaného sloupoví, Stoa Poikilé, kde učil. *(Zénón z Kitia: proč i atribut „sloupoví“ říkají totéž)*
> ✓ „Proč“ říká myšlenku (co Zénón učil o ctnosti nebo o životě podle přírody), atribut zůstává u sloupoví.

Proč: na medailonku stojí obě věty pod sebou.

> ✗ Napsal Hymnus na Dia. Je to báseň o řádu světa.
> ✓ Napsal Hymnus na Dia, báseň o rozumném řádu, který prostupuje svět. *(Kleanthés)*

Proč: jedna věta; druhou větu spojíš vedlejší větou nebo přístavkem.

> ✗ Pravděpodobně se narodil kolem roku 460 a podle některých zpráv byl žákem Leukippa.
> ✓ Myslitel z Abdér, žák a spolupracovník Leukippův. *(Démokritos)*

Proč: rok patří do pole `narozen` se značkou `priblizne`; „podle některých zpráv“ je výhrada, ne informace.

> ✗ Učil, že všechno je z atomů, a když se nad tím zamyslíš, je to vlastně moderní.
> ✓ Učil, že všechno se skládá z nedělitelných atomů a prázdna. *(Démokritos)*

Proč: oslovení a hodnocení do dat nepatří.

## Rychlá kontrola

- Je to jedna věta do 25 slov s tečkou?
- Řekl by to tak učitel, který dějiny filozofie zná a má je rád, šestnáctiletému studentovi?
- Stojí každé tvrzení v pramenu, který má osoba v `zdroje`?
- Liší se „proč“ od „kdo“, od atributu a od vztahů v Době a lidech?
- Přečti obě věty nahlas za sebou, tak jak stojí na medailonku: znějí jako dvě věty jednoho vypravěče?
