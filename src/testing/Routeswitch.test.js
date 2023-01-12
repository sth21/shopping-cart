import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Routeswitch from '../components/Routeswitch';

jest.mock('../components/Routeswitch', () => (activeItem) => {
    return (
        <div>
            {
                ( typeof activeItem.activeItem !== "object" )
                ? <main className = "shop" role = "main"></main>
                : <main className = "itemview" role = "main"></main>
            }
        </div>
    );
});

test("Displays itemview when activeItem", () => {
    render( <Routeswitch activeItem={{ name: "Glazed Donut", price: .99, quantity: 1 }} /> );
    expect(screen.getByRole('main').className).toBe('itemview');
});    
    
test("Displays shop when no activeItem", () => {
    render( <Routeswitch activeItem={undefined} /> );
    expect(screen.getByRole('main').className).toBe('shop');
});