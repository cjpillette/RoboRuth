import React from 'react'
import Field from './Field'
import readAndClearForm from './readAndClearForm'

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
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  const firstName = form.elements['firstName'].value
  const lastName = form.elements['lastName'].value
  const phoneNumber = form.elements['phoneNumber'].value

  const e = document.getElementById('aqpList')
  const aqpNumber = e.options[e.selectedIndex].value

  const userValues = readAndClearForm(form)
  // Call the onSignIn function with our values
  onSignUp({ aqpNumber, email, password, firstName, lastName, phoneNumber })
}

export default function SignUpForm({
  onSignUp,
  aqps,
  onSelectAqpNumber
}) {
  return (
    <form
      onSubmit={ (event) => submitSignUp(event, onSignUp) }
      style={ formStyle }
    >
      <label>
        Select your Approved Quarantine Place
        <select onChange={onSelectAqpNumber} id='aqpList'>
          {(aqps || []).map(aqp => <option value={aqp.aqpNumber}>{aqp.aqpNumber}</option>)}
        </select>
      </label>
      <Field label='Email *' name='email' type='text' />
      <Field label='Password *' name='password' type='password' />

      <Field label='First name *' name='firstName' type='text' />
      <Field label='Last name *' name='lastName' type='text' />
      <Field label='Mobile number *' name='phoneNumber' type='text' />

      <button className="btn btn-submit">Sign Up</button>
    </form>
  )
}
