import React from 'react'
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration : none;
    color: white;
    transition: 0.25s;
    &:hover{
        color: wheat;
    }
`

export default function Header(props) {
    return (
        <div className='header'>
            
            <div className='navbar-logo'>
                <div className='logo'>
                    Sahitya
                </div>
            </div>
            <div className='navbar-links'>
                <StyledLink className='links'>Home</StyledLink>
                <StyledLink className='links'>Dashboard</StyledLink>
                <span className='links'><CustomButton onClick={props.handleLogout}>Logout</CustomButton></span>
                
            </div>
        </div>
    )
}
