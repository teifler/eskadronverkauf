---
name: add-product
description: Artikel in src/data/products.json anlegen, ändern, als verkauft entfernen oder von Demo auf echt umstellen – inklusive Produktfoto in public/images/. Nutzen, wenn jemand einen Artikel, ein Listing, einen Vinted- oder Kleinanzeigen-Link, einen Preis oder ein Produktfoto hinzufügen, ändern oder entfernen will.
argument-hint: "[Marke Artikel, Größe, Zustand, Preis, Link, Foto-Pfad]"
---

# Artikel pflegen

Artikeldaten: `src/data/products.json` → `products[]`. Erlaubte Werte und Pflichtfelder prüft `scripts/check-content.mjs`.

## 1. Angaben sammeln – nicht raten

| Feld | Pflicht | Regel |
|---|---|---|
| `brand` | ✓ | Markenname wie vom Hersteller geschrieben („PS of Sweden“, „Maya Delorez“) |
| `name` | ✓ | Kurz, ohne Marke und Größe („Schabracke Platinum“) |
| `size` | ✓ | Wie im Listing: `WB`, `DR`, `Full`, `Cob`, `M`, `38` … – Karte zeigt „Gr. …“ |
| `cond` | ✓ | `Neu mit Etikett` · `Neuwertig` · `Sehr gut` · `Gut` · `Gebraucht mit Spuren` |
| `price` | ✓ | Zahl in Euro, ohne Anführungszeichen (`42` oder `42.5`) |
| `plat` | ✓ | `Vinted` oder `Kleinanzeigen` |
| `url` | ✓ | Direkter Link zum Listing (`https://…`). Kein Listing → Profil-Link + `demo: true` |
| `img` | ✓ | Dateiname in `public/images/` |
| `world` | ✓ | Farbwelt: `sage` (Salbei/Grün/Mint) · `rose` (Rosé/Pink/Beere) · `navy` (Navy/Blau/Schwarz) · `braun` (Braun/Cognac/Beige) |
| `fresh` | ✓ | `true` = „Fresh Drops“, `false` = „Aktuelle Angebote“ |
| `demo` | ✓ | `false` nur bei **echtem Foto und echtem Listing** |

Fehlen Preis, Link oder Zustand: nachfragen. Bei unklarer Farbwelt einen Vorschlag machen und bestätigen lassen.

## 2. Foto vorbereiten

- Nur Fotos, die eskadronverkauf gehören. Keine Bilder von Hersteller-Seiten oder fremden Listings.
- Karte zeigt das Bild im Verhältnis **4 : 4.6** (Hochformat). Zuschneiden und als WebP speichern:

  ```bash
  magick EINGABE.jpg -auto-orient -resize 1000x1150^ -gravity center -extent 1000x1150 -strip -quality 80 public/images/marke-artikel.webp
  ```

- Dateiname: kebab-case, `marke-artikel[-farbe].webp`. Zielgröße < 200 KB (`ls -lh public/images/`).

## 3. Eintragen

- Ein Objekt pro Zeile, Feldreihenfolge wie die bestehenden Einträge.
- Neue Artikel oben in die Liste (erscheinen zuerst).
- Darauf achten, dass beide Sektionen etwas zeigen: mindestens ein Artikel mit `fresh: true` und einer mit `fresh: false`.

## 4. Verkauft / entfernen

- Objekt löschen. Danach prüfen, ob das Bild noch gebraucht wird: `grep -rn "DATEINAME" src/` – wenn nicht, `git rm public/images/DATEINAME`.
- Unsplash-Symbolfotos (`hero_bay`, `palomino`, `flatlay`, `chestnut`, `brown_port`, `mountain`) werden auch in Hero, Sell und About benutzt – nie löschen, ohne zu greppen.

## 5. Prüfen

```bash
npm run build      # führt zuerst check-content aus
```

Bei einem neuen echten Artikel zusätzlich im Browser (`npm run dev`): Bild sitzt, Badge „Demo“ ist weg, Link öffnet das Listing.

## 6. Abschluss

- Commit: `content: <Marke> <Artikel> hinzugefügt` (bzw. `aktualisiert` / `entfernt`).
- Reines Artikel-Pflegen braucht keinen CHANGELOG-Eintrag. Ausnahme: der erste echte Artikel (Meilenstein) oder ein neues Feld.
- Wenn alle Artikel `demo: false` sind: Footer-Hinweis „Demo-Artikel sind gekennzeichnet“ und „Fotos: Unsplash“ anpassen und den Roadmap-Punkt schließen.
- Pushen nur auf Wunsch → Skill `ship`.
