import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Booking({
  _id,
  clientId,
  inspectionType,
  entryNumber,
  noteToOfficer,
  dayTimeSelected,
  attachment,
  showLink = false
}) {

  return (
    <article>
      <p>On { moment(dayTimeSelected).format('LLLL') }</p>
      <p>{ inspectionType }</p>
      <Link to={ `/bookings/${_id}` }>
        { entryNumber }
      </Link>
    </article>
  )
}
