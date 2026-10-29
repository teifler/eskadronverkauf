# CLAUDE.md

@AGENTS.md

## Speziell für Claude Code

- **Regeln** in [`.claude/rules/`](.claude/rules/) werden automatisch geladen, sobald du passende Dateien anfasst (Frontmatter `paths`):
  - `content-and-legal` – Texte, Daten, Recht (UWG, Impressum, Bewertungen)
  - `design-system` – Tokens, Typografie, Layout „Color Club“
  - `accessibility` – Bilder, Modals, Formulare, Motion
  - `base-path` – `asset()`, Links, `SITE`/`BASE_PATH`
  - `docs` – Changelog-, ADR- und Roadmap-Format
- **Skills** in [`.claude/skills/`](.claude/skills/): `/add-product`, `/ship`, `/update-docs`, `/go-live-check`.
  `/ship` startet nur auf ausdrücklichen Aufruf (`disable-model-invocation`), weil es pusht.
- Persönliche Einstellungen gehören in `.claude/settings.local.json` (git-ignoriert).
- Nach jeder abgeschlossenen Änderung: `npm run build`, dann `/update-docs`.
