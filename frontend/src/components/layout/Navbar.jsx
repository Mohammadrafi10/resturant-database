import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Restaurant DB</h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-4">
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
              to="/reservations" 
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 hover:bg-amber-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 hover:bg-amber-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Menu
            </Link>
            <Link
              to="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 hover:bg-amber-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Reservations
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 hover:bg-amber-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

