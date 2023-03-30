import { cutString } from '../../../helpers/helpers'
import StarRating from 'react-svg-star-rating'
import style from './ProductItem.module.css'

const ProductItem = ({ title, id, image, price, description, category, rating }) => {

  return (
    <div className={style.item}>
      <div className={style.title}>{cutString(title, 15)}</div>
      <img className={style.img} src={image} alt="img" />
      <div className={style.price}>{`$${price}`}</div>
      <div className={style.rating}>
        <StarRating size='26' initialRating={rating.rate} roundedCorner={false} />
        <span className={style.count}>{rating.count}</span>
      </div>
    </div>
  )
}

export default ProductItem