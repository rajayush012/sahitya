import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import './signup.styles.scss'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        color:white;
    }
    
`;


export default class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            name : '',
            email : '',
            password : '',
            confirmPassword : ''
        };
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert(`Passwords don't match!`);
            return;
        }

        
        const options = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('http://localhost:3000/author/signup', {
            name,email,password
        },options)
        .then(res => {
            console.log(res.data)

            this.setState({
                name : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
        })
        .catch(err=>{
            alert('Error creating')
        })

        

        

    }

    handleChange = e => {
        const { name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        const { name, email, password, confirmPassword} = this.state;
        
        return (
            <div className='sign-up'>
               <h2 className='title'>Don't have an account?</h2>
               <span>Sign up with your email and password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text'
                    name='name'
                    value={name}
                    label='Name'
                    onChange={this.handleChange}
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={this.handleChange}
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={this.handleChange}
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm password'
                    onChange={this.handleChange}
                    required
                />
                <div style={{textAlign: "center"}}><CustomButton type='submit'>Sign Up</CustomButton> <span className='special-margins'>{'or'}</span>
                <StyledLink to='/signin'><CustomButton inverted>SIGN IN WITH YOUR SAHITYA ACCOUNT</CustomButton></StyledLink>
                </div>
               </form>
            </div>
        )
    }
}