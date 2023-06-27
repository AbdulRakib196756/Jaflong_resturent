import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location=useLocation()

    const noheaderfooter=location.pathname.includes('/login')||location.pathname.includes('/signup')
    return (
        <div>
            {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter ||<Footer/>}
        </div>
    );
};

export default Main;