import { FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import  { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";

const SocialLogin = () => {

    const {handlGoogleSignUp,} = useContext(AuthContext);
    const GoogleLogin = ()=>{
        handlGoogleSignUp()
        .then(result=>{
            console.log(result.user)
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