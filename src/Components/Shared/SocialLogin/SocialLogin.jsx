import { FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="flex gap-6">
            <span className="text-5xl text-green-500"> <FaGoogle></FaGoogle></span>
            <span className="text-5xl text-blue-600"> <FaFacebook></FaFacebook></span>
            <span className="text-5xl"> <FaGithub></FaGithub></span>
        </div>
    );
};

export default SocialLogin;