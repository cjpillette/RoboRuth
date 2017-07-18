import api from './init'

export function signIn({ email, password }) {
    return api.post('/auth', {
        email,
        password
    }).then(res => res.data)
}

export function register({ aqp, email, password, firstName, lastName, phoneNumber }) {
    return api.post('/auth/register', {
        aqp,
        email,
        password,
        firstName,
        lastName,
        phoneNumber
    }).then(res => res.data)
}
