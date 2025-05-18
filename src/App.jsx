import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>

  ) 
}

export default App