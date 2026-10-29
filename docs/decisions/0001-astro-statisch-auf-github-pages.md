# 0001 – Astro als statische Seite auf GitHub Pages

- **Status:** Angenommen
- **Datum:** 2026-10-29

## Kontext

eskadronverkauf verkauft über Vinted und Kleinanzeigen. Die Website ist eine Visitenkarte mit Schaufenster: Sie zeigt ausgewählte Artikel, verlinkt auf die echten Listings und sammelt Anfragen (Verkaufen, Wunschstück, Kontakt). Ein Warenkorb oder Checkout ist nicht geplant. Budget für Hosting: idealerweise 0 €. Inhalte sollen auch ohne Entwicklungsumgebung pflegbar sein.

## Entscheidung

Statische Seite mit **Astro 5**, Inhalte in **JSON-Dateien**, Hosting auf **GitHub Pages** mit Deploy über GitHub Actions. Kein UI-Framework, nur kleine Vanilla-Skripte.

## Alternativen

| Option | Pro | Contra |
|---|---|---|
| Shopify / Shop-System | Checkout, Lagerverwaltung | Monatliche Kosten; doppelte Pflege neben Vinted; überdimensioniert |
| WordPress / Baukasten (Wix, Jimdo) | Bekannte Oberfläche | Kosten, Wartung, Plugins/Tracking, schwerer reproduzierbar |
| Netlify / Vercel / Cloudflare Pages | Serverless-Funktionen für Formulare | Weiteres Konto; für eine statische Seite unnötig – bleibt Option für das Upload-Backend |
| Reines HTML ohne Build | Null Tooling | Keine Datentrennung, Duplikate bei Produktkarten |

## Konsequenzen

- Kostenlos, schnell, sicher (keine Angriffsfläche auf dem Server), Versionsgeschichte durch Git.
- Artikel pflegen = JSON bearbeiten. Abgesichert durch `scripts/check-content.mjs`, damit Edits im GitHub-Web-Editor nichts zerschießen.
- Die Seite läuft unter `/eskadronverkauf/`: alle Pfade über `asset()`. Mit eigener Domain entfällt der Unterordner automatisch.
- Kein Server → alles mit Datenübertragung braucht einen Drittdienst ([ADR 0002](0002-formulare-web3forms-und-demo-modus.md)).
- **Grauzone Nutzungsbedingungen:** GitHub Pages ist laut GitHub nicht für Seiten gedacht, die „primarily directed at facilitating commercial transactions“ sind. Die Seite verkauft nicht selbst, sondern verweist auf Vinted und Kleinanzeigen – für Prototyp und Start vertretbar. Für den Dauerbetrieb mit eigener Domain einen Umzug auf Cloudflare Pages oder Netlify prüfen (Free-Tier, kommerzielle Nutzung erlaubt, gleicher Build). Siehe [#8](https://github.com/teifler/eskadronverkauf/issues/8). Ein echter Online-Shop wäre ohnehin ein neuer ADR.
