import { BsCart3 } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
import { Cart } from './Cart'

import CartContext from '../contexts/CartContext'
import { useContext, useState, useEffect } from 'react'

export const Navbar = () => {

    useEffect(() => {
        mobileCart ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    },);

    const [mobileCart, setMobileCart] = useState(false)

    const { numOfProducts } = useContext(CartContext)

    function OpenCart() {
        setMobileCart(true)
    }

    function closeCart() {
        setMobileCart(false)
    }

    return (
        <div>
            <div className='w-100 h-[80px] flex items-center bg-gray-900 text-white'>
                <div className="container flex justify-between items-center mx-auto px-8 md:px-2">
                    <div className='flex items-center gap-1'>
                        <FaReact className='text-3xl' />
                        <h1 className='text-bold text-xl'>Tech</h1>
                    </div>
                    <div className='flex items-center gap-4 relative cursor-pointer transition'>
                        <RiNotification3Line className='text-2xl hover:text-blue-300 duration-300' />
                        <BsCart3 className='text-2xl hover:text-blue-300 duration-300 lg:hidden' onClick={OpenCart} />
                        <div className='h-[17px] w-[17px] bg-blue-900 absolute bottom-[-13px] right-[31px] rounded-full lg:hidden' onClick={OpenCart}>
                            <div className='text-[9px] flex items-center justify-center font-mono mt-[2px]'>{numOfProducts}</div>
                        </div>
                        <BiUser className='text-2xl mt-[2px] hover:text-blue-300 duration-300' />
                    </div>
                </div>
            </div>

            <div className={mobileCart ? "w-full h-full bg-black/40 z-0 fixed top-0 lg:hidden" : "duration-500"}></div>

            <div className={mobileCart ? "absolute h-[100vh] w-[80%] bg-gray-800 right-0 top-0 overflow-hidden lg:hidden" : "absolute hidden overflow-hidden"}>
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
