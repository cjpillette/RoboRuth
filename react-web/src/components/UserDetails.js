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
    </article>
  )
}
