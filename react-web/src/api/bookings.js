import api from './init'

export function list() {
    return api.get('/bookings').then(res => res.data)
}

export function create({
  inspectionType, entryNumber, noteToOfficer, dateSelected, attachment
 }) {
    return api.post('/bookings', {
        inspectionType, entryNumber, noteToOfficer, dateSelected, attachment
    }).then(res => res.data)
}

export function destroy(id) {
    return api.delete(`/bookings/${id}`).then(res => ({}))
}
