# 0002 – Formulare über Web3Forms, Demo-Modus ohne Key

- **Status:** Angenommen
- **Datum:** 2026-10-29

## Kontext

Die Seite hat drei Formulare: Kontakt, Wunschstück und Verkaufen (mit bis zu 6 Fotos). GitHub Pages kann nichts empfangen. Der Prototyp soll trotzdem vollständig vorführbar sein, ohne vorzutäuschen, dass etwas ankommt.

## Entscheidung

1. **Kontakt und Wunschstück** senden per `fetch` an **Web3Forms** (kostenlos, nur E-Mail-Weiterleitung), sobald `PUBLIC_WEB3FORMS_KEY` beim Build gesetzt ist. Ohne Key: klar gekennzeichneter Demo-Modus.
2. **Verkaufen** bleibt Demo, bis es ein Upload-Backend gibt. Web3Forms unterstützt Datei-Uploads nur im Bezahlplan.
3. Der Key ist eine **Repo-Variable**, kein Secret – er steht ohnehin im ausgelieferten HTML.

## Alternativen

| Option | Pro | Contra |
|---|---|---|
| Formspree | Datei-Upload möglich | Uploads nur im Bezahlplan |
| Cloudflare Worker + R2 | Volle Kontrolle, günstig, Fotos speicherbar | Eigener Code, Konto, Wartung, DSGVO-Doku |
| Netlify Forms | Sehr einfach | Erfordert Hosting-Wechsel |
| `mailto:`-Links | Null Infrastruktur | Keine Fotos, schlechte UX, keine Validierung |
| Nur Instagram-DM | Bestehender Kanal | Unstrukturierte Anfragen, keine Fotos-Sammlung |

## Konsequenzen

- Demo und Live unterscheiden sich nur durch eine Variable. Erfolgsmeldungen sagen in beiden Modi die Wahrheit.
- Vor dem Live-Schalten: Spam-Schutz (Honeypot `botcheck`), Datenschutzerklärung um Web3Forms ergänzen ([#4](https://github.com/teifler/eskadronverkauf/issues/4)).
- Upload-Backend ist eine offene Entscheidung ([#5](https://github.com/teifler/eskadronverkauf/issues/5)) und bekommt einen eigenen ADR.
