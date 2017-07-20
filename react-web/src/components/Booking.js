import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Booking({
  _id,
  user,
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
      <p>For: { user }</p>
      <p>{ inspectionType }</p>
      <Link to={ `/bookings/${_id}` }>
        { entryNumber }
      </Link>
      <p> { attachment } </p>
    </article>
  )
}
