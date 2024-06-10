import React from 'react';
import Hero from '../components/Hero';
import Category from '../components/Category';
import ProductList from '../components/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <section className="categories">
        <Category image="women.jpg" text="30% OFF FOR WOMEN" />
        <Category image="men.jpg" text="HOT DEAL FOR MEN" />
        <Category image="kids.jpg" text="NEW ARRIVALS FOR KIDS" />
        <Category image="accessories.jpg" text="LUXURIOUS & TRENDY ACCESSORIES" />
      </section>
      <section className="featured-items">
        <h2>Featured Items</h2>
        <p>Shop for items based on what we featured in this week</p>
        <ProductList products={products} />
      </section>
    </div>
  );
};

export default Home;
