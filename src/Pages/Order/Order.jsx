import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import orderbanner from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/Usehooks';
import Foodcart from '../../Component/Foodcart/Foodcart';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories=['salad','soup','dessert','pizza','drinks']
    const {category}=useParams()
    const initalindex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalindex);
   
  
    const [menu]=useMenu();
    const desserts=menu.filter(data=>data.category === 'dessert')
    const soup=menu.filter(data=>data.category === 'soup')
    const salad=menu.filter(data=>data.category === 'salad')
    const pizza=menu.filter(data=>data.category === 'pizza')
    const drinks=menu.filter(data=>data.category === 'drinks')
   
    return (
        <div>
            
            <Cover img={orderbanner} title={'Your Order'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>
                <TabPanel> <div className='grid grid-cols-3 gap-10'>
                {
                    salad.map(data=><Foodcart item={data} key={data._id}></Foodcart>)
                    
                    }</div></TabPanel>
                <TabPanel><div className='grid grid-cols-3 gap-10'>
                {
                    soup.map(data=><Foodcart item={data} key={data._id}></Foodcart>)
                    
                    }</div></TabPanel>
                <TabPanel><div className='grid grid-cols-3 gap-10'>
                {
                    desserts.map(data=><Foodcart item={data} key={data._id}></Foodcart>)
                    
                    }</div></TabPanel>
                <TabPanel><div className='grid grid-cols-3 gap-10'>
                {
                    pizza.map(data=><Foodcart item={data} key={data._id}></Foodcart>)
                    
                    }</div></TabPanel>
                <TabPanel><div className='grid grid-cols-3 gap-10'>
                {
                    drinks.map(data=><Foodcart item={data} key={data._id}></Foodcart>)
                    
                    }</div></TabPanel>
            </Tabs>
            
        </div>
    );
};

export default Order;