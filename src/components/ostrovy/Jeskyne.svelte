<script lang="ts">
  // Jeskyně: vlastní kresba Platónovy jeskyně ve dvou pohledech. „Pohled vězňů“ ukazuje stěnu, po které
  // přecházejí stíny nesených věcí (student sedí mezi vězni); „Pohled z boku“ ukazuje oheň, zídku, nosiče,
  // vězně a stěnu. Stíny se hýbou, pohyb jde zastavit; při omezeném pohybu zůstává kresba stát.
  // Text pod kresbou říká totéž slovy a slouží čtečkám jako popis obrázku. Nic se neukládá.
  // Podklad: Ústava VII, 514a–515b (docs/podklady/celek-4-co-je-skutecne.md › Vstupní scéna, řádky 1–6).
  // Použití v MDX: <Jeskyne id="jeskyne-pohledy" />
  import { onMount } from 'svelte';
  import { omezenyPohyb } from '../../lib/pohyb';
  import { POHLEDY, POPISY, PRUVOD, ROZESTUP, delkaPruvodu, stinNaStene, type Pohled } from '../../lib/jeskyne';

  interface Props {
    id: string;
    /** barva období (1–8) */
    obdobi?: number;
  }
  let { id, obdobi = 1 }: Props = $props();

  let pohled = $state<Pohled>('vezni');
  /** smí se kresba hýbat (student nemá zapnutý omezený pohyb) */
  let smiPohyb = $state(false);
  let bezi = $state(false);

  onMount(() => {
    smiPohyb = !omezenyPohyb();
    bezi = smiPohyb;
  });

  // Průvod věcí dvakrát za sebou: posun o jednu délku průvodu se plynule opakuje.
  // Začíná kousek před levým okrajem, aby stojící kresba neměla věc přímo nad stínem hlavy.
  const veci = [...PRUVOD, ...PRUVOD].map((druh, i) => ({ druh, x: -13 + i * ROZESTUP }));
  const posun = delkaPruvodu();

  // Pohled z boku: stíny na stěně vycházejí z přímek od ohně přes věc nad zídkou a přes hlavu vězně.
  const OHEN = { x: 36, y: 120 };
  const STENA = 320;
  const vec = { nahore: stinNaStene(OHEN, { x: 116, y: 115 }, STENA)!, dole: stinNaStene(OHEN, { x: 116, y: 140 }, STENA)! };
  const hlava = stinNaStene(OHEN, { x: 242, y: 179 }, STENA)!;
  const zidka = stinNaStene(OHEN, { x: 131, y: 150 }, STENA)!;
</script>

<figure class="jeskyne obdobi-{obdobi}" class:pohyb={smiPohyb} class:bezi {id} style="--j-posun: -{posun}px">
  <figcaption class="hlava">
    <p class="t-nadtitulek nadtitulek">Podívej se</p>
    <p class="t-h3 nazev" id="{id}-nazev">Dva pohledy do jeskyně</p>
  </figcaption>

  <div class="prepinac" role="radiogroup" aria-labelledby="{id}-nazev">
    {#each POHLEDY as p (p.id)}
      <label>
        <input type="radio" name="{id}-pohled" value={p.id} bind:group={pohled} />
        <span>{p.nazev}</span>
      </label>
    {/each}
  </div>

  <svg class="kresba" viewBox="0 0 340 240" role="img" aria-describedby="{id}-popis" aria-label={POHLEDY.find((p) => p.id === pohled)?.nazev}>
    <defs>
      <radialGradient id="{id}-sero" cx="50%" cy="36%" r="78%">
        <stop offset="0.55" class="sero0" />
        <stop offset="1" class="sero1" />
      </radialGradient>
    </defs>

    {#if pohled === 'vezni'}
      <g class="pohled-vezni">
        <rect class="stena" width="340" height="240" />
        <rect width="340" height="240" fill="url(#{id}-sero)" />
        <rect class="mihot" width="340" height="240" />
        <g class="pruvod">
          {#each veci as v, i (i)}
            <g class="stin" transform="translate({v.x} 150)">
              <rect x="-1.5" y="-2" width="3" height="34" />
              {#if v.druh === 'dzban'}
                <path d="M-9,0 C-20,-10 -20,-30 -9,-38 L-7,-46 L-11,-50 L11,-50 L7,-46 L9,-38 C20,-30 20,-10 9,0 Z" />
                <path class="ucho" d="M-11,-37 C-23,-40 -23,-24 -16,-21" />
                <path class="ucho" d="M11,-37 C23,-40 23,-24 16,-21" />
              {:else if v.druh === 'soska'}
                <circle cx="0" cy="-48" r="6.5" />
                <path d="M-8,-40 L8,-40 L11,0 L-11,0 Z" />
                <path d="M-8,-38 L-18,-24 L-14,-21 L-6,-31 Z" />
                <path d="M8,-38 L18,-24 L14,-21 L6,-31 Z" />
                <g class="ozvena">
                  <path d="M14,-56 q6,8 0,16" />
                  <path d="M21,-60 q9,12 0,24" />
                  <path d="M28,-64 q12,16 0,32" />
                </g>
              {:else if v.druh === 'kun'}
                <rect x="-22" y="-31" width="31" height="15" rx="5" />
                <rect x="-21" y="-19" width="4" height="19" />
                <rect x="-13" y="-19" width="4" height="19" />
                <rect x="-1" y="-19" width="4" height="19" />
                <rect x="5" y="-19" width="4" height="19" />
                <path d="M3,-30 L13,-47 L18,-52 L19,-47 L25,-43 L24,-38 L17,-39 L11,-22 Z" />
                <path d="M-21,-29 C-31,-27 -31,-14 -28,-7 L-25,-9 C-27,-16 -26,-23 -21,-24 Z" />
              {:else if v.druh === 'kladivo'}
                <rect x="-2" y="-42" width="4" height="42" />
                <rect x="-14" y="-52" width="28" height="12" rx="2" />
              {:else}
                <ellipse cx="-1" cy="-22" rx="15" ry="10" />
                <circle cx="13" cy="-33" r="6" />
                <path d="M18,-35 L28,-32 L18,-29 Z" />
                <path d="M-13,-25 L-28,-36 L-24,-17 Z" />
                <rect x="-5" y="-14" width="2" height="14" />
                <rect x="2" y="-14" width="2" height="14" />
              {/if}
            </g>
          {/each}
        </g>
        <!-- Stín zídky a nad ním stíny hlav vězňů. -->
        <rect class="stin" y="178" width="340" height="62" />
        {#each [44, 170, 296] as x (x)}
          <circle class="stin" cx={x} cy="170" r="11" />
          <ellipse class="stin" cx={x} cy="184" rx="22" ry="9" />
        {/each}
        <!-- Vězni zezadu: student sedí mezi nimi. -->
        {#each [44, 170, 296] as x (x)}
          <g class="tma">
            <circle cx={x} cy="216" r="23" />
            <ellipse cx={x} cy="254" rx="54" ry="26" />
          </g>
        {/each}
      </g>
    {:else}
      <g class="pohled-bok">
        <rect class="stin" width="340" height="240" />
        <path class="svetlo" d="M{OHEN.x},{OHEN.y} L{STENA},44 L{STENA},{zidka} Z" />
        <path class="tma" d="M0,0 H340 V24 C316,34 300,20 276,30 C246,42 222,22 190,32 C160,42 140,26 108,34 C76,42 44,30 0,40 Z" />
        <path class="tma" d="M0,140 H64 L80,198 H150 L184,218 H340 V240 H0 Z" />
        <rect class="tma" x={STENA + 8} y="24" width="12" height="216" />
        <line class="paprsek" x1={OHEN.x} y1={OHEN.y} x2={STENA} y2={vec.nahore} />
        <line class="paprsek" x1={OHEN.x} y1={OHEN.y} x2={STENA} y2={vec.dole} />
        <line class="paprsek" x1={OHEN.x} y1={OHEN.y} x2={STENA} y2={zidka} />

        <!-- Oheň na vyvýšeném místě za zády vězňů. -->
        <circle class="zare" cx={OHEN.x} cy={OHEN.y} r="32" />
        <g transform="translate({OHEN.x} 139)">
          <path class="plamen" d="M0,0 C-13,-5 -14,-19 -5,-31 C-3,-22 3,-21 4,-36 C12,-26 15,-12 9,-4 C7,-1 3,0 0,0 Z" />
          <path class="poleno" d="M-12,3 L12,-1 M-12,-1 L12,3" />
        </g>

        <!-- Nosiči na cestě za zídkou; nad zídku přečnívá jen to, co nesou. -->
        <g class="postava">
          <circle cx="89" cy="163" r="6" />
          <path d="M83,170 h12 l1.5,28 h-15 z" />
          <circle cx="108" cy="161" r="6.5" />
          <path d="M102,168 h12 l1.5,30 h-15 z" />
          <path class="paze" d="M111,172 L115,166" />
        </g>
        <g class="nese">
          <line class="tyc" x1="115" y1="167" x2="116" y2="140" />
          <path class="postava" transform="translate(116 140) scale(0.5)" d="M-9,0 C-20,-10 -20,-30 -9,-38 L-7,-46 L-11,-50 L11,-50 L7,-46 L9,-38 C20,-30 20,-10 9,0 Z" />
        </g>
        <rect class="postava" x="128" y="150" width="7" height="48" />

        <!-- Vězni: sedí zády k ohni, pouta na krku a na nohou. -->
        {#each [242, 284] as x (x)}
          <g class="postava">
            <circle cx={x} cy="186" r="7" />
            <path d="M{x - 6},194 h12 l2,20 h-16 z" />
            <rect x={x + 4} y="208" width="24" height="6" rx="2.5" />
            <rect x={x + 24} y="203" width="5" height="11" rx="2" />
          </g>
          <path class="pouto" d="M{x - 2},195 L{x - 13},218 M{x + 25},214 L{x + 20},218" />
        {/each}

        <!-- Stěna a stíny na ní: věc nad zídkou, hlavy vězňů a dole stín zídky. -->
        <rect class="stena" x={STENA} y="40" width="8" height="178" />
        <rect class="tma stin-veci" x={STENA} y={vec.nahore} width="8" height={vec.dole - vec.nahore} />
        <rect class="tma" x={STENA} y={hlava} width="8" height={218 - hlava} />

        <text class="popisek" x="36" y="233" text-anchor="middle">oheň</text>
        <text class="popisek" x="112" y="233" text-anchor="middle">nosiči za zídkou</text>
        <text class="popisek" x="266" y="233" text-anchor="middle">vězni</text>
        <text class="popisek" x="336" y="233" text-anchor="end">stěna</text>
      </g>
    {/if}
  </svg>

  <p class="popis" id="{id}-popis" aria-live="polite">{POPISY[pohled]}</p>

  {#if smiPohyb}
    <button type="button" class="blok__tl blok__tl--tiche" onclick={() => (bezi = !bezi)}>
      {bezi ? 'Zastavit pohyb' : 'Pustit pohyb'}
    </button>
  {/if}
</figure>

<style>
  .jeskyne {
    /* Tři tóny kresby: osvětlená stěna, stín a tma jeskyně. Vycházejí z desky období, stejně jako fotografie. */
    --j-stena: var(--pc-on-plate, var(--surface));
    --j-stin: var(--pc-plate, var(--ink-2));
    --j-tma: color-mix(in srgb, var(--pc-plate, var(--ink)) 42%, black);
    max-width: 520px;
    margin: var(--s-6) 0;
    padding: var(--s-3);
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
    scroll-margin-top: calc(var(--hlavicka) + var(--s-4));
  }
  @media (min-width: 700px) {
    .jeskyne { padding: var(--s-4); }
  }
  .hlava { margin: 0 0 var(--s-3); }
  .nadtitulek { margin: 0 0 var(--s-1); color: var(--pc, var(--ink)); }
  .nazev { margin: 0; }

  .prepinac {
    display: inline-flex;
    gap: var(--s-1);
    margin: 0 0 var(--s-3);
    padding: 3px;
    border: 1px solid var(--rule);
    border-radius: var(--r-full);
    background: var(--sunk);
  }
  .prepinac label { position: relative; display: block; }
  .prepinac input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; }
  .prepinac span {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 0 var(--s-4);
    border-radius: var(--r-full);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 600;
    color: var(--ink-2);
    white-space: nowrap;
  }
  .prepinac input:checked + span { background: var(--ink); color: var(--paper); }
  .prepinac input:focus-visible + span { outline: 2px solid var(--ink); outline-offset: 2px; }

  .kresba { display: block; width: 100%; height: auto; border-radius: var(--r-sm); }
  .stena { fill: var(--j-stena); }
  .stin { fill: var(--j-stin); }
  .tma { fill: var(--j-tma); }
  .sero0 { stop-color: var(--j-stin); stop-opacity: 0; }
  .sero1 { stop-color: var(--j-stin); stop-opacity: 0.5; }
  .mihot { fill: var(--j-stin); opacity: 0; }
  .ucho { fill: none; stroke: var(--j-stin); stroke-width: 3.5; stroke-linecap: round; }
  .ozvena path { fill: none; stroke: var(--j-stin); stroke-width: 2; stroke-linecap: round; }

  .svetlo { fill: var(--j-stena); opacity: 0.1; }
  .paprsek { stroke: var(--j-stena); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.6; }
  .zare { fill: var(--j-stena); opacity: 0.14; }
  .plamen { fill: var(--j-stena); transform-box: fill-box; transform-origin: 50% 100%; }
  .poleno { fill: none; stroke: var(--j-stena); stroke-width: 3; stroke-linecap: round; }
  .postava { fill: var(--j-stena); }
  .paze { fill: none; stroke: var(--j-stena); stroke-width: 2.4; stroke-linecap: round; }
  .tyc { stroke: var(--j-stena); stroke-width: 1.6; stroke-linecap: round; }
  .pouto { fill: none; stroke: var(--j-stena); stroke-width: 1.4; stroke-dasharray: 2 1.6; }
  .popisek { font-family: var(--font-sans); font-size: 11.5px; font-weight: 600; fill: var(--j-stena); }

  .popis {
    margin: var(--s-3) 0 0;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    line-height: 1.5;
    color: var(--ink-2);
  }
  .jeskyne :global(.blok__tl) { margin-top: var(--s-3); }

  /* Pohyb jen tam, kde ho student nemá omezený; zastavený zůstane stát tam, kde byl. */
  .pohyb .pruvod { animation: pruvod 44s linear infinite paused; }
  .pohyb .mihot { animation: mihot 2.3s ease-in-out infinite paused; }
  .pohyb .ozvena path { animation: ozvena 2.6s ease-out infinite paused; }
  .pohyb .ozvena path:nth-child(2) { animation-delay: 0.25s; }
  .pohyb .ozvena path:nth-child(3) { animation-delay: 0.5s; }
  .pohyb .plamen { animation: plamen 1.1s ease-in-out infinite alternate paused; }
  .pohyb .zare { animation: zare 1.1s ease-in-out infinite alternate paused; }
  .pohyb .nese { animation: nese 1.8s ease-in-out infinite alternate paused; }
  .pohyb .stin-veci { animation: stin-veci 1.8s ease-in-out infinite alternate paused; }
  .pohyb.bezi :is(.pruvod, .mihot, .ozvena path, .plamen, .zare, .nese, .stin-veci) { animation-play-state: running; }

  @keyframes pruvod { to { transform: translateX(var(--j-posun)); } }
  @keyframes mihot { 0%, 100% { opacity: 0; } 22% { opacity: 0.09; } 38% { opacity: 0.02; } 61% { opacity: 0.11; } 78% { opacity: 0.03; } }
  @keyframes ozvena { 0% { opacity: 0; } 25% { opacity: 1; } 70%, 100% { opacity: 0; } }
  @keyframes plamen { from { transform: scale(1, 1); } to { transform: scale(0.92, 1.14); } }
  @keyframes zare { from { opacity: 0.1; } to { opacity: 0.2; } }
  @keyframes nese { to { transform: translateY(-3px); } }
  @keyframes stin-veci { to { transform: translateY(-8px); } }
</style>
