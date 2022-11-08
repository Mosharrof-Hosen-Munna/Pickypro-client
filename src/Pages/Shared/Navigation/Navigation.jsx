import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="   font-semibold shadow-md shadow-slate-300 bg-white sticky top-0 z-50">
      <div className="navbar py-4 container mx-auto ">
        <div className="flex justify-between w-full">
          <div className="flex">
            <a className="btn btn-ghost normal-case text-4xl">PICKY<span className="text-purple-700">PRO</span></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 text-lg text-purple-800">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Services</Link>
              </li>
              <li>
                <Link to="/home">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-lg">
                <Link to='/login' className="bg-primary py-3 px-6 mx-2 rounded-full text-white">Login</Link>
                <Link to='/register' className="bg-purple-700 py-3 px-6 mx-2 rounded-full text-white">Signup</Link>
            </div>
          <div className="avatar ml-4">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
