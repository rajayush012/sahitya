import React from 'react'
import './feed-item.styles.scss'

export default function FeedItem(props) {
    const {feed} = props
    return (
        <div className='feed-item'>
            <div>{feed.title}</div>
            <div className='sub'>
                <div className='author'>{feed.mainauthor.name}</div>
                <div className='genre'>Genre - {feed.genre}</div>
            </div>
            <div className='idea'>Idea - {feed.idea}</div>
            
        </div>
    )
}
