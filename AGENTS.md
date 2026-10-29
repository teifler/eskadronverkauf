# AGENTS.md – Arbeitsanleitung für Coding-Agents

Zentrale Quelle für alle KI-Agents (Claude Code, Codex, Cursor, Copilot …) und gleichzeitig der schnellste Einstieg für Menschen.
`CLAUDE.md` importiert diese Datei. Pfad-spezifische Regeln liegen in [`.claude/rules/`](.claude/rules/), wiederkehrende Abläufe als Skills in [`.claude/skills/`](.claude/skills/).

## Projekt

Statische One-Page-Landingpage für **@eskadronverkauf** – Reitsport Second Hand (Verkauf über Vinted und Kleinanzeigen, Ankauf und Kommission).
Astro 5, kein UI-Framework, deployt per GitHub Actions auf GitHub Pages.

- Live: <https://teifler.github.io/eskadronverkauf/>
- Repo: <https://github.com/teifler/eskadronverkauf>
- Sprache von Seite, Code-Kommentaren und Doku: **Deutsch**. Du-Ansprache, „Reiter:in“.
- Status: **Prototyp** – Demo-Artikel, Formulare im Demo-Modus, Rechtstexte fehlen. Siehe [docs/roadmap.md](docs/roadmap.md).

## Befehle

| Zweck | Befehl |
|---|---|
| Abhängigkeiten installieren | `npm ci` |
| Dev-Server | `npm run dev` → <http://localhost:4321/eskadronverkauf/> |
| Inhalte prüfen (JSON-Validierung) | `npm run check` |
| Produktions-Build (inkl. `check`) | `npm run build` → `dist/` |
| Build lokal ansehen | `npm run preview` |

Node 22 (`.nvmrc`). Es gibt keine Unit-Tests und keinen Linter: **`npm run build` muss fehlerfrei durchlaufen, bevor du eine Aufgabe als erledigt meldest.**
Bei sichtbaren Änderungen zusätzlich im Browser prüfen – mobil (≈ 375 px) und Desktop.

## Aufbau

```
src/
  pages/index.astro       Einzige Seite: <head>/SEO, Reihenfolge der Sektionen, Scroll-Reveal, Farbwelten-Filter
  components/             Eine Datei pro Sektion: Header, Hero, Products, Sell, Thursday, About, Footer
    Assistant.astro       Kontakt-Assistent: 4 Modals, 3 Formulare, Foto-Upload, Web3Forms-Anbindung
  data/site.json          Name, SEO-Texte, Social-Links, Bewertung (Header)
  data/products.json      Artikel (aktuell Demo-Daten)
  lib/url.ts              base / asset() – Pfade, die unter /eskadronverkauf/ funktionieren
  styles/global.css       Design-System „Color Club“ (Tokens in :root)
public/images/            Fotos als .webp (aktuell Unsplash-Symbolfotos)
scripts/check-content.mjs Validiert die JSON-Daten vor jedem Build
```

Details: [docs/architecture.md](docs/architecture.md) · Inhalte pflegen: [docs/content.md](docs/content.md) · Deploy: [docs/deployment.md](docs/deployment.md)

## Harte Regeln

1. **Keine erfundenen Fakten.** Keine Bewertungen, Kundenzahlen, Zitate, Siegel oder „Bestseller“-Aussagen ohne Beleg. `site.json → review` bleibt `null`, bis die Zahlen verifiziert sind (UWG-Risiko).
2. **Demo bleibt als Demo erkennbar.** Artikel mit Symbolfoto haben `"demo": true`. Formulare ohne Backend zeigen den Demo-Hinweis. Nie so tun, als würde etwas gesendet.
3. **Pfade immer über `asset()`** aus `src/lib/url.ts` – nie `/images/...` hart codieren. Die Seite läuft unter `/eskadronverkauf/`.
4. **Kein UI-Framework und keine neuen Dependencies** ohne Rückfrage. Interaktivität = kleine Vanilla-`<script>`-Inseln.
5. **Keine externen Ressourcen** (Google Fonts, CDNs, Tracking, Embeds) ohne Rückfrage – DSGVO. Systemschriften sind Absicht.
6. **Farben, Radien und Abstände über die CSS-Tokens** in `global.css` (`--sage`, `--terra`, `--r-md` …).
7. **Barrierefreiheit erhalten:** Alt-Texte, Labels, Fokus-Falle und Escape in Modals, `prefers-reduced-motion`.
8. **Keine Secrets committen.** `.env` ist ignoriert. Der Web3Forms-Key ist öffentlich (landet im HTML) und wird als Repo-*Variable* gesetzt.
9. **Markennamen** (Eskadron, Kentucky, Samshield …) beschreiben gebrauchte Ware – keine Logos, kein Anschein einer offiziellen Partnerschaft.
10. **Erlaubte Werte** für `world`, `plat` und `cond` stehen in `scripts/check-content.mjs`. Wer dort etwas ändert, ändert auch UI und Doku (siehe Rule `content-and-legal`).

## Living Docs – Pflicht bei jeder Änderung

Die Doku ist Teil der Änderung, nicht ein späterer Schritt.

| Wenn du … | dann aktualisiere … |
|---|---|
| ein Feature, einen Fix oder Struktur änderst | [CHANGELOG.md](CHANGELOG.md) → `[Unreleased]` |
| Befehle, Setup oder Ordnerstruktur änderst | [README.md](README.md) und diese Datei |
| eine Architektur- oder Tool-Entscheidung triffst | neuen ADR in [docs/decisions/](docs/decisions/) |
| einen Roadmap-Punkt erledigst oder neu entdeckst | [docs/roadmap.md](docs/roadmap.md) + GitHub Issue |
| ein Datenfeld, eine Farbwelt o. Ä. einführst | [docs/content.md](docs/content.md), `check-content.mjs`, Skill `add-product` |
| eine wiederkehrende Aufgabe zum dritten Mal machst | einen Skill in `.claude/skills/` anlegen |

Reines Artikel-Pflegen (Artikel rein/raus, Preis ändern) braucht keinen Changelog-Eintrag.
Der Skill `update-docs` geht das systematisch durch.

## Git und Deploy

- `main` ist live: jeder Push auf `main` deployt automatisch ([deploy.yml](.github/workflows/deploy.yml)).
- Code- und Strukturänderungen über Branch + Pull Request; [ci.yml](.github/workflows/ci.yml) baut jeden PR. Kleine Inhaltsänderungen dürfen direkt auf `main`.
- Commits nach Conventional Commits, Beschreibung auf Deutsch: `feat:`, `fix:`, `docs:`, `content:`, `chore:`, `ci:`.
- **Pushen, Deployen, Releases und Issues anlegen nur auf ausdrücklichen Wunsch.** Ablauf: Skill `ship`.

## Skills

| Skill | Wofür |
|---|---|
| [`add-product`](.claude/skills/add-product/SKILL.md) | Artikel anlegen, ändern, als verkauft entfernen, Demo → echt – inkl. Foto |
| [`ship`](.claude/skills/ship/SKILL.md) | Build → Commit → Push/PR → Deploy beobachten → Live-Seite prüfen → ggf. Release |
| [`update-docs`](.claude/skills/update-docs/SKILL.md) | Doku nach Änderungen synchronisieren |
| [`go-live-check`](.claude/skills/go-live-check/SKILL.md) | Prüfung vor dem offiziellen Launch: Recht, Demo-Flags, Formulare, SEO, A11y |

## Bekannte Stolperfallen

- Der Farbwelten-Filter wirkt auf **alle** `.grid`-Elemente, also auch auf „Fresh Drops“. Bei Änderungen am Filter klären, ob das gewollt ist.
- `public/images/rearing.webp` ist aktuell nirgends eingebunden.
- Einige Farben sind hart codiert (`WORLD_COLORS` in `Products.astro`, SVG-Text im Hero, Fehlertexte `#a33`). Für Neues Tokens nutzen.
- Das Verkaufsformular sendet absichtlich nie etwas – es braucht ein Upload-Backend ([ADR 0002](docs/decisions/0002-formulare-web3forms-und-demo-modus.md)).
