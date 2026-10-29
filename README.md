# eskadronverkauf – Reitsport Second Hand

[![Deploy](https://github.com/teifler/eskadronverkauf/actions/workflows/deploy.yml/badge.svg)](https://github.com/teifler/eskadronverkauf/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-teifler.github.io%2Feskadronverkauf-8fa08a)](https://teifler.github.io/eskadronverkauf/)

Landingpage für [@eskadronverkauf](https://www.instagram.com/eskadronverkauf/) – geprüfte Second-Hand-Lieblingsstücke von Eskadron, Kentucky, Samshield & Co.
Design **„Color Club“**: Salbei, Creme, Rosé, Terrakotta. Astro 5, kein UI-Framework, kleine Vanilla-Inseln für den Farbwelten-Filter, den Kontakt-Assistenten und den Foto-Upload.

**Live:** <https://teifler.github.io/eskadronverkauf/> · [Impressum](https://teifler.github.io/eskadronverkauf/impressum/) · [Datenschutz](https://teifler.github.io/eskadronverkauf/datenschutz/) · **Status:** Prototyp – Demo-Artikel, Formulare im Demo-Modus ([Roadmap](docs/roadmap.md))

## Schnellstart

```bash
nvm use            # Node 22 (.nvmrc)
npm ci
npm run dev        # http://localhost:4321/eskadronverkauf/
npm run build      # Inhaltsprüfung + Produktions-Build nach dist/
npm run preview    # dist/ lokal ansehen
```

Jeder Push auf `main` geht automatisch live (GitHub Actions → GitHub Pages, ca. 2 Minuten).

## Projektstruktur

```
src/
  layouts/Base.astro      <head>/SEO, Schriften – für alle Seiten
  pages/                  index (Startseite) · impressum · datenschutz
  components/             Header · Hero · Products · Sell · Thursday · About · Footer · Assistant
  data/site.json          Titel, Beschreibung, Social-Links, Bewertung, Impressumsdaten
  data/products.json      Artikel
  lib/url.ts              asset() – Pfade für den Unterordner /eskadronverkauf/
  styles/global.css       Design-System (Tokens)
public/images/            Fotos (.webp)
public/fonts/             Lizenztexte der selbst gehosteten Schriften
scripts/check-content.mjs Prüft die JSON-Daten vor jedem Build
docs/                     Architektur, Inhalte, Deployment, Roadmap, Entscheidungen
.claude/                  Rules und Skills für Claude Code
```

## Inhalte pflegen

Artikel, Preise, Links und Texte lassen sich direkt im Browser auf GitHub ändern – Anleitung mit allen Feldern: **[docs/content.md](docs/content.md)**.
Tippfehler in den Daten (z. B. `"42 €"` statt `42`, unbekannte Farbwelt, fehlendes Foto) fängt die Inhaltsprüfung ab, bevor etwas live geht.

## Formulare

| Formular | Status |
|---|---|
| Kontakt, Wunschstück | Demo-Modus, bis die Repo-Variable `PUBLIC_WEB3FORMS_KEY` gesetzt ist ([Anleitung](docs/deployment.md#web3forms-key-setzen)) |
| Verkaufen (mit Fotos) | Bewusst Demo, bis ein Upload-Backend existiert ([ADR 0002](docs/decisions/0002-formulare-web3forms-und-demo-modus.md), [#5](https://github.com/teifler/eskadronverkauf/issues/5)) |

## Dokumentation

| | |
|---|---|
| [AGENTS.md](AGENTS.md) | Einstieg und Arbeitsregeln – für KI-Agents und Menschen |
| [docs/content.md](docs/content.md) | Inhalte pflegen |
| [docs/architecture.md](docs/architecture.md) | Aufbau und Datenfluss |
| [docs/deployment.md](docs/deployment.md) | GitHub Pages, Variablen, eigene Domain, Rollback |
| [docs/roadmap.md](docs/roadmap.md) | Offene Punkte und Erledigtes |
| [docs/decisions/](docs/decisions/) | Architektur-Entscheidungen (ADRs) |
| [CHANGELOG.md](CHANGELOG.md) | Änderungen pro Version |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Branches, Commits, Pull Requests |

## Mit Claude Code arbeiten

[`CLAUDE.md`](CLAUDE.md) lädt `AGENTS.md`. Dazu kommen pfadbezogene Regeln in [`.claude/rules/`](.claude/rules/) und diese Skills:

| Befehl | Was passiert |
|---|---|
| `/add-product` | Artikel anlegen, ändern oder entfernen – inkl. Foto-Zuschnitt |
| `/update-docs` | Doku nach einer Änderung synchronisieren |
| `/go-live-check` | Launch-Bereitschaft prüfen (Recht, Demo, Formulare, SEO, A11y) |
| `/ship` | Build → Commit → Push/PR → Deploy beobachten → Live-Seite prüfen |

## Recht und Datenschutz

Impressum und Datenschutzerklärung sind selbst formuliert und aus `site.json → legal` gespeist. Keine Cookies, kein Tracking, keine externen Ressourcen – die Schriften (Source Sans 3, Gelasio, SIL OFL) liegen auf der Seite selbst. Hintergründe und Quellen: [ADR 0004](docs/decisions/0004-rechtstexte-und-schriften.md). Keine Rechtsberatung – vor dem offiziellen Launch anwaltlich prüfen lassen.

## Noch offen vor dem Launch

E-Mail und Telefon im Impressum ([#1](https://github.com/teifler/eskadronverkauf/issues/1)), echte Artikel ([#2](https://github.com/teifler/eskadronverkauf/issues/2)), verifizierte Bewertung ([#3](https://github.com/teifler/eskadronverkauf/issues/3)), Formulare live ([#4](https://github.com/teifler/eskadronverkauf/issues/4)) – alles im [Meilenstein Go-Live](https://github.com/teifler/eskadronverkauf/milestone/1).

## Rechtliches

- Fotos in `public/images/`: [Unsplash](https://unsplash.com/license) (Symbolfotos). Die Hinweise in Footer und Impressum verschwinden automatisch, sobald es keine Demo-Artikel mehr gibt.
- Schriften: Source Sans 3 (© 2023 Adobe) und Gelasio (© 2022 The Gelasio Project Authors), [SIL Open Font License 1.1](public/fonts/).
- Markennamen beschreiben gebrauchte Artikel, keine offiziellen Partnerschaften.
- Code und Inhalte: alle Rechte vorbehalten.
