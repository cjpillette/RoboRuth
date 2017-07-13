import React from 'react'
import Field from './Field'

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
}

function submitSignUp(event, onSignUp) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const aqpNumber = form.elements['aqpNumber'].value
  const businessName = form.elements['businessName'].value
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  const firstName = form.elements['firstName'].value
  const lastName = form.elements['lastName'].value
  const phoneNumber = form.elements['phoneNumber'].value
  // Call the onSignIn function with our values
  onSignUp({ aqpNumber, businessName, email, password, firstName, lastName, phoneNumber })
}

export default function SignUpForm({
  onSignUp
}) {
  return (
    <form
      onSubmit={ (event) => submitSignUp(event, onSignUp) }
      style={ formStyle }
    >
      <Field label='AQP Number *' name='aqpNumber' type='text' />
      <Field label='Business Name' name='businessName' type='string' />

      <Field label='Email *' name='email' type='text' />
      <Field label='Password *' name='password' type='password' />

      <Field label='First name *' name='firstName' type='text' />
      <Field label='Last name *' name='lastName' type='text' />
      <Field label='Mobile number *' name='phoneNumber' type='text' />

      <button className="btn btn-submit">Sign Up</button>
    </form>
  )
}
