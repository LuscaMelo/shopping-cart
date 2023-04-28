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
        <div className="flex mb-2  bg-gray-300 lg:bg-white p-1">
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
                    <div className="flex mt-1 ml-1">
                        <button className="w-[25px] pb-1 h-[20px] font-bold bg-gray-100 flex justify-center items-center" onClick={removeOneProduct}>-</button>
                        <span className="w-[20px] h-[20px] font-mono text-[12px] bg-slate-200 lg:bg-gray-200 border border-gray-100 flex justify-center items-center">{numOfProducts}</span>
                        <button className="w-[25px] pb-1 h-[20px] font-bold bg-gray-100 flex justify-center items-center" onClick={addToCart}>+</button>
                    </div>
                    <p className='text-bold text-xs underline cursor-pointer pb-3 md:text-red-600' onClick={removeOfCart}>Remove</p>
                </div>
            </div>
        </div>
    )
}
