import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Itemview from '../components/Itemview';

jest.mock('../components/Itemview', () => ({ updateOrder, item, unloadItemView, handlePurchase, toggleItemView }) => (
    <div>
        <input type="number" id="quantity" min="1" max="24"></input>
        <button onClick = { handlePurchase } type="submit">Submit</button>
        <button onClick = { () => toggleItemView(undefined) }>Go back</button>
    </div>
));

test("Does not update order if no quantity exists", () => {
    const bar = jest.fn();
    render(<Itemview 
        handlePurchase = { () => {
            const quantity = parseInt(screen.getByRole("spinbutton").value, 10);
            if (quantity < 1 || isNaN(quantity)) return;
            bar();
        }}
    />);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(bar).not.toHaveBeenCalled();
});

test("Updates order if quantity exists", () => {
    const bar = jest.fn();
    render(<Itemview 
        handlePurchase = { () => {
            const quantity = parseInt(screen.getByRole("spinbutton").value, 10);
            if (quantity < 1 || isNaN(quantity)) return;
            bar();
        }}
    />);
    userEvent.type(screen.getByRole('spinbutton'), '7');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(bar).toHaveBeenCalled();
});

test("Calls updateOrder with proper quantity and item", () => {
    const bar = jest.fn();
    const fakeItem = { name: "Glazed Donut", price: .99 };
    render(<Itemview 
        handlePurchase = { () => {
            const quantity = parseInt(screen.getByRole("spinbutton").value, 10);
            fakeItem.quantity = quantity;
            bar(fakeItem);
        }}
    />);
    userEvent.type(screen.getByRole('spinbutton'), '7');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(bar).toHaveBeenCalledWith(fakeItem);
    expect(fakeItem.quantity).toEqual(7);
});

const updateOrder = jest.fn((order, newItem) => {
    const addQuantity = newItem.quantity;
    const currentItemIndex = order.findIndex((item) => item.name === newItem.name);
    if (currentItemIndex !== -1) {
        return order
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
            .filter((item) => item !== null);
    } else {
        return order.concat(newItem);
    }
});

test("Updates order if first item in order", () => {
    expect(updateOrder([], { name: "Glazed Donut", price: .99, quantity: 1 })).toEqual([{ name: "Glazed Donut", price: .99, quantity: 1 }]);
});

test("Updates order if not first item in order", () => {

});

test("Updates order by appending an item type not already in order", () => {

});

test("Remove an item from an order", () => {

});