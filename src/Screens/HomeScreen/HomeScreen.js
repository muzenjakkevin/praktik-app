import React from 'react'
import ImageCarousel from '../../components/Carousel/ImageCarousel'

import TextLogo from '../../images/lamborghini-text-logo.png'
import Founder from '../../images/lamborghini-founder.jpg'
import aventador from '../../images/what-we-do.jpg'

import '../HomeScreen/HomeScreen.css'

function HomeScreen() {
  return (
    <div>
      <ImageCarousel/>
      
      <div className="container">
        <div id="history-container">
          <img id="homescreen-logo" src={TextLogo} alt="lamborghini"/>
          <img id="founder" src={Founder} alt="Ferruccio Lamborghini"/>
          <div id="container-text">
            <h3 className="history-title">History</h3>
            <p className="history-text">
              After World War II, Lamborghini founded a business making tractors from reconfigured surplus military machines, near Bologna, Italy.
              He later expanded into other ventures, including manufacturing air-conditioning and heating systems, and grew rich.
              <br/>
              <br/>
              Lamborghini’s success enabled him to purchase a variety of luxury sports cars, including a Ferrari, considered one of the top cars of the time. 
              After experiencing mechanical difficulties with his Ferrari, Lamborghini decided to start his own rival sports car company, even hiring a former top 
              Ferrari engineer. 
              Automobili Lamborghini was officially established in 1963 in Sant’Agata Bolognese, Italy, and the same year debuted its first car, 
              the Lamborghini 350 GTV, a two-seater coupe with a V12 engine.
            </p>
          </div>
        </div>
        
        <div id="information-container">
          <img id="information-image" src={aventador} alt="Lamborghini Aventador"/>
          <div id="what-we-do">
            <h3 className="history-title">What we do</h3>
            <p className="history-text">
              Ducati Motor Holding S.p.A. Automobili Lamborghini S.p.A. is an ItaIlian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
              The company is owned by the Volkswagen Group through its subsidiary Audi.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomeScreen
