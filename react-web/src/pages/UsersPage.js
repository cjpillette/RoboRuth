import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserDetails from '../components/UserDetails'
import UsersList from '../components/UsersList'

const UsersPage = ({
    users,
    onArchiveUser
}) => (
    <div>
    {
        !!users ? (
            <Switch>
                <Route path='/users/:id' render={
                    ({ match }) => {
                        const id = match.params.id
                        const user = users.find((user) => user._id === id)
                        if (!user) {
                            return (
                                <p>User with id "{ id }" not found</p>
                            )
                        }
                        return (
                            <UserDetails { ...user } />
                        )
                    }
                } />
                <Route path='/users' render={
                    () => (
                        <UsersList items={ users } onArchiveUser={ onArchiveUser }/>
                    )
                  }
                />
            </Switch>
        ) : (
            'Loading users…'
        )
    }
    </div>
)

export default UsersPage
