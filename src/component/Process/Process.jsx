import React from 'react';
import Heading from '../Heading/Heading';

// 1. Icons Imports
import { 
    PiNumberCircleOneFill, 
    PiNumberCircleTwoFill, 
    PiNumberCircleThreeFill, 
    PiNumberCircleFourFill,
    PiPlant,
    PiFactory
} from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {

    const renderSteps = steps.map((step, index) => {
        const isEvenIndex = index % 2 === 0; 
        
        return (
            <div 
                key={step.id} 
                className={`flex flex-col items-center gap-6 w-full md:w-1/4 transition-all duration-500
                    ${isEvenIndex ? 'md:mt-24' : 'md:mt-0'} 
                `}
            >
                
                <span className='
                    flex w-20 h-20 rounded-full items-center justify-center text-6xl 
                    bg-white text-zinc-800 
                     outline-2 outline-dashed outline-offset-4 outline-zinc-400
                    shadow-sm '>
                    {step.number}
                </span>
                
                <div className='flex gap-4 items-start w-full px-2'>
                    
                    {/* Orange Icon */}
                    <span className='shrink-0 flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 text-white w-14 h-14 rounded-full text-2xl shadow-lg'>
                        {step.icon}
                    </span>

                    {/* Text Details */}
                    <div>
                        <h4 className='text-zinc-800 text-xl font-bold'>{step.title}</h4>
                        <p className='text-zinc-500 text-sm mt-2 leading-relaxed'>
                            {step.para}
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='py-20 bg-gray-50 overflow-hidden'> 
            <div className='max-w-7xl mx-auto px-10'>
                
                {/* Heading */}
                <div className='mb-16'>
                    <Heading highlight="Our" heading="Process"/>
                </div>

                {/* Steps Container */}
                {/* flex-col for mobile, flex-row for desktop */}
                <div className='flex flex-col md:flex-row items-start justify-center gap-10 relative'>
                    {renderSteps}
                </div>

            </div>
        </section>
    )
}

export default Process


// --- DATA ARRAY ---
const steps = [
    {
        id: 1,
        number: <PiNumberCircleOneFill />,
        title: "Sourcing",
        para: "We partner directly with certified organic farmers to select the finest, naturally grown produce.",
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <PiNumberCircleTwoFill />,
        title: "Manufacturing",
        para: "Our state-of-the-art facilities ensure produce is cleaned, sorted, and packed to preserve maximum freshness.",
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <PiNumberCircleThreeFill />,
        title: "Quality Control",
        para: "Every item undergoes rigorous hygiene and taste tests to ensure only the best reaches your table.",
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <PiNumberCircleFourFill />,
        title: "Logistics",
        para: "Our optimized delivery network ensures your order arrives promptly at your doorstep, fresh and ready to eat.",
        icon: <BsTruck />
    }
]