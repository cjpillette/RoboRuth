import React from 'react'

export default function TimeSlot({
  startTime,
  stopTime
}) {
  return (
      <div className="slotTime">
        {startTime}
        {'-'}
        {stopTime}
      </div>
  )
}
