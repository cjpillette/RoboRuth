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
  state = {
      modalIsOpen: false
    }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Banana"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Booking times</h2>
          <button onClick={this.closeModal}>close</button>
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
