import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const navItems = <>
        <li><NavLink to='/dashboard/overview'>Dashboard Overview</NavLink></li>
        <li><NavLink to='/dashboard/to-dos'>To-Dos</NavLink></li>
        <li><NavLink to='/dashboard/on-going'>On Going</NavLink></li>
        <li><NavLink to='/dashboard/completed'>Completed</NavLink></li>

    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex h-[900px] border-4 gap-1">
                <div className="w-1/4 border-4">
                    <ul className="menu">
                        {navItems}
                    </ul>
                </div>

                <div className="w-3/4 border-4 p-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;