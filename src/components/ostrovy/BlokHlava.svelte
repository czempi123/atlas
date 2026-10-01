<script lang="ts">
  // Hlavička bloku: nadtitulek v barvě období a mince lidí, o kterých blok je.
  import Mince from '../mapa/Mince.svelte';
  import type { ClovekBloku } from './bloky-typy';

  interface Props { nadtitulek: string; lide?: ClovekBloku[] }
  let { nadtitulek, lide = [] }: Props = $props();
</script>

<div class="blok__hlava">
  <p class="t-nadtitulek blok__nadtitulek">{nadtitulek}</p>
  {#if lide.length}
    <span class="blok__mince" aria-hidden="true">
      {#each lide as c (c.jmeno)}<Mince ikona={c.ikona} obdobi={c.obdobi} varianta="tint" velikost={40} />{/each}
    </span>
  {/if}
</div>
