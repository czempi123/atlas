<script lang="ts">
  // Dvě půlky: kresba k Epiktétovu dělení (cesta 5, krok 3). Tři karty z koše Zčásti; každou jde roztrhnout
  // na půlku, která je moje dílo, a na půlku, o které rozhoduje někdo nebo něco jiného. U pravé půlky pak student
  // zkouší, co všechno se může stát. Levá se nemění. Přepínač rámu vybírá kartu; co už je roztržené, zůstane.
  // Rám dává Kresba.svelte; nic tu neběží samo, proto kresba nemá tlačítko pohybu. Texty: src/lib/dve-pulky.ts.
  // Podklad: docs/podklady/celek-3-co-mam-v-rukou.md › Tvrzení: Epiktétos (Rukojeť 1 a 5).
  // Použití v MDX: <DvePulky id="dve-pulky-karta" />
  import { tick } from 'svelte';
  import Kresba from './Kresba.svelte';
  import { KARTY, NAZEV_MOJI, karta, obrysPulky, okolnost, popisKarty } from '../../lib/dve-pulky';

  interface Props {
    id: string;
    /** barva období (1–8) */
    obdobi?: number;
  }
  let { id, obdobi = 2 }: Props = $props();

  const POHLEDY = KARTY.map((k) => ({ id: k.id, nazev: k.nazev }));
  const LEVA = obrysPulky('leva');
  const PRAVA = obrysPulky('prava');

  let pohled = $state<string>(KARTY[0].id);
  /** které karty už student roztrhl a co má na které zvolené vpravo */
  let roztrzene = $state<Record<string, boolean>>({});
  let zvolene = $state<Record<string, number>>({});

  let k = $derived(karta(pohled));
  let roztrzena = $derived(!!roztrzene[k.id]);
  let index = $derived(zvolene[k.id] ?? 0);
  let vpravo = $derived(okolnost(k, index));

  /** Řádky věty stojí kolem středu půlky. */
  const yRadku = (pocet: number, i: number) => 136 - (pocet - 1) * 9.5 + i * 19;

  async function roztrhni() {
    roztrzene[k.id] = true;
    // Tlačítko zmizí; fokus z klávesnice přejde na první volbu, ať se neztratí.
    await tick();
    document.getElementById(`${id}-okolnost-${index}`)?.focus({ preventScroll: true });
  }
</script>

<Kresba {id} {obdobi} nadtitulek="Zkus si to" nazev="Roztrhni kartu" pohledy={POHLEDY} bind:pohled popis={popisKarty(k, roztrzena, index)} maPohyb={false}>
  {#snippet kresba()}
    <rect class="k-tma" width="340" height="240" />
    <text class="k-popisek" x="170" y="32" text-anchor="middle">{k.titulek}</text>

    <g class="pulka pulka-leva" class:roztrzena>
      <path class="list" d={LEVA} />
      <text class="stitek" x="100" y="76" text-anchor="middle">{NAZEV_MOJI}</text>
      {#each k.moje as radek, i (i)}
        <text class="veta" x="100" y={yRadku(k.moje.length, i)} text-anchor="middle">{radek}</text>
      {/each}
    </g>
    <g class="pulka pulka-prava" class:roztrzena>
      <path class="list" d={PRAVA} />
      <text class="stitek" x="240" y="76" text-anchor="middle">{k.cizi}</text>
      {#each vpravo.radky as radek, i (i)}
        <text class="veta" x="240" y={yRadku(vpravo.radky.length, i)} text-anchor="middle">{radek}</text>
      {/each}
    </g>
  {/snippet}

  {#snippet ovladani()}
    {#if roztrzena}
      <div class="k-volba">
        <span class="k-volba__popisek" id="{id}-co">Co se stane na druhé půlce</span>
        <div class="k-prepinac" role="radiogroup" aria-labelledby="{id}-co">
          {#each k.okolnosti as moznost, i (moznost.id)}
            <label>
              <input type="radio" id="{id}-okolnost-{i}" name="{id}-okolnost" checked={index === i} onchange={() => (zvolene[k.id] = i)} />
              <span>{moznost.nazev}</span>
            </label>
          {/each}
        </div>
      </div>
    {:else}
      <div class="blok__akce">
        <button type="button" class="blok__tl blok__tl--vedlejsi" onclick={roztrhni}>Roztrhnout kartu</button>
      </div>
    {/if}
  {/snippet}
</Kresba>

<style>
  /* Půlky jsou z jednoho listu: dokud je karta celá, mají stejnou barvu i obrys a šev není vidět. */
  .pulka { transform-box: fill-box; transform-origin: center; transition: transform var(--pohyb-kamera) cubic-bezier(0.22, 0.61, 0.36, 1); }
  .list { fill: var(--k-svetlo); stroke: var(--k-svetlo); stroke-width: 1; stroke-linejoin: round; transition: fill var(--pohyb), stroke var(--pohyb); }
  .veta { font-family: var(--font-serif); font-size: 15px; font-style: italic; fill: var(--k-tma); transition: fill var(--pohyb); }
  .stitek { font-family: var(--font-sans); font-size: 11.5px; font-weight: 600; fill: var(--k-stin); opacity: 0; transition: opacity var(--pohyb), fill var(--pohyb); }

  /* Roztržená: levá půlka zůstane světlá, pravá ustoupí do barvy desky. */
  .pulka-leva.roztrzena { transform: translate(-7px, -2px) rotate(-2deg); }
  .pulka-prava.roztrzena { transform: translate(7px, 3px) rotate(2deg); }
  .roztrzena .stitek { opacity: 1; }
  .pulka-prava.roztrzena .list { fill: var(--k-stin); stroke: var(--k-stin); }
  .pulka-prava.roztrzena .veta,
  .pulka-prava.roztrzena .stitek { fill: var(--k-svetlo); }
</style>
