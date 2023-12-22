import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {

  const { user, handleLogOut } = useContext(AuthContext);

  console.log(user)
  const logOutHandle = () => {
    handleLogOut()
      .then(() => { })
      .catch(() => { })
  }

  const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about-us'>About Us</NavLink></li>
    {
      user ? <>

        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </> :

        <> <li><NavLink to='/sign-up'>SignUp</NavLink></li>
          <li><NavLink to='/sign-in'>SignIn</NavLink></li></>
    }
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <a className="btn btn-ghost text-xl">FocusTask.com</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navItems
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1"><img className="w-12 h-12 rounded-3xl" src={user?.photoURL} alt="" /> </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={logOutHandle}>LogOut</button></li>
              <li><a>Item 2</a></li>
            </ul>
          </div> 
        }
      </div>
    </div>
  );
};

export default Navbar;