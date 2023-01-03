/* eslint-disable testing-library/no-unnecessary-act */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Routeswitch from '../components/Routeswitch';
import updateOrder from '../components/Routeswitch';
import { waitFor } from '@testing-library/react';

test("Loads home page on Nav click", async () => {
    render(<Routeswitch />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    userEvent.click(homeLink);
    const mainPage = await screen.findByRole("main");
    expect(mainPage.className).toBe("home");
});

test("Loads shop page on Nav click", async () => {
    render(<Routeswitch />);
    const shopLink = screen.getByRole("link", { name: "Shop" });
    userEvent.click(shopLink);
    const mainPage = await screen.findByRole("main");
    expect(mainPage.className).toBe("shop");
});

test("Loads cart page on Nav click", async () => {
    render(<Routeswitch />);
    const cartLink = screen.getByRole("link", { name: /cart/i });
    userEvent.click(cartLink);
    const mainPage = await screen.findByRole("main");
    expect(mainPage.className).toBe("cart");
});