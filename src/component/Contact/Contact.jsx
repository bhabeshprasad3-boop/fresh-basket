import React, { useState } from 'react'
import Heading from '../Heading/Heading' 
import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane, FaLocationCrosshairs } from "react-icons/fa6";
import { ImSpinner8 } from "react-icons/im"; 

const Contact = () => {
  
  const defaultLocation = "https://maps.google.com/maps?q=Connaught+Place,New+Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed";
  const [mapUrl, setMapUrl] = useState(defaultLocation);
  
  // State for loading/errors
  const [locating, setLocating] = useState(false);

  // --- FEATURE: GET USER LOCATION ---
  const handleGetUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Construct new Map URL with User's Coordinates
        const newUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        setMapUrl(newUrl);
        setLocating(false);
      },
      (error) => {
        alert("Unable to retrieve your location. Please allow location access.");
        setLocating(false);
      }
    );
  };

  // --- FORM STATE ---
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    }, 2000);
  };

  return (
    <section className='w-full bg-zinc-50 overflow-hidden'>
      
      <div className='text-center pt-16 pb-10 px-4'>
        <Heading highlight="Get In" heading="Touch" />
        <p className='text-zinc-500 mt-4 max-w-2xl mx-auto'>
            Have a question? Fill out the form below or visit our store.
        </p>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-20'>
        <div className='bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row'>
            
            {/* LEFT SIDE: Contact Info & Map */}
            <div className='w-full md:w-5/12 bg-linear-to-br from-orange-500 to-orange-600 p-10 text-white flex flex-col justify-between relative overflow-hidden'>
                
                {/* Decorative Circles */}
                <div className='absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full'></div>
                <div className='absolute bottom-10 -left-10 w-20 h-20 bg-white opacity-10 rounded-full'></div>

                <div>
                    <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
                    <div className='space-y-6'>
                        <div className='flex items-start gap-4'>
                            <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className='font-bold text-lg'>Call Us</h4>
                                <p className='text-orange-100'>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
                                <FaLocationDot />
                            </div>
                            <div>
                                <h4 className='font-bold text-lg'>Location</h4>
                                <p className='text-orange-100'>123, Green Market, New Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MAP SECTION WITH USER LOCATION FEATURE --- */}
                <div className='mt-10'>
                    {/* Location Button */}
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-sm font-medium text-orange-100'>Find us on map</span>
                        <button 
                            onClick={handleGetUserLocation}
                            className='flex items-center gap-2 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors cursor-pointer shadow-sm'
                        >
                            {locating ? <ImSpinner8 className="animate-spin" /> : <FaLocationCrosshairs />} 
                            {locating ? "Locating..." : "Show My Location"}
                        </button>
                    </div>

                    {/* Dynamic Map Iframe */}
                    <div className='rounded-xl overflow-hidden h-48 w-full shadow-lg border-2 border-white/20 bg-gray-300'>
                        <iframe 
                            title="User Location Map"
                            src={mapUrl} 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>

            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div className='w-full md:w-7/12 p-10 md:p-14 bg-white'>
                {isSuccess ? (
                    <div className='h-full flex flex-col justify-center items-center text-center animate-fadeIn'>
                        <div className='w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6'>
                            <FaPaperPlane />
                        </div>
                        <h3 className='text-3xl font-bold text-zinc-800 mb-2'>Message Sent!</h3>
                        <button onClick={() => setIsSuccess(false)} className='bg-zinc-100 text-zinc-700 px-6 py-2 rounded-lg font-semibold mt-4'>Send Another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='text-sm font-semibold text-zinc-600'>Full Name</label>
                                <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" required placeholder="John Doe" className='w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none focus:border-orange-500' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-sm font-semibold text-zinc-600'>Phone</label>
                                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91..." className='w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none focus:border-orange-500' />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-semibold text-zinc-600'>Email</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="john@example.com" className='w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none focus:border-orange-500' />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-sm font-semibold text-zinc-600'>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Type here..." className='w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none focus:border-orange-500'></textarea>
                        </div>
                        <button disabled={isSubmitting} className='w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex justify-center items-center gap-2'>
                            {isSubmitting ? <ImSpinner8 className="animate-spin"/> : "Send Message"} <FaPaperPlane className='text-sm' />
                        </button>
                    </form>
                )}
            </div>

        </div>
      </div>
    </section>
  )
}

export default Contact