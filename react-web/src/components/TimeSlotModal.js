import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
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
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          // onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Hours available for booking"
        >

          <button onClick={this.props.closeModal}>CLOSE</button>
          <TimeSlot startTime={830} stopTime={900}  />
          <TimeSlot startTime={900} stopTime={930}  />
          <TimeSlot startTime={930} stopTime={1000}  />
          <TimeSlot startTime={1000} stopTime={1030}  />
          <TimeSlot startTime={1030} stopTime={1100}  />
          <TimeSlot startTime={1100} stopTime={1130}  />
          <TimeSlot startTime={1130} stopTime={1200}  />
          <TimeSlot startTime={1200} stopTime={1230}  />
          <TimeSlot startTime={1230} stopTime={1300}  />
          <TimeSlot startTime={1300} stopTime={1330}  />
          <TimeSlot startTime={1330} stopTime={1400}  />
          <TimeSlot startTime={1400} stopTime={1430}  />
          <TimeSlot startTime={1430} stopTime={1500}  />
          <TimeSlot startTime={1500} stopTime={1530}  />
        </Modal>
      </div>
    );
  }
}

export default TimeSlotModal
