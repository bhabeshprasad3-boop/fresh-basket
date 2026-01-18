import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../image/fresh-fruits.png'

const Discount = () => {
    return (
        <section className='py-10'>
            <div className='w-full mx-auto bg-gray-100 flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden p-10 md:p-10 relative'>
                
                {/* 1. Left Side: 20% Label */}
                
                <div className='flex items-center justify-center mb-6 md:mb-0'>
                    <h1 className='text-7xl md:text-9xl font-bold text-orange-500 rotate-0 md:-rotate-90 whitespace-nowrap tracking-wide'>
                        20%
                    </h1>
                </div>

                {/* 2. Middle Side: Content */}
                <div className='flex-1 md:pl-10 text-center md:text-left z-10'>
                    <h1 className='text-4xl md:text-6xl font-bold text-zinc-900 leading-tight mb-4'>
                        First Order <br /> Discount!
                    </h1>
                    <p className='text-zinc-500 text-base md:text-lg mb-5 max-w-xl'>
                        Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                    </p>
                    <Button content="Get a Discount" />
                </div>

                {/* 3. Right Side: Image */}
               
                <div className='hidden md:flex w-full md:w-1/3 justify-end mt-5 md:mt-0'>
                    <img 
                        src={FreshFruits} 
                        alt="Fresh Fruits" 
                        className='w-full h-full object-contain md:scale-170' 
                    />
                </div>
                
            </div>
        </section>
    )
}

export default Discount