import React from 'react';

export default function Cart(props) {
  /* TODO:
    1. Create order state
    2. Add method to take in props and append to order (must set orderCount)
    3. Add method to remove order items (must set orderCount)
    4. Add method to checkout (clears order, and orderCount)
  */
  
  // Acquires item using orderIndex DOM property
  // NEEDS TO BE TESTED
  const getOrderItem = (e) => {
    return { ...props.order[ e.target.parentNode.parentNode.dataset.index ]};
  }

  // Removes a single item from order
  // NEEDS TO BE TESTED
  const removeOne = (e) => {
    const item = getOrderItem(e);
    item.quantity = -1;
    props.updateOrder(item);
  };

  // Removes all of an item from order
  // NEEDS TO BE TESTED
  const removeAll = (e) => {
    const item = getOrderItem(e);
    item.quantity *= -1;
    props.updateOrder(item);
  };
  
  // Maps out the respective items in the cart to be displayed in UI
  // NEEDS TO BE TESTED
  const renderCart = () => {
    return props.order.map((item, index) => {
      return (
        <div className="cart-item-wrapper" key={ item.key } data-index={ index } >
          <img src={ item.imgSrc } alt={ "An image of a " + item.name}></img>
          <div className="cart-item-header">
            <h4>{ item.name }</h4>
            <p>{ Math.round( (item.quantity * item.price + Number.EPSILON) * 100 ) / 100 }</p>
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
