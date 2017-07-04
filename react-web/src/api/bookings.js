import api from './init'

export function list() {
    return api.get('/bookings').then(res => res.data)
}

export function create({
  inspectionType, entryNumber, noteToOfficer, startTime, attachment
 }) {
    return api.post('/bookings', {
        inspectionType, entryNumber, noteToOfficer, startTime, attachment
    }).then(res => res.data)
}
