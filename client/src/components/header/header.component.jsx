import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss'

export default function Header(props) {
    return (
        <div className='header'>
            Header
            <CustomButton onClick={props.handleLogout}>Logout</CustomButton>
        </div>
    )
}
