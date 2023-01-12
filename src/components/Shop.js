import { useState } from 'react';
import uniqid from 'uniqid';

// Donuts
import glazedDonut from '../media/glazed-donut.png';
import chocolateGlazedDonut from '../media/chocolate-glazed-donut.png';
import mapleFrostedDonut from '../media/maple-donut.png';
import appleFritterDonut from '../media/apple-fritter-donut.png';
import strawberryGlazedDonut from '../media/strawberry-glazed-donut.png';
import blueberryFrostedDonut from '../media/blueberry-frosted-donut.png';
import bostonCremeDonut from '../media/boston-creme-donut.png';
import jellyDonut from '../media/jelly-donut.png';
import glazedCrullerDonut from '../media/glazed-cruller-donut.png';

// Coffee
import brewedCoffee from '../media/brewed-coffee.png';
import mocha from '../media/mocha.png';
import latte from '../media/latte.png';
import americano from '../media/americano.png';
import espresso from '../media/espresso.png';
import cappuccino from '../media/cappuccino.png';

// Sandwiches
import eggCheese from '../media/egg-cheese.png';
import baconEggCheese from '../media/bacon-egg-cheese.png';
import turkeySausageEggCheese from '../media/turkeysausage-egg-cheese.png';
import sausageEggCheese from '../media/sausage-egg-cheese.png';

export default function Shop(props) {
  /*
  To test:
    handleClick - properly loads itemView if image clicked
    renderMenu - correctly loads each menu x3
    return - conditional disabled x3
  */


  const [ activeMenu, setActiveMenu ] = useState("donuts");

  // All menu items
  const items = {
    donuts: [
      { name: "Glazed Donut", price: .99, imgSrc: glazedDonut, key: uniqid() },
      { name: "Chocolate Glazed Donut", price: .99, imgSrc: chocolateGlazedDonut, key: uniqid() },
      { name: "Maple Frosted Donut", price: .99, imgSrc: mapleFrostedDonut, key: uniqid() },
      { name: "Apple Fritter Donut", price: .99, imgSrc: appleFritterDonut, key: uniqid() },
      { name: "Strawberry Glazed Donut", price: .99, imgSrc: strawberryGlazedDonut, key: uniqid() },
      { name: "Blueberry Frosted Donut", price: .99, imgSrc: blueberryFrostedDonut, key: uniqid() },
      { name: "Boston Creme Donut", price: 1.51, imgSrc: bostonCremeDonut, key: uniqid() },
      { name: "Jelly Donut", price: 1.51, imgSrc: jellyDonut, key: uniqid() },
      { name: "Glazed Cruller", price: 1.51, imgSrc: glazedCrullerDonut, key: uniqid() },
    ],
    coffee: [
      { name: "Brewed coffee", price: 1.51, imgSrc: brewedCoffee, key: uniqid() },
      { name: "Mocha", price: 2.01, imgSrc: mocha, key: uniqid() },
      { name: "Latte", price: 2.01, imgSrc: latte, key: uniqid() },
      { name: "Espresso", price: 1.01, imgSrc: espresso, key: uniqid() },
      { name: "Americano", price: 1.51, imgSrc: americano, key: uniqid() },
      { name: "Cappuccino", price: 2.01, imgSrc: cappuccino, key: uniqid() },
    ],
    sandwiches: [
      { name: "Egg & cheese muffin", price: 3.01, imgSrc: eggCheese, key: uniqid() },
      { name: "Bacon, egg & cheese bagel", price: 3.51, imgSrc: baconEggCheese, key: uniqid() },
      { name: "Turkey sausage, egg & cheese muffin", price: 3.01, imgSrc: turkeySausageEggCheese, key: uniqid() },
      { name: "Sausage, egg & cheese croissant", price: 3.51, imgSrc: sausageEggCheese, key: uniqid() },
    ],
  };

  const handleClick = (e) => {
    const item = (e.target.children.length === 0) ? e.target.parentNode : e.target;
    const index = item.dataset.index;
    const menu = item.dataset.menu;
    props.loadItemView( items[menu][index.toString()] );
  };

  const renderMenu = (menuName, items) => {
    return (
      <div className="items-container">
        { items.map((item, index) => {
          return (
            <div className="item" key={ item.key } onClick={ handleClick } role="button" data-index={ index } data-menu={ menuName }>
              <img src={ item.imgSrc } alt={ "Image of a " + item.name }></img>
              <h4>{ item.name }</h4>
            </div>
          );
        }) }
      </div>
    );
  };
  
  return (
    <main className="shop">
      <nav className="shop-nav">
        <h2 role="button" onClick={ () => setActiveMenu("donuts") } disabled={(activeMenu === "donuts")}>Donuts</h2>
        <h2 role="button" onClick={ () => setActiveMenu("coffee") } disabled={(activeMenu === "coffee")}>Coffee</h2>
        <h2 role="button" onClick={ () => setActiveMenu("sandwiches") } disabled={(activeMenu === "sandwiches")}>Sandwiches</h2>
      </nav>
      <div className="shop-wrapper">
        <h3>{ activeMenu }</h3>
        { renderMenu(activeMenu, items[ activeMenu ]) }
      </div>
    </main>
  );
}
