import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import Home from './Home';
import Itemview from './Itemview';
import Nav from './Nav';
import Shop from './Shop';

export default function Routeswitch() {
    const [ order, setOrder ] = useState([]);

    const [ orderCount, setOrderCount ] = useState(0);

    const [ activeItem, setActiveItem ] = useState();

    const updateOrder = (newItem) => {
        const addQuantity = newItem.quantity;
        const currentItemIndex = order.findIndex((item) => item.name === newItem.name);
        if (currentItemIndex !== -1) {
            setOrder((prevOrder) => 
                prevOrder
                    .map((item) => {
                        if (item.name === newItem.name) {
                            if (item.quantity + addQuantity < 1) {
                                return null;
                            } else {
                                return { ...item, ...{ quantity: item.quantity + addQuantity } };
                            }
                        } else {
                            return item;
                        }
                    })
                    .filter((item) => item !== null)
            );
        } else {
            setOrder((prevOrder) => [ ...prevOrder, newItem ]);
        }
        setOrderCount((prevOrderCount) => prevOrderCount + addQuantity);
    };

    const resetOrder = () => { setOrder([]); setOrderCount(0); setActiveItem() };

    return (
        <div className = "app">
            <Router>
                    <Nav orderCount = { orderCount } unloadItemView = { setActiveItem } />
                    <Routes>
                        <Route path = "/" element = { <Home /> } />
                        <Route path = "/shop" element = { ( typeof activeItem !== "object" ) 
                            ? <Shop loadItemView = { setActiveItem } /> 
                            : <Itemview updateOrder = { updateOrder } item = { activeItem } unloadItemView = { setActiveItem } /> 
                        } />
                        <Route path = "/cart" element = { <Cart order = { order } updateOrder = { updateOrder } resetOrder = { resetOrder } /> } />
                    </Routes>
            </Router>
        </div>
    );
}