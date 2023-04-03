import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
import style from './CartItem.module.css'

const CartItem = ({ id, image, title, price, quantity, total }) => {

  const dispatch = useDispatch()

  const item = {
    id,
    title,
    image,
    price
  }
  const addItemHandler = () => {
    dispatch(cartActions.addItem(item))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id))
  }


  return (
    <div className={style.item}>
      <div className={style.imgInner}>
        <img className={style.img} src={`${image}`} alt='img' />
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.details}>
          <div className={style.actions}>
            <button onClick={removeItemHandler}>-</button>
            <span className={style.quantity}>{quantity}</span>
            <button onClick={addItemHandler}>+</button>
          </div>
          <div className={style.price}>
            ${total.toFixed(2)}{" "}
            <span className={style.itemPrice}>
              (${price.toFixed(2)} / шт.)
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem