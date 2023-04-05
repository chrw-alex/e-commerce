import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products-slice';
import cartSlice from './cart-slice';
import userSlice from './user-slice';

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  }
})

export default store