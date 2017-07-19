import React from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = ({
    token,
    onSignUp,
    aqps,
    onSelectAqpNumber,
    selectAqpNumber
}) => (
    <div>
    {
        !!token ? (
            <Redirect to='/' />
        ) : (
            <SignUpForm onSignUp={ onSignUp } aqps={ aqps } onSelectAqpNumber={ onSelectAqpNumber } selectAqpNumber={ selectAqpNumber }/>
        )
    }
    </div>
)

export default SignUpPage
