import React from 'react';

const Sectiontitle = ({heading,subheading}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-8'>
            <p className='text-yellow-400'>---{subheading}---</p>
            <h3 className='uppercase text-3xl border-y-4 py-4 '>{heading}</h3>
        </div>
    );
};

export default Sectiontitle;