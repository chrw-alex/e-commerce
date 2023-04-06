import { useState } from 'react'
import { useSelector } from 'react-redux'
import PreloaderSmall from "./../../../../UI/PreloaderSmall/PreloaderSmall";
import style from './AuthForm.module.css'

const AuthForm = ({ submitHandler, btnTitle }) => {

  const error = useSelector(state => state.user.error)
  const isLoading = useSelector(state => state.user.isLoading)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const emailInputStyle = error === 'некорректный email' || error === 'email не зарегистрирован' ? style.inputError + ' ' + style.input : style.input
  const passwordInputStyle = error === 'пароль должен содержать не менее 8 символов' || error === 'неверный пароль' ? style.inputError + ' ' + style.input : style.input

  return (
    <form onSubmit={(e) => submitHandler(e, email, password)} className={style.form}>
      <div className={style.formInner}>
        <input type='email' placeholder='Введите email' value={email} onChange={emailHandler} className={emailInputStyle} />
      </div>
      <div className={style.formInner}>
        <input type='password' placeholder='Введите пароль' value={password} onChange={passwordHandler} className={passwordInputStyle} />
      </div>
      <div className={style.formInner + ' ' + style.actions}>
        {isLoading ? <PreloaderSmall /> : <button type='submit'>{btnTitle}</button>}
      </div>
      {error && <div className={style.formInner + ' ' + style.errorInner}>
        <p className={style.error}>{error}</p>
      </div>}
    </form>
  )
}

export default AuthForm