import React from 'react'
import logotype from '../../images/logotype.png'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-ul">
        <li className="footer-li">Phone: 0709240227</li>
        <li className="footer-li">E-Mail: muzenjak57@gmail.com</li>
        <li className="footer-li">Based: Lamborghini Automobili S.P.A Gate 5</li>
      </ul>
      <div className="map-container">
        {/* <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcnww0Xunqzwi3372iTqu-jiV7_ILBhrQ`} 
          loadingElement={<div style={{height: '80%'}}/>}
          containerElement={<div style={{height: '100%'}}/>}
          mapElement={<div style={{height: '100%'}}/>}
        /> */}
      </div>
      <img id="footer-logo" src={logotype} alt="Lamborghini Logo"/>
    </div>
  )
}

export default Footer
