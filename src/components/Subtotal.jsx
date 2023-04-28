import { useContext } from 'react'
import CartContext from '../contexts/CartContext'

export const Subtotal = () => {

    const { numOfProducts } = useContext(CartContext)

    let item = "item"
    numOfProducts === 1 ? item = "item" : item = "items"

    return (
        <div className="justify-end w-[97%] text-gray-400 border-t-2 border-gray-700 mb-8 p-2 m-2">
            <div className="flex w-[75%] md:w-[100%] justify-between mt-3 ml-auto">
                <div>
                    <h5 className="font-bold lg:text-gray-700">Sub-Total</h5>
                    <p className="text-xs font-mono mt-[-2px]">{numOfProducts} {item}</p>
                </div>
                <div>
                    <h5 className="font-bold text-white lg:text-gray-900 text-xl">${(119.99 * numOfProducts).toFixed(2)}</h5>
                </div>
            </div>
            <div className="flex w-[100%] justify-end">
                <button className="bg-gray-900 text-white w-[75%] mt-6 p-4 font-bold hover:bg-gray-950 hover:scale-105 duration-300">checkout</button>
            </div>
        </div>
    )
}
