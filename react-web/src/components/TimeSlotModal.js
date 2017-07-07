import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import moment from 'moment'
import TimeSlot from '../components/TimeSlot'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '100%',
    textAlign              : 'center',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}


class TimeSlotModal extends React.Component {

  render() {
    const dateSelected = moment(this.props.daySelected).format("LL").toString();
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Hours available for booking"
        >
          <h2>Booking for {dateSelected}</h2>
          <button onClick={this.props.closeModal}>CLOSE</button>
          <TimeSlot startTime={830} stopTime={900} dateSelected={dateSelected}  />
          <TimeSlot startTime={900} stopTime={930}  dateSelected={dateSelected}/>
          <TimeSlot startTime={930} stopTime={1000}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1000} stopTime={1030}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1030} stopTime={1100}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1100} stopTime={1130}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1130} stopTime={1200}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1200} stopTime={1230}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1230} stopTime={1300}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1300} stopTime={1330}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1330} stopTime={1400}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1400} stopTime={1430}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1430} stopTime={1500}  dateSelected={dateSelected}/>
          <TimeSlot startTime={1500} stopTime={1530}  dateSelected={dateSelected}/>
        </Modal>
      </div>
    );
  }
}

export default TimeSlotModal
