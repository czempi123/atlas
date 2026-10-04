# Plán větve celek-1: „Jak poznám, co je pravda?“

Celek 1: velká otázka 7, cesta 1 „Kdy mám dobrý důvod věřit?“, Sókratův portrét a profil Prótagora. **Stav: hotovo, schváleno a sloučeno do hlavní větve 1. 10. 2026.**

| Krok | Co | Stav |
| --- | --- | --- |
| P6 | Podklady (`docs/podklady/celek-1-pravda.md`) | hotovo |
| P7 | Sókratův portrét a profil Prótagora | hotovo a schváleno |
| P8 | Cesta 1 s Prótagorem a stránka velké otázky 7 | hotovo a schváleno |
| P10 | Revize celku (`docs/revize/celek-1-2026-10-01.md`) | hotovo, celek schválen a sloučen |

Níže zadání kroků v plném znění a to, co po nich zůstalo na později. Strategie a rozcestník jsou v `docs/plan.md`.

## P6: Podklady k celku „Jak poznám, co je pravda?“

**Stav 1. 10. 2026:** hotovo, podklady v `docs/podklady/celek-1-pravda.md`, rozhodnutí v `docs/rozhodnuti.md`. Zadání, se kterým P6 proběhl:

Další krok po P5. První celý celek F2: dopsaný Sókratův portrét, profil Prótagora, dokončená cesta 1 a stránka velké otázky 7. P6 připraví jen ověřené podklady; psaní je P7 (portrét a profil, při něm vznikne skill `atlas-osobnost`) a P8 (cesta a velká otázka se skillem `atlas-cesta`), revize P10.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem (terminál na Macu). Sonnet 5.5 · high s vyhledáváním; když narazí na sporné prameny (počty hlasů při procesu, osud Prótagorových knih), přepni na Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Z větve main založ větev celek-1.

Přečti CLAUDE.md, docs/styl.md, v docs/architektura.md velkou otázku 7 a cestu 1, docs/podklady/k-overeni.md a hotové podkladové listy v docs/podklady/. Postupuj podle skillu atlas-overeni.

Připrav podklady k prvnímu celému celku „Jak poznám, co je pravda?“. Studentský text zatím nepiš.

1. Sókratův portrét, kapitoly 02–05 podle osnovy ve frontmatteru src/content/osobnosti/sokrates.mdx: Muž z agory (jak se ptal, na příkladu z Lachéta nebo Euthyfróna; kdo za ním chodil), Ústup od Délia (tři tažení, Alkibiadovo vyprávění v Symposiu), Soud (obžaloba, Obrana, hlasování a trest, proč nenavrhl vyhnanství) a Poslední den (Kritón přemlouvá k útěku a Sókratovy důvody, proč zůstal; Faidón 117a–118a). U každé kapitoly jedna nejsilnější scéna.
2. Prótagorás pro profil: život (Abdéra, Athény, Thurioi), „Člověk je měřítkem všech věcí“ (DK 80 B1, Platón, Theaitétos 152a), výrok o bozích (DK 80 B4), co je doložené a co jen tradované o konci jeho života, a jeho nejsilnější argument v Platónově dialogu Prótagorás.
3. Cesta 1: skutečný střet Sókrata a Prótagora pro blok Spor (obě strany v nejsilnější verzi) a nový případ ze současnosti, na kterém se dá jejich spor vyzkoušet.
4. Velká otázka 7: pro lidi období 1 a 2, kteří k ní mají co říct (Parmenidés, Prótagorás, Sókratés, Platón, Aristotelés, Pyrrhón, Epikúros), jedna ověřená věta o tom, jak odpovídali, se zdrojem.
5. Obrázky: Sókratova busta a případně Prótagorás; autor fotografie, instituce, licence a odkaz (Wikimedia Commons).

Výstup: podkladový list docs/podklady/celek-1-pravda.md podle šablony skillu, nové prameny a citáty do src/data/zdroje.yaml (citát vždy s místem a překladem), návrh dat do src/data, vyřízené body v docs/podklady/k-overeni.md. Celé npm test musí projít.

Nejdřív mi v pár bodech napiš, co budeš ověřovat a které příběhy považuješ za nejsilnější, a počkej na odpověď. Pak pracuj, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci napiš, co je ověřeno, co zůstalo otevřené a co potřebuje moje rozhodnutí.
```

## Po P6: co zůstalo na později

- Nikiás jako generál (rámec Lachéta): doložit z Thúkydida, jinak ho ve studentském textu nenazývat velitelem.
- Dramatické datum dialogu Prótagorás: neověřeno, rok setkání se neuvádí.
- Euthyfrónovo dilema (Euthyfrón 10a) zazní i na stránce velké otázky 9 „Je Bůh?“, až bude.
- Blok Spor Sókratés × Prótagorás (Theaitétos) a nový případ se šaty z roku 2015 napíše P8 do cesty 1; strany v nejsilnější verzi jsou v `docs/podklady/celek-1-pravda.md`.
- Animace jen tam, kde nesou myšlenku (vznikají se skillem `atlas-komponenta` až po schválení textu): u šatů posuvník předpokládaného světla nad vlastní kresbou, u Délia malá mapa ústupu, u soudu počítadlo „30 hlasů“.
- Kopie `docs/plan.md` v projektu Claude (Atlas filozofie) je starší než repozitář; platí verze v repozitáři.

## P7: Sókratův portrét a profil Prótagora

**Stav 1. 10. 2026:** hotovo a schváleno. Sókratův portrét má kapitoly 02–05, Prótagorás profil, skill `atlas-osobnost` je ve `skills/` i v účtu. Po připomínce autora méně jmen a víc myšlenky (`docs/styl.md`, pravidlo 6); ověřené body z `k-overeni.md` jsou zapracované.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high (portrét je hlavně vyprávění a čeština). Skill `atlas-osobnost` při P7 teprve vznikne, proto prompt odkazuje na podklady, styl a hotovou kapitolu 01 jako vzor.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-1; podklady z P6 jsou v ní.

Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-1-pravda.md (Nejsilnější příběhy, Tvrzení s doporučenými formulacemi, Citáty, Rozpory a rozhodnutí), docs/rozhodnuti.md (záznamy z 1. 10. 2026), v docs/design.md oddíly Bloky a Mezery, mřížka, tvary (středová osa stránky osobnosti) a hotový začátek src/content/osobnosti/sokrates.mdx: úvod a kapitola 01 jsou vzor tónu.

Napiš:

1. Sókratův portrét, kapitoly 02–05, přímo do sokrates.mdx podle osnovy ve frontmatteru (stav změň na hotovo, osnovu smaž):
   - 02 Muž z agory: jádro je Lachés (co je odvaha, Skythové a Plataje, nakonec nevědí); kdo za Sókratem chodil (Obrana 23c).
   - 03 Ústup od Délia: Alkibiadovo vyprávění (Symposion 220a–221c), nejsilnější scéna je ústup.
   - 04 Soud: začni setkáním s Euthyfrónem u sloupoví krále-archonta a jeho otázkou o zbožném (Euthyfrón 10a); pak obžaloba, třicet hlasů (Obrana 36a), prytaneum (36d–e) a proč nenavrhl vyhnanství (37c–38a). Citát obrana-38a patří sem.
   - 05 Poslední den: Kritón u spícího Sókrata, jeho důvody k útěku a Sókratova odpověď (neoplácet křivdu křivdou, řeč Zákonů), smrt podle Faidóna 116b–118a, kohout pro Asklépia.
   Každá kapitola: titulek s pointou v kurzívě, vyprávění scénou, jeden blok pro studenta podle toho, co scéna nese (Nejdřív sám, Volba s důvodem, Odkryj, Změň jednu věc), citáty jen ze zdroje.yaml přes <Citat id="…" />. V src/content/bloky/utek-z-vezeni.yaml doplň do „Co udělal Sókratés“ jeho vlastní důvody z Kritóna.

2. Profil Prótagora src/content/osobnosti/protagoras.mdx ve stejné šabloně: úvod scénou (Hippokratés buší před úsvitem na dveře, Prótagorás v Kalliově domě), jedna až dvě kapitoly (Měřítko všech věcí; O bozích a o obci s mýtem o Prométheovi), dvě velké myšlenky s vlastním pokusem studenta, Zkus to žít a Kam dál (cesta 1, Sókratés, velká otázka 7). Konec života podle doporučení v podkladech (Menón 91e); vyhnání a pálení knih vynech, nebo jen „Později se vyprávělo…“. Deska s mincí, portrét neexistuje.

3. Skill atlas-osobnost: až budou oba texty hotové, vytvoř skillem skill-creator skill podle tabulky skillů v docs/plan.md (tři hloubky, jak najít a vyprávět příběh, výběr myšlenek, blok Zkus to žít, šablona MDX, rychlá kontrola) s ukázkami z těchto dvou stránek. Ulož ho do skills/atlas-osobnost/ a nabídni mi ho k uložení do účtu.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš, a když to příběh potřebuje, zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml (připravené jsou mimo jiné obrana-36a, obrana-36d, kriton-49c, faidon-118a, theaitetos-152a, dl-ix-51). Scény z Platónových dialogů uváděj „Platón vypráví…“, tradované příběhy „Vypráví se…“. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); obě stránky si prohlédni v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu; projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš, jakou scénou otevřeš každou kapitolu a Prótagorův profil a jaký blok v ní bude, a počkej na odpověď. Pak piš, commituj česky po ucelených krocích a nic neposílej na GitHub. Na konci pošli snímky obou stránek a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

Po P7 následuje P8 (cesta 1 s Prótagorem, blokem Spor a šaty z roku 2015, stránka velké otázky 7, skill `atlas-cesta`) a P10 (revize celku skillem `atlas-revize`). Plné znění P8 připravím po schválení P7.

## Po P7: co zůstalo na později

- Animace jen tam, kde nesou myšlenku, se skillem `atlas-komponenta` až po schválení textu celku: u šatů posuvník předpokládaného světla nad vlastní kresbou, u Délia malá mapa ústupu, u soudu počítadlo „30 hlasů“.
- Sókratova stránka má na telefonu asi 20 000 px. Celostránkový snímek v `tests/e2e/prohlidka.spec.ts` se nad 16 384 px v Chromiu uřízne (zbytek je prázdný); snímky skládat po částech. Délku stránky sledovat při zkoušce se studenty.
- Euthyfrónovo dilema (Euthyfrón 10a) zazní i na stránce velké otázky 9 „Je Bůh?“, až bude.
- Popis skillu `atlas-osobnost` v účtu je kratší než kopie ve `skills/`; sjednotit při úpravě skillů po fázi (P13).
- Pravidlo „Jména a podrobnosti střídmě“ (`docs/styl.md`, pravidlo 6) projít i na hotové cestě 1 a v kapitole 01 Sókratova portrétu (P10).

## P8: Cesta 1 s Prótagorem a stránka velké otázky 7

**Stav 1. 10. 2026: hotovo a schváleno.** Po připomínce autora mají filozofové na stránce otázky dvě vrstvy: nejdřív odpovědi všech na tentýž případ, pak proč to tak viděli. Šablona stránky velké otázky (`/otazka/<slug>/`), stránka otázky 7 se čtyřmi hlasy, cesta 1 se sedmi kroky (Spor Prótagorás × Sókratés, šaty z roku 2015) a skill `atlas-cesta` (Jména střídmě, stránka velké otázky). Rozhodnutí v `docs/rozhodnuti.md`, otevřené body v `k-overeni.md` (oddíl P8).

**Původní zadání:** další krok. P7 je schválený, podklady ke sporu Sókratés × Prótagorás, k šatům z roku 2015 a k velké otázce 7 jsou v `docs/podklady/celek-1-pravda.md`. Pracuje se dál ve větvi `celek-1`; po P8 následuje revize celku (P10) a schválení autorem.

Stránka velké otázky je nový typ stránky (`docs/plan.md` › Informační architektura: otázka, tvůj první názor, odpovědi filozofů na časové ose, cesty k otázce, zápis do deníku). Proto P8 má dvě části: nejdřív šablona stránky se skillem `atlas-komponenta`, pak obsah se skillem `atlas-cesta`.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high (xhigh, když se šablona stránky zasekne).

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-1.

Přečti CLAUDE.md, docs/styl.md (hlavně pravidlo 6 „Jména a podrobnosti střídmě“), docs/podklady/celek-1-pravda.md (Spor Sókratés × Prótagorás, nový případ: šaty 2015, Velká otázka 7, Citáty), docs/rozhodnuti.md (záznamy z 1. 10. 2026), v docs/plan.md Informační architekturu (řádek Velká otázka), v docs/architektura.md velkou otázku 7 a cestu 1, v docs/design.md oddíly Bloky a Cesta, hotovou cestu 1 (src/content/cesty/kdy-mam-dobry-duvod-verit*) a hotové stránky src/content/osobnosti/sokrates.mdx a protagoras.mdx jako vzor tónu.

Udělej:

1. Šablonu stránky velké otázky (skill atlas-komponenta): adresa /otazka/<slug>/ podle informační architektury, obsah v src/content/otazky/<slug>.mdx. Stránka má: otázku a krátký úvod scénou, „Tvůj první názor“ (zápis do deníku, než student uvidí filozofy), hlasy myslitelů na časové ose (mince, jméno, jedna věta, citát ze zdroje.yaml, odkaz na profil, pokud existuje), cesty k otázce a na konci návrat k prvnímu názoru („Změnil se?“). Odkazy /otazky/#<slug> v atlasu převeď na novou adresu; přehled /otazky/ zůstává. Ověř na 390 a 1440 px ve světlém i tmavém režimu a klávesnicí, přidej stránku do testů prohlídky.

2. Stránku velké otázky 7 „Jak poznám, co je pravda?“ se čtyřmi hlasy: Parmenidés (rozum, ne smysly), Prótagorás (člověk je měřítkem), Sókratés (zkoušet tvrzení v rozhovoru), Aristotelés (definice pravdy). Platón, Pyrrhón a Epikúros přibudou, až budou mít vlastní profil. Věty a citáty jen z podkladů (dl-ix-22-parmenides, theaitetos-152a, obrana-21d, metafyzika-1011b).

3. Cestu 1 doplň o Prótagora (skill atlas-cesta): krok se Sporem Sókratés × Prótagorás z Theaitéta, podaný jako spor, který si představil Platón (Prótagorás je tam už mrtvý; obě strany v nejsilnější verzi podle podkladů, Prótagorův lékař 166d–167b a Sókratova budoucnost 178b–179b), a nový případ se šaty z roku 2015 (Změň jednu věc). Rozhodni, jestli šaty nahradí krok „Zpráva ve skupině“, nebo přibudou; cesta má zůstat do 20 minut a 6–8 kroků. Na kartě cesty a v přehledu přidej Prótagora mezi filozofy. Skill atlas-cesta doplň o pravidlo „Jména a podrobnosti střídmě“ (stejně jako atlas-osobnost) a nabídni mi ho k uložení do účtu.

Pravidla: každé historické tvrzení a citát musí být v podkladovém listu nebo v datech; co tam není, nepiš a zapiš to do docs/podklady/k-overeni.md. Přímou řeč skutečných osob jen jako citát ze zdroje.yaml. Scény z Platónových dialogů „Platón vypráví…“, tradované příběhy „Vypráví se…“, vymyšlené situace „Představ si…“. Jménem jen ten, kdo nese příběh nebo myšlenku. Věty do 25 slov, odstavce do 4 vět, tykání, žádné redakční poznámky. Zpětná vazba vysvětluje důvod a ptá se dál, nikdy neříká, kdo má pravdu.

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí); cestu projdi celou v prohlížeči na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí; projdi rychlou kontrolu z docs/styl.md.

Nejdřív mi v pár bodech napiš návrh stránky velké otázky (pořadí částí, jak bude vypadat časová osa na telefonu) a osnovu cesty 1 po změně (kroky, blok v každém, odhad minut), a počkej na odpověď. Pak piš, commituj česky po ucelených krocích (šablona, otázka 7, cesta, skill) a nic neposílej na GitHub. Na konci pošli snímky stránky otázky a nového kroku cesty a seznam toho, co jsi vynechal nebo připsal do k-overeni.
```

## Po P8: co zůstalo na později

- Hlasy Platóna, Pyrrhóna a Epikúra na stránce otázky 7, až budou mít profil (věty jsou ověřené).
- Animace u šatů (posuvník předpokládaného světla nad vlastní kresbou) se skillem `atlas-komponenta`, až autor schválí text celku.
- Skill `atlas-cesta` uložit do účtu (návrh předán v P8); skill `atlas-osobnost` v účtu má ještě „s Prótagorou“, opravit při sjednocení skillů (P13).
- Stránky dalších velkých otázek vzniknou s jejich celky; do té doby je přehled `/otazky/` neodkazuje.

## P10: Revize celku 1 „Jak poznám, co je pravda?“

**Stav 1. 10. 2026: hotovo a schváleno.** Revize (`docs/revize/celek-1-2026-10-01.md`): verdikt po opravách, návrhy autor schválil kromě zkrácení Sókratovy stránky a připsal chybějící krok v kapitole 02 (Lachés). Opravy zapracované, celek 1 schválený a sloučený do hlavní větve; skill `atlas-cesta` doplněný o poučení z revize.

V Coworku v novém chatu projektu, s připojenou složkou Atlas a zapnutým Desktop Commanderem. Opus 5.5 · high.

```text
Pracuješ v repozitáři atlas na mém Macu (/Users/vojtechczempka/Atlas). Terminál máš přes Desktop Commander: pracuj přímo v repozitáři, ne v kopii. Pokračuj ve větvi celek-1.

Udělej revizi celku 1 „Jak poznám, co je pravda?“ skillem atlas-revize. Přečti CLAUDE.md, docs/styl.md, docs/podklady/celek-1-pravda.md, docs/podklady/k-overeni.md (oddíly P6–P8), docs/rozhodnuti.md (záznamy z 1. 10. 2026) a v docs/design.md oddíly Bloky, Cesta a Velká otázka.

Celek tvoří:
- Sókratův portrét (src/content/osobnosti/sokrates.mdx, kapitoly 01–05),
- profil Prótagora (src/content/osobnosti/protagoras.mdx),
- cesta 1 „Kdy mám dobrý důvod věřit?“ (src/content/cesty/kdy-mam-dobry-duvod-verit*, 7 kroků, bloky cesta1-* v src/content/bloky),
- stránka velké otázky 7 (src/content/otazky/jak-poznam-pravdu.mdx, adresa /otazka/jak-poznam-pravdu/),
- vstupy a návraty: Domů, přehled /otazky/, karty cest, Kam dál, Pokračuj a Můj deník.

Zvlášť zkontroluj:
1. Pravidlo 6 „Jména a podrobnosti střídmě“ v krocích 1–4 cesty 1 a v kapitole 01 Sókratova portrétu (zbylo z P7).
2. Odpovědi filozofů na žvýkačku na stránce otázky 7: jsou to věrné převody jejich myšlenek, poznal by se v nich každý z nich? Stačí Parmenidova část, která je nejkratší?
3. Spor Prótagorás × Sókratés v kroku 5: dostal Prótagorás opravdu nejsilnější verzi, nebo ho text táhne k porážce?
4. Opakování: neopakuje se zbytečně tentýž příklad nebo citát v portrétu, profilu, cestě a na stránce otázky (vítr, Delfy, obrana-21d, theaitetos-152a)?
5. Délka: Sókratova stránka má na telefonu asi 20 000 px, cesta 7 kroků. Kde by student přestal číst?

Postup podle skillu: projdi celek jako student na 390 a 1440 px ve světlém i tmavém režimu a jen klávesnicí (i přímé odkazy na kroky, obnovení stránky, Začít znovu, deník), pak pět perspektiv. Drobnosti oprav rovnou a commituj česky; zásahy do významu, příběhu nebo struktury jen navrhni s hotovým novým zněním. Záznam ulož do docs/revize/celek-1-<datum>.md (nejvýš deset nálezů).

Kontrola: celé npm test (testy v prohlížeči běží na portu 4322, spuštěné npm run dev jim nevadí).

Na konci mi napiš verdikt (připraveno ke schválení / po opravách / přepracovat), tři nejdůležitější nálezy a pošli snímky míst, kterých se nálezy týkají. Návrhy zatím nezapracovávej, počkej na moje rozhodnutí. Nic neposílej na GitHub a do hlavní větve nic neslučuj.
```

Po P10 rozhodne autor o návrzích z revize; po jejich zapracování schválení celku 1, sloučení `celek-1` do hlavní větve a další celek podle plánu etap F2.

## Po P10: co zůstalo na později

- Animace jen tam, kde nesou myšlenku (`atlas-komponenta`), teď když je text celku 1 schválený: u šatů posuvník předpokládaného světla nad vlastní kresbou, u Délia malá mapa ústupu, u soudu počítadlo „30 hlasů“. Zařadit podle chuti autora mezi celky.
- Hlasy Platóna, Pyrrhóna a Epikúra na stránce otázky 7, až budou mít profil (věty jsou ověřené). Epikúros přibude s celkem 2.
- Spor Platón × Diogenés zůstává v Sókratově portrétu (rozhodnutí autora); v profilu Diogena ho neopakovat, jen na něj odkázat.
- Skill `atlas-cesta` uložit do účtu (návrh po P10); `atlas-osobnost` sjednotit s kopií ve `skills/` při P13.
