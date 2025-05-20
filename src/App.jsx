import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import CookiePopup from './components/CookiePopup'
import Productpage from './pages/Productpage'

const App = () => {
  return (
    <div className='w-full min-h-screen relative '>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product/:id'element={<Productpage/>} />
      </Routes>
      <Footer/>
      <CookiePopup/>
    </div>

  ) 
}

export default App