# Roadmap

Stand: 2026-10-29 · Version 0.1.0 + Rechtstexte (Prototyp)

Lebendes Dokument: Wer einen Punkt erledigt, verschiebt ihn nach „Erledigt“. Wer etwas Neues entdeckt, trägt es hier und als Issue ein.
Board: [Issues](https://github.com/teifler/eskadronverkauf/issues) · [Meilenstein Go-Live](https://github.com/teifler/eskadronverkauf/milestone/1)

## Go-Live (Blocker vor dem offiziellen Launch)

| Punkt | Warum | Issue |
|---|---|---|
| Impressum vervollständigen: **E-Mail-Adresse fehlt** (Pflicht, `site.json → legal.email`), ggf. W-IdNr. Telefon hat die Betreiberin bewusst weggelassen; Instagram-DM ist als Kontaktweg eingetragen | § 5 Abs. 1 Nr. 2 DDG – ohne E-Mail unvollständig. Ohne Telefon Restrisiko (Art. 246a EGBGB, DL-InfoV), solange kein Formular echt sendet | [#1](https://github.com/teifler/eskadronverkauf/issues/1) |
| Echte Produktfotos und Listing-Links | Alle 8 Artikel sind Demo mit Unsplash-Symbolfotos | [#2](https://github.com/teifler/eskadronverkauf/issues/2) |
| Vinted-Bewertung verifizieren | Header zeigt bis dahin nur den Link „Vinted ↗“ | [#3](https://github.com/teifler/eskadronverkauf/issues/3) |
| Wunsch- und Kontaktformular live (Spam-Schutz, Datenschutz passt sich an) | Formulare senden aktuell nichts. Web3Forms ist datenschutzrechtlich heikel (Indien, US-Spamfilter) – EU-Alternative prüfen ([ADR 0004](decisions/0004-rechtstexte-und-schriften.md)) | [#4](https://github.com/teifler/eskadronverkauf/issues/4) |
| Neuen Namen wählen und umbenennen – **Umbenennung beschlossen**, Name offen | Fremde Marke als Geschäftsname (BGH I ZR 236/16 „keine-vorwerk-vertretung“). 15 geprüfte Kandidaten, Empfehlung „Pastellpony“, Umbenennungs-Checkliste: [ADR 0005](decisions/0005-neuer-name.md) | – |
| Verkaufskanäle gewerblich aufstellen | Laut Betreiberin: Gewerbe angemeldet, Kleinunternehmerin, alleinige Inhaberin Nele Eifler. Offen: Verkäufe laufen über Kates Vinted-Profil → Vinted Pro bzw. Kleinanzeigen PRO auf Nele. „Privat“ verkaufen trotz Gewerbe ist per se unlauter (UWG Anhang Nr. 22) | – |
| Verbraucherrecht außerhalb der Website | Widerrufsbelehrung auf allen Verkaufskanälen, Kommissionsvertrag mit Belehrung, Gewährleistung Gebrauchtware (1 Jahr nur bei gesonderter Vereinbarung), GPSR-Herstellerangaben in Listings, Impressum-Link in Instagram-/TikTok-Bio | – |

Prüfen mit dem Skill `/go-live-check`.

## Als Nächstes

| Punkt | Warum | Issue |
|---|---|---|
| Upload-Backend für das Verkaufsformular | Kernfunktion „Fotos einreichen“ ist reine Demo. Entscheidung nötig: Formspree (bezahlt), Cloudflare Worker + R2, eigener Endpoint | [#5](https://github.com/teifler/eskadronverkauf/issues/5) |
| Astro 7 (Dependabot) | Major-Update 5 → 7. CI ist grün, trotzdem lokal prüfen: Build, Schriften, Base-Path, Formulare | [#10](https://github.com/teifler/eskadronverkauf/pull/10) |
| Kontraste auf WCAG AA | Weiß auf Salbei 2,78:1, kleine Terrakotta-Texte 3,2–3,6:1 (Soll 4,5:1) | [#6](https://github.com/teifler/eskadronverkauf/issues/6) |

## Später / Ideen

| Punkt | Warum | Issue |
|---|---|---|
| Instagram-Feed | Social Proof, aktuelle Drops. DSGVO beachten: nur mit Consent oder serverseitig zwischengespeichert | [#7](https://github.com/teifler/eskadronverkauf/issues/7) |
| Eigene Domain (z. B. eskadronverkauf.de) | Vertrauen, kürzere URL. Technisch vorbereitet, siehe [deployment.md](deployment.md#eigene-domain-z-b-eskadronverkaufde) | [#8](https://github.com/teifler/eskadronverkauf/issues/8) |
| Technische Schulden | Filter wirkt auch auf Fresh Drops (gewollt?), `rearing.webp` ungenutzt, hart codierte Farben, `any` in `Products.astro` | [#9](https://github.com/teifler/eskadronverkauf/issues/9) |

## Erledigt

| Datum | Punkt |
|---|---|
| 2026-10-29 | Repo auf GitHub, Deploy per GitHub Actions auf Pages, `SITE`/`BASE_PATH` aus den Pages-Einstellungen |
| 2026-10-29 | Inhaltsprüfung vor jedem Build, CI für Pull Requests, Dependabot |
| 2026-10-29 | Absolute OG-/canonical-URLs |
| 2026-10-29 | Living Docs: AGENTS.md, CLAUDE.md, Rules, Skills, docs/, ADRs, CHANGELOG |
| 2026-10-29 | Impressum- und Datenschutz-Seiten, selbst gehostete Schriften, PAngV-Preishinweis, Werbeaussagen entschärft ([ADR 0004](decisions/0004-rechtstexte-und-schriften.md)) |
| 2026-10-29 | Namens-Shortlist mit Domain-Prüfung und Umbenennungs-Checkliste ([ADR 0005](decisions/0005-neuer-name.md)), Release v0.1.0 nachgetragen |
