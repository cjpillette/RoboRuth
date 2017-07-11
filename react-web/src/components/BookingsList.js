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
        <div className="bookingSummary">
          <Booking
            // key={ item._id }
            { ...item }
            showLink
          />
          <button onClick={() => onDeleteBooking(item._id)} className="btn btn-red-long">Delete</button>
        </div>
      ))
    }
    </div>
  )
}
