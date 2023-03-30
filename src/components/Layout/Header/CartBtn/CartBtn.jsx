import { ReactComponent as Cart } from '../../../../assets/img/cart.svg'
import style from './CartBtn.module.css'

const CartBtn = () => {
  return (
    <div className={style.cartBtn}>
      <Cart className={style.icon} />
      <p>корзина</p>
      <div className={style.amount}>2</div>
    </div>
  )
}

export default CartBtn