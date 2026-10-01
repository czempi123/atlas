<script lang="ts">
  // Nejdřív sám: starší jméno bloku Odkryj. Zůstává kvůli hotovým stránkám (Sókratův profil);
  // nový obsah vkládej přes <Odkryj> z src/components/bloky.
  import type { Snippet } from 'svelte';
  import Odkryj from './Odkryj.svelte';

  interface Props {
    id: string;
    nadtitulek?: string;
    otazka: string;
    tlacitko: string;
    odkaz: string;
    children: Snippet;
  }
  let { id, nadtitulek = 'Než budeš číst dál', otazka, tlacitko, odkaz, children }: Props = $props();
</script>

<Odkryj {id} {nadtitulek} {otazka} {tlacitko} {odkaz} {children} />
