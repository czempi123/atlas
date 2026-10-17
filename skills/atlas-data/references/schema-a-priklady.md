# Schéma dat s ukázkami ze skutečných záznamů

Závazné schéma je v `src/lib/schema.ts` (Zod). Tady je, co znamená každé pole, a ukázka ze skutečných dat. Všechna id: malá písmena bez diakritiky, číslice a pomlčky (`zenon-z-kitia`).

## Osoba (`src/data/lide.yaml`)

| Pole | Povinné | Co v něm je |
| --- | --- | --- |
| `id`, `jmeno` | ano | Jméno v závazné české podobě s délkami. |
| `jmeno2` | doporučené | 2. pád („Kleantha“) pro věty „Proč Kleantha…“, „život Kleantha“. |
| `zena` | u žen | `true`; mění tvary „žila“, „Kdo byla“. |
| `narozen`, `zemrel` | jedno z nich nebo `aktivni` | `{ rok, priblizne?, nejpozdeji?, nejdrive?, rozmezi? }` |
| `aktivni` | jen když chybí narození i úmrtí | `{ od, do?, priblizne? }`: doba činnosti. |
| `obdobi` | ano | 1–8 (`src/data/obdobi.yaml`). Neměnit. |
| `hloubka` | ano | Plán zpracování: `medailonek`, `profil`, `portret`. Neměnit; stránku dává až profil v MDX nebo `medailonek: true`. |
| `medailonek` | po vyplnění | `true` = data jsou úplná, osoba dostane stránku `/osobnost/<id>/`. |
| `smery` | když patřil ke škole | Id z `src/content/smery/` (`stoicismus`, `akademie`, `kynismus`…). |
| `otazky`, `linie` | volitelné | Velké otázky (1–10) a linie; při vyplňování medailonků neměnit. |
| `mista` | ano pro medailonek | Pobyty s rolí, viz níže. |
| `kdo`, `proc` | ano | Jedna věta každá, viz `kdo-a-proc.md`. |
| `atribut` | volitelné | `{ ikona, nazev, proc, zdroj }`; ikona jen z `docs/design/atributy-ikony.json`, pravidla v `docs/podklady/atributy.md`. |
| `obrazek` | ne | Obrázky jen se souhlasem autora (stahování). Při vyplňování dat nepřidávat. |
| `zdroje` | ano | Id pramenů, ze kterých je osoba jako celek (roky, kdo, proč). |

Hotový medailonek (Kleanthés, větev medailonky M0):

```yaml
- id: kleanthes
  jmeno: Kleanthés
  jmeno2: Kleantha
  narozen: { rok: -331, priblizne: true }
  zemrel: { rok: -232, priblizne: true }
  obdobi: 2
  hloubka: medailonek
  medailonek: true
  smery: [stoicismus]
  linie: [stoicismus]
  mista:
    - { misto: assos, role: narozeni, zdroj: britannica-cleanthes }
    - { misto: athenes, role: pusobeni, od: -263, do: -232, priblizne: true, zdroj: britannica-cleanthes }
  kdo: Stoik z Assu, Zénónův nástupce v čele školy.
  proc: Napsal Hymnus na Dia, báseň o rozumném řádu, který prostupuje svět.
  zdroje: [britannica-cleanthes, sep-stoicism]
```

### Roky: čtyři druhy nejistoty

```yaml
# přesně (Sókratés)
narozen: { rok: -469 }
# přibližně: student uvidí „asi 331–232 př. n. l.“ (Kleanthés)
narozen: { rok: -331, priblizne: true }
# prameny dávají rozpětí, rok je odhad uprostřed (Archytás: SEP „narozen 435–410, zemřel 360–350“)
narozen: { rok: -420, priblizne: true, rozmezi: [-435, -410] }
zemrel: { rok: -355, priblizne: true, rozmezi: [-360, -350] }
# jen horní mez: „nejpozději“ (Musonius Rufus: narozen nejpozději roku 30, zemřel před rokem 101)
narozen: { rok: 30, nejpozdeji: true }
zemrel: { rok: 101, nejpozdeji: true }
```

`nejdrive` = v tom roce ještě žil („zemřel po roce …“). `nejdrive` a `nejpozdeji` zároveň nejdou.

### Místa s rolí

| Role | Kdy | Rok |
| --- | --- | --- |
| `narozeni` | rodiště | `rok` jen když je stejný jako `narozen.rok` |
| `smrt` | místo úmrtí | `rok` jen když je stejný jako `zemrel.rok` |
| `pusobeni` | kde učil, vedl školu, psal, vládl | `od`/`do` |
| `studium` | kde se učil | `od`/`do` |
| `pobyt` | cesta, návštěva | `rok` nebo `od`/`do` |
| `exil` | vyhnanství | `od`/`do` |
| `tazeni` | válečné tažení, bitva | `rok` |

Ukázka (Platón: rodiště bez roku, opakovaný pobyt, působení s rozpětím):

```yaml
mista:
  - { misto: athenes, role: narozeni, zdroj: britannica-plato }
  - { misto: syrakusy, role: pobyt, rok: -387, priblizne: true, zdroj: platon-sedmy-list }
  - { misto: athenes, role: pusobeni, od: -387, do: -347, priblizne: true, zdroj: iep-academy }
  - { misto: syrakusy, role: pobyt, rok: -361, zdroj: sep-archytas }
  - { misto: athenes, role: smrt, rok: -347, zdroj: britannica-plato }
```

První pobyt s rokem (přednostně `pusobeni`) určuje odkaz do Mapy a času na medailonku („Athény kolem roku 263 př. n. l., kdy tam Kleanthés působil“). Pobyt bez roku je na mapě taky, ale odkaz si rok dopočítá ze života.

## Místo (`src/data/mista.yaml`)

```yaml
- { id: assos, nazev: Assos, dnes: "Behramkale, Turecko", souradnice: [26.34, 39.49] }
- { id: chaironeia, nazev: Chairóneia, dnes: "Cheronia, Řecko", souradnice: [22.841, 38.494], pleiades: "540701" }
- { id: lesbos, nazev: Lesbos, dnes: "Lesbos, Řecko", souradnice: [26.30, 39.20], oblast: true }
```

Souřadnice jsou `[délka, šířka]` (pozor, ne obráceně). Nové místo ber z Pleiad (`https://pleiades.stoa.org/places/<číslo>`) a číslo zapiš do `pleiades`. `dobovy` jen když se dobový název liší od `nazev`. Ostrov nebo krajinu označ `oblast: true`.

## Vztah (`src/data/vztahy.yaml`)

| Typ | Směr | Kdy |
| --- | --- | --- |
| `ucitel` | `od` = učitel, `k` = žák | Pramen mluví o učení, žáctví, nástupnictví ve škole. |
| `znali-se` | libovolný | Pramen popisuje setkání, přátelství, spolupráci. Současnost nestačí. |
| `vliv-textem` | `od` = ten, koho četli; `k` = čtenář | Navázal na jeho spisy, vykládal je, převzal myšlenku z knihy. |
| `polemika` | `od` = kritik, `k` = kritizovaný | Spor v textech nebo tváří v tvář. Spor lidí, kteří spolu žít nemohli, stránka sama zařadí jako „na dálku“. |

```yaml
- { od: zenon-z-kitia, k: kleanthes, typ: ucitel, zdroj: britannica-cleanthes }
- { od: platon, k: archytas, typ: znali-se, poznamka: "Archytás ho roku 361 př. n. l. vysvobodil ze Syrákús", zdroj: sep-archytas }
- { od: herakleitos, k: kleanthes, typ: vliv-textem, poznamka: "výklad Hérakleitovy knihy", zdroj: dl-ix-1 }
- { od: aristoteles, k: protagoras, typ: polemika, poznamka: "je člověk měřítkem všech věcí?", zdroj: aristoteles-metafyzika }
- { od: antisthenes, k: diogenes, typ: ucitel, tradovany: true, zdroj: iep-antisthenes }
```

- `tradovany: true`: vztah podává antická tradice a moderní prameny ho neberou jako jistý. Na stránce dostane čárkovanou šipku a slovo „vypráví se“.
- `poznamka`: malým písmenem, bez tečky, krátce; musí sedět na stránce obou lidí. U polemiky otázka, o kterou šlo; u setkání, co je spojuje.
- Jeden vztah mezi dvěma lidmi jednou. Vztah k osobě se stránkou změní i její Doba a lidé: projdi pak její stránku na snímku.

## Pramen (`src/data/zdroje.yaml › prameny`)

```yaml
- { id: britannica-cleanthes, druh: encyklopedie, nazev: "Cleanthes", dilo: Encyclopaedia Britannica, url: "https://www.britannica.com/biography/Cleanthes", overeno: 2026-09-29 }
- { id: sep-stoicism, druh: encyklopedie, nazev: "Stoicism", autor: "Dirk Baltzly", dilo: Stanford Encyclopedia of Philosophy, url: "https://plato.stanford.edu/entries/stoicism/", overeno: 2026-09-29 }
# antický pramen s poznámkou, co v něm stojí (zkráceno)
- { id: dl-vii-2, druh: pramen, nazev: "Životy filozofů VII, 2–4 (Zénón a Kratés)", autor: Diogenés Laertios, dilo: "Vitae philosophorum, řecky a angl. R. D. Hicks (PerseusDL)", url: "https://github.com/PerseusDL/…", overeno: 2026-10-15, poznamka: "Zénón po ztroskotání u knihkupce čte Xenofóntovy Vzpomínky, kolem jde Kratés: „jdi za ním“ (2–3). …" }
```

- `druh`: `encyklopedie` (SEP, IEP, Britannica), `pramen` (antický text: Diogenés Laertios, Platón…), `monografie`, `data`.
- `id`: `sep-<heslo>`, `iep-<heslo>`, `britannica-<heslo>`, `dl-<kniha>-<kapitola>`; podívej se, jestli pramen už nemá jiné id (`grep -n 'url: "…"' src/data/zdroje.yaml`).
- `overeno`: den, kdy jsi stránku skutečně otevřel. `poznamka`: co z pramene bereš. Když přidáváš údaj z pramene, který už v datech je, připiš do jeho poznámky datum a co jsi přečetl (tak to dělají ostatní záznamy).
