import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './logo/Logo';
import './Navbar.css';

const NavbarContainer = styled.div`
  background-color: #3b4250;
  position: sticky;
  width: 100%;
  height: 11em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
`;

const NavbarLeftSection = styled.div`
  display: flex;
`;

const NavbarRightSection = styled.div`
  display: flex;
`;

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarLeftSection>
          <Logo/>
        </NavbarLeftSection>
        <NavbarRightSection>
          <ul className='nav-menu'>
            <Link className="nav-links" to='/'>
              <li>Home</li>
            </Link>
            <Link className="nav-links" to='/about'>
              <li>About</li>
            </Link>
            <Link className="nav-links" to='/news'>
              <li>News</li>
            </Link>
            <Link className="nav-links" to='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </NavbarRightSection>
      </NavbarContainer>
    </>
  )
}

export default Navbar