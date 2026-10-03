<script lang="ts">
  // Mapa Mapy a času: předpočítaný podklad období (pevnina, vodní linky, síť, krajiny), nad ním lidé,
  // kteří ve zvoleném roce žijí. Víc lidí na jednom místě = shluk, který se po kliknutí rozbalí.
  // Kdo je mimo výřez, má štítek se šipkou u okraje. Při změně období se kamera plynule přesune.
  // Přepínač Stín odkazu má vedle sebe tlačítko „?“: krátké vysvětlení se otevře pod přepínačem
  // (klepnutím i klávesnicí, ne jen po najetí myší), zavře ho Esc nebo klepnutí vedle.
  import { onDestroy, untrack } from 'svelte';
  import type { PodkladObdobi } from '../../lib/mapa';
  import type { OsobaV, MistoV } from '../../lib/mapa-vstup';
  import { kdeVRoce, odkudPrisla, vekVRoce, zivotOsoby, poznamkaVRoce, let_ } from '../../lib/cas-mapy';
  import Mince from './Mince.svelte';

  interface Props {
    podklad: PodkladObdobi | null;
    lide: OsobaV[];
    stinLide: OsobaV[];
    mista: Map<string, MistoV>;
    rok: number;
    vybrany?: string;
    stin: boolean;
    zprava: string | null;
    omezitPohyb: boolean;
    onvyber: (id: string) => void;
    onstin: (zapnout: boolean) => void;
  }
  let { podklad, lide, stinLide, mista, rok, vybrany, stin, zprava, omezitPohyb, onvyber, onstin }: Props = $props();

  type Obdelnik = { x: number; y: number; w: number; h: number };

  let sirka = $state(0);
  let vyska = $state(0);

  // ── Kamera ─────────────────────────────────────────────────────────────────
  let zobrazeny: PodkladObdobi | null = $state(null);
  let odchazejici: PodkladObdobi | null = $state(null);
  let vbZobrazeny: Obdelnik | null = $state(null);
  let vbOdchazejici: Obdelnik | null = $state(null);
  let prechod = $state(0); // 0 = klid, (0,1) = kamera jede
  let animace = 0;

  function viditelny(p: PodkladObdobi): Obdelnik {
    if (!sirka || !vyska) return { x: 0, y: 0, w: p.sirka, h: p.vyska };
    const a = sirka / vyska;
    if (a > p.sirka / p.vyska) {
      const h = p.sirka / a;
      return { x: 0, y: (p.vyska - h) / 2, w: p.sirka, h };
    }
    const w = p.vyska * a;
    return { x: (p.sirka - w) / 2, y: 0, w, h: p.vyska };
  }
  const doStarych = (r: Obdelnik, t: [number, number, number]): Obdelnik => ({ x: (r.x - t[1]) / t[0], y: (r.y - t[2]) / t[0], w: r.w / t[0], h: r.h / t[0] });
  const doNovych = (r: Obdelnik, t: [number, number, number]): Obdelnik => ({ x: r.x * t[0] + t[1], y: r.y * t[0] + t[2], w: r.w * t[0], h: r.h * t[0] });
  const mezi = (a: Obdelnik, b: Obdelnik, k: number): Obdelnik => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, w: a.w + (b.w - a.w) * k, h: a.h + (b.h - a.h) * k });
  const plynule = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

  $effect(() => {
    const novy = podklad;
    if (!novy) return;
    untrack(() => zmenaPodkladu(novy));
  });
  function zmenaPodkladu(novy: PodkladObdobi) {
    const cil = viditelny(novy);
    const stary = zobrazeny;
    if (!stary || stary === novy || stary.druh !== novy.druh || stary.obdobi === novy.obdobi || omezitPohyb || !stary.prevody[novy.obdobi]) {
      cancelAnimationFrame(animace);
      zobrazeny = novy;
      odchazejici = null;
      vbZobrazeny = cil;
      prechod = 0;
      return;
    }
    // Plynulý přesun: starý podklad jede ke svému obrazu nového výřezu, nový ze svého obrazu starého.
    const t = stary.prevody[novy.obdobi];
    const odStary = vbZobrazeny ?? viditelny(stary);
    const doStary = doStarych(cil, t);
    const odNovy = doNovych(odStary, t);
    odchazejici = stary;
    zobrazeny = novy;
    const zacatek = performance.now();
    const delka = 700;
    cancelAnimationFrame(animace);
    const krok = (ted: number) => {
      const k = Math.min(1, (ted - zacatek) / delka);
      const e = plynule(k);
      vbOdchazejici = mezi(odStary, doStary, e);
      vbZobrazeny = mezi(odNovy, cil, e);
      prechod = k === 1 ? 0 : Math.max(0.001, k);
      if (k < 1) animace = requestAnimationFrame(krok);
      else odchazejici = null;
    };
    prechod = 0.001;
    animace = requestAnimationFrame(krok);
  }
  // Změna velikosti bez přechodu.
  $effect(() => {
    void sirka;
    void vyska;
    untrack(() => {
      if (zobrazeny && !prechod) vbZobrazeny = viditelny(zobrazeny);
    });
  });
  onDestroy(() => {
    if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(animace);
  });

  let vb = $derived(vbZobrazeny ?? (zobrazeny ? viditelny(zobrazeny) : { x: 0, y: 0, w: 1032, h: 456 }));
  let meritkoObrazovky = $derived(sirka ? vb.w / sirka : 1);
  const vbText = (r: Obdelnik) => `${r.x.toFixed(1)} ${r.y.toFixed(1)} ${r.w.toFixed(1)} ${r.h.toFixed(1)}`;

  // ── Lidé na mapě ───────────────────────────────────────────────────────────
  const priorita = (o: OsobaV) => ({ portret: 0, profil: 1, medailonek: 2 })[o.hloubka];
  type Znacka = { misto: string; x: number; y: number; lide: OsobaV[]; uvnitr: boolean };

  let klid = $derived(!prechod && zobrazeny);
  let znacky = $derived.by((): Znacka[] => {
    if (!zobrazeny) return [];
    const p = zobrazeny;
    const podleMista = new Map<string, OsobaV[]>();
    for (const o of lide) {
      const kde = kdeVRoce(o, rok);
      if (!kde || !p.mista[kde.misto]) continue;
      const s = podleMista.get(kde.misto) ?? [];
      s.push(o);
      podleMista.set(kde.misto, s);
    }
    return [...podleMista].map(([misto, l]) => {
      const [x, y] = p.mista[misto];
      l.sort((a, b) => Number(b.id === vybrany) - Number(a.id === vybrany) || priorita(a) - priorita(b) || a.jmeno.localeCompare(b.jmeno, 'cs'));
      const fx = (x - vb.x) / vb.w;
      const fy = (y - vb.y) / vb.h;
      return { misto, x: fx, y: fy, lide: l, uvnitr: fx > 0.015 && fx < 0.985 && fy > 0.03 && fy < 0.97 };
    });
  });
  let uvnitr = $derived(znacky.filter((z) => z.uvnitr));

  const aDalsich = (n: number) => (n === 1 ? 'a jeden další' : n < 5 ? `a další ${n}` : `a dalších ${n}`);
  const textShluku = (z: Znacka) => `${mista.get(z.misto)?.nazev ?? ''} · ${aDalsich(z.lide.length - 1)}`;

  // Popisky bez překryvů: důležitější dostanou místo první (vpravo, jinak vlevo, jinak jen mince).
  let strany = $derived.by(() => {
    const obsazeno: [number, number, number, number][] = [];
    const out = new Map<string, 'vpravo' | 'vlevo' | null>();
    const serazene = [...uvnitr].sort((a, b) => Number(b.lide.some((o) => o.id === vybrany)) - Number(a.lide.some((o) => o.id === vybrany)) || b.lide.length - a.lide.length || priorita(a.lide[0]) - priorita(b.lide[0]));
    for (const z of serazene) {
      const x = z.x * sirka;
      const y = z.y * vyska;
      const r = z.lide.some((o) => o.id === vybrany) ? 18 : 13;
      obsazeno.push([x - r, y - r, x + r, y + r]);
    }
    const volno = (b: [number, number, number, number]) => b[0] >= 0 && b[2] <= sirka && !obsazeno.some((o) => b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]);
    for (const z of serazene) {
      const x = z.x * sirka;
      const y = z.y * vyska;
      const text = z.lide.length > 1 ? textShluku(z) : z.lide[0].jmeno;
      const w = text.length * 7 + 14 + (z.lide.length > 1 ? Math.min(3, z.lide.length) * 10 : 0);
      const r = z.lide.some((o) => o.id === vybrany) ? 18 : 13;
      const vpravo: [number, number, number, number] = [x + r + 2, y - 10, x + r + 2 + w, y + 10];
      const vlevo: [number, number, number, number] = [x - r - 2 - w, y - 10, x - r - 2, y + 10];
      const s = volno(vpravo) ? 'vpravo' : volno(vlevo) ? 'vlevo' : null;
      if (s) obsazeno.push(s === 'vpravo' ? vpravo : vlevo);
      out.set(z.misto, s);
    }
    boxyZnacek = obsazeno;
    return out;
  });
  let boxyZnacek: [number, number, number, number][] = [];
  // Názvy krajin, které by zakryly lidi, se ztlumí.
  let zakryteKrajiny = $derived.by(() => {
    void strany;
    const out = new Set<string>();
    if (!zobrazeny || !sirka) return out;
    for (const k of zobrazeny.krajiny) {
      const x = ((k.xy[0] - vb.x) / vb.w) * sirka;
      const y = ((k.xy[1] - vb.y) / vb.h) * vyska;
      const w = (k.nazev.length * (k.druh === 'more' ? 7.5 : 9.5)) / 2;
      const box = [x - w, y - 12, x + w, y + (k.dnes ? 14 : 3)];
      if (boxyZnacek.some((o) => box[0] < o[2] && box[2] > o[0] && box[1] < o[3] && box[3] > o[1])) out.add(k.id);
    }
    return out;
  });

  // Štítky u okraje pro lidi mimo výřez.
  let okraj = $derived.by(() => {
    return znacky
      .filter((z) => !z.uvnitr)
      .map((z) => {
        const dx = z.x - 0.5;
        const dy = z.y - 0.5;
        const ax = sirka ? (dx * sirka) : dx;
        const ay = vyska ? (dy * vyska) : dy;
        const mx = 0.5 - 70 / Math.max(1, sirka);
        const my = 0.5 - 22 / Math.max(1, vyska);
        const t = Math.min(Math.abs(dx) > 1e-6 ? mx / Math.abs(dx) : Infinity, Math.abs(dy) > 1e-6 ? my / Math.abs(dy) : Infinity);
        return { ...z, ex: 0.5 + dx * t, ey: 0.5 + dy * t, uhel: (Math.atan2(ay, ax) * 180) / Math.PI };
      });
  });

  // Cesty: tečkovaná čára z místa, odkud člověk v tomto roce přišel.
  let cesty = $derived.by(() => {
    if (!zobrazeny) return [];
    const p = zobrazeny;
    const out: { id: string; obdobi: number; d: string }[] = [];
    for (const o of lide) {
      const odkud = odkudPrisla(o, rok);
      const kam = kdeVRoce(o, rok)?.misto;
      if (!odkud || !kam || !p.mista[odkud] || !p.mista[kam]) continue;
      const [x1, y1] = p.mista[odkud];
      const [x2, y2] = p.mista[kam];
      const mx = (x1 + x2) / 2 - (y2 - y1) * 0.18;
      const my = (y1 + y2) / 2 + (x2 - x1) * 0.18;
      out.push({ id: o.id, obdobi: o.obdobi, d: `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}` });
    }
    return out;
  });

  // Stín odkazu: zesnulí vybledle v místě, kde zemřeli.
  let stiny = $derived.by(() => {
    if (!zobrazeny || !stin) return [];
    const p = zobrazeny;
    return stinLide
      .map((o) => {
        const z = zivotOsoby(o)!;
        const kde = kdeVRoce(o, z.do)?.misto;
        if (!kde || !p.mista[kde]) return null;
        const [x, y] = p.mista[kde];
        const fx = (x - vb.x) / vb.w;
        const fy = (y - vb.y) / vb.h;
        if (fx < 0.01 || fx > 0.99 || fy < 0.02 || fy > 0.98) return null;
        return { o, x: fx, y: fy, dx: 0 };
      })
      .filter((s): s is NonNullable<typeof s> => !!s)
      .map((s, i, vse) => ({ ...s, dx: vse.slice(0, i).filter((t) => Math.abs(t.x - s.x) < 0.01 && Math.abs(t.y - s.y) < 0.02).length }));
  });

  // ── Rozbalený shluk a nápověda ─────────────────────────────────────────────
  let rozbaleny: string | null = $state(null);
  let napoveda: { o: OsobaV; x: number; y: number } | null = $state(null);
  $effect(() => {
    void rok;
    if (rozbaleny && !uvnitr.some((z) => z.misto === rozbaleny && z.lide.length > 1)) rozbaleny = null;
  });
  function klikZnacka(z: Znacka) {
    if (z.lide.length === 1) {
      onvyber(z.lide[0].id);
      rozbaleny = null;
    } else rozbaleny = rozbaleny === z.misto ? null : z.misto;
  }
  // Vysvětlení stínu odkazu: říká, co dělá stinOdkazu v src/lib/cas-mapy.ts.
  let vysvetleni = $state(false);
  let tlVysvetleni: HTMLButtonElement | undefined = $state();
  function klepnuti(e: PointerEvent) {
    if (vysvetleni && !(e.target as Element | null)?.closest?.('.stin-ovladani')) vysvetleni = false;
  }
  function klavesa(e: KeyboardEvent) {
    if (e.key === 'Escape' && vysvetleni) {
      vysvetleni = false;
      tlVysvetleni?.focus();
      return;
    }
    if (e.key === 'Escape' && rozbaleny) {
      const m = rozbaleny;
      rozbaleny = null;
      (document.querySelector(`[data-shluk="${m}"]`) as HTMLElement | null)?.focus();
    }
  }
  const vekKratce = (o: OsobaV) => {
    const v = vekVRoce(o, rok);
    return v === null ? '' : `${o.narozen?.priblizne ? 'asi ' : ''}${let_(v)}`;
  };
  const mistoOsoby = (o: OsobaV) => {
    const k = kdeVRoce(o, rok);
    return k ? mista.get(k.misto)?.nazev ?? '' : '';
  };
</script>

<svelte:window onkeydown={klavesa} onpointerdown={klepnuti} />

<div class="mapa" bind:clientWidth={sirka} bind:clientHeight={vyska} class:mapa--kamera={!!prechod} style:--k={meritkoObrazovky}>
  {#if odchazejici && vbOdchazejici}
    {@render podkladSvg(odchazejici, vbOdchazejici, 1 - Math.min(1, Math.max(0, (prechod - 0.35) / 0.4)), [])}
  {/if}
  {#if zobrazeny}
    {@render podkladSvg(zobrazeny, vb, odchazejici ? Math.min(1, Math.max(0, (prechod - 0.35) / 0.4)) : 1, klid ? cesty : [])}
  {/if}

  {#if klid}
    <div class="vrstva" role="group" aria-label="Lidé na mapě v tomto roce">
      {#each stiny as s (s.o.id)}
        <button
          type="button"
          class="stin obdobi-{s.o.obdobi}"
          style:left="{s.x * 100}%"
          style:top="{s.y * 100}%"
          style:translate="{s.dx * 14}px 0"
          aria-label="{s.o.jmeno}, {poznamkaVRoce(s.o, rok)}"
          title="{s.o.jmeno} · {poznamkaVRoce(s.o, rok)}"
          onclick={() => onvyber(s.o.id)}
        >
          <Mince ikona={s.o.atribut?.ikona} obdobi={s.o.obdobi} varianta="stin" velikost={20} />
        </button>
      {/each}

      {#each uvnitr as z (z.misto)}
        {@const sel = z.lide.some((o) => o.id === vybrany)}
        {@const prvni = z.lide[0]}
        {@const strana = strany.get(z.misto)}
        {#if z.lide.length === 1}
          <button
            type="button"
            class="znacka obdobi-{prvni.obdobi}"
            class:znacka--vybrana={sel}
            class:znacka--vlevo={strana === 'vlevo'}
            style:left="{z.x * 100}%"
            style:top="{z.y * 100}%"
            aria-pressed={sel}
            aria-label="{prvni.jmeno}{vekKratce(prvni) ? `, ${vekKratce(prvni)}` : ''}, {mista.get(z.misto)?.nazev}"
            onclick={() => klikZnacka(z)}
            onpointerenter={() => (napoveda = { o: prvni, x: z.x, y: z.y })}
            onpointerleave={() => (napoveda = null)}
            onfocus={() => (napoveda = { o: prvni, x: z.x, y: z.y })}
            onblur={() => (napoveda = null)}
          >
            <Mince ikona={prvni.atribut?.ikona} obdobi={prvni.obdobi} varianta={sel ? 'sel' : 'ring'} velikost={sel ? 36 : 26} />
            {#if strana}<span class="znacka__jmeno">{prvni.jmeno}</span>{/if}
          </button>
        {:else}
          <button
            type="button"
            class="znacka znacka--shluk obdobi-{prvni.obdobi}"
            class:znacka--vybrana={sel}
            class:znacka--vlevo={strana === 'vlevo'}
            style:left="{z.x * 100}%"
            style:top="{z.y * 100}%"
            data-shluk={z.misto}
            aria-expanded={rozbaleny === z.misto}
            aria-label="{mista.get(z.misto)?.nazev}: {z.lide.map((o) => o.jmeno).join(', ')}"
            onclick={() => klikZnacka(z)}
          >
            <span class="shluk__mince">
              {#each z.lide.slice(0, 3) as o, i (o.id)}
                <span class="shluk__jedna obdobi-{o.obdobi}" style:z-index={3 - i}>
                  <Mince ikona={o.atribut?.ikona} obdobi={o.obdobi} varianta={o.id === vybrany ? 'sel' : 'ring'} velikost={i === 0 && sel ? 32 : 26} />
                </span>
              {/each}
            </span>
            {#if strana}<span class="znacka__jmeno">{textShluku(z)}</span>{/if}
          </button>
          {#if rozbaleny === z.misto}
            <div class="rozbaleny" class:rozbaleny--vlevo={z.x > 0.62} class:rozbaleny--nahoru={z.y > 0.45} style:left="{z.x * 100}%" style:top="{z.y * 100}%" role="group" aria-label="Lidé v místě {mista.get(z.misto)?.nazev}">
              <p class="rozbaleny__misto">{mista.get(z.misto)?.nazev}</p>
              <ul>
                {#each z.lide as o (o.id)}
                  <li class="obdobi-{o.obdobi}">
                    <button type="button" aria-pressed={o.id === vybrany} onclick={() => { onvyber(o.id); rozbaleny = null; }}>
                      <Mince ikona={o.atribut?.ikona} obdobi={o.obdobi} varianta={o.id === vybrany ? 'sel' : 'ring'} velikost={24} />
                      <span class="rozbaleny__jmeno">{o.jmeno}</span>
                      <span class="rozbaleny__vek">{vekKratce(o)}</span>
                    </button>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        {/if}
      {/each}

      {#each okraj as z (z.misto)}
        <button
          type="button"
          class="okraj obdobi-{z.lide[0].obdobi}"
          class:okraj--vybrany={z.lide.some((o) => o.id === vybrany)}
          style:left="{z.ex * 100}%"
          style:top="{z.ey * 100}%"
          aria-label="Mimo výřez: {z.lide.map((o) => o.jmeno).join(', ')} ({mista.get(z.misto)?.nazev})"
          onclick={() => onvyber(z.lide.find((o) => o.id === vybrany)?.id ?? z.lide[0].id)}
        >
          <svg class="okraj__sipka" width="14" height="14" viewBox="0 0 14 14" style:rotate="{z.uhel}deg" aria-hidden="true"><path d="M2 7h9M7 3l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <span>{z.lide[0].jmeno}{z.lide.length > 1 ? ` +${z.lide.length - 1}` : ''}</span>
        </button>
      {/each}
    </div>

    {#if napoveda}
      {@const o = napoveda.o}
      <div class="napoveda" class:napoveda--vlevo={napoveda.x > 0.6} class:napoveda--nahoru={napoveda.y > 0.6} style:left="{napoveda.x * 100}%" style:top="{napoveda.y * 100}%" aria-hidden="true">
        <strong>{o.jmeno}</strong>
        <span>{[vekKratce(o), mistoOsoby(o)].filter(Boolean).join(' · ')}</span>
        {#if o.atribut}<span class="napoveda__proc"><em>Proč {o.atribut.nazev}?</em> {o.atribut.proc}</span>{/if}
      </div>
    {/if}
  {/if}

  {#if zobrazeny}
    <div class="meritko" aria-hidden="true">
      <span class="meritko__cara" style:width="{zobrazeny.meritko.px / meritkoObrazovky}px"></span>
      <span>{zobrazeny.meritko.km} km · Podklad: Natural Earth</span>
    </div>
  {/if}

  <div class="stin-ovladani">
    <label class="prepinac-stinu">
      <input type="checkbox" checked={stin} onchange={(e) => onstin((e.currentTarget as HTMLInputElement).checked)} />
      <span>Stín odkazu</span>
    </label>
    <button
      type="button"
      class="stin-otazka"
      bind:this={tlVysvetleni}
      aria-expanded={vysvetleni}
      aria-controls="stin-vysvetleni"
      aria-label="Co je stín odkazu?"
      onclick={() => (vysvetleni = !vysvetleni)}
    >?</button>
    <div class="stin-vysvetleni" id="stin-vysvetleni" role="status">
      {#if vysvetleni}
        <p>Kdo zemřel, z mapy zmizí. Se stínem odkazu tam vybledle zůstane, dokud žije někdo, kdo ho znal, četl, učil se u něj nebo se s ním přel.</p>
      {/if}
    </div>
  </div>

  <div class="zprava" role="status" aria-live="polite">
    {#if zprava}<p>{zprava}</p>{/if}
  </div>
</div>

{#snippet podkladSvg(p: PodkladObdobi, r: Obdelnik, pruhlednost: number, cesty: { id: string; obdobi: number; d: string }[])}
  <svg class="podklad" viewBox={vbText(r)} preserveAspectRatio="xMidYMid slice" style:opacity={pruhlednost} role="img" aria-label="Mapa: {p.popis}">
    <defs><path id="pevnina-{p.obdobi}-{p.druh}" d={p.pevnina} /></defs>
    <rect x={r.x - 10} y={r.y - 10} width={r.w + 20} height={r.h + 20} class="more" />
    <path d={p.sit} class="sit" />
    <use href="#pevnina-{p.obdobi}-{p.druh}" class="svit svit--1" />
    <use href="#pevnina-{p.obdobi}-{p.druh}" class="svit svit--2" />
    <use href="#pevnina-{p.obdobi}-{p.druh}" class="pevnina" />
    {#each p.krajiny as k (k.id)}
      <text x={k.xy[0]} y={k.xy[1]} class="krajina krajina--{k.druh}" class:krajina--zakryta={zakryteKrajiny.has(k.id)} text-anchor="middle">
        {k.druh === 'more' ? k.nazev : k.nazev.toLocaleUpperCase('cs')}
        {#if k.dnes}<tspan x={k.xy[0]} dy="1.25em" class="krajina__dnes">({k.dnes})</tspan>{/if}
      </text>
    {/each}
    {#each cesty as c (c.id)}
      <path d={c.d} class="cesta obdobi-{c.obdobi}" />
    {/each}
  </svg>
{/snippet}

<style>
  .mapa { position: relative; width: 100%; height: 100%; overflow: hidden; background: var(--map-sea); font-family: var(--font-sans); contain: strict; }
  .podklad { position: absolute; inset: 0; width: 100%; height: 100%; }
  .more { fill: var(--map-sea); }
  .sit { fill: none; stroke: var(--map-sea-line); stroke-width: calc(0.6px * var(--k)); opacity: 0.7; }
  .svit { fill: none; stroke: var(--map-sea-line); stroke-linejoin: round; }
  .svit--1 { stroke-width: calc(16px * var(--k)); opacity: var(--map-glow-1); }
  .svit--2 { stroke-width: calc(7px * var(--k)); opacity: var(--map-glow-2); }
  .pevnina { fill: var(--map-land); stroke: var(--map-coast); stroke-width: calc(0.9px * var(--k)); stroke-linejoin: round; }
  .krajina { font-family: var(--font-sans); font-size: calc(11px * var(--k)); font-weight: 600; letter-spacing: 0.16em; fill: var(--muted); }
  /* Názvy moří v --ink-2: --muted má na světlém moři kontrast 4,49 : 1, těsně pod AA. */
  .krajina--more { font-family: var(--font-serif); font-style: italic; font-size: calc(16px * var(--k)); font-weight: 400; letter-spacing: 0.02em; fill: var(--ink-2); }
  .krajina--zakryta { opacity: 0.35; }
  .krajina__dnes { font-family: var(--font-sans); font-style: normal; font-size: calc(12px * var(--k)); font-weight: 500; letter-spacing: 0.02em; text-transform: none; }
  .cesta { fill: none; stroke: var(--pc); stroke-width: calc(2px * var(--k)); stroke-dasharray: calc(1px * var(--k)) calc(5px * var(--k)); stroke-linecap: round; }

  .vrstva { position: absolute; inset: 0; pointer-events: none; }
  .vrstva > * { pointer-events: auto; }
  .znacka {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 4px;
    translate: -13px -50%;
    padding: 0;
    border: 0;
    background: none;
    color: var(--ink);
    cursor: pointer;
  }
  .znacka--vybrana { translate: -18px -50%; z-index: 3; }
  .znacka--vlevo { flex-direction: row-reverse; translate: calc(-100% + 13px) -50%; }
  .znacka--vybrana.znacka--vlevo { translate: calc(-100% + 18px) -50%; }
  .znacka__jmeno {
    padding: 1px 7px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--rule) 70%, transparent);
    font-size: 12.5px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }
  .znacka--vybrana .znacka__jmeno { font-weight: 600; box-shadow: 0 0 0 1.5px var(--pc); }
  .znacka:hover .znacka__jmeno { box-shadow: 0 0 0 1.5px var(--ink); }
  .znacka:focus-visible { outline: none; }
  .znacka:focus-visible :global(.mince) { outline: 2px solid var(--ink); outline-offset: 2px; }
  .shluk__mince { display: flex; }
  .shluk__jedna { position: relative; margin-right: -14px; }
  .shluk__jedna:last-child { margin-right: 0; }
  .znacka--shluk .znacka__jmeno { margin-left: 2px; }
  .rozbaleny {
    position: absolute;
    z-index: 10;
    translate: -8px 18px;
    min-width: 200px;
    max-height: 60%;
    overflow-y: auto;
    padding: var(--s-2);
    border-radius: var(--r-sm);
    background: var(--surface);
    box-shadow: var(--stin-mapa), 0 0 0 1px var(--rule);
  }
  .rozbaleny--vlevo { translate: calc(-100% + 8px) 18px; }
  .rozbaleny--nahoru { translate: -8px calc(-100% - 18px); }
  .rozbaleny--vlevo.rozbaleny--nahoru { translate: calc(-100% + 8px) calc(-100% - 18px); }
  .rozbaleny__misto { margin: 0 0 4px 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .rozbaleny ul { margin: 0; padding: 0; list-style: none; }
  .rozbaleny button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-height: 36px;
    padding: 2px 6px;
    border: 0;
    border-radius: var(--r-xs);
    background: none;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
  }
  .rozbaleny button:hover, .rozbaleny button[aria-pressed='true'] { background: var(--pc-tint); }
  .rozbaleny__jmeno { flex: 1; font-weight: 500; }
  .rozbaleny__vek { font-size: 12px; color: var(--muted); }

  .stin { position: absolute; translate: -10px -50%; padding: 0; border: 0; background: none; cursor: pointer; }
  .okraj {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 4px;
    translate: -50% -50%;
    padding: 2px 8px 2px 6px;
    border: 1.5px dashed var(--pc);
    border-radius: 999px;
    background: color-mix(in srgb, var(--surface) 94%, transparent);
    color: var(--ink);
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
  }
  .okraj__sipka { color: var(--pc); flex: none; }
  .okraj--vybrany { border-style: solid; font-weight: 600; }

  .napoveda {
    position: absolute;
    z-index: 12;
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-width: 260px;
    translate: 14px 18px;
    padding: var(--s-2) var(--s-3);
    border-radius: var(--r-sm);
    background: var(--surface);
    box-shadow: var(--stin-mapa), 0 0 0 1px var(--rule);
    font-size: 13px;
    line-height: 1.35;
    pointer-events: none;
  }
  .napoveda--vlevo { translate: calc(-100% - 14px) 18px; }
  .napoveda--nahoru { translate: 14px calc(-100% - 18px); }
  .napoveda--vlevo.napoveda--nahoru { translate: calc(-100% - 14px) calc(-100% - 18px); }
  .napoveda strong { font-size: 14px; }
  .napoveda span { color: var(--ink-2); }
  .napoveda__proc em { font-style: normal; font-weight: 600; color: var(--ink); }

  .meritko {
    position: absolute;
    left: var(--s-3);
    bottom: var(--s-2);
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: var(--fs-popisek);
    color: var(--ink-2);
    pointer-events: none;
  }
  .meritko__cara { height: 5px; border: 2px solid var(--ink-2); border-top: 0; }
  .stin-ovladani {
    position: absolute;
    left: var(--s-3);
    top: var(--s-3);
    z-index: 15;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    max-width: calc(100% - 2 * var(--s-3));
    pointer-events: none;
  }
  .stin-ovladani > * { pointer-events: auto; }
  .stin-otazka {
    position: relative;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    box-shadow: 0 0 0 1px var(--rule);
    color: var(--ink);
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
  }
  /* Dotykový cíl 44 px kolem tlačítka o průměru 32 px. */
  .stin-otazka::after { content: ''; position: absolute; inset: -6px; }
  .stin-otazka:hover, .stin-otazka[aria-expanded='true'] { box-shadow: 0 0 0 1.5px var(--ink); }
  /* Vysvětlení stojí pod přepínačem, nikdy přes něj. */
  .stin-vysvetleni { flex-basis: 100%; }
  .stin-vysvetleni p {
    max-width: 300px;
    margin: 0;
    padding: var(--s-2) var(--s-3);
    border-radius: var(--r-sm);
    background: var(--surface);
    box-shadow: var(--stin-mapa), 0 0 0 1px var(--rule);
    color: var(--ink);
    font-size: var(--fs-ovladani);
    line-height: 1.4;
  }
  .prepinac-stinu {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 32px;
    padding: 0 10px 0 8px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--surface) 92%, transparent);
    box-shadow: 0 0 0 1px var(--rule);
    font-size: 12.5px;
    font-weight: 500;
    cursor: pointer;
  }
  .prepinac-stinu input { width: 16px; height: 16px; margin: 0; accent-color: var(--ink); }
  .zprava { position: absolute; left: 50%; top: var(--s-3); translate: -50% 0; z-index: 20; pointer-events: none; }
  .zprava p {
    margin: 0;
    padding: 8px 14px;
    border-radius: 999px;
    background: var(--ink);
    color: var(--paper);
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    box-shadow: var(--stin-mapa);
  }
  .mapa--kamera .prepinac-stinu, .mapa--kamera .stin-otazka { opacity: 0.6; }
  @media (max-width: 899px) {
    .zprava { top: auto; bottom: var(--s-6); }
    .zprava p { white-space: normal; text-align: center; max-width: 86vw; }
  }
</style>
