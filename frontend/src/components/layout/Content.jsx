import React from 'react'

function Content({ children }) {
  return (
    <main className="flex-1 w-full">
      <div className="w-full">
        {children}
      </div>
    </main>
  )
}

export default Content

