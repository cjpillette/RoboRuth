import React from 'react'
import Booking from './Booking'

export default function BookingsList({
  items
}) {
  return (
    <div>
    {
      items.map(item => (
        <Booking
          key={ item._id }
          { ...item }
          showLink
        />
      ))
    }
    </div>
  )
}
