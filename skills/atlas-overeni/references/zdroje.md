# Zdroje pro atlas

Pořadí odpovídá spolehlivosti. Vždy otevři konkrétní text nebo heslo, ne jen výsledek vyhledávání.

## 1. Primární texty

- **Perseus Digital Library** (https://www.perseus.tufts.edu): řecké a latinské texty s anglickými překlady, včetně Diogena Laertia; standardní číslování (u Platóna Stephanovo, např. Obrana 21a).
  - Webové rozhraní Perseus a Scaife zakazují přístup robotům. Tytéž texty (řecky i anglicky, TEI se Stephanovým a Bekkerovým číslováním) jsou v repozitáři **PerseusDL/canonical-greekLit** na GitHubu (`data/tlg0059/` Platón, `tlg0004/tlg001` Diogenés Laertios, `tlg0086/tlg025` Metafyzika, `tlg0007` Plútarchos). Stáhni soubory mimo repozitář atlasu a místa vyhledej podle značek `milestone n="190e"`. Do `zdroje.yaml` dej odkaz na soubor na GitHubu.
  - Další ověřená místa: `tlg0086/tlg010` Etika Nikomachova, `tlg0007/tlg047` Plútarchův Alexandr, `tlg0074/tlg001` Arriános. Latinské texty jsou v **PerseusDL/canonical-latinLit** (`phi1017/phi015` Senekovy Dopisy, `phi0474` Cicero, `phi1351/phi005` Tacitovy Letopisy); Senekovy dialogy (O blaženém životě, O krátkosti života) tam nejsou, čti je v The Latin Library. Epikúrovy Vatikánské výroky jsou v **OpenGreekAndLatin/First1KGreek** (`tlg0537/tlg014`); Dopis Menoikeovi a Hlavní myšlenky u Diogena Laertia X, 122–154.
  - Stoikové (celek 3): `tlg0557/tlg001` Epiktétovy Rozpravy a `tlg0557/tlg002` Rukojeť (řecky H. Schenkl, anglicky G. Long, `perseus-eng3`), `tlg0562/tlg001` Marcus Aurelius (jen řecky), `tlg0062/tlg028` Lúkianos o Epiktétově lampě. Latinsky `phi1254/phi001` Gellius, `phi0474/phi054` Cicero O osudu, `phi0474/phi048` O nejvyšším dobru a zlu, `phi0474/phi049` Tuskulské hovory, `phi0550/phi001` Lucretius, `phi1348/abo022` Suetoniův Domitianus, `phi1351/phi001` Tacitův Agricola, `phi2331/phi004` Historia Augusta (Marcus). Órigenés Proti Kelsovi je ve First1KGreek (`tlg2042/tlg001`). Cassius Dio 67 a 72 v PerseusDL není; anglicky je na LacusCurtius. Soubory stahuj z `raw.githubusercontent.com`; rozhraní API GitHubu cloudový shell nepustí.
  - Platón a jeho kritici (celek 4): `tlg0059/tlg030` Ústava, `tlg024` Menón, `tlg009` Parmenidés, `tlg004` Faidón, `tlg036` Listy, `tlg031` Tímaios, `tlg007` Sofistés (řecky J. Burnet `perseus-grc2`, anglicky `perseus-eng2`); `tlg0086/tlg035` Aristotelova Politika; `tlg0007/tlg060` Plútarchův Dión; `tlg0010/tlg019` Isokratova Antidosis a `tlg009` Helena; `tlg0016/tlg001` Hérodotos; latinsky `phi0474/phi051` Cicero O stáří. Aristotelovy Kategorie v PerseusDL nejsou (anglicky E. M. Edghill na classics.mit.edu). Parmenidovy zlomky řecky i v Burnetově překladu jsou na lexundria.com. Seznam souborů přes API GitHubu nástroje nedostanou; cestu je třeba znát podle čísla TLG.
  - Co v PerseusDL není, bývá v **OpenGreekAndLatin/First1KGreek** (`data/tlg0086/tlg026` Aristotelova Meteorologika, Bekkerovo vydání z roku 1837, bez Bekkerova číslování: cituj knihu a kapitolu). Anglicky E. W. Webster v MIT Internet Classics Archive.
  - Aristotelés a Alexandr (celek 5): v PerseusDL `tlg0059/tlg022` Platónův Prótagorás, `tlg0545/tlg002` Ailiánovy Pestré příběhy (jen řecky), `tlg0099/tlg001` Strabón (`perseus-eng3` má knihy 6–14), `tlg0007/tlg033` Plútarchův Sulla, `tlg0007/tlg087` O Alexandrově štěstí nebo zdatnosti (`perseus-grc3`, `perseus-eng3`), `tlg0086/tlg038` Rétorika a `tlg0086/tlg009` Etika Eudémova; Arriános (`tlg0074/tlg001`) je tam jen řecky. Ve First1KGreek (`1st1K-grc1`) jsou Aristotelovy Kategorie (`tlg0086/tlg006`), Fyzika (`tlg031`), Zkoumání živočichů (`tlg014`), O částech živočichů (`tlg030`), První analytiky (`tlg001`, `1st1K-grc2`) a O duši (`tlg002`), všechny bez Bekkerova číslování: cituj knihu a kapitolu a číslo řádků ber ze SEP. Které edice dílo má, řekne soubor `__cts__.xml` ve složce díla.
- **Project Gutenberg** (https://www.gutenberg.org) a **Wikisource** (https://en.wikisource.org): starší volně dostupné anglické překlady (Jowett pro Platóna, Long pro Marca Aurelia a Epiktéta).
- **Předsókratici:** zlomky citovat podle Dielse a Kranze (např. Hérakleitos DK 22 B91).
- **České překlady:** u každého citátu zjisti konkrétní vydání a překladatele (např. Platónovy Spisy v překladu Františka Novotného). Není-li vhodný překlad dostupný, připrav vlastní převod a označ ho jako vlastní.

## 2. Odborná referenční díla

- **Stanford Encyclopedia of Philosophy** (https://plato.stanford.edu): první volba pro výklad myšlenek a životopisná data.
- **Internet Encyclopedia of Philosophy** (https://iep.utm.edu): přehledná hesla, dobrá pro méně známé osobnosti. SEP nemá heslo o kynicích ani o Diogenovi ze Sinópy; tam slouží IEP a Routledge Encyclopedia of Philosophy.
- Stránky SEP, IEP a Britanniky čte nástroj webového čtení přes pomocný model. Žádej doslovné věty v uvozovkách a čísla, ptej se na jednu věc po druhé a do podkladů napiš, že jsi stránku sám neviděl. Cloudový shell `plato.stanford.edu` nepustí.
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
  - Další otevřené sbírky, které nástroje dostanou (celek 4): National Gallery of Art ve Washingtonu (stránka díla říká „free and in the public domain“), Statens Museum for Kunst v Kodani (`api.smk.dk/api/v1/art/search/?keys=…`; má i sádrové odlitky antických bust), Art Institute of Chicago (`api.artic.edu/api/v1/artworks/search?q=…`, pole `is_public_domain`) a Cleveland Museum of Art (`openaccess-api.clevelandart.org`). Hledání v API Met občas vrací chybu 410; pomůže jiný dotaz.
  - Soubory z těchto sbírek stahuj přes IIIF rovnou v cílové velikosti (`…/full/!1280,1280/0/default.jpg`; adresu dá u SMK pole `image_iiif_id`, u National Gallery odkaz ke stažení na stránce díla). Větší výřez k prohlédnutí nápisů: `…/pct:x,y,š,v/!1600,1600/0/default.jpg`. U SMK je `acquisition_date` rok získání do sbírky, ne rok vzniku: u odlitku ho do popisku nepiš jako rok odlitku.
  - Celek 5: v API Met jde hledat i přes `/public/collection/v1/search?q=…&hasImages=true` (vrací jen čísla předmětů; na každý se zeptej zvlášť). SMK má i odlitek Aristotelovy hlavy (KAS825). Antické zobrazení Aristotela s Alexandrem není; středověké je na slonovinových skříňkách v Met (17.190.173) a ve Walters (71.196).
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

| „Platón je mi přítel, ale pravda větší“ (Aristotelés) | Aristotelés Platóna nejmenuje: ideje zavedli „přátelé“ a „obojí je nám milé, ale je svatou povinností dát přednost pravdě“ (Etika Nikomachova 1096a16–17); latinské rčení je středověké | Citát z Etiky Nikomachovy 1096a a věta, že z něj rčení vzniklo |
| Nad vchodem Akademie stálo „Ať nevstoupí nikdo neznalý geometrie“ | Doklady jsou až z pozdní antiky (ověřeno u komentátorů 6. století n. l.); H. D. Saffrey nápis nazval legendárním | „O mnoho století později se vyprávělo, že…“ |
| Platón se původně jmenoval Aristoklés | Tvrdí to až Alexandros Polyhistór (1. století př. n. l.) u Diogena Laertia III, 4; Platón bylo běžné athénské jméno | Vynechat, nebo „Vypráví se, že…“ |
| Jeskyně: filozof se osvobodí, uvidí pravdu a vrátí se probudit ostatní, kteří ho zabijí | Vězni jsou „podobní nám“; osvobodí ho někdo jiný a násilím; venku vidí nejdřív zase stíny; vrací se, protože musí; zabili by toho, kdo osvobozuje, „kdyby mohli“; a Sókratés dodává „bůh ví, jestli je to pravda“ (Ústava 514a–520e) | Kroky pramene; „Platón nechává Sókrata vyprávět…“ |
| Gýgés našel prsten neviditelnosti; vypráví to Sókratés | Vypráví Glaukón a sám tomu nevěří (Ústava 358c); text má „předek Lýda Gýga“ (359d); Hérodotův Gýgés prsten nemá | „pastýř“, „Gýgův prsten“, „vypráví Glaukón“ |
| Sedmý list jako Platónova vlastní zpověď | Pravost je sporná a novější bádání se od ní odklání | „V dopise, který se dochoval pod Platónovým jménem, stojí…“ |
Seznam doplňuj, kdykoli při ověřování narazíš na další případ.
| „Jsme to, co opakovaně děláme. Dokonalost není čin, ale zvyk.“ (Aristotelés) | Věta Willa Duranta z knihy The Story of Philosophy (1926), kterou shrnuje Etiku Nikomachovu | Citát z Etiky Nikomachovy 1103a32–b2: stavitelem se člověk stává stavěním |
| Návyk vznikne za 21 dní | Číslo je z knihy plastického chirurga M. Maltze (1960) o zvykání na novou tvář; ve studii P. Lally a kol. (2010) to trvalo 18 až 254 dní, medián 66 | Studie z roku 2010 s celým rozptylem, ne s jedním číslem |
| Aristotelův „zlatý střed“ znamená od všeho trochu | Aristotelés mluví o „středu vzhledem k nám“, který není pro všechny stejný (Etika Nikomachova 1106a29–b7); některé věci střed nemají vůbec (1107a8–17) | „střed“, bez „zlatý“; Milón a začátečník |
| „Kořeny vzdělání jsou hořké, ovoce sladké“ (Aristotelés) | Tradovaný výrok u Diogena Laertia V, 18; Afthonios ho ve 4. století n. l. připisuje Isokratovi | „Vypráví se, že říkal…“, nebo vynechat |
| Aristotelés učil Alexandra etice | Plútarchos (asi 450 let poté) píše „zdá se“, že Alexandr přijal nauku o povaze a o obci (Alexandr 7); podle SEP se o výuce ví málo a trvala dva nebo tři roky | „Co přesně ho učil, nevíme.“ |
