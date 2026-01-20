import React, { useEffect, useState, Suspense } from 'react' // 1. Suspense add kiya
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

// --- 2. LAZY IMPORTS (Saare normal imports hata kar ye lagaye) ---
const Home = React.lazy(() => import('./component/Home/Home'));
const Fruits = React.lazy(() => import('./component/Fruits/Fruits'));
const Meat = React.lazy(() => import('./component/Meat/Meat'));
const Dairy = React.lazy(() => import('./component/Dairy/Dairy'));
const Liked = React.lazy(() => import('./component/LikedIItem/Liked'));
const Cart = React.lazy(() => import('./component/CartItem/Cart'));
const AllProduct = React.lazy(() => import('./component/AllProduct/AllProduct'));
const Layout = React.lazy(() => import('./component/Layout/Layout'));
const AboutUs = React.lazy(() => import('./component/AboutUs.jsx/AboutUs'));
const HowItWorks = React.lazy(() => import('./component/HowItWorks/HowItWorks'));
const Contact = React.lazy(() => import('./component/Contact/Contact'));
const Register = React.lazy(() => import('./component/RegisterPage/Register'));
const Login = React.lazy(() => import('./component/LoginPage/Login'));
const ForgotPassword = React.lazy(() => import('./component/Forgot-Password/ForgotPassword'));
const ProductInfo = React.lazy(() => import('./component/ProductDetail/ProductDetail'));

const App = () => {

  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query)
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  // --- Loading Component (Jab page load ho raha ho tab ye dikhega) ---
  const Loading = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl font-bold text-orange-500">Loading...</div>
    </div>
  );

  return (
    <div>
      <Toaster />
      
      {/* 3. SUSPENSE WRAPPER (Routes ko iske andar daala) */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout setQuery={setQuery} />}>
            <Route index element={<Home query={query} />} />
            <Route path='/fruits' element={<Fruits />} />
            <Route path='/meat' element={<Meat />} />
            <Route path='/dairy' element={<Dairy />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/allproduct' element={<AllProduct query={debounceQuery} />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/how-it-work' element={<HowItWorks />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='forgotpassword' element={<ForgotPassword />} />

        </Routes>
      </Suspense>

    </div>
  )
}
export default App