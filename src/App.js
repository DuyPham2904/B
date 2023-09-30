import './App.css';
import React, { useEffect, useState } from 'react';
import { BsArrowUp } from "react-icons/bs";
import { AppProvider } from './AppContext';
import BookList from './components/BookList/BookList';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import BookDetail from './pages/bookdetail/BookDetail';
import Cart from './pages/cart/Cart'
import { Route, Routes } from 'react-router-dom';
import CheckOut from './pages/checkout/CheckOut';
import Bookstore from './pages/bookstore/Bookstore';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Order_received from './pages/order_received/order_received';
import Contacts from './pages/contacts/contacts';
function App() {
  const home_scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/BookLovers/bookdetail' element={<BookDetail />}></Route>
          <Route path='/BookLvers/bookstore' element={<Bookstore />}></Route>
          <Route path='/BookLvers/seach' element={<Search />}></Route>
          <Route path='/BookLvers/cart' element={<Cart />}></Route>
          <Route path='/BookLvers/cart/checkout' element={<CheckOut />}></Route>
          <Route path='/BookLvers/search' element={<Search />}></Route>
          <Route path='/BookLvers/about' element={<Contacts />}></Route>
          <Route path='/order_received' element={<Order_received />}></Route>
          <Route path='/*' element={<h1>Eror Page</h1>}></Route>
        </Routes>
        <button className='home_scroll'
          onClick={home_scroll}
        ><BsArrowUp className='btn_scroll' /></button>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
