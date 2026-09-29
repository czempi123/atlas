<script lang="ts">
  // „Pokračuj, kde jsi skončil“: poslední navštívená stránka z deníku. Bez záznamu se nezobrazí.
  import { onMount } from 'svelte';
  import { nacti } from '../../lib/denik';

  let posledni = $state<{ odkaz: string; nazev: string } | null>(null);
  onMount(() => { posledni = nacti().navstivene[0] ?? null; });
</script>

{#if posledni}
  <a class="pokracuj" href={posledni.odkaz}>
    <span class="t-nadtitulek">Pokračuj, kde jsi skončil</span>
    <span class="nazev">{posledni.nazev}</span>
  </a>
{/if}

<style>
  .pokracuj {
    display: flex;
    flex-direction: column;
    gap: var(--s-1);
    margin-top: var(--s-6);
    padding: var(--s-4) var(--s-5);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
    text-decoration: none;
    max-width: 420px;
  }
  .pokracuj:hover { border-color: var(--muted); }
  .t-nadtitulek { color: var(--muted); }
  .nazev { font-size: var(--fs-perex); }
</style>
