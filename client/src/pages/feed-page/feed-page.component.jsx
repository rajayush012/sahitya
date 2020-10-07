import React from 'react'
import Header from '../../components/header/header.component';
import Feeds from '../../components/feeds/feeds.component';

export default function FeedPage(props) {
    const {handlelogout, currentuser} = props
    return (
        <div className='feed-page' handleLogout={handlelogout} currentUser={currentuser}>
            <Header/>
            <Feeds/>
        </div>
    )
}
