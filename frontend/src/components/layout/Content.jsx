import React from 'react'

function Content({ children }) {
  return (
    <main className="flex-1 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>
  )
}

export default Content

