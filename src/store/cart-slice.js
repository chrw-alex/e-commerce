import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemsAmount: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.itemsAmount++
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
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.itemsAmount--;
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice