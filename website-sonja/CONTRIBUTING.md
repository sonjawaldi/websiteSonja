# Entwicklungs- und Versionsleitfaden

Dieser Leitfaden beschreibt die Konventionen für Versionierung, Branches, Commits, Pull Requests und Releases in diesem Projekt.

## Grundregeln

- `main` enthält jederzeit einen stabilen, veröffentlichbaren Stand.
- Änderungen werden in kleinen, thematisch klar abgegrenzten Branches entwickelt.
- Ein Commit behandelt möglichst genau eine logische Änderung.
- Zugangsdaten, API-Schlüssel, lokale Konfigurationen und Build-Artefakte werden nicht committed.
- Vor einem Push müssen Formatierung, Linting, Tests und Build erfolgreich sein.

## Branches

Neue Branches werden vom aktuellen `main` erstellt:

```bash
git switch main
git pull --ff-only
git switch -c feat/kurze-beschreibung
```

Branch-Namen bestehen aus einem Typ und einer kurzen Beschreibung in Kleinbuchstaben. Wörter werden mit Bindestrichen getrennt.

| Typ         | Verwendung                             | Beispiel                    |
| ----------- | -------------------------------------- | --------------------------- |
| `feat/`     | Neue Funktion oder neuer Inhalt        | `feat/kontaktformular`      |
| `fix/`      | Fehlerbehebung                         | `fix/mobile-navigation`     |
| `docs/`     | Dokumentation                          | `docs/versionierung`        |
| `refactor/` | Umbau ohne neue Funktion               | `refactor/header-component` |
| `chore/`    | Wartung, Werkzeuge oder Abhängigkeiten | `chore/angular-update`      |
| `release/`  | Vorbereitung einer Veröffentlichung    | `release/1.2.0`             |

Direkte Commits auf `main` sollten vermieden werden. Nach dem Merge kann der Arbeitsbranch gelöscht werden.

## Commit Messages

Commit-Nachrichten folgen dem Muster von Conventional Commits:

```text
<typ>(<optionaler-bereich>): <kurze beschreibung>
```

Beispiele:

```text
feat(contact): add validation to contact form
fix(header): prevent mobile menu from overflowing
docs: document release workflow
refactor(home): extract hero section component
test(contact): cover invalid email addresses
chore(deps): update Angular dependencies
```

Erlaubte Typen:

- `feat`: neue, für Nutzer sichtbare Funktion
- `fix`: Fehlerbehebung
- `docs`: ausschließlich Dokumentation
- `style`: Formatierung ohne Verhaltensänderung
- `refactor`: Code-Umbau ohne Funktionsänderung
- `test`: Tests ergänzen oder korrigieren
- `perf`: Verbesserung der Laufzeit oder Dateigröße
- `build`: Build-System oder externe Abhängigkeiten
- `ci`: CI-Konfiguration
- `chore`: sonstige Wartungsarbeit
- `revert`: Rücknahme eines früheren Commits

Die Kurzbeschreibung wird im Imperativ formuliert, bleibt möglichst unter 72 Zeichen und endet ohne Punkt. Im Projekt wird für Commit Messages einheitlich Englisch verwendet.

Für zusätzliche Erklärung folgt nach einer Leerzeile ein Commit-Body. Ein Breaking Change wird mit `!` und einem Hinweis im Body markiert:

```text
feat(api)!: change contact endpoint

BREAKING CHANGE: The endpoint now expects `fullName` instead of `name`.
```

Unklare Nachrichten wie `changes`, `fix stuff`, `wip` oder `commit changes` sind zu vermeiden. Zwischenstände dürfen lokal existieren, sollten aber vor dem Merge sinnvoll zusammengefasst oder umbenannt werden.

## Änderungen committen

Vor dem Commit wird geprüft, was tatsächlich aufgenommen wird:

```bash
git status
git diff
git add src/app/example.component.ts
git diff --staged
git commit -m "feat(example): add example component"
```

Dateien werden möglichst gezielt statt pauschal hinzugefügt. So gelangen keine temporären Dateien oder unabhängigen Änderungen versehentlich in denselben Commit.

## Qualitätsprüfung

Vor dem Push wird die vollständige lokale Prüfung ausgeführt:

```bash
npm ci
npm run ci
```

Während der Entwicklung können die Prüfungen einzeln laufen:

```bash
npm run format:check
npm run lint
npm run test:ci
npm run build
```

Formatierungsfehler lassen sich mit `npm run format` korrigieren. Die GitHub-CI führt dieselben Prüfungen bei Pull Requests und Änderungen auf `main` aus.

## Pull Requests

Ein Pull Request sollte:

- einen aussagekräftigen Titel im Commit-Format besitzen;
- Zweck und Auswirkungen der Änderung kurz beschreiben;
- Testschritte und bei visuellen Änderungen Screenshots enthalten;
- zugehörige Issues verlinken;
- keine unabhängigen Nebenänderungen enthalten;
- erst gemergt werden, wenn die CI erfolgreich ist.

Bevorzugt wird **Squash and merge**. Dadurch landet pro Pull Request ein sauberer, nachvollziehbarer Commit auf `main`. Der finale Squash-Commit muss ebenfalls dem Commit-Format entsprechen.

## Versionierung

Veröffentlichungen folgen [Semantic Versioning](https://semver.org/lang/de/) im Format `MAJOR.MINOR.PATCH`:

| Änderung                                               | Erhöhung | Beispiel          |
| ------------------------------------------------------ | -------- | ----------------- |
| Inkompatible oder grundlegend veränderte Funktion      | `MAJOR`  | `1.4.2` → `2.0.0` |
| Neue, abwärtskompatible Funktion oder größerer Inhalt  | `MINOR`  | `1.4.2` → `1.5.0` |
| Abwärtskompatible Fehlerbehebung oder kleine Korrektur | `PATCH`  | `1.4.2` → `1.4.3` |

Die kanonische Versionsnummer steht in `package.json` und `package-lock.json`. Branch-Namen sind keine Versionsnummern; veröffentlichte Stände werden mit Git-Tags markiert. Tags erhalten ein vorangestelltes `v`, zum Beispiel `v1.2.0`.

Vorabversionen können bei Bedarf als `v2.0.0-beta.1` oder `v2.0.0-rc.1` gekennzeichnet werden.

## Release-Ablauf

1. Sicherstellen, dass `main` aktuell und die CI erfolgreich ist.
2. Passende nächste Version anhand der Änderungen bestimmen.
3. Versionsnummer aktualisieren, ohne automatisch einen Tag anzulegen:

   ```bash
   npm version 1.2.0 --no-git-tag-version
   ```

4. Falls vorhanden, Changelog oder Release Notes ergänzen.
5. Qualitätsprüfung mit `npm run ci` ausführen.
6. Änderung committen und über einen Pull Request nach `main` bringen:

   ```bash
   git commit -am "chore(release): prepare v1.2.0"
   ```

7. Nach dem Merge den geprüften Commit taggen und Tag pushen:

   ```bash
   git switch main
   git pull --ff-only
   git tag -a v1.2.0 -m "Release v1.2.0"
   git push origin v1.2.0
   ```

8. Auf GitHub ein Release mit einer kurzen Zusammenfassung der Änderungen anlegen.

Ein Tag wird nicht verschoben oder wiederverwendet. Muss ein Release korrigiert werden, erhält die Korrektur eine neue Patch-Version.

## Kurzcheck vor dem Push

- Gehören alle geänderten Dateien wirklich zu diesem Thema?
- Enthält der Commit keine Geheimnisse oder lokalen Dateien?
- Ist die Commit Message verständlich und korrekt formatiert?
- Sind Formatierung, Linting, Tests und Build erfolgreich?
- Wurde bei einer Veröffentlichung die Version korrekt erhöht?
