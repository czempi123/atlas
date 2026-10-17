# Podklady vlny medailonků

Každá vlna má soubor `docs/podklady/medailonky-vlna-<n>.md`. Zapisuje se do něj, co se v datech změnilo a z čeho; autor z něj pozná, co schválit, a revize z něj pozná, co ověřit. Studentský text tu není, jen data a důvody.

## Šablona

```markdown
# Medailonky, vlna <n>

Větev `medailonky`, krok M<n>. Osoby: <jména>. Inventura před vlnou: `Claude outputs/medailonky/inventura.md` (<datum>).

## Přehled

| Osoba | Co se změnilo | Nové prameny | medailonek: true |
| --- | --- | --- | --- |
| Antisthenés | místo narození, vztah k Sókratovi zpřesněn, proč přepsáno | — | ano |
| … | … | … | ne: spor o rok narození (níže) |

## <Jméno> (`<id>`)

- **Roky:** co platí a podle čeho (pramen, místo v pramenu). Přibližné a proč.
- **Místa:** nová nebo opravená, s rolí a pramenem.
- **Směr:** přidán / nemá (nepatřil ke škole).
- **Vztahy:** nové nebo opravené, typ a pramen; tradovaný a proč.
- **Kdo / proč:** staré a nové znění, pramen tvrzení.
- **Atribut:** přidán (ikona, pramen) / ne (proč).
- **Otevřené:** co se ověřit nepodařilo, co rozhoduje autor. Jedna otázka = jeden řádek s doporučením.

## Pro autora

Řádky k rozhodnutí, každý s doporučením. Prázdný řádek znamená souhlas s doporučením.

- <otázka> Doporučení: <…>. Odpověď:
```

## Zásady

- Piš jen to, co se změnilo, a pramen s místem (heslo SEP, oddíl; Diogenés Laertios, kniha, paragraf).
- Spor zapiš oběma verzemi a doporuč, kterou atlas použije (jako `atlas-overeni`).
- Když jsi něco nemohl otevřít, napiš to; ověření nepředstírej.
- Vztah k člověku, který v datech není, zapiš sem do „Pro autora“ (nové osoby přidává až autor).
