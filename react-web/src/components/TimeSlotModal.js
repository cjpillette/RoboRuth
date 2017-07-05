import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

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
          <div className="slotTime">08:30-09:00</div>
          <div className="slotTime">09:00-09:30</div>
          <div className="slotTime">09:30-10:00</div>
          <div className="slotTime">10:00-10:30</div>
          <div className="slotTime">10:30-11:00</div>
          <div className="slotTime">11:00-11:30</div>
          <div className="slotTime">11:30-12:00</div>
          <div className="slotTime">12:00-12:30</div>
          <div className="slotTime">12:30-13:00</div>
          <div className="slotTime">13:00-13:30</div>
          <div className="slotTime">13:30-14:00</div>
          <div className="slotTime">14:00-14:30</div>
          <div className="slotTime">14:30-15:00</div>
          <div className="slotTime">15:00-15:30</div>
        </Modal>
      </div>
    );
  }
}

export default TimeSlotModal
