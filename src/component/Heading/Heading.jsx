import React from 'react'

const Heading = (props) => {
    return (

        
            <div className='py-10'>
                <div className='mx-auto w-fit'>
                    <h2 className=' text-zinc-800 md:text-5xl text-[2rem] font-bold capitalize'><span className='text-orange-500'> {props.highlight}</span> {props.heading}</h2>
                    <div className='md:w-34 w-25 h-1 bg-orange-300 md:mt-4 mt-1 ml-auto'></div>
                </div>
            </div>
       

    )
}

export default Heading
