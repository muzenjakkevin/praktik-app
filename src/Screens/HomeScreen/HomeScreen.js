import React from 'react'
import ImageCarousel from '../../components/Carousel/ImageCarousel'
import TextLogo from '../../images/lamborghini-text-logo.png'

import '../HomeScreen/HomeScreen.css'

function HomeScreen() {
  return (
    <div>
      <ImageCarousel/>
      <div className="container">
        <div id="history-container">
          <img id="history-logo" src={TextLogo} alt="lamborghini"/>
          <p className="history-text">
            After World War II, Lamborghini founded a business making tractors from reconfigured surplus military machines, near Bologna, Italy.
            He later expanded into other ventures, including manufacturing air-conditioning and heating systems, and grew rich.
            <br/>
            <br/>
            Lamborghini’s success enabled him to purchase a variety of luxury sports cars, including a Ferrari, considered one of the top cars of the time. 
            After experiencing mechanical difficulties with his Ferrari, Lamborghini decided to start his own rival sports car company, even hiring a former top Ferrari engineer. 
            Automobili Lamborghini was officially established in 1963 in Sant’Agata Bolognese, Italy, and the same year debuted its first car, the Lamborghini 350 GTV, a two-seater coupe with a V12 engine.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
