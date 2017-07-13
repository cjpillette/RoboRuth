import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import BookingsPage from './pages/BookingsPage'
import AQPsPage from './pages/AQPsPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import MainCalendar from './components/MainCalendar'
import moment from 'moment'
import * as authAPI from './api/auth'
import * as bookingsAPI from './api/bookings'
import * as aqpsAPI from './api/aqps'

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: null,
    bookings: null, // Null means not loaded yet
    dateSelected: null,
    selectInspValue: null,
    aqps: null
  }

  handleSelectDay = (dateSelected) => {
    this.setState({dateSelected})
  }

  handleStartTime = (time) => {
    this.setState((prevState) => {
      let oldDate = prevState.dateSelected
      let newTime = moment(time).format("HH:mm").toString()
      let newHour = newTime.substring(0,2)
      let newMinute = newTime.substring(3)
      let newDate = moment(oldDate).set({'hour': newHour, 'minute': newMinute})
      return { dateSelected: newDate }
    })
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

  handleSignUp = ({ aqpNumber, businessName, email, password, firstName, lastName, phoneNumber}) => {
    authAPI.register({
      aqpNumber, businessName, email, password, firstName, lastName, phoneNumber
    })
      .then(json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleCreateBooking = (booking) => {
    this.setState(({ bookings }) => ({
      bookings: [ booking ].concat(bookings)
    }))

    bookingsAPI.create(booking)
  }

  handleDeleteBooking = (id) => {
    const bookings = this.state.bookings.filter((booking) => {
      return booking._id !== id;
    });
    this.setState({ bookings: bookings });

    bookingsAPI.destroy(id)
  }

  handleCreateAQP = (aqp) => {
    this.setState(({ aqps }) => ({
      aqps: [ aqp ].concat(aqps || [])
    }))

    aqpsAPI.create(aqp)
  }

  handleDeleteAQP = (id) => {
    const aqps = this.state.aqps.filter((aqp) => {
      return aqp._id !== id;
    });
    this.setState({ aqps: aqps });

    aqpsAPI.destroy(id)
  }


  render() {
    const { error, token, bookings, dateSelected, selectInspValue, aqps } = this.state
    return (
      <Router>
        <main>
          <PrimaryNav />
          { !!error && <p>{ error.message }</p> }

          <Switch>
            <Route exact path='/' render={
              () => (
                <MainCalendar
                  dateSelected={dateSelected}
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
            <Route path='/register' render={
              () => (
                <SignUpPage
                  token={ token }
                  onSignUp={ this.handleSignUp }
                />
              )
            } />
            <Route path='/bookings' render={
              () => (
                <BookingsPage
                  bookings={ bookings }
                  onCreateBooking={this.handleCreateBooking}
                  dateSelected={dateSelected}
                  onSelectInspection={this.handleInspectionSelection}
                  selectInspValue={selectInspValue}
                  onDeleteBooking={this.handleDeleteBooking}
                />
              )
            } />
            <Route path='/aqps' render={
              () => (
                <AQPsPage
                  aqps={ aqps }
                  onCreateAQP={this.handleCreateAQP}
                  onDeleteAQP={this.handleDeleteAQP}
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
