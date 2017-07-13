import api from './init'

export function list() {
    return api.get('/aqps').then(res => res.data)
}

export function create({
  aqpNumber, businessName
 }) {
    return api.post('/aqps', {
        aqpNumber, businessName
    }).then(res => res.data)
}

export function destroy(id) {
    return api.delete(`/aqps/${id}`).then(res => ({}))
}
