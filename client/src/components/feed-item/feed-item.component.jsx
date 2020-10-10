import React from 'react'

export default function FeedItem(props) {
    const {feed} = props
    return (
        <div className='feed-item'>
                
                    <h2> {feed.title}</h2>
        </div>
    )
}
