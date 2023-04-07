import { ReactComponent as Vk } from '../../../../assets/img/vkontakte.svg'
import { ReactComponent as Instagram } from '../../../../assets/img/instagram.svg'
import { ReactComponent as Twitter } from '../../../../assets/img/twitter.svg'
import { ReactComponent as Facebook } from '../../../../assets/img/facebook.svg'
import style from './FooterInfo.module.css'

const FooterInfo = () => {
  return (
    <div className={style.footerInfo}>
      <div className={style.infoInner}>
        <p>ООО «e-commerce» <br /> Режим работы: Пн , Вт , Ср , Чт , Пт c 09:00 до 18:00 <br /> Свидетельство No 00000000 Выдано 1 ноября 2000 г. Администрацией г. Минска УНП 123456789 <br /> Республика Беларусь, г. Минск. Дата регистрации в Торговом реестре РБ: 01.12.2001</p>
      </div>
      <div className={style.contacts}>
        <a href='https://facebook.com' target='_blank' rel="noreferrer">
          <Facebook />
        </a>
        <a href='https://twitter.com' target='_blank' rel="noreferrer">
          <Twitter />
        </a>
        <a href='https://vk.com' target='_blank' rel="noreferrer">
          <Vk />
        </a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer">
          <Instagram />
        </a>

      </div>
    </div>
  )
}

export default FooterInfo