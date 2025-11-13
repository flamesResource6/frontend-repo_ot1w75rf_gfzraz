import { useEffect, useState } from 'react'
import ViewSwitcher from './components/ViewSwitcher'
import DeckCreator from './components/DeckCreator'
import DeckList from './components/DeckList'
import ItemComposer from './components/ItemComposer'
import { ListView, KanbanView, TableView, TimelineView } from './components/ItemViews'

function App() {
  const [view, setView] = useState('list')
  const [activeDeck, setActiveDeck] = useState(null)
  const [items, setItems] = useState([])
  const [loadingItems, setLoadingItems] = useState(false)

  const loadItems = async (deck) => {
    if (!deck) return
    setLoadingItems(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/items?deck_id=${deck.id}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingItems(false)
    }
  }

  useEffect(() => {
    if (activeDeck) loadItems(activeDeck)
  }, [activeDeck])

  const handleCreatedItem = (newItem) => {
    setItems(prev => [newItem, ...prev])
  }

  let ViewComp = ListView
  if (view === 'kanban') ViewComp = KanbanView
  if (view === 'table') ViewComp = TableView
  if (view === 'timeline') ViewComp = TimelineView

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-violet-50">
      <header className="px-6 py-4 border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-600" />
            <h1 className="text-xl font-bold">Tidya</h1>
          </div>
          <ViewSwitcher value={view} onChange={setView} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <DeckCreator onCreate={setActiveDeck} />
          <DeckList onSelect={setActiveDeck} />
        </div>
        <div className="md:col-span-2 space-y-4">
          <ItemComposer deck={activeDeck} onCreate={handleCreatedItem} />
          <div className="bg-white rounded-lg border border-gray-200 p-4 min-h-[300px]">
            {!activeDeck ? (
              <p className="text-gray-500">Select or create a deck to start adding items.</p>
            ) : loadingItems ? (
              <p className="text-gray-500">Loading items...</p>
            ) : items.length === 0 ? (
              <p className="text-gray-500">No items yet. Add your first one.</p>
            ) : (
              <ViewComp items={items} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
