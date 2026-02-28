import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Sale from './pages/Sale'
import Report from './pages/Report'
import RootTemplate from './templates/RootTemplate'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootTemplate/>}/>

          <Route path='/' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/report' element={<Report/>}/>

        <Route/>
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App