<script lang="ts">
  // Malý pás období: přepínač období se závorkou okna řeky a značkou zvoleného roku.
  // Tlačítko Přehled otevře celých 2 600 let s hustotou myslitelů pro rychlý skok.
  import type { ObdobiV } from '../../lib/mapa-vstup';
  import { naAstro } from '../../lib/cas-mapy';
  import { rok as rokText } from '../../lib/casy';

  interface Props {
    obdobi: ObdobiV[];
    aktivni: number;
    rok: number;
    okno: [number, number];
    hustota: { od: number; pocet: number }[];
    dejiny: [number, number];
    rozsah: [number, number];
    onvyber: (id: number) => void;
    onskok: (rok: number) => void;
  }
  let { obdobi, aktivni, rok, okno, hustota, dejiny, rozsah, onvyber, onskok }: Props = $props();

  const plate = (n: number) => `var(--period-${n}-plate)`;
  const mix = (a: number, b: number) => `color-mix(in srgb, ${plate(a)} 50%, ${plate(b)})`;
  const pozadi = (n: number) => {
    const zac = n > 1 ? mix(n - 1, n) : plate(n);
    const kon = n < 8 ? mix(n, n + 1) : plate(n);
    return `linear-gradient(90deg, ${zac} 0%, ${plate(n)} 22%, ${plate(n)} 78%, ${kon} 100%)`;
  };
  const podil = (r: number, od: number, do_: number) => Math.min(1, Math.max(0, (naAstro(r) - naAstro(od)) / (naAstro(do_) - naAstro(od))));

  let akt = $derived(obdobi.find((o) => o.id === aktivni)!);
  let zavorka = $derived({ l: podil(okno[0], akt.okno.od, akt.okno.do), p: podil(okno[1], akt.okno.od, akt.okno.do) });
  let znacka = $derived(podil(rok, akt.okno.od, akt.okno.do));

  let prehled = $state(false);
  let tlacitko: HTMLButtonElement;
  const maxPocet = $derived(Math.max(1, ...hustota.map((h) => h.pocet)));
  const obdobiRoku = (r: number) => obdobi.find((o) => r >= o.okno.od && r <= o.okno.do)?.id ?? 8;
  const W = 1000;
  const x = (r: number) => podil(r, dejiny[0], dejiny[1]) * W;
  const stoleti = $derived.by(() => {
    const out: number[] = [];
    for (let r = Math.ceil(rozsah[0] / 100) * 100; r <= rozsah[1]; r += 100) out.push(r === 0 ? 1 : r);
    return out;
  });

  function skok(r: number) {
    onskok(r);
    prehled = false;
    tlacitko?.focus();
  }
  function klikGraf(e: MouseEvent) {
    const svg = e.currentTarget as SVGSVGElement;
    const b = svg.getBoundingClientRect();
    const f = (e.clientX - b.left) / b.width;
    const a = naAstro(dejiny[0]) + f * (naAstro(dejiny[1]) - naAstro(dejiny[0]));
    let r = Math.round(a);
    r = r <= 0 ? r - 1 : r;
    if (r < rozsah[0] || r > rozsah[1]) return;
    skok(r);
  }
  function klavesa(e: KeyboardEvent) {
    if (e.key === 'Escape' && prehled) {
      prehled = false;
      tlacitko?.focus();
    }
  }
</script>

<svelte:window onkeydown={klavesa} />

<div class="pas">
  <nav class="pas__segmenty" aria-label="Období">
    {#each obdobi as o (o.id)}
      {@const siroky = o.id === aktivni}
      <button
        type="button"
        class="mseg"
        class:mseg--aktivni={siroky}
        style:--pozadi={pozadi(o.id)}
        style:--na-desce="var(--period-{o.id}-on-plate)"
        aria-current={siroky ? 'true' : undefined}
        aria-disabled={!o.otevrene ? 'true' : undefined}
        title={o.otevrene ? `${o.nazev} · ${o.oknoText}` : `${o.nazev} · ${o.oknoText} · připravujeme`}
        onclick={() => o.otevrene && onvyber(o.id)}
      >
        <svg viewBox="0 0 {siroky ? 180 : 60} 26" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d={siroky ? o.ornament.siroky : o.ornament.uzky} fill="none" stroke="currentColor" stroke-width="1" opacity="0.55" />
        </svg>
        <span class="mseg__text">{siroky ? `${o.id} · ${o.kratce}` : o.id}</span>
        <span class="vh">{siroky ? '' : o.nazev}</span>
        {#if siroky}
          <span class="zavorka" style:left="{zavorka.l * 100}%" style:width="{(zavorka.p - zavorka.l) * 100}%" aria-hidden="true"></span>
          <span class="znacka" style:left="{znacka * 100}%" aria-hidden="true"></span>
        {/if}
      </button>
    {/each}
  </nav>
  <button type="button" class="pas__prehled" bind:this={tlacitko} aria-expanded={prehled} aria-controls="prehled-dejin" onclick={() => (prehled = !prehled)}>
    Přehled
  </button>

  {#if prehled}
    <div class="prehled" id="prehled-dejin" role="dialog" aria-label="Přehled dějin: skok na rok">
      <p class="prehled__nadpis">2 600 let myšlení · výška = kolik myslitelů v atlasu žije</p>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <svg class="prehled__graf" viewBox="0 0 {W} 70" preserveAspectRatio="none" onclick={klikGraf} role="img" aria-label="Hustota myslitelů v čase">
        {#each obdobi as o (o.id)}
          <rect x={x(o.okno.od)} y="62" width={Math.max(1, x(Math.min(o.okno.do, obdobi[o.id]?.okno.od ?? o.okno.do)) - x(o.okno.od))} height="8" fill="var(--period-{o.id})" opacity={o.otevrene ? 0.9 : 0.35} />
        {/each}
        {#each hustota as h}
          {#if h.pocet}
            <rect x={x(h.od)} y={58 - (h.pocet / maxPocet) * 52} width={W / hustota.length - 1} height={(h.pocet / maxPocet) * 52} fill="var(--period-{obdobiRoku(h.od + 12)})" />
          {/if}
        {/each}
        <line x1={x(rok)} x2={x(rok)} y1="0" y2="70" stroke="var(--ink)" stroke-width="2" vector-effect="non-scaling-stroke" />
      </svg>
      <div class="prehled__osa" aria-hidden="true">
        <span>{rokText(dejiny[0])}</span><span>1 n. l.</span><span>dnes</span>
      </div>
      <ul class="prehled__stoleti" aria-label="Skok na rok">
        {#each stoleti as r}
          <li><button type="button" onclick={() => skok(r)} aria-current={Math.abs(naAstro(r) - naAstro(rok)) < 50 ? 'true' : undefined}>{rokText(r)}</button></li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .pas { position: relative; display: flex; align-items: center; gap: var(--s-2); height: 100%; }
  .pas__segmenty { display: flex; flex: 1; height: 28px; border-radius: var(--r-xs); }
  .mseg {
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    padding: 0;
    border: 0;
    background: var(--pozadi);
    color: var(--na-desce);
    font-family: var(--font-sans);
    cursor: pointer;
  }
  .mseg:first-child { border-radius: var(--r-xs) 0 0 var(--r-xs); }
  .mseg:last-child { border-radius: 0 var(--r-xs) var(--r-xs) 0; }
  .mseg[aria-disabled='true'] { cursor: default; filter: saturate(0.35); }
  .mseg[aria-disabled='true'] .mseg__text { opacity: 0.75; }
  .mseg--aktivni { flex: 3.2 1 0; box-shadow: inset 0 0 0 1.5px var(--ink); cursor: default; }
  .mseg:not(.mseg--aktivni):not([aria-disabled='true']):hover { filter: brightness(1.08); }
  .mseg svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .mseg__text {
    position: relative;
    display: grid;
    place-items: center;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    font-variant-numeric: lining-nums;
    white-space: nowrap;
    overflow: hidden;
  }
  .mseg:focus-visible { outline-offset: 2px; z-index: 1; }
  .zavorka {
    position: absolute;
    bottom: -7px;
    height: 5px;
    border: 1.5px solid var(--ink);
    border-top: 0;
    border-radius: 0 0 2px 2px;
    pointer-events: none;
  }
  .znacka { position: absolute; top: 62%; bottom: -8px; width: 2px; margin-left: -1px; background: var(--ink); pointer-events: none; }
  .pas__prehled {
    flex: none;
    height: 28px;
    padding: 0 var(--s-3);
    border: 1px solid var(--rule);
    border-radius: var(--r-xs);
    background: var(--surface);
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  .pas__prehled[aria-expanded='true'] { border-color: var(--ink); }
  .prehled {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    z-index: 30;
    padding: var(--s-3) var(--s-4) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-sm);
    background: var(--surface);
    box-shadow: var(--stin-mapa);
    font-family: var(--font-sans);
  }
  .prehled__nadpis { margin: 0 0 var(--s-2); font-size: 13px; color: var(--muted); }
  .prehled__graf { width: 100%; height: 70px; cursor: pointer; }
  .prehled__osa { display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); }
  .prehled__stoleti { display: flex; flex-wrap: wrap; gap: 4px; margin: var(--s-3) 0 0; padding: 0; list-style: none; }
  .prehled__stoleti button {
    min-height: 32px;
    padding: 0 8px;
    border: 1px solid var(--rule);
    border-radius: var(--r-xs);
    background: var(--paper);
    font-size: 12px;
    font-variant-numeric: lining-nums;
    cursor: pointer;
  }
  .prehled__stoleti button[aria-current] { border-color: var(--ink); font-weight: 600; }
  .vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
</style>
