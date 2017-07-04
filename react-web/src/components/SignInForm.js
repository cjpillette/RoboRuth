import React from 'react'

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
    <form
      onSubmit={ (event) => submitSignIn(event, onSignIn) }
      style={ formStyle }
    >
      <label>
        <span>Email </span>
        <input name='email' />
      </label>
      <label>
        <span>Password </span>
        <input type='password' name='password' />
      </label>
      <button>Sign In</button>
    </form>
  )
}