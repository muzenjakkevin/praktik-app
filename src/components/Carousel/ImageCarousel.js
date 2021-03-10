import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstPageImage from '../../images/laptop-first-page.jpg';
import SecondPageImage from '../../images/second-page-image.jpeg';
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
          <Carousel.Caption>John Doe Workstation</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={SecondPageImage} alt='Second Slide'/>
          <Carousel.Caption>Jane Doe LLC</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageCarousel
