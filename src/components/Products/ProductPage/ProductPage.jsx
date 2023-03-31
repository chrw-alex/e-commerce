import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProduct } from '../../../store/products-slice'
import StarRating from 'react-svg-star-rating'
import Preloader from '../../UI/Preloader/Preloader'
import { ReactComponent as Back } from '../../../assets/img/back.svg'
import style from './ProductPage.module.css'

const ProductPage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.products.isLoading)
  const currentProduct = useSelector(state => state.products.currentProduct)

  useEffect(() => {
    dispatch(getCurrentProduct(params.id))
  }, [dispatch, params.id])

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading &&
        <>
          <div className={style.productPage + ' container'}>
            <Link to='/products' className={style.back}>
              <Back className={style.backIcon} />
              <p className={style.link}>Назад</p>
            </Link>
            <div className={style.productCard}>
              <div className={style.imgInner}>
                <img className={style.img} src={currentProduct.image} alt='img' />
                <div className={style.actions}>
                  <button>в корзину</button>
                  <button>быстрый заказ</button>
                </div>
              </div>
              <div className={style.info}>
                <p className={style.title}>{currentProduct.title}</p>
                <p className={style.category}>{currentProduct.category}</p>
                <p className={style.description}>{currentProduct.description}</p>
                <div className={style.rating}>
                  <StarRating initialRating={Math.round(currentProduct?.rating?.rate)} roundedCorner={false} />
                  <p className={style.count}>{currentProduct.rating.rate.toFixed(1)} / {currentProduct.rating.count}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>

  )
}

export default ProductPage