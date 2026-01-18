import React from 'react'

import CategoryPage from '../CategoryPage/CategroyPage'
import SeeFoodBanner from '../../image/seafood-banner.jpg'

const Meat = () => {
  return (
    <div>
         <CategoryPage title="Meat & SeaFood" FruitsBanner={SeeFoodBanner} categories={['SeaFood','meat']}/>
    </div>
  )
}

export default Meat
