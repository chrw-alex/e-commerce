import { createSlice } from '@reduxjs/toolkit';
import { getUser, registerUser, changeUser } from '../api/mockapi';

const initialState = {
  currentUser: {},
  isUserAuthorized: false,
  error: '',
  isLoading: false,
  isAuthSuccess: false,
  isUserDataChanging: false,
  isChangeSuccess: false
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
    updateAuthStatus(state, action) {
      state.isAuthSuccess = action.payload
    },
    startDataChanging(state) {
      state.isUserDataChanging = true
    },
    finishDataChanging(state) {
      state.isUserDataChanging = false
    },
    setDataChangeSuccessTrue(state) {
      state.isChangeSuccess = true
    },
    setDataChangeSuccessFalse(state) {
      state.isChangeSuccess = false
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
      if (user.email.trim().length === 0 || user.password.trim().length === 0) {
        dispatch(userActions.updateError('заполните все поля'))
        dispatch(userActions.finishLoading())
        return
      }
      if (!user.email.includes('@')) {
        dispatch(userActions.updateError('некорректный email'))
        dispatch(userActions.finishLoading())
      } else if (user.password.trim().length < 8) {
        dispatch(userActions.updateError('пароль должен содержать не менее 8 символов'))
        dispatch(userActions.finishLoading())
      } else {
        await dispatch(userActions.updateUser(res.data))
        localStorage.setItem('userEmail', user.email)
        dispatch(userActions.finishLoading())
        dispatch(userActions.updateAuthStatus(true))
        dispatch(userActions.updateError(''))
      }
    } catch (error) {
      console.log(error)
      dispatch(userActions.finishLoading())
    }
  }
}

export const logIn = (loginData) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.startLoading())
      const res = await getUser(loginData.email)
      if (loginData.email.trim().length === 0 || loginData.password.trim().length === 0) {
        dispatch(userActions.updateError('заполните все поля'))
        dispatch(userActions.finishLoading())
        return
      }

      if (res === undefined) {
        dispatch(userActions.updateError('email не зарегистрирован'))
        dispatch(userActions.finishLoading())
      }

      if (res.password === loginData.password) {
        await dispatch(userActions.updateUser(res))
        localStorage.setItem('userEmail', loginData.email)
        dispatch(userActions.updateError(''))
        dispatch(userActions.updateAuthStatus(true))
        dispatch(userActions.finishLoading())
      } else {
        dispatch(userActions.updateError('неверный пароль'))
        dispatch(userActions.finishLoading())
      }
    } catch (error) {
      console.log(error)
      dispatch(userActions.finishLoading())
    }
  }
}


export const logOut = () => {
  return async (dispatch) => {
    try {
      await dispatch(userActions.removeUser())
      localStorage.removeItem('userEmail')
    } catch (error) {
      console.log(error)
    }
  }
}


export const updateUserInfo = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.startDataChanging())
      const res = await changeUser(userData.id, userData)
      await dispatch(userActions.updateUser(res.data))
      dispatch(userActions.finishDataChanging())
      dispatch(userActions.setDataChangeSuccessTrue())
      setTimeout(() => {
        dispatch(userActions.setDataChangeSuccessFalse())
      }, 3000)

    } catch (error) {
      console.log(error)
      dispatch(userActions.finishDataChanging())
    }
  }
}

export default userSlice