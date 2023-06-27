import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Allusers = () => {
    const [axiosSecure]=useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')

        return res.data;
    })
    const handledelete=()=>{

    }

    const handlemakeadmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='w-full'>
            <h3 className='text-3xl font-bold uppercase '>total users:{users.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user.role=='admin'?'admin': <button onClick={()=>handlemakeadmin(user)} className="btn btn-ghost text-white bg-orange-500"><FaUserShield></FaUserShield></button>
                            }
                               </td> 
                            <td>
                                <button onClick={()=>handledelete(user)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;