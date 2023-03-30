import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../api/api';

const initialState = {
  products: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts(state, action) {
      state.products = action.payload.products;
    }
  }
})

export const productActions = productSlice.actions

export const getProductsData = () => {
  return async (dispatch) => {
    try {
      const productData = await getProducts()
      dispatch(
        productActions.updateProducts({
          products: productData || []
        })
      )
    } catch (error) {
      console.log(error)
    }

  }
}

export default productSlice