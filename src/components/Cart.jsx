import { BsCart3 } from 'react-icons/bs'
import { ProductCard } from "./ProductCard"
import { EmptyCart } from "./EmptyCart"

import CartContext from '../contexts/CartContext'
import { useContext } from 'react'
import { Subtotal } from './Subtotal'


export const Cart = () => {

    const { numOfProducts } = useContext(CartContext)

    return (
        <div>
            <div className=" flex flex-col h-[90vh] justify-between md:h-[89vh] lg:h-auto lg:min-h-[53vh] mx-4 lg:mx-4 md:p-4 border-1 bg-gray-800 lg:bg-white">
                <div className='flex flex-col items-baseline pl-2'>
                    <div className='flex'>
                        <BsCart3 className='text-xl mr-2 text-white lg:text-black' />
                        <h2 className="text-lg font-bold mb-8 text-white lg:text-black" >Order Summary</h2>
                    </div>
                    <div className='w-[100%]'>
                        {numOfProducts == 0 ? <EmptyCart /> : <ProductCard />}
                    </div>
                </div>
                {numOfProducts !== 0 ? <Subtotal /> : ''}
            </div>
        </div>
    )
}
