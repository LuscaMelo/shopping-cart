import { RiCloseFill } from 'react-icons/ri'
import { Cart } from './Cart'


export const MobileCart = () => {

    return (
        <div className="absolute bg-slate-200 h-[100%] w-[70%] md:w-[50%] right-0 top-0 lg:hidden ease-in-out duration-300">
            <div className='pt-20'>
                <div className='absolute top-4 right-5 bg-slate-700 shadow shadow-gray-500 rounded-full p-1' >
                    <RiCloseFill className=' text-white text-4xl p-1' />
                </div>
                <Cart className="bg-blue-500 hidden" />
            </div>
        </div>
    )
}
