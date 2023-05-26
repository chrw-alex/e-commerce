import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './api/mockapi';
import { userActions } from './store/user-slice';

import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import ProductPage from './components/Products/ProductPage/ProductPage';
import Info from './components/Info/Info';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Feedback from './components/Feedback/Feedback';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import OrderPage from './components/OrderPage/OrderPage';
import './App.css';

const App = () => {

  const dispatch = useDispatch()
  const isUserAuthorized = useSelector(state => state.user.isUserAuthorized)

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
              <Route path='/info' element={<Info />} />
              <Route path='/about' element={<About />} />
              <Route path='/feedback' element={<Feedback />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/personal' element={isUserAuthorized ? <PersonalInfo /> : null} />
              <Route path='/order' element={<OrderPage />} />
            </Routes>
          </div>
        </ Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
