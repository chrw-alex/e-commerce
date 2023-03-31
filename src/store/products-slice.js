import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProduct } from '../api/api';

const initialState = {
  products: [],
  currentProduct: {},
  isLoading: true,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts(state, action) {
      state.products = action.payload.products;
    },
    updateCurrentProduct(state, action) {
      state.currentProduct = action.payload.currentProduct
    },
    startLoading(state) {
      state.isLoading = true
    },
    stopLoading(state) {
      state.isLoading = false
    }
  }
})

export const productActions = productSlice.actions

export const getProductsData = () => {
  return async (dispatch) => {
    try {
      dispatch(
        productActions.startLoading()
      )
      const productsData = await getProducts()
      await dispatch(
        productActions.updateProducts({
          products: productsData || []
        })
      )
      dispatch(
        productActions.stopLoading()
      )
    } catch (error) {
      console.log(error)
      dispatch(
        productActions.stopLoading()
      )
    }
  }
}

export const getCurrentProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(
        productActions.startLoading()
      )
      const currentProductData = await getProduct(id)
      await dispatch(
        productActions.updateCurrentProduct({
          currentProduct: currentProductData || {}
        })
      )
      dispatch(
        productActions.stopLoading()
      )
    } catch (error) {
      console.log(error)
      dispatch(
        productActions.stopLoading()
      )
    }
  }
}

export default productSlice