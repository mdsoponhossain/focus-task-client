import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)
    if(loading){
        return ;
    }
    if(user){
        return children ;
    }
    return <Navigate to='/sign-in' state={location.pathname}></Navigate>
};

export default PrivateRoutes;