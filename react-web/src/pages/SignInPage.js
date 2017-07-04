import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

const SignInPage = ({
    token,
    onSignIn
}) => (
    <div>
    {
        !!token ? (
            <Redirect to='/bookings' />
        ) : (
            <SignInForm onSignIn={ onSignIn } />
        )
    }
    </div>
)

export default SignInPage
