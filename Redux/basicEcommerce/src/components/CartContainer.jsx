import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useSelector ,useDispatch} from 'react-redux';
import { calculateTheTotal, } from '../features/cart/cartSlice';
import { toggleModal } from '../features/Modal/modalSlice';
import { getCartItems } from '../features/cart/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount,isLoading } = useSelector((state) => state.cart);

  useEffect(()=>{
    dispatch(calculateTheTotal())

  },[cartItems])



  useEffect(()=>{
    dispatch(getCartItems())

  },[])
  if (isLoading) {
        return (
          <div className='loading'>
            <h1>Loading...</h1>
          </div>
        );
      }
  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }


  
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={()=>dispatch(toggleModal())}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;