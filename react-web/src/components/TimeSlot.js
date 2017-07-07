import React from 'react'
import { Link } from 'react-router-dom'

export default function TimeSlot({
  startTime,
  stopTime
}) {
  return (
      <div className="slotTime">
        <Link to={ `/bookings` }>
          { startTime }
          {'-'}
          { stopTime }
        </Link>
      </div>
  )
}
