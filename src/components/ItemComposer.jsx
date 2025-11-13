import React, { useState } from 'react'

export default function ItemComposer({ deck, onCreate }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!deck || !text.trim()) return
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deck_id: deck.id,
          content: text,
          type: 'note',
          status: 'none',
          tags: [],
        })
      })
      const data = await res.json()
      onCreate && onCreate({ id: data.id, content: text, status: 'none', type: 'note', tags: [] })
      setText('')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-lg border border-gray-200 p-3 flex gap-2">
      <textarea
        className="flex-1 border rounded px-3 py-2 min-h-[60px]"
        placeholder={deck ? `Write in ${deck.title}...` : 'Select a deck to start'}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={loading || !deck} className="bg-emerald-600 text-white rounded px-4 py-2 self-start disabled:opacity-50">
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}
