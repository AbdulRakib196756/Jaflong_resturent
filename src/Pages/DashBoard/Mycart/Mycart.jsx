import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/Usecart';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Mycart = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handledelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://bistro-boss-server-abdulrakib196756.vercel.app/carts/${item._id}`,{
                method:'DELETE'
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success')
                }
             })
            }
          })
    }
    return (
        <div className='w-full' >
            <Helmet>
                <title>Bistro-Boss|mycart</title>


            </Helmet>
            <div className='flex justify-evenly font-semibold uppercase'>
                <h3 className='text-3xl'>total item ={cart.length}</h3>
                <h3 className='text-3xl'>$price={total}</h3>
                <Link to='/dashboard/payment' className='btn btn-warning btn-sm'>Pay</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>FOOD</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row ,index)=><tr key={row._id}>
                            <td>{index+1}</td>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                         
                                </div>
                            </td>
                            <td>
                              
                               {row.name}
                                
                            </td>
                            <td className='text-end'>$ {row.price}</td>
                            <td>
                                <button onClick={()=>handledelete(row)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                        }
                        
                        {/* row 2 */}
                       
                    </tbody>
                    {/* foot */}
                  

                </table>
            </div>
        </div>
    );
};

export default Mycart;