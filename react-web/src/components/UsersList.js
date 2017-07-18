import React from 'react'
import UserDetails from './UserDetails'

export default function UsersList({
  items,
  onArchiveUser
}) {
  return (
    <div>
    {
      items.map(item => (
        <div key={ item._id } className="bookingSummary">
          <UserDetails
            { ...item }
            showLink
          />
          <button onClick={() => onArchiveUser(item._id)} className="btn btn-red-long">Archive</button>
        </div>
      ))
    }
    </div>
  )
}
