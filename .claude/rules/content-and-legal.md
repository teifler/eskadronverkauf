---
paths:
  - "src/data/**"
  - "src/components/**"
  - "src/pages/**"
  - "scripts/check-content.mjs"
---

# Inhalte und Recht

## Tonalität
- Deutsch, Du-Ansprache, warm, konkret und ein bisschen verspielt („Matchy, matchy – aber nachhaltig.“). Gendern mit Doppelpunkt: „Reiter:in“.
- Keine Superlative ohne Beleg („die günstigsten“, „Deutschlands größte …“). Keine Dringlichkeits-Tricks („nur noch heute!“), wenn sie nicht stimmen.
- Ehrlichkeit vor Verkaufsdruck: Zustand und Mängel klar benennen – das ist das Versprechen der Marke („geprüft, ehrlich beschrieben“).

## Fakten und Bewertungen
- `site.json → review.rating/count` erst eintragen, wenn die Zahlen live auf dem Vinted-Profil geprüft wurden (Screenshot oder Browser). Beide gemeinsam setzen. Sonst `null` lassen.
- Keine erfundenen Testimonials, Kundenzahlen oder „bekannt aus“. Irreführende Werbung ist nach UWG abmahnfähig.

## Daten in `products.json`
- Erlaubte Werte stehen zentral in `scripts/check-content.mjs`:
  - `world`: `sage | rose | navy | braun`
  - `plat`: `Vinted | Kleinanzeigen`
  - `cond`: `Neu mit Etikett | Neuwertig | Sehr gut | Gut | Gebraucht mit Spuren` (identisch mit dem Verkaufsformular in `Assistant.astro`)
- Neue Farbwelt: Wert in `check-content.mjs` **und** Filter-Button + `WORLD_COLORS` in `Products.astro` **und** `docs/content.md` ergänzen.
- `price` ist eine Zahl in Euro (ohne €); formatiert wird in `Products.astro` mit `de-DE`.
- `url` zeigt auf das echte Listing. Solange keins existiert: Profil-Link und `"demo": true`.

## Recht
- Footer-Links „Impressum / Datenschutz / Widerruf (folgt)“ erst ersetzen, wenn echte Texte vorliegen. Keine Rechtstexte selbst formulieren – Generator (z. B. eRecht24, IT-Recht Kanzlei) oder Anwält:in. Impressumspflicht nach § 5 DDG.
- Personenbezogene Daten (Adresse, Telefonnummer, Nachnamen) nur mit ausdrücklicher Freigabe der Betroffenen. Aktuell genannt: Nele und Kate (Vornamen, About-Sektion).
- Neue Formularfelder → Datenschutzerklärung und Einwilligungstext prüfen.

## Fotos und Marken
- Unsplash-Symbolfotos nur mit `"demo": true` und dem Footer-Hinweis „Fotos: Unsplash“.
- Eigene Produktfotos nur, wenn sie eskadronverkauf gehören. Keine Bilder von Hersteller-Websites oder fremden Listings.
- Markennamen nur beschreibend für gebrauchte Ware. Keine Herstellerlogos.
