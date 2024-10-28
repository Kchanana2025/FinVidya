import { SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/clerk-react"
import { NavLink } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react";

function NavBar() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <div className="navbar px-10 py-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {isSignedIn?<li><NavLink to="/dashboard">Dashboard</NavLink></li>:null}
      </ul>
    </div>
    <div className="flex justify-center">
    <a className="btn btn-ghost text-3xl lg:ml-32 md:ml-6">FinVidya</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
    <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {isSignedIn?<li><NavLink to="/dashboard">Dashboard</NavLink></li>:null}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="relative">
    <div className="absolute -inset-5">
        
    </div>
    <div>
      {isSignedIn ? <><UserButton showName={true} /></>:<><SignInButton mode="modal"  title="" forceRedirectUrl="/dashboard"
        className="relative z-10 inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-black transition-all duration-200 bg-white border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button" >
        Login
    </SignInButton></>}
    </div>
</div>
  </div>
</div>
    </>
  )
}

export default NavBar
