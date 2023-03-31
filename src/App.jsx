import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import ProductPage from './components/Products/ProductPage/ProductPage';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Layout />
        <div className='main'>
          <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
