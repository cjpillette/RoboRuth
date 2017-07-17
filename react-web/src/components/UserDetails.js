import React from 'react'

export default function User({
  _id,
  email,
  firstName,
  lastName,
  phoneNumber,
  isArchived,
  aqp,
  showLink = false
}) {

  return (
    <article>
      <p>Email: { email }</p>
      <p>First name: { firstName }</p>
      <p>Last name: { firstName }</p>
      <p>Contact number: { firstName }</p>
      <p>Is archived: { firstName }</p>
      <p>Belongs to AQP number: { firstName }</p>
    </article>
  )
}
