import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';




const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createuser, updateuserprofile } = useContext(Authcontext)
    const navigate =useNavigate()

    const onSubmit = data => {
        console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
              
               
                updateuserprofile(data.name,data.url)
                    .then(() => {
                        const saveduser={name:data.name,email:data.email}
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'

                            },
                            body:JSON.stringify(saveduser)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                             if(data.insertedId){
                                reset()
                             }
                        })



                      
                  
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'signup successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
            <Helmet>
                <title>Bistro-Boss|signup</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SIgnUp</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <span className='text-orange-500'>This field is required</span>}
                            </div>
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="url" placeholder="url" {...register("url", { required: true })} name='url' className="input input-bordered" />
                                {errors.url && <span className='text-orange-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                            </div> {errors.email && <span className='text-orange-500'>This field is required</span>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <span className='text-orange-500'>must be 6 digit</span>}
                                {errors.password?.type === 'required' && <span className='text-orange-500'>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="SIgnUP" className="btn btn-primary" />
                                
                                
                            </div>
                            <p><small>Already have an accout <Link className='text-orange' to='/login'>login</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;