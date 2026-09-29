# Šablona podkladového listu

Soubor: `docs/podklady/<id-celku>.md`. Podkladový list je pracovní dokument pro autora a pro psaní; do studentského rozhraní se nic z něj nekopíruje kromě ověřených formulací.

~~~markdown
# Podklady: <název celku>

Ověřeno <datum>. Celek: <velká otázka / osobnost / směr>.

## Nejsilnější příběhy

1. <Příběh v 2–3 větách> — typ: tradovaný / doložený — zdroj: <dílo, místo> — doporučená formulace: „…“
2. …

## Tvrzení

| # | Tvrzení | Typ | Zdroj a místo | Doporučená formulace pro studenty |
| --- | --- | --- | --- | --- |
| 1 | Sókratés byl odsouzen 399 př. n. l. | doložený fakt | SEP „Socrates“ (D. Nails), oddíl o procesu | „Roku 399 př. n. l. ho athénský soud odsoudil k smrti.“ |

## Citáty

| # | Znění v atlasu | Autor, dílo, místo | Překlad | Poznámka |
| --- | --- | --- | --- | --- |
| 1 | „…“ | Marcus Aurelius, Hovory k sobě VI, 30 | vlastní převod podle G. Longa | |

## Návrh dat

```yaml
# lide.yaml
- id: …
  jmeno: …
  narozen: { rok: …, priblizne: true }
  zemrel: { rok: … }
  mista:
    - { misto: …, role: narozeni }
# vztahy.yaml
- { od: …, k: …, typ: ucitel, zdroj: … }
```

## Obrázky

| Soubor | Co zobrazuje | Autor / instituce | Licence | Odkaz |
| --- | --- | --- | --- | --- |

## Rozpory a rozhodnutí

- <Kde se zdroje rozcházejí, obě verze, doporučení a důvod.>

## Otevřené otázky pro autora

- …
~~~
