import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { calculateTotal } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-total">GRAND TOTAL: ${total}</div>
    </div>
  );
};

export default Cart;
