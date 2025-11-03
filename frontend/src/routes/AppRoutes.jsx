import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/menu'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

