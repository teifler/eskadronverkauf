---
paths:
  - "**/*.md"
  - "docs/**"
---

# Doku-Konventionen

- Sprache: Deutsch. Fachbegriffe (Build, Deploy, Pull Request) dürfen englisch bleiben.
- Dateinamen englisch und kebab-case (`docs/architecture.md`), Inhalte deutsch.
- Daten im ISO-Format: `2026-10-29`.
- Links relativ innerhalb des Repos (`[Roadmap](docs/roadmap.md)`), damit sie auf GitHub und lokal funktionieren.
- Keine Platzhalter wie `USERNAME`, `TODO` oder `xxx` in fertiger Doku. Offenes gehört in die Roadmap.

## CHANGELOG.md
Format nach [Keep a Changelog](https://keepachangelog.com/de/1.1.0/), Versionen nach SemVer.
- Neue Einträge immer unter `## [Unreleased]`, gruppiert: `### Hinzugefügt`, `### Geändert`, `### Behoben`, `### Entfernt`, `### Sicherheit`.
- Ein Eintrag = ein Satz aus Nutzer-/Betreiber-Sicht, nicht der Commit-Text.
- Beim Release `[Unreleased]` in `## [x.y.z] – YYYY-MM-DD` umbenennen, Vergleichslinks am Ende ergänzen, `package.json`-Version anheben.

## ADRs (`docs/decisions/`)
- Fortlaufend nummeriert: `NNNN-kurzer-titel.md`, Vorlage `docs/decisions/template.md`.
- Status: `Vorgeschlagen | Angenommen | Ersetzt durch NNNN | Verworfen`. Alte ADRs nicht umschreiben – neuen anlegen und den alten auf „Ersetzt durch“ setzen.
- Neuen ADR in `docs/decisions/README.md` eintragen.

## Roadmap (`docs/roadmap.md`)
- „Stand:“-Datum oben bei jeder Änderung aktualisieren.
- Jeder offene Punkt verlinkt sein GitHub Issue, sobald es eins gibt.
- Erledigtes nach „Erledigt“ verschieben (mit Datum), nicht löschen.
