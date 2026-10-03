<script lang="ts">
  // Návrat: krátký nový případ, na kterém student zkouší své závěrečné pravidlo z cesty. Ukáže pravidlo
  // (jen ke čtení), případ a otázku „Platí tvoje pravidlo i tady?“ se třemi možnostmi a nepovinným důvodem.
  // Po odpovědi nic nehodnotí: jedna věta se ptá dál. Odpověď je nový zápis v deníku; pravidlo se nepřepisuje.
  // Ve skutečném atlasu ho otevírá jen deník (Denik.svelte), pár dní po dokončení cesty.
  // Použití v dílně (obsah v src/content/bloky/cesta1-navrat.yaml):
  // <Navrat id="cesta1-navrat" ukazka="Věřím tomu, co si můžu ověřit jinde." />
  import { onMount, tick } from 'svelte';
  import { najdiZapis, ulozZapis, smazZapis, stavBloku, ulozStavBloku } from '../../lib/denik';
  import { odstavce, radek } from '../../lib/bloky';
  import {
    OTAZKA_NAVRATU, ODPOVEDI_NAVRATU, platnyStavNavratu, zapisNavratu, otazkaZapisuNavratu,
    type NavratDeniku, type OdpovedNavratu,
  } from '../../lib/navrat';
  import { odkryti } from '../../lib/pohyb';

  interface Props {
    navrat: NavratDeniku;
    /** pravidlo na ukázku, dokud student vlastní nemá (jen dílna) */
    ukazka?: string;
  }
  let { navrat, ukazka }: Props = $props();
  const { id, blok } = navrat;

  let pravidlo = $state(ukazka ?? '');
  let vyber = $state<OdpovedNavratu | null>(null);
  let duvod = $state('');
  let zapsano = $state(false);
  let oblast = $state<HTMLElement>();

  onMount(() => {
    pravidlo = najdiZapis(navrat.pravidlo)?.odpoved.trim() || ukazka || '';
    const s = platnyStavNavratu(stavBloku(id));
    vyber = s.odpoved;
    duvod = s.duvod;
    zapsano = s.zapsano;
  });

  // Odložení a skrytí nabídky patří ke stejnému stavu; blok je jen přenáší dál.
  const ulozStav = () => ulozStavBloku(id, { ...platnyStavNavratu(stavBloku(id)), odpoved: vyber, duvod: duvod.trim(), zapsano });

  async function zapis() {
    if (!vyber) return;
    zapsano = true;
    ulozStav();
    ulozZapis({ id, otazka: otazkaZapisuNavratu(blok.nazev), odpoved: zapisNavratu(vyber, duvod), odkaz: navrat.odkaz, druh: 'navrat' });
    await tick();
    oblast?.focus();
  }

  async function znovu() {
    vyber = null;
    duvod = '';
    zapsano = false;
    ulozStav();
    smazZapis(id);
    await tick();
    document.getElementById(id)?.querySelector<HTMLElement>('input')?.focus();
  }
</script>

<section class="blok navrat obdobi-{blok.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <!-- Blok stojí vždy pod nadpisem „Návrat“ (deník, dílna); nadtitulek proto říká jen, ke které cestě patří. -->
  <p class="t-nadtitulek blok__nadtitulek">{navrat.nazevCesty}</p>
  {#if pravidlo}
    <p class="blok__popis pravidlo__popis">Tvoje pravidlo</p>
    <p class="pravidlo">{pravidlo}</p>
  {:else}
    <p class="blok__scena">Své pravidlo si zapíšeš <a href={navrat.odkaz}>na konci cesty</a>.</p>
  {/if}
  {#each odstavce(blok.scena) as o, i (i)}<p class="pripad">{@html o}</p>{/each}
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{OTAZKA_NAVRATU}</h3>

  {#if !zapsano}
    <div class="moznosti" role="radiogroup" aria-labelledby={`${id}-otazka`}>
      {#each ODPOVEDI_NAVRATU as o (o.id)}
        <label class={['karta', vyber === o.id && 'karta--vybrana']}>
          <input class="vizualne-skryte" type="radio" name={`${id}-odpoved`} value={o.id} bind:group={vyber} onchange={ulozStav} />
          <span class="karta__bod" aria-hidden="true"></span>
          <span>{o.text}</span>
        </label>
      {/each}
    </div>
    <label class="blok__popis proc" for={`${id}-duvod`}>Proč?<span class="nepovinne">Nepovinné</span></label>
    <textarea class="blok__pole blok__pole--kratke" id={`${id}-duvod`} rows="2" bind:value={duvod} onchange={ulozStav} placeholder="Stačí pár slov…"></textarea>
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={zapis} disabled={vyber === null}>Zapsat do deníku</button>
  {:else if vyber}
    <div class="blok__zpetna" role="region" aria-label="Tvoje odpověď" aria-live="polite" tabindex="-1" bind:this={oblast} in:odkryti>
      <p class="blok__zpetna-titulek">Tvoje odpověď: {ODPOVEDI_NAVRATU.find((o) => o.id === vyber)?.text}.</p>
      {#if duvod.trim()}<p class="duvod"><span class="t-popisek">Tvůj důvod:</span> {duvod}</p>{/if}
      <p>{@html radek(blok.po[vyber])}</p>
    </div>
    <div class="blok__akce">
      <p class="blok__ulozeno">Odpověď je v deníku. Tvoje pravidlo zůstává beze změny.</p>
      <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Začít znovu</button>
    </div>
  {/if}
</section>

<style>
  .pravidlo__popis { margin-bottom: var(--s-1); color: var(--ink-2); }
  .pravidlo {
    margin: 0 0 var(--s-5);
    padding-left: var(--s-4);
    border-left: 2px solid var(--pc);
    font-style: italic;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }
  .pripad:last-of-type { margin-bottom: var(--s-5); }
  /* Karty vedle sebe jen tam, kde se do bloku vejdou celé (dílna); v deníku a na telefonu stojí pod sebou. */
  .navrat { container-type: inline-size; }
  .moznosti { display: grid; gap: var(--s-3); margin-bottom: var(--s-5); }
  @container (min-width: 600px) {
    .moznosti { grid-template-columns: repeat(3, 1fr); }
  }
  .karta {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--s-3);
    min-height: 56px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--paper);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani-l);
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: border-color var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .karta:hover { border-color: var(--muted); }
  .karta:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  /* Vybraná: okraj 2 px a tint období, stejně jako karty Volby. */
  .karta--vybrana { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .karta__bod {
    flex: none;
    width: 18px;
    height: 18px;
    border: 2px solid var(--muted);
    border-radius: var(--r-full);
    background: var(--surface);
  }
  .karta--vybrana .karta__bod { border-color: var(--ink); background: var(--ink); box-shadow: inset 0 0 0 3px var(--surface); }
  .proc { display: flex; flex-wrap: wrap; column-gap: var(--s-2); }
  .nepovinne { font-weight: 400; color: var(--muted); }
  .duvod { font-style: italic; }
  .duvod .t-popisek { color: var(--ink-2); font-style: normal; }
</style>
