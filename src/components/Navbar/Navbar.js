import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
      <Link className="nav-links" to='/'>
          <li>Home</li>
        </Link>
        <Link className="nav-links" to='/news'>
          <li>News</li>
        </Link>
        <Link className="nav-links" to='/about'>
          <li>About</li>
        </Link>
        <Link className="nav-links" to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar