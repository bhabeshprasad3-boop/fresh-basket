import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cart = () => {
  
  // 1. STATE CHANGED: Ab ye LocalStorage se data uthayega
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. USE EFFECT: Jab bhi cart change ho (Delete/Update), usse LocalStorage mein save karo
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // --- CALCULATIONS ---
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 500 ? 0 : 40; 
  // Agar cart khali hai to shipping 0 dikhao
  const total = subtotal + (cartItems.length > 0 ? shippingFee : 0);

  // --- FUNCTIONS ---
  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (type === 'decrease' && item.quantity === 1) return item; // 1 se kam nahi hoga
        return {
          ...item,
          quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-12 px-4 md:px-8">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center gap-4">
        <Link to="/" className="p-2 bg-white rounded-full shadow hover:bg-orange-50 text-gray-600 transition">
          <FaArrowLeft />
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Shopping <span className="text-orange-500">Cart</span>
          </h1>
          <p className="text-xs text-gray-500">{cartItems.length} Items in your bag</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {cartItems.length === 0 ? (
          
          // EMPTY STATE
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100 text-center px-4">
             <div className="bg-orange-50 p-5 rounded-full mb-4">
                <HiOutlineShoppingBag className="text-5xl md:text-6xl text-orange-300" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6 mt-2 text-sm">Looks like you haven't added anything yet.</p>
            <Link to="/allproduct" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
              Start Shopping
            </Link>
          </div>

        ) : (
          
          // CART CONTENT
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ITEMS LIST */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-row items-center gap-3 md:gap-4 transition-all">
                  
                  {/* Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply" 
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-sm md:text-lg font-bold text-gray-800 line-clamp-2">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <p className="text-orange-500 font-bold text-base md:text-lg mt-1">₹{item.price}</p>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex flex-col items-end gap-2 md:gap-3">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.id, 'decrease')} className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-orange-500 disabled:opacity-50">
                        <FaMinus size={8} />
                      </button>
                      <span className="w-8 md:w-10 text-center font-bold text-gray-700 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 'increase')} className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-orange-500">
                        <FaPlus size={8} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-400 text-xs md:text-sm hover:text-red-600 hover:underline flex items-center gap-1">
                      <FaTrash size={10} /> <span className="hidden md:inline">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="lg:col-span-1">
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 lg:sticky lg:top-24">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6 text-sm md:text-base">
                  <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shippingFee === 0 ? "text-green-600 font-medium" : ""}>
                        {shippingFee === 0 ? "Free" : `₹${shippingFee}`}
                    </span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 my-2"></div>
                  <div className="flex justify-between text-lg md:text-xl font-bold text-gray-900"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  Checkout <FaArrowRight />
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart;