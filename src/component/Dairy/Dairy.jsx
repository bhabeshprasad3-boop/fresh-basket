import React from 'react'
import Category from '../Category/Category'
import CategoryPage from '../CategoryPage/CategroyPage'
import DairyBanner from '../../image/dairy-banner.jpg'


const Dairy = () => {
  return (
    <div>
     <CategoryPage title="Dairy & Eggs" FruitsBanner={DairyBanner} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
