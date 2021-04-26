import React from 'react'
import styled from 'styled-components'
import logo from '../../../images/logotype.png'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 12%;
  margin-left: 4em;
  img{
      width: 100%;
  }
`;

export default function Logo() {
  return (
    <>
      <LogoWrapper>
        <LogoImage><img src={logo} alt="Lamborghini"/></LogoImage>
      </LogoWrapper>
    </>
  )
}
