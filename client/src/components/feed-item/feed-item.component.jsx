import React from 'react'
import './feed-item.styles.scss'
import {useHistory} from 'react-router-dom';


export default function FeedItem(props) {
    const {feed} = props
    const history = useHistory()
    return (
        <div onClick={()=>{console.log('hello');history.push(`/novels/${feed._id}`)}} className='feed-item'>
            <div>{feed.title}</div>
            <div className='sub'>
                <div className='author'>{feed.mainauthor.name}</div>
                <div className='genre'>Genre - {feed.genre}</div>
            </div>
            <div className='idea'>Idea - {feed.idea}</div>
            
        </div>
    )
}
