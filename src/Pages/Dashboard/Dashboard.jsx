import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const navItems = <>
        <li><NavLink to='/dashboard/overview'>Dashboard Overview</NavLink></li>
        <li><NavLink to='/dashboard/to-dos'>To-Dos</NavLink></li>
        <li><NavLink to='/dashboard/on-going'>On Going</NavLink></li>
        <li><NavLink to='/dashboard/completed'>Completed</NavLink></li>
        <li><NavLink to='/'>Home</NavLink></li>

    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="md:flex h-[900px] border-4 gap-1">
                <div className="md:w-1/5 w-full hidden lg:flex  border-4">
                    <ul className="menu">
                        {navItems}
                    </ul>
                </div>

                <div className="flex justify-between md:hidden border-red-700">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl inline md:hidden">FocusTask.com</a>
                    <div className="grid justify-end w-[40%] border-4 mx-auto">
                        {
                            user && <img className="w-12 h-12 block  rounded-3xl" src={user?.photoURL} alt="" />
                        }
                    </div>
                </div>

                <div className="md:w-4/5 w-full border-4 p-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;