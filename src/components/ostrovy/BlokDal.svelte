<script lang="ts">
  // „Kam dál“ po dokončení bloku: jeden další krok (další krok cesty, profil, mapa).
  import { odkryti } from '../../lib/pohyb';
  import type { Dal } from './bloky-typy';

  interface Props { dal?: Dal; vedlejsi?: Dal }
  let { dal, vedlejsi }: Props = $props();
</script>

{#if dal || vedlejsi}
  <nav class="blok__dal" aria-label="Kam dál" in:odkryti>
    {#if dal}
      <a class="blok__tl blok__tl--hlavni" href={dal.href}>
        <span>{dal.text}</span>
        <svg width="20" height="20" aria-hidden="true" focusable="false"><use href="/ikony/ui.svg#dal" /></svg>
      </a>
    {/if}
    {#if vedlejsi}
      <a class="blok__tl blok__tl--vedlejsi" href={vedlejsi.href}>{vedlejsi.text}</a>
    {/if}
  </nav>
{/if}
