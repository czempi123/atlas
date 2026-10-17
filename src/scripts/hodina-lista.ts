// Lišta hodiny a režim Promítat na stránkách atlasu (větev hodiny-v1, H3). Běží na každé stránce
// (src/layouts/Zakladni.astro); bez aktivní hodiny v této kartě nedělá nic. Logika bez DOM (které zastavení
// je aktuální, kam vede Další, krok promítání) je v src/lib/pruchod-hodiny.ts.
//  · Lišta: „Hodina: Delfy · 3 ze 7“, Předchozí a Další na sousední zastavení (neznámá přeskočí), Přehled hodiny,
//    Zavřít (v této kartě se lišta už neukáže, dokud student hodinu znovu neotevře).
//  · Promítání: u zastavení s kotvou jen jeho úsek; šipky, PageDown/PageUp a mezerník posouvají o obrazovku
//    a na konci úseku přejdou na další zastavení (zpátky na konec předchozího); F celá obrazovka; Esc konec.
//    Klávesy nesahají do polí, posuvníků a přepínačů bloků (klavesaPatriPrvku).
import {
  nactiAktivni, ulozAktivni, aktualniZastaveni, sousedniZastaveni, poradiZastaveni, cestaStranky, krokPromitani, polohaPrichodu,
  klavesaPatriPrvku, type AktivniHodina, type Plocha, type PolozkaHodiny,
} from '../lib/pruchod-hodiny';

/** Mezera mezi lištou a začátkem úseku na plátně. */
const OKRAJ_USEKU = 16;

export function spustListuHodiny(): void {
  const html = document.documentElement;
  const lista = document.querySelector<HTMLElement>('[data-hodina-lista]');
  if (!lista) return;
  const nazev = lista.querySelector<HTMLElement>('[data-hl-nazev]')!;
  const pocet = lista.querySelector<HTMLElement>('[data-hl-pocet]')!;
  const predchozi = lista.querySelector<HTMLAnchorElement>('[data-hl-predchozi]')!;
  const dalsi = lista.querySelector<HTMLAnchorElement>('[data-hl-dalsi]')!;
  const prehled = lista.querySelector<HTMLAnchorElement>('[data-hl-prehled]')!;
  const obrazovka = lista.querySelector<HTMLButtonElement>('[data-hl-obrazovka]')!;
  const zavrit = lista.querySelector<HTMLButtonElement>('[data-hl-zavrit]')!;
  const ukoncit = lista.querySelector<HTMLButtonElement>('[data-hl-ukoncit]')!;
  const main = document.querySelector<HTMLElement>('main')!;

  let hodina: AktivniHodina | null = null;
  let aktualni: number | null = null;
  let odchazim = false;
  let styl: HTMLStyleElement | null = null;

  const promitani = () => !!hodina && hodina.promitani && aktualni !== null;
  const hlavicka = document.querySelector<HTMLElement>('.hlavicka, .cesta-hlavicka');
  /** Lišta drží těsně pod hlavičkou: hlavička kroku cesty je o pár pixelů vyšší než token --hlavicka. */
  function zmerHlavicku() {
    const h = hlavicka && getComputedStyle(hlavicka).display !== 'none' ? hlavicka.getBoundingClientRect().height : 0;
    html.style.setProperty('--hlavicka-skutecna', `${h}px`);
  }
  addEventListener('resize', zmerHlavicku);
  void document.fonts?.ready.then(zmerHlavicku);
  const polozka = (): PolozkaHodiny | null => (hodina && aktualni !== null ? hodina.polozky[aktualni] : null);

  /** Prvek úseku zastavení: kotva, u nadpisu oddílu jeho oddíl; celá stránka je celý obsah stránky. */
  function usek(p: PolozkaHodiny): HTMLElement | null {
    if (!p.kotva) return main;
    const el = document.getElementById(p.kotva);
    if (!el) return null;
    if (/^H[1-6]$/.test(el.tagName)) return el.closest<HTMLElement>('[data-oddil-kotva]') ?? el;
    return el;
  }

  function odznacUsek() {
    styl?.remove();
    styl = null;
    for (const el of document.querySelectorAll('[data-promitane-predek], [data-promitane]')) {
      el.removeAttribute('data-promitane-predek');
      el.removeAttribute('data-promitane');
    }
  }

  /** Na plátně zůstane vidět jen úsek zastavení s kotvou; jeho předci zůstanou, všechno ostatní v obsahu se skryje. */
  function oznacUsek(p: PolozkaHodiny) {
    odznacUsek();
    // Hlas stojí na stránce otázky pod Tvým prvním názorem; učitel ho do hodiny vybral, na plátně se ukáže hned.
    if (p.druh === 'hlas') html.removeAttribute('data-otazka-zavreno');
    if (!p.kotva) return;
    const el = usek(p);
    if (!el || el === main) return;
    const kotva = el.getAttribute('data-oddil-kotva');
    const sel = el.id ? `#${CSS.escape(el.id)}` : kotva ? `[data-oddil-kotva="${CSS.escape(kotva)}"]` : '';
    if (!sel) return;
    el.setAttribute('data-promitane', '');
    for (let a = el.parentElement; a && a !== main; a = a.parentElement) a.setAttribute('data-promitane-predek', '');
    styl = document.createElement('style');
    styl.id = 'promitani-usek';
    styl.textContent = `html.promitani main :not(${sel}, ${sel} *, [data-promitane-predek]) { display: none !important; }`;
    document.head.append(styl);
  }

  /** Úsek a okno v souřadnicích stránky (pod lištou hodiny). */
  function plocha(): Plocha {
    const p = polozka()!;
    const el = usek(p) ?? main;
    const r = el.getBoundingClientRect();
    const h = lista!.getBoundingClientRect().height;
    return {
      poloha: scrollY + h,
      vyska: innerHeight - h,
      horni: r.top + scrollY - OKRAJ_USEKU,
      dolni: r.bottom + scrollY + OKRAJ_USEKU,
      nejvys: document.documentElement.scrollHeight - innerHeight + h,
    };
  }
  const posunNa = (poloha: number) => scrollTo({ top: Math.max(0, poloha - lista!.getBoundingClientRect().height), behavior: 'instant' });

  function nastavOdkaz(a: HTMLAnchorElement, j: number | null) {
    const p = j !== null ? hodina!.polozky[j] : null;
    if (p?.adresa) {
      a.href = p.adresa;
      a.removeAttribute('aria-disabled');
      a.dataset.index = String(j);
    } else {
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
      delete a.dataset.index;
    }
  }

  function vyplnListu() {
    const h = hodina!;
    const i = aktualni!;
    nazev.textContent = h.nazev || 'Hodina';
    pocet.textContent = poradiZastaveni(i + 1, h.polozky.length);
    nastavOdkaz(predchozi, sousedniZastaveni(h.polozky, i, -1));
    nastavOdkaz(dalsi, sousedniZastaveni(h.polozky, i, 1));
    prehled.href = h.adresa;
    obrazovka.setAttribute('aria-pressed', String(!!document.fullscreenElement));
    lista!.dataset.pripraveno = '';
  }

  /** Přečte aktivní hodinu, najde aktuální zastavení a podle toho ukáže lištu, nebo plátno. */
  async function obnov(umistit: boolean) {
    hodina = nactiAktivni();
    aktualni = hodina && !hodina.zavreno ? aktualniZastaveni(hodina.polozky, location.pathname, location.hash, hodina.posledni) : null;
    const s = aktualni !== null;
    html.classList.toggle('s-hodinou', s);
    html.classList.toggle('promitani', promitani());
    zmerHlavicku();
    if (!s) {
      odznacUsek();
      html.classList.remove('promitani-pripraveno');
      delete lista!.dataset.pripraveno;
      return;
    }
    vyplnListu();
    if (!promitani()) {
      odznacUsek();
      html.classList.remove('promitani-pripraveno');
      return;
    }
    oznacUsek(polozka()!);
    if (!umistit) {
      html.classList.add('promitani-pripraveno');
      return;
    }
    // Obsah se ukáže a stránka se posune v témže úkolu, takže prohlížeč nevykreslí nic mezi tím.
    await document.fonts?.ready;
    if (!promitani()) return;
    html.classList.add('promitani-pripraveno');
    const kam = hodina!.prichod;
    posunNa(polohaPrichodu(plocha(), kam));
    if (kam !== 'zacatek') ulozAktivni({ ...hodina!, prichod: 'zacatek' });
  }

  /** Přechod na zastavení j: na téže stránce bez nového načtení, jinak na jeho adresu. */
  function jdiNa(j: number, prichod: 'zacatek' | 'konec') {
    const p = hodina?.polozky[j];
    if (!hodina || !p?.adresa || !p.stranka) return;
    ulozAktivni({ ...hodina, posledni: j, prichod });
    if (cestaStranky(p.stranka) === cestaStranky(location.pathname)) {
      history.pushState(null, '', p.adresa);
      void obnov(true).then(() => {
        if (promitani()) return;
        const el = p.kotva ? document.getElementById(p.kotva) : null;
        if (el) el.scrollIntoView({ block: 'start' });
        else scrollTo({ top: 0 });
      });
    } else {
      odchazim = true;
      location.href = p.adresa;
    }
  }

  function krok(smer: 1 | -1) {
    if (!promitani()) return;
    const r = krokPromitani(plocha(), smer);
    if ('poloha' in r) {
      posunNa(r.poloha);
      return;
    }
    const j = sousedniZastaveni(hodina!.polozky, aktualni!, smer);
    if (j !== null) jdiNa(j, smer === 1 ? 'zacatek' : 'konec');
  }

  function celaObrazovka(zapnout: boolean) {
    if (zapnout && !document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else if (!zapnout && document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }

  function ukoncitPromitani() {
    if (!hodina) return;
    const p = polozka();
    ulozAktivni({ ...hodina, promitani: false, celaObrazovka: false });
    celaObrazovka(false);
    void obnov(false).then(() => {
      // Normální stránka se otevře tam, kde stálo zastavení.
      const el = p?.kotva ? document.getElementById(p.kotva) : null;
      if (el) el.scrollIntoView({ block: 'start' });
      prehled.focus({ preventScroll: true });
    });
  }

  /** Patří klávesa prvku s fokusem (pole, posuvník, přepínač bloku, tlačítko u mezerníku)? */
  function patriPrvku(klavesa: string): boolean {
    const el = document.activeElement as HTMLElement | null;
    if (!el || el === document.body || el === html) return false;
    const role: string[] = [];
    for (let a: HTMLElement | null = el; a && a !== document.body; a = a.parentElement) {
      const r = a.getAttribute('role');
      if (r) role.push(r);
    }
    return klavesaPatriPrvku(
      { znacka: el.tagName.toLowerCase(), typ: (el as HTMLInputElement).type, editovatelny: el.isContentEditable, role },
      klavesa,
    );
  }

  // ─── Události ───
  for (const a of [predchozi, dalsi]) {
    a.addEventListener('click', (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const j = a.dataset.index;
      if (j !== undefined) jdiNa(Number(j), 'zacatek');
    });
  }
  zavrit.addEventListener('click', () => {
    if (!hodina) return;
    ulozAktivni({ ...hodina, zavreno: true });
    void obnov(false);
    main.focus({ preventScroll: true });
  });
  ukoncit.addEventListener('click', ukoncitPromitani);
  obrazovka.addEventListener('click', () => celaObrazovka(!document.fullscreenElement));
  document.addEventListener('fullscreenchange', () => {
    obrazovka.setAttribute('aria-pressed', String(!!document.fullscreenElement));
    // Při přechodu na jinou stránku prohlížeč celou obrazovku zavře sám; přání učitele zůstává.
    if (odchazim || !hodina) return;
    hodina = { ...hodina, celaObrazovka: !!document.fullscreenElement };
    ulozAktivni(hodina);
  });
  addEventListener('pagehide', () => { odchazim = true; });
  addEventListener('pageshow', () => { odchazim = false; });
  addEventListener('popstate', () => void obnov(true));
  addEventListener('hashchange', () => {
    // Odkaz na kotvu uvnitř stránky (Kam dál z bloku): platí zastavení, na které vede.
    if (!hodina) return;
    const k = location.hash.slice(1);
    const j = hodina.polozky.findIndex((p) => p.kotva === k && p.stranka === cestaStranky(location.pathname));
    if (j >= 0) ulozAktivni({ ...hodina, posledni: j });
    void obnov(promitani());
  });

  // Celá obrazovka se po přechodu na další stránku zapne znovu při první klávese nebo klepnutí (prohlížeč to bez nich nedovolí).
  const obnovObrazovku = () => {
    if (promitani() && hodina!.celaObrazovka && !document.fullscreenElement) celaObrazovka(true);
  };
  addEventListener('pointerdown', obnovObrazovku, true);

  addEventListener('keydown', (e) => {
    if (!promitani() || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const k = e.key;
    if (k === 'Escape') {
      if (document.fullscreenElement) return; // první Esc zavře celou obrazovku (prohlížeč)
      e.preventDefault();
      ukoncitPromitani();
      return;
    }
    if (k === 'f' || k === 'F') {
      if (patriPrvku('f') || e.shiftKey) return;
      e.preventDefault();
      celaObrazovka(!document.fullscreenElement);
      return;
    }
    obnovObrazovku();
    const vpred = k === 'ArrowRight' || k === 'PageDown' || (k === ' ' && !e.shiftKey);
    const vzad = k === 'ArrowLeft' || k === 'PageUp' || (k === ' ' && e.shiftKey);
    if (!vpred && !vzad) return;
    if (patriPrvku(k)) return;
    e.preventDefault();
    krok(vpred ? 1 : -1);
  });

  void obnov(true);
}
