import { defineConfig } from 'astro/config';

// GitHub Pages:
//  - Projekt-Seite  (https://USER.github.io/eskadronverkauf) -> base: '/eskadronverkauf'
//  - User-Seite     (https://USER.github.io)                 -> base: '/'
//  - Eigene Domain  (z. B. eskadronverkauf.de)               -> base: '/', site anpassen
const SITE = process.env.SITE ?? 'https://USERNAME.github.io';
const BASE = process.env.BASE_PATH ?? '/eskadronverkauf';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  compressHTML: true,
});
