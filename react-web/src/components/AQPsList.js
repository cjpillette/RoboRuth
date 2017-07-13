import React from 'react'
import Aqp from './Aqp'

export default function AQPsList({
  items,
  onDeleteAQP
}) {
  return (
    <div>
    {
      items.map(item => (
        <div>
          <Aqp
            { ...item }
            showLink
          />
          <button onClick={() => onDeleteAQP(item._id)} className="btn btn-red-long">Delete</button>
        </div>
      ))
    }
    </div>
  )
}
