# 0005 – Neuer Name statt „eskadronverkauf“

- **Status:** Vorgeschlagen – Auswahl durch die Betreiberin ausstehend
- **Datum:** 2026-10-29

## Kontext

„Eskadron“ ist eine eingetragene Marke (Inhaberin vermutlich Pikeur Reitmoden Brinkmann GmbH & Co. KG, Herford – im DPMA-/EUIPO-Register noch zu bestätigen). Gebrauchte Originalware unter der Marke zu verkaufen und zu bewerben ist erlaubt (Erschöpfung, § 24 Abs. 1 MarkenG). Die Marke als **Namen des ganzen Geschäfts** zu nutzen – Website, Instagram-Handle, Domain – deckt das nicht: BGH, Urteil vom 28.06.2018, I ZR 236/16 „keine-vorwerk-vertretung“. Erschwerend verkauft das Geschäft überwiegend *andere* Marken unter dem Eskadron-Namen. Recherche: [ADR 0004](0004-rechtstexte-und-schriften.md).

Die Betreiberin hat am 2026-10-29 entschieden, umzubenennen – überall, inklusive GitHub-Repo und Seiten-URL.

## Kriterien

1. Keine fremde Marke im Namen.
2. Passt zu Reitsport, Second Hand und dem Design „Color Club“ (Pastell, matchy).
3. `.de`-Domain frei (geprüft am 2026-10-29 über DENIC-RDAP: `https://rdap.denic.de/domain/<name>.de` → 404 = frei).
4. Kein bestehender Reitsport-Shop oder Account gleichen Namens (Websuche, keine Registerrecherche).

## Kandidaten

| # | Name | Freie Domain | Gedanke | Websuche |
|---|---|---|---|---|
| 1 | **Pastellpony** (Empfehlung) | pastellpony.de | Das Farbschema *ist* Pastell; verspielt, kurz, einprägsam | kein Treffer |
| 2 | **Farbgalopp** | farbgalopp.de | Passt zum Farbwelten-Filter, Bewegung | nicht geprüft |
| 3 | Handwechsel | handwechsel-reitsport.de | Dressur-Lektion + Teil wechselt die Hand | kein Treffer |
| 4 | Stallglück | stallglueck.de | Warm, nach Stall | kein Treffer |
| 5 | Pastellstall | pastellstall.de | Pastell + Stall | nicht geprüft |
| 6 | Matchy Stall | matchy-stall.de | Matchy-Trend direkt | kein Treffer |
| 7 | Ehrenrunde | ehrenrunde-reitsport.de | Siegerrunde, zweite Runde fürs Lieblingsstück | kein Treffer |
| 8 | Lieblingsstall | lieblingsstall.de | Anklang an „Lieblingsstücke“ | nicht geprüft |
| 9 | Schabrackenliebe | schabrackenliebe.de | Kern von matchy; eng gefasst | ähnlich: „Schabrackenland“ |
| 10 | Mähnenglück | maehnenglueck.de | Umlaut sperrig in URL/Handle | nicht geprüft |
| 11 | Reitkiste | reitkiste.de | Kurz, bodenständig | nicht geprüft |
| 12 | Preloved Pony | preloved-pony.de | Passt zur Headline | nicht geprüft |
| 13 | Zweitsattel | zweitsattel.de | Klingt nur nach Sätteln | nicht geprüft |
| 14 | Neles Stallgasse | neles-stallgasse.de | Persönlich | nicht geprüft |
| 15 | Neles Sattelkammer | neles-sattelkammer.de | Persönlich; „Sattelkammer“ ist gängig | nicht geprüft |

Bereits vergeben (`.de`): ehrenrunde, farbstall, farbenstall, handwechsel, fliegender-wechsel, volte, stallgasse, putzbox, pferdeschrank, pferdeklamotten, huf-und-herz, hufglueck, satteltasche, zweiterunde, sattelglueck, galoppglueck.

## Vor der finalen Entscheidung (Betreiberin)

- [ ] Markenregister: 5 Minuten in [DPMAregister](https://register.dpma.de) und [TMview](https://www.tmdn.org/tmview/) nach dem Namen suchen (Klassen 25 Bekleidung, 28 Sport, 35 Handel).
- [ ] Instagram- und TikTok-Handle in der App prüfen und sichern.
- [ ] Domain registrieren (optional, später – siehe [#8](https://github.com/teifler/eskadronverkauf/issues/8)).

## Umbenennungs-Checkliste (für die Umsetzung)

**Ändern – Geschäftsname:**

| Wo | Was |
|---|---|
| `src/data/site.json` | `name`, `title`, `legal.businessName`; `links.instagram` + `legal.scope` erst, wenn der Instagram-Account umbenannt ist |
| `src/components/Header.astro`, `Footer.astro` | Logo-Text `eskadron✶verkauf` |
| `src/components/About.astro` | „Hi, wir sind …“ |
| `src/components/Assistant.astro` | Instagram-Handle-Text, Kopiertext „gesehen auf …“, Mail-Betreff `eskadronverkauf.de – …` |
| `src/pages/index.astro` | `ogTitle` |
| `src/pages/impressum.astro`, `datenschutz.astro` | Seitentitel, Beschreibung, Handle-Text |
| `src/styles/global.css` | Kopfkommentar |
| `package.json` | `name` (danach `npm install --package-lock-only`) |
| `astro.config.mjs` | Fallback `BASE` = `/<neuer-slug>` |
| GitHub | Repo umbenennen (`gh repo rename`), Beschreibung/Homepage; lokales Remote anpassen. Alte Pages-URL wird **nicht** weitergeleitet. |
| Doku | README (Titel, Badges, Links), AGENTS.md, CLAUDE.md, docs/*, Rules, Skills (`ship`, `go-live-check`, `base-path`), Issue-Vorlage `config.yml`, Issue-Links `teifler/eskadronverkauf` → neuer Repo-Name |
| `.github/ISSUE_TEMPLATE/config.yml` | Instagram-Link (nach Account-Umbenennung) |

**Bleibt – beschreibende Markennennung (erlaubt):** `products.json → brand: "Eskadron"`, Hero „von Eskadron, Kentucky & Co.“, `site.json → description` („Eskadron Schabracken …“), Formular-Platzhalter „z. B. Eskadron“, Markenhinweis im Impressum.

**Bleibt – Historie:** CHANGELOG-Einträge zu 0.1.0, ADRs 0001–0004 (sie beschreiben den damaligen Stand).

Nach der Umsetzung: Status dieses ADR auf „Angenommen“, gewählten Namen oben eintragen, CHANGELOG-Eintrag, `npm run build`, Live-Prüfung unter der neuen URL.

## Konsequenzen

- Bis zur Umsetzung bleibt „eskadronverkauf“ live – das Markenrisiko besteht weiter, ist aber gering, solange die Seite nicht beworben wird.
- Die Umbenennung ist mit der Checkliste ein Durchgang von ca. 30 Minuten; eigene Domain und Instagram-Umbenennung sind davon unabhängig.
