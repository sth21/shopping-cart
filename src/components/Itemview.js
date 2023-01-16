export default function Itemview(props) {
  /*
  To test:
    handlePurchase - does not add item on condition that no quantity exists
    handlePurchase - updates order properly
    unloadItemView - properly changes url
    displays proper count in cart
  */

  const handlePurchase = (e) => {
    e.preventDefault();
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    if (quantity < 1 || isNaN(quantity)) return;
    const newItem = props.item;
    newItem.quantity = quantity;
    props.updateOrder(newItem);
  };
  
  return (
    <main className="itemview" role="main">
      <div className="itemInfoWrapper">
        <img src={ props.item.imgSrc || "" } alt={ "Image of a " + (props.item.name || "") }></img>
        <div className="itemInfo">
          <h3>{ props.item.name || "" }</h3>
          <p>Description of item</p>
          <div className="controls">
            <div className="purchase-control">
              <div className="quantity-wrapper">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" min="1" max="24"></input>
              </div>
              <button onClick = { handlePurchase } type="submit">Add to cart</button>
            </div>
            <button className="go-back" onClick={ () => props.unloadItemView(undefined) }>Go Back</button>
          </div>
        </div>
      </div>
    </main>
  );
}
