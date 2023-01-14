import { Link } from 'react-router-dom';

import ovenWidget from '../media/oven.png';
import doughnutWidget from '../media/doughnut.png';

export default function Home() {
  return (
    <main className="home" role="main">
      <h2>Redefining the morning donut experience</h2>
      <div className="widget-container">
        <div className="widget">
          <img src={ ovenWidget } alt="Oven icon"></img>
          <h3>Always fresh</h3>
        </div>
        <div className="widget">
          <img src={ doughnutWidget } alt="Donut icon"></img>
          <h3>Diverse options</h3>
        </div>
      </div>
      <button className="call-to-action"><Link to="/shop">Shop Now</Link></button>
    </main>
  );
}
