import React from 'react'
import Field from './Field'
import moment from 'moment'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate, dateSelected, timeSelected) {
    event.preventDefault()

    const form = event.target
    const entryNumber = form.elements['entryNumber'].value
    const attachment = form.elements['attachment'].value
    const noteToOfficer = form.elements['noteToOfficer'].value
    const inspectionType = 'RTG'

    // const bookingValues = readAndClearForm(form)
    // onCreate(bookingValues)
    onCreate({entryNumber, attachment, noteToOfficer, inspectionType, dateSelected, timeSelected})
}

export default function CreateBookingForm({
    onCreate,
    daySelected,
    startTimeSelected,
    selectInspValue,
    onSelectInspection
}) {
  const dateSelected = moment(daySelected).format("LL").toString();
  const timeSelected = startTimeSelected.toString();

  return (
    <div>
      <h2>Booking for {dateSelected}</h2>
      <h3>at {timeSelected} </h3>
      <form onSubmit={ (event) => submitCreate(event, onCreate, dateSelected, timeSelected) }>
        <select
        value={selectInspValue}
        onChange={onSelectInspection}
        >
          <option value="rtg">RTG</option>
          <option value="unpack">Unpack/Inspect</option>
          <option value="exportCert">Export Certification</option>
        </select>
        <Field label='Entry Number' name='entryNumber' />
        <Field label='Attachment' name='attachment' />
        <Field label='Comments' name='noteToOfficer' type='textarea' />
        <button type='submit' className='btn btn-submit'>Create Booking</button>
      </form>
    </div>
  )
}
