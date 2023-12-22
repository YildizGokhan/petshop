import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../index.css"
import { MdOutlinePets } from "react-icons/md";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  
  return (
   <div className='navbars'>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white" to="/">
      <MdOutlinePets /><MdOutlinePets /><MdOutlinePets />
      <MdOutlinePets /><br />
      <MdOutlinePets /><MdOutlinePets /><MdOutlinePets /><MdOutlinePets />
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleMenu}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`collapse navbar-collapse ${hamburgerMenu ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/newproduct" className="nav-link" >
          | New Product |
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/productlist" className="nav-link" >
            Product List |
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
          About
          </NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   </div>
  );
}

export default Navbar