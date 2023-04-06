import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { registerNewUser, logIn, logOut } from '../../../../store/user-slice'
import { userActions } from '../../../../store/user-slice'
import { ReactComponent as User } from '../../../../assets/img/user.svg'
import Modal from '../../../UI/Modal/Modal'
import AuthForm from './AuthForm/AuthForm'
import UserMenu from './UserMenu/UserMenu'
import FormInner from './FormInner/FormInner'
import style from './UserBtn.module.css'

const UserBtn = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const isUserAuthorized = useSelector(state => state.user.isUserAuthorized)
  const isAuthSuccess = useSelector(state => state.user.isAuthSuccess)

  const [isAuthVisible, setIsAuthVisible] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(true)
  const [isRegistrationActive, setIsRegistrationActive] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthSuccess) {
      setIsAuthVisible(false)
    }
  }, [isAuthSuccess])

  useEffect(() => {
    if (!isAuthVisible) {
      dispatch(userActions.updateAuthStatus(false))
    }
  }, [isAuthVisible, dispatch])

  const showAuthWindow = () => {
    setIsAuthVisible(true)
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

    const newUser = {
      userId: Math.random().toString(),
      email,
      password,
    }
    dispatch(registerNewUser(newUser))
  }

  const loginHandler = (e, email, password) => {
    e.preventDefault()

    const loginData = {
      email,
      password
    }

    dispatch(logIn(loginData))
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
          {!isUserAuthorized && <p onClick={showAuthWindow}>вход</p>}
        </div>
      </div>
      {isAuthVisible &&
        <Modal setIsAuthVisible={setIsAuthVisible}>
          <FormInner isLoginActive={isLoginActive} showLogin={showLogin} isRegistrationActive={isRegistrationActive} showRegistration={showRegistration}>
            {isLoginActive && <AuthForm btnTitle='войти' submitHandler={loginHandler} />}
            {isRegistrationActive && <AuthForm btnTitle='зарегистрироваться' submitHandler={registrationHandler} />}
          </FormInner>
        </Modal>}
      {isMenuVisible && <div className={style.menuInner}>
        <UserMenu logoutHandler={logoutHandler} />
      </div>}
    </div>
  )
}

export default UserBtn