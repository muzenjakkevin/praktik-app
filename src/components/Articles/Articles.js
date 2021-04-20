import React, {useState, useEffect} from 'react'
import ArticleImage from '../../images/Drömbil.jpg'
import './Articles.css'

function Articles() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/articles')
      .then(res => res.json())
      .then(
        (result) => {
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

    return (
      <div>
        {isLoaded ?
          <div className="article-container">
            {items.map((item, index) => (
              <div className="article" key={index}>
                <img className="article-image" src={ArticleImage} alt=""/>
                <ul className="aticle-items">
                  <h5>{item.articles.title}</h5>
                  <li>{item.articles.text}</li>
                </ul>
              </div>
            ))}
          </div>
        
        : 
        <div className="error-container">
          <h4 id="error-text">There was an error trying to fetch the news</h4>
        </div>
        }
      </div>
    )
}

export default Articles
