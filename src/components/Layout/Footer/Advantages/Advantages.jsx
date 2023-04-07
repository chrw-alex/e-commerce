import { ReactComponent as Quality } from '../../../../assets/img/quality.svg'
import { ReactComponent as Price } from '../../../../assets/img/price.svg'
import { ReactComponent as Protection } from '../../../../assets/img/protection.svg'
import { ReactComponent as Hours } from '../../../../assets/img/hours.svg'
import style from './Advantages.module.css'

const Advantages = () => {
  return (
    <div className={style.advantagesInner}>
      <div className={style.advantage}>
        <Quality />
        <div>
          <h3>Гарантия качества</h3>
          <p>Мы продаем <br /> сертифицированный <br /> товар</p>
        </div>
      </div>
      <div className={style.advantage}>
        <Price />
        <div>
          <h3>Честные цены</h3>
          <p>Все цены на сайте <br /> действительны <br /> и актуальны</p>
        </div>
      </div>
      <div className={style.advantage}>
        <Protection />
        <div>
          <h3>Надежный сервис</h3>
          <p>Гарантированная защита <br /> ваших платежей</p>
        </div>
      </div>
      <div className={style.advantage}>
        <Hours />
        <div>
          <h3>Поддержка 24/7</h3>
          <p>Специалисты поддержки <br /> всегда на связи</p>
        </div>
      </div>
    </div>
  )
}

export default Advantages