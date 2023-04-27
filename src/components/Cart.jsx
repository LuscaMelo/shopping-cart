import { BsCart3 } from 'react-icons/bs'
import { ProductCard } from "./ProductCard"
import { EmptyCart } from "./EmptyCart"

import CartContext from '../contexts/CartContext'
import { useContext } from 'react'


export const Cart = () => {

    const { numOfProducts } = useContext(CartContext)

    return (
        <div>
            <div className="mx-4 p-1 md:p-4 border-1 bg-gray-800 lg:bg-white h-[90vh] md:h-auto">
                <div className='flex items-baseline'>
                    <BsCart3 className='text-md mr-2 text-white lg:text-black' />
                    <h2 className="text-lg font-bold mb-8 text-white lg:text-black" >Order Summary</h2>
                </div>
                {numOfProducts == 0 ? <EmptyCart /> : <ProductCard />}
            </div>
        </div>
    )
}
