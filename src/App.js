import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { FaHome } from 'react-icons/fa'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>

  );
}

export default App;