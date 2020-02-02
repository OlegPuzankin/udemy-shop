import React from 'react';
import './sign-in.style.scss'
import {FormInput} from "../form-input/form-input.component";
import {UserButton} from "../user-button/user-button.component";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../redux/actions/user-actions";

export function SignInComponent() {

    const [state, setState] = React.useState({email:'', password: ''});

    const dispatch = useDispatch();


    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(emailSignInStart(state))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    console.log('sign in state',state)


    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput value={state.email}
                           autoComplete='off'
                           type="email"
                           label='email'
                           required
                           name='email'
                           handleChange={handleChange}/>
                <FormInput value={state.password}
                           type="password"
                           label='password'
                           required
                           handleChange={handleChange}
                           name='password'/>
                <div className='buttons'>
                    <UserButton type="submit">Submit</UserButton>
                    <UserButton type='button' onClick={() => dispatch(googleSignInStart())} isSignWithGoogle>
                        Sign In with Google
                    </UserButton>

                </div>

            </form>

        </div>
    );
}