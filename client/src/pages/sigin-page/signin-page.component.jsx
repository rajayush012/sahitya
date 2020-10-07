import React from 'react'
import './signin-page.styles.scss'
import SignIn from '../../components/signin/sign-in.component';

export default function SignInPage(props) {
    return (
        <div className='signin-page'>
            <SignIn handleUser={user => props.handleUser(user)}/>
        </div>
    )
}
