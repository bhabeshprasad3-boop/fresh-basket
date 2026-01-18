import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from '../Button/Button';

const Cards = (props) => {
    return (
        <section>
           
            <div className='bg-zinc-100 p-2 md:p-5 rounded-xl transition-transform hover:scale-105 duration-300'>

                {/* Card Icons */}
                <div className='flex justify-between items-center'>
                    <span className='text-zinc-300 text-xl md:text-3xl cursor-pointer hover:text-red-500'>
                        <FaHeart />
                    </span>

                    
                    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white p-1 md:px-2 md:py-1 text-lg md:text-3xl rounded-lg md:rounded-[10px] active:scale-90 transition'>
                        <HiOutlinePlusSm />
                    </button>
                </div>

                
                <div className='w-full h-24 md:h-50 mt-2 md:mt-5 mb-2 md:mb-5'>
                    <img
                        src={props.image}
                        alt={props.name}
                        className='w-full h-full object-contain mx-auto'
                    />
                </div>

                {/* Card Content */}
                <div className='text-center'>
                    {/* Title: Mobile par text-xs (bahut chota), Desktop par text-lg */}
                    <h3 className='text-xs md:text-lg font-semibold truncate'>
                        {props.name}
                    </h3>

                    {/* Price: Mobile par text-sm, Desktop par text-lg */}
                    <p className='font-bold mb-2 md:mb-3 text-sm md:text-lg text-orange-600'>
                        ${props.price.toFixed(2)}
                    </p>

                    {/* Card Button: Button component ko bhi responsive classes pass karni hongi */}
                    {/* Agar Button component custom hai, toh usme 'className' prop add karein */}
                    <div className="scale-75 md:scale-100 origin-bottom">
                        <Button content="Shop Now" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cards
