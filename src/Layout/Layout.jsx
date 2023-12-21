import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto border-4">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Layout;