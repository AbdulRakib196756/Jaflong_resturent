import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menubanner from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/Usehooks';
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
import Menucategory from './Menucategory/Menucategory';
import dessertsbanner from './../../assets/menu/dessert-bg.jpeg'
import pizzabanner from './../../assets/menu/pizza-bg.jpg'
import saladbanner from './../../assets/menu/salad-bg.jpg'
import soupbanner from './../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu]=useMenu();
    const desserts=menu.filter(data=>data.category === 'dessert')
    const soup=menu.filter(data=>data.category === 'soup')
    const salad=menu.filter(data=>data.category === 'salad')
    const pizza=menu.filter(data=>data.category === 'pizza')
    const offered=menu.filter(data=>data.category === 'offered')
   
    
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss|menu</title>
               
            </Helmet>
            <Cover img={menubanner}title={'our menu'}></Cover>
            <Sectiontitle subheading="Don't Miss" heading="Today's Offer"
            ></Sectiontitle>
            {/* offered  */}
            <Menucategory items={offered}></Menucategory>
            {/* desserts */}
            <Menucategory items={desserts} title={'dessert'} img={dessertsbanner}></Menucategory>
            <Menucategory items={pizza} title={'pizza'} img={pizzabanner}></Menucategory>
            <Menucategory items={salad} title={'salad'} img={saladbanner}></Menucategory>
            <Menucategory items={soup} title={'soup'} img={soupbanner}></Menucategory>
        </div>
    );
};

export default Menu;