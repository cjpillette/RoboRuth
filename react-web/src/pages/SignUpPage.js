import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = ({
    token,
    onSignUp
}) => (
    <div>
    {
        !!token ? (
            <Redirect to='/' />
        ) : (
            <SignUpForm onSignUp={ onSignUp } />
        )
    }
    </div>
)

export default SignUpPage
