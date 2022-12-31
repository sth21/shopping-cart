import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routeswitch from '../components/Routeswitch';

test("Renders Nav and Home by default", () => {
    render( <Routeswitch /> );
    expect( screen.getByText(/nav/i)).toBeInTheDocument();
    expect( screen.getByText(/home/i)).toBeInTheDocument();
});