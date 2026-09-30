<script lang="ts">
  // Změň jednu věc: myšlenkový pokus s přepínačem podmínky. Student rozhodne, změní jednu věc ve scéně,
  // rozhodne znovu a vidí, jak se jeho odpověď posunula. Zpětná vazba se ptá na důvod posunu.
  // Použití v MDX (obsah v src/content/bloky/utek-z-vezeni.yaml):
  // <ZmenJednuVec id="utek-z-vezeni" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import { posunZmeny, zapisZmeny, platnyStavZmeny, odstavce, radek, veta } from '../../lib/bloky';
  import type { TBlokZmena } from '../../lib/bloky-schema';

  interface Props {
    id: string;
    blok: Omit<TBlokZmena, 'zdroje' | 'kOvereni'>;
    filozof?: { jmeno: string; zena?: boolean };
    odkaz: string;
  }
  let { id, blok, filozof, odkaz }: Props = $props();

  /** rozpracovaná volba v základu a v podmínkách (před potvrzením) */
  let navrhZaklad = $state<string | null>(null);
  let navrhPodminka = $state<string | null>(null);
  let zaklad = $state<string | null>(null);
  let odpovedi = $state<Record<string, string>>({});
  let aktivni = $state<string | null>(null);
  let oblast = $state<HTMLElement>();

  let podminka = $derived(blok.podminky.find((p) => p.id === aktivni) ?? null);
  let odpovedTed = $derived(aktivni ? (odpovedi[aktivni] ?? null) : null);
  let textMoznosti = (mid: string | null) => blok.moznosti.find((m) => m.id === mid)?.text ?? '';
  let nejakaOdpoved = $derived(Object.keys(odpovedi).length > 0);

  onMount(() => {
    const s = platnyStavZmeny(stavBloku(id), blok);
    if (!s) return;
    zaklad = s.zaklad;
    navrhZaklad = s.zaklad;
    odpovedi = s.podminky;
    aktivni = s.aktivni;
    navrhPodminka = s.aktivni ? (s.podminky[s.aktivni] ?? null) : null;
  });

  function ulozStav() {
    ulozStavBloku(id, { zaklad, podminky: odpovedi, aktivni });
  }

  let prepinace = $state<HTMLElement>();
  async function rozhodni() {
    if (!navrhZaklad) return;
    zaklad = navrhZaklad;
    ulozStav();
    // Tlačítko zmizí; fokus přejde na přepínač podmínek, ať klávesnice nezůstane na začátku stránky.
    await tick();
    prepinace?.querySelector('input')?.focus();
  }

  function prepni(pid: string) {
    aktivni = pid;
    navrhPodminka = odpovedi[pid] ?? null;
    ulozStav();
  }

  async function rozhodniZnovu() {
    if (!aktivni || !navrhPodminka) return;
    odpovedi = { ...odpovedi, [aktivni]: navrhPodminka };
    ulozStav();
    ulozZapis({ id, otazka: blok.otazka, odpoved: zapisZmeny(blok, { zaklad, podminky: odpovedi }), odkaz, druh: 'zmena' });
    await tick();
    oblast?.focus();
  }

  async function znovu() {
    zaklad = null;
    navrhZaklad = null;
    navrhPodminka = null;
    odpovedi = {};
    aktivni = null;
    smazStavBloku(id);
    smazZapis(id);
    await tick();
    document.getElementById(id)?.querySelector<HTMLElement>('input, textarea')?.focus();
  }
</script>

{#snippet moznosti(jmeno: string, zamceno: boolean, getter: () => string | null, setter: (v: string) => void, popisek: string)}
  <div class="moznosti" role="radiogroup" aria-label={popisek}>
    {#each blok.moznosti as m (m.id)}
      <label class={['moznost', getter() === m.id && 'moznost--vybrana']}>
        <input
          class="vizualne-skryte"
          type="radio"
          name={jmeno}
          value={m.id}
          checked={getter() === m.id}
          disabled={zamceno}
          onchange={() => setter(m.id)}
        />
        <span>{@html radek(m.text)}</span>
      </label>
    {/each}
  </div>
{/snippet}

<section class="blok zmena obdobi-{blok.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek blok__nadtitulek">{blok.nadtitulek ?? 'Myšlenkový pokus'}</p>
  {#if blok.scena}
    {#each odstavce(blok.scena) as o, i (i)}<p class="blok__scena">{@html o}</p>{/each}
  {/if}
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{@html radek(blok.otazka)}</h3>

  {#if !zaklad}
    {@render moznosti(`${id}-zaklad`, false, () => navrhZaklad, (v) => (navrhZaklad = v), 'Tvoje rozhodnutí')}
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={rozhodni} disabled={!navrhZaklad}>Rozhodnuto</button>
  {:else}
    <p class="rozhodnuti"><span class="t-popisek">Tvoje rozhodnutí:</span> <strong>{veta(textMoznosti(zaklad))}</strong></p>

    <fieldset class="prepinac">
      <legend class="t-ovladani-l">Změň jednu věc</legend>
      <div class="podminky" bind:this={prepinace}>
        {#each blok.podminky as p (p.id)}
          <label class={['cip', aktivni === p.id && 'cip--zapnuty']}>
            <input class="vizualne-skryte" type="radio" name={`${id}-podminka`} value={p.id} checked={aktivni === p.id} onchange={() => prepni(p.id)} />
            <span>{p.prepinac}</span>
            {#if odpovedi[p.id]}<span class="vizualne-skryte"> (zodpovězeno)</span><span class="tecka" aria-hidden="true"></span>{/if}
          </label>
        {/each}
      </div>
    </fieldset>

    {#if podminka}
      <div class="zmenena">
        {#each odstavce(podminka.zmena) as o, i (i)}<p>{@html o}</p>{/each}
        <p class="znovu-otazka t-ovladani-l">{@html radek(blok.otazka)}</p>
        {#key aktivni}
          {@render moznosti(`${id}-p-${podminka.id}`, false, () => navrhPodminka, (v) => (navrhPodminka = v), `Tvoje rozhodnutí: ${podminka.prepinac}`)}
        {/key}
        <button class="blok__tl blok__tl--hlavni" type="button" onclick={rozhodniZnovu} disabled={!navrhPodminka || navrhPodminka === odpovedTed}>
          {odpovedTed ? 'Rozhodnout jinak' : 'Rozhodnout znovu'}
        </button>
      </div>

      {#if odpovedTed}
        {@const posun = posunZmeny(zaklad, odpovedTed)}
        <div class="blok__zpetna" role="region" aria-label="Posun odpovědi" aria-live="polite" tabindex="-1" bind:this={oblast}>
          <p class="posun t-ovladani">
            <span class="posun__cast"><span class="t-popisek">Předtím</span> {veta(textMoznosti(zaklad))}</span>
            <span class="posun__sipka" aria-hidden="true">→</span>
            <span class="posun__cast"><span class="t-popisek">Teď</span> {veta(textMoznosti(odpovedTed))}</span>
          </p>
          <p class="blok__zpetna-titulek">{posun === 'posun' ? 'Tvoje odpověď se posunula.' : 'Tvoje odpověď zůstala stejná.'}</p>
          {#each odstavce(posun === 'posun' ? podminka.posun : podminka.stejne) as o, i (i)}<p>{@html o}</p>{/each}
        </div>
      {/if}
    {:else}
      <p class="t-popisek napoveda">Vyber jednu změnu a rozhodni se znovu.</p>
    {/if}

    {#if nejakaOdpoved && blok.coUdelal && filozof}
      <div class="co-udelal">
        <h4 class="blok__zpetna-titulek">Co {filozof.zena ? 'udělala' : 'udělal'} {filozof.jmeno}</h4>
        {#each odstavce(blok.coUdelal.text) as o, i (i)}<p>{@html o}</p>{/each}
      </div>
    {/if}

    <div class="blok__akce">
      {#if nejakaOdpoved}<p class="blok__ulozeno">Tvoje rozhodnutí jsou uložená v deníku.</p>{/if}
      <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Začít znovu</button>
    </div>
  {/if}
</section>

<style>
  .moznosti { display: grid; gap: var(--s-3); margin-bottom: var(--s-4); }
  @media (min-width: 600px) {
    .moznosti { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
  }
  .moznost {
    display: flex;
    align-items: center;
    min-height: 56px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--paper);
    font-size: var(--fs-ovladani-l);
    line-height: 1.35;
    cursor: pointer;
  }
  .moznost:hover { border-color: var(--muted); }
  .moznost:has(input:focus-visible), .cip:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  .moznost--vybrana { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .rozhodnuti { margin: 0 0 var(--s-5); }
  .rozhodnuti strong { font-weight: 600; }
  .prepinac { margin: 0 0 var(--s-4); padding: 0; border: 0; }
  .prepinac legend { margin-bottom: var(--s-3); padding: 0; color: var(--ink); }
  .podminky { display: flex; flex-wrap: wrap; gap: var(--s-2); }
  .cip {
    display: inline-flex;
    align-items: center;
    gap: var(--s-2);
    min-height: 44px;
    padding: var(--s-2) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-full);
    background: var(--paper);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 500;
    line-height: 1.3;
    cursor: pointer;
  }
  .cip:hover { border-color: var(--muted); }
  .cip--zapnuty { border-color: var(--ink); background: var(--ink); color: var(--paper); }
  .tecka { width: 8px; height: 8px; border-radius: var(--r-full); background: var(--pc); }
  .cip--zapnuty .tecka { background: var(--paper); }
  .zmenena {
    margin-top: var(--s-4);
    padding: var(--s-4) var(--s-5) var(--s-5);
    border-left: 3px solid var(--pc);
    background: var(--sunk);
    border-radius: 0 var(--r-sm) var(--r-sm) 0;
  }
  .znovu-otazka { margin: var(--s-4) 0 var(--s-3); }
  .napoveda { margin: 0; }
  .posun {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--s-2) var(--s-4);
    margin: 0 0 var(--s-4);
  }
  .posun__cast { display: inline-flex; flex-direction: column; }
  .posun__cast .t-popisek { color: var(--ink-2); }
  .posun__sipka { font-size: var(--fs-ovladani-l); color: var(--pc); }
  .co-udelal { margin-top: var(--s-5); padding-top: var(--s-4); border-top: 1px solid var(--rule); }
  .co-udelal > :last-child { margin-bottom: 0; }
</style>
