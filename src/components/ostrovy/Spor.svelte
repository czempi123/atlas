<script lang="ts">
  // Spor: student se postaví na škálu mezi dva filozofy, přečte si jejich nejsilnější argumenty
  // a může se přesunout. Do deníku se zapíše první i konečná poloha; nic se nehodnotí.
  // Použití v MDX (obsah v src/content/bloky/platon-diogenes-skutecnost.yaml):
  // <Spor id="platon-diogenes-skutecnost" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import { POLOHY, popisPolohy, zpetnaSporu, zapisSporu, platnyStavSporu, odstavce, radek } from '../../lib/bloky';
  import type { TBlokSpor } from '../../lib/bloky-schema';

  interface Strana { jmeno: string; obdobi: number }
  interface Props {
    id: string;
    blok: Omit<TBlokSpor, 'zdroje' | 'kOvereni'>;
    /** jména a období obou stran z dat, ve stejném pořadí jako blok.strany */
    lide: [Strana, Strana];
    odkaz: string;
  }
  let { id, blok, lide, odkaz }: Props = $props();
  const [A, B] = [lide[0].jmeno, lide[1].jmeno];
  const polohy = Array.from({ length: POLOHY }, (_, i) => i);

  let navrh = $state<number | null>(null);
  let prvni = $state<number | null>(null);
  let konecna = $state<number | null>(null);
  let duvod = $state('');
  let argumenty = $state<HTMLElement>();
  let oblast = $state<HTMLElement>();

  onMount(() => {
    const s = platnyStavSporu(stavBloku(id));
    if (!s) return;
    prvni = s.prvni;
    konecna = s.konecna;
    duvod = s.duvod;
    navrh = s.konecna ?? s.prvni;
  });

  const ulozStav = () => ulozStavBloku(id, { prvni, konecna, duvod: duvod.trim() });

  async function postavSe() {
    if (navrh === null) return;
    prvni = navrh;
    ulozStav();
    await tick();
    argumenty?.focus();
  }

  async function zapis() {
    if (navrh === null || prvni === null) return;
    konecna = navrh;
    ulozStav();
    ulozZapis({ id, otazka: blok.otazka, odpoved: zapisSporu(prvni, konecna, A, B, duvod), odkaz, druh: 'spor' });
    await tick();
    oblast?.focus();
  }

  async function znovu() {
    navrh = null;
    prvni = null;
    konecna = null;
    duvod = '';
    smazStavBloku(id);
    smazZapis(id);
    await tick();
    document.getElementById(id)?.querySelector<HTMLElement>('input, textarea')?.focus();
  }
</script>

{#snippet skala(jmeno: string, zamceno: boolean, popisek: string, zacatek: boolean)}
  <fieldset class="skala">
    <legend class="vizualne-skryte">{popisek}</legend>
    <div class="skala__konce" aria-hidden="true">
      <span class="obdobi-{lide[0].obdobi}">{A}</span>
      <span class="obdobi-{lide[1].obdobi}">{B}</span>
    </div>
    <div class="skala__stopa">
      {#each polohy as i (i)}
        <label class={['stop', navrh === i && 'stop--vybrany', zacatek && prvni === i && 'stop--zacatek', zamceno && 'stop--zamceny']}>
          <input class="vizualne-skryte" type="radio" name={jmeno} value={i} bind:group={navrh} disabled={zamceno} />
          <span class="vizualne-skryte">{popisPolohy(i, A, B)}{zacatek && prvni === i ? ' (tady jsi začal)' : ''}</span>
          <span class="stop__bod" aria-hidden="true"></span>
        </label>
      {/each}
    </div>
    <p class="skala__stav t-ovladani" aria-hidden="true">
      {#if navrh !== null}Stojíš: <strong>{popisPolohy(navrh, A, B)}</strong>{#if zacatek && prvni !== null && prvni !== navrh}{' · '}začal jsi: {popisPolohy(prvni, A, B)}{/if}{:else}Vyber místo na škále.{/if}
    </p>
  </fieldset>
{/snippet}

<section class="blok spor obdobi-{blok.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek blok__nadtitulek">{blok.nadtitulek ?? 'Spor'}</p>
  {#if blok.scena}
    {#each odstavce(blok.scena) as o, i (i)}<p class="blok__scena">{@html o}</p>{/each}
  {/if}
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{@html radek(blok.otazka)}</h3>
  <div class="postoje">
    {#each blok.strany as s, i (s.osoba)}
      <p class="postoj obdobi-{lide[i].obdobi}"><span class="t-nadtitulek">{lide[i].jmeno}</span> {@html radek(s.postoj)}</p>
    {/each}
  </div>

  {#if prvni === null}
    {@render skala(`${id}-prvni`, false, 'Kde stojíš ty?', false)}
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={postavSe} disabled={navrh === null}>Tady stojím</button>
  {:else}
    <div class="argumenty" role="region" aria-label="Argumenty obou stran" tabindex="-1" bind:this={argumenty}>
      <p class="zacatek t-ovladani">Začal jsi: <strong>{popisPolohy(prvni, A, B)}</strong>. Teď si přečti, co říkají oba.</p>
      <div class="strany">
        {#each blok.strany as s, i (s.osoba)}
          <article class="strana obdobi-{lide[i].obdobi}" aria-labelledby={`${id}-strana-${i}`}>
            <h4 class="strana__jmeno t-nadtitulek" id={`${id}-strana-${i}`}>{lide[i].jmeno}</h4>
            {#each s.argumenty as arg, j (j)}
              {#each odstavce(arg) as o, k (k)}<p>{@html o}</p>{/each}
            {/each}
          </article>
        {/each}
      </div>
    </div>

    {#if konecna === null}
      <h4 class="t-ovladani-l posunout">Chceš se posunout?</h4>
      {@render skala(`${id}-konecna`, false, 'Kde stojíš teď?', true)}
      <label class="blok__popis" for={`${id}-duvod`}>Co tě posunulo, nebo co tě udrželo? <span class="nepovinne">Nepovinné</span></label>
      <textarea class="blok__pole" id={`${id}-duvod`} rows="2" bind:value={duvod} onchange={ulozStav} placeholder="Stačí pár slov…"></textarea>
      <button class="blok__tl blok__tl--hlavni" type="button" onclick={zapis} disabled={navrh === null}>Zapsat konečnou polohu</button>
    {:else}
      {@render skala(`${id}-hotovo`, true, 'Tvoje konečná poloha', true)}
      <div class="blok__zpetna" role="region" aria-label="Tvůj posun" aria-live="polite" tabindex="-1" bind:this={oblast}>
        <p class="blok__zpetna-titulek">Začal jsi: {popisPolohy(prvni, A, B)}. Teď: {popisPolohy(konecna, A, B)}.</p>
        <p>{zpetnaSporu(prvni, konecna, A, B)}</p>
        {#if duvod.trim()}<p class="duvod"><span class="t-popisek">Tvůj důvod:</span> {duvod}</p>{/if}
      </div>
      <div class="blok__akce">
        <p class="blok__ulozeno">První i konečná poloha jsou uložené v deníku.</p>
        <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Začít znovu</button>
      </div>
    {/if}
  {/if}
</section>

<style>
  .postoje { display: grid; gap: var(--s-3); margin-bottom: var(--s-5); }
  @media (min-width: 700px) {
    .postoje { grid-template-columns: 1fr 1fr; }
    .postoje .postoj:last-child { text-align: right; }
  }
  .postoj { margin: 0; font-size: var(--fs-perex); line-height: 1.35; }
  .postoj .t-nadtitulek { display: block; margin-bottom: var(--s-1); color: var(--pc); }

  .skala { margin: 0 0 var(--s-4); padding: 0; border: 0; min-width: 0; }
  .skala__konce { display: flex; justify-content: space-between; margin-bottom: var(--s-1); font-family: var(--font-sans); font-size: var(--fs-ovladani); font-weight: 600; }
  .skala__konce span { color: var(--pc); }
  .skala__stopa {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .skala__stopa::before {
    content: '';
    position: absolute;
    left: 22px;
    right: 22px;
    top: 50%;
    height: 2px;
    background: var(--rule);
    transform: translateY(-50%);
  }
  .stop {
    position: relative;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: var(--r-full);
    cursor: pointer;
  }
  .stop--zamceny { cursor: default; }
  .stop:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 2px; }
  .stop__bod {
    width: 18px;
    height: 18px;
    border: 2px solid var(--muted);
    border-radius: var(--r-full);
    background: var(--surface);
    transition: transform var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .stop:nth-child(3) .stop__bod { border-style: dashed; }
  .stop:hover .stop__bod { border-color: var(--ink); }
  .stop--zacatek .stop__bod { border-color: var(--pc); background: var(--pc-tint); }
  .stop--vybrany .stop__bod { width: 28px; height: 28px; border-color: var(--ink); background: var(--ink); }
  .skala__stav { margin: var(--s-2) 0 0; text-align: center; color: var(--ink-2); }
  .skala__stav strong { color: var(--ink); font-weight: 600; }

  .argumenty { margin-top: var(--s-2); outline: none; }
  .argumenty:focus-visible { outline: 2px solid var(--ink); outline-offset: 4px; }
  .zacatek { margin: 0 0 var(--s-4); color: var(--ink-2); }
  .zacatek strong { color: var(--ink); font-weight: 600; }
  .strany { display: grid; gap: var(--s-4); margin-bottom: var(--s-5); }
  @media (min-width: 700px) {
    .strany { grid-template-columns: 1fr 1fr; }
  }
  .strana {
    padding: var(--s-4) var(--s-5);
    border-top: 3px solid var(--pc);
    border-radius: 0 0 var(--r-sm) var(--r-sm);
    background: var(--pc-tint);
  }
  .strana > :last-child { margin-bottom: 0; }
  .strana__jmeno { margin: 0 0 var(--s-2); color: var(--ink); }
  .posunout { margin: 0 0 var(--s-3); }
  .nepovinne { margin-left: var(--s-2); font-weight: 400; color: var(--muted); }
  .duvod { font-style: italic; }
  .duvod .t-popisek { color: var(--ink-2); font-style: normal; }
</style>
