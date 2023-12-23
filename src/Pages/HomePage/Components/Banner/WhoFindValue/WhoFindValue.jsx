import { useEffect, useState } from "react";
import User from "../../User/User";
import AOS from 'aos';
import 'aos/dist/aos.css';



const WhoFindValue = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        fetch('./user.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [])
    return (
        <div data-aos="flip-left" className="my-48">
            <h1 className="mb-32 text-4xl font-serif font-bold text-center">Who Finds Value Here?</h1>
            <div className="grid md:grid-cols-2 lg:grid-col-3 lg:gap-3 mt-8 mx-auto lg:w-1/2">
                {
                    users.map((user, index) => <User key={index} user={user}></User>)
                }

            </div>
        </div>
    );
};

export default WhoFindValue;