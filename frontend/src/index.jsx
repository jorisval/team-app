import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Blog from './components/pages/Blog';
import Article from './components/pages/Article';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Legal from './components/pages/Legal';
import { CartProvider, HeaderProvider } from './components/utils/context';
import StyledBase from './components/styles/base';
import StyledLayouts from './components/styles/Layouts';
import StyledComponents from './components/styles/Components';
import Error404 from './components/pages/error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HeaderProvider>
        <CartProvider>
          <StyledBase />
          <StyledLayouts />
          <StyledComponents />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/faq' element={<Legal />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/article/:articleId' element={<Article />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </CartProvider>
      </HeaderProvider>
    </Router>
  </React.StrictMode>
);

