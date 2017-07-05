import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

const HomePage = ({
    // props
}) => {
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  return (
    <div>
      <h2>Make a Booking</h2>
        <InfiniteCalendar
          width={400}
          height={600}
          selected={today}
          disabledDays={[0,6]}
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
              weekdayColor: 'rgb(146, 118, 255)',
              headerColor: 'rgb(127, 95, 251)',
              floatingNav: {
                background: 'rgba(81, 67, 138, 0.96)',
                color: '#FFF',
                chevron: '#FFA726'
              }
            }}
        />
    </div>
  )
}


export default HomePage
