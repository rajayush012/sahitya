import React from 'react'
import './jumbotron.styles.scss'
import Signup from '../signup/signup.component';
import url from '../../assets/hero.png'

export default function Jumbotron() {
    return (
        <div className='jumbotron'>
            <div className='hero'
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize : 'cover',
                    backgroundPosition: '50% 0'
                    
                }}
            >
            
            </div>
            <Signup/>
        </div>
    )
}
