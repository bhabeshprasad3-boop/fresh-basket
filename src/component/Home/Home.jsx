import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Values/Value'
import Product from '../Product/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'

const Home = ({query}) => {
  return (
    <div>
      
      <Hero/>
      <Category/>
      <Value/>
      <Product query={query}/>
      <Discount/>
      <Process/>
      <Testimonial/>
      
    </div>
  )
}

export default Home
