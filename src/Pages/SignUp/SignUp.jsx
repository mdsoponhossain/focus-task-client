import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const axiosPublic = useAxiosPublic();
    const { handleSignUp, handleUpdateUser } = useContext(AuthContext)

    const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
    console.log(img_hosting_key);


    const handleFormSubmit = async (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;

        const imageFile = { image: data.image[0] }
        console.log(imageFile)
        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        console.log('image hosting result data:', res.data.data.url);
        const userInfo = {
            displayName: data.name,
            photoURL: res.data.data.url
        }
        if (res.data.success) {
            handleSignUp(email, password)
                .then(result => {
                    console.log(result.user);
                    handleUpdateUser(userInfo)
                    .then(result=>{
                        console.log(result)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="hero-content w-full md:w-[500px] ">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-10 font-serif ">Signup</h1>
                    <div className='text-center mt-12 mx-auto'>

                        <SocialLogin ></SocialLogin>
                    </div>
                    <h1 className="text-center text-3xl mt-5 font-serif">Or</h1>

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body pt-0">
                        <div className="flex gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Choose Your Picture</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                            </div>
                        </div>
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
                            <button className="btn btn-secondary">Sign Up</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;