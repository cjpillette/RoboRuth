import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function TimeSlot({
  startTime,
  stopTime,
  onClick
}) {
  const startTimeSelected = moment(startTime).format("HH:mm").toString();
  const stopTimeSelected = moment(stopTime).format("HH:mm").toString();
  return (
      <div className="slotTime">
        <Link to='/bookings' onClick={ () => onClick(startTime) }>
          { startTimeSelected }
          {'-'}
          { stopTimeSelected }
        </Link>
      </div>
  )
}
