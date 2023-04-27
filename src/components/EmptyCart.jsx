import { BsCart3 } from 'react-icons/bs'
export const EmptyCart = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[30vh] bg-gray-200 p-4 text-center'>
            <h5 className='text-lg font-bold'>Your shopping cart is empty</h5>
            <BsCart3 className='text-gray-500 text-6xl my-5' />
            <button className='bg-gray-900 text-white font-bold p-3 mt-4'>know our products</button>
        </div>
    )
}
