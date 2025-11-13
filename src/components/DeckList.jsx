import React, { useEffect, useState } from 'react'

export default function DeckList({ onSelect }) {
  const [decks, setDecks] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/decks`)
      const data = await res.json()
      setDecks(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Your Decks</h3>
        <button onClick={load} className="text-sm text-blue-600 hover:underline">Refresh</button>
      </div>
      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : decks.length === 0 ? (
        <p className="text-gray-500 text-sm">No decks yet. Create one to get started.</p>
      ) : (
        <ul className="space-y-2">
          {decks.map(d => (
            <li key={d.id}>
              <button onClick={() => onSelect && onSelect(d)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 border border-gray-100">
                <div className="font-medium">{d.title}</div>
                {d.description && <div className="text-xs text-gray-500">{d.description}</div>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
