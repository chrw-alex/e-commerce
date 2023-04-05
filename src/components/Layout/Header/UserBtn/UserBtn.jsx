import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { registerNewUser, logIn, logOut } from '../../../../store/user-slice'
import { userActions } from '../../../../store/user-slice'
import { ReactComponent as User } from '../../../../assets/img/user.svg'
import AuthForm from './AuthForm/AuthForm'
import UserMenu from './UserMenu/UserMenu'
import style from './UserBtn.module.css'
import FormInner from './FormInner/FormInner'

const UserBtn = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const isUserAuthorized = useSelector(state => state.user.isUserAuthorized)
  const error = useSelector(state => state.user.error)

  const [isAuthVisible, setIsAuthVisible] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(true)
  const [isRegistrationActive, setIsRegistrationActive] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const dispatch = useDispatch()

  const toggleAuthVisibility = () => {
    setIsAuthVisible(!isAuthVisible)
  }

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible)
  }
  const showLogin = () => {
    setIsLoginActive(true)
    setIsRegistrationActive(false)
  }

  const showRegistration = () => {
    setIsLoginActive(false)
    setIsRegistrationActive(true)
  }

  const registrationHandler = (e, email, password) => {
    e.preventDefault()
    dispatch(userActions.startLoading())

    const newUser = {
      userId: Math.random().toString(),
      email,
      password,
    }
    dispatch(registerNewUser(newUser))
      .finally(() => {
        if (error) {
          setIsAuthVisible(false)
        }
        dispatch(userActions.finishLoading())
      })
  }

  const loginHandler = (e, email, password) => {
    e.preventDefault()
    dispatch(userActions.startLoading())

    const loginData = {
      email,
      password
    }

    dispatch(logIn(loginData))
      .finally(() => {
        if (error) {
          setIsAuthVisible(false)
        }
        dispatch(userActions.finishLoading())
      })
  }

  const logoutHandler = () => {
    dispatch(logOut())
      .finally(() => setIsMenuVisible(false))
  }

  return (
    <div className={style.userBtn}>
      <div className={style.userInfo}>
        <User className={style.icon} />
        <div>
          {isUserAuthorized && <p onClick={toggleMenuVisibility}>{currentUser.email}</p>}
          {!isUserAuthorized && <p onClick={toggleAuthVisibility}>вход</p>}
        </div>
      </div>
      {isAuthVisible &&
        <FormInner isLoginActive={isLoginActive} showLogin={showLogin} isRegistrationActive={isRegistrationActive} showRegistration={showRegistration}>
          {isLoginActive && <AuthForm btnTitle='войти' submitHandler={loginHandler} />}
          {isRegistrationActive && <AuthForm btnTitle='зарегистрироваться' submitHandler={registrationHandler} />}
        </FormInner>}
      {isMenuVisible && <div className={style.menuInner}>
        <UserMenu logoutHandler={logoutHandler} />
      </div>}
    </div>
  )
}

export default UserBtn