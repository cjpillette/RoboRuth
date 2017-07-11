import React from 'react'
import { Link } from 'react-router-dom'

export default function Booking({
  _id,
  clientId,
  inspectionType,
  entryNumber,
  noteToOfficer,
  dateSelected,
  startTime,
  attachment,
  showLink = false
}) {
  return (
    <article>
      <h2>
        { dateSelected }
        <small>{ startTime }</small>
        { inspectionType }
        <Link to={ `/bookings/${_id}` }>
          { ' '}
          { entryNumber }
        </Link>
      </h2>
    </article>
  )
}
