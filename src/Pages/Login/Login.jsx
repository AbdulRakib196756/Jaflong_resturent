import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Authcontext } from '../../Provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [disable,setDisable]=useState(true)
    
    const {signin,googlesignin}=useContext(Authcontext)

    const navigate=useNavigate();
    const location=useLocation()
    
    const from =location.state?.from?.pathname || '/'
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const captcharef=useRef(null)
    const handlelogin=(event)=>{
      
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signin(email,password)
        .then(result=>{
            const user=result.user;
            Swal.fire({
                title: 'Login successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from,{replace:true})
        })
    }
   const   handlegooglelogin=()=>{
           googlesignin()
           .then(result=>{
            const loogeduser=result.user;
            const saveduser={name:loogeduser.displayName,email:loogeduser.email}
            fetch('https://bistro-boss-server-abdulrakib196756.vercel.app/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'

                            },
                            body:JSON.stringify(saveduser)
                        })
                        .then(res=>res.json())
                        .then(()=>{
                            navigate(from,{replace:true})
                        })
                       
            
           })
   }
    const validatecaptcha=(e)=>{
         const user_captcha_value=e.target.value
          if (validateCaptcha(user_captcha_value)==true) {
            setDisable(false)
        }
   
        else {
           setDisable(true)
        }
    }
    return (
       <>
       <Helmet>
                <title>Bistro-Boss|Login</title>

            </Helmet>
       
       <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={validatecaptcha}  ref={captcharef} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" />
                           
                        </div>
                       
                       
                        <div className="form-control mt-6">
                        <input disabled={false} className='btn btn-primary' type="submit" value="Login" />
                        <div className='divider'> </div>
                          <button onClick={handlegooglelogin} className='btn btn-outline btn-circle mt-5 '><FaGoogle></FaGoogle></button>
                        </div>
                        <p><small>New here <Link className='text-orange-400' to='/signup'>Register first</Link></small></p>
                    </form>
                   
                </div>
            </div>
        </div>
       </>
    );
};

export default Login;