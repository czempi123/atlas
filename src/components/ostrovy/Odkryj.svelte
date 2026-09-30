<script lang="ts">
  // Odkryj (dříve Nejdřív sám): student napíše vlastní pokus, teprve potom odkryje srovnání,
  // modelové odpovědi a sebekontrolu. Nic se nehodnotí; odpověď jde do deníku a vydrží obnovení.
  // Použití v MDX (přes obal src/components/bloky/Odkryj.astro):
  // <Odkryj id="sokrates-kdo-je-moudry" otazka="Koho považuješ za moudrého?" tlacitko="Porovnat se Sókratem"
  //   modelove={[{ text: '…', komentar: '…' }]} sebekontrola={['…']}>Srovnání s filozofem…</Odkryj>
  import { onMount, tick, type Snippet } from 'svelte';
  import { najdiZapis, ulozZapis, stavBloku, ulozStavBloku } from '../../lib/denik';
  import { platnyStavOdkryj, radek } from '../../lib/bloky';

  interface Modelova { text: string; komentar?: string }
  interface Props {
    id: string;
    nadtitulek?: string;
    otazka: string;
    tlacitko?: string;
    odkaz: string;
    modelove?: Modelova[];
    sebekontrola?: string[];
    /** CSS třída období (obdobi-N); bez ní blok převezme barvu stránky */
    obdobi?: number;
    children?: Snippet;
  }
  let { id, nadtitulek = 'Než budeš číst dál', otazka, tlacitko = 'Odkrýt', odkaz, modelove = [], sebekontrola = [], obdobi, children }: Props = $props();

  let odpoved = $state('');
  let odkryto = $state(false);
  let upravuji = $state(false);
  let ulozeno = $state(false);
  let kontrola = $state<boolean[]>(sebekontrola.map(() => false));
  let oblast = $state<HTMLElement>();

  onMount(() => {
    const s = platnyStavOdkryj(stavBloku(id), sebekontrola.length);
    const z = najdiZapis(id);
    if (s) {
      odkryto = s.odkryto;
      kontrola = s.kontrola;
      odpoved = s.odpoved;
    }
    if (z) {
      odpoved = z.odpoved;
      odkryto = true;
      ulozeno = true;
    }
  });

  function ulozStav() {
    ulozStavBloku(id, { odpoved: odpoved.trim(), odkryto, kontrola });
  }

  function zapis() {
    if (odpoved.trim()) {
      ulozZapis({ id, otazka, odpoved: odpoved.trim(), odkaz, druh: 'odkryj' });
      ulozeno = true;
    }
    ulozStav();
  }

  async function porovnej() {
    odkryto = true;
    zapis();
    await tick();
    oblast?.focus();
  }

  function ulozUpravu() {
    upravuji = false;
    zapis();
  }

  function zaskrtni(i: number, ano: boolean) {
    kontrola[i] = ano;
    ulozStav();
  }
</script>

<section class={['blok', 'odkryj', obdobi && `obdobi-${obdobi}`]} id={id} aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek blok__nadtitulek">{nadtitulek}</p>
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{otazka}</h3>
  <label class="vizualne-skryte" for={`${id}-pole`}>Tvoje odpověď</label>
  <textarea
    class="blok__pole"
    id={`${id}-pole`}
    rows="3"
    bind:value={odpoved}
    onchange={() => !odkryto && ulozStav()}
    placeholder="Napiš pár slov…"
    disabled={odkryto && !upravuji}
  ></textarea>
  {#if !odkryto}
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={porovnej}>{tlacitko}</button>
  {:else if upravuji}
    <div class="blok__akce">
      <button class="blok__tl blok__tl--hlavni" type="button" onclick={ulozUpravu}>Uložit do deníku</button>
    </div>
  {/if}

  {#if odkryto}
    <div class="blok__zpetna odkryto" role="region" aria-label="Srovnání" aria-live="polite" tabindex="-1" bind:this={oblast}>
      {#if children}{@render children()}{/if}

      {#if modelove.length}
        <div class="blok__oddil">
          <h4 class="blok__zpetna-titulek">Jak se dá odpovědět</h4>
          <ul class="modelove">
            {#each modelove as m, i (i)}
              <li>
                <p class="modelova">„{@html radek(m.text)}“</p>
                {#if m.komentar}<p class="komentar">{@html radek(m.komentar)}</p>{/if}
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if sebekontrola.length}
        <fieldset class="blok__oddil kontrola">
          <legend class="blok__zpetna-titulek">Zkontroluj svou odpověď</legend>
          {#each sebekontrola as k, i (i)}
            <label class="zaskrtnuti">
              <input type="checkbox" checked={kontrola[i]} onchange={(e) => zaskrtni(i, e.currentTarget.checked)} />
              <span>{@html radek(k)}</span>
            </label>
          {/each}
        </fieldset>
      {/if}
    </div>
    <div class="blok__akce">
      {#if ulozeno}<p class="blok__ulozeno">Tvoje odpověď je uložená v deníku.</p>{/if}
      {#if !upravuji}
        <button class="blok__tl blok__tl--tiche" type="button" onclick={() => (upravuji = true)}>
          {odpoved.trim() ? 'Upravit odpověď' : 'Připsat odpověď'}
        </button>
      {/if}
    </div>
  {/if}
</section>

<style>
  .odkryj :global(.odkryto > p:last-child) { margin-bottom: 0; }
  .modelove { margin: 0; padding: 0; list-style: none; display: grid; gap: var(--s-4); }
  .modelova { margin: 0 0 var(--s-1); font-style: italic; }
  .komentar { margin: 0; font-family: var(--font-sans); font-size: var(--fs-ovladani); line-height: var(--lh-ovladani); color: var(--ink-2); }
  .kontrola { margin-inline: 0; padding-inline: 0; padding-bottom: 0; border: 0; border-top: 1px solid var(--pc-soft, var(--rule)); }
  .kontrola legend { float: left; width: 100%; padding: 0; }
  .zaskrtnuti {
    clear: both;
    display: flex;
    align-items: flex-start;
    gap: var(--s-3);
    min-height: 44px;
    padding: var(--s-2) 0;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    line-height: var(--lh-ovladani);
    cursor: pointer;
  }
  .zaskrtnuti input {
    flex: none;
    width: 22px;
    height: 22px;
    margin: 0;
    accent-color: var(--ink);
    cursor: pointer;
  }
  .zaskrtnuti input:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
</style>
