import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductsData } from './store/products-slice';

import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import './App.css';

const App = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProductsData())
  }, [dispatch])

  console.log(products)

  return (
    <div className="App">
      <Layout />
      <Products />
    </div>
  );
}

export default App;
