import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ArticleImage from '../../images/Drömbil.jpg'
import './Articles.css'

function Articles() {
  
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true)
  const [isFetching, setIsFetching] = useState(false);
  

  useEffect(() => {
    loadMoreItems()
  }, [])

  const loadMoreItems = () => {
    setIsFetching(true)

    axios({
      method: 'GET',
      url: 'http://localhost:4000/articles',
      params: {_page: page, _limit: 2}
    })
    .then((res) => {
      setItems((prevArticles) => {
        return [...new Set([...prevArticles, ...res.data.map((article) => article)])]
      })
      setPage((prevPageNumber) => prevPageNumber + 1)
      setHasMore(res.data.length > 0)
      setIsFetching(false)
      console.log(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

    return (
      <div>
        {items.map((item, index) => {
          if(items.length === index + 1) {
            return (
              <div key={index} className="article-container" >
                <div className="article">
                  <img className="article-image" src={ArticleImage} alt=""/>
                  <ul className="aticle-items">
                    <h5>{item.articles.title}</h5>
                    <li>{item.articles.text} - <b>last</b></li>
                  </ul>
                </div>
              </div>
            )
          } else {
            return (
              <div key={index} className="article-container" >
                <div className="article" >
                  <img className="article-image" src={ArticleImage} alt=""/>
                  <ul className="aticle-items">
                    <h5>{item.articles.title}</h5>
                    <li>{item.articles.text}</li>
                  </ul>
                </div>
              </div>
            )
          }
        })}
        {isFetching && <div className="error-container">
          <h4 id="error-text">Trying to fetch articles</h4>
        </div>}
        {!isFetching && hasMore && (
          <button onClick={loadMoreItems}>Load more</button>
        )}
        
      </div>
    )
}

export default Articles
