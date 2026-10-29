# Inhalte pflegen

Für alle, die Artikel, Texte oder Links ändern wollen – **auch ohne Programmierkenntnisse**.
Jede Änderung auf `main` ist nach ca. 2 Minuten live.

## Ohne Entwicklungsumgebung (im Browser auf GitHub)

1. Datei auf <https://github.com/teifler/eskadronverkauf> öffnen, z. B. `src/data/products.json`.
2. Stift-Symbol („Edit this file“) klicken, ändern.
3. „Commit changes…“ → kurze Beschreibung, z. B. `content: Kentucky Saddle Pad hinzugefügt` → „Commit changes“.
4. Unter „Actions“ läuft der Deploy. Grüner Haken = live. Roter Kreuz = die Inhaltsprüfung hat einen Fehler gefunden – die Meldung im Log sagt auf Deutsch, welcher Artikel und welches Feld. Die alte Version bleibt so lange online.

**Fotos hochladen:** Ordner `public/images/` öffnen → „Add file“ → „Upload files“. Am besten vorher als WebP im Hochformat speichern (Verhältnis 4 : 4,6, z. B. 1000 × 1150 px), sonst geht auch JPG.

## Wo steht was?

| Was | Datei |
|---|---|
| Artikel (Preis, Größe, Zustand, Link, Foto) | `src/data/products.json` |
| Seitentitel, Google-Beschreibung | `src/data/site.json` → `title`, `description` |
| Instagram-, TikTok-, Vinted-, Kleinanzeigen-Links | `src/data/site.json` → `links` |
| Bewertung im Header | `src/data/site.json` → `review` |
| Hero-Text („Matchy, matchy …“) | `src/components/Hero.astro` |
| Ankauf und Kommission | `src/components/Sell.astro` |
| Suchtag Donnerstag | `src/components/Thursday.astro` |
| Über uns | `src/components/About.astro` |
| Footer, Rechtliches | `src/components/Footer.astro` |
| Formular-Texte | `src/components/Assistant.astro` |
| Bilder | `public/images/` |

Mit Claude Code geht es noch einfacher: `/add-product` und dann die Artikeldaten nennen.

## Artikel (`products.json`)

```json
{ "brand": "Eskadron", "name": "Schabracke Platinum", "size": "WB", "cond": "Sehr gut", "price": 42, "plat": "Vinted", "url": "https://www.vinted.de/items/…", "img": "eskadron-platinum.webp", "fresh": false, "world": "rose", "demo": false }
```

| Feld | Bedeutung | Erlaubte Werte |
|---|---|---|
| `brand` | Marke | frei |
| `name` | Artikel ohne Marke | frei |
| `size` | Größe, erscheint als „Gr. …“ | frei (`WB`, `DR`, `Full`, `M`, `38` …) |
| `cond` | Zustand | `Neu mit Etikett`, `Neuwertig`, `Sehr gut`, `Gut`, `Gebraucht mit Spuren` |
| `price` | Preis in Euro, **ohne Anführungszeichen und ohne €** | Zahl, z. B. `42` oder `42.5` |
| `plat` | Plattform-Badge | `Vinted`, `Kleinanzeigen` |
| `url` | Link zum echten Listing | beginnt mit `https://` |
| `img` | Dateiname in `public/images/` | Datei muss existieren |
| `world` | Farbwelt für den Filter | `sage` (Salbei), `rose` (Rosé), `navy`, `braun` |
| `fresh` | `true` = „Fresh Drops“, `false` = „Aktuelle Angebote“ | `true`, `false` |
| `demo` | `true` = Badge „Demo · Symbolfoto“ | `true`, `false` |

Typische Fehler, die die Prüfung abfängt: fehlendes Komma zwischen zwei Artikeln, `"42"` oder `42 €` statt `42`, Tippfehler in `world`, Foto nicht hochgeladen.

**Verkauft?** Den ganzen Eintrag `{ … },` löschen. Auf Kommas achten: Nach dem letzten Artikel steht keins.

## Bewertung im Header

```json
"review": { "rating": 4.9, "count": 123, … }
```

Nur echte, gerade geprüfte Zahlen vom Vinted-Profil eintragen. **Beide** Werte setzen oder beide `null` lassen – dann zeigt der Header den neutralen Link „Feedback ↗“. Erfundene oder veraltete Bewertungen sind abmahnfähig.

## Texte ändern

Texte stehen direkt im HTML der Komponenten. Beim Ändern bitte:
- Du-Ansprache und „Reiter:in“ beibehalten.
- Keine Versprechen, die nicht stimmen („Versand am selben Tag“, „größte Auswahl“).
- `<span class="ser">…</span>` macht den kursiven Serifen-Akzent – nur den Text darin ändern.
