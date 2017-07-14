import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = ({
    token,
    onSignUp,
    aqps,
    onSelectAqpNumber
}) => (
    <div>
    {
        !!token ? (
            <Redirect to='/' />
        ) : (
            <SignUpForm onSignUp={ onSignUp } aqps={ aqps } onSelectAqpNumber={ onSelectAqpNumber }/>
        )
    }
    </div>
)

export default SignUpPage
