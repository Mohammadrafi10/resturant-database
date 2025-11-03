import React from 'react'
import img1 from '../../public/assets/images/1.png'
import img2 from '../../public/assets/images/2.png'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Image - 2.png */}
          <div className="hidden lg:block flex-shrink-0 w-1/4">
            <img 
              src={img2} 
              alt="Restaurant" 
              className="w-full h-auto object-contain animate-pulse"
            />
          </div>
          
          {/* Center Content */}
          <div className="flex-1 text-center max-w-4xl mx-auto">
            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-amber-300">Fine Dining</span>
              <br />
              Experience
            </h1>
            
            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-amber-100 mb-8 leading-relaxed">
              Indulge in exquisite flavors crafted with passion and served with elegance.
              Your culinary journey begins here.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Menu
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Make Reservation
              </button>
            </div>
            
            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-amber-500/20 rounded-full p-4 mb-4">
                  <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
                <p className="text-amber-200 text-sm">Fresh ingredients daily</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-amber-500/20 rounded-full p-4 mb-4">
                  <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Chefs</h3>
                <p className="text-amber-200 text-sm">Award-winning culinary team</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-amber-500/20 rounded-full p-4 mb-4">
                  <svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Exceptional Service</h3>
                <p className="text-amber-200 text-sm">Dedicated to your satisfaction</p>
              </div>
            </div>
          </div>
          
          {/* Right Image - 1.png */}
          <div className="hidden lg:block flex-shrink-0 w-1/4">
            <img 
              src={img1} 
              alt="Restaurant" 
              className="w-full h-auto object-contain animate-pulse"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 lg:h-20" fill="white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

