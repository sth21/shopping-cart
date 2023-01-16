import React, { useEffect } from 'react';
import '../styling/cart.css';

export default function Cart(props) {

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('cart');

    return () => body.classList.remove('cart');
  }, []);

  const getOrderItem = (e) => {
    return { ...props.order[ e.target.parentNode.parentNode.parentNode.dataset.index ]};
  }

  const removeOne = (e) => {
    const item = getOrderItem(e);
    item.quantity = -1;
    props.updateOrder(item);
  };

  const removeAll = (e) => {
    const item = getOrderItem(e);
    item.quantity *= -1;
    props.updateOrder(item);
  };

  const renderOrder = () => (
    <>
      { renderCart() }
      { renderCheckout() }
    </>
  );

  const renderCart = () => {
    return props.order.map((item, index) => {
      return (
        <div className="cart-item-wrapper" key={ item.key } data-index={ index } >
          <img src={ item.imgSrc } alt={ "An image of a " + item.name}></img>
          <div className="cart-text-wrapper">
            <div className="cart-item-header">
              <h4>{ item.name }</h4>
              <p>{ "$" + Math.round( (item.quantity * item.price + Number.EPSILON) * 100 ) / 100 }</p>
            </div>
            <p>Count: { item.quantity }</p>
            <div>
              <button onClick={ removeOne }>Remove One</button>
              <button onClick={ removeAll }>Remove All</button>
            </div>
          </div>
        </div>
      );
    });
  }

  const handleCheckout = () => {
    props.resetOrder();
    window.scrollTo(0, 0);
    alert("Thanks for shopping with us!");
  };

  const renderCheckout = () => {
    const orderTotal = Math.round( (props.order.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0) + Number.EPSILON) * 100) / 100;
    return (
      <div className="checkout-wrapper">
        <p>Total: ${ orderTotal }</p>
        <button className="checkout" onClick={ handleCheckout }>Check Out</button>
      </div>
    ) 
  }

  return (
    <main className="cart">
      <h3>Your Shopping Cart</h3>
      { (props.order.length > 0) ? renderOrder() : <h4>Go buy something</h4> }
    </main>
  );
}
