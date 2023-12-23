import { Link } from "react-router-dom";
import Button from "../../../../Components/Shared/Button/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="flip-right" className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/tPQnDrX/banner-1091427.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">FocusTask.com</h1>
                    <p className="mb-5">"Unlock Your Productivity Potential: Elevate Your Task Management Game!"</p>
                   <Link to='/dashboard/overview'><Button text="Let's Explore"></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;