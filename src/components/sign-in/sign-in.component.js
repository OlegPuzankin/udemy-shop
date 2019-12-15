import React from 'react';
import './sign-in.style.scss'
import {FormInput} from "../form-input/form-input.component";
import {UserButton} from "../user-button/user-button.component";

export class SignInComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput value={this.state.email}
                               type="email"
                               label='email'
                               required
                               name='email'
                               handleChange={this.handleChange}/>
                    <FormInput value={this.state.password}
                               type="password"
                               label='password'
                               required
                               handleChange={this.handleChange}
                               name='password'/>
                    <UserButton type="submit">Submit</UserButton>
                </form>

            </div>
        );
    };
};