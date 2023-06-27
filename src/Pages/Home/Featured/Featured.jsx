import React from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className='featureditem pt-10 my-8 bg-fixed bg-cover '>
            <Sectiontitle subheading={'check it out'} heading={'featured item'}></Sectiontitle>
            <div className='md:flex justify-center items-center py-20 px-36 bg-slate-400 bg-opacity-50 bg-top-0 bg-bottom-0'>
                <div >
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10 text-white text-bold '>
                    <p>Aug20,2023</p>
                    <p className='uppercase'>Where i can get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum eius nemo suscipit consequatur reiciendis, magnam itaque perferendis facere aspernatur asperiores. Repellat nisi magnam explicabo deserunt in voluptas fugiat cumque est, quia culpa. Vel libero suscipit hic repudiandae fuga facere dolorem possimus nemo cumque illo harum, eos esse quaerat iusto rem!</p>
                    <button className='btn btn-outline border-0 border-b-4'>order now</button>
                </div>

            </div>
        </section>
    );
};

export default Featured;