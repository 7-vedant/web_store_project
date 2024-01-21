import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card_details from './components/Card_details'
import Home from './components/Home'


const App = () => {
  return (
    <div className=' w-full h-full flex '>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Card_details/>} />
      </Routes>
    </div>
  )
}

export default App