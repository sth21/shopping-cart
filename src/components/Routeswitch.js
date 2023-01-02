import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Cart from './Cart';
import Home from './Home';
import Itemview from './Itemview';
import Nav from './Nav';
import Shop from './Shop';

export default function Routeswitch() {

    const [ order, setOrder ] = useState();

    const [ orderCount, setOrderCount ] = useState(0);

    // Resizes the number of unique items in the order that is displayed in the Cart nav link
    const resizeOrderDisplayCount = (diff) => setOrderCount(( prevOrderCount ) => prevOrderCount + diff);

    return (
        <div className = "app">
            <Router>
                    <Nav orderCount = { orderCount }/>
                    <Routes>
                        <Route path = "/" element = { <Home /> } />
                        <Route 
                            path = "/shop" 
                            element = { 
                                <Shop 
                                    // some function for changing order
                                /> 
                            }   
                        />
                        <Route path = "/itemview" element = { <Itemview /> } />
                        <Route 
                            path = "/cart" 
                            element = { 
                                <Cart 
                                    resizeOrderDisplayCount = { resizeOrderDisplayCount } 
                                    order = { order }
                                /> 
                            } 
                        />
                    </Routes>
            </Router>
        </div>
    );
}