import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styling/nav.css';
import donuttyLogo from '../media/DonuttyLight.svg';

export default function Nav(props) {  
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== "/shop") props.unloadItemView(undefined);
  }, [ location, props ]);

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
