import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductsData } from '../../store/products-slice'
import ProductItem from './ProductItem/ProductItem'
import Preloader from "./../UI/Preloader/Preloader";
import style from './Products.module.css'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const isLoading = useSelector(state => state.products.isLoading)

  useEffect(() => {
    dispatch(getProductsData())
  }, [dispatch])

  return (
    <div className={style.products + ' container'}>
      {isLoading ? <Preloader /> : products.map(({ title, id, image, price, description, category, rating }) => {
        return <ProductItem key={id} id={id} title={title} image={image} price={price} description={description} category={category} rating={rating} />
      })}
    </div>
  )
}

export default Products