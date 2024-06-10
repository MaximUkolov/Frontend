import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <div className="items">
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
