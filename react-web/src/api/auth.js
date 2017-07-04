import api from './init'

export function signIn({ email, password }) {
    return api.post('/auth', {
        email,
        password
    }).then(res => res.data)
}

export function register({ email, password }) {
    return api.post('/auth/register', {
        email,
        password
    }).then(res => res.data)
}
