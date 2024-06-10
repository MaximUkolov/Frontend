import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, sortProducts } from '../redux/productsSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Магазин</h1>
      <div>
        <button onClick={() => dispatch(sortProducts('S'))}>S</button>
        <button onClick={() => dispatch(sortProducts('M'))}>M</button>
        <button onClick={() => dispatch(sortProducts('L'))}>L</button>
        <button onClick={() => dispatch(sortProducts('XS'))}>XS</button>
      </div>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
