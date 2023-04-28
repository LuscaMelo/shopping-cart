import CartContext from '../contexts/CartContext'
import { useContext } from 'react'

export const ProductCard = () => {

    const { setNumOfProducts, numOfProducts } = useContext(CartContext)

    function addToCart() {
        setNumOfProducts(numOfProducts + 1)
    }

    function removeOneProduct() {
        setNumOfProducts(numOfProducts - 1)
    }

    function removeOfCart() {
        setNumOfProducts(0)
    }

    return (
        <div className="flex mb-2  bg-gray-500 lg:bg-white p-2">
            <div className="mr-1">
                <img src="headphone.jpg" className="w-[100px]" alt="" />
            </div>
            <div className="flex justify-between w-[70%] p-1">
                <div>
                    <h5 className="font-bold text-md">Headphone</h5>
                    <p className="text-[11px] mb-3 font-bold">JH151-SB</p>
                    <span className="text-sm font-bold">$119.99</span>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="flex mt-1 ml-1 rounded-xl px-1 w-[80%] bg-gray-400 lg:bg-gray-200 overflow-hidden text-sm">
                        <button className="w-[25px] pb-1 h-[20px] font-bold flex justify-center text-slate-800 lg:text-slate-600 items-center" onClick={removeOneProduct}>-</button>
                        <span className="w-[20px] h-[20px] font-mono text-[12px] text-slate-800 lg:text-slate-600 flex justify-center items-center">{numOfProducts}</span>
                        <button className="w-[25px] pb-1 h-[20px] font-bold flex justify-center text-slate-800 lg:text-slate-600 items-center mt-[1px]" onClick={addToCart}>+</button>
                    </div>
                    <p className='text-bold text-xs underline cursor-pointer pb-3 lg:text-red-600' onClick={removeOfCart}>Remove</p>
                </div>
            </div>
        </div>
    )
}
