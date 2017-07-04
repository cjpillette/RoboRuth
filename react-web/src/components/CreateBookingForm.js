import React from 'react'
import Field from './Field'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const bookingValues = readAndClearForm(form)
    onCreate(bookingValues)
}

export default function CreateBookingForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
      <Field label='Start Time' name='startTime' />
      <Field label='Inspection Type' name='inspectionType' />
      <Field label='Entry Number' name='entryNumber' />
      <Field label='Attachment' name='attachment' />
      <Field label='Comments' name='noteToOfficer' />
      <button type='submit'>Create Booking</button>
    </form>
  )
}
