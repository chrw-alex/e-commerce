import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://fakestoreapi.com/'
})

export const getProducts = () => {
  return instanse.get('products')
    .then(res => {
      return res.data
    })
}

export const getProduct = (id) => {
  return instanse.get(`products/${id}`)
    .then(res => {
      return res.data
    })
}