import React from 'react'

export function ListView({ items }) {
  return (
    <ul className="space-y-2">
      {items.map(i => (
        <li key={i.id} className="bg-white border rounded p-3">
          <div className="font-medium">{i.content}</div>
          <div className="text-xs text-gray-500">{i.type} • {i.status}</div>
        </li>
      ))}
    </ul>
  )
}

export function KanbanView({ items }) {
  const cols = ['todo', 'in_progress', 'done']
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cols.map(col => (
        <div key={col} className="bg-gray-50 border rounded p-3">
          <div className="font-semibold capitalize mb-2">{col.replace('_', ' ')}</div>
          <div className="space-y-2">
            {items.filter(i => i.status === col || (col === 'todo' && i.status === 'none')).map(i => (
              <div key={i.id} className="bg-white border rounded p-3">
                <div className="font-medium">{i.content}</div>
                <div className="text-xs text-gray-500">{i.type}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function TableView({ items }) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="px-3 py-2 border">Content</th>
            <th className="px-3 py-2 border">Type</th>
            <th className="px-3 py-2 border">Status</th>
            <th className="px-3 py-2 border">Tags</th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i.id}>
              <td className="px-3 py-2 border">{i.content}</td>
              <td className="px-3 py-2 border">{i.type}</td>
              <td className="px-3 py-2 border">{i.status}</td>
              <td className="px-3 py-2 border">{i.tags?.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function TimelineView({ items }) {
  const sorted = [...items].sort((a, b) => new Date(a.due_date || 0) - new Date(b.due_date || 0))
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />
      <div className="space-y-4">
        {sorted.map(i => (
          <div key={i.id} className="relative">
            <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-blue-500" />
            <div className="bg-white border rounded p-3">
              <div className="font-medium">{i.content}</div>
              <div className="text-xs text-gray-500">{i.due_date ? new Date(i.due_date).toLocaleString() : 'No date'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
