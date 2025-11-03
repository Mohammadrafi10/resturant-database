import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = {
    appetizers: [
      {
        id: 1,
        name: 'Bruschetta Trio',
        description: 'Fresh tomatoes, basil, and garlic on toasted bread with balsamic glaze',
        price: 12.99,
        image: '🥖'
      },
      {
        id: 2,
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan cheese, croutons, and house-made Caesar dressing',
        price: 14.99,
        image: '🥗'
      },
      {
        id: 3,
        name: 'Spinach & Artichoke Dip',
        description: 'Creamy blend served hot with tortilla chips',
        price: 11.99,
        image: '🥘'
      },
      {
        id: 4,
        name: 'Crispy Calamari',
        description: 'Lightly battered and fried squid rings with marinara sauce',
        price: 16.99,
        image: '🦑'
      }
    ],
    mainCourses: [
      {
        id: 5,
        name: 'Grilled Salmon',
        description: 'Atlantic salmon with lemon butter sauce, served with roasted vegetables and quinoa',
        price: 28.99,
        image: '🐟'
      },
      {
        id: 6,
        name: 'Ribeye Steak',
        description: 'Prime cut, cooked to perfection, with garlic mashed potatoes and seasonal vegetables',
        price: 34.99,
        image: '🥩'
      },
      {
        id: 7,
        name: 'Chicken Parmesan',
        description: 'Breaded chicken breast with marinara sauce and mozzarella, served with pasta',
        price: 22.99,
        image: '🍗'
      },
      {
        id: 8,
        name: 'Vegetarian Risotto',
        description: 'Creamy arborio rice with seasonal vegetables and parmesan cheese',
        price: 19.99,
        image: '🍚'
      },
      {
        id: 9,
        name: 'Lobster Pasta',
        description: 'Fresh lobster meat in a creamy white wine sauce over linguine',
        price: 32.99,
        image: '🦞'
      }
    ],
    desserts: [
      {
        id: 10,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
        price: 9.99,
        image: '🍫'
      },
      {
        id: 11,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 8.99,
        image: '🍰'
      },
      {
        id: 12,
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with berry compote',
        price: 9.99,
        image: '🧀'
      },
      {
        id: 13,
        name: 'Crème Brûlée',
        description: 'Vanilla custard with caramelized sugar top',
        price: 8.99,
        image: '🍮'
      }
    ],
    drinks: [
      {
        id: 14,
        name: 'Wine Selection',
        description: 'Choose from our curated selection of red, white, and sparkling wines',
        price: 8.99,
        image: '🍷'
      },
      {
        id: 15,
        name: 'Craft Cocktails',
        description: 'Signature cocktails made with premium spirits',
        price: 12.99,
        image: '🍸'
      },
      {
        id: 16,
        name: 'Fresh Juices',
        description: 'Freshly squeezed orange, apple, or mixed fruit juices',
        price: 5.99,
        image: '🥤'
      },
      {
        id: 17,
        name: 'Premium Coffee',
        description: 'Espresso, cappuccino, latte, or specialty coffee',
        price: 4.99,
        image: '☕'
      }
    ]
  }

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mainCourses', name: 'Main Courses', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🥂' }
  ]

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...menuItems.appetizers,
        ...menuItems.mainCourses,
        ...menuItems.desserts,
        ...menuItems.drinks
      ]
    }
    return menuItems[activeCategory] || []
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      <Navbar />
      <Content>
        {/* Header Section */}
        <div className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              Our Menu
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with fresh, premium ingredients
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getFilteredItems().map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Ready to Dine?
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Make a reservation or order online. We're here to serve you the finest dining experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Make Reservation
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3 rounded-lg text-lg border-2 border-gray-300 transition-all duration-300 transform hover:scale-105">
                  Order Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default Menu

