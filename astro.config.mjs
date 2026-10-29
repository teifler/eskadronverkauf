import { defineConfig } from 'astro/config';

// Im Deploy-Workflow setzt actions/configure-pages SITE und BASE_PATH aus den Pages-Einstellungen
// des Repos – eine eigene Domain funktioniert dadurch ohne Code-Änderung (der Workflow übergibt dann '/').
// Die Fallbacks gelten für lokale Builds.
const SITE = process.env.SITE || 'https://teifler.github.io';
const BASE = process.env.BASE_PATH || '/eskadronverkauf';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  compressHTML: true,
});
