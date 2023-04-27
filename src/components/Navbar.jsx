import { BsCart3 } from 'react-icons/bs'
import { Cart } from './Cart'
import { RiCloseFill } from 'react-icons/ri'

import CartContext from '../contexts/CartContext'
import { useContext, useState } from 'react'

export const Navbar = () => {

    const [mobileCart, setMobileCart] = useState(false)

    const { numOfProducts } = useContext(CartContext)

    function OpenCart() {
        setMobileCart(true)
    }

    function closeCart() {
        setMobileCart(false)
    }

    return (
        <div className='duration-300 overflow-x-hidden'>
            <div className='w-100 h-[80px] flex items-center bg-slate-950 text-white'>
                <div className="container flex justify-end items-center mx-auto px-7 md:px-2">
                    <div className='relative mr-2 cursor-pointer transition' onClick={OpenCart}>
                        <BsCart3 className='text-2xl' />
                        <div className='h-[17px] w-[17px] bg-blue-900 absolute bottom-[-13px] right-[-10px] rounded-full'>
                            <div className='text-[9px] flex items-center justify-center font-mono mt-[2px]'>{numOfProducts}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={mobileCart ? "absolute duration-500 h-[100vh] w-[100%] bg-gray-800 right-0 top-0 lg:hidden" : "absolute right-[-500px] duration-500 hidden"}>
                <div className='pt-20'>
                    <div className='absolute top-4 right-5 text-gray-100 p-1' >
                        <RiCloseFill className='text-white text-5xl p-1 cursor-pointer' onClick={closeCart} />
                    </div>
                    <Cart />
                </div>
            </div>
        </div >
    )
}
