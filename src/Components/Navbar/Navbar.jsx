import React, { useState } from "react"; 
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative bg-[#004A99] dark:bg-gray-800/50 dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)} 
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                
                {!isOpen ? (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to={`/`}><h2 className="font-bold text-3xl text-[#E64A19]">Adnan Dev</h2></Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink to="/home" className={({ isActive }) => isActive ? "p-2 m-2 bg-green-500 text-black rounded" : "text-white p-2 m-2"}>Home</NavLink>
                  <NavLink to="/login" className={({ isActive }) => isActive ? "p-2 m-2 bg-green-500 text-black rounded" : "text-white p-2 m-2"}>Login</NavLink>
                  <NavLink to="/signup" className={({ isActive }) => isActive ? "p-2 m-2 bg-green-500 text-black rounded" : "text-white p-2 m-2"}>Singup</NavLink>
                  <NavLink to="/dashboard" className={({ isActive }) => isActive ? "p-2 m-2 bg-green-500 text-black rounded" : "text-white p-2 m-2"}>Dashboard</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden px-2 pt-2 pb-3 space-y-1 bg-[#004A99]`}>
          <NavLink to="/home" className="block text-white px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
          <NavLink to="/login" className="block text-white px-3 py-2 rounded-md text-base font-medium">Login</NavLink>
          <NavLink to="/signup" className="block text-white px-3 py-2 rounded-md text-base font-medium">SignUp</NavLink>
          <NavLink to="/dashboard" className="block text-white px-3 py-2 rounded-md text-base font-medium">Dashboard</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;