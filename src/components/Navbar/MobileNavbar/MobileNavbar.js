import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import { MenuToggle } from './MenuToggle';
import './MobileNavbar.css';

const MobileNavbarContainer = styled.div`
  background-color: #3b4250;
  position: sticky;
  width: 100%;
  height: 11em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.3);
  @media only screen and (min-device-width: 375px) and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 3) { 
    height: 5em;
  }
`;

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex; 
  align-items: center;
`;

const LinksWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavbarLeftSection = styled.div`
  display: flex;
`;

const NavbarRightSection = styled.div`
  display: flex;
`;

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileNavbarContainer>
        <NavbarLeftSection>
          <Logo/>
        </NavbarLeftSection>
        <NavbarRightSection>
          <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            {isOpen && (
            <LinksWrapper>
              <ul className='mobile-nav-menu'>
                <Link onClick={() => setIsOpen(!isOpen)} className="mobile-nav-links" to='/'>
                  <li>Home</li>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} className="mobile-nav-links" to='/about'>
                  <li>About</li>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} className="mobile-nav-links" to='/news'>
                  <li>News</li>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} className="mobile-nav-links" to='/contact'>
                  <li>Contact</li>
                </Link>
              </ul>
            </LinksWrapper>
            )}
          </NavLinksContainer>
        </NavbarRightSection>
      </MobileNavbarContainer>
    </>
  )
}

export default MobileNavbar