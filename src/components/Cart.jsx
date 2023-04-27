import { BsCart3 } from 'react-icons/bs'
import { ProductCard } from "./ProductCard"
import { EmptyCart } from "./EmptyCart"

import CartContext from '../contexts/CartContext'
import { useContext } from 'react'


export const Cart = () => {

    const { numOfProducts } = useContext(CartContext)

    return (
        <div>
            <div className="mx-4 p-4 bg-white border-1">
                <div className='flex items-baseline'>
                    <BsCart3 className='text-md mr-2' />
                    <h2 className="text-lg font-bold mb-5">Order Summary</h2>
                </div>
                {numOfProducts == 0 ? <EmptyCart /> : <ProductCard />}
            </div>
        </div>
    )
}
