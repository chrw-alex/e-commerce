import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateUserInfo } from '../../store/user-slice';
import { PatternFormat } from 'react-number-format';
import Preloader from './../UI/Preloader/Preloader';
import PreloaderSmall from '../UI/PreloaderSmall/PreloaderSmall';
import style from './PersonalInfo.module.css'

const PersonalInfo = () => {

  const currentUser = useSelector(state => state.user.currentUser)
  const isLoading = useSelector(state => state.user.isLoading)
  const isUserDataChanging = useSelector(state => state.user.isUserDataChanging)
  const isChangeSuccess = useSelector(state => state.user.isChangeSuccess)
  console.log(currentUser)
  const [password, setPassword] = useState(currentUser.password)
  const [phone, setPhone] = useState(currentUser.phone)
  const [lastName, setLastName] = useState(currentUser.lastName)
  const [name, setName] = useState(currentUser.name)
  const dispatch = useDispatch()

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value)
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
  }

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const changeUserHandler = (e) => {
    e.preventDefault()

    const userData = {
      id: currentUser.id,
      email: currentUser.email,
      password,
      phone,
      lastName,
      name,
    }

    dispatch(updateUserInfo(userData))
  }

  return (
    <div className='container'>
      <h1 className={style.title}>Личные данные</h1>
      {isLoading && <Preloader />}
      {!isLoading &&
        <div className={style.personal}>
          <p className={style.text}></p>
          <form className={style.form} onSubmit={changeUserHandler}>
            <div className={style.formInner}>
              <label htmlFor='email' className={style.text}>Контактный e-mail</label>
              <input type='email' className={style.input + ' ' + style.noFocus} id='email' value={currentUser.email} readOnly />
            </div>
            <div className={style.formInner}>
              <label htmlFor='password' className={style.text}>Пароль</label>
              <input type='password' className={style.input} id='password' defaultValue={currentUser.password} onChange={passwordHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='phone' className={style.text}>Телефон</label>
              <PatternFormat format='+375 (##) ###-##-##' allowEmptyFormatting mask='_' className={style.input} id='phone' defaultValue={currentUser.phone} onChange={phoneHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='lastName' className={style.text}>Фамилия</label>
              <input type='text' className={style.input} id='lastName' defaultValue={currentUser.lastName} onChange={lastNameHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='name' className={style.text}>Имя</label>
              <input type='text' className={style.input} id='name' defaultValue={currentUser.name} onChange={nameHandler} />
            </div>
            <div className={style.formInner}>
              {isUserDataChanging && <PreloaderSmall />}
              {!isUserDataChanging && !isChangeSuccess && <button className={style.button}>Изменить</button>}
              {isChangeSuccess && <p className={style.success}>Изменения сохранены!</p>}
            </div>
          </form>
        </div>}
    </div>
  )
}

export default PersonalInfo