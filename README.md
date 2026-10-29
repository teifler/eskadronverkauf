# eskadronverkauf – Color Club (Astro)

Landingpage für @eskadronverkauf (Reitsport Second Hand) im Design **Color Club**.
Astro 5, kein Framework-JS, nur kleine Vanilla-Inseln (Farbwelten-Filter, Kontakt-Assistent, Foto-Upload).

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Produktions-Build nach dist/
npm run preview    # dist/ lokal ansehen
```

## In 3 Schritten auf GitHub Pages

1. **Repo anlegen & pushen**
   ```bash
   git init && git add -A && git commit -m "init"
   git branch -M main
   git remote add origin git@github.com:USERNAME/eskadronverkauf.git
   git push -u origin main
   ```
2. **`astro.config.mjs` anpassen:** `SITE` auf `https://USERNAME.github.io` setzen (bzw. eigene Domain). `BASE` bleibt `/eskadronverkauf` (= Repo-Name). Bei eigener Domain: `BASE = '/'`.
3. **GitHub → Repo → Settings → Pages → Source: „GitHub Actions“.** Der Workflow `.github/workflows/deploy.yml` baut und deployt bei jedem Push auf `main` automatisch.

Live-URL: `https://USERNAME.github.io/eskadronverkauf/`

## Artikel pflegen

`src/data/products.json` – pro Artikel ein Objekt:

| Feld | Bedeutung |
|---|---|
| `brand`, `name`, `size`, `cond`, `price` | Anzeige auf der Karte |
| `plat`, `url` | Plattform-Badge + Link zum echten Listing (Vinted/Kleinanzeigen) |
| `img` | Dateiname in `public/images/` |
| `world` | Farbwelt-Filter: `sage` \| `rose` \| `navy` \| `braun` |
| `fresh` | `true` = Sektion „Fresh Drops“, sonst „Aktuelle Angebote“ |
| `demo` | `true` = Badge „Demo · Symbolfoto“. Bei echten Produktfotos auf `false` setzen. |

Eigene Produktfotos einfach als `.webp`/`.jpg` nach `public/images/` legen und in der JSON referenzieren.

## Bewertungen (Header)

`src/data/site.json` → `review`: Solange `rating`/`count` `null` sind, zeigt der Header den neutralen Link „Feedback ↗“.
**Erst mit verifizierten Zahlen füllen** (Vinted-Profil checken), dann erscheint `★ 4,9 (123) ↗` automatisch.
Keine erfundenen Bewertungen eintragen – wettbewerbsrechtlich riskant.

## Formulare

- **Wunschstück & Kontakt:** laufen standardmäßig im klar gekennzeichneten **Demo-Modus** (keine Übertragung).
  Echtes Senden: kostenlosen Key bei [web3forms.com](https://web3forms.com) holen und als `.env` anlegen:
  ```
  PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-....
  ```
  Dann neu bauen – beide Formulare senden per E-Mail, der Demo-Hinweis verschwindet.
- **Verkaufsformular (mit Fotos):** bleibt bewusst Demo, bis ein Upload-Backend existiert.
  Optionen: Formspree (Datei-Upload im Bezahlplan), eigener Cloudflare Worker + R2, oder kleiner Endpoint auf eurem Server.
  Einstiegspunkt im Code: `src/components/Assistant.astro`, Kommentar „Verkaufsformular: bewusst Demo…“.

## Noch offen für den Live-Gang

- Impressum / Datenschutz / Widerruf (Footer-Platzhalter ersetzen)
- Echte Produktfotos + echte Listing-Links (`demo: false`)
- Vinted-Bewertung verifizieren und in `site.json` eintragen
- Instagram-Feed optional über Meta Graph API/oEmbed oder Widget (Behold, LightWidget)

## Lizenzen

Fotos in `public/images/`: Unsplash (Unsplash-Lizenz, Symbolfotos). Bei Ersatz durch eigene Fotos entfällt der Hinweis im Footer.
