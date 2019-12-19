import React from 'react';
import './sign-up.style.scss'
import {FormInput} from "../form-input/form-input.component";
import {UserButton} from "../user-button/user-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


const INITIAL_VALUES={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export function SignUp() {

    const [values, setValues]=React.useState(INITIAL_VALUES);

    function handleChange (e){
        const{value, name} = e.target;
        setValues({...values, [name]: value});
    }


    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName});
            setValues(INITIAL_VALUES)

        } catch (e) {
            console.log(e.message)
        }
    }


    const {email, displayName, password, confirmPassword } = values

    console.log('values',values)


    return (
        <div className='sign-up'>
            <h2 className='title'>Need to create an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput value={displayName}
                           autoComplete='off'
                           type="text"
                           label='Display name'
                           required
                           name='displayName'
                           handleChange={handleChange}/>
                <FormInput value={email}
                           autoComplete='off'
                           type="email"
                           label='Email'
                           required
                           name='email'
                           handleChange={handleChange}/>
                <FormInput value={password}
                           autoComplete='off'
                           type="password"
                           label='Password'
                           required
                           name='password'
                           handleChange={handleChange}/>
                <FormInput value={confirmPassword}
                           autoComplete='off'
                           type="password"
                           label='Confirm Password'
                           required
                           name='confirmPassword'
                           handleChange={handleChange}/>
                <UserButton type='submit'>SIGN UP</UserButton>

            </form>

        </div>
    )
}