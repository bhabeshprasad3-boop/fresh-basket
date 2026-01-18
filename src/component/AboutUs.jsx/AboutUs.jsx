import React from 'react'
import Heading from '../Heading/Heading' // Tumhara existing Heading component
import { FaSeedling, FaTruckFast, FaHandHoldingHeart } from "react-icons/fa6";
import Button from '../Button/Button'; // Tumhara existing Button component agar hai, nahi to normal button use kar lenge

const AboutUs = () => {

  // Placeholder Images URLs (Fresh Food theme)
  const heroImage = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3";
  const storyImage = "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <section className='w-full overflow-x-hidden'>
      
      {/* ================= MAIN HERO SECTION ================= */}
      <div className='max-w-7xl mx-auto px-4 py-12 md:py-24'>
        <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
            
            {/* Left Side: Text Content */}
            <div className='w-full md:w-1/2 space-y-6'>
                <h3 className='text-orange-500 font-bold text-lg uppercase tracking-wider flex items-center gap-2'>
                   <FaSeedling /> About Fresh Basket
                </h3>
                <h1 className='text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight'>
                    Bringing Nature's <span className='text-orange-500 inline-block relative'>Best
                        {/* Little underline effect */}
                        <svg className="absolute -bottom-2 w-full h-3 text-orange-300/50" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                    </span> To Your Table.
                </h1>
                <p className='text-zinc-600 leading-relaxed text-lg md:text-xl'>
                    We believe that eating fresh shouldn't be a chore. Fresh Basket is on a mission to connect local farmers directly with mindful eaters like you, ensuring you get the highest quality produce without the hassle.
                </p>
            </div>

            {/* Right Side: Image */}
            <div className='w-full md:w-1/2 pl-0 md:pl-10'>
                <div className='rounded-[30px] overflow-hidden shadow-2xl shadow-orange-500/20 h-[400px] md:h-[500px] relative group'>
                    <div className='absolute inset-0 bg-orange-500 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500'></div>
                    <img 
                        src={heroImage} 
                        alt="Fresh Vegetables Basket" 
                        className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                    />
                </div>
            </div>
        </div>
      </div>


      {/* ================= OUR STORY SECTION (Grey Background) ================= */}
      <div className='bg-zinc-50 py-20'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-12 items-center'>
                 {/* Left Side: Image */}
                 <div className='w-full md:w-1/2 pr-0 md:pr-10 order-2 md:order-1'>
                    <div className='rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]'>
                        <img 
                            src={storyImage} 
                            alt="Farmer holding produce" 
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Right Side: Text */}
                <div className='w-full md:w-1/2 order-1 md:order-2'>
                    <Heading highlight="Our" heading="Story & Mission" />
                    
                    <p className='text-zinc-600 leading-relaxed mb-6 mt-6'>
                        It started with a simple realization: supermart vegetables often travel for weeks before reaching your plate, losing both flavor and nutrients.
                    </p>
                    <p className='text-zinc-600 leading-relaxed mb-8'>
                        We decided to change that. By building a network of trusted local farmers and optimizing our logistics, we ensure that most of our produce is harvested and delivered within 24 hours. <strong>Fresh Basket isn't just a store; it's a commitment to healthier living.</strong>
                    </p>

                    {/* Agar tumhara Button component hai to wo use karo, nahi to ye simple button */}
                    {/* <Button content="Contact Us" /> */}
                    <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all'>
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* ================= CORE VALUES SECTION ================= */}
       <div className='max-w-7xl mx-auto px-4 py-20'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold text-zinc-900'>What Sets Us Apart</h2>
                <p className='text-zinc-500 mt-2'>Our promises to you</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Value 1 */}
                <div className='bg-white p-8 rounded-2xl border border-zinc-100 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 group text-center'>
                    <div className='w-20 h-20 bg-orange-100 rounded-full flex justify-center items-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:rotate-12 transition-all duration-300'>
                        <FaSeedling className='text-3xl text-orange-500 group-hover:text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-zinc-800 mb-3'>Farm-Fresh Quality</h3>
                    <p className='text-zinc-500'>Sourced directly from certified farms, ensuring maximum freshness and nutrition.</p>
                </div>

                {/* Value 2 */}
                <div className='bg-white p-8 rounded-2xl border border-zinc-100 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 group text-center'>
                    <div className='w-20 h-20 bg-orange-100 rounded-full flex justify-center items-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:-rotate-12 transition-all duration-300'>
                        <FaTruckFast className='text-3xl text-orange-500 group-hover:text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-zinc-800 mb-3'>Express Delivery</h3>
                    <p className='text-zinc-500'>From the farm to your doorstep in record time, maintaining the cold chain.</p>
                </div>

                {/* Value 3 */}
                <div className='bg-white p-8 rounded-2xl border border-zinc-100 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 group text-center'>
                    <div className='w-20 h-20 bg-orange-100 rounded-full flex justify-center items-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300'>
                        <FaHandHoldingHeart className='text-3xl text-orange-500 group-hover:text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-zinc-800 mb-3'>Customer First</h3>
                    <p className='text-zinc-500'>Your satisfaction is our priority. Easy returns and dedicated 24/7 support.</p>
                </div>
            </div>
       </div>

    </section>
  )
}

export default AboutUs