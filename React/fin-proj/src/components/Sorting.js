import React from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from '../redux/productsSlice';

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div className="sorting">
      <select onChange={handleSort}>
        <option value="all">All Sizes</option>
        <option value="S">S</option>
        <option value="XS">XS</option>
        <option value="L">L</option>
        <option value="M">M</option>
      </select>
    </div>
  );
};

export default Sorting;
