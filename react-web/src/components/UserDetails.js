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
      <p>Last name: { lastName }</p>
      <p>Contact number: { phoneNumber }</p>
      <p>Is archived: { isArchived }</p>
    
    </article>
  )
}
