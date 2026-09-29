# Atlas myšlení

Interaktivní atlas filozofie pro střední školy. Od Thaléta, který spadl do studny, protože se díval na hvězdy, až po filozofy dneška.

Atlas vzniká jako závěrečná práce pedagogického minima a jako pomůcka, kterou si studenti mohou projít ve třídě i doma. Nechce jen předat učivo. Chce ukázat, že lidé před námi řešili stejné otázky jako my: čemu věřit, co je v mé moci, kolik je dost, jak žít s druhými. A dát studentovi prostor, aby si na ně začal odpovídat sám.

## Co v atlasu student najde

- **Mapu a čas.** Posuvníkem roku projíždí dějiny; na mapě vidí, kdo právě žije, a pod ní celé životy filozofů. Na první pohled pozná, kdo s kým žil, kdo se od koho učil a kolik let je od sebe dělí.
- **Lidi a jejich příběhy.** Sókratés, který nic nenapsal a přesto změnil filozofii. Epiktétos, otrok, který učil svobodě. Marcus Aurelius, císař, který si psal poznámky sám pro sebe.
- **Velké otázky.** Každá otázka je rozhovor napříč staletími: nejdřív odpovídá student, potom filozofové.
- **Cesty.** Dvacetiminutové interaktivní průchody: příběh, vlastní pokus, setkání s filozofem, silná námitka, nový případ a pozdější návrat.
- **Můj deník.** Soukromé místo pro vlastní stanoviska. Nikdo je nehodnotí; student v nich postupně vidí svou vlastní filozofii.

## Stav

Projekt právě prochází restartem. Dosavadní prototyp (jeden soubor HTML, antika) je v `docs/archiv/` jako verze 9 a dá se otevřít přímo v prohlížeči. Nová verze vzniká jako statický web v [Astru](https://astro.build) podle plánu v [`docs/plan.md`](docs/plan.md).

| Fáze | Obsah | Stav |
| --- | --- | --- |
| F0 Základ | Archiv, pravidla projektu, průvodce stylem, první skilly, architektura celé filozofie | probíhá |
| F1 Design a kostra | Vizuální návrh, web v Astru s daty prototypu | čeká |
| F2 Vertikální řez antiky | Mapa a čas v2, portréty, tři cesty, deník, zkoušení se studenty | čeká |

## Spuštění

Zatím: otevři `docs/archiv/atlas-antika.html` v prohlížeči.

Od fáze F1 (potřebuješ [Node.js](https://nodejs.org) 22 nebo novější):

```bash
npm install
npm run dev     # atlas poběží na http://localhost:4321
```

Web zatím běží jen lokálně; zveřejnění na GitHub Pages přijde později.

## Uspořádání repozitáře

```text
CLAUDE.md          pravidla projektu (pro lidi i pro Clauda)
docs/plan.md       kritika prototypu, architektura a plán vývoje
docs/styl.md       průvodce tónem: jak v atlasu psát
docs/rozhodnuti.md zásadní rozhodnutí a jejich důvody
docs/archiv/       prototyp v9 a jeho plánovací dokumenty
skills/            postupy pro opakovanou práci (ověřování, revize…)
```

Od fáze F1 přibude `src/` s obsahem, daty a komponentami a `ucitel/` s podklady pro hodiny.

## Jak se na atlasu pracuje

Každý obsahový celek projde čtyřmi kroky: podklady s ověřenými zdroji → psaní přímo do atlasu → revize → schválení autorem. Podrobnosti jsou v `CLAUDE.md` a v plánu.

## Licence

- **Texty, data a obrazová úprava:** [CC BY-NC-SA 4.0](LICENSE-OBSAH.md). Atlas smíš používat, sdílet a upravovat pro výuku a další nekomerční účely, pokud uvedeš autora a upravenou verzi sdílíš pod stejnou licencí. Prodávat ho nelze.
- **Zdrojový kód:** [MIT](LICENSE).
- **Převzaté obrázky** mají vlastní licence, uvedené u každého obrázku.

Autor: Vojtěch Czempka
