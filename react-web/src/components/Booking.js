import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Booking({
  _id,
  email,
  inspectionType,
  entryNumber,
  noteToOfficer,
  dateSelected,
  attachment,
  showLink = false
}) {

  return (
    <article>
      <p>On { moment(dateSelected).format('LLLL') }</p>
      <p>For: { email }</p>
      <p>{ inspectionType }</p>
      <Link to={ `/bookings/${_id}` }>
        { entryNumber }
      </Link>
      <p> { attachment } </p>
    </article>
  )
}
