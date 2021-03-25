import React, {useState, useEffect} from 'react'
import ContactImage from '../../images/contact-test.jpg'
import './ContactScreen.css'

function ContactScreen() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          result = result.slice(0, 5)
          setIsLoaded(true)
          setItems(result)
          console.log(result)
        },
        (error) => {
          setIsLoaded(false)
          setError(error)
          console.log(error)
        }
      )
  }, [])

  if(error){
    return (<div>Error: {error.message}</div>)
  } else if (!isLoaded){
    return (<div>Is loading...</div>)
  } else {
    return (
      <div className="container-contact">
        {items.map(item => (
          <div className="corporates-container" key={item.id}>
            <img className="contact-image" src={ContactImage} alt=''/>
            <ul className="corporates">
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.phone}</li>
              <li>{item.company.bs}</li>
            </ul>
            
          </div>
        ))}
      </div>
    )
  }
}

export default ContactScreen
