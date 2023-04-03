import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProductsData } from '../../store/products-slice'
import ProductItem from './ProductItem/ProductItem'
import Preloader from "./../UI/Preloader/Preloader";
import style from './Products.module.css'
import ProductsFilter from './ProductsFilter/ProductsFilter';

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const isLoading = useSelector(state => state.products.isLoading)


  useEffect(() => {
    dispatch(getProductsData())
  }, [dispatch])

  return (
    <div className={style.products + ' container'}>
      <ProductsFilter />
      <div className={style.productsList}>
        {isLoading ? <Preloader /> : products.map(({ title, id, image, price, description, category, rating }) => {
          return <ProductItem key={id} id={id} title={title} image={image} price={price} description={description} category={category} rating={rating} />
        })}
      </div>
    </div>

  )
}

export default Products