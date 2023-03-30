import { useSelector } from 'react-redux'
import ProductItem from './ProductItem/ProductItem'
import style from './Products.module.css'

const Products = () => {
  const products = useSelector(state => state.products.products)

  return (
    <div className={style.products + ' container'}>
      {products.map(({ title, id, image, price, description, category, rating }) => {
        return <ProductItem key={id} id={id} title={title} image={image} price={price} description={description} category={category} rating={rating} />
      })}
    </div>
  )
}

export default Products