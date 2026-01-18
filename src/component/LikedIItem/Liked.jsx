import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaArrowLeft, FaHeartBroken } from 'react-icons/fa';

// 1. AAPKE REAL PRODUCTS IMPORT KIYE
import products from '../Product/ProductList';

const Liked = () => {
  
  // 2. STATE INITIALIZATION (Real Data se pehle 4 items uthaye)
  const [wishlist, setWishlist] = useState(products.slice(0, 4));

  // --- REMOVE FUNCTION ---
  const removeFromWishlist = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
  };

  // --- ADD TO CART FUNCTION ---
  const addToCart = (itemName) => {
    alert(`${itemName} added to Cart! 🛒`);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-12 px-4 md:px-12">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 bg-white rounded-full shadow hover:bg-orange-50 text-gray-600 transition">
            <FaArrowLeft />
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              My <span className="text-orange-500">Wishlist</span>
            </h1>
            <p className="text-sm text-gray-500">{wishlist.length} Items saved</p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto">
        
        {wishlist.length === 0 ? (
          
          // --- EMPTY STATE ---
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="bg-orange-50 p-6 rounded-full mb-4">
                <FaHeartBroken className="text-6xl text-orange-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6 mt-2 max-w-md">Looks like you haven't found anything you like yet.</p>
            <Link 
              to="/" 
              className="bg-linear-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Start Shopping
            </Link>
          </div>

        ) : (
          
          // --- PRODUCT GRID ---
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img 
                    src={item.image || item.img} // Check both keys
                    alt={item.title || item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category agar data mein hai to dikhao, nahi to 'Fresh' likh do */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-gray-600 shadow-sm">
                    {item.category || "Fresh"} 
                  </span>
                </div>

                {/* Info Area */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 truncate">{item.title || item.name}</h3>
                  <p className="text-orange-500 font-bold text-xl mt-1">₹{item.price}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button 
                      onClick={() => addToCart(item.title || item.name)}
                      className="flex-1 bg-zinc-800 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                    >
                      <FaShoppingCart /> Add
                    </button>
                    
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 bg-red-50 text-red-500 rounded-lg border border-red-100 hover:bg-red-500 hover:text-white transition-colors"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Liked;