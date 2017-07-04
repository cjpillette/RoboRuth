import React from 'react'

export default function Field({
  label,
  type,
  name
}) {
  return (
    <label>
        <span>{ label } </span>
        <input type={ type } name={ name } />
    </label>
  )
}