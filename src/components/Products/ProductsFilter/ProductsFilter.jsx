import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsDataByCategory } from '../../../store/products-slice'
import style from './ProductsFilter.module.css'

const ProductsFilter = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const dispatch = useDispatch()

  const showSearchForm = () => {
    setIsSearchVisible(true)
  }

  const hideSearchForm = () => {
    setIsSearchVisible(false)
  }

  const searchRef = useRef()
  const priceMinRef = useRef()
  const priceMaxRef = useRef()
  const sortingRef = useRef()
  const categoryRef = useRef()

  const searchHandler = (e) => {
    e.preventDefault()

    const searchParams = {
      title: searchRef.current.value,
      priceMin: priceMinRef.current.value,
      priceMax: priceMaxRef.current.value,
      sortBy: sortingRef.current.value,
      category: categoryRef.current.value
    }

    dispatch(getProductsDataByCategory(searchParams))
  }

  return (
    <div className={style.productsFilter}>
      {!isSearchVisible && <button onClick={showSearchForm} className={style.showFormBtn}>расширенный поиск</button>}
      {isSearchVisible && <form className={style.form}>
        <button className={style.close} onClick={hideSearchForm}>x</button>
        <div className={style.categoryFilter}>
          <label className={style.label} htmlFor='category'>Выберите категорию</label>
          <select name='category' id='category' ref={categoryRef}>
            <option value=''>---</option>
            <option value='electronics'>electronics</option>
            <option value='jewelery'>jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
        <div className={style.search}>
          <div className={style.formInner}>
            <label htmlFor='search' className={style.label}>Поиск по названию</label>
            <input type='text' id='search' className={style.input} ref={searchRef} />
          </div>
          <div className={style.price}>
            <div className={style.formInner}>
              <label htmlFor='priceMin' className={style.label}>$Цена от:</label>
              <input type='number' id='priceMin' className={style.input} ref={priceMinRef} />
            </div>
            <div className={style.formInner}>
              <label htmlFor='priceMax' className={style.label}>$Цена до:</label>
              <input type='number' id='priceMax' className={style.input} ref={priceMaxRef} />
            </div>
          </div>
          <div className={style.formInner}>
            <label htmlFor='sorting' className={style.label}>Сортировать по:</label>
            <select name='sorting' id='sorting' className={style.select} ref={sortingRef}>
              <option value=''>---</option>
              <option value='priceUp'>возрастанию цены</option>
              <option value='priceDown'>убыванию цены</option>
            </select>
          </div>
        </div>
        <div className={style.buttonInner}>
          <button className={style.searchBtn} onClick={searchHandler}>Поиск</button>
        </div>
      </form>}
    </div>
  )
}

export default ProductsFilter