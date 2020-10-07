import React from 'react'
import './feeds.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

export default function Feeds(props) {
    
    const {handleLogout, currentUser} = props
    return (
        <div className='feeds'>
            Feeds
            <CustomButton onClick={handleLogout} >LogOut</CustomButton>
        </div>
    )
}
