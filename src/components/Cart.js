import React, { useEffect } from 'react';
export default function Cart(props) {

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('cart');

    return () => body.classList.remove('cart');
  }, []);

  const getOrderItem = (e) => {
    return { ...props.order[ e.target.parentNode.parentNode.dataset.index ]};
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

  const renderCart = () => {
    return props.order.map((item, index) => {
      return (
        <div className="cart-item-wrapper" key={ item.key } data-index={ index } >
          <img src={ item.imgSrc } alt={ "An image of a " + item.name}></img>
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
      );
    });
  }

  return (
    <main className="cart">
      <h3>Your Shopping Cart</h3>
      { renderCart() }
    </main>
  );
}
