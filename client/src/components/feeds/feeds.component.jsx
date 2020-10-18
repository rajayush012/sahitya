import React,{useEffect,useState} from 'react'
import './feeds.styles.scss'
import FeedItem from '../feed-item/feed-item.component';



export default function Feeds(props) {
    const [page, setPage] = useState(1);
    const [feeds, setFeeds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(
          `http://localhost:8000/novels/all`,
          {
            method: "GET"
          }
        )
          .then(res => res.json())
          .then(response => {
            setFeeds(response);
            setIsLoading(false);
            //console.log(response)
          })
          .catch(error => console.log(error));
      }, [page]);
    
    
    const {currentUser} = props
    return (
        <div className='feeds'>
            
                {feeds.map(feed => (
                    <FeedItem key={feed._id} feed={feed}/>
                )
                )}
           
        </div>
    )
}
