---
name: ship
description: Änderungen sicher live bringen – Build prüfen, Diff zeigen, nach Conventional Commits committen, auf main pushen oder Pull Request öffnen, den GitHub-Pages-Deploy beobachten, die Live-Seite prüfen und bei Bedarf ein Release taggen. Für „deploy“, „live stellen“, „pushen“, „veröffentlichen“, „release“.
disable-model-invocation: true
argument-hint: "[pr | release x.y.z]"
---

# Ship

Live-URL: <https://teifler.github.io/eskadronverkauf/> · Repo: `teifler/eskadronverkauf` · Deploy: `.github/workflows/deploy.yml`

Wurde dieser Skill aufgerufen, ist Pushen ausdrücklich gewünscht. Ein `release` nur, wenn es im Argument steht oder bestätigt wurde.

## 1. Stand prüfen

```bash
git status --short
git diff --stat
```

- Nichts committen aus `dist/`, `node_modules/`, `.env`. Keine Schlüssel oder Tokens im Diff.
- Unklare Änderungen (nicht von dir, nicht besprochen) → nachfragen statt mitzunehmen.

## 2. Build

```bash
npm run build
```

Muss grün sein. Bei sichtbaren Änderungen vorher im Browser geprüft (mobil + Desktop)?

## 3. Doku

Skill `update-docs` durchgehen. Mindestens: CHANGELOG `[Unreleased]` hat einen Eintrag, falls die Änderung über Artikel-Pflege hinausgeht.

## 4. Commit

Conventional Commits, Beschreibung deutsch, Imperativ oder Partizip – einheitlich mit `git log --oneline -10`:

```
feat: Farbwelt „Mint“ ergänzt
fix: OG-Bild mit absoluter URL
content: Kentucky Saddle Pad hinzugefügt
docs: Deploy-Doku um eigene Domain ergänzt
```

Bei erledigtem Issue `Closes #N` in den Body.

## 5. Push oder Pull Request

- **Artikel/Texte/Doku** → direkt auf `main`: `git push`
- **Code, Layout, Workflows, Abhängigkeiten** oder Argument `pr` → Branch + PR:

  ```bash
  git switch -c feat/kurzer-name
  git push -u origin HEAD
  gh pr create --fill --base main
  gh pr checks --watch
  ```

  Merge erst, wenn CI grün ist und der Mensch zugestimmt hat.

## 6. Deploy beobachten

```bash
gh run list --workflow=deploy.yml --limit 3
gh run watch "$(gh run list --workflow=deploy.yml --limit 1 --json databaseId -q '.[0].databaseId')" --exit-status
```

Schlägt der Deploy fehl: `gh run view --log-failed`, Ursache beheben, neu pushen. Häufig: Bildpfad ohne `asset()`, kaputtes JSON (meldet `check-content`), Pages-Quelle nicht auf „GitHub Actions“.

## 7. Live prüfen

```bash
URL=https://teifler.github.io/eskadronverkauf/
curl -s -o /dev/null -w "%{http_code}\n" "$URL"
curl -s "$URL" | grep -o '<title>[^<]*'
curl -s -o /dev/null -w "%{http_code}\n" "${URL}images/palomino.webp"
```

Erwartet: `200`, richtiger Titel, `200`. Das Pages-CDN cacht bis ca. 10 Minuten – bei alter Version kurz warten, nicht neu deployen.

## 8. Release (nur auf Wunsch)

1. CHANGELOG: `## [Unreleased]` → `## [x.y.z] – YYYY-MM-DD`, neues leeres `[Unreleased]` darüber, Vergleichslinks unten ergänzen.
2. `npm version x.y.z --no-git-tag-version` (setzt `package.json` und `package-lock.json`).
3. `git commit -am "chore: Release vx.y.z"`, `git tag vx.y.z`, `git push --follow-tags`
4. `gh release create vx.y.z --title "vx.y.z" --notes "<Abschnitt aus dem CHANGELOG>"`

SemVer für eine Website: **major** = Relaunch/Redesign, **minor** = neue Sektion oder Funktion, **patch** = Fixes und Texte.

## 9. Bericht

Kurz an den Menschen: was live ist, Commit-Hash, Link zum Actions-Run, Live-URL, offene Punkte.
