<script lang="ts">
  // Moje stanovisko: krátký zápis do deníku k otázce. Dobrovolné, nic se nehodnotí ani neodesílá.
  import { onMount } from 'svelte';
  import { nacti, ulozZapis } from '../../lib/denik';

  interface Props { id: string; otazka: string; odkaz: string }
  let { id, otazka, odkaz }: Props = $props();
  let otevreno = $state(false);
  let text = $state('');
  let ulozeno = $state(false);

  onMount(() => {
    const z = nacti().zapisy.find((x) => x.id === id);
    if (z) { text = z.odpoved; ulozeno = true; }
  });

  function uloz() {
    if (!text.trim()) return;
    ulozZapis({ id, otazka, odpoved: text.trim(), odkaz });
    ulozeno = true;
    otevreno = false;
  }
</script>

<div class="stanovisko">
  {#if !otevreno}
    <button class="vedlejsi" type="button" onclick={() => (otevreno = true)} aria-expanded="false">
      {ulozeno ? 'Upravit stanovisko v deníku' : 'Moje stanovisko'}
    </button>
    {#if ulozeno}<span class="t-popisek">Uloženo v deníku.</span>{/if}
  {:else}
    <label class="t-ovladani" for={`${id}-stanovisko`}>{otazka}</label>
    <textarea id={`${id}-stanovisko`} rows="3" bind:value={text}></textarea>
    <div class="akce">
      <button class="hlavni" type="button" onclick={uloz}>Uložit do deníku</button>
      <button class="tiche" type="button" onclick={() => (otevreno = false)}>Zrušit</button>
    </div>
  {/if}
</div>

<style>
  .stanovisko { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-3); margin-top: var(--s-4); }
  label { flex-basis: 100%; }
  textarea {
    flex-basis: 100%;
    min-height: 88px;
    padding: var(--s-3);
    border: 1px solid var(--rule);
    border-radius: var(--r-sm);
    background: var(--paper);
    font-family: var(--font-serif);
    font-size: var(--fs-text);
  }
  .akce { display: flex; gap: var(--s-3); }
  button {
    min-height: 48px;
    padding: 0 var(--s-5);
    border-radius: var(--r-sm);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani-l);
    font-weight: 600;
    cursor: pointer;
  }
  .hlavni { border: 1.5px solid var(--ink); background: var(--ink); color: var(--paper); }
  .vedlejsi { border: 1.5px solid var(--ink); background: transparent; color: var(--ink); }
  .vedlejsi:hover { background: var(--sunk); }
  .tiche { border: 1px solid var(--rule); background: transparent; color: var(--ink); }
</style>
