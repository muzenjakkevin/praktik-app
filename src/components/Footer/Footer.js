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
      <img id="footer-logo" src={logotype} alt="Lamborghini Logo"/>
    </div>
  )
}

export default Footer
