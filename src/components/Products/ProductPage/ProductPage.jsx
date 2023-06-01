import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../store/cart-slice'
import { getCurrentProduct } from '../../../store/products-slice'
import Preloader from '../../UI/Preloader/Preloader'
import { Rating } from 'react-simple-star-rating'
import { ReactComponent as Back } from '../../../assets/img/back.svg'
import style from './ProductPage.module.css'

const ProductPage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.products.isLoading)
  const currentProduct = useSelector(state => state.products.currentProduct)
  const currentUser = useSelector(state => state.user.currentUser)
  const cart = useSelector(state => state.cart.cart)

  useEffect(() => {
    dispatch(getCurrentProduct(params.id))
  }, [dispatch, params.id])

  const addItemHandler = () => {
    const item = {
      id: currentProduct.id,
      title: currentProduct.title,
      image: currentProduct.image,
      price: currentProduct.price
    }
    dispatch(cartActions.addItem(item))
  }

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading &&
        <div className={style.productPage + ' container'}>
          <Link to='/products' className={style.back}>
            <Back className={style.backIcon} />
            <p className={style.link}>Назад</p>
          </Link>
          <div className={style.productCard}>
            <div className={style.imgInner}>
              <img className={style.img} src={currentProduct.image} alt='img' />
              <div className={style.actions}>
                <button onClick={addItemHandler}>в корзину</button>
              </div>
            </div>
            <div className={style.info}>
              <p className={style.title}>{currentProduct.title}</p>
              <p className={style.category}>{currentProduct.category}</p>
              <p className={style.description}>{currentProduct.description}</p>
              <div className={style.rating}>
                <Rating initialValue={Math.round(currentProduct?.rating?.rate)} fillColor='#0abda0' />
                <p className={style.count}>{currentProduct?.rating?.rate.toFixed(1)} / {currentProduct?.rating?.count}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default ProductPage