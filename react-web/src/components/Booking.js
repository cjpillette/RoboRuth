import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Booking({
  _id,
  clientId,
  inspectionType,
  entryNumber,
  noteToOfficer,
  dateSelected,
  timeSelected,
  attachment,
  showLink = false
}) {
  return (
    <article>
      <p>{ moment(dateSelected).format('ddd, DD-MM-YYYY') }</p>
      <p>{ timeSelected }</p>
      <p>{ inspectionType }</p>
      <Link to={ `/bookings/${_id}` }>
        { entryNumber }
      </Link>
    </article>
  )
}
