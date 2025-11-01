# Restaurant Database - Frontend

A React application built with Vite, React, and Tailwind CSS for managing restaurant operations.

## Project Structure

```
src/
├── api/                  # Axios calls to backend
├── assets/               # Images, fonts, icons
├── components/           # Reusable UI components
│   ├── common/          # Buttons, Inputs, Modals
│   ├── layout/          # Navbar, Footer, Content
│   └── restaurant/      # Restaurant-specific components
├── contexts/            # React Contexts (AuthContext, ThemeContext)
├── hooks/               # Custom React hooks (useAuth, useFetch)
├── pages/               # Page-level components (Home, Menu, Admin, etc.)
├── routes/              # React Router configuration
└── services/            # Service layer
```

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Creating a New Page

### Step 1: Create the Page Component

Create a new file in the `src/pages/` directory. For example, to create a Menu page:

**File:** `src/pages/Menu.jsx`

```jsx
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'

function Menu() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Content>
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Menu</h1>
          <p className="text-gray-600">Your menu content goes here...</p>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default Menu
```

### Step 2: Import and Use Layout Components

The layout components (`Navbar`, `Footer`, and `Content`) are located in `src/components/layout/`:

- **Navbar**: Top navigation bar with links
- **Footer**: Bottom footer with contact info and links
- **Content**: Main content wrapper with consistent padding

#### Import Statement

```jsx
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
```

#### Layout Structure

Always wrap your page content with this structure:

```jsx
<div className="flex flex-col min-h-screen bg-gray-50">
  <Navbar />
  <Content>
    {/* Your page content here */}
  </Content>
  <Footer />
</div>
```

### Step 3: Using Components in Your Page

#### Using Layout Components

```jsx
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Content>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Your content */}
        </div>
      </Content>
      <Footer />
    </div>
  )
}
```

#### Using Common Components (when created)

If you have components in `components/common/`, import them like this:

```jsx
import Button from '../components/common/Button'
import Input from '../components/common/Input'

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Content>
        <form>
          <Input type="text" placeholder="Name" />
          <Button>Submit</Button>
        </form>
      </Content>
      <Footer />
    </div>
  )
}
```

#### Using Restaurant-Specific Components

For restaurant-specific components in `components/restaurant/`:

```jsx
import MenuCard from '../components/restaurant/MenuCard'
import ReservationForm from '../components/restaurant/ReservationForm'
```

## Component Reference

### Navbar Component

The Navbar component includes:
- Logo/title section
- Navigation links (Home, Menu, Reservations, Contact)
- Responsive design with Tailwind CSS

**Location:** `src/components/layout/Navbar.jsx`

**Usage:**
```jsx
import Navbar from '../components/layout/Navbar'

<Navbar />
```

### Footer Component

The Footer component includes:
- Three-column layout
- Quick links section
- Contact information
- Copyright notice

**Location:** `src/components/layout/Footer.jsx`

**Usage:**
```jsx
import Footer from '../components/layout/Footer'

<Footer />
```

### Content Component

The Content component:
- Provides consistent padding and max-width
- Accepts children as props
- Ensures proper spacing for page content

**Location:** `src/components/layout/Content.jsx`

**Usage:**
```jsx
import Content from '../components/layout/Content'

<Content>
  <h1>Your Page Title</h1>
  <p>Your page content...</p>
</Content>
```

## Example: Complete Page Implementation

Here's a complete example of a Reservations page:

**File:** `src/pages/Reservations.jsx`

```jsx
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'

function Reservations() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <Content>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Make a Reservation</h1>
          
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Reserve
            </button>
          </form>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default Reservations
```

## Tips

1. **Always use the layout structure**: Wrap your pages with Navbar, Content, and Footer for consistency
2. **Use Tailwind CSS classes**: All components are styled with Tailwind CSS utility classes
3. **Keep pages in `pages/` folder**: This helps organize your route-level components
4. **Reuse components**: Import and reuse components from `components/common/`, `components/layout/`, and `components/restaurant/` as needed
5. **Responsive design**: Use Tailwind's responsive prefixes (`md:`, `lg:`, etc.) for mobile-first design

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - (Can be added for routing between pages)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

