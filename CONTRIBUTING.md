# Mitmachen

## Nur Inhalte ändern?

Artikel, Preise, Texte und Links: [docs/content.md](docs/content.md). Das geht direkt im Browser auf GitHub, ohne die folgenden Schritte.

## Entwicklung

```bash
nvm use && npm ci
npm run dev
```

Vor jedem Commit: `npm run build` muss grün sein. Sichtbare Änderungen mobil (≈ 375 px) und auf dem Desktop ansehen.
Regeln für Code, Design, Barrierefreiheit und Texte: [AGENTS.md](AGENTS.md) und [`.claude/rules/`](.claude/rules/).

## Branches und Pull Requests

- `main` ist live. Kleine Inhalts- und Doku-Änderungen dürfen direkt auf `main`.
- Code, Layout, Workflows und Abhängigkeiten über einen Branch: `feat/…`, `fix/…`, `docs/…`, `chore/…`.
- Pull Request mit der Vorlage öffnen. CI (`ci.yml`) muss grün sein, dann mergen (Squash).
- Dependabot-PRs: CI abwarten, bei Astro-Major-Updates kurz lokal ansehen und den Changelog von Astro lesen.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/de/), Beschreibung auf Deutsch:

| Präfix | Wofür |
|---|---|
| `feat:` | neue Funktion oder Sektion |
| `fix:` | Fehlerbehebung |
| `content:` | Artikel, Texte, Bilder |
| `docs:` | Dokumentation |
| `style:` | rein optische CSS-Änderungen |
| `ci:` | Workflows |
| `chore:` | Abhängigkeiten, Aufräumen, Releases |

Erledigt ein Commit ein Issue: `Closes #N` in den Body.

## Doku gehört dazu

Jede Änderung zieht ihre Doku mit – welche Datei wann, steht in der Tabelle „Living Docs“ in [AGENTS.md](AGENTS.md). Mindestens ein Eintrag in [CHANGELOG.md](CHANGELOG.md) unter `[Unreleased]`. Mit Claude Code: `/update-docs`.

## Releases

Bei einem sinnvollen Zwischenstand: `[Unreleased]` im Changelog zu einer Version machen, taggen, GitHub-Release anlegen. Ablauf im Skill [`ship`](.claude/skills/ship/SKILL.md), Schritt 8.
