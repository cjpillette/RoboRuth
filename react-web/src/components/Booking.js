import React from 'react'
import { Link } from 'react-router-dom'
import TimePicker from 'react-bootstrap-time-picker'

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
        <TimePicker start="08:30" end="15:00" step={30} />
        <Link to={ `/bookings/${_id}` }>
          { inspectionType }
          { ' '}
          { entryNumber }
        </Link>
      </h2>
    </article>
  )
}
