import React, {useState} from 'react'
import './Navbar.css';
import {NavbarItems} from './NavbarItems';

function Navbar() {

  const [menuClick, setMenuClick] = useState(false)

  const handleClick = () => {
    setMenuClick(!menuClick)
  }

  return (
    <nav className='nav'>
      <div className="menu-icon" onClick={handleClick}>
        <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
        {NavbarItems.map((item, index) => {
          return (
          <li key={index}>
            <a className={item.className} href={item.url}>{item.title}</a>
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Navbar
