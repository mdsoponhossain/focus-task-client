import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const SignIn = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-content w-full md:w-[450px] ">
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center mt-10 font-serif ">Signup</h1>
                <div className='text-center mt-12 mx-auto'>

                    <SocialLogin ></SocialLogin>
                </div>
                <h1 className="text-center text-3xl mt-5 font-serif">Or</h1>
                
                <form className="card-body">
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                   
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default SignIn;