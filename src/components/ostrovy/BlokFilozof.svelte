<script lang="ts">
  // Oddíl „Co udělal …“ s mincí filozofa.
  import type { Snippet } from 'svelte';
  import Mince from '../mapa/Mince.svelte';
  import type { ClovekBloku } from './bloky-typy';

  interface Props { filozof: ClovekBloku; nadpis?: string; children: Snippet }
  let { filozof, nadpis, children }: Props = $props();
</script>

<div class="blok__oddil obdobi-{filozof.obdobi}">
  <div class="blok__filozof">
    <Mince ikona={filozof.ikona} obdobi={filozof.obdobi} varianta="sel" velikost={36} />
    <h4 class="blok__zpetna-titulek">{nadpis ?? `Co ${filozof.zena ? 'udělala' : 'udělal'} ${filozof.jmeno}`}</h4>
  </div>
  {@render children()}
</div>
