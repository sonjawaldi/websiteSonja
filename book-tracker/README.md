# 📚 Book Tracker

Eine Mini-App, um Bücher mit Notizen und Lesefortschritt festzuhalten.

## Was sie kann

- **Buch hinzufügen** – Titel, aktuelle Seite, Seiten gesamt, Notizen
- **Prozent automatisch** – der Fortschritt wird aus `aktuelle Seite / Seiten gesamt`
  berechnet und als Balken angezeigt (grün ab 100 %)
- **Schnell weiterblättern** – ±10 Seiten direkt auf der Karte
- **Bearbeiten und löschen**
- **Übersicht** – Anzahl Bücher, abgeschlossene Bücher, gelesene Seiten gesamt

Alle Daten liegen im `localStorage` des Browsers. Kein Server, kein Login –
dafür sind die Bücher nur auf dem Gerät verfügbar, auf dem du sie eingetragen hast.

## Starten

```bash
npm install
npm run dev
```

Danach läuft die App auf http://localhost:5173.

## Bauen

```bash
npm run build     # Produktions-Build nach dist/
npm run preview   # Build lokal ansehen
```

## Aufbau

| Datei                 | Zweck                                                    |
| --------------------- | -------------------------------------------------------- |
| `src/App.jsx`         | Zustand, localStorage-Sync, Statistik                     |
| `src/BookForm.jsx`    | Formular zum Hinzufügen und Bearbeiten inkl. Validierung  |
| `src/BookCard.jsx`    | Eine Buchkarte mit Fortschritt und Aktionen               |
| `src/ProgressBar.jsx` | Fortschrittsbalken                                        |
| `src/books.js`        | Prozentberechnung und localStorage-Zugriff                |

Stack: React 19, Vite 7, Tailwind CSS 4.
