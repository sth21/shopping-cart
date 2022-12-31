import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Itemview from './Itemview';
import Nav from './Nav';
import Shop from './Shop';

export default function Routeswitch() {
    return (
        <div className="app">
            <Router>
                    <Nav />
                    <Routes>
                        <Route path="/shopping-cart" element={ <Home /> } />
                        <Route path="/shopping-cart/shop" element={ <Shop /> } />
                        <Route path="/shopping-cart/itemview" element={ <Itemview /> } />
                        <Route path="/shopping-cart/cart" element={ <Cart /> } />
                    </Routes>
            </Router>
        </div>
    );
}