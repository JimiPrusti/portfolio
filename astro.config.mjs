import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jimiprusti.github.io',
  base: '/portfolio',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
});
