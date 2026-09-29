// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// Atlas myšlení: statický web, interaktivní ostrovy ve Svelte, obsah v MDX.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [svelte(), mdx()],
  devToolbar: { enabled: false },
});
