import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as you create new pages */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/reservations" element={<Reservations />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

