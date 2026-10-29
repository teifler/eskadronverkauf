# Changelog

Alle nennenswerten Änderungen an der Website. Format nach [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), Versionen nach [SemVer](https://semver.org/lang/de/):
major = Relaunch, minor = neue Sektion oder Funktion, patch = Fixes und Texte.

## [Unreleased]

### Hinzugefügt
- Impressum (`/impressum/`) und Datenschutzerklärung (`/datenschutz/`), selbst formuliert auf Basis einer Recherche zu DDG, DSGVO, UWG und PAngV ([ADR 0004](docs/decisions/0004-rechtstexte-und-schriften.md)). Pflichtdaten zentral in `site.json → legal`.
- Die Datenschutzerklärung passt sich automatisch an: Demo-Hinweis ohne Web3Forms-Key, Web3Forms-Abschnitt mit Key.
- Selbst gehostete Schriften Source Sans 3 und Gelasio (SIL OFL, ohne Google-Verbindung), Lizenztexte unter `/fonts/`.
- Preis-Fußnote nach PAngV unter jedem Produktraster (Endpreise, § 19 UStG, zzgl. Versand).
- Links zu Impressum und Datenschutz in Header, Footer und allen Formularen.
- Inhaltsprüfung kontrolliert die Impressumsdaten und warnt bei fehlender E-Mail-Adresse oder Telefonnummer.
- Gemeinsames Seitenlayout `src/layouts/Base.astro`.

### Geändert
- Hero-Headline „aber nachhaltig.“ → „aber preloved.“ – pauschale Umweltaussagen sind seit 27.09.2026 unzulässig.
- „Geprüft“ wird erklärt: von uns persönlich auf Zustand und Mängel angesehen.
- Header-Link „Feedback ↗“ heißt jetzt „Vinted ↗“. Sobald eine Bewertung eingetragen ist, erscheint im Footer der Pflichthinweis zur Bewertungsprüfung (§ 5b UWG).
- Checkbox im Verkaufsformular: „Datenschutzhinweise zur Kenntnis genommen“ statt Einwilligung (passt zur Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO).
- Markenhinweis im Footer präzisiert: kein offizieller Händler, keine Verbindung zu den Markeninhabern.

### Entfernt
- Platzhalter „Widerruf (folgt)“ im Footer – über die Website wird nichts direkt verkauft.

## [0.1.0] – 2026-10-29

Erste Version im Repository, live auf GitHub Pages.

### Hinzugefügt
- Landingpage im Design „Color Club“: Hero, Farbwelten-Filter, Ankauf und Kommission, Fresh Drops, Suchtag Donnerstag, Über uns, Footer.
- Kontakt-Assistent mit Formularen für Verkaufen (inkl. Foto-Vorschau), Wunschstück und Kontakt – Demo-Modus ohne Web3Forms-Key.
- Deploy per GitHub Actions auf GitHub Pages. Domain und Unterordner kommen aus den Pages-Einstellungen, eine eigene Domain funktioniert ohne Code-Änderung.
- Inhaltsprüfung (`npm run check`) vor jedem Build: fängt Fehler in `products.json` und `site.json` ab, bevor sie live gehen.
- CI-Build für Pull Requests, Dependabot für npm und GitHub Actions.
- Web3Forms-Key als Repo-Variable `PUBLIC_WEB3FORMS_KEY` an den Build angebunden.
- Living Docs: `AGENTS.md`, `CLAUDE.md`, Claude-Code-Rules und -Skills, `docs/` mit Architektur, Inhaltspflege, Deployment, Roadmap und ADRs, Issue- und PR-Vorlagen.

### Behoben
- `og:image` war eine relative URL; Social-Vorschauen (WhatsApp, Instagram, Facebook) brauchen absolute URLs. Dazu `og:url` und `canonical` ergänzt.
- Pages-Deploy bricht laufende Deploys nicht mehr ab (`cancel-in-progress: false`).

[Unreleased]: https://github.com/teifler/eskadronverkauf/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/teifler/eskadronverkauf/releases/tag/v0.1.0
