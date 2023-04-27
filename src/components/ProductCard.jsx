import CartContext from '../contexts/CartContext'
import { useContext } from 'react'

export const ProductCard = () => {

    const { setNumOfProducts, numOfProducts } = useContext(CartContext)

    function addToCart() {
        setNumOfProducts(numOfProducts + 1)
    }

    function removeOfCart() {
        setNumOfProducts(numOfProducts - 1)
    }

    return (
        <div className="flex mb-2  bg-gray-300 lg:bg-white p-1">
            <div className="mr-3">
                <img src="headphone.jpg" className="w-[100px]" alt="" />
            </div>
            <div className="flex justify-between w-[70%] p-1">
                <div>
                    <h5 className="font-bold text-md">Headphone</h5>
                    <p className="text-[11px] mb-3 font-bold">JH151-SB</p>
                    <span className="text-sm font-bold">$119.99</span>
                </div>
                <div className="flex mt-3">
                    <button className="w-[25px] pb-1 h-[20px] font-bold bg-gray-100 flex justify-center items-center" onClick={removeOfCart}>-</button>
                    <span className="w-[20px] h-[20px] font-mono text-[12px] bg-slate-200 lg:bg-gray-200 border border-gray-100 flex justify-center items-center">{numOfProducts}</span>
                    <button className="w-[25px] pb-1 h-[20px] font-bold bg-gray-100 flex justify-center items-center" onClick={addToCart}>+</button>
                </div>
            </div>
        </div>
    )
}
