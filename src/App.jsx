import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './api/mockapi';
import { userActions } from './store/user-slice';

import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import ProductPage from './components/Products/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import './App.css';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    if (email) {
      dispatch(userActions.startLoading())
      getUser(email)
        .then((res) => dispatch(userActions.updateUser(res)))
        .finally(() => dispatch(userActions.finishLoading()))
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className='App'>
        <Layout >
          <div className='main'>
            <Routes>
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </ Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
