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
        <div key={ item._id } className="bookingSummary">
          <Booking
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
