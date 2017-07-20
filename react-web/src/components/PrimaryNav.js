import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
  isSignedIn = false,
  onSignOut
}) => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {
          isSignedIn ? [
            <NavLink key='bookings' to='/bookings'  activeClassName='active'>Bookings</NavLink>,
            <NavLink key='aqps' to='/aqps'  activeClassName='active'>AQPs</NavLink>,
            <NavLink key='users' to='/users'  activeClassName='active'>Users</NavLink>,
            <NavLink key='signout' to='/' onClick={ onSignOut }>Sign out</NavLink>
          ] : [
            <NavLink key='signin' to='/signin'  activeClassName='active'>Sign In</NavLink>,
            <NavLink to='/register'  activeClassName='active'>Sign Up</NavLink>
          ]
        }

    </nav>
)
