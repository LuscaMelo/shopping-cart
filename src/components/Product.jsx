import { AiFillStar } from 'react-icons/ai'

import CartContext from '../contexts/CartContext'
import { useContext } from 'react'

export const Product = () => {

    const { setNumOfProducts, numOfProducts, setMobileCart } = useContext(CartContext)

    function addToCart() {
        setNumOfProducts(numOfProducts + 1)
        setMobileCart(true)
    }

    return (
        <div className="flex flex-col md:flex-row md:p-4 bg-white">
            <div>
                <img src="headphone.jpg" className="h-[65vh] md:h-[100%] w-100 object-cover" alt="headphone product" />
            </div>
            <div className="px-7 py-16 mb-5 md:py-0">
                <h2 className="text-5xl font-bold md:mt-0">Headphone</h2>
                <p className="text-sm mt-5 mb-7 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis corrupti fuga beatae labore temporibus rerum nisi porro suscipit, aliquam earum maiores! Laudantium ullam voluptatem tempora? Dolor rerum omnis voluptatum!</p>
                <span className="text-3xl font-bold">$119.99</span>
                <div className='flex mt-6'>
                    <div className='flex gap-1 mr-3'>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                    <p className='text-gray-600 underline underline-offset-1 mt-[-5px] cursor-pointer'>441 reviews</p>
                </div>
                <div className='flex gap-3 mt-4'>
                    <button className='border-2 border-gray-800 font-bold py-3 px-6 shadow-md shadow-gray-400 scale-95 hover:bg-gray-900 hover:text-white hover:scale-100 duration-300'>Buy Now</button>
                    <button className='bg-gray-900 text-white font-bold py-3 px-6 shadow-md shadow-gray-400 scale-95 hover:bg-gray-950 hover:scale-105 duration-300' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
