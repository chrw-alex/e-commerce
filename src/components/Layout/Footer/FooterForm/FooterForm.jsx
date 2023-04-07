import { useState } from 'react'
import style from './FooterForm.module.css'

const FooterForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const nameInputHandler = (e) => {
    setName(e.target.value)
  }

  const emailInputHandler = (e) => {
    setEmail(e.target.value)
  }

  const feedbackHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={feedbackHandler} className={style.form}>
      <div className={style.formInner}>
        <input type='text' className={style.input} placeholder='введите имя' value={name} onChange={nameInputHandler} />
      </div>
      <div className={style.formInner}>
        <input type='email' className={style.input} placeholder='введите email' value={email} onChange={emailInputHandler} />
      </div>
      <div className={style.formInner}>
        <button>хочу много скидок!</button>
      </div>
    </form>
  )
}

export default FooterForm