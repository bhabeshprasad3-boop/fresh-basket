import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'; 
import { auth, googleProvider } from '../../config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom' 
import toast from 'react-hot-toast';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            toast.success("Login Successful! Welcome Back");
            navigate('/');
        } catch (error) {
            console.error(error)
            toast.error("Wrong email or password");
        }
    }

    const handleGoogleLogin = async () => {
        try {
          
            await signInWithPopup(auth, googleProvider);
            toast.success("Logged in with Google!");
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }

    }

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome <span className="text-orange-500">Back!</span>
                    </h2>
                    <p className="text-zinc-500 text-sm mt-2">Log in to continue shopping</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <span className="absolute left-3 top-3.5 text-zinc-400 text-lg"><FaEnvelope /></span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 bg-gray-50" required />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <span className="absolute left-3 top-3.5 text-zinc-400 text-lg"><FaLock /></span>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 bg-gray-50" required />
                    </div>

                    <button type="submit" className="w-full bg-linear-to-r from-orange-400 to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-sm text-zinc-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Button */}
                <div>
                    <button
                        onClick={handleGoogleLogin}
                        
                        type="button" 
                        className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium text-gray-700">
                        <FaGoogle className="text-red-500 text-xl" /> Continue with Google
                    </button>
                </div>

                <p className="text-center text-zinc-500 mt-8 text-sm">
                    Don't have an account? <Link to="/register" className="text-orange-500 font-bold hover:underline">Sign Up</Link>
                </p>

            </div>
        </div>
    )
}

export default Login