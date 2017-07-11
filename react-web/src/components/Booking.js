import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Booking({
  _id,
  clientId,
  inspectionType,
  entryNumber,
  noteToOfficer,
  dateSelected,
  startTimeSelected,
  attachment,
  showLink = false
}) {

  return (
    <article>
      <p>On { moment(dateSelected).format('ddd, DD-MM-YYYY') }</p>
      {"XXYY".slice(0, 2) + "/" + "XXYY".slice(2)}
      <p>at { startTimeSelected }</p>
      <p>{ inspectionType }</p>
      <Link to={ `/bookings/${_id}` }>
        { entryNumber }
      </Link>
    </article>
  )
}
