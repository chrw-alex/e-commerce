import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import style from './Cart.module.css'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)

  return (
    <div className={style.cart + ' container'}>
      {cartItems.length === 0 && <div className={style.emptyCart}>
        <p>В корзине нет товаров</p>
        <Link to='/products' className={style.link} >В магазин</Link>
      </div>}
      {cartItems.map((item) => {
        return <CartItem key={item.id} id={item.id} price={item.price} image={item.image} title={item.title} quantity={item.quantity} total={item.total} />
      })}
      {cartItems.length > 0 && <div className={style.order}>
        <div className={style.total}>Итого:
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <Link to='/order'>
            <button className={style.button}>Заказать</button>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default Cart