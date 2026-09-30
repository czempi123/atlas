# Vzor komponenty

## Soubory

| Co | Kde |
| --- | --- |
| Ostrov (interaktivní) | `src/components/ostrovy/Jmeno.svelte`, u velkých nástrojů vlastní složka (`src/components/mapa/`) |
| Statická část bez JavaScriptu | `src/components/<oblast>/Jmeno.astro` |
| Čistá logika | `src/lib/<tema>.ts` + `tests/data/<tema>.test.ts` |
| Průchod v prohlížeči | `tests/e2e/<tema>.spec.ts`, snímky do `test-results/snimky/` |

## Kostra ostrovu

```svelte
<script lang="ts">
  // Volba s důvodem: student vybere možnost a může připsat proč; zpětná vazba patří k volbě.
  // Použití v MDX:
  // <Volba client:visible id="sokrates-utek" otazka="Co bys udělal?" moznosti={[...]} />
  import { onMount } from 'svelte';
  import { ulozZapis } from '../../lib/denik';

  interface Props {
    id: string;
    otazka: string;
  }
  let { id, otazka }: Props = $props();
  let vybrano = $state<string | null>(null);

  onMount(() => {
    // Jen tady (ne při sestavení): localStorage, matchMedia, requestAnimationFrame.
  });
</script>

<section class="blok" aria-labelledby="{id}-otazka">
  <p class="t-nadtitulek nadtitulek">Tvůj tah</p>
  <h3 class="t-h3" id="{id}-otazka">{otazka}</h3>
  …
</section>

<style>
  .blok { padding: var(--s-5); border: 1px solid var(--rule); border-radius: var(--r-md); background: var(--surface); }
  .nadtitulek { color: var(--pc, var(--ink)); }
</style>
```

## Tokeny a vzhled

- Barvy jen přes proměnné z `src/styles/tokens.css`: `--paper`, `--surface`, `--sunk`, `--rule`, `--muted`, `--ink-2`, `--ink`; barva období přes třídu `obdobi-N` na předkovi (`--pc`, `--pc-tint`, `--pc-soft`, `--pc-plate`, `--pc-on-plate`).
- Písma: `--font-serif` (Newsreader) pro čtení a otázky, `--font-sans` (Instrument Sans) pro ovládání; velikosti třídami `t-h3`, `t-ovladani`, `t-popisek`…
- Mezery `--s-1` až `--s-10`, zaoblení `--r-*`, pohyb `--pohyb*` (při omezeném pohybu nulový).
- Tlačítka podle design.md: hlavní (`--ink`, text `--paper`, výška 48–56), vedlejší (obrys `--ink`), tiché (obrys `--rule`).
- Volba s důvodem: karty A–D aspoň 60 px, vybraná s okrajem 2 px a tintem období, zpětná vazba v tintu s titulkem „Tvůj tah: …“ a oddílem „Co udělal …“.

## Přístupnost

- Každý ovládací prvek je `<button>`, `<input>`, `<a>` nebo má správnou roli (`slider`, `tab`…) a ovládání klávesnicí podle ARIA vzorů.
- Seznam mnoha podobných prvků (řádky, karty) = jedna zastávka tabulátoru a šipky mezi nimi (roving tabindex).
- Změny, které student má slyšet (odkrytí, zpráva), jdou do oblasti `aria-live="polite"`.
- Fokus 2 px `--ink` s odsazením, jen při `:focus-visible`.
- Kontrast AA pro všechen text ve světlém i tmavém režimu; ikony `aria-hidden`, význam nese text nebo `aria-label`.
