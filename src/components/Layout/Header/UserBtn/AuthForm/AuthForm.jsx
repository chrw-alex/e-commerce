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

  return (
    <form onSubmit={(e) => submitHandler(e, email, password)} className={style.form}>
      <div className={style.formInner}>
        <input type='email' placeholder='Введите email' value={email} onChange={emailHandler} />
      </div>
      <div className={style.formInner}>
        <input type='password' placeholder='Введите пароль' value={password} onChange={passwordHandler} />
      </div>
      <div className={style.formInner}>
        {isLoading ? <PreloaderSmall /> : <button type='submit'>{btnTitle}</button>}
      </div>
      {error && <div className={style.formInner}>
        <p className={style.error}>{error}</p>
      </div>}
    </form>
  )
}

export default AuthForm