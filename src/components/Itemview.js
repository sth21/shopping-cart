export default function Itemview(props) {
  // Attains the quantity and item to be added to the order
  // NEED TO BE TESTED
  const handlePurchase = (e) => {
    e.preventDefault();
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    if (quantity < 1 || isNaN(quantity)) return;
    const newItem = props.item;
    newItem.quantity = quantity;
    props.updateOrder(newItem);
  };
  
  // NEEDS TO BE TESTED (navigate)
  return (
    <main className="itemview" role="main">
      <div className="itemInfoWrapper">
        <img src={ props.item.imgSrc } alt={ "Image of a " + props.item.name }></img>
        <div className="itemInfo">
          <h3>{ props.item.name }</h3>
          <p>Description of item</p>
          <div className="controls">
            <div className="purchase-control">
              <div className="quantity-wrapper">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" min="1" max="24"></input>
              </div>
              <button onClick = { handlePurchase } type="submit">Add to cart</button>
            </div>
            <button onClick={ () => props.unloadItemView(undefined) }>Go Back</button>
          </div>
        </div>
      </div>
    </main>
  );
}
