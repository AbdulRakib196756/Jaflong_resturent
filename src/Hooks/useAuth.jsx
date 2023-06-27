import { useContext } from "react"
import { Authcontext } from "../Provider/Authprovider";


const useAuth = () => {
    const auth = useContext(Authcontext);
    return auth;
}

export default useAuth;