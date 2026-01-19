import React, { useState } from 'react'
import CategoryPage from '../CategoryPage/CategroyPage' 
import SeeFoodBanner from '../../image/seafood-banner.jpg'
import toast from 'react-hot-toast' 

const Meat = () => {

  
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

 
  const handleAddToCart = (e, product) => {
   
    
    const existingItem = cart.find((item) => item.id === product.id);
    let newCart;

    if (existingItem) {
     
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success(`${product.name} added to Cart! 🛒`);
  };

  return (
    <div>
        <CategoryPage 
            title="Meat & SeaFood" 
            FruitsBanner={SeeFoodBanner} 
            categories={['SeaFood', 'Meat']} 
            handleAddToCart={handleAddToCart} 
        />
    </div>
  )
}

export default Meat