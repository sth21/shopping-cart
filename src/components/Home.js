import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styling/home.css';
import ovenWidget from '../media/oven.png';
import doughnutWidget from '../media/doughnut.png';
import donuttyDark from '../media/DonuttyDark.svg';
import donuttyLight from '../media/DonuttyLight.svg';

export default function Home() {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('home');
    const donutty = document.querySelector(`img[alt="Logo of Donutty"]`);
    donutty.src = donuttyLight;

    return () => { 
      body.classList.remove('home');
      donutty.src = donuttyDark;
    };

  }, []);

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
