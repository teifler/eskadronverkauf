---
paths:
  - "src/**"
  - "public/**"
  - "astro.config.mjs"
  - ".github/workflows/**"
---

# Base-Path, Links und Deploy-Konfiguration

Die Seite läuft auf GitHub Pages unter einem Unterordner: `https://teifler.github.io/eskadronverkauf/`.

- Interne Dateien (Bilder, Favicon) **immer** über `asset('images/…')` aus `src/lib/url.ts`. Ein hart codiertes `/images/x.webp` geht live auf 404.
- Absolute URLs (OG, canonical, JSON-LD) mit `new URL(asset(…), Astro.site)` bauen.
- Anker (`#angebote`, `#verkaufen`, `#wunsch`, `#drops`, `#ueber`, `#top`) in Komponenten, die auf mehreren Seiten erscheinen (Header, Footer), immer mit `` `${base}#anker` `` – sonst springen sie auf Impressum/Datenschutz ins Leere. Unterseiten: `` `${base}impressum/` ``. Bei umbenannten IDs Header, Footer und Skip-Link mitziehen.
- Externe Links: `target="_blank" rel="noopener"`, Ziel aus `site.json → links` statt hart codiert.

## `SITE` / `BASE_PATH`
- `astro.config.mjs` liest beides aus der Umgebung, mit Fallback auf GitHub Pages.
- Im Deploy setzt `actions/configure-pages` die Werte aus den Pages-Einstellungen; bei eigener Domain übergibt der Workflow `BASE_PATH=/`.
- Prüfen: `npm run build && npm run preview` und unter `/eskadronverkauf/` klicken. Für eine Domain-Simulation: `SITE=https://example.de BASE_PATH=/ npm run build`.

## Workflows
- Keine ungeprüften Event-Inhalte (`github.event.*.title/body`, `head_ref` …) in `run:`-Zeilen.
- `cancel-in-progress: false` beim Pages-Deploy beibehalten – laufende Produktions-Deploys nicht abbrechen.
