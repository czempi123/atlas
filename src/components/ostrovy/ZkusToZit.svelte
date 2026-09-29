<script lang="ts">
  // Zkus to žít: týdenní výzva. Jedno hlavní tlačítko „Přijmout výzvu“; přijetí se uloží do deníku.
  import { onMount } from 'svelte';
  import { nacti, prijmiVyzvu } from '../../lib/denik';

  interface Props { id: string; nazev: string; odkaz: string }
  let { id, nazev, odkaz }: Props = $props();
  let prijato = $state(false);

  onMount(() => { prijato = nacti().vyzvy.some((v) => v.id === id); });

  function prijmi() {
    prijmiVyzvu({ id, nazev, odkaz });
    prijato = true;
  }
</script>

{#if prijato}
  <p class="prijato" role="status">Výzva je v tvém deníku. Za týden si tam zapiš, jak dopadla.</p>
{:else}
  <button type="button" onclick={prijmi}>Přijmout výzvu</button>
{/if}

<style>
  button {
    min-height: 52px;
    padding: 0 var(--s-5);
    border: 1.5px solid var(--ink);
    border-radius: var(--r-sm);
    background: var(--ink);
    color: var(--paper);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani-l);
    font-weight: 600;
    cursor: pointer;
  }
  button:hover { background: var(--ink-2); }
  .prijato { margin: 0; font-family: var(--font-sans); font-size: var(--fs-ovladani); font-weight: 500; color: var(--ink); }
</style>
