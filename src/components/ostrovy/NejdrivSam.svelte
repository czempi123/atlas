<script lang="ts">
  // Blok „Nejdřív sám“: student napíše vlastní odpověď, teprve potom odkryje srovnání s filozofem.
  // Odpověď se může uložit do deníku; nic se nehodnotí.
  import type { Snippet } from 'svelte';
  import { ulozZapis } from '../../lib/denik';

  interface Props {
    id: string;
    nadtitulek?: string;
    otazka: string;
    tlacitko: string;
    odkaz: string;
    children: Snippet;
  }
  let { id, nadtitulek = 'Než budeš číst dál', otazka, tlacitko, odkaz, children }: Props = $props();
  let odpoved = $state('');
  let odkryto = $state(false);

  function porovnej() {
    odkryto = true;
    if (odpoved.trim()) ulozZapis({ id, otazka, odpoved: odpoved.trim(), odkaz });
  }
</script>

<section class="karta" aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek nadtitulek">{nadtitulek}</p>
  <h3 class="otazka t-h3" id={`${id}-otazka`}>{otazka}</h3>
  <label class="vizualne-skryte" for={`${id}-pole`}>Tvoje odpověď</label>
  <textarea id={`${id}-pole`} rows="3" bind:value={odpoved} placeholder="Napiš pár slov…" disabled={odkryto}></textarea>
  {#if !odkryto}
    <button class="hlavni" type="button" onclick={porovnej}>{tlacitko}</button>
  {:else}
    <div class="odkryto" role="region" aria-live="polite" aria-label="Srovnání">
      {@render children()}
      {#if odpoved.trim()}<p class="ulozeno t-popisek">Tvoje odpověď je uložená v deníku.</p>{/if}
    </div>
  {/if}
</section>

<style>
  .karta {
    margin: var(--s-7) 0;
    padding: var(--s-5);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
  }
  .nadtitulek { margin: 0 0 var(--s-2); color: var(--pc, var(--ink)); }
  .otazka { margin-bottom: var(--s-4); }
  textarea {
    display: block;
    width: 100%;
    min-height: 96px;
    margin-bottom: var(--s-4);
    padding: var(--s-3);
    border: 1px solid var(--rule);
    border-radius: var(--r-sm);
    background: var(--paper);
    font-family: var(--font-serif);
    font-size: var(--fs-text);
    line-height: 1.5;
    resize: vertical;
  }
  textarea:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
  textarea:disabled { color: var(--ink-2); }
  .hlavni {
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
  .hlavni:hover { background: var(--ink-2); }
  .odkryto {
    padding: var(--s-4) var(--s-5);
    border-radius: var(--r-sm);
    background: var(--pc-tint, var(--sunk));
  }
  .odkryto :global(p:last-child) { margin-bottom: 0; }
  .ulozeno { margin-top: var(--s-3); color: var(--ink-2); }
</style>
