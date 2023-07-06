import React from 'react';
import { FaCalendar, FaHamburger, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/Usecart';
import { FaUtensils } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()
    // const isadmin = true;
    const [isadmin]=useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content space-y-3">
                        {
                            isadmin ? <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/additem' ><FaUtensils></FaUtensils>Add Item </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/manageitems' ><FaHamburger></FaHamburger>manage item</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaBook></FaBook>manage booking</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>Allusers</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart' ><FaShoppingCart></FaShoppingCart>my cart <div className="badge badge-secondary">+{cart?.length || 0}</div> </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/pymenthistory' ><FaWallet></FaWallet>Pyment</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>reservation</NavLink></li>



                            </>
                        }
                        <div className='divider'></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/menu'><FaHamburger></FaHamburger>menu</NavLink></li>
                        <li><NavLink to='/order'>Order food </NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;