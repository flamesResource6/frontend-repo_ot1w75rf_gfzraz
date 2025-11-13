import React, { useState } from 'react'

export default function DeckCreator({ onCreate }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const createDeck = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/decks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      })
      const data = await res.json()
      onCreate && onCreate({ id: data.id, title, description })
      setTitle('')
      setDescription('')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={createDeck} className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New deck title" className="border rounded px-3 py-2" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" className="border rounded px-3 py-2" />
      <button disabled={loading} className="bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-50">
        {loading ? 'Creating...' : 'Create Deck'}
      </button>
    </form>
  )
}
