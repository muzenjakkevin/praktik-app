import React from 'react'

import HistoryImage from '../../images/lamborghini-founder.jpg'
import EmbedVideo from '../../components/Video/EmbedVideo'
import {ReactTitle} from 'react-meta-tags';

import './AboutScreen.css'

function AboutScreen() {
  return (
    <div>
      <ReactTitle title='Lamborghini | About'/>
      <EmbedVideo embedId="P9RgHiqD5ZQ"/>
      <div className="text-container">
        <p id="slogan">"We are not supercars. We are Lamborghini"</p>
      </div>
      <img id="founder-image" src={HistoryImage} alt="The Founder, Ferruccio Lamborghini"/>
      <div className="what-and-history-container">
        <h4 className="what-we-do">What we do</h4>
        <p className="what-we-do">
          Ducati Motor Holding S.p.A. Automobili Lamborghini S.p.A. is an Italian brand and manufacturer
          <br/>
          of luxury sports cars and SUVs based in Sant'Agata Bolognese.
          The company is owned by the Volkswagen Group through its subsidiary Audi.
        </p>
        <h4 className="history">History</h4>
        <p className="history">
          After World War II, Lamborghini founded a business making tractors from reconfigured surplus military machines, near Bologna, Italy.
          <br/>
          <br/>
          He later expanded into other ventures, including manufacturing air-conditioning and heating systems, and grew rich. <br/>
          Lamborghini’s success enabled him to purchase a variety of luxury sports cars, including a Ferrari, considered one of the top cars of the time.<br/>
          After experiencing mechanical difficulties with his Ferrari, Lamborghini decided to start his own rival sports car company,
          even hiring a former top Ferrari engineer.
          Automobili Lamborghini was officially established in 1963 in Sant’Agata Bolognese, Italy,
          and the same year debuted its first car,
          the Lamborghini 350 GTV, a two-seater coupe with a V12 engine.
        </p>
      </div>
    </div>
  )
}

export default AboutScreen