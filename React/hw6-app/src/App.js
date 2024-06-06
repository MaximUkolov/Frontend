import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
