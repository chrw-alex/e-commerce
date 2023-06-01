import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../api/mockapi';

const initialState = {
  items: [],
  itemsAmount: 0,
  totalPrice: 0,
  isCartChanged: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.itemsAmount++
      state.isCartChanged = !state.isCartChanged
      state.totalPrice = state.totalPrice + newItem.price
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.total = existingItem.price * existingItem.quantity
      }
    },
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.itemsAmount--
      state.isCartChanged = !state.isCartChanged
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.total = existingItem.total - existingItem.price
      }
    },
    updateCart(state, action) {
      state.items = action.payload.items
      state.itemsAmount = action.payload.itemsAmount
      state.totalPrice = action.payload.totalPrice
    },
  },
})

export const cartActions = cartSlice.actions

export const getCartData = (email) => {
  return async (dispatch) => {
    try {
      const cartData = await getUser(email)
      dispatch(
        cartActions.updateCart({
          items: cartData.cart || [],
          itemsAmount: cartData.itemsAmount,
          totalPrice: cartData.totalPrice,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}



export default cartSlice