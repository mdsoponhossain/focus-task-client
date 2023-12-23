import { FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import  { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const {handlGoogleSignUp,} = useContext(AuthContext);
    const GoogleLogin = ()=>{
        handlGoogleSignUp()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your login successfully done",
                showConfirmButton: false,
                timer: 1500
              });
            navigation(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="flex gap-6">
            <span onClick={GoogleLogin} className="btn text-5xl text-green-500"> <FaGoogle></FaGoogle></span>
            <span className=" btn text-5xl text-blue-600"> <FaFacebook></FaFacebook></span>
            <span className="btn text-5xl"> <FaGithub></FaGithub></span>
        </div>
    );
};

export default SocialLogin;