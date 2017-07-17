import api from './init'

export function list() {
    return api.get('/users').then(res => res.data)
}

export function create({
  email, firstName, lastName, phoneNumber, isArchived
 }) {
    return api.post('/users', {
      email, firstName, lastName, phoneNumber, isArchived
    }).then(res => res.data)
}

export function archive(id) {
    return api.patch(`/users/${id}`, { isArchived: true }).then(res => res.data)
}

export function destroy(id) {
    return api.delete(`/users/${id}`).then(res => ({}))
}
