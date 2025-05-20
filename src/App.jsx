import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
      <Footer/>
      
    </div>

  ) 
}

export default App