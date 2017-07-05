import React from 'react'
import { Link } from 'react-router-dom'

export default function Booking({
  _id,
  clientId,
  inspectionType,
  entryNumber,
  noteToOfficer,
  startTime,
  attachment,
  showLink = false
}) {
  return (
    <article>
      <h2>
        <small>{ startTime }</small>
        <Link to={ `/bookings/${_id}` }>
          { inspectionType }
          { ' '}
          { entryNumber }
        </Link>
      </h2>
    </article>
  )
}
