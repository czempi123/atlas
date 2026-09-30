<script lang="ts">
  // Volba s důvodem: karty A–D, nepovinné „Proč právě tohle?“, ke každé možnosti vlastní zpětná vazba
  // „Tvůj tah: …“ a oddíl „Co udělal …“. Zpětná vazba vysvětluje důvod, nikdy neznámkuje.
  // Použití v MDX (obsah v src/content/bloky/cesta1-jak-zjistit.yaml):
  // <Volba id="cesta1-jak-zjistit" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import { zpetnaVolby, zapisVolby, platnyStavVolby, pismeno, odstavce, radek } from '../../lib/bloky';
  import type { TBlokVolba } from '../../lib/bloky-schema';

  interface Props {
    id: string;
    blok: Omit<TBlokVolba, 'zdroje' | 'kOvereni'>;
    /** filozof z oddílu „Co udělal …“ (jméno z dat) */
    filozof?: { jmeno: string; zena?: boolean };
    odkaz: string;
  }
  let { id, blok, filozof, odkaz }: Props = $props();

  let vyber = $state<number | null>(null);
  let proc = $state('');
  let potvrzeno = $state(false);
  let oblast = $state<HTMLElement>();
  let zpetna = $derived(potvrzeno && vyber !== null ? zpetnaVolby(blok, vyber, filozof) : null);

  onMount(() => {
    const s = platnyStavVolby(stavBloku(id), blok.moznosti.length);
    if (s) ({ vyber, proc, potvrzeno } = s);
  });

  function ulozRozpracovane() {
    if (vyber !== null) ulozStavBloku(id, { vyber, proc, potvrzeno });
  }

  async function potvrd() {
    if (vyber === null) return;
    potvrzeno = true;
    ulozStavBloku(id, { vyber, proc: proc.trim(), potvrzeno });
    ulozZapis({ id, otazka: blok.otazka, odpoved: zapisVolby(blok, vyber, proc), odkaz, druh: 'volba' });
    await tick();
    oblast?.focus();
  }

  function znovu() {
    vyber = null;
    proc = '';
    potvrzeno = false;
    smazStavBloku(id);
    smazZapis(id);
  }
</script>

<section class="blok volba obdobi-{blok.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek blok__nadtitulek">{blok.nadtitulek ?? 'Co uděláš?'}</p>
  {#if blok.scena}
    {#each odstavce(blok.scena) as o, i (i)}<p class="blok__scena">{@html o}</p>{/each}
  {/if}
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{@html radek(blok.otazka)}</h3>

  <div class="moznosti" role="radiogroup" aria-labelledby={`${id}-otazka`}>
    {#each blok.moznosti as m, i (i)}
      <label class={['karta', vyber === i && 'karta--vybrana', potvrzeno && 'karta--zamcena']}>
        <input
          class="vizualne-skryte"
          type="radio"
          name={`${id}-moznost`}
          value={i}
          bind:group={vyber}
          onchange={ulozRozpracovane}
          disabled={potvrzeno}
        />
        <span class="pismeno t-letopocet" aria-hidden="true">{pismeno(i)}</span>
        <span class="text">{@html radek(m.text)}</span>
      </label>
    {/each}
  </div>

  {#if !potvrzeno}
    <label class="blok__popis" for={`${id}-proc`}>Proč právě tohle? <span class="nepovinne">Nepovinné</span></label>
    <textarea class="blok__pole" id={`${id}-proc`} rows="2" bind:value={proc} onchange={ulozRozpracovane} placeholder="Stačí pár slov…"></textarea>
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={potvrd} disabled={vyber === null}>Tohle je můj tah</button>
  {:else if proc.trim()}
    <p class="tvuj-duvod"><span class="t-popisek">Tvůj důvod:</span> {proc}</p>
  {/if}

  {#if zpetna}
    <div class="blok__zpetna" role="region" aria-label="Zpětná vazba" aria-live="polite" tabindex="-1" bind:this={oblast}>
      <p class="blok__zpetna-titulek">{zpetna.titulek}</p>
      {#each odstavce(zpetna.text) as o, i (i)}<p>{@html o}</p>{/each}
      {#if zpetna.coUdelal}
        <div class="blok__oddil">
          <h4 class="blok__zpetna-titulek">{zpetna.coUdelal.nadpis}</h4>
          {#each odstavce(zpetna.coUdelal.text) as o, i (i)}<p>{@html o}</p>{/each}
        </div>
      {/if}
    </div>
    <details class="ostatni">
      <summary>Co kdybys zvolil jinak?</summary>
      <ul>
        {#each blok.moznosti as m, i (i)}
          {#if i !== vyber}
            <li>
              <p class="blok__zpetna-titulek">{pismeno(i)} · Tah: {m.tah}.</p>
              {#each odstavce(m.zpetna) as o, j (j)}<p>{@html o}</p>{/each}
            </li>
          {/if}
        {/each}
      </ul>
    </details>
    <div class="blok__akce">
      <p class="blok__ulozeno">Tvůj tah je uložený v deníku.</p>
      <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Začít znovu</button>
    </div>
  {/if}
</section>

<style>
  .moznosti { display: grid; gap: var(--s-3); margin-bottom: var(--s-5); }
  @media (min-width: 900px) {
    .moznosti { grid-template-columns: 1fr 1fr; }
  }
  .karta {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: var(--s-3);
    min-height: 60px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--paper);
    font-family: var(--font-serif);
    font-size: var(--fs-ovladani-l);
    line-height: 1.4;
    cursor: pointer;
    transition: border-color var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .karta:hover { border-color: var(--muted); }
  .karta:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  /* Vybraná: okraj 2 px a tint období (design.md › Volba s důvodem). */
  .karta--vybrana { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .karta--zamcena { cursor: default; }
  .karta--zamcena:not(.karta--vybrana) { color: var(--ink-2); }
  .karta--zamcena:hover:not(.karta--vybrana) { border-color: var(--rule); }
  .pismeno {
    flex: none;
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    margin-top: 1px;
    border: 1.5px solid var(--pc);
    border-radius: var(--r-full);
    color: var(--pc);
    font-size: var(--fs-ovladani);
    font-weight: 600;
  }
  .karta--vybrana .pismeno { background: var(--pc); color: var(--surface); }
  .text { padding-top: 2px; }
  .nepovinne { margin-left: var(--s-2); font-weight: 400; color: var(--muted); }
  .tvuj-duvod { margin: 0; font-style: italic; }
  .ostatni { margin-top: var(--s-4); }
  .ostatni summary {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    cursor: pointer;
  }
  .ostatni ul { margin: var(--s-3) 0 0; padding: 0; list-style: none; display: grid; gap: var(--s-4); }
  .ostatni li { padding-left: var(--s-4); border-left: 2px solid var(--pc-soft); }
  .ostatni li > :last-child { margin-bottom: 0; }
</style>
