import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './components/main/HomePage'
import AboutPage from './components/main/AboutPage'
import AdminLayout from './components/admin/AdminLayout'
import AdminUsers from './components/admin/AdminUsers'
import AdminRoles from './components/admin/AdminRoles'
import NotFoundPage from './components/errors/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        {/* Layout public */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Layout admin */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* /admin/users */}
          <Route path="users" element={<AdminUsers />} />
          {/* /admin/roles */}
          <Route path="roles" element={<AdminRoles />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
