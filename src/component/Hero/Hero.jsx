import React from 'react'
import Grocery from '../../image/grocery.png'


const Hero = () => {
    return (
        <section >
            <div className='max-w-7xl h-screen mt-10 md:mt-0 mx-auto px-10 flex md:flex-row flex-col items-center justify-center gap-10 overflow-hidden '>

                {/* Hero Content */}
                <div className='flex-1 flex flex-col items-start'>
                    <span className='bg-orange-100 text-orange-500 text-sm md:text-lg px-4 py-1.5 rounded-full font-medium mb-3 mt-5 inline-block'>
                        Export Best Quality...
                    </span>

                    <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
                        Tasty Organic <span className='text-orange-500'>Fruits</span> &{' '}
                        <span className='text-orange-500'>Veggies</span>
                        <br /> In Your City
                    </h1>
                    <p className='text-zinc-500 text-lg max-w-lg mt-5 mb-8'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    {/* <Button content='Shop Now' /> */}
                </div>

                {/* Hero Image */}
                <div className='flex-1 flex justify-center'>
                    <img
                        src={Grocery}
                        alt="Grocery Delivery"
                        className='w-full max-w-md md:max-w-full object-contain hover:scale-105 transition-transform duration-500'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero