import React from 'react'

export default function User({
  _id,
  email,
  firstName,
  lastName,
  phoneNumber,
  isArchived,
  aqpNumber,
  showLink = false
}) {

  return (
    <article>
      <p>Email: { email }</p>
      <p>First name: { firstName }</p>
      <p>Last name: { lastName }</p>
      <p>Contact number: { phoneNumber }</p>
      {
        (isArchived)
        ? <p>Contact Archived</p>
        : <p>Contact Active</p>
      }
      <p>{ aqpNumber }</p>
    </article>
  )
}
