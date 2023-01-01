import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Cart from './Cart';
import Home from './Home';
import Itemview from './Itemview';
import Nav from './Nav';
import Shop from './Shop';

export default function Routeswitch() {
    const [ orderCount, setOrderCount ] = useState(0);

    const handleOrderChange = (diff) => setOrderCount(( prevOrderCount ) => prevOrderCount + diff);

    return (
        <div className = "app">
            <Router>
                    <Nav orderCount = { orderCount }/>
                    <Routes>
                        <Route path = "/" element = { <Home /> } />
                        <Route path = "/shop" element = { <Shop /> } />
                        <Route path = "/itemview" element = { <Itemview /> } />
                        <Route 
                            path = "/cart" 
                            element = { 
                                <Cart 
                                    resizeOrderDisplayCount = { handleOrderChange } 
                                /> 
                            } 
                        />
                    </Routes>
            </Router>
        </div>
    );
}