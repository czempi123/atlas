<script lang="ts">
  // Spor: student se postaví na škálu mezi dva filozofy (tažením, klepnutím nebo šipkami), přečte si jejich
  // nejsilnější argumenty a může se přesunout; šipka ukáže, odkud kam. Do deníku se zapíše první i konečná
  // poloha; nic se nehodnotí.
  // Použití v MDX (obsah v src/content/bloky/platon-diogenes-skutecnost.yaml):
  // <Spor id="platon-diogenes-skutecnost" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import { POLOHY, popisPolohy, zpetnaSporu, zapisSporu, platnyStavSporu, odstavce, radek, velke } from '../../lib/bloky';
  import type { TBlokSpor } from '../../lib/bloky-schema';
  import { odkryti } from '../../lib/pohyb';
  import Mince from '../mapa/Mince.svelte';
  import BlokDal from './BlokDal.svelte';
  import type { ClovekBloku, Dal } from './bloky-typy';

  interface Props {
    id: string;
    blok: Omit<TBlokSpor, 'zdroje' | 'kOvereni' | 'dal'>;
    /** obě strany z dat (jméno, období, atribut), ve stejném pořadí jako blok.strany */
    lide: [ClovekBloku, ClovekBloku];
    odkaz: string;
    dal?: Dal;
  }
  let { id, blok, lide, odkaz, dal }: Props = $props();
  // Strana se jmenuje po osobě, nebo po směru, za který osoba mluví („kynici“); v nadpisech s velkým písmenem.
  const [A, B] = [lide[0].oznaceni ?? lide[0].jmeno, lide[1].oznaceni ?? lide[1].jmeno];
  const nadpisy = [velke(A), velke(B)];
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

  const ulozStav = () =>
    ulozStavBloku(id, { prvni, konecna, duvod: duvod.trim() }, { odkaz, otazka: blok.otazka, druh: 'spor', hotovo: konecna !== null });

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

  // ── Tažení po škále (myš i prst); klávesnici obstarají přepínače ──
  let tazeni = false;
  function polohaZUdalosti(e: PointerEvent, stopa: HTMLElement): number {
    const r = stopa.getBoundingClientRect();
    const x = Math.min(r.right - 22, Math.max(r.left + 22, e.clientX));
    return Math.round(((x - r.left - 22) / (r.width - 44)) * (POLOHY - 1));
  }
  function stisk(e: PointerEvent) {
    if (e.button !== 0) return;
    const stopa = e.currentTarget as HTMLElement;
    tazeni = true;
    try { stopa.setPointerCapture(e.pointerId); } catch { /* syntetická událost bez ukazatele */ }
    navrh = polohaZUdalosti(e, stopa);
  }
  function pohyb(e: PointerEvent) {
    if (tazeni) navrh = polohaZUdalosti(e, e.currentTarget as HTMLElement);
  }
  function pusteni(e: PointerEvent) {
    if (!tazeni) return;
    tazeni = false;
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch { /* už uvolněno */ }
    // Po tažení přenes fokus na vybraný přepínač, ať jde pokračovat šipkami.
    const vstup = (e.currentTarget as HTMLElement).querySelectorAll<HTMLInputElement>('input')[navrh ?? 0];
    vstup?.focus({ preventScroll: true });
  }
  /** Střed bodu i v procentech šířky stopy (body mají 44 px a jsou rozložené od kraje ke kraji). */
  const stred = (i: number) => `calc(22px + (100% - 44px) * ${i / (POLOHY - 1)})`;
</script>

{#snippet skala(jmeno: string, zamceno: boolean, popisek: string, sipka: boolean)}
  <fieldset class="skala">
    <legend class="vizualne-skryte">{popisek}</legend>
    <div class="skala__konce" aria-hidden="true">
      <span class="obdobi-{lide[0].obdobi}"><Mince ikona={lide[0].ikona} obdobi={lide[0].obdobi} varianta="tint" velikost={32} />{nadpisy[0]}</span>
      <span class="obdobi-{lide[1].obdobi}">{nadpisy[1]}<Mince ikona={lide[1].ikona} obdobi={lide[1].obdobi} varianta="tint" velikost={32} /></span>
    </div>
    <div
      class={['skala__stopa', zamceno && 'skala__stopa--zamcena']}
      onpointerdown={zamceno ? undefined : stisk}
      onpointermove={zamceno ? undefined : pohyb}
      onpointerup={zamceno ? undefined : pusteni}
      onpointercancel={zamceno ? undefined : pusteni}
    >
      {#if sipka && prvni !== null && navrh !== null && navrh !== prvni}
        <span
          class={['sipka', navrh > prvni ? 'sipka--vpravo' : 'sipka--vlevo']}
          style={`left:${stred(Math.min(prvni, navrh))};width:calc((100% - 44px) * ${Math.abs(navrh - prvni) / (POLOHY - 1)})`}
          aria-hidden="true"
        ></span>
      {/if}
      {#each polohy as i (i)}
        <label class={['stop', navrh === i && 'stop--vybrany', sipka && prvni === i && 'stop--zacatek', zamceno && 'stop--zamceny']}>
          <input class="vizualne-skryte" type="radio" name={jmeno} value={i} bind:group={navrh} disabled={zamceno} />
          <span class="vizualne-skryte">{popisPolohy(i, A, B)}{sipka && prvni === i ? ' (tady jsi začal)' : ''}</span>
          <span class="stop__bod" aria-hidden="true"></span>
        </label>
      {/each}
    </div>
    <p class="skala__stav t-ovladani" aria-hidden="true">
      {#if navrh !== null}Stojíš: <strong>{popisPolohy(navrh, A, B)}</strong>{#if sipka && prvni !== null && prvni !== navrh}{' · '}začal jsi: {popisPolohy(prvni, A, B)}{/if}{:else}Přetáhni nebo klepni na místo, kde stojíš.{/if}
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
      <p class="postoj obdobi-{lide[i].obdobi}"><span class="t-nadtitulek">{nadpisy[i]}</span> {@html radek(s.postoj)}</p>
    {/each}
  </div>

  {#if prvni === null}
    {@render skala(`${id}-prvni`, false, 'Kde stojíš ty?', false)}
    <button class="blok__tl blok__tl--hlavni" type="button" onclick={postavSe} disabled={navrh === null}>Tady stojím</button>
  {:else}
    <div class="argumenty" role="region" aria-label="Argumenty obou stran" tabindex="-1" bind:this={argumenty} in:odkryti>
      <p class="zacatek t-ovladani">Začal jsi: <strong>{popisPolohy(prvni, A, B)}</strong>. Teď si přečti, co říkají oba.</p>
      <div class="strany">
        {#each blok.strany as s, i (s.osoba)}
          <article class="strana obdobi-{lide[i].obdobi}" aria-labelledby={`${id}-strana-${i}`}>
            <div class="strana__hlava">
              <Mince ikona={lide[i].ikona} obdobi={lide[i].obdobi} varianta="sel" velikost={36} />
              <h4 class="strana__jmeno t-nadtitulek" id={`${id}-strana-${i}`}>{nadpisy[i]}</h4>
            </div>
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
      <textarea class="blok__pole blok__pole--kratke" id={`${id}-duvod`} rows="2" bind:value={duvod} onchange={ulozStav} placeholder="Stačí pár slov…"></textarea>
      <button class="blok__tl blok__tl--hlavni" type="button" onclick={zapis} disabled={navrh === null}>Zapsat konečnou polohu</button>
    {:else}
      {@render skala(`${id}-hotovo`, true, 'Tvoje konečná poloha', true)}
      <div class="blok__zpetna" role="region" aria-label="Tvůj posun" aria-live="polite" tabindex="-1" bind:this={oblast} in:odkryti>
        <p class="blok__zpetna-titulek">Začal jsi: {popisPolohy(prvni, A, B)}. Teď: {popisPolohy(konecna, A, B)}.</p>
        <p>{zpetnaSporu(prvni, konecna, A, B)}</p>
        {#if duvod.trim()}<p class="duvod"><span class="t-popisek">Tvůj důvod:</span> {duvod}</p>{/if}
      </div>
      <BlokDal {dal} />
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
  .skala__konce { display: flex; justify-content: space-between; margin-bottom: var(--s-2); font-family: var(--font-sans); font-size: var(--fs-ovladani); font-weight: 600; }
  .skala__konce span { display: inline-flex; align-items: center; gap: var(--s-2); color: var(--ink); }
  .skala__stopa {
    position: relative;
    display: flex;
    justify-content: space-between;
    /* Svislé posouvání stránky zůstává, vodorovný pohyb prstu patří škále. */
    touch-action: pan-y;
    cursor: pointer;
    user-select: none;
  }
  .skala__stopa--zamcena { cursor: default; }
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
  .sipka {
    position: absolute;
    top: 50%;
    height: 3px;
    background: var(--pc);
    transform: translateY(-50%);
    transition: left var(--pohyb), width var(--pohyb);
  }
  .sipka::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border-block: 6px solid transparent;
    transform: translateY(-50%);
  }
  .sipka--vpravo::after { right: 14px; border-left: 9px solid var(--pc); }
  .sipka--vlevo::after { left: 14px; border-right: 9px solid var(--pc); }
  .stop {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: var(--r-full);
  }
  .stop:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 2px; }
  .stop__bod {
    width: 18px;
    height: 18px;
    border: 2px solid var(--muted);
    border-radius: var(--r-full);
    background: var(--surface);
    transition: width var(--pohyb-rychle), height var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .stop:nth-of-type(3) .stop__bod { border-style: dashed; }
  .skala__stopa:not(.skala__stopa--zamcena) .stop:hover .stop__bod { border-color: var(--ink); }
  .stop--zacatek .stop__bod { border-color: var(--pc); background: var(--pc-tint); }
  .stop--vybrany .stop__bod { width: 30px; height: 30px; border-color: var(--ink); background: var(--ink); box-shadow: 0 0 0 4px var(--surface); }
  .skala__stav { margin: var(--s-2) 0 0; text-align: center; color: var(--ink-2); }
  .skala__stav strong { color: var(--ink); font-weight: 600; }

  .argumenty { margin-top: var(--s-2); outline: none; }
  .argumenty:focus-visible { outline: 2px solid var(--ink); outline-offset: 4px; }
  .zacatek { margin: 0 0 var(--s-4); color: var(--ink-2); }
  .zacatek strong { color: var(--ink); font-weight: 600; }
  .strany { display: grid; gap: var(--s-4); margin-bottom: var(--s-6); }
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
  .strana p { font-size: var(--fs-ovladani-l); line-height: 1.55; }
  @media (min-width: 900px) { .strana p { font-size: 19px; } }
  .strana__hlava { display: flex; align-items: center; gap: var(--s-3); margin-bottom: var(--s-3); }
  .strana__jmeno { margin: 0; color: var(--ink); }
  .posunout { margin: 0 0 var(--s-3); }
  .nepovinne { margin-left: var(--s-2); font-weight: 400; color: var(--muted); }
  .duvod { font-style: italic; }
  .duvod .t-popisek { color: var(--ink-2); font-style: normal; }
</style>
