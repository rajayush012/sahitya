import React from 'react'
import Header from '../../components/header/header.component';
import Feeds from '../../components/feeds/feeds.component';

export default function FeedPage(props) {
    
    const {handleLogout, currentUser} = props
    return (
        <div className='feed-page'>
            <Header/>
            <Feeds handleLogout={handleLogout} currentUser={currentUser}/>
        </div>
    )
}
