import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstPageImage from '../../images/aventador-s.jpg';
import SecondPageImage from '../../images/perfomante.jpg';
import ThirdPageImage from '../../images/aventador-svj.jpg';
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
          <Carousel.Caption>Lamborghini Aventador SV</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={SecondPageImage} alt='Second Slide'/>
          <Carousel.Caption>Lamborghini Huracan Perfomante</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={ThirdPageImage} alt='Third Slide'/>
          <Carousel.Caption>Lamborghini Aventador SVJ</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
