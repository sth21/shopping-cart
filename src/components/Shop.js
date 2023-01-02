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
import sausageEggCheese from '../media/sausage-egg-cheese';

export default function Shop() {
  /* TODO:
    1. Create an items array state
    2. Have the ability to render itemview and pass props with associated clicked item
  */

  const items = {
    donuts: [
      { name: "Glazed Donut", price: .99, imgSrc: glazedDonut },
      { name: "Chocolate Glazed Donut", price: .99, imgSrc: chocolateGlazedDonut },
      { name: "Maple Frosted Donut", price: .99, imgSrc: mapleFrostedDonut },
      { name: "Apple Fritter Donut", price: .99, imgSrc: appleFritterDonut },
      { name: "Strawberry Glazed Donut", price: .99, imgSrc: strawberryGlazedDonut },
      { name: "Blueberry Frosted Donut", price: .99, imgSrc: blueberryFrostedDonut },
      { name: "Boston Creme Donut", price: 1.51, imgSrc: bostonCremeDonut },
      { name: "Jelly Donut", price: 1.51, imgSrc: jellyDonut },
      { name: "Glazed Cruller", price: 1.51, imgSrc: glazedCrullerDonut },
    ],
    coffee: [
      { name: "Brewed coffee", price: 1.51, imgSrc: brewedCoffee },
      { name: "Mocha", price: 2.01, imgSrc: mocha },
      { name: "Latte", price: 2.01, imgSrc: latte },
      { name: "Espresso", price: 1.01, imgSrc: espresso},
      { name: "Americano", price: 1.51, imgSrc: americano },
      { name: "Cappuccino", price: 2.01, imgSrc: cappuccino },
    ],
    sandwiches: [
      { name: "Egg & cheese muffin", price: 3.01, imgSrc: eggCheese },
      { name: "Bacon, egg & cheese bagel", price: 3.51, imgSrc: baconEggCheese },
      { name: "Turkey sausage, egg & cheese muffin", price: 3.01, imgSrc: turkeySausageEggCheese },
      { name: "Sausage, egg & cheese croissant", price: 3.51, imgSrc: sausageEggCheese },
    ],
  };
  
  return (
    <main className="shop">Shop</main>
  );
}
