import React from 'react'
import './jumbotron.styles.scss'
import Signup from '../signup/signup.component';

export default function Jumbotron() {
    return (
        <div className='jumbotron'>
            <div className='hero'>
            <h1>Sahitya.</h1>
            </div>
            <Signup/>
        </div>
    )
}
