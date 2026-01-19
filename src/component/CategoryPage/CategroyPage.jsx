import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../Product/ProductList' // Path check karlena
import Cards from '../Cards/Cards'

// 1. handleAddToCart prop receive kiya
const CategoryPage = ({ title, FruitsBanner, categories = [], handleAddToCart }) => {

  let filterProduct = categories.includes('all') ? ProductList
      : ProductList.filter(item => categories.includes(item.category))
      
  const renderProduct = filterProduct.map(food => {
    return (
      <Cards 
        key={food.id} 
        id={food.id} // 2. ID pass ki (Navigation ke liye zaroori)
        image={food.image} 
        name={food.name} 
        price={food.price}
        // 3. Cart Function pass kiya
        handleAddToCart={(e) => handleAddToCart(e, food)}
      />
    )
  })

  return (
    <div>
      <Banner title={title} FruitsBanner={FruitsBanner} />
      <div className='grid md:grid-cols-4 grid-cols-2 gap-9 py-20 px-10 max-w-7xl mx-auto'>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage