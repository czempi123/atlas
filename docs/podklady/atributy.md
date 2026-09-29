# Návrh atributů k schválení

29. 9. 2026 · P2. Atributy pro profily a portréty období 1 a 2, které v tabulce v `docs/design.md` chybějí. Do dat zatím nejdou; kontrola atributů je vede jako čekající (`src/lib/cekajici.ts`). Po schválení se atribut zapíše do `src/data/lide.yaml`, ikona se nakreslí do `docs/design/atributy-ikony.json` (tah, mřížka 24 × 24) a osoba se smaže ze seznamu čekajících.

Každý návrh je jedna věc z příběhu, kterou lze nakreslit jednou čarou a vysvětlit jednou větou. Tvrzení ve větě „Proč?“ mají pramen; tradované příběhy začínají „Vypráví se, že…“.

| Osobnost | Atribut | Proč (věta pro studenty) | Pramen | Ikona |
| --- | --- | --- | --- | --- |
| Thalés | studna | Vypráví se, že se tak zahleděl do hvězd, že spadl do studny. | Platón, Theaitétos 174a (IEP Thales) | kruhový otvor se dvěma kameny roubení a hvězdou nad ním |
| Pýthagorás | štěně | Vypráví se, že v kňučení bitého štěněte poznal hlas zemřelého přítele. Věřil, že duše přechází z těla do těla. | Xenofanés DK 21 B7 (SEP Pythagoras) | sedící štěně z profilu |
| Hérakleitos | řeka | Do téže řeky nelze vstoupit dvakrát. | DK 22 B91 (SEP Heraclitus) | tři vlnovky |
| Parmenidés | brána | Ve své básni projíždí bránou, za níž mu bohyně ukáže cestu pravdy. | DK 28 B1 (SEP Parmenides, ověřit místo) | dvoukřídlá brána s pootevřeným křídlem |
| Démokritos | zrnka | Všechno se skládá z drobných nedělitelných částic a prázdna mezi nimi. | SEP Democritus | shluk teček různé velikosti |
| Prótagorás | měřítko | Člověk je měřítkem všech věcí. | DK 80 B1 (IEP Protagoras) | pravítko s ryskami |
| Zénón z Eleje | želva | Tvrdil, že rychlý Achilleus nikdy nedohoní pomalou želvu. | Aristotelés, Fyzika VI, 9 (SEP Zeno of Elea) | želva z profilu |
| Zénón z Kitia | sloupoví | Učil v malovaném sloupoví, Stoa Poikilé; podle něj mají stoikové jméno. | Britannica, SEP Stoicism | tři sloupy pod kladím |
| Chrýsippos | válec | Svobodu vysvětloval na válci: někdo ho postrčí, ale jak se kutálí, záleží na jeho tvaru. | Cicero, O osudu 42–43 (ověřit) | válec v perspektivě se šipkou pohybu |
| Pyrrhón | prasátko | Vypráví se, že za bouře na lodi ukázal na prasátko, které klidně žralo: takový klid má mít moudrý. | Diogenés Laertios IX, 68 (ověřit) | prasátko z profilu |
| Lucretius | zrcadlo | Čas před naším narozením je zrcadlo času po smrti; ten první nás neděsí. | Lucretius, O přírodě III, 972–977 (ověřit) | ruční zrcadlo |
| Cicero | řečnická tribuna | Byl největší římský řečník; filozofii psal latinsky, když ho vytlačili z politiky. | IEP Cicero | pult tribuny se svitkem |
| Hypatia | astroláb | Učila astronomii a matematiku; její žák Synésios psal o astrolábu. | BEA Hypatia; Synésios, O daru astrolábu (ověřit) | kruh se stupnicí a otočnou alidádou |
| Plótínos | prázdný rám | Odmítl se nechat portrétovat: tělo pro něj bylo jen stín duše. | Porfyrios, Život Plótínův 1 (ověřit) | obdélný rám bez obrazu |

## Poznámky

- **Kolize s tabulkou v design.md:** svitek už má Isokratés, proto u Cicerona tribuna. Démokritos a Lucretius se nesmějí plést: Démokritos dostává zrnka, Lucretius zrcadlo.
- **Návrhy „ověřit“** stojí na pramenu, který znám, ale při P2 jsem ho neotevřel. Než atribut půjde do dat, projde skillem `atlas-overeni`.
- **Portréty a profily dalších období** (Augustin, Descartes, Kant… z tabulky v design.md už atribut mají) doplním spolu s jejich daty, až se budou zakládat v P9 a plánovat skillem `atlas-obdobi`.
