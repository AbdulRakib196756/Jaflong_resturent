import React, { useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privetroute = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location =useLocation();

    if(loading){
        return <><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default Privetroute;