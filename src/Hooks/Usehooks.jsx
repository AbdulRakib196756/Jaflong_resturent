import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useMenu=()=>{
   

    const {data:menu=[],isloading:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res =await fetch('https://bistro-boss-server-abdulrakib196756.vercel.app/menu');
            return res.json();
        }
    })
    return [menu,loading,refetch] ;
}


export default useMenu;