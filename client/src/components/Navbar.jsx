import React from 'react'
import { Link } from 'react-router-dom'

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
        <button className="theme_toggle-btn">
          
        </button>
      </div>
    </div>
  )
}

export default Navbar