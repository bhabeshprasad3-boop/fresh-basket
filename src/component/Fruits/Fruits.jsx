import React from 'react'
import CategoryPage from '../CategoryPage/CategroyPage'
import FruitsBanner from '../../image/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" FruitsBanner={FruitsBanner} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
