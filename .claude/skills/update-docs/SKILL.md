---
name: update-docs
description: Living Docs synchron halten – nach Code-, Inhalts-, Design- oder Infrastruktur-Änderungen CHANGELOG, README, AGENTS.md, docs/ (Architektur, Inhalte, Deploy, Roadmap, ADRs), Rules und Skills prüfen und nachziehen. Nutzen nach jeder abgeschlossenen Änderung, vor Commit oder Release, oder bei „Doku aktualisieren“.
---

# Doku aktualisieren

Ziel: Wer morgen (Mensch oder Agent) in das Repo schaut, findet die Wahrheit – ohne den Code lesen zu müssen.

## 1. Was hat sich geändert?

```bash
git status --short
git diff --stat HEAD            # uncommittete Änderungen
git log --oneline -15           # letzte Commits
git diff --stat main...HEAD     # auf einem Feature-Branch
```

## 2. Änderung → betroffene Doku

| Geändert | Prüfen und ggf. anpassen |
|---|---|
| `src/components/**`, `src/pages/**` | `docs/architecture.md` (Sektionstabelle, Client-JS), `AGENTS.md` → Aufbau, Stolperfallen |
| `src/data/*.json` – **Struktur** (neues Feld, neuer Wert) | `docs/content.md`, `scripts/check-content.mjs`, Skill `add-product`, Rule `content-and-legal` |
| `src/data/*.json` – nur Inhalte | nichts (außer Meilensteine, siehe Skill `add-product`) |
| `src/styles/global.css` (Tokens, Breakpoints) | Rule `design-system`, Kontrasttabelle in Rule `accessibility` |
| `Assistant.astro` (Formulare, Modals) | `docs/architecture.md` → Formulare, ADR 0002, Rule `accessibility` |
| `package.json` (Scripts, Abhängigkeiten), `.nvmrc` | `README.md` + `AGENTS.md` → Befehle, `docs/deployment.md` |
| `astro.config.mjs`, `.github/workflows/**` | `docs/deployment.md`, Rule `base-path`, Skill `ship` |
| `.claude/**` | `AGENTS.md` → Skills, `CLAUDE.md`, `README.md` → KI-Agents |
| Entscheidung getroffen (Tool, Dienst, Architektur) | neuer ADR aus `docs/decisions/template.md` + Eintrag in `docs/decisions/README.md` |

## 3. Pflichtpunkte

1. **CHANGELOG.md** – Eintrag unter `[Unreleased]` in der passenden Gruppe (Format: Rule `docs`).
2. **Roadmap** – Punkt erledigt? Nach „Erledigt“ verschieben (mit Datum), „Stand:“ aktualisieren, im Commit `Closes #N`.
   Neuen offenen Punkt entdeckt? In die Roadmap und – nur auf Wunsch – als Issue anlegen (`gh issue create`).
3. **Stolperfallen** in `AGENTS.md` – behoben → streichen; neu entdeckt → ergänzen.

## 4. Konsistenz prüfen

```bash
# Platzhalter in der Menschen-Doku (Rules/Skills/Vorlage enthalten Beispiele und sind ausgenommen)
docs() { git ls-files '*.md' ':!:.claude/**' ':!:docs/decisions/template.md'; }
docs | xargs grep -nE "USERNAME|TODO|FIXME" || echo "keine Platzhalter"
# Relative Links, deren Ziel fehlt
for f in $(docs); do
  grep -oE '\]\([^)#]+' "$f" | sed 's/](//' | grep -vE '^(https?:|mailto:)' | while read -r l; do
    [ -e "$(dirname "$f")/$l" ] || echo "$f → $l fehlt"
  done
done
# Befehle aus der Doku laufen noch?
npm run build
```

## 5. Ergebnis

Kurz berichten, welche Dateien angepasst wurden und warum. Doku-Änderungen gehören in denselben Commit wie die Code-Änderung (oder direkt danach als `docs:`).
