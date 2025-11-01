import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Content from './components/layout/Content'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Content>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Restaurant Database</h1>
          <p className="text-lg text-gray-600">Welcome to your React app with Tailwind CSS!</p>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default App

