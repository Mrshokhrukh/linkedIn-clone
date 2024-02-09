import React from 'react'
import Login from './components/auth/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './components/auth/Auth'
import Layout from './Layout'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path='auth' element={<Auth />}>
            <Route path='login' element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
