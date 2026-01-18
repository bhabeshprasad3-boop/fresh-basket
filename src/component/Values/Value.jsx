import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import BaskerOfFruits from '../../image/basket-full-vegetables.png'

const Value = () => {
    
   
    const leftContent = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-6'>
                {/* Icon */}
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 rounded-full text-white text-2xl shadow-lg shrink-0'>
                        {item.icon}
                    </span>
                </div>
                {/* Text */}
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 text-sm mt-1'>{item.des}</p>
                </div>
            </div>
        )
    })

   
    const rightContent = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex flex-row items-center gap-6'>
                {/* Icon */}
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-16 h-16 rounded-full text-white text-2xl shadow-lg shrink-0'>
                        {item.icon}
                    </span>
                </div>
                {/* Text */}
                <div className='text-left'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 text-sm mt-1'>{item.des}</p>
                </div>
            </div>
        )
    })

    return (
        <section className='bg-zinc-100'>
            <div className='max-w-7xl mx-auto px-10 py-20 '>
                
                <Heading highlight="Our" heading="Value" />

               
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-14'>
                    
                    {/* Left Column */}
                    <div className='flex flex-col md:gap-30 gap-10'>
                        {leftContent}
                    </div>

                    {/* Middle Column (Image) */}
                    <div className='md:flex justify-center hidden'>
                        <img 
                            className='w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-500' 
                            src={BaskerOfFruits} 
                            alt="Vegetable Basket" 
                        />
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col md:gap-30 gap-10'  >
                        {rightContent}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Value


const value = [
    {
        id: 1,
        title: "Trust",
        des: "Building lasting relationships through honesty and reliable service.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        des: "Farm-to-table produce delivered to your doorstep daily.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        des: "Rigorous hygiene checks for your health and peace of mind.",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: "100% Organic",
        des: "Certified natural produce grown without harmful chemicals.",
        icon: <FaSeedling />
    }
]