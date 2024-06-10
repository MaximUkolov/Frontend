import React from 'react';

const Category = ({ image, text }) => (
  <div className="category">
    <img src={image} alt={text} />
    <div className="category-text">{text}</div>
  </div>
);

export default Category;
