import Button from "../../../../Components/Shared/Button/Button";

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/tPQnDrX/banner-1091427.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">FocusTask.com</h1>
                    <p className="mb-5">"Unlock Your Productivity Potential: Elevate Your Task Management Game!"</p>
                   <Button text="Let's Explore"></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;