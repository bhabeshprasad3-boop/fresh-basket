import React, { useRef } from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";

// Import your images
import userPic1 from '../../image/customer1.jpg'
import userPic2 from '../../image/customer2.jpg'
import userPic3 from '../../image/customer3.jpg'
import userPic4 from '../../image/customer4.jpg'
import userPic5 from '../../image/customer5.jpg'

const Testimonial = () => {
    
    // 1. Create a reference for the scrollable container
    const scrollRef = useRef(null);

    // 2. Logic to scroll left or right
    const scrollHandler = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Adjust based on card width + gap
            if (direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    // 3. Full Data with original text
    const users = [
        {
            id: 1,
            profilePic: userPic1,
            name: "Emily Johnson",
            title: "Food Vlogger",
            rating: <MdOutlineStarPurple500 />,
            detail: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!"
        },
        {
            id: 2,
            profilePic: userPic2,
            name: "Michael Chen",
            title: "Professional Chef",
            rating: <MdOutlineStarPurple500 />,
            detail: "As a chef, quality is my top priority. This store never disappoints with its premium ingredients and exotic spices. Highly recommended for anyone who loves cooking seriously."
        },
        {
            id: 3,
            profilePic: userPic3,
            name: "Sarah Williams",
            title: "Busy Mom",
            rating: <MdOutlineStarPurple500 />,
            detail: "The subscription box is a lifesaver! I get all my weekly essentials delivered right to my door without thinking about it. Great prices and excellent customer service."
        },
        {
            id: 4,
            profilePic: userPic4,
            name: "David Miller",
            title: "Nutritionist",
            rating: <MdOutlineStarPurple500 />,
            detail: "I'm impressed by the clear nutritional labeling and the wide selection of gluten-free and vegan products. It makes shopping for healthy meal plans so much easier."
        },
        {
            id: 5,
            profilePic: userPic5,
            name: "Jessica Lee",
            title: "Food Photographer",
            rating: <MdOutlineStarPurple500 />,
            detail: "Not only is the food delicious, but the presentation of the app makes shopping a joy. The fruits and vegetables arrive in perfect condition, ready for their close-up!"
        }
    ]

    const renderUsers = users.map(user => {
        return (
            <div key={user.id} className='bg-zinc-100 rounded-xl p-8 min-w-87.5 md:min-w-100'> 
                <div className='flex gap-5 mb-4'>
                    <div>
                        <div className='w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4 flex justify-center items-center overflow-hidden'>
                            <img src={user.profilePic} className='w-full h-full object-cover' alt={user.name} />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-lg text-zinc-900'>{user.name}</h1>
                        <p className='font-semibold text-zinc-600 text-sm mb-1'>{user.title}</p>
                        <div className='flex gap-1'>
                            {/* Render 5 stars */}
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className='text-orange-400'>{user.rating}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-zinc-600 leading-relaxed text-sm'>
                        {user.detail}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-7xl mx-auto p-10'>
                <Heading highlight="Customers" heading="Saying" />

                {/* Navigation Buttons */}
                <div className='flex justify-end gap-5 mr-5 mb-5'>
                    <button 
                        onClick={() => scrollHandler("left")} 
                        className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center cursor-pointer active:scale-95 text-zinc-800 hover:bg-lainer-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all'>
                        <IoIosArrowBack />
                    </button>
                    <button 
                        onClick={() => scrollHandler("right")} 
                        className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center cursor-pointer active:scale-95 text-zinc-800 hover:gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all'>
                        <IoIosArrowForward />
                    </button>
                </div>

                {/* Scrollable Container */}
                <div 
                    ref={scrollRef} 
                    className='flex gap-10 overflow-x-auto pb-5 scrollbar-hide scroll-smooth'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
                >
                    {renderUsers}
                </div>
            </div>
        </section>
    )
}

export default Testimonial