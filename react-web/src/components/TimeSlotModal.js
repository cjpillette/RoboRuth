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
    const { onSelectTimeStart } = this.props
    const dateSelected = moment(this.props.daySelected).format("LL").toString();

    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Hours available for booking"

        >
          <button onClick={this.props.closeModal} className="btn btn-red">X</button>
          <h2>Booking for {dateSelected}</h2>
          <small>select a time</small>
          <TimeSlot startTime={830} stopTime={900}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={900} stopTime={930}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={930} stopTime={1000}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1000} stopTime={1030}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1030} stopTime={1100}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1100} stopTime={1130}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1130} stopTime={1200}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1200} stopTime={1230}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1230} stopTime={1300}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1300} stopTime={1330}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1330} stopTime={1400}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1400} stopTime={1430}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1430} stopTime={1500}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={1500} stopTime={1530}  onClick={ onSelectTimeStart } />
        </Modal>
      </div>
    );
  }
}

export default TimeSlotModal
