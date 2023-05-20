import style from './About.module.css'

const About = () => {
  return (
    <div className='container'>
      <div className={style.about}>
        <h1 className={style.title}>О магазине</h1>
        <p className={style.text}>ООО «e-commerce»
          Режим работы: Пн , Вт , Ср , Чт , Пт c 09:00 до 18:00<br />
          Свидетельство No 00000000 Выдано 1 ноября 2000 г. Администрацией г. Минска УНП 123456789<br />
          Республика Беларусь, г. Минск. Дата регистрации в Торговом реестре РБ: 01.12.2001<br />
          <span>Контактный телефон:</span> +375 29 123 45 67<br />
          <span>Адрес для почтовых отправлений:</span> Республика Беларусь, г. Минск, ул. Белорусская 1, офис 1.<br />
          <span>E-mail:</span> e-commerce@gmail.com</p>
        <div className={style.attention}>
          <h3>Обратите внимание!</h3>
          <p>Это страница демонстрационного интернет-магазина.<br />
            Вы не можете оформить реальный заказ на представленные товары и оплатить его.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About