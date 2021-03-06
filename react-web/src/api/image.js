import axios from './init'

export function createImage({ file }) {
  const data = new FormData()
  data.append('image', file)
  return axios.post('/images', data)
    .then(res => res.data)
}
