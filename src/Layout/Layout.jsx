import React from 'react'
import backgroundImage from "../assets/tedx_bg.jpg"
import { Outlet } from 'react-router-dom'
import { NavbarWithMegaMenu } from '../Components/Events/Navbar';
import { FooterWithSocialLinks } from '../Components/Footer';

function Layout() {
    return (
        <div className=' bg-black bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <NavbarWithMegaMenu/>
        <Outlet/>
        <FooterWithSocialLinks/>
        </div>
    )
}

export default Layout