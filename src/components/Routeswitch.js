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
                        <Route path="/" element={ <Home /> } />
                        <Route path="/shop" element={ <Shop /> } />
                        <Route path="/itemview" element={ <Itemview /> } />
                        <Route path="/cart" element={ <Cart /> } />
                    </Routes>
            </Router>
        </div>
    );
}