<script lang="ts">
  // Hledání přes Pagefind (statický index vytvořený při sestavení). Otevírá se tlačítkem nebo klávesou /.
  import { onMount } from 'svelte';

  let dialog: HTMLDialogElement;
  let nacteno = $state(false);
  let chyba = $state(false);

  async function nactiPagefind() {
    if (nacteno) return;
    try {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = '/pagefind/pagefind-ui.css';
      document.head.append(css);
      await new Promise<void>((ok, ne) => {
        const s = document.createElement('script');
        s.src = '/pagefind/pagefind-ui.js';
        s.onload = () => ok();
        s.onerror = () => ne(new Error('Pagefind není sestavený'));
        document.head.append(s);
      });
      // @ts-expect-error PagefindUI přidá skript výše
      new window.PagefindUI({ element: '#hledani-vysledky', showSubResults: true, showImages: false, resetStyles: false, autofocus: true });
      nacteno = true;
    } catch {
      chyba = true;
    }
  }

  async function otevri() {
    dialog.showModal();
    await nactiPagefind();
    (dialog.querySelector('input') as HTMLInputElement | null)?.focus();
  }

  onMount(() => {
    const klavesa = (e: KeyboardEvent) => {
      const cil = e.target as HTMLElement;
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !/INPUT|TEXTAREA|SELECT/.test(cil.tagName) && !cil.isContentEditable) {
        e.preventDefault();
        otevri();
      }
    };
    window.addEventListener('keydown', klavesa);
    return () => window.removeEventListener('keydown', klavesa);
  });
</script>

<button class="hledat" type="button" onclick={otevri} aria-haspopup="dialog" aria-keyshortcuts="/" aria-label="Hledat (klávesa /)">
  <svg width="20" height="20" aria-hidden="true"><use href="/ikony/ui.svg#hledat" /></svg>
  <span class="hledat__text">Hledat</span>
  <kbd>/</kbd>
</button>

<dialog bind:this={dialog} class="dialog" aria-label="Hledání v atlasu" onclick={(e) => e.target === dialog && dialog.close()}>
  <div class="dialog__vnitrek">
    <div class="dialog__hlavicka">
      <h2 class="t-h3">Hledat v atlasu</h2>
      <button class="zavrit" type="button" onclick={() => dialog.close()} aria-label="Zavřít hledání">
        <svg width="22" height="22" aria-hidden="true"><use href="/ikony/ui.svg#zavrit" /></svg>
      </button>
    </div>
    <div id="hledani-vysledky"></div>
    {#if chyba}
      <p class="t-popisek">Hledání je dostupné v sestaveném webu (npm run build a npm run preview).</p>
    {/if}
  </div>
</dialog>

<style>
  .hledat {
    display: inline-flex;
    align-items: center;
    gap: var(--s-2);
    min-width: var(--dotyk);
    min-height: var(--dotyk);
    padding: 0 var(--s-3);
    justify-content: center;
    border: 1px solid transparent;
    border-radius: var(--r-sm);
    background: none;
    color: var(--ink-2);
    font-family: var(--font-sans);
    font-size: var(--fs-ovladani);
    font-weight: 500;
    cursor: pointer;
  }
  .hledat:hover { color: var(--ink); border-color: var(--rule); }
  .hledat__text, kbd { display: none; }
  kbd {
    padding: 0 6px;
    border: 1px solid var(--rule);
    border-radius: var(--r-xs);
    font-family: var(--font-sans);
    font-size: 12px;
    color: var(--muted);
  }
  @media (min-width: 900px) {
    .hledat { border-color: var(--rule); min-width: 160px; justify-content: flex-start; }
    .hledat__text { display: inline; margin-right: auto; }
    kbd { display: inline; }
  }
  .dialog {
    width: min(720px, calc(100vw - 32px));
    max-height: min(80vh, 760px);
    margin: 10vh auto auto;
    padding: 0;
    border: 1px solid var(--rule);
    border-radius: var(--r-md);
    background: var(--surface);
    color: var(--ink);
    box-shadow: var(--stin-mapa);
  }
  .dialog::backdrop { background: rgb(0 0 0 / 35%); }
  .dialog__vnitrek { padding: var(--s-5); }
  .dialog__hlavicka { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--s-4); }
  .zavrit {
    display: grid; place-items: center;
    width: var(--dotyk); height: var(--dotyk);
    border: 0; border-radius: var(--r-full); background: none; color: var(--ink-2); cursor: pointer;
  }
  .zavrit:hover { background: var(--sunk); color: var(--ink); }
  :global(#hledani-vysledky) {
    --pagefind-ui-scale: 0.9;
    --pagefind-ui-primary: var(--ink);
    --pagefind-ui-text: var(--ink);
    --pagefind-ui-background: var(--surface);
    --pagefind-ui-border: var(--rule);
    --pagefind-ui-tag: var(--sunk);
    --pagefind-ui-border-width: 1px;
    --pagefind-ui-border-radius: 8px;
    --pagefind-ui-font: var(--font-sans);
  }
  :global(#hledani-vysledky .pagefind-ui__result-title) { font-family: var(--font-serif); }
  :global(#hledani-vysledky mark) { background: var(--period-1-tint); color: var(--ink); }
</style>
