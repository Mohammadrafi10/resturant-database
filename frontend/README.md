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
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
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

### Step 2: Add Route to AppRoutes

After creating your page component, add it to the routing configuration:

**File:** `src/routes/AppRoutes.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'  // Import your new page

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />  // Add your route
        {/* Add more routes here as you create new pages */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
```

### Step 3: Import and Use Layout Components

The layout components (`Navbar`, `Footer`, and `Content`) are located in `src/components/layout/`:

- **Navbar**: Top navigation bar with links
- **Footer**: Bottom footer with contact info and links
- **Content**: Main content wrapper with full-width support

#### Import Statement

```jsx
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Content from '../components/layout/Content'
```

#### Layout Structure

Always wrap your page content with this structure (note the `w-full` class for full-width support):

```jsx
<div className="flex flex-col min-h-screen bg-gray-50 w-full">
  <Navbar />
  <Content>
    {/* Your page content here */}
  </Content>
  <Footer />
</div>
```

**Important:** Always include `w-full` in the outer wrapper div to ensure full-width layout across all screen sizes.

### Step 4: Using Components in Your Page

#### Using Layout Components

```jsx
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
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
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
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
- Provides full-width layout support
- Accepts children as props
- Flexible container that adapts to content needs
- No padding constraints - add your own as needed

**Location:** `src/components/layout/Content.jsx`

**Usage:**
```jsx
import Content from '../components/layout/Content'

<Content>
  <div className="w-full min-h-[calc(100vh-200px)] bg-blue-500">
    <h1>Your Page Title</h1>
    <p>Your page content...</p>
  </div>
</Content>
```

**Note:** For full-width elements, use `w-full` class. For constrained content, wrap in a container div with `max-w-*` classes.

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
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
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

## Routing Setup

The application uses React Router for navigation. All routes are defined in `src/routes/AppRoutes.jsx`.

### Current Routes

- `/` - Home page

### Adding New Routes

1. Create your page component in `src/pages/`
2. Import it in `src/routes/AppRoutes.jsx`
3. Add a new `<Route>` element:

```jsx
import YourNewPage from '../pages/YourNewPage'

<Route path="/your-path" element={<YourNewPage />} />
```

### Navigation Between Pages

Use React Router's `Link` component for navigation:

```jsx
import { Link } from 'react-router-dom'

<Link to="/menu">Go to Menu</Link>
```

## Tips

1. **Always use the layout structure**: Wrap your pages with Navbar, Content, and Footer for consistency
2. **Include `w-full` class**: Always add `w-full` to the outer wrapper div for full-width layout
3. **Use Tailwind CSS classes**: All components are styled with Tailwind CSS utility classes
4. **Keep pages in `pages/` folder**: This helps organize your route-level components
5. **Add routes after creating pages**: Don't forget to register new pages in `AppRoutes.jsx`
6. **Reuse components**: Import and reuse components from `components/common/`, `components/layout/`, and `components/restaurant/` as needed
7. **Responsive design**: Use Tailwind's responsive prefixes (`md:`, `lg:`, etc.) for mobile-first design
8. **Full-width elements**: Use `w-full` class for elements that should span the full viewport width

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with Vite plugin
- **React Router DOM** - Client-side routing for navigation between pages

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

