import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstPageImage from '../../images/aventador-s.jpg';
import SecondPageImage from '../../images/perfomante.jpg';
import ThirdPageImage from '../../images/aventador-svj.jpg';
import ForthPageImage from '../../images/lamborghini-urus.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function ImageCarousel() {
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className='d-block w-100' src={FirstPageImage} alt='First Slide'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={SecondPageImage} alt='Second Slide'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={ThirdPageImage} alt='Third Slide'/>  
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={ForthPageImage} alt='Third Slide'/>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
