import './App.css'

//Components
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { Cart } from './components/Cart'

//Hooks
import CartContext from './contexts/CartContext'
import { useState } from 'react'


function App() {

  const [numOfProducts, setNumOfProducts] = useState(0)

  return (
    <CartContext.Provider value={{ numOfProducts: numOfProducts, setNumOfProducts }}>
      <div className='md:bg-gray-100 h-[100vh]'>
        <Navbar />
        <div className='container mx-auto flex md:mt-10'>
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
