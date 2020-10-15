import React,{useCallback} from 'react'
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration : none;
    color: white;
    transition: 0.25s;
    &:hover{
        color: #f4c4f3;
    }
`

export default function Header(props) {

   const handleLogout = useCallback(
       () => {
           localStorage.removeItem("token")
       },
       [],
   )

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
                <span className='links'><CustomButton onClick={handleLogout}>Logout</CustomButton></span>
                
            </div>
        </div>
    )
}
