import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Fruits from './component/Fruits/Fruits'
import Meat from './component/Meat/Meat'
import Dairy from './component/Dairy/Dairy'
import Liked from './component/LikedIItem/Liked'
import Cart from './component/CartItem/Cart'
import AllProduct from './component/AllProduct/AllProduct'
import Layout from './component/Layout/Layout'
import AboutUs from './component/AboutUs.jsx/AboutUs'
import HowItWorks from './component/HowItWorks/HowItWorks'
import Contact from './component/Contact/Contact'
import Register from './component/RegisterPage/Register'
import Login from './component/LoginPage/Login'
import { Toaster } from 'react-hot-toast';
import ForgotPassword from './component/Forgot-Password/ForgotPassword'




const App = () => {

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

   useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounceQuery(query)
    }, 500);

    return()=>{
      clearTimeout(timer)
    }
   },[query])

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Layout setQuery={setQuery}/>}>
          <Route index element={<Home query={query} />} />
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/meat' element={<Meat />} />
          <Route path='/dairy' element={<Dairy />} />
          <Route path='/liked' element={<Liked />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allproduct' element={<AllProduct query={debounceQuery} />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/how-it-work' element={<HowItWorks />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        
      </Routes>


    </div>
  )
}
export default App
