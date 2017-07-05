import React from 'react'
import Booking from '../components/Booking'

export default function BookingPage({
    booking
}) {
    return (
        <div>
        {
            !!booking ? (
                <Booking { ...booking } />
            ) : (
                <p>Loading…</p>
            )
        }
        </div>
    )
}
