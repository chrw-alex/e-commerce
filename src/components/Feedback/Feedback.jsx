import style from './Feedback.module.css'

const Feedback = () => {
  return (
    <div className='container'>
      <div className={style.feedback}>
        <h1 className={style.title}>Обратная связь</h1>
        <p className={style.text}>Внесите Ваши данные, а также Ваше сообщение или вопрос в форму. Сообщение будет отправлено администратору по электронной почте. Все поля обязательны для заполнения.</p>
        <form className={style.form}>
          <div className={style.formInner}>
            <label htmlFor='email'>Ваш email</label>
            <input type='email' id='email' />
          </div>
          <div className={style.formInner}>
            <label htmlFor='name'>Ваше имя</label>
            <input type='text' id='name' />
          </div>
          <div className={style.formInner}>
            <label htmlFor='message'>Ваше сообщение</label>
            <textarea name='message' id='message'></textarea>
          </div>
          <div>
            <button className={style.button}>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback