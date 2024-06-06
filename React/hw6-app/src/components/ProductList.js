import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../productsSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>{product.available ? 'Available' : 'Not Available'}</p>
          <div className="buttons">
            <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Toggle Availability
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
