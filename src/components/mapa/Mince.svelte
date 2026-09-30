<script lang="ts">
  // Mince atributu (Svelte verze komponenty ui/Mince.astro): kruh s ikonou, dvojitý okraj v barvě období.
  // Varianty ring (mapa), tint (karta), sel (vybraný). Bez atributu jen prázdný prstenec, nikdy iniciála.
  interface Props {
    ikona?: string;
    obdobi: number;
    varianta?: 'ring' | 'tint' | 'sel' | 'stin';
    velikost?: number;
  }
  let { ikona, obdobi, varianta = 'ring', velikost = 26 }: Props = $props();
</script>

<span class="mince mince--{varianta} obdobi-{obdobi}" class:mince--bez={!ikona} style:--v="{velikost}px" aria-hidden="true">
  <span class="mince__vnitrek">
    {#if ikona}
      <svg width={Math.round(velikost * 0.56)} height={Math.round(velikost * 0.56)} focusable="false"><use href="/ikony/atributy.svg#{ikona}" /></svg>
    {/if}
  </span>
</span>

<style>
  .mince {
    display: inline-grid;
    place-items: center;
    flex: none;
    width: var(--v);
    height: var(--v);
    padding: 1.5px;
    border: 1.5px solid var(--pc);
    border-radius: 999px;
    background: var(--surface);
  }
  .mince__vnitrek {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid var(--pc-soft);
    border-radius: 999px;
    color: var(--pc);
  }
  .mince__vnitrek svg { display: block; }
  .mince--tint, .mince--tint .mince__vnitrek { background: var(--pc-tint); }
  .mince--sel { background: var(--pc); }
  .mince--sel .mince__vnitrek { background: var(--pc); color: var(--paper); border-color: color-mix(in srgb, var(--paper) 45%, transparent); }
  .mince--bez .mince__vnitrek { background: var(--pc-tint); }
  .mince--stin { opacity: 0.55; border-style: dashed; }
</style>
