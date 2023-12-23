import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { handleSignIn } = useContext(AuthContext)
    //  navigate(location?.state ? location.state : '/')
    console.log(location)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        handleSignIn(data?.email, data?.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your login successfully done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="hero-content w-full md:w-[450px] ">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-10 font-serif ">Sign In</h1>
                    <div className='text-center mt-12 mx-auto'>

                        <SocialLogin ></SocialLogin>
                    </div>
                    <h1 className="text-center text-3xl mt-5 font-serif">Or</h1>

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <span>New here ? Please <Link className="text-xl font-bold ml-2 underline" to='/sign-up'>Sign Up</Link></span>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;