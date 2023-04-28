import { BsCart3 } from 'react-icons/bs'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'

export const EmptyCart = () => {

    const { setMobileCart } = useContext(CartContext)

    function closeCart() {
        setMobileCart(false)
    }

    return (
        <div className='flex flex-col justify-center items-center border-2 border-gray-700 lg:border-none text-gray-400 p-4 py-20  text-center'>
            <h5 className='text-lg font-bold'>Your shopping cart is empty</h5>
            <BsCart3 className='text-gray-500 text-6xl my-5' />
            <button className='bg-gray-900 font-bold p-3 px-7 mt-4 md:text-white md:shadow-md shadow-gray-400 hover:bg-slate-950 duration-300' onClick={closeCart}>know our products</button>
        </div>
    )
}
