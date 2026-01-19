import React, { useState } from 'react'
import CategoryPage from '../CategoryPage/CategroyPage'
import FruitsBanner from '../../image/fruits-banner.jpg'
import toast from 'react-hot-toast' 
import { useNavigate } from 'react-router-dom'

const Fruits = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddToCart = (e, product) => {
    const isLoggedIn = localStorage.getItem('users');

    if (!isLoggedIn) {
      toast.error("Please Login First to add items!");
      navigate('/login');
      return;
    }
    
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
    toast.success(`${product.name} added to Cart!`);
  };

  return (
    <div>
      <CategoryPage 
        title="Fruits & Veggies" 
        FruitsBanner={FruitsBanner} 
        categories={['Fruits','Vegetables']}
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default Fruits