import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logotype.png'
import './Logo.css';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Logo() {
  return (
    <>
      <LogoWrapper>
        {/* <LogoImage></LogoImage> */}
        <img className="nav-logo" src={logo} alt="Lamborghini"/>
      </LogoWrapper>
    </>
  )
}
