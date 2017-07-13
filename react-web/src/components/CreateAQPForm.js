import React from 'react'
import Field from './Field'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const aqpNumber = form.elements['aqpNumber'].value
    const businessName = form.elements['businessName'].value
    const aqpValues = readAndClearForm(form)
    onCreate({aqpNumber, businessName })
}

export default function CreateAQPForm({
    onCreate
}) {
  return (
    <div>
      <h2>Create a new AQP </h2>
      <form onSubmit={ (event) => submitCreate(event, onCreate) }>
        <Field label='Business Name' name='businessName' type='text' />
        <Field label='AQP Number' name='aqpNumber' type='textarea' />
        <button type='submit' className='btn btn-submit'>Add AQP</button>
      </form>
    </div>
  )
}
