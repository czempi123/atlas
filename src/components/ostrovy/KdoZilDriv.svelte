<script lang="ts">
  // Kdo žil dřív?: student odhadne pořadí nebo vzdálenost dvou lidí, pak se otevře malá osa,
  // věta „Žili současně … / Dělí je …“ z časové logiky mapy a odkaz do Mapy a času na správný rok.
  // Odhad se jen popíše vedle skutečnosti; nic se neboduje. Do deníku nejde, stav vydrží obnovení.
  // Použití v MDX: <KdoZilDriv a="sokrates" b="diogenes" druh="poradi" />
  import { onMount, tick } from 'svelte';
  import { stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import {
    faktaDvojice, hodnotPoradi, hodnotVzdalenost, platnyStavKdoZil, osaDvou,
    type OdhadPoradi, type OdhadVzdalenosti,
  } from '../../lib/bloky';
  import { let_, zAstro, type OsobaMapy } from '../../lib/cas-mapy';
  import { rok as rokText } from '../../lib/casy';

  type Clovek = OsobaMapy & { obdobi: number; zivotText: string };
  interface Props {
    id: string;
    druh: 'poradi' | 'vzdalenost';
    a: Clovek;
    b: Clovek;
    otazka?: string;
    /** horní mez posuvníku u odhadu vzdálenosti */
    maxLet?: number;
  }
  let { id, druh, a, b, otazka, maxLet = 600 }: Props = $props();

  const fakta = faktaDvojice(a, b)!;
  const osa = osaDvou(a, b)!;
  const nazevOtazky =
    otazka ?? (druh === 'poradi' ? `Kdo žil dřív: ${a.jmeno}, nebo ${b.jmeno}?` : `Jak daleko od sebe žili ${a.jmeno} a ${b.jmeno}?`);

  let poradi = $state<OdhadPoradi | null>(null);
  let potkali = $state<'ano' | 'ne' | null>(null);
  let pocetLet = $state(50);
  let odkryto = $state(false);
  let oblast = $state<HTMLElement>();

  let hotovyOdhad = $derived(druh === 'poradi' ? poradi !== null : potkali !== null);
  let odhadVzd = $derived<OdhadVzdalenosti>({ potkali: potkali === 'ano', let: pocetLet });
  let vyhodnoceni = $derived(
    !odkryto ? '' : druh === 'poradi' ? hodnotPoradi(poradi!, fakta, a, b) : hodnotVzdalenost(odhadVzd, fakta),
  );

  onMount(() => {
    const s = platnyStavKdoZil(stavBloku(id), druh);
    if (!s) return;
    if (druh === 'poradi') poradi = s.odhad as OdhadPoradi;
    else {
      const o = s.odhad as OdhadVzdalenosti;
      potkali = o.potkali ? 'ano' : 'ne';
      pocetLet = Math.min(maxLet, o.let);
    }
    odkryto = s.odkryto;
  });

  const odhad = () => (druh === 'poradi' ? poradi : { potkali: potkali === 'ano', let: pocetLet });
  const ulozStav = () => hotovyOdhad && ulozStavBloku(id, { odhad: odhad(), odkryto });

  async function odhal() {
    if (!hotovyOdhad) return;
    odkryto = true;
    ulozStav();
    await tick();
    oblast?.focus();
  }

  function znovu() {
    poradi = null;
    potkali = null;
    pocetLet = 50;
    odkryto = false;
    smazStavBloku(id);
  }

  const volbyPoradi: { hodnota: OdhadPoradi; text: string }[] = [
    { hodnota: 'a', text: a.jmeno },
    { hodnota: 'b', text: b.jmeno },
    { hodnota: 'soucasne', text: 'Žili ve stejné době' },
  ];
  const popisky = [zAstro(osa.od), zAstro(osa.do)].map((r) => rokText(r));
  /** Popisek pod pruhem: zleva od začátku pruhu, v pravé polovině osy zprava od jeho konce. */
  const zarovnani = (p: { zacatek: number; sirka: number }) =>
    p.zacatek + p.sirka / 2 > 50
      ? `text-align:right;padding-right:${Math.max(0, 100 - p.zacatek - p.sirka)}%`
      : `padding-left:${p.zacatek}%`;
</script>

<section class="blok kdo-zil obdobi-{a.obdobi}" id={id} aria-labelledby={`${id}-otazka`}>
  <p class="t-nadtitulek blok__nadtitulek">Kdo žil dřív?</p>
  <h3 class="t-h3 blok__otazka" id={`${id}-otazka`}>{nazevOtazky}</h3>

  {#if druh === 'poradi'}
    <div class="volby" role="radiogroup" aria-labelledby={`${id}-otazka`}>
      {#each volbyPoradi as v (v.hodnota)}
        <label class={['volba', poradi === v.hodnota && 'volba--vybrana']}>
          <input class="vizualne-skryte" type="radio" name={`${id}-poradi`} value={v.hodnota} bind:group={poradi} onchange={ulozStav} disabled={odkryto} />
          <span>{v.text}</span>
        </label>
      {/each}
    </div>
  {:else}
    <div class="volby volby--dve" role="radiogroup" aria-label="Potkali se?">
      <label class={['volba', potkali === 'ano' && 'volba--vybrana']}>
        <input class="vizualne-skryte" type="radio" name={`${id}-potkali`} value="ano" bind:group={potkali} onchange={ulozStav} disabled={odkryto} />
        <span>Žili současně</span>
      </label>
      <label class={['volba', potkali === 'ne' && 'volba--vybrana']}>
        <input class="vizualne-skryte" type="radio" name={`${id}-potkali`} value="ne" bind:group={potkali} onchange={ulozStav} disabled={odkryto} />
        <span>Minuli se</span>
      </label>
    </div>
    {#if potkali}
      <div class="posuvnik">
        <label class="blok__popis" for={`${id}-let`}>{potkali === 'ano' ? 'Kolik let žili současně?' : 'Kolik let je dělí?'}</label>
        <div class="posuvnik__radek">
          <input
            id={`${id}-let`}
            type="range"
            min="0"
            max={maxLet}
            step="5"
            bind:value={pocetLet}
            onchange={ulozStav}
            disabled={odkryto}
            aria-valuetext={`asi ${let_(pocetLet)}`}
          />
          <output class="t-ovladani-l t-letopocet" for={`${id}-let`}>{let_(pocetLet)}</output>
        </div>
      </div>
    {/if}
  {/if}

  {#if !odkryto}
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={odhal} disabled={!hotovyOdhad}>Odhalit</button>
  {:else}
    <div class="blok__zpetna" role="region" aria-label="Odhalení" aria-live="polite" tabindex="-1" bind:this={oblast}>
      <p class="blok__zpetna-titulek">{fakta.vzdalenost.text}</p>
      <p>{vyhodnoceni.replace(fakta.vzdalenost.text, '').replace(/ {2,}/g, ' ').trim()}</p>
      {#if fakta.vetaOVeku}<p>{fakta.vetaOVeku}</p>{/if}

      <figure class="osa" aria-label={`${a.jmeno} ${a.zivotText}, ${b.jmeno} ${b.zivotText}`}>
        {#each [{ o: a, p: osa.a }, { o: b, p: osa.b }] as r (r.o.id)}
          <div class="osa__radek obdobi-{r.o.obdobi}" aria-hidden="true">
            <div class="osa__pruh" style={`margin-left:${r.p.zacatek}%;width:${r.p.sirka}%`}></div>
            <p class="osa__popis t-popisek" style={zarovnani(r.p)}>
              <strong>{r.o.jmeno}</strong> <span class="t-letopocet">{r.o.zivotText}</span>
            </p>
          </div>
        {/each}
        <div class="osa__meze t-popisek t-letopocet" aria-hidden="true"><span>{popisky[0]}</span><span>{popisky[1]}</span></div>
      </figure>
    </div>
    <div class="blok__akce">
      <a class="blok__tl blok__tl--vedlejsi" href={fakta.odkazMapy}>Ukázat na mapě v roce {rokText(fakta.rokMapy)}</a>
      <button class="blok__tl blok__tl--tiche" type="button" onclick={znovu}>Zkusit znovu</button>
    </div>
  {/if}
</section>

<style>
  .volby { display: grid; gap: var(--s-3); margin-bottom: var(--s-5); }
  @media (min-width: 700px) {
    .volby { grid-template-columns: repeat(3, 1fr); }
    .volby--dve { grid-template-columns: repeat(2, 1fr); }
  }
  .volba {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--paper);
    font-size: var(--fs-ovladani-l);
    text-align: center;
    cursor: pointer;
  }
  .volba:hover { border-color: var(--muted); }
  .volba:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  .volba--vybrana { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .posuvnik { margin: 0 0 var(--s-5); }
  .posuvnik__radek { display: flex; align-items: center; gap: var(--s-4); }
  .posuvnik input[type='range'] {
    flex: 1;
    min-width: 0;
    height: 44px;
    margin: 0;
    accent-color: var(--ink);
    cursor: pointer;
  }
  .posuvnik input[type='range']:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
  .posuvnik output { min-width: 5.5em; text-align: right; }

  .osa { margin: var(--s-5) 0 0; }
  .osa__radek { margin-bottom: var(--s-3); }
  .osa__pruh { height: 10px; border-radius: var(--r-full); background: var(--pc); }
  .osa__popis { margin: var(--s-1) 0 0; color: var(--ink); }
  .osa__popis strong { font-weight: 600; }
  .osa__popis .t-letopocet { color: var(--ink-2); }
  .osa__meze { display: flex; justify-content: space-between; padding-top: var(--s-2); border-top: 1px solid var(--pc-soft, var(--rule)); color: var(--ink-2); }
</style>
