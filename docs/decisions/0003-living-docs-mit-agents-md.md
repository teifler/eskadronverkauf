# 0003 – Living Docs mit AGENTS.md als zentraler Quelle

- **Status:** Angenommen
- **Datum:** 2026-10-29

## Kontext

Das Projekt wird zu großen Teilen mit KI-Agents (Claude Code u. a.) weiterentwickelt und von Menschen gepflegt, die nicht täglich im Code sind. Wissen darf nicht nur in Chat-Verläufen oder Köpfen liegen, und Anweisungen für verschiedene Tools sollen sich nicht widersprechen.

## Entscheidung

- **`AGENTS.md`** ist die einzige Quelle für Projektwissen, Regeln und Abläufe (offener Standard, von vielen Agents gelesen).
- **`CLAUDE.md`** importiert sie per `@AGENTS.md` und ergänzt nur Claude-Code-Spezifisches.
- **`.claude/rules/*.md`** enthalten pfadbezogene Detailregeln (Frontmatter `paths`), die nur geladen werden, wenn passende Dateien bearbeitet werden.
- **`.claude/skills/*/SKILL.md`** kapseln wiederkehrende Abläufe (Artikel pflegen, Ship, Doku, Go-Live-Check).
- **`docs/`** für Menschen: Architektur, Inhalte, Deployment, Roadmap, ADRs. **`CHANGELOG.md`** nach Keep a Changelog.
- Doku-Pflege ist Teil jeder Änderung (Tabelle „Living Docs“ in `AGENTS.md`, Skill `update-docs`).

## Alternativen

| Option | Pro | Contra |
|---|---|---|
| Nur README | Einfach | Wird lang und mischt Zielgruppen; Agents bekommen keine Arbeitsregeln |
| Getrennte CLAUDE.md / .cursorrules / copilot-instructions | Tool-spezifisch | Inhalte driften auseinander |
| Wiki | Schöne Oberfläche | Nicht versioniert mit dem Code, Agents sehen es nicht |

## Konsequenzen

- Ein Ort pro Wissen. Rules und Skills verweisen auf `AGENTS.md`, statt Inhalte zu kopieren.
- Etwas mehr Disziplin bei jeder Änderung – abgefedert durch den Skill `update-docs`.
- Kommt ein weiteres Tool dazu, das eine eigene Datei braucht: diese nur auf `AGENTS.md` verweisen lassen.
