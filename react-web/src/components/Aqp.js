import React from 'react'
import { Link } from 'react-router-dom'

export default function Aqp({
  _id,
  aqpNumber,
  businessName,
  showLink = false
}) {

  return (
    <article>
      <p>{ businessName }</p>
      <Link to={ `/aqps/${_id}` }>
        { aqpNumber }
      </Link>
    </article>
  )
}
