
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';

import Menuitem from '../../Shared/Menuitem/Menuitem';
import useMenu from '../../../Hooks/Usehooks';


const Popularmenu = () => {
   
    const [menu]=useMenu()
    const popular=menu.filter(item=>item.category ==='popular')
    

    return (
        <section className='my-4'>
            <Sectiontitle
                heading={"from our menu"}
                subheading={"Popular menu"}
            ></Sectiontitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <div className=' flex justify-center my-3'>
                <button className='btn btn-outline border-0 border-b-4'>view all menu</button>
            </div>
        </section>
    );
};

export default Popularmenu;