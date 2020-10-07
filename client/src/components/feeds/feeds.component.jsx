import React from 'react'
import './feeds.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

export default function Feeds(props) {
    const {handlelogout, currentuser} = props
    return (
        <div className='feeds' handlelogout={handlelogout} currentuser={currentuser}>
            Feeds
            <CustomButton onClick={handlelogout} >LogOut</CustomButton>
        </div>
    )
}
