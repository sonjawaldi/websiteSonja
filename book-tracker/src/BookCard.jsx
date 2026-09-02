import ProgressBar from './ProgressBar.jsx'
import { percentOf } from './books.js'

export default function BookCard({ book, onEdit, onDelete, onSetPage }) {
  const percent = percentOf(book)

  function bump(delta) {
    const next = Math.max(0, book.currentPage + delta)
    onSetPage(book.totalPages ? Math.min(next, book.totalPages) : next)
  }

  return (
    <li className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-stone-900">{book.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
            percent >= 100
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-amber-100 text-amber-800'
          }`}
        >
          {percent} %
        </span>
      </div>

      <div className="mt-3">
        <ProgressBar percent={percent} />
        <p className="mt-1.5 text-xs text-stone-500">
          {book.totalPages
            ? `Seite ${book.currentPage} von ${book.totalPages}`
            : `Seite ${book.currentPage} · keine Gesamtseitenzahl angegeben`}
        </p>
      </div>

      {book.notes && (
        <p className="mt-3 whitespace-pre-wrap text-sm text-stone-700">
          {book.notes}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={() => bump(-10)}
          className="rounded-lg border border-stone-300 px-2.5 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100"
        >
          −10 Seiten
        </button>
        <button
          onClick={() => bump(10)}
          className="rounded-lg border border-stone-300 px-2.5 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100"
        >
          +10 Seiten
        </button>
        <span className="grow" />
        <button
          onClick={onEdit}
          className="rounded-lg px-2.5 py-1 text-xs font-medium text-stone-600 hover:bg-stone-100"
        >
          Bearbeiten
        </button>
        <button
          onClick={onDelete}
          className="rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
        >
          Löschen
        </button>
      </div>
    </li>
  )
}
