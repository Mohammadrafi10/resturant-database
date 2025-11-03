import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Restaurant DB</h1>
          </div>
          <div className="flex space-x-4">
            <Link 
              to="/"
              className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <Link 
              to="/menu" 
              className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
            >
              Menu
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
            <Link 
              href="#" 
              className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
            >
              Reservations
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
              <Link 
              to="/contact" 
              className="relative text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

