import React from 'react'
import Heading from '../Heading/Heading' // Make sure path is correct
import { FaMobileScreenButton, FaBasketShopping, FaTruckFast, FaFaceSmileBeam } from "react-icons/fa6";

const HowItWorks = () => {

  // Steps Data (Updated with working Unsplash Images)
  const steps = [
    {
      id: "01",
      title: "Browse & Order",
      desc: "Download our app or use the website to explore thousands of fresh products. Filter by category, price, or dietary needs and add your favorites to the cart.",
      icon: <FaMobileScreenButton />,
      // Image: Online Shopping / Phone
      img: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=2574&auto=format&fit=crop" 
    },
    {
      id: "02",
      title: "We Handpick the Best",
      desc: "Once confirmed, our expert team selects the freshest produce directly from our partner farms. We quality check every tomato, apple, and leafy green.",
      icon: <FaBasketShopping />,
      // Image: Fresh Fruits & Veggies
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2670&auto=format&fit=crop" 
    },
    {
      id: "03",
      title: "Express Delivery",
      desc: "Our delivery heroes pick up your packed order and race to your location. We ensure cold-chain storage so your ice cream stays frozen and veggies stay crisp.",
      icon: <FaTruckFast />,
      // Image: Delivery Box
      img: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=2574&auto=format&fit=crop" 
    },
    {
      id: "04",
      title: "Enjoy Freshness",
      desc: "Receive your package at your doorstep. Unpack happiness and cook delicious, healthy meals for your family. If you're not happy, we offer instant returns!",
      icon: <FaFaceSmileBeam />,
      // Image: Healthy Meal
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2670&auto=format&fit=crop" 
    }
  ];

  return (
    <section className='w-full overflow-hidden'>
      
      {/* 1. Header Section */}
      <div className='bg-zinc-50 py-16 text-center px-4'>
        <Heading highlight="Simple" heading="Working Process" />
        <p className='text-zinc-500 mt-4 max-w-2xl mx-auto'>
            From our farms to your fork in just 4 simple steps. We have streamlined the process to ensure you get the best quality in the shortest time.
        </p>
      </div>

      {/* 2. Steps Loop (Zig-Zag Layout) */}
      <div className='max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col gap-20'>
        
        {steps.map((step, index) => {
           // Logic for Zig-Zag: Even left, Odd right
           const isEven = index % 2 === 0;

           return (
             <div key={step.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}>
                
                {/* Image Side */}
                <div className='w-full md:w-1/2 relative group'>
                    {/* Decorative Background Blob */}
                    <div className={`absolute top-5 ${isEven ? '-left-5' : '-right-5'} w-full h-full bg-orange-100 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500`}></div>
                    
                    <div className='rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]'>
                        <img 
                            src={step.img} 
                            alt={step.title} 
                            className='w-full h-full object-cover hover:scale-110 transition-transform duration-700'
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className='w-full md:w-1/2'>
                    <div className='flex items-center gap-4 mb-4'>
                        {/* Step Number Badge */}
                        <span className='text-5xl md:text-6xl font-black text-zinc-100 relative'>
                            {step.id}
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-orange-500'>
                                {step.icon}
                            </span>
                        </span>
                        <h2 className='text-2xl md:text-3xl font-bold text-zinc-800'>{step.title}</h2>
                    </div>
                    
                    <p className='text-zinc-600 leading-relaxed text-lg'>
                        {step.desc}
                    </p>
                </div>

             </div>
           )
        })}

      </div>

      {/* 3. CTA (Call to Action) */}
      <div className='bg-gradient-to-r from-orange-500 to-orange-400 py-20 text-center text-white px-4 mt-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to taste the difference?</h2>
          <p className='text-orange-100 mb-8 text-lg'>Join thousands of happy customers today.</p>
          <div className='w-fit mx-auto bg-white rounded-full p-1'>
             <button className='bg-white text-orange-600 px-10 py-3 rounded-full font-bold hover:bg-zinc-100 transition-colors shadow-lg'>
                Start Shopping
             </button>
          </div>
      </div>

    </section>
  )
}

export default HowItWorks