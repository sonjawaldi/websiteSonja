const STORAGE_KEY = 'book-tracker.books.v1'

/** Fortschritt in Prozent, aus aktueller Seite und Gesamtseiten berechnet. */
export function percentOf(book) {
  if (!book.totalPages) return 0
  const raw = (book.currentPage / book.totalPages) * 100
  return Math.max(0, Math.min(100, Math.round(raw)))
}

export function loadBooks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    // Kaputter oder blockierter Speicher: lieber leer starten als abstürzen.
    return []
  }
}

export function saveBooks(books) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  } catch {
    // Privater Modus o. ä. – Speichern schlägt fehl, die App läuft trotzdem weiter.
  }
}

export function createBook({ title, notes, currentPage, totalPages }) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    notes: notes.trim(),
    currentPage: Number(currentPage) || 0,
    totalPages: Number(totalPages) || 0,
    createdAt: new Date().toISOString(),
  }
}
