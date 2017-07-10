import React from 'react'
import { Link } from 'react-router-dom'

export default function TimeSlot({
  startTime,
  stopTime,
  onClick
}) {
  return (
      <div className="slotTime">
        <Link to={ `/bookings` } onClick={ () => onClick(startTime) }>
          { startTime }
          {'-'}
          { stopTime }
        </Link>
      </div>
  )
}
