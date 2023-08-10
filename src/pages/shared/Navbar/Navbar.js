import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/properties">Properties</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contacts</Link></li>
    </React.Fragment>
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link className=" normal-case text-xl "><img src={logo} alt="" className='h-20 w-40'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-md uppercase">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link>
  </div>
</div>
    );
};

export default Navbar;