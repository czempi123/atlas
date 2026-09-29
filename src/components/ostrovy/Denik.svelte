<script lang="ts">
  // Můj deník: stanoviska, přijaté výzvy a export do souboru. Vše jen v tomto prohlížeči.
  import { onMount } from 'svelte';
  import { nacti, exportuj, type Denik } from '../../lib/denik';

  let denik = $state<Denik | null>(null);
  const datum = (iso: string) => new Date(iso).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });

  onMount(() => {
    denik = nacti();
    const obnov = () => (denik = nacti());
    window.addEventListener('atlas-denik', obnov);
    return () => window.removeEventListener('atlas-denik', obnov);
  });
</script>

{#if denik}
  {#if denik.zapisy.length === 0 && denik.vyzvy.length === 0}
    <p class="t-perex">Zatím je prázdný. Když u osobnosti nebo otázky napíšeš vlastní odpověď nebo přijmeš výzvu, najdeš ji tady.</p>
  {:else}
    {#if denik.zapisy.length}
      <h2 class="t-h3 nadpis">Moje odpovědi a stanoviska</h2>
      <ul class="seznam">
        {#each denik.zapisy as z (z.id)}
          <li>
            <p class="t-popisek">{datum(z.kdy)} · <a href={z.odkaz}>zpět ke stránce</a></p>
            <p class="otazka">{z.otazka}</p>
            <p class="odpoved">{z.odpoved}</p>
          </li>
        {/each}
      </ul>
    {/if}
    {#if denik.vyzvy.length}
      <h2 class="t-h3 nadpis">Přijaté výzvy</h2>
      <ul class="seznam">
        {#each denik.vyzvy as v (v.id)}
          <li>
            <p class="t-popisek">přijato {datum(v.prijato)}</p>
            <p class="otazka"><a href={v.odkaz}>{v.nazev}</a></p>
          </li>
        {/each}
      </ul>
    {/if}
  {/if}
  <button type="button" class="export" onclick={exportuj}>Stáhnout deník do souboru</button>
{/if}

<style>
  .nadpis { margin: var(--s-7) 0 var(--s-4); }
  .seznam { margin: 0; padding: 0; list-style: none; }
  .seznam li { padding: var(--s-4) 0; border-top: 1px solid var(--rule); }
  .seznam p { margin: 0 0 var(--s-1); }
  .otazka { font-family: var(--font-sans); font-weight: 600; font-size: var(--fs-ovladani); }
  .export {
    margin-top: var(--s-6);
    min-height: 48px;
    padding: 0 var(--s-5);
    border: 1.5px solid var(--ink);
    border-radius: var(--r-sm);
    background: transparent;
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani-l);
    font-weight: 600;
    cursor: pointer;
  }
  .export:hover { background: var(--sunk); }
</style>
