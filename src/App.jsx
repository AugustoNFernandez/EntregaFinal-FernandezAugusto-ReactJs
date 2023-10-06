import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from './components/Checkout'
import Cart from './components/Cart'
import { useState } from 'react'
import { CartProvider } from './components/CartContext'
import Footer from './components/Footer'

function App() {

  return (
    <div className='containerGral'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
