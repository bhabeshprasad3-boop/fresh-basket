import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from './ProductList';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';

const Product = ({ query }) => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];

    const [activeTab, setActivetab] = useState('All');


    let filterProduct = ProductList.filter((item) => {


        const categoryMatch = activeTab === 'All' ? true : item.category === activeTab;
        const searchMatch = item.name.toLowerCase().includes((query || "").toLowerCase());
        return categoryMatch && searchMatch;
    });


    const renderCards = filterProduct.slice(0, 8).map(food => {
        return (
            <Cards key={food.id} image={food.image} name={food.name} price={food.price} />
        )
    })

    return (
        <section>
            <div className='max-w-7xl mx-auto px-4 py-8 md:p-10'>
                <Heading highlight="Our" heading="Product" />

                <div className='flex gap-2 sm:gap-3 justify-center mt-6 md:mt-8 flex-wrap'>
                    {categories.map(item => {
                        return (
                            <button
                                key={item}
                                onClick={() => setActivetab(item)}
                                className={`px-4 sm:px-8 py-1.5 sm:py-1 text-sm sm:text-base cursor-pointer rounded-[10px] transition-all duration-300
                                    ${activeTab === item
                                        ? 'bg-orange-500 text-white shadow-md transform scale-105'
                                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                                    }`}
                            >
                                {item}
                            </button>
                        )
                    })}
                </div>

                <div className='grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-10 md:mt-20'>
                    {/* Agar product mile toh dikhao, nahi toh 'Not Found' message */}
                    {renderCards.length > 0 ? renderCards : (
                        <div className='col-span-full flex flex-col items-center justify-center py-16'>
                            <p className='text-xl text-zinc-500 font-medium'>
                                No results found for "<span className='text-orange-500 font-bold'>{query}</span>"
                            </p>
                            <p className='text-zinc-400 text-sm mt-2'>Try checking your spelling or use different keywords.</p>
                        </div>
                    )}
                </div>

                <div className='mt-10 md:mt-15 mx-auto w-fit'>
                    <Link to='/allproduct' className='bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer block'>
                        View All
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Product