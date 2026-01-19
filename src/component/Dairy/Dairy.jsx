import React, { useState } from 'react'
import CategoryPage from '../CategoryPage/CategroyPage'
import DairyBanner from '../../image/dairy-banner.jpg'
import toast from 'react-hot-toast' 

const Dairy = () => {

 
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
          title="Dairy & Eggs" 
          FruitsBanner={DairyBanner} 
          categories={['Dairy']} 
          handleAddToCart={handleAddToCart} 
       />
    </div>
  )
}

export default Dairy