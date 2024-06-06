import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../productsSlice';

const ProductEdit = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, name, description, price, available }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default ProductEdit;
