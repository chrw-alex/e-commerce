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

  const [password, setPassword] = useState(currentUser.password)
  const [phone, setPhone] = useState(currentUser.phone)
  const [lastName, setLastName] = useState(currentUser.lastName)
  const [name, setName] = useState(currentUser.name)
  const [address, setAddress] = useState(currentUser.address)
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

  const addressHandler = (e) => {
    setAddress(e.target.value)
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
      address,
    }

    dispatch(updateUserInfo(userData))
  }

  return (
    <div className='container'>
      <h1 className={style.title}>Личные данные</h1>
      {isLoading && <Preloader />}
      {!isLoading &&
        <div className={style.personal}>
          <form className={style.form} onSubmit={changeUserHandler}>
            <div className={style.formInner}>
              <label htmlFor='email' className={style.label}>Контактный e-mail</label>
              <input type='email' className={style.input + ' ' + style.noFocus} id='email' defaultValue={currentUser.email} readOnly />
            </div>
            <div className={style.formInner}>
              <label htmlFor='password' className={style.label}>Пароль</label>
              <input type='password' className={style.input} id='password' defaultValue={currentUser.password} onChange={passwordHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='phone' className={style.label}>Телефон</label>
              <PatternFormat format='+375 (##) ###-##-##' allowEmptyFormatting mask='_' className={style.input} id='phone' defaultValue={currentUser.phone} onChange={phoneHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='lastName' className={style.label}>Фамилия</label>
              <input type='text' className={style.input} id='lastName' defaultValue={currentUser.lastName} onChange={lastNameHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='name' className={style.label}>Имя</label>
              <input type='text' className={style.input} id='name' defaultValue={currentUser.name} onChange={nameHandler} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='address' className={style.label}>Адрес доставки</label>
              <input type='text' className={style.input} id='address' defaultValue={currentUser.address} onChange={addressHandler} />
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