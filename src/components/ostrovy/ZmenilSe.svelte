<script lang="ts">
  // Změnil se? Návrat k prvnímu názoru na konci stránky velké otázky: student vidí, co napsal na začátku,
  // a odpoví znovu. Obě odpovědi jsou v deníku vedle sebe; nic se nehodnotí.
  // Použití: <ZmenilSe client:visible slug="jak-poznam-pravdu" otazka="Jak poznám, co je pravda?" odkaz="/otazka/jak-poznam-pravdu/#zmenil-se" />
  import { onMount, tick } from 'svelte';
  import { najdiZapis, ulozZapis } from '../../lib/denik';
  import { klicOtazky } from '../../lib/otazky';
  import { odkryti } from '../../lib/pohyb';

  interface Props { slug: string; otazka: string; odkaz: string }
  let { slug, otazka, odkaz }: Props = $props();
  const klic = klicOtazky(slug);

  let prvni = $state('');
  let ted = $state('');
  let ulozeno = $state(false);
  let upravuji = $state(false);
  let srovnani = $state<HTMLElement>();

  function nactiPrvni() {
    prvni = najdiZapis(klic.prvni)?.odpoved ?? '';
  }

  onMount(() => {
    nactiPrvni();
    const z = najdiZapis(klic.ted);
    if (z) {
      ted = z.odpoved;
      ulozeno = true;
    }
    window.addEventListener('atlas:prvni-nazor', nactiPrvni);
    return () => window.removeEventListener('atlas:prvni-nazor', nactiPrvni);
  });

  async function uloz() {
    if (!ted.trim()) return;
    ulozZapis({ id: klic.ted, otazka: `${otazka} Po setkání s filozofy`, odpoved: ted.trim(), odkaz, druh: 'stanovisko' });
    ulozeno = true;
    upravuji = false;
    await tick();
    srovnani?.focus();
  }
</script>

<div class="blok zmenil-se">
  {#if !ulozeno || upravuji}
    {#if prvni}
      <p class="blok__popis">Na začátku jsi napsal:</p>
      <p class="puvodni">„{prvni}“</p>
    {:else}
      <p class="blok__popis">Na začátku jsi neodpověděl. Teď už víš, jak odpovídali filozofové.</p>
    {/if}
    <label class="blok__popis" for={`${slug}-ted-pole`}>Jak odpovíš teď? Klidně stejně jako na začátku. Připiš, co tě posunulo, nebo co tě udrželo.</label>
    <textarea class="blok__pole" id={`${slug}-ted-pole`} rows="3" bind:value={ted} placeholder="Napiš pár slov…"></textarea>
    <div class="blok__akce">
      <button class="blok__tl blok__tl--hlavni" type="button" onclick={uloz} disabled={!ted.trim()}>Uložit do deníku</button>
    </div>
  {:else}
    <div class="blok__zpetna srovnani" role="region" aria-label="Na začátku a teď" aria-live="polite" tabindex="-1" bind:this={srovnani} in:odkryti>
      <div class="sloupce">
        <div>
          <h3 class="blok__zpetna-titulek">Na začátku</h3>
          <p>{prvni || 'Bez odpovědi.'}</p>
        </div>
        <div>
          <h3 class="blok__zpetna-titulek">Teď</h3>
          <p>{ted}</p>
        </div>
      </div>
      <p class="dal"><em>Co by tě přimělo změnit názor ještě jednou?</em></p>
    </div>
    <div class="blok__akce">
      <p class="blok__ulozeno">Obě odpovědi jsou v deníku.</p>
      <button class="blok__tl blok__tl--tiche" type="button" onclick={() => (upravuji = true)}>Upravit</button>
    </div>
  {/if}
</div>

<style>
  .zmenil-se { margin: 0; }
  .puvodni {
    margin: 0 0 var(--s-5);
    padding-left: var(--s-4);
    border-left: 2px solid var(--rule);
    font-style: italic;
    color: var(--ink-2);
    white-space: pre-line;
  }
  .sloupce { display: grid; gap: var(--s-4); }
  .sloupce p { margin: 0; white-space: pre-line; }
  .dal { margin: var(--s-4) 0 0; padding-top: var(--s-4); border-top: 1px solid var(--pc-soft, var(--rule)); }
  @media (min-width: 700px) {
    .sloupce { grid-template-columns: 1fr 1fr; gap: var(--s-6); }
  }
</style>
