---
name: go-live-check
description: Launch-Readiness prüfen, bevor die Seite offiziell beworben, in die Instagram-Bio gesetzt oder an eine eigene Domain gehängt wird – Rechtstexte, Demo-Artikel, verifizierte Bewertungen, Formular-Modus, SEO/Social-Vorschau, Barrierefreiheit, Performance. Für „Go-Live“, „Launch“, „ist die Seite fertig?“, „Live-Check“.
---

# Go-Live-Check

Ergebnis ist eine Tabelle **Bereich · Status (✅ / ⚠️ / ❌) · Befund · nächster Schritt**. ❌ = Blocker für den Launch.
Nichts automatisch „reparieren“, was Inhalte oder Recht betrifft – Befunde berichten, Fixes vorschlagen.

## 1. Recht (Blocker)

```bash
grep -n "(folgt)" src/components/Footer.astro
```

- Impressum (§ 5 DDG), Datenschutzerklärung (DSGVO, inkl. Web3Forms und GitHub Pages als Hoster), Widerrufsbelehrung, falls über die Seite verkauft wird.
- Treffer → ❌.

## 2. Inhalte

```bash
node -e 'const p=require("./src/data/products.json").products;console.log(p.length,"Artikel,",p.filter(x=>x.demo).length,"Demo")'
grep -n '"rating"\|"count"' src/data/site.json
```

- Demo-Artikel > 0 → ⚠️ (gekennzeichnet, aber nicht launch-reif). Alle Demo → ❌.
- Bewertung `null` → ✅ (neutraler Link). Gesetzt → nur ✅, wenn heute auf dem Vinted-Profil gegengeprüft.
- Footer-Hinweise („Demo-Artikel sind gekennzeichnet“, „Fotos: Unsplash“) passen zum tatsächlichen Stand?

## 3. Formulare

```bash
gh variable list --repo teifler/eskadronverkauf
```

- `PUBLIC_WEB3FORMS_KEY` fehlt → Wunsch- und Kontaktformular im Demo-Modus → ⚠️.
- Gesetzt → eine Testnachricht über die Live-Seite schicken und Eingang bestätigen lassen.
- Verkaufsformular ist ohne Upload-Backend immer Demo → ⚠️, solange es prominent beworben wird.

## 4. SEO und Social-Vorschau

```bash
npm run build
grep -oE '<title>[^<]*|(canonical|og:url|og:image|og:title)"[^>]*' dist/index.html
```

- Alle URLs absolut und auf die echte Domain zeigend.
- OG-Bild öffnet (`curl -sI <og:image-URL>` → 200). Optional Vorschau-Test: <https://www.opengraph.xyz/>.

## 5. Barrierefreiheit und Performance

```bash
npx --yes lighthouse https://teifler.github.io/eskadronverkauf/ --only-categories=performance,accessibility,seo,best-practices --form-factor=mobile --quiet --chrome-flags="--headless" --output=json --output-path=./lighthouse.json
node -e 'const r=require("./lighthouse.json");for(const[k,v]of Object.entries(r.categories))console.log(k,Math.round(v.score*100))'
rm lighthouse.json
```

- Ziel: jede Kategorie ≥ 90. Bekannte Schwäche: Kontraste (Rule `accessibility`).
- Manuell: Tastatur-Durchlauf (Tab durch Nav, Filter, Modals, Escape schließt), Mobil 375 px ohne horizontales Scrollen.

## 6. Technik

- `gh run list --workflow=deploy.yml --limit 1` → letzter Deploy grün.
- Eigene Domain geplant? → `docs/deployment.md` → „Eigene Domain“ (HTTPS erzwingen!).

## 7. Abschluss

Tabelle ausgeben, Blocker zuerst. Offene Punkte mit `docs/roadmap.md` und den Issues im Meilenstein „Go-Live“ abgleichen und auf Abweichungen hinweisen.
