import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/signin'  activeClassName='active'>Sign In</NavLink>
        <NavLink to='/register'  activeClassName='active'>Sign Up</NavLink>
        <NavLink to='/bookings'  activeClassName='active'>Bookings</NavLink>
        <NavLink to='/aqps'  activeClassName='active'>AQPs</NavLink>
        <NavLink to='/users'  activeClassName='active'>Users</NavLink>
    </nav>
)
