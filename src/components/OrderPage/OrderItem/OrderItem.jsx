import style from './OrderItem.module.css'

const OrderItem = ({ image, title, quantity, total }) => {
  return (
    <div className={style.item}>
      <img className={style.img} src={image} alt='item' />
      <div className={style.info}>
        <p className={style.title}>{title}</p>
        <p className={style.details}>{quantity} шт.</p>
        <p className={style.details}>${total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default OrderItem