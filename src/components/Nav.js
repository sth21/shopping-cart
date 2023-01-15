import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styling/nav.css';

import DonuttyLight from '../media/DonuttyLight.svg';
import DonuttyDark from '../media/DonuttyDark.svg';

export default function Nav(props) {  
  const location = useLocation();

  const [ donuttyLogo, setDonuttyLogo ] = useState(DonuttyLight);
  
  useEffect(() => {
    if (location.pathname !== "/shop") props.unloadItemView(undefined);
  }, [ location, props ]);

  useEffect(() => {
    setDonuttyLogo( (location.pathname !== "/") ? DonuttyDark : DonuttyLight );
  }, [ location ]);

  return (
    <nav className="nav" role="navigation">
      <img src={ donuttyLogo } alt="Logo of Donutty" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart({ props.orderCount })</Link>
      </div>
    </nav>
  );
}
