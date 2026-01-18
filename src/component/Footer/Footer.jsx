import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <footer className='bg-zinc-100 w-full p-10 md:p-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                {/* First Container: Brand Info */}
                <div className='flex flex-col gap-y-4'>
                    <a className='text-3xl font-bold' href="#">
                        Fresh<span className='text-orange-500'>B</span>asket
                    </a>
                    <p className='text-lg text-zinc-700 leading-relaxed'>
                        Bred for a high content of beneficial substances.
                        We'd love to hear from you.
                        Our products are all fresh and healthy.
                    </p>
                    <p className="text-md text-gray-700 mt-1">© 2026 Fresh Basket. All rights reserved.</p>
                    
                </div>

                {/* Second Container: Company Links */}
                <div className='flex flex-col gap-y-4'>
                    <p className='text-3xl font-bold text-zinc-900'>Company</p>
                    <ul className='flex flex-col gap-y-2'>
                        <li><Link to='/aboutus' className='text-lg text-zinc-700 hover:text-orange-500 transition-colors'>About</Link></li>
                        <li><a className='text-lg text-zinc-700 hover:text-orange-500 transition-colors' href="#">FAQ's</a></li>
                        <li><a className='text-lg text-zinc-700 hover:text-orange-500 transition-colors' href="#">Careers</a></li>
                    </ul>
                </div>

                {/* Third Container: Support Links */}
                <div className='flex flex-col gap-y-4'>
                    <p className='text-3xl font-bold text-zinc-900'>Support</p>
                    <ul className='flex flex-col gap-y-2'>
                        <li><a className='text-lg text-zinc-700 hover:text-orange-500 transition-colors' href="#">Support Us</a></li>
                        <li><a className='text-lg text-zinc-700 hover:text-orange-500 transition-colors' href="#">Feedback</a></li>
                        <li><a className='text-lg text-zinc-700 hover:text-orange-500 transition-colors' href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Fourth Container: Newsletter */}
                <div className='flex flex-col gap-y-4'>
                    <p className='text-3xl font-bold text-zinc-700'>Stay Connected</p>
                    <div>
                        <p className='text-zinc-700 text-lg'>Question or feedback?</p>
                        <p className='text-zinc-700 text-lg'>We'd love to hear from you</p>
                    </div>

                    {/* Input Field */}
                    <div className='flex justify-between items-center border border-zinc-300 rounded-lg bg-white p-1 shadow-sm mt-2'>
                        <input
                            type="text"
                            placeholder='Email address'
                            className='w-full p-2 rounded-2xl focus:outline-none bg-white text-zinc-700'
                        />
                        <button className='w-10 h-10 flex shrink-0 justify-center items-center text-2xl text-white bg-amber-500 rounded-lg cursor-pointer hover:bg-amber-600 transition-colors'>
                            <MdAlternateEmail />
                        </button>
                    </div>

                </div>
                <div className="border-t border-gray-200 mt-10 py-6 text-center">
                <p className="text-gray-600 font-medium flex items-center justify-center gap-1">
                    Made with
                    <span className="text-red-500 animate-pulse text-lg">❤️</span>
                    by
                    <a
                        href="https://www.linkedin.com/in/bhabesh-prasad-89181122b/" // Yahan apna link daalo
                        target="_blank"
                        className="text-orange-600 font-bold hover:underline cursor-pointer"
                    >
                        Bhabesh Prasad
                    </a>
                </p>

            </div>

            </div>
           
        </footer>
    ) 
}

export default Footer