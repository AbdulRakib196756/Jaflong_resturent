import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Popularmenu from './Popularmenu/Popularmenu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
                <title>Bistro-Boss|Home</title>
               
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu/>
            <Featured></Featured>
            <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;