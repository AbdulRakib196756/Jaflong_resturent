import React from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import useMenu from '../../../Hooks/Usehooks';
import { FaNotesMedical, FaStickyNote, FaTextHeight, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiossecure';

const Manageitems = () => {
    const [menu, ,refetch] = useMenu()
    const [axiosSecure]=useAxiosSecure()
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
            if (result.isConfirmed) 
            {
              
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      refetch()

                }
                
            })
            }
          })

    }
    return (
        <div className='w-full'>
            <Sectiontitle heading="Manage ALL items" subheading={"hurry up"}
            ></Sectiontitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>ItemImage</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item,index) => <tr key={item._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <th>
                                    <button className="btn btn-ghost text-green-500 btn-xs"><FaStickyNote></FaStickyNote></button>
                                </th>
                                <td>
                                    <button onClick={()=>handledelete(item)} className='btn btn-warning text-white'><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Manageitems;