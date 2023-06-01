import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PatternFormat } from 'react-number-format'
import style from './ContactsInfo.module.css'

const ContactsInfo = () => {

  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <div className={style.personal}>
      <p className={style.formTitle}>Контактная информация</p>
      <p className={style.text}>Проверьте контактную информацию. Вы можете изменить данные <Link to='/personal' className={style.link}>здесь</Link></p>
      <form className={style.form}>
        <div className={style.formInner}>
          <label htmlFor='email' className={style.label}>e-mail</label>
          <input type='email' className={style.input} id='email' defaultValue={currentUser.email} readOnly />
        </div>
        <div className={style.formInner}>
          <label htmlFor='phone' className={style.label}>Телефон</label>
          <PatternFormat format='+375 (##) ###-##-##' allowEmptyFormatting mask='_' className={style.input} id='phone' defaultValue={currentUser.phone} readOnly />
        </div>
        <div className={style.formInner}>
          <label htmlFor='lastName' className={style.label}>Фамилия</label>
          <input type='text' className={style.input} id='lastName' defaultValue={currentUser.lastName} readOnly />
        </div>
        <div className={style.formInner}>
          <label htmlFor='name' className={style.label}>Имя</label>
          <input type='text' className={style.input} id='name' defaultValue={currentUser.name} readOnly />
        </div>
        <div className={style.formInner}>
          <label htmlFor='address' className={style.label}>Адрес доставки</label>
          <input type='text' className={style.input} id='address' defaultValue={currentUser.address} readOnly />
        </div>
      </form>
    </div>
  )
}

export default ContactsInfo