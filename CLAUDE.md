# Atlas myšlení: pravidla projektu

Interaktivní atlas filozofie pro středoškoláky (15–19 let), od antiky po současnost. Slouží ve třídě i k samostudiu doma. Kromě učiva má předávat lásku k filozofii, odvahu hledat vlastní odpovědi, poctivost k sobě a ohled na druhé. Páteří je západní filozofie s okny do islámské, židovské, indické a čínské tradice. Autor a pedagog: Vojtěch Czempka.

Než začneš pracovat, přečti si `docs/plan.md` (architektura a plán) a `docs/styl.md` (tón). Zásadní rozhodnutí jsou v `docs/rozhodnuti.md`; nové zapiš tamtéž.

## Jak píšeme pro studenty

- **Příběh před pojmem.** Každá osobnost i cesta začíná scénou ze skutečného života nebo silným myšlenkovým pokusem. Tradovaný příběh vyprávěj jako příběh: „Vypráví se, že…“. Vymyšlenou současnou situaci uveď „Představ si…“.
- **Piš přímo a živě.** Studentský text neobsahuje redakční poznámky, výhrady k vlastní práci, metodické popisky ani vysvětlování, proč je něco zpracované tak, jak je. Tvrzení formuluj tak, aby platilo samo o sobě; nejisté datum „kolem roku…“, sporný detail vynech.
- **Pochybnost patří filozofii, ne redakci.** Námitky, spory a otevřené otázky jsou obsah výuky a zůstávají. Pochybnosti o pramenech se řeší v podkladech (`docs/podklady/`), ne v textu pro studenty.
- **Nejdřív student, pak filozof.** Před výkladem vlastní pokus; odpověď a zpětná vazba se odkrývají až po něm.
- **Nejsilnější verze druhého.** Každý filozof i protivník dostane svůj nejlepší argument.
- **Příklady, které chytnou.** Skutečné příběhy filozofů, klasické myšlenkové pokusy a situace, které teenagery opravdu zajímají (přátelství, strach, láska, sociální sítě, rozhodování o budoucnosti). Ne úřední školní scénky.
- **Osobní rovina je dobrovolná.** Zpětná vazba hodnotí důvody, nikdy souhlas s filozofem. Názory se neznámkují.
- **Úkoly jako otázky:** „Co bys udělal?“, „Který důvod tě přesvědčuje?“, „Změní se tvá odpověď, když…?“

## České konvence

- Tykáme studentovi. Věty do 25 slov, odstavce do 4 vět.
- Řecká jména s délkami podle české tradice: Sókratés, Platón, Aristotelés, Epikúros, Diogenés, Hérakleitos, Parmenidés, Démokritos, Epiktétos. Závazná podoba každého jména je v datech osob (`src/data/lide.yaml`).
- Letopočty: „399 př. n. l.“, „121 n. l.“, rozpětí „469–399 př. n. l.“ (pomlčka, nezlomitelné mezery). Rok nula neexistuje.
- Uvozovky „takto“, citát s údajem autor, dílo, místo (Marcus Aurelius, Hovory k sobě VI, 30).

## Obsah a zdroje

- Historická tvrzení, citáty a vztahy mezi lidmi pocházejí z ověřených podkladů (skill `atlas-overeni`). Každý citát má v datech dílo, místo a překlad.
- Přímou řeč skutečných osob používáme jen jako citát z pramene. Scény můžeme vyprávět živě, ale bez vymyšlených výroků a myšlenek historických lidí.
- Vztah mezi lidmi má vždy typ: učitel a žák, osobně se znali, vliv přes texty, polemika.
- Učitelské a redakční podklady patří do `ucitel/` a `docs/`, nikdy do studentského obsahu.
- Obrázky jen s ověřenou licencí, zapsanou u obrázku.

## Technika (od fáze F1)

- Astro se statickým výstupem, TypeScript, interaktivní ostrovy ve Svelte, obsah v MDX, data v YAML se schématy.
- `npm run dev` spustí atlas lokálně, `npm run build` sestaví, `npm test` spustí kontroly dat a testy v Playwrightu.
- Písma a ikony lokálně, žádné externí závislosti za běhu. Postup studenta a deník v localStorage s exportem.
- Každou změnu UI ověř v prohlížeči na šířce 390 a 1440 px, ve světlém i tmavém režimu, a ovládáním klávesnicí.
- Web zatím běží jen lokálně.

## Workflow a skilly

Celek (velká otázka s cestou a potřebnými profily) prochází kroky: podklady (`atlas-overeni`) → psaní přímo do atlasu (`atlas-cesta`, `atlas-osobnost`, `atlas-data`) → revize (`atlas-revize`) → schválení autorem. Nová komponenta vzniká se skillem `atlas-komponenta`, nové období se plánuje se skillem `atlas-obdobi`. Zdrojová verze skillů je ve složce `skills/` (používají se uložené v účtu Claude); ty, které zatím chybí, vzniknou podle plánu. Když skill upravíš, uprav i jeho kopii ve `skills/`.

**Celek je hotový, když:** má jasnou otázku a úplný průchod, student dostane zpětnou vazbu a nový případ, obsah drží historicky i argumentačně, všechny odkazy a kroky fungují na telefonu i notebooku a text zní jako vyprávění, ne jako posudek.

## Git

Pracuj ve větvích, commity piš česky a stručně (co a proč). Do hlavní větve jde jen schválený celek. Nic neposílej na GitHub bez pokynu autora.

## Do atlasu nepatří

Žebříčky, série dní, body za názory, osobnostní testy, AI chat s filozofy (zatím), automaticky se měnící karusely, nekonečný feed.
