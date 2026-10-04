<script lang="ts">
  // Kdy je dost?: kresba k Epikúrovu stropu slasti (cesta 6, krok 3). Student dolévá vodu do poháru. Hladina
  // ukazuje, kolik žízně je pryč, ne kolik vody vypil. U čáry „dost“ žízeň zmizela: další voda ani máta hladinu
  // výš nedostanou, voda jen jinak chutná. Rám dává Kresba.svelte; nic tu neběží samo, proto kresba nemá
  // tlačítko pohybu. Proud vody se ukáže jen při dolití a jen tam, kde student nemá omezený pohyb.
  // Stav a texty: src/lib/pohar.ts. Podklad: docs/podklady/celek-2-jak-zit.md › Tvrzení: Epikúros
  // (Dopis Menoikeovi 127–132; Hlavní myšlenky 3 a 18).
  // Použití v MDX: <KolikJeDost id="kolik-je-dost-pohar" />
  import { tick } from 'svelte';
  import Kresba from './Kresba.svelte';
  import { VYCHOZI_POHAR, chut, dolij, hladina, jeDost, popisPoharu, prepniMatu, type StavPoharu } from '../../lib/pohar';

  interface Props {
    id: string;
    /** barva období (1–8) */
    obdobi?: number;
  }
  let { id, obdobi = 2 }: Props = $props();

  const NAZEV = 'Kdy je dost?';
  const POHLEDY = [{ id: 'pohar', nazev: NAZEV }];
  let pohled = $state<string>('pohar');
  let stav = $state<StavPoharu>({ ...VYCHOZI_POHAR });
  /** kolikrát student dolil; každé dolití pustí proud znovu */
  let dolito = $state(0);
  let tlDolit = $state<HTMLButtonElement>();

  /** Pohár v řezu: vnější tvar a vnitřek. Dno vnitřku je ve výšce DNO, čára „dost“ ve výšce CARA. */
  const POHAR = 'M98,62 H202 L191,200 Q190,208 182,208 H118 Q110,208 109,200 Z';
  const VNITREK = 'M105,62 H195 L185,197 Q184.5,201 180,201 H120 Q115.5,201 115,197 Z';
  const DNO = 201;
  const CARA = 82;

  let dost = $derived(jeDost(stav));
  let y = $derived(DNO - hladina(stav) * (DNO - CARA));

  function dolit() {
    stav = dolij(stav);
    dolito += 1;
  }
  async function znovu() {
    stav = { ...VYCHOZI_POHAR };
    dolito = 0;
    // Tlačítko zmizí; fokus z klávesnice se vrátí na dolévání.
    await tick();
    tlDolit?.focus({ preventScroll: true });
  }
</script>

<Kresba {id} {obdobi} nadtitulek="Zkus si to" nazev={NAZEV} pohledy={POHLEDY} bind:pohled popis={popisPoharu(stav)} maPohyb={false}>
  {#snippet kresba()}
    <defs>
      <clipPath id="{id}-vnitrek"><path d={VNITREK} /></clipPath>
    </defs>
    <rect class="k-stin" width="340" height="240" />
    <path class="k-svetlo" d={POHAR} />
    <path class="k-tma" d={VNITREK} />

    <!-- Proud leží pod vodou, takže končí na hladině. -->
    {#if dolito > 0}
      {#key dolito}<line class="proud" x1="150" y1="6" x2="150" y2="199" />{/key}
    {/if}

    <g clip-path="url(#{id}-vnitrek)">
      <g class="voda" style:transform="translateY({y}px)">
        <rect class="k-svetlo" x="96" width="108" height="130" />
        <!-- Máta mění vodu samu, ne její hladinu. -->
        <g class="mata" class:je={stav.mata}>
          <path class="vlnky" d="M104,34 q11,-5 22,0 t22,0 t22,0 t22,0 M108,58 q10,-5 20,0 t20,0 t20,0 t20,0 M112,84 q9,-5 18,0 t18,0 t18,0 t18,0" />
          <path class="stonek" d="M132,27 Q148,20 166,9" />
          <path class="k-stin" d="M140,23 q-10,-1 -13,-10 q11,0 13,10 Z M150,19 q-2,-11 7,-15 q4,10 -7,15 Z M159,14 q9,-4 16,2 q-9,5 -16,-2 Z" />
        </g>
      </g>
    </g>

    <!-- Čára „dost“ stojí na místě, ať je ve vodě cokoli. -->
    <line class="cara" x1="72" y1={CARA} x2="236" y2={CARA} />
    <text class="k-popisek" x="242" y={CARA + 4}>dost</text>

    <!-- Co ještě chybí: míra od hladiny k čáře. U čáry zmizí. -->
    <g class="chybi" class:pryc={dost}>
      <rect class="k-svetlo mira" x="77" y={CARA} width="2" height={DNO - CARA} style:transform="scaleY({1 - hladina(stav)})" />
      <rect class="k-svetlo posuv" x="72" y="-1" width="12" height="2" style:transform="translateY({y}px)" />
      <text class="k-popisek posuv" x="66" text-anchor="end" style:transform="translateY({(CARA + y) / 2 + 4}px)">chybí</text>
    </g>

    <text class="k-popisek" x="328" y="26" text-anchor="end">{chut(stav)}</text>
  {/snippet}

  {#snippet ovladani()}
    <div class="blok__akce">
      <button type="button" class="blok__tl blok__tl--vedlejsi" bind:this={tlDolit} onclick={dolit}>Dolít vodu</button>
      {#if dost}
        <button type="button" class="blok__tl blok__tl--vedlejsi" onclick={() => (stav = prepniMatu(stav))}>
          {stav.mata ? 'Vyndat mátu' : 'Přidat mátu'}
        </button>
        <button type="button" class="blok__tl blok__tl--tiche" onclick={znovu}>Od začátku</button>
      {/if}
    </div>
  {/snippet}
</Kresba>

<style>
  .voda { transition: transform var(--pohyb-kamera) cubic-bezier(0.22, 1, 0.36, 1); }
  .mata { opacity: 0; transition: opacity var(--pohyb); }
  .mata.je { opacity: 1; }
  .vlnky { fill: none; stroke: var(--k-stin); stroke-width: 1.3; stroke-linecap: round; opacity: 0.5; }
  .stonek { fill: none; stroke: var(--k-stin); stroke-width: 1.8; stroke-linecap: round; }

  .cara { stroke: var(--k-svetlo); stroke-width: 1.4; stroke-dasharray: 4 5; stroke-linecap: round; }
  .chybi { transition: opacity var(--pohyb); }
  .chybi.pryc { opacity: 0; }
  .mira { transform-box: view-box; transform-origin: 78px 82px; transition: transform var(--pohyb-kamera) cubic-bezier(0.22, 1, 0.36, 1); }
  .posuv { transition: transform var(--pohyb-kamera) cubic-bezier(0.22, 1, 0.36, 1); }

  .proud { stroke: var(--k-svetlo); stroke-width: 5; stroke-linecap: round; opacity: 0; }
  /* Proud je jednorázový děj po klepnutí, ne smyčka; při omezeném pohybu se neukáže. */
  :global(.kresba--pohyb) .proud { animation: proud 700ms ease-out; }
  @keyframes proud {
    0% { opacity: 0; }
    18% { opacity: 0.9; }
    70% { opacity: 0.8; }
    100% { opacity: 0; }
  }
</style>
