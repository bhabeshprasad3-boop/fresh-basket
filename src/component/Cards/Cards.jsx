import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Cards = (props) => {
    
    const navigate = useNavigate();

    
    const handleCardClick = () => {
        navigate(`/productinfo/${props.id}`);
    }

    const handleAddToCartClick = (e) => {
        e.stopPropagation(); 
        
        if (props.handleAddToCart) {
            props.handleAddToCart(e);
        }
    }

    const handleLikeClick = (e) => {
        e.stopPropagation();
    }

    return (
        <section>
            <div 
                onClick={handleCardClick}
                className='bg-zinc-100 p-2 md:p-5 rounded-xl transition-transform hover:scale-105 duration-300 cursor-pointer'
            >

                {/* Card Icons */}
                <div className='flex justify-between items-center'>
                    {/* Heart Icon */}
                    <span 
                        onClick={handleLikeClick} 
                        className='text-zinc-300 text-xl md:text-3xl cursor-pointer hover:text-red-500'
                    >
                        <FaHeart />
                    </span>

                    {/* Plus Button */}
                    <button 
                        onClick={handleAddToCartClick} 
                        className='bg-gradient-to-b from-orange-400 to-orange-500 text-white p-1 md:px-2 md:py-1 text-lg md:text-3xl rounded-lg md:rounded-[10px] active:scale-90 transition'
                    >
                        <HiOutlinePlusSm />
                    </button>
                </div>

                {/* Product Image */}
                <div className='w-full h-24 md:h-50 mt-2 md:mt-5 mb-2 md:mb-5'>
                    <img
                        src={props.image}
                        alt={props.name}
                        className='w-full h-full object-contain mx-auto mix-blend-multiply'
                    />
                </div>

                {/* Card Content */}
                <div className='text-center'>
                    <h3 className='text-xs md:text-lg font-semibold truncate'>
                        {props.name}
                    </h3>

                    <p className='font-bold mb-2 md:mb-3 text-sm md:text-lg text-orange-600'>
                        ${props.price.toFixed(2)}
                    </p>
                    
                    {/* Main Add to Cart Button */}
                    <div className="scale-75 md:scale-100 origin-bottom" onClick={handleAddToCartClick}> 
                       
                        <Button content="Add to Cart" />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Cards