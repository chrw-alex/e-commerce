import style from './FormInner.module.css'

const FormInner = (props) => {
  return (
    <div className={style.formInner}>
      <header>
        <div className={props.isLoginActive ? style.active + ' ' + style.login : style.login} onClick={props.showLogin}>вход</div>
        <div className={props.isRegistrationActive ? style.active + ' ' + style.registration : style.registration} onClick={props.showRegistration}>регистрация</div>
      </header>
      <div className={style.form}>
        {props.children}
      </div>
    </div>
  )
}

export default FormInner