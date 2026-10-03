# Zdroje pro atlas

Pořadí odpovídá spolehlivosti. Vždy otevři konkrétní text nebo heslo, ne jen výsledek vyhledávání.

## 1. Primární texty

- **Perseus Digital Library** (https://www.perseus.tufts.edu): řecké a latinské texty s anglickými překlady, včetně Diogena Laertia; standardní číslování (u Platóna Stephanovo, např. Obrana 21a).
  - Webové rozhraní Perseus a Scaife zakazují přístup robotům. Tytéž texty (řecky i anglicky, TEI se Stephanovým a Bekkerovým číslováním) jsou v repozitáři **PerseusDL/canonical-greekLit** na GitHubu (`data/tlg0059/` Platón, `tlg0004/tlg001` Diogenés Laertios, `tlg0086/tlg025` Metafyzika, `tlg0007` Plútarchos). Stáhni soubory mimo repozitář atlasu a místa vyhledej podle značek `milestone n="190e"`. Do `zdroje.yaml` dej odkaz na soubor na GitHubu.
  - Další ověřená místa: `tlg0086/tlg010` Etika Nikomachova, `tlg0007/tlg047` Plútarchův Alexandr, `tlg0074/tlg001` Arriános. Latinské texty jsou v **PerseusDL/canonical-latinLit** (`phi1017/phi015` Senekovy Dopisy, `phi0474` Cicero, `phi1351/phi005` Tacitovy Letopisy); Senekovy dialogy (O blaženém životě, O krátkosti života) tam nejsou, čti je v The Latin Library. Epikúrovy Vatikánské výroky jsou v **OpenGreekAndLatin/First1KGreek** (`tlg0537/tlg014`); Dopis Menoikeovi a Hlavní myšlenky u Diogena Laertia X, 122–154.
  - Stoikové (celek 3): `tlg0557/tlg001` Epiktétovy Rozpravy a `tlg0557/tlg002` Rukojeť (řecky H. Schenkl, anglicky G. Long, `perseus-eng3`), `tlg0562/tlg001` Marcus Aurelius (jen řecky), `tlg0062/tlg028` Lúkianos o Epiktétově lampě. Latinsky `phi1254/phi001` Gellius, `phi0474/phi054` Cicero O osudu, `phi0474/phi048` O nejvyšším dobru a zlu, `phi0474/phi049` Tuskulské hovory, `phi0550/phi001` Lucretius, `phi1348/abo022` Suetoniův Domitianus, `phi1351/phi001` Tacitův Agricola, `phi2331/phi004` Historia Augusta (Marcus). Órigenés Proti Kelsovi je ve First1KGreek (`tlg2042/tlg001`). Cassius Dio 67 a 72 v PerseusDL není; anglicky je na LacusCurtius. Soubory stahuj z `raw.githubusercontent.com`; rozhraní API GitHubu cloudový shell nepustí.
- **Project Gutenberg** (https://www.gutenberg.org) a **Wikisource** (https://en.wikisource.org): starší volně dostupné anglické překlady (Jowett pro Platóna, Long pro Marca Aurelia a Epiktéta).
- **Předsókratici:** zlomky citovat podle Dielse a Kranze (např. Hérakleitos DK 22 B91).
- **České překlady:** u každého citátu zjisti konkrétní vydání a překladatele (např. Platónovy Spisy v překladu Františka Novotného). Není-li vhodný překlad dostupný, připrav vlastní převod a označ ho jako vlastní.

## 2. Odborná referenční díla

- **Stanford Encyclopedia of Philosophy** (https://plato.stanford.edu): první volba pro výklad myšlenek a životopisná data.
- **Internet Encyclopedia of Philosophy** (https://iep.utm.edu): přehledná hesla, dobrá pro méně známé osobnosti. SEP nemá heslo o kynicích ani o Diogenovi ze Sinópy; tam slouží IEP a Routledge Encyclopedia of Philosophy.
- **Anekdoty u Diogena Laertia** (hlavně kniha VI) jsou sbírky průpovídek z různých pramenů: každou podávej jako tradovanou („Vypráví se, že…“) a u shrnutí drž, co pramen opravdu říká (kdo, kde, jakými slovy).
- **Encyklopedie antiky** (Academia, 1973) a odborné české monografie, pokud jsou k dispozici.

## 3. Místa a mapy

- **Pleiades** (https://pleiades.stoa.org): antická místa se souřadnicemi a dobovými názvy; ID z Pleiad zapisuj do dat míst.
- Pro pozdější období: Wikidata (souřadnice), vždy ověřit proti odbornému zdroji.

## 4. Obrázky

- **Wikimedia Commons** (https://commons.wikimedia.org): u každého obrázku zapiš autora fotografie, instituci, inventární číslo, licenci a odkaz.
  - Commons a upload.wikimedia.org nástrojům nevydají stránku ani soubor a obcházet to nesmíš. Najdi kandidáta, zapiš údaje do podkladového listu jako neověřené a požádej autora, ať licenci potvrdí na Commons a soubor uloží do `public/obrazky/`. Do `obrazky` v `zdroje.yaml` se zapisuje až potom (test kontroluje, že soubor existuje).
  - U licencí CC BY a CC BY-SA musí být autor a licence vidět na stránce, kde se obrázek ukazuje (v atlasu v Pramenech).
- **Muzea s otevřeným přístupem** mají přednost, protože licenci potvrzuje přímo instituce. The Metropolitan Museum of Art (https://www.metmuseum.org) vydává díla ve veřejné doméně jako Open Access (CC0): ověř na stránce předmětu („Public Domain“) a v API `collectionapi.metmuseum.org/public/collection/v1/objects/<id>` (`isPublicDomain: true`, `primaryImage`); hledání je na `/public/collection/v1.1/search`. Soubory z `images.metmuseum.org` nástroje dostanou. Walters Art Museum (https://art.thewalters.org) má také CC0, ale soubor nástrojům nevydá; pak platí postup jako u Commons. Rozhraní API muzeí (Met, Art Institute of Chicago `api.artic.edu`, Cleveland `openaccess-api.clevelandart.org`, Rijksmuseum `data.rijksmuseum.nl`) čti webovým čtením; cloudový shell je nepustí.
  - Soubor stahuj až po výslovném souhlasu autora (název souboru, zdroj, velikost). Originál ulož mimo repozitář, do `public/obrazky/` dej kopii zmenšenou na delší stranu 1280 px (`sips -Z 1280`).
  - Kdo nemá spolehlivou antickou podobiznu (Diogenés, Prótagorás), dostane buď minci s atributem, nebo novověké vyobrazení; popisek pak řekne, čí představa to je („jak si ho představila renesance“).

## 5. Rozcestníky

- Wikipedie (česká i anglická) jen k nalezení lepších zdrojů. Nikdy jako jediný zdroj tvrzení.

## Známé podvržené nebo zkreslené citáty

| Rozšířená podoba | Skutečnost | Co použít |
| --- | --- | --- |
| „Vím, že nic nevím“ (Sókratés) | Ustálená zkratka; v Platónově Obraně 21d zní myšlenka jinak | Parafráze Obrany 21d: nevím, a ani si nemyslím, že vím |
| „Panta rhei“ (Hérakleitos) | Heslo v Hérakleitových zlomcích není, připsala mu ho až pozdější tradice | Zlomky o řece, např. DK 22 B12 a B91 |
| „Nesouhlasím s tím, co říkáte, ale do smrti budu hájit vaše právo to říkat“ (Voltaire) | Autorkou je jeho životopiska Evelyn Beatrice Hall (1906) | Připsat Hallové jako shrnutí Voltairova postoje |
| „Hledám poctivého člověka“ (Diogenés) | Řecky jen ἄνθρωπον ζητῶ, „hledám člověka“ (Diogenés Laertios VI, 41); „poctivého“ je novější přídavek | „Hledám člověka.“ |
| Diogenés bydlel v sudu | Pramen má πίθος, velkou hliněnou nádobu na zásoby (Diogenés Laertios VI, 23); dřevěný sud je až novověká představa | „velká hliněná nádoba“ |
| Epikurejec je požitkář | Epikúros slastí myslí nemít bolest v těle a zmatek v duši a pověst požitkáře sám odmítá (Dopis Menoikeovi 131) | Citát z Dopisu Menoikeovi 131; „chléb a voda“ |
| Stoik potlačuje city, „stoický klid“ znamená nic necítit | Epiktétos: „Nemám být bez citu jako socha“ (Rozpravy III, 2, 4); i moudrý se lekne a zbledne (Gellius XIX, 1, 14–21) | Citát z Rozprav III, 2, 4 |
| Epiktétovi zlomil nohu jeho pán Epafroditos | Příběh vypráví až Kelsos (asi 178) u Órigena (Proti Kelsovi VII, 53) a pána nejmenuje; Suda uvádí revma, Simplikios chromost od mládí | „Vypráví se, že…“, bez jména pána; doloženě jen kulhání (Rozpravy I, 16, 20) |
| Marcus Aurelius psal Hovory v noci ve stanu u Dunaje | Doložené jsou jen místní údaje „u Kvádů na Granui“ a „v Carnuntu“; o noci prameny mlčí | „na tažení u Dunaje“ |
| Marcus spálil Cassiovy dopisy nepřečtené | Cassius Dio 72, 28 (anglicky): zničil nepřečtené papíry nalezené v truhlách | „dal zničit nepřečtené“ |

Seznam doplňuj, kdykoli při ověřování narazíš na další případ.
