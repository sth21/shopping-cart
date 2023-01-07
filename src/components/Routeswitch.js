import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import Home from './Home';
import Itemview from './Itemview';
import Nav from './Nav';
import Shop from './Shop';

export default function Routeswitch(props) {

    const [ order, setOrder ] = useState([]);

    const [ orderCount, setOrderCount ] = useState(0);

    const [ activeItem, setActiveItem ] = useState();

    // Updates the order given a new item has been purchased
    // NEEDS TO BE TESTED
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
            setOrder((prevOrder) => prevOrder.concat(newItem));
        }
        setOrderCount((prevOrderCount) => prevOrderCount + addQuantity);
    };

    // Loads the item view when an item is clicked in the shop
    // NEEDS TO BE TESTED
    const toggleItemView = (item) => {
        setActiveItem(item);
    };

    return (
        <div className = "app">
            <Router>
                    <Nav orderCount = { orderCount } unloadItemView = { toggleItemView } />
                    <Routes>
                        <Route path = "/" element = { <Home /> } />
                        <Route path = "/shop" element = { ( typeof activeItem !== "object" ) 
                            ? <Shop loadItemView = { toggleItemView } /> 
                            : <Itemview updateOrder = { updateOrder } item = { activeItem } unloadItemView = { toggleItemView } /> 
                        } />
                        <Route path = "/cart" element = { <Cart order = { order } updateOrder = { updateOrder } /> } />
                    </Routes>
            </Router>
        </div>
    );
}