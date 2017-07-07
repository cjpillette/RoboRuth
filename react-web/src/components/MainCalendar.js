import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import TimeSlotModal from './TimeSlotModal'

class MainCalendar extends React.Component {
// state
  state = {
    modalIsOpen: false,
  }

//functions
onStandaloneSelect = (daySelected) => {
  // The parent component has responsibility for the selected day
  this.props.onSelectDay(daySelected)
  this.setState({modalIsOpen: true})
}

openModal = () => {
  this.setState({modalIsOpen: true});
}

closeModal = () => {
  this.setState({modalIsOpen: false});
}

// rendering stuff for the user
  render() {
    const today = new Date()
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    return (
      <div>
          <TimeSlotModal
            daySelected={this.props.daySelected}
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
          />
          <InfiniteCalendar
            width={400}
            height={600}
            selected={today}
            onSelect={this.onStandaloneSelect}
            minDate={lastWeek}
            locale={{
              weekStartsOn: 1
            }}
            theme={{
                selectionColor: date => {
                  return moment(date).isBefore(today) ? '#EC6150' : '#559FFF'
                },
                textColor: {
                  default: '#333',
                  active: '#FFF'
                },
                weekdayColor: 'rgb(250, 201, 0)',
                headerColor: 'rgb(243, 134, 18)',
                floatingNav: {
                  background: 'rgba(243, 134, 18, 0.96)',
                  color: '#FFF',
                  chevron: '#000'
                }
              }}
          />
      </div>
    )
  }
}


export default MainCalendar
