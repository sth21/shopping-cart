/* eslint-disable testing-library/no-unnecessary-act */

import { render, screen, within } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Shop from '../components/Shop';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';

test("Render donuts by default", () => {
    render(<Shop unloadItemView = { jest.fn() } />);
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("donuts");
});

test("Renders different menu pages on click", () => {
    render(<Shop unloadItemView = { jest.fn() } />);
    const donutsButton = screen.getByRole("button", { name: /donuts/i });
    const coffeeButton = screen.getByRole("button", { name: /coffee/i });
    const sandwichesButton = screen.getByRole("button", { name: /sandwiches/i });
    
    act(() => userEvent.click(coffeeButton));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("coffee");

    act(() => userEvent.click(sandwichesButton));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("sandwiches");

    act(() => userEvent.click(donutsButton));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("donuts");
});

test("Properly has current pages respective nav button disabled", () => {
    render(<Shop unloadItemView = { jest.fn() } />);
    const coffeeButton = screen.getByRole("button", { name: /coffee/i });
    const donutsButton = screen.getByRole("button", { name: /donuts/i });
    const sandwichesButton = screen.getByRole("button", { name: /sandwiches/i });

    act(() => userEvent.click(coffeeButton));
    expect(coffeeButton.attributes).toHaveProperty("disabled");
    expect(sandwichesButton.attributes).not.toHaveProperty("disabled");
    expect(donutsButton.attributes).not.toHaveProperty("disabled");
});

test("sets the correct item to active on click", () => {
    const foo = jest.fn();
    render(<Shop loadItemView = { foo } />);
    const glazedDonut = screen.getByText((content, element) => (
        element.dataset.index === '0' 
        && element.tagName.toLowerCase() === 'div'));
    userEvent.click(glazedDonut);
    expect(foo).toHaveBeenCalledWith(expect.objectContaining({
        name: "Glazed Donut",
        price: .99,
    }));
});

test("handles click bubbling", () => {
    const foo = jest.fn();
    render(<Shop loadItemView = { foo } />);
    const div = screen.getByText((content, element) => (
        element.dataset.index === '1' 
        && element.tagName.toLowerCase() === 'div'));

    const img = screen.getByText((content, element) => {
        if (element.dataset.index === '1' && element.tagName.toLowerCase() === 'div') {
            return within(element).getByRole("img");
        }
    });

    const h4 = screen.getByText((content, element) => {
        if (element.dataset.index === '1' && element.tagName.toLowerCase() === 'div') {
            return within(element).getByRole("heading", { level: 4 });
        }
    });

    userEvent.click(div);
    expect(foo).toHaveBeenCalledWith(expect.objectContaining({
        name: "Chocolate Glazed Donut",
        price: .99,
    }));

    userEvent.click(img);
    expect(foo).toHaveBeenCalledWith(expect.objectContaining({
        name: "Chocolate Glazed Donut",
        price: .99,
    }));

    userEvent.click(h4);
    expect(foo).toHaveBeenCalledWith(expect.objectContaining({
        name: "Chocolate Glazed Donut",
        price: .99,
    }));
});