import { useSelector } from 'react-redux'
import { PatternFormat } from 'react-number-format'
import style from './ContactsInfo.module.css'

const ContactsInfo = () => {

  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <div className={style.personal}>
      <p className={style.formTitle}>Контактная информация</p>
      <form className={style.form}>
        <div className={style.formInner}>
          <label htmlFor='email' className={style.label}>e-mail</label>
          <input type='email' className={style.input} id='email' value={currentUser.email} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='phone' className={style.label}>Телефон</label>
          <PatternFormat format='+375 (##) ###-##-##' allowEmptyFormatting mask='_' className={style.input} id='phone' defaultValue={currentUser.phone} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='lastName' className={style.label}>Фамилия</label>
          <input type='text' className={style.input} id='lastName' defaultValue={currentUser.lastName} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='name' className={style.label}>Имя</label>
          <input type='text' className={style.input} id='name' defaultValue={currentUser.name} />
        </div>
        <div className={style.formInner}>
          <label htmlFor='address' className={style.label}>Адрес доставки</label>
          <input type='text' className={style.input} id='address' defaultValue={currentUser.address} />
        </div>
      </form>
    </div>
  )
}

export default ContactsInfo