import api from './init'

export function list() {
    return api.get('/users').then(res => res.data)
}

export function archive(id) {
    return api.patch(`/users/${id}`, { isArchived: true }).then(res => res.data)
}
