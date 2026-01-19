import React, { useState, useEffect } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa"; 
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from '../../config'; 
import { onAuthStateChanged, signOut } from 'firebase/auth'; 

const Navbar = ({ setQuery }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate();
    
    const [userName, setUserName] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName || user.email.split('@')[0]);
            } else {
                setUserName(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('users');
            toast.success("Logged Out Successfully!");
            navigate('/login');
        } catch (error) {
            toast.error("Logout Error");
        }
    };

    return (
        <div className="w-full font-sans">
            <header className='bg-white fixed top-0 right-0 left-0 shadow-md z-50'>
                
                <nav className='flex justify-between items-center mx-auto h-20 px-5 lg:px-12'>

                    <Link to='/' className='text-3xl lg:text-4xl font-bold tracking-tight text-gray-800 shrink-0'>
                        Fresh<span className='text-orange-500'>B</span>asket
                    </Link>

                    <ul className='hidden lg:flex items-center gap-x-10 text-gray-700 font-medium'>
                        <li><Link to='/' className='hover:text-orange-500 transition-colors'>Home</Link></li>
                        <li><Link to='/aboutus' className='hover:text-orange-500 transition-colors'>About Us</Link></li>
                        <li><Link to='/how-it-work' className='hover:text-orange-500 transition-colors'>Process</Link></li>
                        <li><Link to='/contact' className='hover:text-orange-500 transition-colors'>Contact Us</Link></li>
                    </ul>

                    <div className='flex items-center gap-x-4'>
                        
                        <div className='hidden lg:flex items-center border-2 border-orange-500 rounded-full pl-4 pr-1 py-1 w-72 bg-gray-50'>
                            <input
                                type="text"
                                placeholder='Search items...'
                                onChange={(e) => setQuery(e.target.value)}
                                className='flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-sm'
                            />
                            <button className='bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors'>
                                <IoIosSearch className="text-xl"/>
                            </button>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Link to='/liked' className='text-gray-700 hover:text-orange-500 text-2xl'><GoHeartFill /></Link>
                            <Link to='/cart' className='text-gray-700 hover:text-orange-500 text-2xl'><HiShoppingBag /></Link>

                            {userName ? (
                                <div className="hidden lg:flex items-center gap-3 pl-3 border-l-2 border-gray-200">
                                    <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
                                        <FaUserCircle className="text-orange-500 text-lg" />
                                        <span className="text-sm font-semibold text-gray-700 capitalize max-w-25 truncate">{userName}</span>
                                    </div>
                                    <button 
                                        onClick={handleLogout}
                                        className="text-sm font-bold text-red-500 hover:text-red-700 hover:underline"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to='/login' className='hidden lg:block bg-linear-to-r from-orange-400 to-orange-600 text-white px-5 py-2 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform'>
                                    Login
                                </Link>
                            )}

                            <button className='lg:hidden text-3xl text-gray-800 focus:outline-none' onClick={toggleMenu}>
                                {isOpen ? <IoClose /> : <TbMenu2 />}
                            </button>
                        </div>
                    </div>
                </nav>

                <div className={`absolute top-20 left-0 w-full bg-orange-500 shadow-xl flex flex-col items-center gap-6 py-8 lg:hidden transition-all duration-300 ease-in-out z-40 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[150%] pointer-events-none'}`}>
                    
                    <div className='flex w-4/5 bg-white rounded-full px-4 py-2 shadow-inner'>
                        <input
                            type="text"
                            placeholder='Search items...'
                            onChange={(e) => setQuery(e.target.value)}
                            className='flex-1 focus:outline-none text-gray-800'
                        />
                        <IoIosSearch className="text-2xl text-orange-500"/>
                    </div>

                    <ul className='flex flex-col gap-5 text-center w-full'>
                        <li className='w-full hover:bg-orange-600 py-2'><Link to='/' onClick={toggleMenu} className='text-xl text-white font-semibold tracking-wider'>Home</Link></li>
                        <li className='w-full hover:bg-orange-600 py-2'><Link to='/aboutus' onClick={toggleMenu} className='text-xl text-white font-semibold tracking-wider'>About Us</Link></li>
                        <li className='w-full hover:bg-orange-600 py-2'><Link to='/how-it-work' onClick={toggleMenu} className='text-xl text-white font-semibold tracking-wider'>Process</Link></li>
                        <li className='w-full hover:bg-orange-600 py-2'><Link to='/contact' onClick={toggleMenu} className='text-xl text-white font-semibold tracking-wider'>Contact Us</Link></li>
                        
                        <div className="border-t border-orange-300 w-3/4 mx-auto my-1 opacity-50"></div>

                        {userName ? (
                             <li onClick={() => { handleLogout(); toggleMenu(); }} className='text-xl font-bold text-white cursor-pointer flex items-center justify-center gap-2 hover:bg-orange-600 py-2 w-full'>
                                <FaUserCircle /> Logout ({userName})
                             </li>
                        ) : (
                             <li className='mt-2'><Link to='/login' onClick={toggleMenu} className='text-xl font-bold text-orange-500 bg-white px-8 py-2 rounded-full shadow-lg hover:bg-gray-100'>Login</Link></li>
                        )}
                    </ul>
                </div>
            </header>
            
            <div className='h-20'></div>
        </div>
    )
}

export default Navbar;