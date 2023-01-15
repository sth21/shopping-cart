import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../styling/home.css';
import ovenWidget from '../media/oven.png';
import donutWidget from '../media/doughnut.png';
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
          <div className="widget-img">
            <img src={ ovenWidget } alt="Oven icon"></img>
          </div>
          <h3>Always <br /><span>fresh</span></h3>
        </div>
        <div className="widget">
        <div className="widget-img">
            <img src={ donutWidget } alt="Donut icon"></img>
          </div>
          <h3>Diverse <br /><span>options</span></h3>
        </div>
      </div>
      <button className="call-to-action"><Link to="/shop">Shop Now</Link></button>
    </main>
  );
}
