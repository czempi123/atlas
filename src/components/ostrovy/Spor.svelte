<script lang="ts">
  // Spor: student se postaví na škálu mezi dva filozofy (tažením, klepnutím nebo šipkami), přečte si jejich
  // nejsilnější argumenty a může se přesunout; šipka ukáže, odkud kam. Do deníku se zapíše první i konečná
  // poloha; nic se nehodnotí. Po konečné poloze nabídne zavřenou nepovinnou reflexi: nejsilnější argument
  // druhé strany (kdo stojí uprostřed, vybírá z obou) a odpověď na něj; ukládá se sama do téhož zápisu.
  // Použití v MDX (obsah v src/content/bloky/platon-diogenes-skutecnost.yaml):
  // <Spor id="platon-diogenes-skutecnost" />
  import { onMount, tick } from 'svelte';
  import { ulozZapis, smazZapis, stavBloku, ulozStavBloku, smazStavBloku } from '../../lib/denik';
  import {
    POLOHY, popisPolohy, zpetnaSporu, zapisSporu, platnyStavSporu, odstavce, radek, velke,
    argumentyReflexe, mistoArgumentu, otazkaReflexe, reflexeVyplnena, uryvekArgumentu, type ReflexeSporu,
  } from '../../lib/bloky';
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

  // Reflexe. Výběr je pořadí v nabídce, „puvodni“ (uložený argument, který blok už nemá), nebo „jiny“.
  let otevrena = $state(false);
  let vyber = $state<string | null>(null);
  let puvodni = $state<{ strana: 0 | 1; text: string } | null>(null);
  let vlastni = $state('');
  let odpoved = $state('');
  let reflexeUlozena = $state(false);
  let souhrn = $state<HTMLElement>();
  let casovac: ReturnType<typeof setTimeout> | undefined;
  let moznosti = $derived(konecna === null ? [] : argumentyReflexe(blok.strany, konecna));

  onMount(() => {
    // Odchod ze stránky uloží, co je v reflexi rozepsané.
    const priOdchodu = () => { if (casovac !== undefined) ulozReflexi(); };
    addEventListener('pagehide', priOdchodu);
    const uklid = () => { clearTimeout(casovac); removeEventListener('pagehide', priOdchodu); };
    const s = platnyStavSporu(stavBloku(id));
    if (!s) return uklid;
    prvni = s.prvni;
    konecna = s.konecna;
    duvod = s.duvod;
    navrh = s.konecna ?? s.prvni;
    const r = s.reflexe;
    if (r && s.konecna !== null) {
      odpoved = r.odpoved;
      const a = r.argument;
      if (a && 'strana' in a) {
        // Hledá se text, ne pořadí: když autor argument změnil nebo ubral, zůstane vidět ten, který student vybral.
        const i = mistoArgumentu(argumentyReflexe(blok.strany, s.konecna), a);
        if (i >= 0) vyber = String(i);
        else { puvodni = a; vyber = 'puvodni'; }
      } else if (a) {
        vyber = 'jiny';
        vlastni = a.vlastni;
      }
      reflexeUlozena = reflexeVyplnena(r);
      otevrena = true;
    }
    return uklid;
  });

  function reflexe(): ReflexeSporu | null {
    let argument: ReflexeSporu['argument'] = null;
    if (vyber === 'jiny') argument = { vlastni: vlastni.trim() };
    else if (vyber === 'puvodni') argument = puvodni;
    else if (vyber !== null && moznosti[Number(vyber)]) argument = { strana: moznosti[Number(vyber)].strana, text: moznosti[Number(vyber)].text };
    return argument || odpoved.trim() ? { argument, odpoved: odpoved.trim() } : null;
  }

  const ulozStav = () =>
    ulozStavBloku(
      id,
      { prvni, konecna, duvod: duvod.trim(), reflexe: konecna === null ? null : reflexe() },
      { odkaz, otazka: blok.otazka, druh: 'spor', hotovo: konecna !== null },
    );

  /** Reflexe se ukládá sama: do stavu bloku a do téhož zápisu v deníku jako další věta. */
  function ulozReflexi() {
    clearTimeout(casovac);
    casovac = undefined;
    if (prvni === null || konecna === null) return;
    const r = reflexe();
    ulozStav();
    ulozZapis({ id, otazka: blok.otazka, odpoved: zapisSporu(prvni, konecna, A, B, duvod, r), odkaz, druh: 'spor' });
    reflexeUlozena = reflexeVyplnena(r);
  }
  function piseSe() {
    clearTimeout(casovac);
    casovac = setTimeout(ulozReflexi, 600);
  }
  function klavesaReflexe(e: KeyboardEvent) {
    if (e.key !== 'Escape' || !otevrena) return;
    if (casovac !== undefined) ulozReflexi();
    otevrena = false;
    souhrn?.focus();
  }

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
    clearTimeout(casovac);
    casovac = undefined;
    otevrena = false;
    vyber = null;
    puvodni = null;
    vlastni = '';
    odpoved = '';
    reflexeUlozena = false;
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
    {#each blok.strany as s, i (i)}
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
        {#each blok.strany as s, i (i)}
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
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <details class="reflexe" bind:open={otevrena} onkeydown={klavesaReflexe}>
        <summary bind:this={souhrn}><span class="reflexe__otazka">{otazkaReflexe(konecna)}</span><span class="nepovinne">Nepovinné</span></summary>
        <div class="reflexe__telo">
          <fieldset class="reflexe__vyber">
            <legend class="vizualne-skryte">{otazkaReflexe(konecna)}</legend>
            {#each moznosti as m, i (i)}
              {#if i === 0 || moznosti[i - 1].strana !== m.strana}
                <p class="reflexe__strana t-nadtitulek obdobi-{lide[m.strana].obdobi}" aria-hidden="true">{nadpisy[m.strana]}</p>
              {/if}
              <label class={['arg', vyber === String(i) && 'arg--vybrany']}>
                <input class="vizualne-skryte" type="radio" name={`${id}-reflexe`} value={String(i)} bind:group={vyber} onchange={ulozReflexi} />
                <span class="arg__bod" aria-hidden="true"></span>
                <span><span class="vizualne-skryte">{nadpisy[m.strana]}</span>{@html radek(m.uryvek)}</span>
              </label>
            {/each}
            {#if puvodni}
              <label class={['arg', vyber === 'puvodni' && 'arg--vybrany']}>
                <input class="vizualne-skryte" type="radio" name={`${id}-reflexe`} value="puvodni" bind:group={vyber} onchange={ulozReflexi} />
                <span class="arg__bod" aria-hidden="true"></span>
                <span><span class="vizualne-skryte">{nadpisy[puvodni.strana]}</span>{@html radek(uryvekArgumentu(puvodni.text))}</span>
              </label>
            {/if}
            <label class={['arg', 'arg--jiny', vyber === 'jiny' && 'arg--vybrany']}>
              <input class="vizualne-skryte" type="radio" name={`${id}-reflexe`} value="jiny" bind:group={vyber} onchange={ulozReflexi} />
              <span class="arg__bod" aria-hidden="true"></span>
              <span>Jiný argument</span>
            </label>
          </fieldset>
          {#if vyber === 'jiny'}
            <label class="blok__popis" for={`${id}-jiny`}>Který?</label>
            <textarea class="blok__pole blok__pole--kratke" id={`${id}-jiny`} rows="2" bind:value={vlastni} oninput={piseSe} onblur={ulozReflexi}></textarea>
          {/if}
          <label class="blok__popis" for={`${id}-odpoved`}>Co na něj odpovíš?</label>
          <textarea
            class="blok__pole blok__pole--kratke"
            id={`${id}-odpoved`}
            rows="2"
            bind:value={odpoved}
            oninput={piseSe}
            onblur={ulozReflexi}
            placeholder="Stačí pár slov…"
            aria-describedby={`${id}-reflexe-stav`}
          ></textarea>
          <p class="blok__ulozeno reflexe__stav" id={`${id}-reflexe-stav`} aria-live="polite">{reflexeUlozena ? 'Uloženo v deníku.' : 'Ukládá se samo do deníku.'}</p>
        </div>
      </details>
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

  /* Reflexe: zavřená je jeden řádek pod zpětnou vazbou (stejný vzor jako „Co kdybys zvolil jinak?“ ve Volbě). */
  .reflexe { margin-top: var(--s-4); }
  .reflexe summary {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: var(--s-2);
    min-height: 44px;
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 600;
    cursor: pointer;
  }
  .reflexe__otazka { text-decoration: underline; text-underline-offset: 0.2em; }
  .reflexe summary .nepovinne { margin-left: 0; }
  .reflexe__telo { margin-top: var(--s-3); padding-left: var(--s-4); border-left: 2px solid var(--pc-soft); }
  .reflexe__vyber { display: grid; gap: var(--s-2); min-width: 0; margin: 0 0 var(--s-4); padding: 0; border: 0; }
  .reflexe__strana { margin: var(--s-2) 0 0; color: var(--pc); }
  .reflexe__strana:first-of-type { margin-top: 0; }
  .arg {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: var(--s-3);
    min-height: 48px;
    padding: var(--s-3) var(--s-4);
    border: 1px solid var(--rule);
    border-radius: var(--r-sm);
    background: var(--paper);
    font-size: var(--fs-ovladani-l);
    line-height: 1.45;
    cursor: pointer;
    transition: border-color var(--pohyb-rychle), background var(--pohyb-rychle);
  }
  .arg:hover { border-color: var(--muted); }
  .arg:has(input:focus-visible) { outline: 2px solid var(--ink); outline-offset: 3px; }
  .arg--vybrany { border: 2px solid var(--pc); padding: calc(var(--s-3) - 1px) calc(var(--s-4) - 1px); background: var(--pc-tint); }
  .arg--jiny { font-family: var(--font-sans); font-size: var(--fs-ovladani); font-weight: 500; }
  .arg__bod {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border: 2px solid var(--muted);
    border-radius: var(--r-full);
    background: var(--surface);
  }
  .arg--vybrany .arg__bod { border-color: var(--ink); background: var(--ink); box-shadow: inset 0 0 0 3px var(--surface); }
  .reflexe__stav { margin: 0; }
  .duvod { font-style: italic; }
  .duvod .t-popisek { color: var(--ink-2); font-style: normal; }
</style>
