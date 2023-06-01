import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
import { NavLink } from 'react-router-dom'
import { cutString } from '../../../helpers/helpers'
import { Rating } from 'react-simple-star-rating'
import style from './ProductItem.module.css'

const ProductItem = ({ title, id, image, price, rating }) => {

  const [isActionsVisible, setIsActionsVisible] = useState(false)
  const dispatch = useDispatch()

  const addItemHandler = () => {
    const item = {
      id,
      title,
      image,
      price
    }

    dispatch(cartActions.addItem(item))
  }

  return (
    <div className={style.item} onMouseEnter={() => setIsActionsVisible(true)} onMouseLeave={() => setIsActionsVisible(false)}>
      <div className={style.info}>
        <NavLink to={`/products/${id}`} className={style.title} title={title}>{cutString(title, 15)}</NavLink>
        <NavLink to={`/products/${id}`} className={style.link}>
          <img className={style.img} src={image} alt='img' />
        </NavLink>
        <div className={style.price}>{`$${price}`}</div>
        <Rating size={24} initialValue={Math.round(rating.rate)} fillColor='#0abda0' />
        <div className={style.count}>{rating.rate.toFixed(1)} / {rating.count}</div>
      </div>
      {isActionsVisible && <div className={style.actions}>
        <button onClick={addItemHandler}>в корзину</button>
      </div>}
    </div>
  )
}

export default ProductItem