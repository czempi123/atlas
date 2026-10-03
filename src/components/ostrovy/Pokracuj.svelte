<script lang="ts">
  // „Pokračuj, kde jsi skončil“: rozpracovaná cesta, rozpracovaná otázka v bloku, nebo naposledy čtená stránka.
  // Tichý řádek textových odkazů pod hlavním tlačítkem na Domů, ne druhé tlačítko. Bez záznamu v deníku se nezobrazí nic.
  // Co už nabízí hlavní tlačítko (prvek [data-zacatek-tlacitko]), se tu neopakuje.
  // Použití: <Pokracuj client:idle />
  import { onMount } from 'svelte';
  import { nacti } from '../../lib/denik';
  import { coPokracovat, type Pokracovani } from '../../lib/pokracuj';

  let nabidky = $state<Pokracovani[]>([]);
  onMount(() => {
    const hlavni = document.querySelector('[data-zacatek-tlacitko]')?.getAttribute('href') ?? undefined;
    nabidky = coPokracovat(nacti(), 2, hlavni);
  });
</script>

{#if nabidky.length}
  <nav class="pokracuj" aria-label="Pokračuj, kde jsi skončil">
    <ul>
      {#each nabidky as n (n.odkaz)}
        <li>
          <span class="co">{n.nadtitulek}:</span>
          <a href={n.odkaz}>{n.nazev}{#if n.popis}<span class="popis">&nbsp;· {n.popis}</span>{/if}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}

<style>
  .pokracuj ul { display: flex; flex-wrap: wrap; gap: 0 var(--s-5); margin: 0; padding: 0; list-style: none; }
  .pokracuj li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: var(--s-2);
    min-width: 0;
    min-height: var(--dotyk);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    line-height: var(--lh-ovladani);
  }
  .co { color: var(--ink-2); }
  /* Odkaz má dotykový cíl 44 px a řádek je stejně vysoký jako místo, které mu Domů vyhradí předem. */
  .pokracuj a { display: inline-flex; align-items: center; min-height: var(--dotyk); color: var(--ink); font-weight: 500; text-underline-offset: 0.2em; }
  .popis { color: var(--ink-2); font-weight: 400; }
</style>
