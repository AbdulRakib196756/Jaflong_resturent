import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";


import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <Sectiontitle
                subheading={"what our clint say"}
                heading={"Testimonials"}></Sectiontitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-9/12">

                {
                    review.map(data => <SwiperSlide key={data._id}>
                        <div className='my-8 mx-10 flex flex-col items-center space-y-5'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={data.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='h-24 w-24'></FaQuoteLeft>
                            <p>{data.details}</p>
                            <h3 className='text-3xl text-orange-400' >{data.name}</h3 >
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;