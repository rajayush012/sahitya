import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

import './signup.styles.scss';

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
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        };
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        // if(password !== confirmPassword){
        //     alert(`Passwords don't match!`);
        //     return;
        // }

        // try{
        // const {user} = await auth.createUserWithEmailAndPassword(email,password);
        // await createUserProfileDocument(user,{displayName});

        // this.setState({
        //     displayName : '',
        //     email : '',
        //     password : '',
        //     confirmPassword : ''
        // })

        // }catch(err){
        //     console.error(err.message);
        // }

    }

    handleChange = e => {
        const { name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        
        return (
            <div className='sign-up'>
               <h2 className='title'>Don't have an account?</h2>
               <span>Sign up with your email and password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
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