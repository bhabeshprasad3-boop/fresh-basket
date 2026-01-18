import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../Product/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, FruitsBanner, categories = [] }) => {

  let filterProduct = categories.includes('all') ? ProductList
      : ProductList.filter(item => categories.includes(item.category))

      

  const renderProduct = filterProduct.map(food => {
    return (
      <Cards key={food.id} image={food.image} name={food.name} price={food.price} />
    )
  })


  return (
    <div>
      <Banner title={title} FruitsBanner={FruitsBanner} />
      <div className='grid md:grid-cols-4 grid-cols-1 gap-9 py-20 px-10 max-w-7xl mx-auto'>{renderProduct}</div>
    </div>
  )
}

export default CategoryPage
