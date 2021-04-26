import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import logo from '../../../images/logotype.png'
import { DeviceSize } from '../responsive';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// const LogoImage = styled.div`
//   width: 12%;
//   margin-left: 4em;
//   img{
//       width: 100%;
//   }
// `;

export default function Logo() {
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet})
  return (
    <>
      <LogoWrapper>
        {/* <LogoImage></LogoImage> */}
        {isTablet ? 
          <img style={{width: '25%', margin: '0 2em'}} src={logo} alt="Lamborghini"/> 
          : 
          <img style={{width: '12%', margin: '0 2em'}} src={logo} alt="Lamborghini"/>
          }
      </LogoWrapper>
    </>
  )
}
