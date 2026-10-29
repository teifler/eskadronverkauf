# 0004 – Rechtstexte selbst gepflegt, Schriften selbst gehostet

- **Status:** Angenommen
- **Datum:** 2026-10-29

## Kontext

Die Seite war ohne Impressum und Datenschutzerklärung öffentlich. Ziel: Abmahnrisiken so weit wie technisch möglich senken und einheitliche Schriften auf allen Geräten (Trebuchet/Georgia fehlen auf Android). Grundlage ist eine Recherche vom 2026-10-29 über rund 60 Quellen: Gesetzestexte (DDG, MStV, VSBG, UWG, PAngV, EGBGB, DSGVO, TDDDG), IHK-Merkblätter, Generatoren und Kanzleien (eRecht24, Dr. Schwenke, IT-Recht Kanzlei, Händlerbund, WBS, Plutte), GitHub-, Web3Forms- und DPF-Dokumente, LfDI BW.

**Keine Rechtsberatung.** Die Texte sind sorgfältig recherchiert, ersetzen aber keine anwaltliche Prüfung.

## Entscheidung

1. **Impressum und Datenschutzerklärung selbst formuliert** als statische Seiten (`/impressum/`, `/datenschutz/`). Generator-Texte sind urheberrechtlich geschützt und teils an Backlinks oder Umsatzgrenzen gebunden – eigene Texte haben keine Lizenzpflichten.
2. **Pflichtdaten zentral in `site.json → legal`**, geprüft von `check-content.mjs`. Fehlende E-Mail oder Telefonnummer erzeugen Warnungen.
3. **Bewusst weggelassen:** OS-Plattform-Link (Plattform seit 20.07.2025 abgeschaltet, toter Link gilt als irreführend), „Haftung für Links/Inhalte“-Disclaimer (wirkungslos, teils selbst abgemahnt), „Verantwortlich nach § 18 Abs. 2 MStV“ (kein journalistisch-redaktionelles Angebot).
4. **Freiwilliger VSBG-Hinweis** („weder bereit noch verpflichtet“), **Markenhinweis**, **Bild- und Schriftnachweise**.
5. **Datenschutzerklärung folgt dem Build:** Ohne `PUBLIC_WEB3FORMS_KEY` steht dort der Demo-Hinweis, mit Key der Web3Forms-Abschnitt. So kann sie nicht vom tatsächlichen Verhalten abweichen.
6. **Kein Cookie-Banner:** Die Seite speichert nichts auf dem Gerät (§ 25 TDDDG greift nicht).
7. **Rechtsseiten mit `noindex`** (Adresse nicht in Suchergebnissen); erreichbar aus Header und Footer.
8. **Schriften selbst gehostet:** Source Sans 3 (Text) und Gelasio (kursive Akzente, metrisch an Georgia angelehnt) über `@fontsource`, gebündelt nach `dist/_astro/`. Kein Request an Google (vgl. LG München I, 20.01.2022, 3 O 17493/20). OFL-Lizenztexte mit korrektem Copyright in `public/fonts/`, Nachweis im Impressum.
9. **Werbeaussagen entschärft:**
   - „nachhaltig“ → „preloved“ (pauschale Umweltaussagen sind seit 27.09.2026 per se unzulässig, UWG Anhang Nr. 4a),
   - „geprüft“ erklärt („von uns persönlich auf Zustand und Mängel angesehen“),
   - Header-Link „Feedback“ → „Vinted“ (§ 5b Abs. 3 UWG; Hinweis zur Bewertungsprüfung erscheint automatisch, sobald eine Bewertung eingetragen ist),
   - Preis-Fußnote nach PAngV („Endpreise, gemäß § 19 UStG keine Umsatzsteuer, zzgl. Versand“).

## Alternativen

| Option | Pro | Contra |
|---|---|---|
| Generator (eRecht24, Schwenke) | Schnell, gepflegt | Lizenzbedingungen, Backlink-Pflicht, generischer Text |
| Rechtstexte-Abo (IT-Recht Kanzlei ab ca. 10–25 € netto/Monat, Händlerbund) | Updates + Kostenübernahme bei Abmahnung wegen *deren* Texten | Kosten; deckt Markenname, Fotos, Werbeaussagen nicht ab – **ab Gewerbebetrieb trotzdem empfehlenswert** |
| Systemschriften behalten | Null Risiko, null Bytes | Uneinheitlich auf Android |
| Google Fonts per CDN | Bequem | Abmahnwelle 2022, DSGVO-Übermittlung |

## Konsequenzen

- Jede neue Datenverarbeitung (Formular-Backend, Instagram-Feed, Analyse, Embeds) erfordert eine Anpassung von `datenschutz.astro` **vor** dem Live-Schalten.
- `legal.updated` bei jeder inhaltlichen Änderung der Rechtstexte anpassen.
- **Web3Forms ist datenschutzrechtlich heikel** (Betreiber in Indien ohne Angemessenheitsbeschluss, US-Spamfilter erhalten IP und E-Mail, widersprüchliche Angaben zur Speicherung). Vor dem Live-Schalten (#4) eine EU-Alternative prüfen.
- Außerhalb dieser Website offen (siehe [Roadmap](../roadmap.md)): Markenname „eskadron…“ (BGH I ZR 236/16 „keine-vorwerk-vertretung“), Gewerbe/Vinted Pro, Widerrufsbelehrung und Kommissionsvertrag, GPSR-Angaben in den Listings, Impressum-Link in Instagram- und TikTok-Bio.
