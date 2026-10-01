// Jemné odkrytí zpětné vazby: krátké vyjetí a zesílení. Při omezeném pohybu bez animace.
import { fly } from 'svelte/transition';

export function omezenyPohyb(): boolean {
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function odkryti(node: Element, { y = 10, duration = 260 }: { y?: number; duration?: number } = {}) {
  return fly(node, { y, duration: omezenyPohyb() ? 0 : duration, opacity: 0 });
}
