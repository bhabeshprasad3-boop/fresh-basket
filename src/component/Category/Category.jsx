import React from 'react'
import Heading from '../Heading/Heading'
import FruitsAndVeggies from '../../image/fruits-and-veggies.png'
import MeatAndSeaFood from '../../image/meat-and-seafood.png'
import DairyFood from '../../image/dairy-and-eggs.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Category = () => {
    const renderCard = category.map(card => {
        return (

            <div key={card.id} className='w-full'>

                {/* Card Image */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} alt=""
                        className='absolute bottom-0 left-1/2 -translate-x-1/2 max-w-full h-auto' />

                </div>

                {/* Card Detail */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-2xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.dsc}</p>
                    <Link to={card.path} className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='py-20 max-w-7xl mx-auto px-10'>
                <Heading highlight="Shop" heading="By Category" />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-15'>
                    {renderCard}
                </div>

            </div>
        </section>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: "Fruits & Veggies",
        dsc: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
        image: FruitsAndVeggies,
        path: '/fruits'
    },
    {
        id: 2,
        title: "Meat & SeaFood",
        dsc: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        image: MeatAndSeaFood,
        path: '/meat'
    },
    {
        id: 3,
        title: "Dairy & Eggs",
        dsc: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        image: DairyFood,
        path: '/dairy'
    }
]