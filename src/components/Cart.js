import React from 'react';

export default function Cart(props) {
  /*
  To test:
    getOrderItem - returns proper item from props.order
    removeOne - properly removes one of that item from order
    removeAll - properly remove all of that item from order
    renderCart - properly maps out all items from cart

  To implement:
    ability to checkout (clears order, gives alert message)
    ability to see total items and total cost
  */
  
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
