import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import products from '../Product/ProductList' 
import Button from '../Button/Button'
import { FaHeart } from 'react-icons/fa6'
import { HiOutlinePlusSm } from 'react-icons/hi'
import toast from 'react-hot-toast'

const AllProduct = ({ query }) => {

  const navigate = useNavigate(); 

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const productKey = ["name", "category", "price"];
  const filterProducts = products.filter((item) => {
    if (!query) return true
    const lowerCaseQuery = query.toLowerCase();
    return productKey.some((key) => {
      const value = item[key]
      return (value || "").toString().toLowerCase().includes(lowerCaseQuery);
    })
  })

  const handleLike = (e, product) => {
    e.stopPropagation(); 
    
    const isLiked = wishlist.some((item) => item.id === product.id);
    let newWishlist;
    if (isLiked) {
      newWishlist = wishlist.filter((item) => item.id !== product.id);   
      toast.error("Removed from Wishlist");
    } else {    
      newWishlist = [...wishlist, product];
      toast.success("Added to Wishlist ❤️");
    }
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

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
    toast.success(`${product.name} added to Cart! 🛒`);
  };

  return (
    <div className='grid md:grid-cols-4 grid-cols-2 mt-10 mb-10 gap-5 px-10 max-w-7xl mx-auto'>

      {filterProducts.length > 0 ? filterProducts.map((food) => {
        const isLiked = wishlist.some((item) => item.id === food.id);

        return (
          <div 
            key={food.id}
            onClick={() => navigate(`/productinfo/${food.id}`)}
            className='bg-zinc-100 p-2 md:p-5 rounded-xl transition-transform hover:scale-105 duration-300 cursor-pointer'
          >

            <div className='flex justify-between items-center'>
              <span 
                onClick={(e) => handleLike(e, food)}
                className={`text-xl md:text-3xl cursor-pointer hover:text-red-500 transition-colors ${isLiked ? 'text-red-500' : 'text-zinc-300'}`}
              >
                <FaHeart />
              </span>

              <button 
                onClick={(e) => handleAddToCart(e, food)}
                className='bg-linear-to-b from-orange-400 to-orange-500 text-white p-1 md:px-2 md:py-1 text-lg md:text-3xl rounded-lg md:rounded-[10px] active:scale-90 transition'
              >
                <HiOutlinePlusSm />
              </button>
            </div>

            <div className='w-full h-24 md:h-50 mt-2 md:mt-5 mb-2 md:mb-5'>
              <img
                src={food.image}
                alt={food.name}
                className='w-full h-full object-contain mx-auto mix-blend-multiply'
              />
            </div>

            <div className='text-center'>
              <h3 className='text-xs md:text-lg font-semibold truncate'>
                {food.name}
              </h3>

              <p className='font-bold mb-2 md:mb-3 text-sm md:text-lg text-orange-600'>
                ${food.price.toFixed(2)}
              </p>

              <div 
                className="scale-75 md:scale-100 origin-bottom"
                onClick={(e) => handleAddToCart(e, food)}
              >
                <Button content="Add to Cart" />
              </div>
            </div>
          </div>
        )
      }) : (
        <div className='col-span-full flex flex-col items-center justify-center py-16'>
          <p className='text-xl text-zinc-500 font-medium'>
            No results found for "<span className='text-orange-500 font-bold'>{query}</span>"
          </p>
          <p className='text-zinc-400 text-sm mt-2'>Try checking your spelling or use different keywords.</p>
        </div>
      )}
    </div>
  )
}

export default AllProduct