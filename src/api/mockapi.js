import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://63e651637eef5b2233835792.mockapi.io/my-social/'
})

export const registerUser = (user) => {
  return instanse.post('users', { ...user })
}

export const getUser = (email) => {
  return instanse.get(`users/?email=${email}`)
    .then(res => {
      return res.data[0]
    })
}

export const changeUser = (id, data) => {
  return instanse.put(`users/${id}`, { ...data })
}