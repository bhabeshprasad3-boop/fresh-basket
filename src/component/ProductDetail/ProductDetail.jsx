import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../Product/ProductList'
import { FaStar, FaShoppingCart, FaArrowLeft, FaTruck, FaShieldAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'  

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddToCart = () => {
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

  if (!product) {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800">Product Not Found 😕</h1>
            <button onClick={() => navigate('/allproduct')} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">
                Go Back
            </button>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 mb-6 hover:text-orange-500 transition-colors font-medium"
        >
            <FaArrowLeft className="mr-2" /> Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                
                <div className="bg-gray-100 p-8 flex justify-center items-center h-[400px] md:h-[600px] relative group">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                    />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                    
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold w-fit mb-4">
                        {product.category}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
                        {product.name}
                    </h1>

                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400 text-lg">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-500 font-medium">({product.rating} Reviews)</span>
                    </div>

                    <div className="text-5xl font-bold text-orange-600 mb-6">
                        ${product.price}
                    </div>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Enjoy the fresh and organic taste of {product.name}. 
                        Sourced directly from the best farms, ensuring top quality and nutrition for your family.
                        Perfect for your daily diet.
                    </p>

                    <div className="flex gap-6 mb-8 border-t border-b border-gray-100 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                            <FaTruck className="text-orange-500 text-xl" />
                            <span className="text-sm">Fast Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <FaShieldAlt className="text-orange-500 text-xl" />
                            <span className="text-sm">Quality Verified</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-orange-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all flex justify-center items-center gap-2 active:scale-95"
                        >
                            <FaShoppingCart /> Add to Cart
                        </button>

                        <button className="flex-1 border-2 border-gray-200 text-gray-700 text-lg font-bold py-4 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all active:scale-95">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo