import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Layout = ({setQuery}) => {
    return (
        <div>
            <ScrollToTop />
            <Navbar setQuery={setQuery}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
