import React from 'react';
import Menuitem from '../../Shared/Menuitem/Menuitem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const Menucategory = ({items,img,title}) => {
    return (
        <div className='my-10'>
             {title && <Cover title={title} img={img}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-6'>
                {
                    items.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
           <Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 '>order now</button></Link>
        </div>
    );
};

export default Menucategory;