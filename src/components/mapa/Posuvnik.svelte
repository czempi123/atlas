<script lang="ts">
  // Posuvník roku: po jednom roce (tažení, šipky na klávesnici), tlačítky a PageUp/PageDown po deseti.
  // Stopa ukazuje okno řeky životů, takže jezdec navazuje na svislou čáru roku v řece pod ním.
  // U okraje stopy se okno při tažení samo posouvá. Nad stopou jsou dějinné kotvy.
  import type { UdalostV } from '../../lib/mapa-vstup';
  import { naAstro, zAstro, posunRok, omezRok } from '../../lib/cas-mapy';
  import { rok as rokText, rozpeti } from '../../lib/casy';

  interface Props {
    rok: number;
    okno: [number, number];
    rozsah: [number, number];
    kotvy: UdalostV[];
    onzmena: (rok: number, zdroj: 'tah' | 'klavesa' | 'tlacitko' | 'konec-tahu') => void;
    onokno: (okno: [number, number]) => void;
  }
  let { rok, okno, rozsah, kotvy, onzmena, onokno }: Props = $props();

  const podil = (r: number) => (naAstro(r) - naAstro(okno[0])) / (naAstro(okno[1]) - naAstro(okno[0]));
  let poloha = $derived(Math.min(1, Math.max(0, podil(rok))));
  let sirkaStopy = $state(800);
  // Kotvy v okně; popisek jen tam, kde se nepřekryje s předchozím (jinak jen značka a nápověda).
  let viditelneKotvy = $derived.by(() => {
    const v = kotvy.filter((k) => (k.do ?? k.od) >= okno[0] && k.od <= okno[1]).sort((a, b) => a.od - b.od);
    let konec = -Infinity;
    return v.map((k) => {
      const x = Math.max(0, podil(k.od)) * sirkaStopy;
      const w = Math.min(180, k.nazev.length * 6.2 + 8);
      const popisek = x >= konec + 6 && x + w <= sirkaStopy + 40;
      if (popisek) konec = x + w;
      return { k, popisek };
    });
  });

  let stopa: HTMLDivElement;
  let tahne = $state(false);
  let posunTimer: ReturnType<typeof setInterval> | null = null;
  let posledniF = 0;

  function rokZPodilu(f: number): number {
    const a = naAstro(okno[0]) + f * (naAstro(okno[1]) - naAstro(okno[0]));
    return omezRok(zAstro(Math.round(a)), rozsah[0], rozsah[1]);
  }
  function podilZUdalosti(e: PointerEvent) {
    const b = stopa.getBoundingClientRect();
    return (e.clientX - b.left) / b.width;
  }
  function zastavPosun() {
    if (posunTimer) clearInterval(posunTimer);
    posunTimer = null;
  }
  function posunOkna(smer: -1 | 1) {
    if (posunTimer) return;
    posunTimer = setInterval(() => {
      const [od, do_] = okno;
      if ((smer < 0 && od <= rozsah[0]) || (smer > 0 && do_ >= rozsah[1])) return zastavPosun();
      const krok = 2 * smer;
      const nove: [number, number] = [posunRok(od, krok), posunRok(do_, krok)];
      if (nove[0] < rozsah[0] || nove[1] > rozsah[1]) return zastavPosun();
      onokno(nove);
      onzmena(smer < 0 ? nove[0] : nove[1], 'tah');
    }, 40);
  }
  // Tažení: nejvýš jedna změna roku za snímek (na slabém telefonu chodí pointermove častěji, než stíhá kreslení).
  let snimek = 0;
  function tah(e: PointerEvent) {
    const f = podilZUdalosti(e);
    posledniF = f;
    if (f < 0.015) posunOkna(-1);
    else if (f > 0.985) posunOkna(1);
    else zastavPosun();
    if (snimek) return;
    snimek = requestAnimationFrame(() => {
      snimek = 0;
      if (tahne) onzmena(rokZPodilu(Math.min(1, Math.max(0, posledniF))), 'tah');
    });
  }
  function dolu(e: PointerEvent) {
    if (e.button !== 0) return;
    tahne = true;
    stopa.setPointerCapture(e.pointerId);
    posledniF = podilZUdalosti(e);
    (stopa.querySelector('[role=slider]') as HTMLElement)?.focus({ preventScroll: true });
    tah(e);
  }
  function pohyb(e: PointerEvent) {
    if (tahne) tah(e);
  }
  function nahoru(e: PointerEvent) {
    if (!tahne) return;
    tahne = false;
    zastavPosun();
    cancelAnimationFrame(snimek);
    snimek = 0;
    stopa.releasePointerCapture?.(e.pointerId);
    onzmena(rokZPodilu(Math.min(1, Math.max(0, posledniF))), 'konec-tahu');
  }
  function klavesa(e: KeyboardEvent) {
    const krok: Record<string, number> = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1, PageDown: -10, PageUp: 10 };
    let novy: number | null = null;
    if (e.key in krok) novy = posunRok(rok, krok[e.key] * (e.shiftKey && Math.abs(krok[e.key]) === 1 ? 10 : 1));
    else if (e.key === 'Home') novy = rozsah[0];
    else if (e.key === 'End') novy = rozsah[1];
    if (novy === null) return;
    e.preventDefault();
    onzmena(omezRok(novy, rozsah[0], rozsah[1]), 'klavesa');
  }
  const o10 = (smer: -1 | 1) => onzmena(omezRok(posunRok(rok, 10 * smer), rozsah[0], rozsah[1]), 'tlacitko');
  const kotvaText = (k: UdalostV) => `${k.nazev}, ${k.do ? rozpeti(k.od, k.do) : rokText(k.od)}`;
</script>

<div class="posuvnik">
  <div class="posuvnik__rok">
    <button type="button" class="sipka" onclick={() => o10(-1)} disabled={rok <= rozsah[0]} aria-label="O 10 let zpět">
      <svg width="20" height="20" aria-hidden="true"><use href="/ikony/ui.svg#zpet" /></svg>
    </button>
    <output class="letopocet" aria-live="off">{rokText(rok)}</output>
    <button type="button" class="sipka" onclick={() => o10(1)} disabled={rok >= rozsah[1]} aria-label="O 10 let vpřed">
      <svg width="20" height="20" aria-hidden="true"><use href="/ikony/ui.svg#dal" /></svg>
    </button>
  </div>

  <div class="posuvnik__cas">
    <ul class="kotvy" aria-label="Dějinné události" bind:clientWidth={sirkaStopy}>
      {#each viditelneKotvy as { k, popisek } (k.id)}
        {@const l = Math.max(0, podil(k.od))}
        {@const p = Math.min(1, podil(k.do ?? k.od))}
        <li class:kotva--pruh={!!k.do} style:left="{l * 100}%" style:width={k.do ? `${(p - l) * 100}%` : undefined}>
          <button type="button" class="kotva" title={kotvaText(k)} aria-label="{kotvaText(k)}: přejít" onclick={() => onzmena(k.od, 'tlacitko')}>
            <span class="kotva__znak" aria-hidden="true"></span>
            {#if popisek}<span class="kotva__text" aria-hidden="true">{k.nazev}</span>{/if}
          </button>
        </li>
      {/each}
    </ul>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="stopa"
      class:stopa--tah={tahne}
      bind:this={stopa}
      onpointerdown={dolu}
      onpointermove={pohyb}
      onpointerup={nahoru}
      onpointercancel={nahoru}
    >
      <div class="stopa__draha"><div class="stopa__uplynulo" style:width="{poloha * 100}%"></div></div>
      <div
        class="jezdec"
        style:left="{poloha * 100}%"
        role="slider"
        tabindex="0"
        aria-label="Rok"
        aria-valuemin={rozsah[0]}
        aria-valuemax={rozsah[1]}
        aria-valuenow={rok}
        aria-valuetext={rokText(rok)}
        aria-keyshortcuts="ArrowLeft ArrowRight PageUp PageDown Home End"
        onkeydown={klavesa}
      ></div>
    </div>
  </div>
</div>

<style>
  .posuvnik {
    display: grid;
    grid-template-columns: var(--zlab) 1fr;
    align-items: stretch;
    height: 100%;
    font-family: var(--font-sans);
  }
  .posuvnik__rok { display: flex; align-items: center; justify-content: space-between; gap: 2px; padding: 0 var(--s-2) 0 var(--s-3); }
  .letopocet {
    flex: 1;
    font-family: var(--font-serif);
    font-size: var(--posuvnik-rok, 26px);
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    font-variant-numeric: lining-nums tabular-nums;
    letter-spacing: -0.01em;
  }
  .sipka {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    flex: none;
    border: 1px solid var(--rule);
    border-radius: 999px;
    background: var(--surface);
    color: var(--ink);
    cursor: pointer;
  }
  .sipka:hover:not(:disabled) { border-color: var(--ink); }
  .sipka:disabled { opacity: 0.4; cursor: default; }
  .posuvnik__cas { position: relative; padding-right: var(--s-4); }
  .kotvy { position: absolute; inset: 4px var(--s-4) auto 0; height: 26px; margin: 0; padding: 0; list-style: none; }
  .kotvy li { position: absolute; top: 0; height: 26px; }
  .kotva {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: flex-start;
    gap: 4px;
    height: 26px;
    max-width: 180px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--ink-2);
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    cursor: pointer;
  }
  .kotva__znak { flex: none; width: 2px; height: 22px; margin-top: 2px; background: var(--ink-2); }
  .kotva--pruh .kotva { width: 100%; max-width: none; overflow: visible; }
  .kotva--pruh .kotva__text { max-width: none; overflow: visible; }
  .kotva--pruh .kotva__znak { position: absolute; left: 0; right: 0; top: 18px; width: auto; height: 5px; margin: 0; border-radius: 3px; background: color-mix(in srgb, var(--ink-2) 35%, transparent); }
  .kotva__text { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; max-width: 100%; }
  .kotva--pruh .kotva__text { padding-top: 1px; }
  .kotva:hover .kotva__text, .kotva:focus-visible .kotva__text { color: var(--ink); text-decoration: underline; }
  .stopa { position: absolute; left: 0; right: var(--s-4); bottom: 6px; height: 34px; touch-action: none; cursor: pointer; }
  .stopa__draha { position: absolute; left: 0; right: 0; top: 14px; height: 6px; border-radius: 3px; background: var(--sunk); overflow: hidden; }
  .stopa__uplynulo { height: 100%; background: var(--pc-soft); }
  .jezdec {
    position: absolute;
    top: 7px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    border: 2px solid var(--ink);
    border-radius: 999px;
    background: var(--surface);
    box-shadow: 0 1px 3px rgb(0 0 0 / 18%);
  }
  .jezdec::after { content: ''; position: absolute; left: 50%; top: 18px; width: 2px; height: 20px; margin-left: -1px; background: var(--ink); }
  .stopa--tah .jezdec { transform: scale(1.12); }
  .jezdec:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
  @media (max-width: 899px) {
    .posuvnik { grid-template-rows: 36px 1fr; }
    .posuvnik__rok { grid-column: 1 / -1; justify-content: center; gap: var(--s-4); padding: 4px var(--s-3) 0; }
    .letopocet { flex: 0 1 auto; min-width: 9ch; }
    .sipka { width: 32px; height: 32px; }
    .posuvnik__cas { grid-column: 2; }
    .kotvy { top: 0; height: 14px; }
    .kotvy li, .kotva { height: 14px; }
    .kotva__text { display: none; }
    .kotva__znak { height: 10px; margin-top: 2px; }
    .kotva--pruh .kotva__znak { top: 6px; height: 4px; }
    .stopa { bottom: 2px; }
  }
</style>
