---
paths:
  - "src/styles/**"
  - "src/components/**"
  - "src/pages/**"
---

# Design-System „Color Club“

Salbei · Creme · Rosé · Terrakotta – organisch, verspielt, premium. Alles lebt in `src/styles/global.css`.

## Tokens (`:root`)
| Token | Wert | Einsatz |
|---|---|---|
| `--sage` / `--sage-d` | `#8fa08a` / `#5e7159` | Flächen, Kicker, Plattform-Badge |
| `--crm` | `#f7f1e5` | Seitenhintergrund |
| `--rose` | `#e8bfb4` | Pills, Hover, Akzentflächen |
| `--terra` | `#c96f4a` | CTAs, Preise, Fokus-Ring, Serif-Akzente |
| `--plum` / `--line` | `#3f4a3c` | Text, Rahmen (1.5px), dunkle Buttons |
| `--card` | `#fffdf7` | Karten, Formulare |
| `--r-lg` / `--r-md` / `--r-sm` | clamp(22–40px) / 26px / 999px | Banner / Karten / Pills und Buttons |
| `--ease` | `cubic-bezier(.22,.8,.3,1)` | alle Übergänge |
| `--maxw` / `--pad` | 1300px / 16px | Inhaltsbreite / Seitenrand |

Neue Farben zuerst als Token anlegen, dann verwenden. Kein Inline-`style` für Farben in neuem Code.
Kontrastwerte der Kombinationen stehen in der Rule `accessibility` – weiß auf `--sage` und kleiner Text in `--terra` reichen nicht für WCAG AA.

## Typografie
- Fließtext: Systemschrift `'Trebuchet MS', Verdana, Helvetica, sans-serif`.
- Akzent: `.ser` = Georgia kursiv – für das zweite Satzglied in Headlines („Finde deine *Farbwelt*“).
- **Keine Webfonts** (Google Fonts o. Ä.) – DSGVO und Performance.

## Muster
- Sektion: `<section id="…" aria-label="…">` → `.sechead` (`.over` + `h2` mit `.ser`) oder `.duo` (Bild/Text).
- Kicker: `.kick` (Großbuchstaben, Terrakotta-Strich davor).
- Buttons: `.btn` + `.fill | .terra | .ghost | .white`, Pfeil als `<span class="ar">→</span>`.
- Scroll-Reveal: Klasse `.rv` an Blöcke hängen – der IntersectionObserver in `index.astro` setzt `.in`.
- Hover-Bewegung dezent: `translateY(-3…-6px)` plus max. `rotate(-.6deg)`.

## Layout
- Mobile first. Breakpoints: 560px (Nav-Maske), 680px (How-to-Grid), 880px (Hero-Mosaik, Duo).
- Produktkarten-Bild: `aspect-ratio: 4/4.6`, `object-fit: cover`.
- Kein horizontales Scrollen bei 320px Breite.
