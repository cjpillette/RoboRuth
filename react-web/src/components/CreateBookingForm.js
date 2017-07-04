import React from 'react'
import Field from './Field'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const startTime = form.elements['startTime'].value
    const inspectionType = form.elements['inspectionType'].value
    const entryNumber = form.elements['entryNumber'].value
    const attachment = form.elements['attachment'].value
    const noteToOfficer = form.elements['noteToOfficer'].value
    // const bookingValues = readAndClearForm(form)
    // onCreate(bookingValues)
    onCreate({startTime, inspectionType, entryNumber, attachment, noteToOfficer})
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
