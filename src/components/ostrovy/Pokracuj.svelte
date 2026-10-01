<script lang="ts">
  // „Pokračuj, kde jsi skončil“: rozpracovaná cesta, rozpracovaná otázka v bloku, nebo naposledy čtená stránka.
  // Bez záznamu v deníku se nezobrazí nic.
  import { onMount } from 'svelte';
  import { nacti } from '../../lib/denik';
  import { coPokracovat, type Pokracovani } from '../../lib/pokracuj';

  let nabidky = $state<Pokracovani[]>([]);
  onMount(() => {
    nabidky = coPokracovat(nacti());
  });
</script>

{#if nabidky.length}
  <nav class="pokracuj" aria-label="Pokračuj, kde jsi skončil">
    {#each nabidky as n (n.odkaz)}
      <a class="karta" href={n.odkaz}>
        <span class="t-nadtitulek">{n.nadtitulek}</span>
        <span class="nazev">{n.nazev}</span>
        {#if n.popis}<span class="t-popisek popis">{n.popis}</span>{/if}
      </a>
    {/each}
  </nav>
{/if}

<style>
  .pokracuj { display: flex; flex-wrap: wrap; gap: var(--s-3); margin-top: var(--s-6); }
  .karta {
    display: flex;
    flex-direction: column;
    gap: var(--s-1);
    flex: 1 1 260px;
    max-width: 420px;
    padding: var(--s-4) var(--s-5);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
    text-decoration: none;
  }
  .karta:hover { border-color: var(--muted); }
  .t-nadtitulek { color: var(--ink-2); }
  .nazev { font-size: var(--fs-perex); line-height: 1.3; }
  .popis { color: var(--ink-2); }
</style>
