import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserHome = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div>
            <h2>Welcome back, {user?.displayName
}</h2>
        </div>
    );
};

export default UserHome;