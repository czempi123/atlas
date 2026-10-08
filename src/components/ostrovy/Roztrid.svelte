<script lang="ts">
  // Roztřiď: student třídí karty do košů. Kartu navrchu přetáhne do koše (myší i prstem), nebo u koše
  // zvolí „Dát sem“ (klepnutím i klávesnicí); kartu z koše vrátí klepnutím. Smí přidat vlastní karty.
  // Po roztřídění dostane ke kartám zpětnou vazbu a srovnání; nic se neboduje a žádný koš není „správně“.
  // Použití v MDX (obsah v src/content/bloky/cesta6-tri-kose.yaml):
  // <Roztrid id="cesta6-tri-kose" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import {
    kartyRoztrid, hromadkaRoztrid, kartyVKosi, idVlastniKarty, textVlastniKarty, zpetnaKarty, zapisRoztrid, platnyStavRoztrid,
    odstavce, radek, DELKA_KARTY, type KartaRoztrid, type StavRoztrid,
  } from '../../lib/bloky';
  import type { TBlokRoztrid } from '../../lib/bloky-schema';
  import { odkryti } from '../../lib/pohyb';
  import BlokHlava from './BlokHlava.svelte';
  import BlokFilozof from './BlokFilozof.svelte';
  import BlokDal from './BlokDal.svelte';
  import type { ClovekBloku, Dal } from './bloky-typy';

  interface Props {
    id: string;
    blok: Omit<TBlokRoztrid, 'zdroje' | 'kOvereni' | 'dal'>;
    /** filozof ze srovnání (jméno, období a atribut z dat) */
    filozof?: ClovekBloku;
    odkaz: string;
    /** Kam dál po roztřídění */
    dal?: Dal;
  }
  let { id, blok, filozof, odkaz, dal }: Props = $props();

  let umisteni = $state<Record<string, string>>({});
  let vlastni = $state<StavRoztrid['vlastni']>([]);
  let hotovo = $state(false);
  /** karta, kterou student vzal zpět z koše: jde navrch před ostatní */
  let vybrana = $state<string | null>(null);
  let nova = $state('');
  let hlaseni = $state('');
  let oblast = $state<HTMLElement>();

  let karty = $derived(kartyRoztrid(blok, vlastni));
  let hromadka = $derived(hromadkaRoztrid(karty, umisteni));
  let aktivni = $derived<KartaRoztrid | null>(hromadka.find((k) => k.id === vybrana) ?? hromadka[0] ?? null);
  let smiPridat = $derived(!!blok.vlastni && vlastni.length < blok.vlastni.pocet);
  const nazevKose = (kos: string) => blok.kose.find((k) => k.id === kos)?.nazev ?? '';

  onMount(() => {
    const s = platnyStavRoztrid(stavBloku(id), blok);
    if (s) ({ umisteni, vlastni, hotovo } = s);
  });

  function ulozStav() {
    if (!Object.keys(umisteni).length && !vlastni.length) return smazStavBloku(id);
    ulozStavBloku(id, { umisteni, vlastni, hotovo }, { odkaz, otazka: blok.otazka, druh: 'roztrid', hotovo });
  }
  const prvek = (vyber: string) => document.getElementById(id)?.querySelector<HTMLElement>(vyber);

  async function dej(kos: string) {
    const k = aktivni;
    if (!k || hotovo) return;
    umisteni = { ...umisteni, [k.id]: kos };
    vybrana = null;
    ulozStav();
    const dalsi = aktivni;
    hlaseni = `„${k.text}“ je v koši ${nazevKose(kos)}. ${dalsi ? `Další karta: „${dalsi.text}“.` : 'Všechny karty jsou roztříděné.'}`;
    await tick();
    // Tlačítka „Dát sem“ s poslední kartou zmizí; fokus nesmí zůstat viset.
    if (!dalsi && !document.getElementById(id)?.contains(document.activeElement)) prvek('.roztrid__hotovo')?.focus();
  }

  async function vrat(karta: KartaRoztrid) {
    if (hotovo) return;
    const kos = umisteni[karta.id];
    const { [karta.id]: _pryc, ...zbytek } = umisteni;
    umisteni = zbytek;
    vybrana = karta.id;
    ulozStav();
    hlaseni = `„${karta.text}“ je zpátky navrchu.`;
    await tick();
    prvek(`[data-kos="${kos}"] .kos__sem`)?.focus();
  }

  async function pridej(e: SubmitEvent) {
    e.preventDefault();
    const text = textVlastniKarty(nova);
    if (!text || !smiPridat) return;
    const karta = { id: idVlastniKarty(vlastni), text };
    vlastni = [...vlastni, karta];
    vybrana = karta.id;
    nova = '';
    ulozStav();
    hlaseni = `Přidáno: „${text}“. Vyber pro ni koš.`;
    await tick();
    prvek('.kos__sem')?.focus();
  }

  function smazVlastni(karta: KartaRoztrid) {
    vlastni = vlastni.filter((k) => k.id !== karta.id);
    const { [karta.id]: _pryc, ...zbytek } = umisteni;
    umisteni = zbytek;
    vybrana = null;
    ulozStav();
    hlaseni = `Karta „${karta.text}“ je smazaná.`;
  }

  async function porovnej() {
    if (hromadka.length) return;
    hotovo = true;
    ulozStav();
    ulozZapis({ id, otazka: blok.otazka, odpoved: zapisRoztrid(blok, { umisteni, vlastni }), odkaz, druh: 'roztrid' });
    await tick();
    oblast?.focus();
  }

  async function znovu() {
    umisteni = {};
    vlastni = [];
    hotovo = false;
    vybrana = null;
    nova = '';
    hlaseni = '';
    smazStavBloku(id);
    smazZapis(id);
    await tick();
    prvek('.kos__sem')?.focus();
  }

  // ── Tažení karty navrchu (myš i prst); klávesnici a klepnutí obstará „Dát sem“ ──
  let tah = $state<{ x: number; y: number } | null>(null);
  let nad = $state<string | null>(null);
  let start: { x: number; y: number } | null = null;
  const PRAH = 6;

  function kosPod(x: number, y: number): string | null {
    for (const e of document.getElementById(id)?.querySelectorAll<HTMLElement>('[data-kos]') ?? []) {
      const r = e.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return e.dataset.kos ?? null;
    }
    return null;
  }
  function stisk(e: PointerEvent) {
    if (e.button !== 0 || !aktivni) return;
    start = { x: e.clientX, y: e.clientY };
    try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } catch { /* syntetická událost bez ukazatele */ }
  }
  function pohyb(e: PointerEvent) {
    if (!start) return;
    const x = e.clientX - start.x;
    const y = e.clientY - start.y;
    if (!tah && Math.hypot(x, y) < PRAH) return;
    tah = { x, y };
    nad = kosPod(e.clientX, e.clientY);
  }
  function pusteni(e: PointerEvent) {
    if (!start) return;
    const cil = tah && e.type === 'pointerup' ? kosPod(e.clientX, e.clientY) : null;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch { /* už uvolněno */ }
    start = null;
    tah = null;
    nad = null;
    if (cil) dej(cil);
  }
</script>

<section class="blok roztrid obdobi-{blok.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <BlokHlava nadtitulek={blok.nadtitulek ?? 'Roztřiď'} lide={filozof ? [filozof] : []} />
  {#if blok.scena}
    {#each odstavce(blok.scena) as o, i (i)}<p class="blok__scena">{@html o}</p>{/each}
  {/if}
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{@html radek(blok.otazka)}</h3>

  {#if !hotovo}
    <div class="stul">
      {#if aktivni}
        <p class="stul__postup t-popisek">Zbývá {hromadka.length} z {karty.length}</p>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class={['karta', tah && 'karta--tazena']}
          style={tah ? `transform: translate(${tah.x}px, ${tah.y}px)` : undefined}
          onpointerdown={stisk}
          onpointermove={pohyb}
          onpointerup={pusteni}
          onpointercancel={pusteni}
        >
          <svg class="karta__uchyt" width="12" height="20" viewBox="0 0 12 20" aria-hidden="true" focusable="false">
            <circle cx="3" cy="4" r="1.6" /><circle cx="9" cy="4" r="1.6" /><circle cx="3" cy="10" r="1.6" /><circle cx="9" cy="10" r="1.6" /><circle cx="3" cy="16" r="1.6" /><circle cx="9" cy="16" r="1.6" />
          </svg>
          <span class="karta__text">{aktivni.text}</span>
        </div>
        <p class="stul__napoveda t-popisek">Přetáhni kartu do koše, nebo u koše zvol Dát sem.</p>
        {#if aktivni.vlastni}
          <button class="blok__tl blok__tl--tiche stul__smazat" type="button" onclick={() => smazVlastni(aktivni)}>Smazat tuhle kartu</button>
        {/if}
      {:else}
        <p class="stul__prazdny">Všechno je roztříděné. Kartu vrátíš klepnutím na ni.</p>
      {/if}
    </div>

    <ul class={['kose', blok.kose.length > 3 && 'kose--ctyri']} style={`--kosu: ${blok.kose.length}`}>
      {#each blok.kose as k (k.id)}
        <li class={['kos', nad === k.id && 'kos--nad']} data-kos={k.id}>
          <div class="kos__hlava">
            <div>
              <h4 class="kos__nazev">{k.nazev}</h4>
              {#if k.popis}<p class="kos__popis">{@html radek(k.popis)}</p>{/if}
            </div>
            {#if aktivni}
              <button class="kos__sem" type="button" onclick={() => dej(k.id)}>
                Dát sem<span class="vizualne-skryte">kartu „{aktivni.text}“ do koše {k.nazev}</span>
              </button>
            {/if}
          </div>
          {#if kartyVKosi(karty, umisteni, k.id).length}
            <ul class="kos__karty" aria-label={`V koši ${k.nazev}`}>
              {#each kartyVKosi(karty, umisteni, k.id) as c (c.id)}
                <li>
                  <button class="zeton" type="button" onclick={() => vrat(c)}>
                    <span>{c.text}</span>
                    <svg width="16" height="16" aria-hidden="true" focusable="false"><use href="/ikony/ui.svg#zavrit" /></svg>
                    <span class="vizualne-skryte">(vzít zpět z koše {k.nazev})</span>
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
    <p class="vizualne-skryte" aria-live="polite">{hlaseni}</p>

    {#if smiPridat && blok.vlastni}
      <form class="vlastni" onsubmit={pridej}>
        <label class="blok__popis" for={`${id}-vlastni`}>{blok.vlastni.vyzva} <span class="nepovinne">Nepovinné</span></label>
        <div class="vlastni__radek">
          <input class="vlastni__pole" id={`${id}-vlastni`} type="text" maxlength={DELKA_KARTY} bind:value={nova} autocomplete="off" />
          <button class="blok__tl blok__tl--vedlejsi" type="submit" disabled={!textVlastniKarty(nova)}>Přidat kartu</button>
        </div>
      </form>
    {/if}

    <button class="blok__tl blok__tl--hlavni roztrid__hotovo" type="button" onclick={porovnej} disabled={hromadka.length > 0}>Mám roztříděno</button>
  {:else}
    <div class="blok__zpetna" role="region" aria-label="Tvoje třídění" aria-live="polite" tabindex="-1" bind:this={oblast} in:odkryti>
      <div class={['vysledky', blok.kose.length > 3 && 'vysledky--ctyri']} style={`--kosu: ${blok.kose.length}`}>
        {#each blok.kose as k (k.id)}
          {@const vKosi = kartyVKosi(karty, umisteni, k.id)}
          <div class="vysledek">
            <h4 class="blok__zpetna-titulek">{k.nazev}{#if !vKosi.length}: nic{/if}</h4>
            {#if vKosi.length}
              <ul class="vysledek__karty">
                {#each vKosi as c (c.id)}
                  {@const z = zpetnaKarty(blok, c, k.id)}
                  <li>
                    <p class="vysledek__karta">{c.text}</p>
                    {#if z}{#each odstavce(z) as o, j (j)}<p class="vysledek__zpetna">{@html o}</p>{/each}{/if}
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
      {#if blok.srovnani}
        {#if filozof}
          <BlokFilozof {filozof} nadpis={blok.srovnani.nadpis}>
            {#each odstavce(blok.srovnani.text) as o, i (i)}<p>{@html o}</p>{/each}
          </BlokFilozof>
        {:else}
          <div class="blok__oddil">
            <h4 class="blok__zpetna-titulek">{blok.srovnani.nadpis}</h4>
            {#each odstavce(blok.srovnani.text) as o, i (i)}<p>{@html o}</p>{/each}
          </div>
        {/if}
      {/if}
    </div>
    <BlokDal {dal} />
    <div class="blok__akce">
      <p class="blok__ulozeno">Tvoje třídění je uložené v deníku.</p>
      <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Začít znovu</button>
    </div>
  {/if}
</section>

<style>
  .stul { margin-bottom: var(--s-4); }
  .stul__postup { margin: 0 0 var(--s-2); color: var(--ink-2); }
  .stul__napoveda { margin: var(--s-2) 0 0; color: var(--ink-2); }
  .stul__prazdny { margin: 0; padding: var(--s-4); border: 1px dashed var(--muted); border-radius: var(--r-md); color: var(--ink-2); font-family: var(--font-sans); font-size: var(--fs-ovladani); }
  .stul__smazat { margin-top: var(--s-3); }
  .karta {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: var(--s-3);
    max-width: 440px;
    min-height: 64px;
    padding: var(--s-3) var(--s-4);
    border: 2px solid var(--pc);
    border-radius: var(--r-md);
    background: var(--pc-tint);
    font-size: var(--fs-perex);
    line-height: 1.3;
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    /* Kartu vede prst; stránka se posouvá všude kolem ní. */
    touch-action: none;
  }
  .karta--tazena { border-color: var(--ink); cursor: grabbing; }
  .karta__uchyt { flex: none; fill: var(--pc); }

  /* Koše se řídí šířkou bloku, ne obrazovky: v kroku cesty je blok široký až 960 px, v čtenářském sloupci profilu 680 px.
     Vedle sebe stojí, když na každý vyjde aspoň asi 210 px (název koše a tlačítko Dát sem vedle sebe). V profilu jsou
     proto dva nebo tři koše pod sebou jako na telefonu a čtyři po dvou. */
  .roztrid { container-type: inline-size; }
  .kose { display: grid; gap: var(--s-3); margin: 0 0 var(--s-5); padding: 0; list-style: none; }
  @container (min-width: 620px) {
    .kose--ctyri { grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; }
  }
  @container (min-width: 660px) {
    .kose:not(.kose--ctyri) { grid-template-columns: repeat(var(--kosu), minmax(0, 1fr)); align-items: stretch; }
  }
  @container (min-width: 860px) {
    .kose--ctyri { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
  .kos {
    position: relative;
    min-height: 76px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--paper);
    transition: border-color var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .kos:has(.kos__sem:hover) { border-color: var(--muted); }
  .kos--nad, .kos--nad:has(.kos__sem:hover) { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .kos__hlava { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--s-3); }
  .kos__nazev { margin: 0; font-family: var(--font-sans); font-size: var(--fs-ovladani-l); font-weight: 600; line-height: var(--lh-ovladani-l); }
  .kos__popis { margin: var(--s-1) 0 0; font-family: var(--font-sans); font-size: var(--fs-ovladani); line-height: 1.35; color: var(--ink-2); }
  /* „Dát sem“ je tlačítko; jeho plocha pokrývá celý koš, žetony leží nad ní. */
  .kos__sem {
    flex: none;
    min-height: 44px;
    padding: 0 var(--s-3);
    border: 1.5px solid var(--ink);
    border-radius: var(--r-sm);
    background: transparent;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 600;
    cursor: pointer;
    /* Fokus z klávesnice ukáže celý koš, ne jen tlačítko nad spodní lištou. */
    scroll-margin-bottom: 56px;
  }
  .kos__sem::after { content: ''; position: absolute; inset: 0; border-radius: var(--r-md); }
  .kos__sem:focus-visible { outline: none; }
  .kos:has(.kos__sem:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  .kos__karty { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: var(--s-2); margin: var(--s-3) 0 0; padding: 0; list-style: none; }
  .zeton {
    display: inline-flex;
    align-items: center;
    gap: var(--s-2);
    min-height: 44px;
    padding: var(--s-1) var(--s-3);
    border: 1px solid var(--pc-soft);
    border-radius: var(--r-sm);
    background: var(--surface);
    font-family: var(--font-serif);
    font-size: var(--fs-ovladani-l);
    line-height: 1.25;
    text-align: left;
    cursor: pointer;
  }
  .zeton:hover { border-color: var(--pc); }
  .zeton svg { flex: none; color: var(--muted); }

  .vlastni { margin-bottom: var(--s-5); }
  .vlastni__radek { display: flex; flex-wrap: wrap; gap: var(--s-3); }
  .vlastni__pole {
    flex: 1 1 220px;
    min-width: 0;
    min-height: 48px;
    padding: 0 var(--s-1);
    border: 0;
    border-bottom: 1.5px solid var(--muted);
    border-radius: 0;
    background: transparent;
    font-family: var(--font-serif);
    font-size: var(--fs-text);
  }
  .vlastni__pole:focus-visible { outline: 2px solid var(--ink); outline-offset: 4px; border-bottom-color: var(--ink); }
  /* Popisek se na telefonu láme; „Nepovinné“ pak stojí na novém řádku od kraje, ne odsazené. */
  .vlastni .blok__popis { display: flex; flex-wrap: wrap; column-gap: var(--s-2); }
  .nepovinne { font-weight: 400; color: var(--muted); }

  /* Výsledek drží rozložení košů: na telefonu pod sebou, na notebooku vedle sebe. */
  .vysledky { display: grid; gap: var(--s-4); }
  .vysledek + .vysledek { padding-top: var(--s-4); border-top: 1px solid var(--pc-soft, var(--rule)); }
  @container (min-width: 660px) {
    .vysledky:not(.vysledky--ctyri) { grid-template-columns: repeat(var(--kosu), minmax(0, 1fr)); gap: var(--s-5); }
    .vysledky:not(.vysledky--ctyri) .vysledek + .vysledek { padding-top: 0; padding-left: var(--s-5); border-top: 0; border-left: 1px solid var(--pc-soft, var(--rule)); }
  }
  @container (min-width: 860px) {
    .vysledky--ctyri { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--s-5); }
    .vysledky--ctyri .vysledek + .vysledek { padding-top: 0; padding-left: var(--s-5); border-top: 0; border-left: 1px solid var(--pc-soft, var(--rule)); }
  }
  .roztrid :global(.blok__oddil p) { max-width: var(--ctenarsky-sloupec); }
  .vysledek__karty { margin: 0; padding: 0; list-style: none; display: grid; gap: var(--s-3); }
  .vysledek__karta { margin: 0 0 var(--s-1); font-style: italic; }
  .vysledek__zpetna { margin: 0 0 var(--s-1); font-family: var(--font-sans); font-size: var(--fs-ovladani); line-height: var(--lh-ovladani); color: var(--ink-2); }
</style>
