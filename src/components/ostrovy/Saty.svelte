<script lang="ts">
  // Stejné šaty, jiné světlo: kresba k šatům z roku 2015 (cesta 1, krok 6). Šaty mají pořád stejné dvě barvy,
  // modrou a hnědou, jako body té fotky. Posuvník mění jen světlo kolem: chladné denní (okno), šedé okolí,
  // teplé umělé (lampa). Student si zkusí, co s barvou udělá okolí. Rám dává Kresba.svelte; nic tu neběží samo,
  // proto kresba nemá tlačítko pohybu. Barvy jsou vlastní (src/lib/saty.ts): kresba je o barvě, tři tóny období nestačí.
  // Podklad: docs/podklady/celek-1-pravda.md › Tvrzení: nový případ (šaty, 2015), bod 4. Fotku atlas nepřebírá.
  // Použití v MDX: <Saty id="saty-svetlo" />
  import Kresba from './Kresba.svelte';
  import { BARVY_SATU, STUPNE_SVETLA, VYCHOZI_STUPEN, okoli } from '../../lib/saty';

  interface Props {
    id: string;
    /** barva období (1–8) */
    obdobi?: number;
  }
  let { id, obdobi = 1 }: Props = $props();

  const NAZEV = 'Stejné šaty, jiné světlo';
  const POHLEDY = [{ id: 'saty', nazev: NAZEV }];
  let pohled = $state<string>('saty');
  let stupen = $state(VYCHOZI_STUPEN);
  let o = $derived(okoli(stupen));

  /** Obrys šatů; pruhy se do něj ořezávají. */
  const STRIH = 'M150,48 L160,48 Q170,66 180,48 L190,48 L198,82 L189,112 L216,208 L124,208 L151,112 L142,82 Z';
  /** Horní hrany hnědých pruhů: ramena, pas a tři volány sukně. */
  const PRUHY = [48, 104, 140, 168, 198];
</script>

<Kresba {id} {obdobi} nadtitulek="Zkus si to" nazev={NAZEV} pohledy={POHLEDY} bind:pohled popis={STUPNE_SVETLA[stupen].popis} maPohyb={false}>
  {#snippet kresba()}
    <defs>
      <clipPath id="{id}-strih"><path d={STRIH} /></clipPath>
    </defs>
    <rect class="okoli stena" width="340" height="212" style:fill={o.stena} />
    <rect class="okoli podlaha" y="212" width="340" height="28" style:fill={o.podlaha} />

    <!-- Chladné denní světlo: okno. -->
    <g class="zdroj okno" style:opacity={o.okno}>
      <rect x="24" y="30" width="62" height="86" rx="2" fill="#eaf1ff" />
      <path d="M55,30 V116 M24,73 H86 M24,30 H86 V116 H24 Z" fill="none" stroke="#000" stroke-opacity="0.32" stroke-width="2.5" />
    </g>
    <!-- Teplé umělé světlo: lampa. -->
    <g class="zdroj lampa" style:opacity={o.lampa}>
      <circle cx="290" cy="62" r="28" fill="#fff4c2" opacity="0.4" />
      <path d="M290,0 V30" fill="none" stroke="#000" stroke-opacity="0.4" stroke-width="2" />
      <path d="M272,56 L280,30 L300,30 L308,56 Z" fill="#000" fill-opacity="0.4" />
      <circle cx="290" cy="60" r="8" fill="#fff4c2" />
    </g>

    <!-- Ramínko a šaty. Barvy šatů jsou pořád tytéž. -->
    <path d="M170,20 V34 M146,50 L170,34 L194,50" fill="none" stroke="#000" stroke-opacity="0.38" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <g class="saty" clip-path="url(#{id}-strih)">
      <rect class="saty-modra" x="110" y="40" width="120" height="176" fill={BARVY_SATU.modra} />
      {#each PRUHY as y (y)}
        <rect class="saty-hneda" x="110" {y} width="120" height="10" fill={BARVY_SATU.hneda} />
      {/each}
    </g>
  {/snippet}

  {#snippet ovladani()}
    <div class="k-posuvnik">
      <label for="{id}-svetlo">Posuň: mění se jen světlo kolem</label>
      <input id="{id}-svetlo" type="range" min="0" max={STUPNE_SVETLA.length - 1} step="1" bind:value={stupen} aria-valuetext={STUPNE_SVETLA[stupen].nazev} />
      <output for="{id}-svetlo">{stupen + 1} z {STUPNE_SVETLA.length} · {STUPNE_SVETLA[stupen].nazev}</output>
    </div>
    <p class="vzorky">
      <span class="vzorek" style:background={BARVY_SATU.modra}></span>
      <span class="vzorek" style:background={BARVY_SATU.hneda}></span>
      Barvy šatů: pořád tyhle dvě.
    </p>
  {/snippet}
</Kresba>

<style>
  .okoli { transition: fill var(--pohyb-kamera); }
  .zdroj { transition: opacity var(--pohyb-kamera); }

  .vzorky {
    display: flex;
    align-items: center;
    gap: var(--s-2);
    margin: var(--s-3) 0 0;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    color: var(--ink-2);
  }
  .vzorek { flex: none; width: 24px; height: 24px; border-radius: var(--r-sm); }
</style>
