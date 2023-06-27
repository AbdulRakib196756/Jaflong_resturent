import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"

// import required modules
import { FreeMode, Pagination } from "swiper";
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';

const Category = () => {

    return (
        <section>
            <Sectiontitle
            subheading={'from 11:00am to 10:00'}
            heading={'Order online'}
            
            >

            </Sectiontitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-center uppercase text-white shadow -mt-16 text-3xl'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-center uppercase text-white shadow -mt-16 text-3xl'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-center uppercase text-white shadow -mt-16 text-3xl'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-center uppercase text-white shadow -mt-16 text-3xl'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-center uppercase text-white shadow -mt-16 text-3xl'>salad</h3>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Category;