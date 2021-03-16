import React from 'react'
import ImageCarousel from '../../components/Carousel/ImageCarousel'
import InfoOne from '../../images/aventador-s.jpg'
import InfoTwo from '../../images/perfomante.jpg'
import InfoThree from '../../images/aventador-svj.jpg'
import '../HomeScreen/HomeScreen.css'

function HomeScreen() {
  return (
    <div>
      <ImageCarousel/>
      <div className="container">
        <div className="info-one">
          <img className="image-info-one" src={InfoOne} alt="Lamborghini Aventador SV"/>
          <div className="text-info-one">
            <p>
              Lamborghini created the <b>Aventador SV</b> to embrace challenges head-on, combining cutting-edge technology with extraordinary design, 
              while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. 
              But in the future shaped by Lamborghini, 
              this won’t be left behind, because there will always be a driver behind the wheel. 
            </p>
          </div>
        </div>
        <div className="info-two">
          <img className="image-info-two" src={InfoTwo} alt="Lamborghini Huracan Performante"/>
          <div className="text-info-two">
            <p>
              The <b>Huracán Performante</b> has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.
              The vehicle has been re-engineered in its entirety, as regards its weight, engine power, chassis and above all by introducing an innovative system of active aerodynamics: ALA.
              <br/>
              <br/>
              The use of the awarded Forged Composites®, a shapable forged carbon fiber material patented by Automobili Lamborghini,
              is a real nice touch and it contributes to make the vehicle even lighter in weight. Besides its extraordinary technological properties,
              it also conveys a new idea of beauty.
            </p>
          </div>
        </div>
        <div className="info-three">
          <img className="image-info-three" src={InfoThree} alt="Lamborghini Aventador SVJ"/>
          <div className="text-info-three">
            <p>
              Lamborghini created the <b>Aventador SVJ</b> to embrace challenges head-on,
              combining cutting-edge technology with extraordinary design, while always refusing to compromise.
              In a future driven by technology, it’s easy to lose the genuine thrill of driving. But in the future shaped by Lamborghini,
              this won’t be left behind, because there will always be a driver behind the wheel. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
