import { ReactComponent as Logo } from '../../../assets/img/logo.svg'
import { ReactComponent as Mobile } from '../../../assets/img/mobile.svg'
import CartBtn from './CartBtn/CartBtn'
import style from './Header.module.css'
import UserBtn from './UserBtn/UserBtn'

const Header = () => {

  return (
    <div className={style.header + ' container'}>
      <div className={style.logo}>
        <Logo className={style.icon} />
        <p className={style.logoTitle}><span>e-</span>commerce</p>
      </div>
      <div className={style.contacts}>
        <div className={style.mobile}>
          <Mobile />
          <p className={style.tel}>+375(29)123-45-67</p>
        </div>
        <p className={style.schedule}>ежедневно с 10.00 до 22.00</p>
      </div>
      <div className={style.btns}>
        {/* <ComparisonBtn /> */}
        <CartBtn />
        <UserBtn />
      </div>
    </div>
  )
}

export default Header