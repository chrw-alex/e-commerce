import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cutString } from '../../../helpers/helpers'
import StarRating from 'react-svg-star-rating'
import style from './ProductItem.module.css'

const ProductItem = ({ title, id, image, price, description, category, rating }) => {

  const [isActionsVisible, setIsActionsVisible] = useState(false)

  return (
    <div className={style.item} onMouseEnter={() => setIsActionsVisible(true)} onMouseLeave={() => setIsActionsVisible(false)}>
      <div className={style.info}>
        <NavLink to={`/products/${id}`} className={style.title} title={title}>{cutString(title, 15)}</NavLink>
        <NavLink to={`/products/${id}`} className={style.link}>
          <img className={style.img} src={image} alt='img' />
        </NavLink>
        <div className={style.price}>{`$${price}`}</div>
        <StarRating size='26' initialRating={Math.round(rating.rate)} roundedCorner={false} />
        <div className={style.count}>{rating.rate.toFixed(1)} / {rating.count}</div>
      </div>
      {isActionsVisible && <div className={style.actions}>
        <button>в корзину</button>
        <button>быстрый заказ</button>
      </div>}
    </div>
  )
}

export default ProductItem