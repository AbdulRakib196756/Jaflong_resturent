import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Provider/Authprovider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/Usecart';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    const [cart]=useCart()
    const handlelogout = () => {
        logout()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    const navoption = <>
        <li >
            <Link to='/'>
                Home

            </Link>

        </li>
        <li><Link to='/menu'>menu</Link> </li>

        <li><Link to='/order/salad'>Order</Link></li>

        <li><Link to='/signup'>signup</Link></li>
        <li><Link to="/dashboard/mycart"><button className="btn">
            <FaShoppingCart className='me-2'></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length||0}</div>
        </button></Link></li>
        {
            user ? <><button onClick={handlelogout} className='btn btn-ghost'>logout</button><li>{user?.displayName}</li></> : <> <li><Link to='/login'>login</Link></li></>
        }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navoption}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navoption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;