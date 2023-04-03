import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as Cart } from '../../../../assets/img/cart.svg'
import style from './CartBtn.module.css'

const CartBtn = () => {

  const itemsAmount = useSelector(state => state.cart.itemsAmount)

  return (
    <Link to='/cart' className={style.link}>
      <div className={style.cartBtn}>
        <Cart className={style.icon} />
        <p>корзина</p>
        <div className={style.amount}>{itemsAmount}</div>
      </div>
    </Link>
  )
}

export default CartBtn