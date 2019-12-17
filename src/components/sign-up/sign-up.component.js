import React from 'react';
import './sign-up.style.scss'
import {FormInput} from "../form-input/form-input.component";
import {UserButton} from "../user-button/user-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


export function SignUp() {

    const [displayName, setDisplayName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');



        } catch (e) {
            console.log(e.message)
        }


    }

    //console.log(displayName, email, password, confirmPassword)


    return (
        <div className='sign-up'>
            <h2 className='title'>Need to create an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput value={displayName}
                           autoComplete='off'
                           type="text"
                           label='Display name'
                           required
                           name='displayName'
                           handleChange={e => setDisplayName(e.target.value)}/>
                <FormInput value={email}
                           autoComplete='off'
                           type="email"
                           label='Email'
                           required
                           name='email'
                           handleChange={e => setEmail(e.target.value)}/>
                <FormInput value={password}
                           autoComplete='off'
                           type="password"
                           label='Password'
                           required
                           name='password'
                           handleChange={e => setPassword(e.target.value)}/>
                <FormInput value={confirmPassword}
                           autoComplete='off'
                           type="password"
                           label='Confirm Password'
                           required
                           name='confirmPassword'
                           handleChange={e => setConfirmPassword(e.target.value)}/>
                <UserButton type='submit'>SIGN UP</UserButton>

            </form>

        </div>
    )
}