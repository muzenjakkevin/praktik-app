import React from 'react'
import ImageCarousel from '../../components/Carousel/ImageCarousel'
import InfoOne from '../../images/aventador-s.jpg'
import '../HomeScreen/HomeScreen.css'

function HomeScreen() {
  return (
    <>
      <ImageCarousel/>
      <div className="container">
        <div className="info-one">
          <img className="image-info-one" src={InfoOne}/>
          <div className="text-info-one">
            <p>
              Lamborghini created the Aventador SVJ to embrace challenges head-on, combining cutting-edge technology with extraordinary design, 
              while always refusing to compromise. In a future driven by technology, it’s easy to lose the genuine thrill of driving. 
              But in the future shaped by Lamborghini, 
              this won’t be left behind, because there will always be a driver behind the wheel. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
