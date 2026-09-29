# Atlas myšlení

Interaktivní český atlas filozofie pro střední školy. Samostatná HTML aplikace, mapa antického Středomoří, životní osy, profily, společné výklady a tematické cesty. Světlé i tmavé černobílé rozhraní.

## Spuštění

Otevři `atlas-antika.html` v prohlížeči. Není potřeba sestavení ani instalace závislostí. Odpovědi studentů zůstávají pouze v otevřeném dokumentu a po obnovení mizí.

Volitelně lze ze složky projektu spustit `python3 -m http.server 8000` a otevřít `http://localhost:8000/atlas-antika.html`.

## Obsah repozitáře

- `atlas-antika.html` — současná aplikace se všemi vloženými styly, skripty a obrazovými podklady.
- `atlas-harmonogram-rozsirovani-a-prompty.md` — aktuální stav a pořadí další práce.
- `atlas-mysleni-koncepce-a-prompty.md` — záměr a výchozí koncepce.
- `Plány hodin/` — všechny dosavadní scénáře, plány, interakční zadání, mapa učiva a revize.
- `skills/` — přesné kopie pěti projektových skillů včetně referencí a přidružených souborů. Nejsou to závislosti aplikace; jejich pouhá přítomnost neinstaluje plugin.
- `overeni/B1-R4-2026-09-29/` — archiv skutečně provedených technických kontrol, jejich původních skriptů a čtyř prohlédnutých snímků.
- `docs/import-2026-09-29.json` — kontrolní součty importovaných projektových souborů.
- `AGENTS.md` — pravidla práce s projektem pro další vývoj.

## Stav při importu 29. 9. 2026

Existují cesty „Co mám ve svých rukou?“, „Kolik je dost?“ a B1 „Kdy mám dobrý důvod věřit?“. B1 je zrevidováno. Dalším obsahovým krokem je R1 pro B4 — Předsókratici; B4 zde nebyl zahájen. Doložené zkoušení B1 se studenty zatím chybí.

Import zachycuje aktuální znění všech 14 dokumentů projektu, včetně HTML v11 a harmonogramu v5, pět skillů a dostupné podklady technické revize. Dřívější verze dokumentů nejsou rekonstruovány jako fiktivní git historie. Původní soubory zůstávají zachované.

## Další práce

Hlavní pracovní repozitář po importu: https://github.com/czempi123/atlas. Při další práci vycházet z aktuálního obsahu tohoto repozitáře. Na začátku dalšího úkolu načíst aktuální větev a harmonogram; neobnovovat automaticky starší kopii z chatu. Obsahové změny vést přes scénář → interakce → implementace → revize. Každou ucelenou změnu uložit commitem s uvedením skutečně provedeného ověření. Učitelské dokumenty zůstávají mimo studentskou aplikaci.

Automatická obousměrná synchronizace s dřívějšími kopiemi není nastavená. GitHub Pages ani jiné veřejné nasazení není součástí importu.

Licence projektu nebyla dosud zvolena. Licenční a zdrojové informace vložených cizích podkladů zůstávají zachované v původních souborech.
