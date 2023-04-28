import './App.css'

//Components
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { Cart } from './components/Cart'

//Hooks
import CartContext from './contexts/CartContext'
import { useState, useEffect } from 'react'


function App() {

  useEffect(() => {
    mobileCart ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  },);

  const [numOfProducts, setNumOfProducts] = useState(0)
  const [mobileCart, setMobileCart] = useState(false)

  return (
    <CartContext.Provider value={{ numOfProducts: numOfProducts, setNumOfProducts, mobileCart, setMobileCart }}>
      <div className='md:bg-gray-100 h-[100vh]'>
        <div className='fixed top-0 w-full z-50'>
          <Navbar />
        </div>
        <div className='container mx-auto flex md:pt-28'>
          <div className='lg:w-[65%]'>
            <Product />
          </div>
          <div className='lg:w-[35%] hidden lg:block'>
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  )
}

export default App
