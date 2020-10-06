import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';
import axios from 'axios';
import jwt from 'jwt-decode';


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


export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const {email,password} = this.state;
        axios.post('http://localhost:8000/author/login',{
            email,password
        },options)
        .then(res => {
            const {name, email, _id} = jwt(res.data.token);
            //set_user
        })
        .catch(err => {
            console.log(err);
        })
        // try{
        //     await auth.signInWithEmailAndPassword(email,password);
        //     this.setState({
        //         email : '',
        //         password : ''
        //     })
        // }catch(err){
        //     console.error(err.message);
        // }

    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email' 
                        value={this.state.email}
                        handleChange ={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        label='Password'
                        name='password'
                        type='password' 
                        value={this.state.password}
                        handleChange ={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <StyledLink to='/'><CustomButton inverted>GO BACK</CustomButton></StyledLink>
                    </div>
                    </form>
            </div>
        )
    }
}
