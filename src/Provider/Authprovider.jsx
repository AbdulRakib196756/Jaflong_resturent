import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios, { Axios } from 'axios';


export const Authcontext=createContext(null)

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser);
           console.log('currentUser',currentUser) 
           //get set token
         if(currentUser){
            axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            .then(data=>{
                console.log(data.data.token)
                localStorage.setItem('access-token',data.data.token)
                setLoading(false)
            })

         }
         else{
            localStorage.removeItem('access-token')
         }

           
          
        })
        return()=>{
            return unsubscribe();
        }
    },[])

    const createuser=(email,password)=>{

      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googlesignin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateuserprofile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
         })
        
    }
    const authinfo={
        user,
        loading,
        createuser,
        signin,
        logout,
        updateuserprofile,
        googlesignin
    }

    return (
        <Authcontext.Provider value={authinfo}>
              {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;