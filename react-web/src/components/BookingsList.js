import React from 'react'
import Booking from './Booking'

export default function BookingsList({
  items,
  onDeleteBooking
}) {
  return (
    <div>
    {
      items.map(item => (
        <div>
          <Booking
            // key={ item._id }
            { ...item }
            showLink
          />
          <button onClick={() => onDeleteBooking(item._id)}>Delete</button>
        </div>
      ))
    }
    </div>
  )
}
