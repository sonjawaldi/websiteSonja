import { useEffect, useState } from 'react'

const EMPTY = { title: '', notes: '', currentPage: '', totalPages: '' }

const inputClass =
  'w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm ' +
  'outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200'

export default function BookForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')

  useEffect(() => {
    setForm(
      initial
        ? {
            title: initial.title,
            notes: initial.notes,
            currentPage: String(initial.currentPage || ''),
            totalPages: String(initial.totalPages || ''),
          }
        : EMPTY,
    )
    setError('')
  }, [initial])

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.title.trim()) {
      setError('Bitte gib einen Buchtitel ein.')
      return
    }
    const current = Number(form.currentPage) || 0
    const total = Number(form.totalPages) || 0
    if (total && current > total) {
      setError('Die aktuelle Seite liegt hinter der Gesamtseitenzahl.')
      return
    }
    onSubmit({ ...form, currentPage: current, totalPages: total })
    if (!initial) setForm(EMPTY)
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-base font-semibold text-stone-800">
        {initial ? 'Buch bearbeiten' : 'Neues Buch hinzufügen'}
      </h2>

      <label className="block">
        <span className="mb-1 block text-xs font-medium text-stone-600">
          Buchtitel
        </span>
        <input
          className={inputClass}
          value={form.title}
          onChange={(e) => update('title', e.target.value)}
          placeholder="z. B. Der Zauberberg"
          autoFocus
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-stone-600">
            Aktuelle Seite
          </span>
          <input
            className={inputClass}
            type="number"
            min="0"
            value={form.currentPage}
            onChange={(e) => update('currentPage', e.target.value)}
            placeholder="0"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-stone-600">
            Seiten gesamt
          </span>
          <input
            className={inputClass}
            type="number"
            min="0"
            value={form.totalPages}
            onChange={(e) => update('totalPages', e.target.value)}
            placeholder="0"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-xs font-medium text-stone-600">
          Notizen
        </span>
        <textarea
          className={`${inputClass} min-h-20 resize-y`}
          value={form.notes}
          onChange={(e) => update('notes', e.target.value)}
          placeholder="Gedanken, Zitate, Lieblingsstellen …"
        />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
        >
          {initial ? 'Speichern' : 'Hinzufügen'}
        </button>
        {initial && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Abbrechen
          </button>
        )}
      </div>
    </form>
  )
}
