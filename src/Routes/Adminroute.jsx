import React, { useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const Adminroute = ({children}) => {
    const {user,loading}=useAuth();
    const location =useLocation();
    const [isAdmin,isAdminLoading]=useAdmin()

    if(loading || isAdminLoading){
        return <><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default Adminroute;