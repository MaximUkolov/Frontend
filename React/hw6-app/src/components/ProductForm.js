import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../productsSlice';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: uuidv4(), name, description, price, available }));
    setName('');
    setDescription('');
    setPrice('');
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
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
