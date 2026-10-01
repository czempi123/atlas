<script lang="ts">
  // Můj deník: rozpracované cesty a otázky, odpovědi a stanoviska, přijaté výzvy a export do souboru.
  // Vše jen v tomto prohlížeči.
  import { onMount } from 'svelte';
  import { nacti, exportuj, type Denik } from '../../lib/denik';

  let denik = $state<Denik | null>(null);
  let cesty = $derived(denik ? Object.entries(denik.cesty).sort((a, b) => b[1].kdy.localeCompare(a[1].kdy)) : []);
  let rozpracovane = $derived(denik ? denik.aktivita.filter((a) => !a.hotovo) : []);
  const datum = (iso: string) => new Date(iso).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });

  onMount(() => {
    denik = nacti();
    const obnov = () => (denik = nacti());
    window.addEventListener('atlas-denik', obnov);
    return () => window.removeEventListener('atlas-denik', obnov);
  });
</script>

{#if denik}
  {#if denik.zapisy.length === 0 && denik.vyzvy.length === 0 && cesty.length === 0 && rozpracovane.length === 0}
    <p class="t-perex">Zatím je prázdný. Když u osobnosti nebo otázky napíšeš vlastní odpověď nebo přijmeš výzvu, najdeš ji tady.</p>
  {:else}
    {#if cesty.length || rozpracovane.length}
      <h2 class="t-h3 nadpis">Rozpracované</h2>
      <ul class="seznam seznam--rozpracovane">
        {#each cesty as [slug, c] (slug)}
          {@const hotova = c.navstivene.length >= c.pocet}
          <li>
            <p class="t-popisek">Cesta · {hotova ? 'prošel jsi celou' : `krok ${c.krok} z ${c.pocet}`}</p>
            <p class="otazka"><a href={hotova ? `/cesta/${slug}/` : `/cesta/${slug}/${c.krok}/`}>{c.nazev}</a></p>
            <span class="postup" aria-hidden="true"><span style={`width:${(c.navstivene.length / c.pocet) * 100}%`}></span></span>
          </li>
        {/each}
        {#each rozpracovane as a (a.id)}
          <li>
            <p class="t-popisek">Otázka, ke které ses ještě nevrátil</p>
            <p class="otazka"><a href={a.odkaz}>{a.otazka}</a></p>
          </li>
        {/each}
      </ul>
    {/if}
    {#if denik.zapisy.length}
      <h2 class="t-h3 nadpis">Moje odpovědi a stanoviska</h2>
      <ul class="seznam seznam--zapisy">
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
  .otazka a { display: inline-block; min-height: 24px; }
  .postup { display: block; max-width: 240px; height: 6px; margin-top: var(--s-2); border-radius: var(--r-full); background: var(--sunk); overflow: hidden; }
  .postup span { display: block; height: 100%; background: var(--period-1); }
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
