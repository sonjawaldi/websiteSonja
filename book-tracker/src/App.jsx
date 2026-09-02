import { useEffect, useMemo, useState } from 'react'
import BookCard from './BookCard.jsx'
import BookForm from './BookForm.jsx'
import { createBook, loadBooks, percentOf, saveBooks } from './books.js'

export default function App() {
  const [books, setBooks] = useState(loadBooks)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    saveBooks(books)
  }, [books])

  const editing = books.find((b) => b.id === editingId) ?? null

  const stats = useMemo(() => {
    const done = books.filter((b) => percentOf(b) >= 100).length
    const pages = books.reduce((sum, b) => sum + b.currentPage, 0)
    return { total: books.length, done, pages }
  }, [books])

  function handleSubmit(values) {
    if (editing) {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === editing.id
            ? {
                ...b,
                title: values.title.trim(),
                notes: values.notes.trim(),
                currentPage: values.currentPage,
                totalPages: values.totalPages,
              }
            : b,
        ),
      )
      setEditingId(null)
    } else {
      setBooks((prev) => [createBook(values), ...prev])
    }
  }

  function handleDelete(book) {
    if (!confirm(`„${book.title}“ wirklich löschen?`)) return
    setBooks((prev) => prev.filter((b) => b.id !== book.id))
    if (editingId === book.id) setEditingId(null)
  }

  function handleSetPage(book, page) {
    setBooks((prev) =>
      prev.map((b) => (b.id === book.id ? { ...b, currentPage: page } : b)),
    )
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">📚 Book Tracker</h1>
          <p className="mt-1 text-sm text-stone-600">
            {stats.total === 1 ? '1 Buch' : `${stats.total} Bücher`} ·{' '}
            {stats.done} abgeschlossen · {stats.pages} gelesene Seiten
          </p>
        </header>

        <BookForm
          initial={editing}
          onSubmit={handleSubmit}
          onCancel={() => setEditingId(null)}
        />

        {books.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-dashed border-stone-300 p-8 text-center text-sm text-stone-500">
            Noch keine Bücher. Füge oben dein erstes hinzu.
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={() => setEditingId(book.id)}
                onDelete={() => handleDelete(book)}
                onSetPage={(page) => handleSetPage(book, page)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
