import React, { useContext } from 'react';
import { Authcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/Usecart';

const Foodcart = ({item}) => {
    
    const navigate=useNavigate()
    const {user}=useContext(Authcontext)
    const [,refetch]=useCart()
    const {name,price,image,recipe,_id}=item
    const location =useLocation();
    const handleaddtocart=(item)=>{
             console.log(item)
             if(user && user.email){
                const cartItem={menuId:_id ,name,image,price,email:user.email}
                 fetch("https://bistro-boss-server-abdulrakib196756.vercel.app/carts",{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(cartItem)
                 })
                 .then(res=>res.json())
                 .then(data=>{
                    if(data.insertedId){
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'cart has saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                 })
             }
             else{
                Swal.fire({
                    title: 'Log in first!',
                   
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'login!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                     navigate('/login',{state:{from:location}})
                    }
                  })
             }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white w-12 p-2 absolute mt-5 right-0 me-5'>${price}</p>
            <div className="card-body">
                
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleaddtocart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcart;