import React from 'react'
import Field from './Field'

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
}

function submitSignIn(event, onSignIn) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignIn function with our values
  onSignIn({ email, password })
}

export default function SignInForm({
  onSignIn
}) {
  return (
    <div>
      <form
        onSubmit={ (event) => submitSignIn(event, onSignIn) }
        style={ formStyle }
      >
        <Field label='Email' name='email' type='text' />
        <Field label='Password' name='password' type='password' />
        <button className="btn btn-submit">Sign In</button>
      </form>
      <p className="forgot-password">I forgot my password</p>
    </div>
  )
}
