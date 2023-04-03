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
    },
    sortProducts(state, action) {
      const searchParams = action.payload

      if (searchParams.title) {
        state.products = state.products.filter(product => {
          return product.title.toLowerCase().includes(searchParams.title.toLowerCase())
        })
      }

      if (searchParams.priceMin) {
        state.products = state.products.filter(product => {
          return product.price >= searchParams.priceMin
        })
      }

      if (searchParams.priceMax) {
        state.products = state.products.filter(product => {
          return product.price <= searchParams.priceMax
        })
      }

      if (searchParams.category) {
        state.products = state.products.filter(product => {
          return product.category === searchParams.category
        })
      }

      if (searchParams.sortBy && searchParams.sortBy === 'priceUp') {
        state.products = state.products.sort((x, y) => {
          return x.price - y.price
        })
      } else if (searchParams.sortBy && searchParams.sortBy === 'priceDown') {
        state.products = state.products.sort((x, y) => {
          return y.price - x.price
        })
      }
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
      dispatch(
        productActions.stopLoading()
      )
    }
  }
}

export const getProductsDataByCategory = (searchParams) => {
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
        productActions.sortProducts(searchParams)

      )
      dispatch(
        productActions.stopLoading()
      )
    } catch (error) {
      dispatch(
        productActions.stopLoading()
      )
    }
  }
}

export default productSlice