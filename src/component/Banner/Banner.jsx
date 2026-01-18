import React from 'react'

const Banner = ({title,FruitsBanner}) => {
  return (
    <div className='h-[50vh]  flex justify-center items-center bg-center bg-cover relative'
    style={{backgroundImage: `url(${FruitsBanner})`}}>
      <p className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</p>
      <div className='bg-black/20 absolute inset-0'></div>
    </div>
  )
}

export default Banner
