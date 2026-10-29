---
paths:
  - "src/data/**"
  - "src/components/**"
  - "src/pages/**"
  - "scripts/check-content.mjs"
---

# Inhalte und Recht

## Tonalität
- Deutsch, Du-Ansprache, warm, konkret und ein bisschen verspielt („Matchy, matchy – aber preloved.“). Gendern mit Doppelpunkt: „Reiter:in“.
- Keine Superlative ohne Beleg („die günstigsten“, „Deutschlands größte …“). Keine Dringlichkeits-Tricks („nur noch heute!“), wenn sie nicht stimmen.
- **Keine pauschalen Umweltaussagen** („nachhaltig“, „umweltfreundlich“, „grün“, „klimaneutral“) – seit 27.09.2026 per se unzulässig (UWG Anhang Nr. 4a). Konkret: „gebraucht statt neu“, „preloved“, „zweites Leben“.
- „Geprüft“ immer im Sinne von „von uns persönlich auf Zustand und Mängel angesehen“ – nie Echtheits- oder Herstellergarantie andeuten.
- Ehrlichkeit vor Verkaufsdruck: Zustand und Mängel klar benennen – das ist das Versprechen der Marke („geprüft, ehrlich beschrieben“).

## Fakten und Bewertungen
- `site.json → review.rating/count` erst eintragen, wenn die Zahlen live auf dem Vinted-Profil geprüft wurden (Screenshot oder Browser). Beide gemeinsam setzen. Sonst `null` lassen.
- Wer Bewertungen zeigt oder bewirbt, muss sagen, ob und wie sie auf Echtheit geprüft werden (§ 5b Abs. 3 UWG). Der Footer ergänzt den Hinweis automatisch, sobald `rating` gesetzt ist – nicht entfernen. Den Vinted-Link nicht „Feedback“ oder „Bewertungen“ nennen, solange keine Bewertung eingetragen ist.
- Keine erfundenen Testimonials, Kundenzahlen oder „bekannt aus“. Irreführende Werbung ist nach UWG abmahnfähig.

## Daten in `products.json`
- Erlaubte Werte stehen zentral in `scripts/check-content.mjs`:
  - `world`: `sage | rose | navy | braun`
  - `plat`: `Vinted | Kleinanzeigen`
  - `cond`: `Neu mit Etikett | Neuwertig | Sehr gut | Gut | Gebraucht mit Spuren` (identisch mit dem Verkaufsformular in `Assistant.astro`)
- Neue Farbwelt: Wert in `check-content.mjs` **und** Filter-Button + `WORLD_COLORS` in `Products.astro` **und** `docs/content.md` ergänzen.
- `price` ist eine Zahl in Euro (ohne €); formatiert wird in `Products.astro` mit `de-DE`. Jeder Preis trägt ein `*`, die Fußnote unter dem Raster erfüllt die PAngV (Endpreis, Umsatzsteuer-Hinweis aus `legal.smallBusiness`, zzgl. Versand). Kleinunternehmer:innen nie „inkl. MwSt.“ schreiben.
- `url` zeigt auf das echte Listing. Solange keins existiert: Profil-Link und `"demo": true`.

## Recht
- Impressum (`src/pages/impressum.astro`) und Datenschutz (`src/pages/datenschutz.astro`) lesen ihre Daten aus `site.json → legal`. Adresse, E-Mail, Telefon, USt-/W-IdNr. nur dort pflegen. Begründungen: ADR 0004.
- Nicht hinzufügen: OS-Plattform-Link (abgeschaltet seit 20.07.2025), „Haftung für Links“-Disclaimer, Verweise auf TMG (heute DDG), „Privacy Shield“.
- Neue Datenverarbeitung → Datenschutzerklärung **vor** dem Live-Schalten anpassen und `legal.updated` setzen. Größere Änderungen an Rechtstexten anwaltlich prüfen lassen.
- Personenbezogene Daten (Adresse, Telefonnummer, Nachnamen) nur mit ausdrücklicher Freigabe der Betroffenen. Aktuell: Impressum nennt Nele Eifler mit Anschrift (Pflichtangabe, freigegeben 2026-10-29); About nennt Nele und Kate mit Vornamen.
- Neue Formularfelder → Datenschutzerklärung und Hinweistexte in `Assistant.astro` prüfen.

## Fotos und Marken
- Unsplash-Symbolfotos nur mit `"demo": true`. Die Nachweise in Footer und Impressum erscheinen automatisch, solange es Demo-Artikel gibt.
- Eigene Produktfotos nur, wenn sie eskadronverkauf gehören. Keine Bilder von Hersteller-Websites oder fremden Listings.
- Markennamen nur beschreibend für gebrauchte Ware. Keine Herstellerlogos.
