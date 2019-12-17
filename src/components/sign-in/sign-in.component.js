import React from 'react';
import './sign-in.style.scss'
import {FormInput} from "../form-input/form-input.component";
import {UserButton} from "../user-button/user-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

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
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput value={this.state.email}
                               autoComplete='off'
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
                    <div className='buttons'>
                        <UserButton type="submit">Submit</UserButton>
                        <UserButton onClick={signInWithGoogle} isSignWithGoogle>Sign In with Google</UserButton>

                    </div>

                </form>

            </div>
        );
    };
};