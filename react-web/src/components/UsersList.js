import React from 'react'
import UserDetails from './UserDetails'

export default function UsersList({
  items,
  onArchiveUser,
  onDeleteUser
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
          <button onClick={() => onDeleteUser(item._id)} className="btn btn-red-long">Delete</button>
        </div>
      ))
    }
    </div>
  )
}
