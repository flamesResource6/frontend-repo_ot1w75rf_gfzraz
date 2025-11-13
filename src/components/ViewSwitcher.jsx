import React from 'react'

const views = [
  { key: 'list', label: 'List' },
  { key: 'kanban', label: 'Kanban' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'table', label: 'Table' },
]

export default function ViewSwitcher({ value, onChange }) {
  return (
    <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
      {views.map((v, idx) => (
        <button
          key={v.key}
          onClick={() => onChange(v.key)}
          className={`${value === v.key ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} px-4 py-2 text-sm font-medium ${idx !== views.length - 1 ? 'border-r border-gray-200' : ''}`}
        >
          {v.label}
        </button>
      ))}
    </div>
  )
}
