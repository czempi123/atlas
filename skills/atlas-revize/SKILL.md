---
name: atlas-revize
description: Revize obsahu a funkce Atlasu myšlení očima filozofa, historika, šestnáctiletého studenta, učitele a uživatele na telefonu. Použij VŽDY po dokončení celku (cesta, osobnost, směr, velká otázka, období) před schválením autorem, při souhrnné revizi období a když uživatel řekne „zreviduj“, „zkontroluj“, „co bys vytkl“, „funguje to?“. Drobné jednoznačné chyby rovnou opraví, zásadní nálezy seřadí podle dopadu a navrhne konkrétní opravu.
---

# Revize celku

Revize hledá to, co by studentovi vadilo nebo co by ho zavedlo: nepřesnost, slabou námitku, nudný vstup, nejasný úkol, rozbitý krok. Nehodnotí délku textu ani vkus, pokud nebrání učení.

## Postup

1. **Připrav si podklady:** zadání celku, podkladový list z `docs/podklady/`, `docs/styl.md` a samotný obsah (MDX a data). U hotového webu spusť `npm run build` a `npm test`.
2. **Projdi celek jako student.** Celý průchod od vstupu po návrat, včetně odboček do profilů a mapy. Zkus odpovědět špatně, přeskočit krok, vrátit se, obnovit stránku, otevřít krok přímým odkazem. Na hotovém webu na šířce 390 a 1440 px, ve světlém i tmavém režimu a klávesnicí; pořiď snímky obrazovek a prohlédni je.
3. **Projdi pět perspektiv** podle `references/kontrolni-seznam.md`: filozof, historik, student, učitel, rozhraní.
4. **Oprav rovnou**, co je drobné a jednoznačné: překlepy, konvence (jména, letopočty, uvozovky), redakční vsuvky ve studentském textu, rozbité odkazy. Zásahy do významu, příběhu nebo struktury jen navrhni.
5. **Zapiš nálezy** do `docs/revize/<id-celku>-<datum>.md` ve formátu níže, nejvýš deset nejdůležitějších. Studentský obsah nikdy nedoplňuj o poznámky z revize.
6. **Předej** v pár větách: verdikt (připraveno ke schválení / po opravách / přepracovat), tři nejdůležitější nálezy a co bylo ověřeno technicky.

## Formát nálezu

```markdown
### [blokující | důležité | drobné] Krátký název
- **Kde:** soubor a místo (krok, odstavec, komponenta)
- **Co je špatně:** jedna až dvě věty
- **Proč to vadí studentovi:** konkrétní důsledek
- **Oprava:** hotové nové znění nebo přesný zásah
```

- **Blokující:** věcná chyba, podvržený citát, nefunkční krok, zpětná vazba, která hodnotí názor, nebo text, který by student pochopil opačně.
- **Důležité:** slabá námitka, nudný nebo úřední vstup, nejasný úkol, chybějící zpětná vazba u volby, zploštělý filozof, problém na telefonu.
- **Drobné:** styl, délka, drobná nekonzistence.

## Zásady

- Hodnoť, co student skutečně udělá a pochopí, ne jak text zní autorovi.
- U každého filozofa se ptej: dostal svůj nejsilnější argument? Poznal by se v tom?
- Revize obsahu a technická kontrola nejsou totéž co vyzkoušení se studenty. Zda celek učí, ukáže až skutečný průchod studentů; revize jen připraví půdu.

## Kdy je hotovo

Blokující nálezy jsou opravené nebo předané autorovi s hotovým návrhem opravy, drobné chyby opravené, záznam revize uložený a verdikt sdělený.
