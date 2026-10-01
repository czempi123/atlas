<script lang="ts">
  // Postup v cestě: v hlavičce kroku „Krok 2 z 6“ s tečkami (a zápis návštěvy do deníku),
  // na přehledu cesty seznam kroků s tím, co student už prošel, a tlačítko Začít / Pokračovat.
  import { onMount } from 'svelte';
  import { nacti, zaznamenejKrok } from '../../lib/denik';

  interface Krok { n: number; nazev: string; href: string }
  interface Props {
    varianta: 'hlavicka' | 'prehled';
    slug: string;
    nazev: string;
    kroky: Krok[];
    /** krok, na kterém student je (jen v hlavičce) */
    aktualni?: number;
  }
  let { varianta, slug, nazev, kroky, aktualni }: Props = $props();
  let navstivene = $state<number[]>([]);
  let posledni = $state<number | null>(null);
  let hotovo = $derived(kroky.every((k) => navstivene.includes(k.n)));

  onMount(() => {
    if (varianta === 'hlavicka' && aktualni) zaznamenejKrok(slug, aktualni, nazev, kroky.length);
    const c = nacti().cesty[slug];
    navstivene = c?.navstivene ?? [];
    posledni = c?.krok ?? null;
  });
</script>

{#if varianta === 'hlavicka'}
  <div class="hlavicka-postup">
    <p class="t-ovladani postup-text" aria-hidden="true">Krok {aktualni} z {kroky.length}</p>
    <ol class="tecky" aria-label={`Kroky cesty, právě krok ${aktualni} z ${kroky.length}`}>
      {#each kroky as k (k.n)}
        <li>
          <a
            href={k.href}
            class={['tecka', k.n === aktualni && 'tecka--ted', navstivene.includes(k.n) && 'tecka--prosel']}
            aria-current={k.n === aktualni ? 'step' : undefined}
            aria-label={`Krok ${k.n}: ${k.nazev}${navstivene.includes(k.n) && k.n !== aktualni ? ' (prošel jsi)' : ''}`}
          ><span aria-hidden="true"></span></a>
        </li>
      {/each}
    </ol>
  </div>
{:else}
  <ol class="seznam">
    {#each kroky as k (k.n)}
      <li class={[navstivene.includes(k.n) && 'prosel']}>
        <a href={k.href}>
          <span class="cislo t-letopocet" aria-hidden="true">{navstivene.includes(k.n) ? '✓' : k.n}</span>
          <span class="nazev">{k.nazev}</span>
          {#if navstivene.includes(k.n)}<span class="vizualne-skryte"> (prošel jsi)</span>{/if}
        </a>
      </li>
    {/each}
  </ol>
  <div class="akce">
    {#if hotovo}
      <p class="hotovo t-ovladani" role="status">Cestu jsi prošel celou. Tvoje odpovědi jsou v <a href="/denik/">deníku</a>.</p>
      <a class="blok__tl blok__tl--vedlejsi" href={kroky[0].href}>Projít znovu</a>
    {:else if posledni}
      <a class="blok__tl blok__tl--hlavni" href={kroky.find((k) => k.n === posledni)?.href ?? kroky[0].href}>Pokračovat: krok {posledni}</a>
    {:else}
      <a class="blok__tl blok__tl--hlavni" href={kroky[0].href}>Začít cestu</a>
    {/if}
  </div>
{/if}

<style>
  .hlavicka-postup { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .postup-text { margin: 0; color: var(--ink-2); }
  .tecky { display: flex; gap: 0; margin: 0; padding: 0; list-style: none; }
  .tecka { display: grid; place-items: center; width: 28px; height: 28px; border-radius: var(--r-full); }
  @media (pointer: coarse) { .tecka { height: 36px; } }
  .tecka span { width: 10px; height: 10px; border: 1.5px solid var(--muted); border-radius: var(--r-full); }
  .tecka--prosel span { border-color: var(--pc); background: var(--pc-soft); }
  .tecka--ted span { width: 14px; height: 14px; border-color: var(--ink); background: var(--ink); }
  .tecka:hover span { border-color: var(--ink); }

  .seznam { display: grid; gap: var(--s-2); margin: 0 0 var(--s-5); padding: 0; list-style: none; counter-reset: krok; }
  .seznam a {
    display: flex;
    align-items: center;
    gap: var(--s-4);
    min-height: 56px;
    padding: var(--s-2) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
    text-decoration: none;
  }
  .seznam a:hover { border-color: var(--muted); }
  .cislo {
    flex: none;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border: 1.5px solid var(--pc);
    border-radius: var(--r-full);
    color: var(--pc);
    font-family: var(--font-sans);
    font-weight: 600;
  }
  .prosel .cislo { background: var(--pc); color: var(--surface); }
  .nazev { font-size: var(--fs-perex); line-height: 1.3; }
  .akce { display: flex; flex-wrap: wrap; align-items: center; gap: var(--s-4); }
  .hotovo { margin: 0; }
</style>
