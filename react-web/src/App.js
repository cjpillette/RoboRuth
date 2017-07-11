import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import BookingsPage from './pages/BookingsPage'
import SignInPage from './pages/SignInPage'
import MainCalendar from './components/MainCalendar'
import * as authAPI from './api/auth'
import * as bookingsAPI from './api/bookings'

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: null,
    bookings: null, // Null means not loaded yet
    daySelected: null,
    startTimeSelected: null,
    selectInspValue: null
  }

  handleSelectDay = (daySelected) => {
    this.setState({daySelected})
  }

  handleStartTime = (startTimeSelected) => {
    this.setState({startTimeSelected})
  }

  handleInspectionSelection = (e) => {
    this.setState({selectInspValue: e.target.value})
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then(json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleDeleteBooking = (id) => {
    const bookings = this.state.bookings.filter((booking) => {
      return booking._id !== id;
    });
    this.setState({ bookings: bookings });

    bookingsAPI.destroy(id)
  }

  handleCreateBooking = (booking) => {
    this.setState(({ bookings }) => ({
      bookings: [ booking ].concat(bookings)
    }))

    bookingsAPI.create(booking)
  }

  render() {
    const { error, token, bookings, daySelected, startTimeSelected, selectInspValue } = this.state
    return (
      <Router>
        <main>
          <PrimaryNav />
          { !!error && <p>{ error.message }</p> }

          <Switch>
            <Route exact path='/' render={
              () => (
                <MainCalendar
                  daySelected={daySelected}
                  onSelectDay={ this.handleSelectDay }
                  onSelectTimeStart={this.handleStartTime}
                />
              )
            } />
            <Route path='/signin' render={
              () => (
                <SignInPage
                  token={ token }
                  onSignIn={ this.handleSignIn }
                />
              )
            } />
            <Route path='/bookings' render={
              () => (
                <BookingsPage
                  bookings={ bookings }
                  onCreateBooking={this.handleCreateBooking}
                  daySelected={daySelected}
                  startTimeSelected={startTimeSelected}
                  onSelectInspection={this.handleInspectionSelection}
                  selectInspValue={this.state.selectInspValue}
                  onDeleteBooking={this.handleDeleteBooking}
                />
              )
            } />
            <Route render={
              ({ location }) => <p>{ location.pathname } not found</p>
            } />
          </Switch>
        </main>
      </Router>
    )
  }

  componentDidMount() {
    // Asychronous
    bookingsAPI.list()
      .then(bookings => {
        // Happens some time in the future
        this.setState({ bookings })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App
