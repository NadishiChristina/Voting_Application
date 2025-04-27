import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { PiSunLight } from "react-icons/pi";
import { TbMoon } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container nav_container">
      <Link to="/" className='nav_logo'>Vote</Link>
      <div>
        <menu>
          <NavLink to="/elections">Elections</NavLink>
          <NavLink to="/results">Results</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </menu>
        <button className="theme_toggle-btn"><TbMoon /></button>
        <button className="theme_toggle-btn"><HiMiniBars3BottomLeft /></button>
      </div>
    </div>
  )
}

export default Navbar