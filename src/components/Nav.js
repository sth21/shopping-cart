/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== "/shop") props.unloadItemView(undefined);
  }, [ location ]);

  return (
    <nav className="nav" role="navigation">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart({ props.orderCount })</Link>
    </nav>
  );
}
