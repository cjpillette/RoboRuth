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


export default function TimeSlotModal({
  dateSelected,
  modalIsOpen,
  closeModal,
  onSelectTimeStart
}) {

    const daySelected = moment(dateSelected).format("LL").toString();
    const dayStartingAtMidnight = moment(daySelected).startOf('day');
    const b830 = moment(dayStartingAtMidnight).add(8, 'h').add(30, 'm').toString();
    const b900 = moment(dayStartingAtMidnight).add(540, 'm').toString();
    const b930 = moment(dayStartingAtMidnight).add(570, 'm').toString();
    const b1000 = moment(dayStartingAtMidnight).add(600, 'm').toString();
    const b1030 = moment(dayStartingAtMidnight).add(630, 'm').toString();
    const b1100 = moment(dayStartingAtMidnight).add(660, 'm').toString();
    const b1130 = moment(dayStartingAtMidnight).add(690, 'm').toString();
    const b1200 = moment(dayStartingAtMidnight).add(720, 'm').toString();
    const b1230 = moment(dayStartingAtMidnight).add(750, 'm').toString();
    const b1300 = moment(dayStartingAtMidnight).add(780, 'm').toString();
    const b1330 = moment(dayStartingAtMidnight).add(810, 'm').toString();
    const b1400 = moment(dayStartingAtMidnight).add(840, 'm').toString();
    const b1430 = moment(dayStartingAtMidnight).add(870, 'm').toString();
    const b1500 = moment(dayStartingAtMidnight).add(900, 'm').toString();
    const b1530 = moment(dayStartingAtMidnight).add(930, 'm').toString();

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Hours available for booking"
        >
          <button onClick={closeModal} className="btn btn-red">X</button>
          <h2>Booking for {daySelected}</h2>
          <small>select a time</small>
          <TimeSlot startTime={b830} stopTime={b900}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b900} stopTime={b930}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b930} stopTime={b1000}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1000} stopTime={b1030}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1030} stopTime={b1100}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1100} stopTime={b1130}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1130} stopTime={b1200}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1200} stopTime={b1230}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1230} stopTime={b1300}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1300} stopTime={b1330}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1330} stopTime={b1400}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1400} stopTime={b1430}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1430} stopTime={b1500}  onClick={ onSelectTimeStart } />
          <TimeSlot startTime={b1500} stopTime={b1530}  onClick={ onSelectTimeStart } />
        </Modal>
      </div>
    );
  }
