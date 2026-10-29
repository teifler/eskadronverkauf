---
paths:
  - "src/components/**"
  - "src/pages/**"
  - "src/styles/**"
---

# Barrierefreiheit

## Bilder
- Jedes `<img>` mit `width`/`height` (kein Layout-Shift) und sinnvollem `alt`. Dekoratives: `alt=""` oder `aria-hidden="true"`.
- Demo-Artikel: Alt-Text beginnt mit „Symbolfoto zum Demo-Artikel …“ (macht `Products.astro` automatisch).
- `loading="lazy"` überall außer dem LCP-Bild im Hero (`palomino.webp`: `fetchpriority="high"` + `<link rel="preload">` in `index.astro`).

## Modals (Muster in `Assistant.astro`)
- Container: `<div class="ov" id="ov-KEY" role="dialog" aria-modal="true" aria-labelledby="…">` mit `.panel` und Schließen-Button `data-close`.
- Den Key in `ovs` registrieren; öffnen per `data-open="KEY"` an beliebigem Element.
- Fokus-Falle, Escape und Fokus-Rückgabe sind zentral gelöst – nicht pro Modal neu bauen.

## Formulare
- Jedes Feld: `.fld` mit `<label for>`, Pflichtfelder mit `<span class="req">*</span>` und einer `.err`-Meldung.
- `novalidate` am Formular; Validierung per `markBad()`. Fehlermeldungen konkret („Bitte gib eine gültige E-Mail-Adresse ein.“).
- Statusmeldungen nach dem Senden mit `role="status"`, Upload-Fehler mit `role="alert"`.

## Bewegung, Fokus, Kontrast
- Animationen respektieren `prefers-reduced-motion` (global in `global.css` gelöst – neue Animationen nicht mit `!important` dagegen arbeiten).
- Fokus sichtbar lassen (`:focus-visible` mit Terrakotta-Ring). Kein `outline: none` ohne Ersatz.
- WCAG AA: 4.5:1 für normalen Text, 3:1 für großen (≥ 24px oder ≥ 18.66px fett). Gemessene Werte der Tokens:

  | Kombination | Kontrast | AA |
  |---|---|---|
  | `--plum` auf `--crm` (Fließtext) | 8.27 | ✓ |
  | `#5d665a` auf `--crm` (Lead) | 5.31 | ✓ |
  | `--sage-d` auf `--crm` (Kicker) | 4.69 | ✓ |
  | `--terra` auf `--crm` (Preise, Serif-Akzente) | 3.19 | nur große Schrift |
  | weiß auf `--terra` (CTA-Buttons) | 3.59 | nur große Schrift |
  | weiß auf `--sage` (Suchtag-Banner, Plattform-Badge) | 2.78 | ✗ |

  Die letzten drei sind eine **bekannte Schwäche** (Roadmap-Punkt „Kontraste“). Neue Elemente nicht nach diesem Muster bauen – für kleinen Text auf farbigen Flächen `--plum` oder `--sage-d` als Hintergrund nehmen.
- Skip-Link „Zum Inhalt springen“ zeigt auf `#angebote` – bei neuer Sektionsreihenfolge anpassen.
