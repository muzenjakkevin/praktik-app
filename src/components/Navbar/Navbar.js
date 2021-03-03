import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
      <Link to='/'>
          <li className='nav-links'>Home</li>
        </Link>
        <Link to='/news'>
          <li className='nav-links'>News</li>
        </Link>
        <Link to='/about'>
          <li className='nav-links'>About</li>
        </Link>
        <Link to='/contact'>
          <li className='nav-links'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
