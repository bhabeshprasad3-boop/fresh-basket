import React, { useState } from 'react'
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { auth } from '../../config'
import { sendPasswordResetEmail } from 'firebase/auth'
import toast from 'react-hot-toast';

const ForgotPassword = () => {

  const [input, setInput] = useState('');

  const handleUserInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, input)
      toast.success("Reset Link Sent! Check your Inbox/Spam")
      setInput("");
    } catch (error) {
     
      console.log("Firebase Error:", error.code);
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-50 px-4'>
      
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transform transition-all">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm">
            Don't worry! It happens. Please enter the email associated with your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Input Field */}
          <div className="relative group">
            <span className="absolute left-4 top-4 text-gray-400 text-lg group-focus-within:text-orange-500 transition-colors">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              value={input} 
              placeholder="Enter your Email"
              onChange={handleUserInput}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all bg-gray-50 text-gray-700 font-medium"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white font-bold py-3.5 rounded-2xl shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/login" 
            className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Login
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ForgotPassword