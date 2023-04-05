import { createSlice } from '@reduxjs/toolkit';
import { getUser, registerUser } from '../api/mockapi';

const initialState = {
  currentUser: {},
  isUserAuthorized: false,
  error: '',
  isLoading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.currentUser = action.payload
      state.isUserAuthorized = true
    },
    removeUser(state) {
      state.currentUser = {}
      state.isUserAuthorized = false
    },
    updateError(state, action) {
      state.error = action.payload
    },
    startLoading(state) {
      state.isLoading = true
    },
    finishLoading(state) {
      state.isLoading = false
    },
  }
})

export const userActions = userSlice.actions

export const registerNewUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(
        userActions.startLoading()
      )
      const res = await registerUser(user)
      await dispatch(
        userActions.updateUser(res.data)
      )
      localStorage.setItem('userEmail', user.email)
      dispatch(
        userActions.finishLoading()
      )
    } catch (error) {
      console.log(error)
      dispatch(
        userActions.finishLoading()
      )
    }
  }
}

export const logIn = (loginData) => {
  return async (dispatch) => {
    try {
      const res = await getUser(loginData.email)
      if (res.password === loginData.password) {
        await dispatch(
          userActions.updateUser(res)
        )
        localStorage.setItem('userEmail', loginData.email)
        dispatch(
          userActions.updateError('')
        )
      } else {
        dispatch(
          userActions.updateError('неверный логин или пароль')
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
}


export const logOut = () => {
  return async (dispatch) => {
    try {
      dispatch(
        userActions.startLoading()
      )
      await dispatch(
        userActions.removeUser()
      )
      localStorage.removeItem('userEmail')
      dispatch(
        userActions.finishLoading()
      )
    } catch (error) {
      console.log(error)
      dispatch(
        userActions.finishLoading()
      )
    }
  }
}

export default userSlice